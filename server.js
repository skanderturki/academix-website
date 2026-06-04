const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
const express = require('express');
const rateLimit = require('express-rate-limit');
const Database = require('better-sqlite3');
const { Resend } = require('resend');

// ---------------------------------------------------------------------------
// First-party analytics — embedded SQLite. Pageviews + clicks are written to a
// local DB (persisted via a Docker volume in production). No third party.
// ---------------------------------------------------------------------------
const ANALYTICS_DB = process.env.ANALYTICS_DB || path.join(__dirname, 'data', 'analytics.db');
const ANALYTICS_TOKEN = process.env.ANALYTICS_TOKEN || '';
fs.mkdirSync(path.dirname(ANALYTICS_DB), { recursive: true });
const db = new Database(ANALYTICS_DB);
db.pragma('journal_mode = WAL');
db.exec(`CREATE TABLE IF NOT EXISTS events (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  ts TEXT NOT NULL,
  type TEXT NOT NULL,
  path TEXT,
  lang TEXT,
  country TEXT,
  target TEXT,
  label TEXT,
  referrer TEXT,
  ua TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  visitor TEXT,
  session TEXT,
  is_new INTEGER,
  device TEXT,
  browser TEXT,
  os TEXT,
  scroll INTEGER,
  dwell INTEGER
)`);
// Migrate pre-existing DBs: add any columns introduced after the first deploy.
{
  const have = new Set(db.prepare('PRAGMA table_info(events)').all().map((c) => c.name));
  const cols = [
    ['utm_source', 'TEXT'], ['utm_medium', 'TEXT'], ['utm_campaign', 'TEXT'],
    ['visitor', 'TEXT'], ['session', 'TEXT'], ['is_new', 'INTEGER'],
    ['device', 'TEXT'], ['browser', 'TEXT'], ['os', 'TEXT'],
    ['scroll', 'INTEGER'], ['dwell', 'INTEGER'],
  ];
  for (const [col, t] of cols) if (!have.has(col)) db.exec(`ALTER TABLE events ADD COLUMN ${col} ${t}`);
}
db.exec('CREATE INDEX IF NOT EXISTS idx_events_ts ON events(ts)');
db.exec('CREATE INDEX IF NOT EXISTS idx_events_session ON events(session)');
db.exec('CREATE INDEX IF NOT EXISTS idx_events_visitor ON events(visitor)');

const insertEvent = db.prepare(
  `INSERT INTO events
     (ts,type,path,lang,country,target,label,referrer,ua,
      utm_source,utm_medium,utm_campaign,visitor,session,is_new,
      device,browser,os,scroll,dwell)
   VALUES
     (@ts,@type,@path,@lang,@country,@target,@label,@referrer,@ua,
      @utm_source,@utm_medium,@utm_campaign,@visitor,@session,@is_new,
      @device,@browser,@os,@scroll,@dwell)`
);

