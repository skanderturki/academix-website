# CLAUDE.md — academix.tn

Context for AI agents working in this repo. (The `README.md` here is the default
Create React App boilerplate and can be ignored.) See the workspace-root
[`../CLAUDE.md`](../CLAUDE.md) for how this fits with the rest of Jahiz.

## What this is

- **academix.tn** — the university-focused website of **Jahiz Digital Solutions**
  (the company), and the home of all its university-related projects/services. It
  is a *second* company site, sibling to the main corporate site at jahiz.tn.
- a polished single-page marketing site (React + Express) for Jahiz's
  university-related software tools.

> Older copies of this file titled it "skasystems-main"; that was a stale name
> for Jahiz.

## Stack

- **Frontend**: React 18 (Create React App), Tailwind CSS 3, framer-motion,
  lucide-react, Radix UI primitives. The 2026 redesign: deep navy + gold
  (`#060e1c` ground, `#e9b872` accent; `navy`/`gold`/`steel` in
  `tailwind.config.js`), Instrument Serif for display, Hanken Grotesk for text,
  IBM Plex Mono for eyebrows and data. Bilingual EN/FR: every public string lives
  in `src/i18n/content.js`, read through `useLanguage()`.
- **Backend**: `server.js` — Express serving the CRA `build/` with a `/api/contact`
  endpoint (Resend email), `/api/quote` (see "License quotes" below), `express-rate-limit`, an optional HTTP Basic-Auth
  preview gate (`SITE_PASSWORD`), constant-time auth compare, and SPA fallback.
- **Email**: Resend (`RESEND_API_KEY`, `RESEND_FROM`, `CONTACT_TO_EMAIL`).

## Key files

| Path | Role |
|------|------|
| `src/App.js` | Header (mesh banner + sticky nav), footer, hash-based view routing |
| `src/components/Home.js` | Hero/About/Services/WhyChoose/Contact; `GridGlowBackground` canvas + `fadeUp` motion variants |
| `src/components/ContactForm.js` | Resend-backed contact form (name/email/org/serviceType/message) |
| `src/components/QuoteRequest.js` | `#quote`: "Request a quote" for an Academix licence (header CTA; also on the quality-platform service card) |
| `quote.js` | `POST /api/quote`: validates, relays the request signed to the platform's control plane, emails the customer a confirmation; `tests/quote.test.js` (`npm run test:server`) |
| `src/components/{Login,Register,Portfolio}.js` | Auth views + portfolio |
| `src/contexts/AuthContext.js` | Client auth state |
| `src/components/ui/*` | shadcn-style primitives (button/card/input/label/textarea/alert) |
| `server.js` | Express + Resend + rate limit + Basic-Auth gate + SPA fallback |
| `Dockerfile` | Multi-stage CRA build → slim Node runtime serving `build/` |
| `docker-compose.droplet-b.yml` | Production services on droplet B (see Deployment) |

## Sibling apps in this repo

This repo also contains other deployable apps, each its own sub-project:
`PMP website/`, `academic_quality_generic/`, `mygalery/nadart_evo/`, `aichat/`,
`curriculum-modeler/`, `student-advisor/`. Treat them as separate codebases.

> **`academic_quality_generic/`** (the Academic Quality prototype) is no longer
> deployed anywhere: quality.academix.tn was retired on 2026-09-25. The product
> is `d:/jahiz/abet_quality` (admin.academix.tn and the customer platforms).

## Deployment (droplet B + Caddy)

Everything public from this repo runs on **droplet B (165.232.175.224,
DigitalOcean SGP1)** from `docker-compose.droplet-b.yml`, with settings in
`.env.droplet-b` (see `.env.droplet-b.example`), checked out at
`/opt/jahiz/academix-website`:

| Service | Container port | Domain |
|---------|----------------|--------|
| `academix` (this site) | 3000 | `academix.tn` (www redirects) |
| `jahiz` (the `jahiz_main` repo) | 3000 | `jahiz.tn` (www redirects) |
| `pmp` | 3002 | `pmp.academix.tn` |
| `gallery` (nadart-evo) | 3001 | `gallery.jahiz.tn` |

bacinfo's **Caddy** (`/home/bacinfo/bacinfo`, repo `skanderturki/bacinfo`) is the
only public entry point and obtains Let's Encrypt certificates automatically;
the site blocks live in bacinfo's `Caddyfile` and reach these containers by
service name on the shared `bacinfo_app` network (no host ports). After a
Caddyfile pull, `docker restart bacinfo-caddy-1` (it is a single-file mount).

Images are built off the droplet and loaded over SSH (the droplet has no GHCR
login and 2 GB of RAM is too little for CRA builds):

```bash
docker build --platform linux/amd64 -f Dockerfile -t ghcr.io/skanderturki/academix-site:latest .
docker save ghcr.io/skanderturki/academix-site:latest | gzip -1 | ssh droplet-b 'gunzip | docker load'
ssh droplet-b 'cd /opt/jahiz/academix-website && git pull && docker compose -f docker-compose.droplet-b.yml --env-file .env.droplet-b up -d --no-build academix'
```

History: droplet A (178.128.51.137: jahiz.tn, academix.tn, n8n.academix.tn behind
system nginx) was destroyed on 2026-09-25 and n8n retired with it; the two sites
moved to droplet B. quality.academix.tn (the Academic Quality prototype) was
retired the same day. DNS for all domains is on OVHcloud.

## Local commands

```bash
npm start          # CRA dev server :3000
npm run build      # production build -> build/
npm run serve      # node server.js (serves build/ + /api/contact)
```

## License quotes (academix.tn → admin.academix.tn)

The site keeps nothing. `quote.js` relays each request to the platform's
control plane (`ORDER_INTAKE_URL`, default
`https://admin.academix.tn/api/cp/intake/orders`, in the abet_quality repo),
signed with `ORDER_INTAKE_SECRET` (`MAIN_ORDER_INTAKE_SECRET` in
`.env.droplet-a`; the same value as `ORDER_INTAKE_SECRET` on the platform
server): header `X-Academix-Signature: t=<unix>,v1=<hex HMAC-SHA256 of
"<t>.<body>">`. The platform also only accepts the relay from this server's IP
(`INTAKE_ALLOWED_IPS` there). Operators price, invoice and activate the order in
the control plane, which sends the quote and welcome emails; this site only
sends the "request received" confirmation. If the platform can't be reached the
whole request is emailed to `CONTACT_TO_EMAIL` so nothing is lost. The field
rules in `quote.js` mirror `server/routes/orderIntake.js` in abet_quality: change
both together. A `website` honeypot field silently drops bots; 5 requests per
hour per IP.

## Conventions

- Keep new UI in the existing brand palette + design-system helpers; match the
  dark, glassy, mesh-gradient aesthetic already established in `Home.js`/`index.css`.
- All marketing copy lives in `src/i18n/content.js`, in English and French; keep both in step.
- Don't commit secrets — Resend key and gate password come from env / `.env`.

## Session history (distilled)

- **2026-05**: This site was used as the design-system reference for a new
  bilingual **Jahiz Digital Solutions** marketing site (built in a separate
  project, mirroring this stack/palette family). No functional changes were made
  here during that work — it was read-only reference.
- **2026-06**: Workspace consolidated under `d:\jahiz` (see root `CLAUDE.md`).
  This file's title/company name was corrected from the legacy "skasystems" to
  Jahiz, the deployment table apex row clarified to `academix.tn`, and
  `academic_quality_generic/` added to the sibling-apps list. Docs-only.
