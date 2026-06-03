// Lightweight first-party analytics — posts pageviews and clicks to /api/track
// (server stores them in an embedded SQLite DB). No cookies, no third party.
//
// - pageview: on init and on hashchange (SPA section/view nav).
// - click: delegated listener on any <a href> or element with [data-track].
// Events are sent with navigator.sendBeacon when available (survives unload),
// falling back to fetch(keepalive).

let country = null;

function send(payload) {
  try {
    const body = JSON.stringify({
      path: window.location.pathname + window.location.hash,
      lang: document.documentElement.lang || 'en',
      country,
      ref: document.referrer || null,
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
  send({ type: 'pageview' });
}

function onClick(e) {
  const el = e.target.closest('a[href], [data-track]');
  if (!el) return;
  const target = el.getAttribute('data-track') || el.getAttribute('href') || null;
  const label = (el.getAttribute('aria-label') || el.textContent || '').trim().slice(0, 120);
  send({ type: 'click', target, label });
}

let started = false;

export function initAnalytics() {
  if (started || typeof window === 'undefined') return;
  started = true;

  fetch('/api/geo')
    .then((r) => (r.ok ? r.json() : null))
    .then((d) => {
      country = d && d.country ? String(d.country).toUpperCase() : null;
    })
    .catch(() => {})
    .finally(pageview);

  window.addEventListener('hashchange', pageview);
  document.addEventListener('click', onClick, { capture: true });
}