// Coarse device / browser / OS from the user-agent. Best-effort; unknowns
// bucket as 'Other' / 'Unknown'. Keeps us from storing/parsing raw UA anywhere
// downstream.
function parseUA(ua) {
  ua = String(ua || '');
  const device = /Mobi|iPhone|iPod|Android.*Mobile/i.test(ua)
    ? 'Mobile'
    : /iPad|Tablet|Android/i.test(ua)
      ? 'Tablet'
      : ua ? 'Desktop' : 'Unknown';
  let browser = 'Other';
  if (/Edg\//i.test(ua)) browser = 'Edge';
  else if (/OPR\/|Opera/i.test(ua)) browser = 'Opera';
  else if (/Chrome\//i.test(ua) && !/Chromium/i.test(ua)) browser = 'Chrome';
  else if (/Firefox\//i.test(ua)) browser = 'Firefox';
  else if (/Version\/.*Safari/i.test(ua)) browser = 'Safari';
  else if (/MSIE|Trident/i.test(ua)) browser = 'IE';
  let os = 'Other';
  if (/Windows NT/i.test(ua)) os = 'Windows';
  else if (/iPhone|iPad|iPod/i.test(ua)) os = 'iOS';
  else if (/Mac OS X/i.test(ua)) os = 'macOS';
  else if (/Android/i.test(ua)) os = 'Android';
  else if (/Linux/i.test(ua)) os = 'Linux';
  return { device, browser, os };
}

// Insert with sane defaults so callers only pass what they have.
function recordEvent(e) {
  insertEvent.run(
    Object.assign(
      {
        ts: new Date().toISOString(), type: 'pageview',
        path: null, lang: null, country: null, target: null, label: null,
        referrer: null, ua: null, utm_source: null, utm_medium: null,
        utm_campaign: null, visitor: null, session: null, is_new: 0,
        device: null, browser: null, os: null, scroll: null, dwell: null,
      },
      e
    )
  );
}

const PORT = parseInt(process.env.PORT, 10) || 3000;
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const RESEND_FROM = process.env.RESEND_FROM || 'Academix <noreply@academix.tn>';
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'contact@academix.tn';

// Optional preview password gate. When SITE_PASSWORD is empty, the gate is a
// no-op and the site is fully public. Setting SITE_PASSWORD activates HTTP
// Basic Auth on all non-/api routes.
const SITE_USERNAME = process.env.SITE_USERNAME || 'preview';
const SITE_PASSWORD = process.env.SITE_PASSWORD || '';

if (!RESEND_API_KEY) {
  console.warn('[Resend] RESEND_API_KEY is not set — /api/contact will fail in production');
}

const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null;

// Constant-time string comparison. Pads to equal length first so the early
// return on length mismatch doesn't leak via timing.
function safeEqual(a, b) {
  const ab = Buffer.from(String(a));
  const bb = Buffer.from(String(b));
  const len = Math.max(ab.length, bb.length, 1);
  const ap = Buffer.alloc(len);
  const bp = Buffer.alloc(len);
  ab.copy(ap);
  bb.copy(bp);
  return crypto.timingSafeEqual(ap, bp) && ab.length === bb.length;
}

const app = express();

// Trust first proxy so rate-limiter and req.ip work behind host nginx
app.set('trust proxy', 1);

app.use(express.json({ limit: '100kb' }));

// Site-wide HTTP Basic Auth gate — activates only when SITE_PASSWORD is set.
// /api/* routes always bypass so the contact form and health checks keep
// working for monitors and form submissions from the gated preview.
if (SITE_PASSWORD) {
  console.log('[auth] Site password gate is ENABLED (user: %s)', SITE_USERNAME);
  app.use((req, res, next) => {
    if (req.path.startsWith('/api/')) return next();

    const header = req.headers.authorization || '';
    const [scheme, encoded] = header.split(' ');

    if (scheme === 'Basic' && encoded) {
      const decoded = Buffer.from(encoded, 'base64').toString('utf-8');
      const idx = decoded.indexOf(':');
      const user = idx >= 0 ? decoded.slice(0, idx) : '';
      const pass = idx >= 0 ? decoded.slice(idx + 1) : '';
      if (safeEqual(user, SITE_USERNAME) && safeEqual(pass, SITE_PASSWORD)) {
        return next();
      }
    }

    res.set('WWW-Authenticate', 'Basic realm="skasystems.com preview"');
    res.status(401).type('text/plain').send('Authentication required.');
  });
}

// Rate limit the contact endpoint: 5 requests per 15 minutes per IP
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many contact requests. Please try again later.' },
});

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function validateContact(body) {
  const errors = [];
  const { name, email, serviceType, message } = body || {};

  if (!name || typeof name !== 'string' || name.trim().length === 0) {
    errors.push('Name is required');
  }
  if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push('A valid email is required');
  }
  if (!serviceType || typeof serviceType !== 'string') {
    errors.push('Service type is required');
  }
  if (!message || typeof message !== 'string' || message.trim().length < 20) {
    errors.push('Message must be at least 20 characters');
  }

  // Cap lengths to avoid abuse
  if (name && name.length > 200) errors.push('Name is too long');
  if (email && email.length > 200) errors.push('Email is too long');
  if (serviceType && serviceType.length > 200) errors.push('Service type is too long');
  if (message && message.length > 5000) errors.push('Message is too long');

  return errors;
}

