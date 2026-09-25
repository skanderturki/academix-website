// "Request a quote" for an Academix license: POST /api/quote.
//
// This site runs on its own server, away from the platform. It keeps nothing:
// each request is checked here, then RELAYED to the platform's control plane
// (ORDER_INTAKE_URL, default https://admin.academix.tn/api/cp/intake/orders),
// signed with the secret the two servers share (ORDER_INTAKE_SECRET):
//
//   X-Academix-Signature: t=<unix seconds>,v1=<hex HMAC-SHA256 of "<t>.<body>">
//
// That endpoint can only file a new order; the operator prices it in the
// control plane and the customer gets the quote by email from there. The
// platform's edge also only accepts the relay from this server's IP.
//
// The customer is answered here, in their language, with the order's reference
// ("request received"). If the platform can't be reached after one retry, the
// request is emailed to the team instead so no request is lost, and the
// customer is still told it was received.
//
// Field rules mirror server/routes/orderIntake.js in abet_quality; keep them in
// step.

const crypto = require('crypto');

const TEXT = [
  ['customer.institution', true, 200], ['customer.country', false, 100],
  ['customer.contactName', true, 200], ['customer.contactEmail', true, 200],
  ['customer.contactPhone', false, 50], ['customer.contactRole', false, 100],
  ['request.existingHost', false, 200], ['request.subdomain', false, 63],
  ['request.departmentNames', false, 2000], ['request.message', false, 5000],
  ['invoicing.legalName', false, 200], ['invoicing.taxId', false, 100], ['invoicing.address', false, 500],
];
const NUMBERS = [['request.departments', 1, 200], ['request.maxActiveCurricula', 1, 20], ['request.termYears', 1, 3]];

const get = (o, p) => p.split('.').reduce((x, k) => (x == null ? undefined : x[k]), o);
const set = (o, p, v) => {
  const ks = p.split('.');
  ks.slice(0, -1).reduce((x, k) => (x[k] = x[k] || {}), o)[ks[ks.length - 1]] = v;
};

// A clean copy holding only the known fields, plus the list of problems.
function parseQuote(body) {
  const errors = [];
  const order = {};
  for (const [p, required, max] of TEXT) {
    const v = get(body, p);
    if (v != null && typeof v !== 'string') { errors.push(p); continue; }
    const s = (v || '').trim();
    if ((required && !s) || s.length > max) errors.push(p);
    set(order, p, s);
  }
  for (const [p, min, max] of NUMBERS) {
    const v = get(body, p);
    const n = v == null || v === '' ? min : Number(v);
    if (!Number.isInteger(n) || n < min || n > max) errors.push(p);
    set(order, p, n);
  }
  order.customer.contactEmail = order.customer.contactEmail.toLowerCase();
  if (order.customer.contactEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(order.customer.contactEmail)) errors.push('customer.contactEmail');
  order.request.subdomain = order.request.subdomain.toLowerCase();
  if (order.request.subdomain && !/^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/.test(order.request.subdomain)) errors.push('request.subdomain');
  order.request.kind = get(body, 'request.kind') === 'existing' ? 'existing' : 'new';
  if (order.request.kind === 'existing' && !order.request.existingHost) errors.push('request.existingHost');
  order.locale = body.locale === 'fr' ? 'fr' : 'en';
  return { order, errors: [...new Set(errors)] };
}

const sign = (raw, secret, t = Math.floor(Date.now() / 1000)) =>
  `t=${t},v1=${crypto.createHmac('sha256', secret).update(`${t}.${raw}`).digest('hex')}`;

// POST the order to the control plane. Returns { reference } or throws; a 4xx
// is final, anything else (network, timeout, 5xx) is retried once with the
// same requestId, which the platform files only once.
async function relay(order, { url, secret, fetchImpl = fetch, timeoutMs = 10000 }) {
  const raw = JSON.stringify(order);
  let lastErr;
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const res = await fetchImpl(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-Academix-Signature': sign(raw, secret) },
        body: raw,
        signal: AbortSignal.timeout(timeoutMs),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.reference) return { reference: data.reference };
      const err = new Error(`Intake answered ${res.status}: ${data.message || ''}`);
      err.status = res.status;
      if (res.status >= 400 && res.status < 500) throw Object.assign(err, { final: true });
      lastErr = err;
    } catch (err) {
      if (err.final) throw err;
      lastErr = err;
    }
  }
  throw lastErr;
}

const esc = (s) => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');

function summary(r, fr) {
  const s = (n, one, many) => `${n} ${n === 1 ? one : many}`;
  return fr
    ? `${s(r.departments, 'département', 'départements')}, jusqu'à ${s(r.maxActiveCurricula, 'programme actif', 'programmes actifs')} par département, ${s(r.termYears, 'an', 'ans')}`
    : `${s(r.departments, 'department', 'departments')}, up to ${s(r.maxActiveCurricula, 'active curriculum', 'active curricula')} per department, ${s(r.termYears, 'year', 'years')}`;
}

