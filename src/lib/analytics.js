// Lightweight first-party analytics — pageviews, clicks, and an engagement
// beacon (max scroll depth + dwell time), posted to /api/track. No third party.
//
// A random visitor id (localStorage) and a per-tab session id (sessionStorage)
// let the server count unique visitors, sessions, new-vs-returning and bounce
// rate. Both are random opaque ids — no PII, no cross-site tracking, no cookie.
// Conversions (contact-form submits) are recorded server-side, not here.

let country = null;

function uid() {
  try {
    if (window.crypto && crypto.randomUUID) return crypto.randomUUID();
  } catch {
    /* fall through */
  }
  return 'x' + Math.random().toString(36).slice(2) + Date.now().toString(36);
}

// Read (or create) an id in web storage. Returns the value + whether we just
// created it. Degrades gracefully when storage is unavailable (private mode).
function persistentId(area, key) {
  try {
    const s = window[area];
    const existing = s.getItem(key);
    if (existing) return { value: existing, created: false };
    const v = uid();
    s.setItem(key, v);
    return { value: v, created: true };
  } catch {
    return { value: uid(), created: true };
  }
}

const visitor = persistentId('localStorage', 'jz_vid');
const session = persistentId('sessionStorage', 'jz_sid');
let firstPageviewSent = false;

function utmParams() {
  const out = {};
  try {
    const p = new URLSearchParams(window.location.search);
    ['utm_source', 'utm_medium', 'utm_campaign'].forEach((k) => {
      const v = p.get(k);
      if (v) out[k] = v.slice(0, 120);
    });
  } catch {
    /* ignore */
  }
  return out;
}

function send(payload) {
  try {
    const body = JSON.stringify({
      path: window.location.pathname + window.location.hash,
      lang: document.documentElement.lang || 'en',
      country,
      ref: document.referrer || null,
      vid: visitor.value,
      sid: session.value,
      ...payload,
    });
    if (navigator.sendBeacon) {
      navigator.sendBeacon('/api/track', new Blob([body], { type: 'application/json' }));
    } else {
      fetch('/api/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body,
        keepalive: true,
      }).catch(() => {});
    }
  } catch {
    /* never let analytics break the page */
  }
}

function pageview() {
  const isNew = visitor.created && !firstPageviewSent;
  firstPageviewSent = true;
  send({ type: 'pageview', new: isNew, ...utmParams() });
}

function onClick(e) {
  const el = e.target.closest('a[href], [data-track]');
  if (!el) return;
  const target = el.getAttribute('data-track') || el.getAttribute('href') || null;
  const label = (el.getAttribute('aria-label') || el.textContent || '').trim().slice(0, 120);
  send({ type: 'click', target, label });
}

// --- engagement: max scroll depth + dwell, flushed once when the view leaves ---
let maxScroll = 0;
let startedAt = Date.now();
let engagementSent = false;

function trackScroll() {
  try {
    const doc = document.documentElement;
    const scrollable = doc.scrollHeight - window.innerHeight;
    const pct = scrollable > 0
      ? Math.round(((window.scrollY || doc.scrollTop) / scrollable) * 100)
      : 100;
    if (pct > maxScroll) maxScroll = Math.min(100, Math.max(0, pct));
  } catch {
    /* ignore */
  }
}

function flushEngagement() {
  if (engagementSent) return;
  engagementSent = true;
  send({ type: 'engagement', scroll: maxScroll, dwell: Math.round((Date.now() - startedAt) / 1000) });
}

let started = false;

export function initAnalytics() {
  if (started || typeof window === 'undefined') return;
  started = true;

  // Reuse the geo lookup the language detector uses (cached server-side) so each
  // event carries a country without extra work.
  fetch('/api/geo')
    .then((r) => (r.ok ? r.json() : null))
    .then((d) => {
      country = d && d.country ? String(d.country).toUpperCase() : null;
    })
    .catch(() => {})
    .finally(pageview);

  // SPA section nav: flush the leaving view's engagement, then start fresh.
  window.addEventListener('hashchange', () => {
    flushEngagement();
    engagementSent = false;
    maxScroll = 0;
    startedAt = Date.now();
    pageview();
  });

  document.addEventListener('click', onClick, { capture: true });
  window.addEventListener('scroll', trackScroll, { passive: true });
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') flushEngagement();
  });
  window.addEventListener('pagehide', flushEngagement);
}