// POST /api/contact — send contact form message via Resend
app.post('/api/contact', contactLimiter, async (req, res) => {
  const errors = validateContact(req.body);
  if (errors.length > 0) {
    return res.status(400).json({ error: errors.join('. ') });
  }

  if (!resend) {
    return res.status(503).json({ error: 'Email service not configured' });
  }

  const { name, email, organization, serviceType, message } = req.body;

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <h2 style="color: #0e2a47;">New contact from academix.tn</h2>
      <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr><td style="padding: 8px; font-weight: bold; width: 140px;">Name:</td><td style="padding: 8px;">${escapeHtml(name)}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
        <tr><td style="padding: 8px; font-weight: bold;">Organization:</td><td style="padding: 8px;">${escapeHtml(organization || 'N/A')}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold;">Service:</td><td style="padding: 8px;">${escapeHtml(serviceType)}</td></tr>
      </table>
      <h3 style="color: #0d47a1;">Message</h3>
      <div style="background: #f5f5f5; border-radius: 8px; padding: 16px; white-space: pre-wrap;">${escapeHtml(message)}</div>
    </div>
  `;

  try {
    const { data, error } = await resend.emails.send({
      from: RESEND_FROM,
      to: CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `[academix.tn] ${serviceType} — ${name}`,
      html,
    });

    if (error) {
      console.error('[Resend] Failed to send contact email:', error.message || error);
      return res.status(502).json({ error: 'Failed to send message. Please email us directly.' });
    }

    console.log(`[Resend] Contact email sent (id=${data?.id}) from ${email}`);
    // Record the lead as a conversion (server-side = 1 conversion per real email).
    try {
      recordEvent({
        type: 'conversion',
        target: 'contact_form',
        label: String(serviceType || '').slice(0, 160),
        referrer: req.headers.referer ? String(req.headers.referer).slice(0, 512) : null,
        ua: String(req.headers['user-agent'] || '').slice(0, 256),
      });
    } catch {
      /* analytics must never break a successful submission */
    }
    return res.json({ success: true });
  } catch (err) {
    console.error('[Resend] Unexpected error sending contact email:', err);
    return res.status(500).json({ error: 'Unexpected error. Please try again later.' });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Geo lookup — returns the 2-letter country of the visitor's IP, used by the
// client to pick a default language (French for TN/FR, English otherwise).
// Resolves server-side via geojs.io (no API key, no bundled GeoIP DB). The
// client IP comes from X-Forwarded-For via `trust proxy` above.
app.get('/api/geo', async (req, res) => {
  const ip = String(req.ip || '').replace(/^::ffff:/, '');
  try {
    const r = await fetch(
      `https://get.geojs.io/v1/ip/country/${encodeURIComponent(ip)}.json`,
      { signal: AbortSignal.timeout(2500) }
    );
    const data = await r.json();
    const country = data && data.country ? String(data.country).toUpperCase() : null;
    res.set('Cache-Control', 'public, max-age=86400');
    return res.json({ country });
  } catch {
    return res.json({ country: null });
  }
});

// Analytics ingest — pageview / click / conversion / engagement. 204, rate-limited.
const trackLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 600,
  standardHeaders: true,
  legacyHeaders: false,
});
app.post('/api/track', trackLimiter, (req, res) => {
  try {
    const b = req.body || {};
    const type = String(b.type || '');
    if (['pageview', 'click', 'conversion', 'engagement'].includes(type)) {
      const ua = String(req.headers['user-agent'] || '').slice(0, 256);
      const { device, browser, os } = parseUA(ua);
      const str = (v, n) => (v == null || v === '' ? null : String(v).slice(0, n));
      const int = (v, lo, hi) =>
        Number.isFinite(v) ? Math.max(lo, Math.min(hi, Math.round(v))) : null;
      recordEvent({
        type,
        path: str(b.path, 512),
        lang: str(b.lang, 8),
        country: str(b.country, 4),
        target: str(b.target, 512),
        label: str(b.label, 160),
        referrer: str(b.ref, 512),
        ua,
        utm_source: str(b.utm_source, 80),
        utm_medium: str(b.utm_medium, 80),
        utm_campaign: str(b.utm_campaign, 120),
        visitor: str(b.vid, 64),
        session: str(b.sid, 64),
        is_new: b.new ? 1 : 0,
        device,
        browser,
        os,
        scroll: int(b.scroll, 0, 100),
        dwell: int(b.dwell, 0, 86400),
      });
    }
  } catch {
    /* never fail a tracking call */
  }
  res.status(204).end();
});

// Classify a referrer URL into an acquisition channel. Internal/self referrers
// and no-referrer both count as Direct.
const SELF_HOST_RE = /(^|\.)(jahiz\.tn|academix\.tn)$/i;
function channelOf(ref) {
  if (!ref) return 'Direct';
  let host;
  try { host = new URL(ref).hostname.replace(/^www\./, ''); } catch { return 'Other'; }
  if (SELF_HOST_RE.test(host)) return 'Direct';
  if (/(google|bing|duckduckgo|yahoo|baidu|yandex|ecosia)\./i.test(host)) return 'Search';
  if (/(linkedin|facebook|fb\.com|instagram|t\.co|twitter|x\.com|youtube|reddit|pinterest|tiktok)\./i.test(host)) return 'Social';
  return 'Referral';
}