// "We have your request" — to the customer, in their language.
function receivedEmail(order, reference) {
  const fr = order.locale === 'fr';
  const c = order.customer;
  const lines = fr ? [
    `Bonjour ${c.contactName},`,
    `Nous avons bien reçu votre demande de devis Academix pour ${c.institution}${reference ? ` (référence ${reference})` : ''}.`,
    `Votre demande : ${summary(order.request, true)}.`,
    'Nous vous enverrons notre devis par e-mail sous deux jours ouvrés. Pour toute précision, répondez simplement à ce message.',
  ] : [
    `Dear ${c.contactName},`,
    `We have received your request for an Academix quote for ${c.institution}${reference ? ` (reference ${reference})` : ''}.`,
    `Your request: ${summary(order.request, false)}.`,
    'We will email you our quote within two working days. If there is anything to add, simply reply to this message.',
  ];
  const sign = fr ? "L'équipe Academix" : 'The Academix team';
  return {
    subject: fr ? `Votre demande de devis Academix${reference ? ` — ${reference}` : ''}` : `Your Academix quote request${reference ? ` — ${reference}` : ''}`,
    text: `${lines.join('\n\n')}\n\n${sign}`,
    html: `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#1f2937;">${lines.map((l) => `<p style="font-size:14px;line-height:1.5;">${esc(l)}</p>`).join('')}<p style="font-size:14px;">${sign}<br><span style="color:#6b7280;">Jahiz Digital Solutions</span></p></div>`,
  };
}

// The platform could not be reached: the whole request, to the team.
function fallbackEmail(order, error) {
  const rows = [
    ['Institution', `${order.customer.institution}${order.customer.country ? ` (${order.customer.country})` : ''}`],
    ['Contact', `${order.customer.contactName}${order.customer.contactRole ? `, ${order.customer.contactRole}` : ''} <${order.customer.contactEmail}> ${order.customer.contactPhone}`],
    ['Request', `${order.request.kind === 'existing' ? `Existing (${order.request.existingHost})` : 'New'}: ${summary(order.request, false)}`],
    ['Wished address', order.request.subdomain ? `${order.request.subdomain}.academix.tn` : ''],
    ['Departments', order.request.departmentNames],
    ['Message', order.request.message],
    ['Invoicing', [order.invoicing.legalName, order.invoicing.taxId, order.invoicing.address].filter(Boolean).join(' · ')],
    ['Language', order.locale],
    ['Request id', order.requestId],
  ];
  return {
    subject: `[academix.tn] Quote request NOT filed in the control plane — ${order.customer.institution}`.slice(0, 200),
    text: `The platform could not be reached (${error}). Enter this request by hand.\n\n${rows.map(([k, v]) => `${k}: ${v}`).join('\n')}`,
    html: `<p>The platform could not be reached (${esc(error)}). Enter this request by hand.</p><table>${rows.map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#555;vertical-align:top;">${esc(k)}</td><td style="white-space:pre-wrap;">${esc(v)}</td></tr>`).join('')}</table>`,
  };
}

// Mounts POST /api/quote. deps: { resend, from, teamEmail, limiter, recordEvent,
// intakeUrl, intakeSecret, fetchImpl }.
function mountQuote(app, deps) {
  const { resend, from, teamEmail, limiter, recordEvent, fetchImpl } = deps;
  const url = deps.intakeUrl || 'https://admin.academix.tn/api/cp/intake/orders';
  const secret = deps.intakeSecret;

  app.post('/api/quote', limiter, async (req, res) => {
    const body = req.body || {};
    // Honeypot: a field people never see. A bot that fills it gets a
    // convincing answer and nothing is filed.
    if (body.website) return res.json({ reference: null });
    if (!secret || !resend) return res.status(503).json({ error: 'unavailable' });

    const { order, errors } = parseQuote(body);
    if (errors.length) return res.status(400).json({ error: 'invalid', fields: errors });
    order.requestId = crypto.randomUUID();

    let reference = null;
    try {
      ({ reference } = await relay(order, { url, secret, fetchImpl }));
    } catch (err) {
      console.error('[quote] relay failed:', err.message);
      if (err.status === 400) return res.status(400).json({ error: 'invalid' });
      try {
        const m = fallbackEmail(order, err.message);
        const { error } = await resend.emails.send({ from, to: teamEmail, replyTo: order.customer.contactEmail, subject: m.subject, html: m.html, text: m.text });
        if (error) throw new Error(error.message || String(error));
      } catch (mailErr) {
        console.error('[quote] fallback email failed too:', mailErr.message);
        return res.status(502).json({ error: 'failed' });
      }
    }

    try {
      const m = receivedEmail(order, reference);
      await resend.emails.send({ from, to: order.customer.contactEmail, replyTo: teamEmail, subject: m.subject, html: m.html, text: m.text });
    } catch (err) {
      console.error('[quote] confirmation email failed:', err.message); // the request is filed; don't fail it
    }
    try {
      recordEvent({ type: 'conversion', target: 'quote_form', label: `${order.request.departments} dept`, ua: String(req.headers['user-agent'] || '').slice(0, 256) });
    } catch { /* analytics must never break a submission */ }
    return res.status(201).json({ reference });
  });
}

module.exports = { mountQuote, parseQuote, relay, sign, receivedEmail, fallbackEmail };
