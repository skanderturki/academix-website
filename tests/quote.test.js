// node --test tests/  — the "request a quote" relay (quote.js).
const { test } = require('node:test');
const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const express = require('express');
const { mountQuote, parseQuote, relay, receivedEmail } = require('../quote');

const SECRET = 's3cret';
const valid = (over = {}) => ({
  locale: 'fr',
  customer: { institution: 'Université de Test', contactName: 'Amel', contactEmail: 'Amel@Univ.TN' },
  request: { kind: 'new', subdomain: 'UTest', departments: 3, maxActiveCurricula: 2, termYears: 1 },
  invoicing: {},
  ...over,
});

// The platform's check (abet_quality server/routes/orderIntake.js), verbatim in
// substance: the relay must produce what it accepts.
const platformAccepts = (header, raw, secret = SECRET) => {
  const parts = Object.fromEntries(header.split(',').map((p) => p.split('=')));
  const expected = crypto.createHmac('sha256', secret).update(`${parts.t}.`).update(raw).digest('hex');
  return Math.abs(Date.now() / 1000 - Number(parts.t)) <= 300 && parts.v1 === expected;
};

test('parseQuote keeps only known fields, normalises, and names what is wrong', () => {
  const { order, errors } = parseQuote({ ...valid(), status: 'activated', quote: { amount: 1 } });
  assert.deepEqual(errors, []);
  assert.equal(order.customer.contactEmail, 'amel@univ.tn');
  assert.equal(order.request.subdomain, 'utest');
  assert.equal(order.status, undefined);
  assert.equal(order.quote, undefined);
  assert.equal(order.locale, 'fr');

  const bad = parseQuote({ customer: { institution: '', contactName: 'x', contactEmail: 'nope' }, request: { departments: 0, subdomain: 'a b', kind: 'existing' } });
  assert.deepEqual(bad.errors.sort(), ['customer.contactEmail', 'customer.institution', 'request.departments', 'request.existingHost', 'request.subdomain'].sort());
});

test('relay signs the exact body the way the platform checks it', async () => {
  let seen;
  const fetchImpl = async (url, init) => { seen = init; return { ok: true, status: 201, json: async () => ({ reference: 'AX-1' }) }; };
  const { order } = parseQuote(valid());
  const out = await relay(order, { url: 'x', secret: SECRET, fetchImpl });
  assert.equal(out.reference, 'AX-1');
  assert.ok(platformAccepts(seen.headers['X-Academix-Signature'], seen.body));
  assert.ok(!platformAccepts(seen.headers['X-Academix-Signature'], seen.body, 'other'));
});

test('relay retries once on a 5xx or network error, never on a 4xx', async () => {
  let calls = 0;
  const flaky = async () => { calls++; if (calls === 1) throw new Error('ECONNRESET'); return { ok: true, status: 201, json: async () => ({ reference: 'AX-2' }) }; };
  assert.equal((await relay({}, { url: 'x', secret: SECRET, fetchImpl: flaky })).reference, 'AX-2');
  assert.equal(calls, 2);

  calls = 0;
  const refused = async () => { calls++; return { ok: false, status: 401, json: async () => ({ message: 'Invalid signature' }) }; };
  await assert.rejects(relay({}, { url: 'x', secret: SECRET, fetchImpl: refused }), /401/);
  assert.equal(calls, 1);
});

test('the confirmation is in the customer\'s language, with the reference', () => {
  const { order } = parseQuote(valid());
  const m = receivedEmail(order, 'AX-260925-7K3Q');
  assert.match(m.subject, /Votre demande de devis Academix — AX-260925-7K3Q/);
  assert.match(m.text, /3 départements, jusqu'à 2 programmes actifs par département, 1 an/);
});

// The route end to end, against a fake platform and a fake Resend.
const serve = async (deps) => {
  const app = express();
  app.use(express.json());
  const sent = [];
  mountQuote(app, {
    resend: { emails: { send: async (m) => { sent.push(m); return { data: { id: '1' } }; } } },
    from: 'Academix <contact@jahiz.tn>', teamEmail: 'contact@jahiz.tn',
    limiter: (_q, _s, n) => n(), recordEvent: () => {}, intakeSecret: SECRET, intakeUrl: 'http://platform', ...deps,
  });
  const server = app.listen(0);
  const base = `http://127.0.0.1:${server.address().port}`;
  const post = (body) => fetch(`${base}/api/quote`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
  return { post, sent, close: () => { server.closeAllConnections(); server.close(); } };
};

test('POST /api/quote files the order and confirms to the customer', async () => {
  const s = await serve({ fetchImpl: async () => ({ ok: true, status: 201, json: async () => ({ reference: 'AX-3' }) }) });
  try {
    const res = await s.post(valid());
    assert.equal(res.status, 201);
    assert.deepEqual(await res.json(), { reference: 'AX-3' });
    assert.equal(s.sent.length, 1);
    assert.equal(s.sent[0].to, 'amel@univ.tn');
    assert.equal(s.sent[0].replyTo, 'contact@jahiz.tn');
  } finally { s.close(); }
});

test('POST /api/quote: a platform outage emails the team the whole request instead', async () => {
  const s = await serve({ fetchImpl: async () => { throw new Error('ETIMEDOUT'); } });
  try {
    const res = await s.post(valid());
    assert.equal(res.status, 201);
    assert.deepEqual(await res.json(), { reference: null });
    assert.equal(s.sent[0].to, 'contact@jahiz.tn');
    assert.match(s.sent[0].subject, /NOT filed/);
    assert.match(s.sent[0].text, /Université de Test/);
    assert.equal(s.sent[1].to, 'amel@univ.tn'); // the customer is still answered
  } finally { s.close(); }
});

test('POST /api/quote: bad fields are named; bots and a missing secret get nothing filed', async () => {
  let relayed = 0;
  const s = await serve({ fetchImpl: async () => { relayed++; return { ok: true, status: 201, json: async () => ({ reference: 'AX-4' }) }; } });
  try {
    const bad = await s.post(valid({ customer: { institution: '', contactName: 'A', contactEmail: 'a@b.tn' } }));
    assert.equal(bad.status, 400);
    assert.deepEqual((await bad.json()).fields, ['customer.institution']);
    const bot = await s.post({ ...valid(), website: 'http://spam' });
    assert.equal(bot.status, 200);
    assert.equal(relayed, 0);
    assert.equal(s.sent.length, 0);
  } finally { s.close(); }
  const off = await serve({ intakeSecret: '' });
  try { assert.equal((await off.post(valid())).status, 503); } finally { off.close(); }
});