// Aggregate the local events DB since an ISO date.
function computeStats(since) {
  const all = (sql) => db.prepare(sql).all(since);
  const one = (sql) => db.prepare(sql).get(since) || {};

  const totals = all("SELECT type, COUNT(*) n FROM events WHERE ts>=? GROUP BY type");
  const pageviews = one("SELECT COUNT(*) n FROM events WHERE type='pageview' AND ts>=?").n || 0;
  const aud = one(`SELECT
      COUNT(DISTINCT visitor) visitors,
      COUNT(DISTINCT session) sessions,
      COUNT(DISTINCT CASE WHEN is_new=1 THEN visitor END) newVisitors
    FROM events WHERE ts>=? AND visitor IS NOT NULL`);
  const bounced = one(`SELECT COUNT(*) n FROM (
      SELECT session FROM events WHERE type='pageview' AND session IS NOT NULL AND ts>=?
      GROUP BY session HAVING COUNT(*)=1)`).n || 0;
  const eng = one("SELECT AVG(scroll) s, AVG(dwell) d FROM events WHERE type='engagement' AND scroll IS NOT NULL AND ts>=?");
  const conversions = (totals.find((t) => t.type === 'conversion') || {}).n || 0;
  const visitors = aud.visitors || 0;
  const sessions = aud.sessions || 0;

  const refRows = all("SELECT referrer, COUNT(*) n FROM events WHERE type='pageview' AND ts>=? GROUP BY referrer");
  const channelMap = {};
  const hostMap = {};
  for (const r of refRows) {
    const c = channelOf(r.referrer);
    channelMap[c] = (channelMap[c] || 0) + r.n;
    if (r.referrer) {
      let h;
      try { h = new URL(r.referrer).hostname.replace(/^www\./, ''); } catch { h = null; }
      if (h && !SELF_HOST_RE.test(h)) hostMap[h] = (hostMap[h] || 0) + r.n;
    }
  }
  const byChannel = Object.entries(channelMap).map(([channel, n]) => ({ channel, n })).sort((a, b) => b.n - a.n);
  const topReferrers = Object.entries(hostMap).map(([referrer, n]) => ({ referrer, n })).sort((a, b) => b.n - a.n).slice(0, 25);

  return {
    since,
    totals,
    byDay: all("SELECT substr(ts,1,10) d, type, COUNT(*) n FROM events WHERE ts>=? GROUP BY d, type ORDER BY d"),
    audience: {
      visitors, sessions, pageviews,
      newVisitors: aud.newVisitors || 0,
      returningVisitors: Math.max(0, visitors - (aud.newVisitors || 0)),
      bounceRate: sessions ? Math.round((bounced / sessions) * 100) : 0,
      pagesPerSession: sessions ? +(pageviews / sessions).toFixed(2) : 0,
      avgScroll: eng.s != null ? Math.round(eng.s) : null,
      avgDwell: eng.d != null ? Math.round(eng.d) : null,
      conversions,
      conversionRate: visitors ? +((conversions / visitors) * 100).toFixed(1) : 0,
    },
    topPages: all("SELECT path, COUNT(*) n FROM events WHERE type='pageview' AND ts>=? GROUP BY path ORDER BY n DESC LIMIT 25"),
    landingPages: all(`SELECT path, COUNT(*) n FROM events e
      WHERE type='pageview' AND session IS NOT NULL AND ts>=?
        AND ts=(SELECT MIN(ts) FROM events WHERE session=e.session AND type='pageview')
      GROUP BY path ORDER BY n DESC LIMIT 25`),
    topClicks: all("SELECT target, COUNT(*) n FROM events WHERE type='click' AND ts>=? GROUP BY target ORDER BY n DESC LIMIT 25"),
    byCountry: all("SELECT country, COUNT(*) n FROM events WHERE type='pageview' AND ts>=? GROUP BY country ORDER BY n DESC LIMIT 25"),
    byLang: all("SELECT lang, COUNT(*) n FROM events WHERE type='pageview' AND ts>=? GROUP BY lang ORDER BY n DESC"),
    byChannel,
    topReferrers,
    byCampaign: all("SELECT utm_campaign, utm_source, COUNT(*) n FROM events WHERE type='pageview' AND utm_source IS NOT NULL AND ts>=? GROUP BY utm_campaign, utm_source ORDER BY n DESC LIMIT 25"),
    byDevice: all("SELECT device, COUNT(*) n FROM events WHERE type='pageview' AND ts>=? GROUP BY device ORDER BY n DESC"),
    byBrowser: all("SELECT browser, COUNT(*) n FROM events WHERE type='pageview' AND ts>=? GROUP BY browser ORDER BY n DESC"),
    byOS: all("SELECT os, COUNT(*) n FROM events WHERE type='pageview' AND ts>=? GROUP BY os ORDER BY n DESC"),
    conversionsByService: all("SELECT label, COUNT(*) n FROM events WHERE type='conversion' AND ts>=? GROUP BY label ORDER BY n DESC LIMIT 25"),
  };
}

// Analytics readout — aggregates gated by ANALYTICS_TOKEN (?token=).
app.get('/api/stats', (req, res) => {
  if (!ANALYTICS_TOKEN || req.query.token !== ANALYTICS_TOKEN) {
    return res.status(403).json({ error: 'forbidden' });
  }
  res.json(computeStats(String(req.query.since || '1970-01-01')));
});

// Serve the CRA build
const buildPath = path.join(__dirname, 'build');
app.use(express.static(buildPath));

// SPA fallback: any non-API route returns index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`[academix] Main website server running on port ${PORT}`);
});
