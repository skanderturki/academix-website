// Static content pages for academix.tn, generated after `react-scripts build`
// (package.json "build"). Writes, into build/:
//   pages/<lang>/<slug>.html   every content page, in English and French
//   fr-index.html              the home page for /fr (French meta + summary)
//   404.html                   the not-found page (served with status 404)
//   sitemap.xml, llms.txt      for search engines and AI crawlers
//   llms-full.txt              the English guides in full, as Markdown, for AI crawlers
//   pages-manifest.json        route -> file, read by server.js
// and adds hreflang links to build/index.html.
//
// Everything is plain HTML, readable without JavaScript. Content lives in
// content/en.mjs and content/fr.mjs (same keys, same order); the Program
// Criteria tables come from data/program-criteria.json, exported from
// abet_quality's registry.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { page, renderBlocks, textOf, url, abs, SITE, esc } from './layout.mjs';
import * as EN from './content/en.mjs';
import * as FR from './content/fr.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const BUILD = path.resolve(HERE, '../../build');
const UPDATED = '2026-09-26';
const FAQ_ABET_COUNT = 12; // the first twelve FAQ items are about ABET, the rest about Academix

const manifest = JSON.parse(fs.readFileSync(path.join(BUILD, 'asset-manifest.json'), 'utf8'));
const css = manifest.files['main.css'].replace(/^\//, '');
const pc = JSON.parse(fs.readFileSync(path.join(HERE, 'data/program-criteria.json'), 'utf8')).commissions;
const LANGS = { en: EN, fr: FR };

if (EN.faqItems.length !== FR.faqItems.length) throw new Error('FAQ items differ between en and fr');
for (const k of Object.keys(EN.pages)) if (!FR.pages[k]) throw new Error(`fr is missing page ${k}`);

const society = (p) => (p.societies && p.societies[0] ? p.societies[0].replace(/^(Lead|Co-Lead)\s+Societ(y|ies):\s*/i, '') : p.leadSociety);
const orgLd = { '@type': 'Organization', name: 'Academix', alternateName: 'Academix ABET', url: SITE, logo: `${SITE}/logo-192.png`, parentOrganization: { '@type': 'Organization', name: 'Jahiz Digital Solutions', url: 'https://jahiz.tn' } };
const GUIDES = Object.keys(EN.pages).filter((k) => EN.pages[k].guide);
const NL = '\n';

// A closing list of the other ABET guides, so each guide links to the rest.
function moreGuides(lang, slug) {
  const C = LANGS[lang];
  const items = GUIDES.filter((k) => k !== slug).map((k) => `<a href="${url(lang, k)}">${C.pages[k].h1}</a>`);
  return [{ h2: C.ui.moreGuides, id: 'more-guides' }, { ul: items }];
}

function commissionTable(lang, commission, limit) {
  const C = LANGS[lang];
  const rows = pc[commission].slice(0, limit || undefined).map((p) => {
    const status = p.status === 'proposed' ? C.ui.proposed : p.hasProposedChange ? C.ui.proposedChange : p.verbatim ? C.ui.full : '';
    const level = p.levels && p.levels.length === 1 && p.levels[0] === 'associate' ? ` <span class="font-mono text-[11px] text-[#8293af]">(${C.ui.levelsNote})</span>` : '';
    return [esc(p.name) + level, esc(society(p)), status];
  });
  return renderBlocks([{ table: { caption: `${commission} ${C.ui.programCriteria}`, head: [C.ui.colDiscipline, C.ui.colSociety, C.ui.colStatus], rows } }]);
}

function fillPlaceholders(lang, blocks) {
  const C = LANGS[lang];
  return blocks.map((b) => {
    if (b.html === '__COMMISSION_INDEX__') {
      return { html: ['EAC', 'ETAC', 'CAC'].map((c) => `<h2 id="${c.toLowerCase()}" class="mt-14 mb-2 scroll-mt-28 font-serif text-[30px] font-normal text-[#fbfcfe]">${C.ui.commissionNames[c]}</h2><p class="my-2 text-[16px] text-[#98a7c1]">${C.ui.commissionIntro(pc[c].length, c)}</p>${commissionTable(lang, c, 6)}<p class="my-3"><a href="${url(lang, `program-criteria/${c.toLowerCase()}`)}" class="font-semibold text-[#e9b872] underline underline-offset-2">${C.ui.seeAll(pc[c].length)} →</a></p>`).join('') };
    }
    if (b.faq === '__FAQ_ABET__') return { faq: C.faqItems.slice(0, FAQ_ABET_COUNT) };
    if (b.faq === '__FAQ_ACADEMIX__') return { faq: C.faqItems.slice(FAQ_ABET_COUNT) };
    return b;
  });
}

// Links inside content are written for the English site; on the French one they
// point to the French page.
const localize = (lang, html) => (lang === 'fr'
  ? html.replace(/href="\/(?!\/|fr\b|static\b)([^"#]*)(#[^"]*)?"/g, (m, p, h) => `href="/fr${p ? `/${p}` : ''}${h || ''}"`)
  : html);

const routes = {};
const sitemap = [];
const write = (rel, html) => {
  const f = path.join(BUILD, rel);
  fs.mkdirSync(path.dirname(f), { recursive: true });
  fs.writeFileSync(f, html);
};

for (const slug of Object.keys(EN.pages)) {
  for (const lang of ['en', 'fr']) {
    const C = LANGS[lang];
    let def = C.pages[slug];
    let blocks;
    const crumbs = [];
    if (def.commission) {
      const c = def.commission;
      const meta = C.commissionPages[c];
      def = { ...meta, eyebrow: C.ui.programCriteria, type: 'CollectionPage' };
      blocks = [{ html: commissionTable(lang, c) }]; // the lede already gives the count
      crumbs.push([C.ui.programCriteria, url(lang, 'program-criteria')], [c, url(lang, slug)]);
    } else {
      blocks = fillPlaceholders(lang, def.blocks);
      if (def.guide) blocks = [...blocks, ...moreGuides(lang, slug)];
      crumbs.push([textOf(def.eyebrow || def.h1), url(lang, slug)]);
    }
    const body = localize(lang, renderBlocks(blocks));
    const pageUrl = abs(lang, slug);
    const jsonLd = [];
    if (def.type === 'FAQPage') {
      jsonLd.push({ '@context': 'https://schema.org', '@type': 'FAQPage', inLanguage: lang, url: pageUrl,
        mainEntity: C.faqItems.map(([q, a]) => ({ '@type': 'Question', name: textOf(q), acceptedAnswer: { '@type': 'Answer', text: textOf(a) } })) });
    } else {
      jsonLd.push({ '@context': 'https://schema.org', '@type': def.type === 'Article' ? 'Article' : def.type || 'WebPage',
        ...(def.type === 'Article' ? { headline: textOf(def.h1) } : { name: textOf(def.title) }),
        description: def.description, inLanguage: lang, url: pageUrl, dateModified: UPDATED,
        ...(def.type === 'Article' ? { datePublished: UPDATED, author: orgLd, publisher: orgLd, mainEntityOfPage: pageUrl } : { isPartOf: { '@type': 'WebSite', name: 'Academix', url: SITE } }),
      });
    }
    const html = page({ lang, slug, title: def.title, description: def.description, h1: def.h1, eyebrow: def.eyebrow, lede: def.lede ? localize(lang, def.lede) : '', body, jsonLd, breadcrumbs: crumbs, css, updated: UPDATED });
    const file = `pages/${lang}/${slug}.html`;
    write(file, html);
    routes[url(lang, slug)] = file;
  }
  sitemap.push(slug);
}

// ---- home: hreflang on /, and a French copy for /fr ------------------------------
let home = fs.readFileSync(path.join(BUILD, 'index.html'), 'utf8');
const alternates = `<link rel="alternate" hreflang="en" href="${SITE}/"/><link rel="alternate" hreflang="fr" href="${SITE}/fr"/><link rel="alternate" hreflang="x-default" href="${SITE}/"/>`;
if (!home.includes('hreflang="fr"')) home = home.replace('<link rel="canonical" href="https://academix.tn/"/>', `<link rel="canonical" href="https://academix.tn/"/>${alternates}`);
if (!home.includes('hreflang="fr"')) throw new Error('could not add hreflang to index.html');
fs.writeFileSync(path.join(BUILD, 'index.html'), home);

const fr = FR.home;
let frHome = home
  .replace('<html lang="en">', '<html lang="fr">')
  .replace(/<title>[^<]*<\/title>/, `<title>${esc(fr.title)}</title>`)
  .replace(/<meta name="description" content="[^"]*"\/>/, `<meta name="description" content="${esc(fr.description)}"/>`)
  .replace(/<meta property="og:title" content="[^"]*"\/>/, `<meta property="og:title" content="${esc(fr.title)}"/>`)
  .replace(/<meta property="og:description" content="[^"]*"\/>/, `<meta property="og:description" content="${esc(fr.description)}"/>`)
  .replace('<meta property="og:url" content="https://academix.tn/"/>', '<meta property="og:url" content="https://academix.tn/fr"/>')
  .replace('<meta property="og:locale" content="en_US"/>', '<meta property="og:locale" content="fr_FR"/>')
  .replace('<link rel="canonical" href="https://academix.tn/"/>', '<link rel="canonical" href="https://academix.tn/fr"/>')
  .replace(/<main>[\s\S]*?<\/main>/, `<main>${fr.fallback}</main>`);
if (!frHome.includes('lang="fr"') || !frHome.includes(fr.fallback.slice(0, 40))) throw new Error('fr home not built');
fs.writeFileSync(path.join(BUILD, 'fr-index.html'), frHome);
routes['/fr'] = 'fr-index.html';

// ---- 404 --------------------------------------------------------------------------
const notFound = page({ lang: 'en', slug: '404', title: 'Page not found | Academix', description: 'This page does not exist.', h1: 'This page does not exist', eyebrow: '404',
  lede: 'The address may be mistyped, or the page may have moved. <a href="/" class="text-[#e9b872] underline">Go to the home page</a>, read <a href="/what-is-abet-accreditation" class="text-[#e9b872] underline">what ABET accreditation is</a>, or <a href="/faq" class="text-[#e9b872] underline">see the FAQ</a>.',
  body: '', css, otherLangExists: false })
  .replace('<meta name="theme-color" content="#0a1628" />', '<meta name="theme-color" content="#0a1628" />\n<meta name="robots" content="noindex" />');
write('404.html', notFound);

// ---- sitemap ------------------------------------------------------------------------
const entry = (slugPath) => {
  const en = slugPath === '' ? `${SITE}/` : abs('en', slugPath);
  const frU = slugPath === '' ? `${SITE}/fr` : abs('fr', slugPath);
  const alt = `<xhtml:link rel="alternate" hreflang="en" href="${en}"/><xhtml:link rel="alternate" hreflang="fr" href="${frU}"/><xhtml:link rel="alternate" hreflang="x-default" href="${en}"/>`;
  return [en, frU].map((loc) => `  <url><loc>${loc}</loc><lastmod>${UPDATED}</lastmod>${alt}</url>`).join('\n');
};
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${['', ...sitemap].map(entry).join('\n')}
</urlset>
`);

// ---- llms.txt (https://llmstxt.org) --------------------------------------------------
const P = EN.pages;
write('llms.txt', `# Academix

> Academix is ABET accreditation software for universities, made by Jahiz Digital Solutions. It covers Student Outcomes assessment (PEOs, Student Outcomes, performance indicators and course learning outcomes), course reports, an ABET Readiness Center, continuous improvement and a generated ABET Self-Study Report, for all four ABET commissions (EAC, CAC, ETAC, ANSAC). It is licensed per department, per year, and hosted, with one database per institution.

Academix is independent software and is not affiliated with or endorsed by ABET. Facts about ABET on this site come from ABET's 2026–27 Accreditation Policy and Procedure Manual, the commissions' criteria and abet.org.

## ABET accreditation guides
${GUIDES.map((k) => `- [${textOf(P[k].h1)}](${SITE}/${k}): ${P[k].description}`).join(NL)}
- [Frequently asked questions](${SITE}/faq): ${P.faq.description}

The full text of these guides, in one file: ${SITE}/llms-full.txt

## Product
- [ABET Self-Study Report](${SITE}/abet-self-study-report): ${P['abet-self-study-report'].description}
- [Student Outcomes assessment](${SITE}/student-outcomes-assessment): ${P['student-outcomes-assessment'].description}
- [ABET readiness](${SITE}/abet-readiness): ${P['abet-readiness'].description}
- [Program Criteria by commission](${SITE}/program-criteria): ${P['program-criteria'].description}
- [Pricing](${SITE}/pricing): ${P.pricing.description}

## Contact
- Book an online demo or ask a question: ${SITE}/#contact, contact@jahiz.tn
- French version: ${SITE}/fr
`);

// ---- llms-full.txt: the English guides and FAQ in full, as Markdown ------------------
// Inline HTML becomes Markdown: links keep their (absolute) target, bold stays bold,
// every other tag is dropped.
const md = (html) => String(html)
  .replace(/<a href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g, (m, h, t) => `[${t}](${h.startsWith('/') ? SITE + h : h})`)
  .replace(/<\/?strong>/g, '**').replace(/<\/?em>/g, '_')
  .replace(/<[^>]+>/g, '')
  .replace(/&amp;/g, '&');
const mdCell = (c) => md(c).replace(/\|/g, '\\|');
function blocksToMd(blocks) {
  return blocks.map((b) => {
    if (b.h2) return `## ${md(b.h2)}`;
    if (b.h3) return `### ${md(b.h3)}`;
    if (b.p) return md(b.p);
    if (b.note) return `> ${md(b.note)}`;
    if (b.ul) return b.ul.map((x) => `- ${md(x)}`).join(NL);
    if (b.ol) return b.ol.map((x, i) => `${i + 1}. ${md(x)}`).join(NL);
    if (b.steps) return b.steps.map(([t, d], i) => `${i + 1}. **${md(t)}**: ${md(d)}`).join(NL);
    if (b.faq) return b.faq.map(([q, a]) => `### ${md(q)}${NL}${NL}${md(a)}`).join(NL + NL);
    if (b.table) {
      const { head, rows, caption } = b.table;
      return [`_${md(caption)}_`, '', `| ${head.map(mdCell).join(' | ')} |`, `| ${head.map(() => '---').join(' | ')} |`, ...rows.map((r) => `| ${r.map(mdCell).join(' | ')} |`)].join(NL);
    }
    return '';
  }).filter(Boolean).join(NL + NL);
}
const fullSections = [...GUIDES, 'faq'].map((k) => {
  const d = EN.pages[k];
  return `# ${textOf(d.h1)}${NL}${NL}Source: ${abs('en', k)}${NL}${NL}${md(d.lede)}${NL}${NL}${blocksToMd(fillPlaceholders('en', d.blocks))}`;
});
write('llms-full.txt', `# Academix: ABET accreditation guides, in full

> ${md(P['what-is-abet-accreditation'].lede)}

Written by Academix (ABET accreditation software by Jahiz Digital Solutions, ${SITE}). Academix is not affiliated with or endorsed by ABET; ABET's own documents are authoritative. Last reviewed ${UPDATED}.

${fullSections.join(`${NL}${NL}---${NL}${NL}`)}
`);

fs.writeFileSync(path.join(BUILD, 'pages-manifest.json'), JSON.stringify(routes, null, 1));
console.log(`pages: ${Object.keys(routes).length} routes, sitemap ${(['', ...sitemap].length) * 2} URLs, css ${css}`);
