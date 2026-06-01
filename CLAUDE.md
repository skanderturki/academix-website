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
  lucide-react, Radix UI primitives. Dark navy + steel-blue brand palette defined
  in `tailwind.config.js` under `theme.extend.colors.brand` (deep/navy/blue/steel/
  light/glow). Design-system helpers (`.bg-mesh-*`, `.grid-overlay`,
  `.text-gradient-brand`, animations) live in `src/index.css` + `tailwind.config.js`.
- **Backend**: `server.js` — Express serving the CRA `build/` with a `/api/contact`
  endpoint (Resend email), `express-rate-limit`, an optional HTTP Basic-Auth
  preview gate (`SITE_PASSWORD`), constant-time auth compare, and SPA fallback.
- **Email**: Resend (`RESEND_API_KEY`, `RESEND_FROM`, `CONTACT_TO_EMAIL`).

## Key files

| Path | Role |
|------|------|
| `src/App.js` | Header (mesh banner + sticky nav), footer, hash-based view routing |
| `src/components/Home.js` | Hero/About/Services/WhyChoose/Contact; `GridGlowBackground` canvas + `fadeUp` motion variants |
| `src/components/ContactForm.js` | Resend-backed contact form (name/email/org/serviceType/message) |
| `src/components/{Login,Register,Portfolio}.js` | Auth views + portfolio |
| `src/contexts/AuthContext.js` | Client auth state |
| `src/components/ui/*` | shadcn-style primitives (button/card/input/label/textarea/alert) |
| `server.js` | Express + Resend + rate limit + Basic-Auth gate + SPA fallback |
| `Dockerfile` | Multi-stage CRA build → slim Node runtime serving `build/` |
| `docker-compose.yml` | Multi-app orchestration (see below) |

## Sibling apps in this repo

This repo also contains other deployable apps, each its own sub-project:
`PMP website/`, `academic_quality_generic/`, `mygalery/nadart_evo/`, `aichat/`,
`curriculum-modeler/`, `student-advisor/`. Treat them as separate codebases.

> **`academic_quality_generic/`** (the Academic Quality Platform) is part of
> academix but does **not** deploy via the droplet / docker-compose recipe below
> — its primary deployment is **Render** (`render.yaml`), with a single-container
> droplet demo at `demo.quality.academix.tn`. See its own `CLAUDE.md`.

## Deployment (droplet + system nginx)

`docker-compose.yml` runs each app as a container bound to a host port; the
droplet's **system nginx** (TLS via Let's Encrypt) reverse-proxies each subdomain
to its port. The in-compose nginx service is intentionally disabled.

| Service | Host port | Subdomain |
|---------|-----------|-----------|
| `react-app` (this site) | 3000 | `academix.tn` (apex) |
| `nadart-evo` | 3001 | (gallery) |
| `pmp-website` | 3002 | `pmp.academix.tn` |
| `n8n` | 5678 | `n8n.academix.tn` |

Env vars are namespaced (`MAIN_*`, `PMP_*`, `NADART_*`) — see `.env.example`.
New subdomains follow the same recipe: container on a free port + nginx server
block + certbot cert + DNS record (DNS is on OVHcloud).

## Local commands

```bash
npm start          # CRA dev server :3000
npm run build      # production build -> build/
npm run serve      # node server.js (serves build/ + /api/contact)
```

## Conventions

- Keep new UI in the existing brand palette + design-system helpers; match the
  dark, glassy, mesh-gradient aesthetic already established in `Home.js`/`index.css`.
- All marketing copy is inline in the components (this site is English; not i18n'd).
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
