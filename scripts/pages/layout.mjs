// Shared HTML shell for the static content pages (see build.mjs).
//
// Every page is complete HTML: search engines and AI crawlers read it without
// running JavaScript. Styling comes from the site's own Tailwind build (this
// folder is in tailwind.config.js `content`, so the classes used here are
// compiled into the same main.css the home page loads). The only script is a
// small first-party analytics beacon to /api/track, the same one the home page
// sends.

export const SITE = 'https://academix.tn';
export const url = (lang, slug = '') => (lang === 'fr' ? `/fr${slug ? `/${slug}` : ''}` : `/${slug}`);
export const abs = (lang, slug) => SITE + url(lang, slug);

export const esc = (s) => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const UI = {
  en: {
    nav: [['/#platform', 'Platform'], ['/what-is-abet-accreditation', 'ABET guide'], ['/program-criteria', 'Program Criteria'], ['/pricing', 'Pricing'], ['/faq', 'FAQ']],
    demo: 'Book a demo', menu: 'Menu', switchTo: 'Français', switchLabel: 'Lire cette page en français',
    home: 'Home', ctaTitle: 'See Academix with your programs', ctaText: 'We run live online demos on request, with your commission and your next ABET visit in mind.',
    ctaDemo: 'Book an online demo', ctaQuote: 'Request a quote',
    footerBlurb: 'ABET accreditation software for universities: outcomes assessment, course reports, readiness tracking and the Self-Study Report.',
    product: 'Product', resources: 'Resources', contact: 'Contact',
    productLinks: [['/abet-self-study-report', 'Self-Study Report'], ['/student-outcomes-assessment', 'Student Outcomes assessment'], ['/abet-readiness', 'ABET readiness'], ['/program-criteria', 'Program Criteria'], ['/pricing', 'Pricing']],
    resourceLinks: [['/what-is-abet-accreditation', 'What is ABET accreditation?'], ['/faq', 'Frequently asked questions']],
    rights: 'Academix, ABET accreditation software by Jahiz Digital Solutions',
    updated: 'Last reviewed', notAffiliated: 'Academix is independent software and is not affiliated with or endorsed by ABET.',
  },
  fr: {
    nav: [['/fr#platform', 'Plateforme'], ['/fr/what-is-abet-accreditation', 'Guide ABET'], ['/fr/program-criteria', 'Program Criteria'], ['/fr/pricing', 'Tarifs'], ['/fr/faq', 'FAQ']],
    demo: 'Réserver une démo', menu: 'Menu', switchTo: 'English', switchLabel: 'Read this page in English',
    home: 'Accueil', ctaTitle: 'Découvrez Academix avec vos programmes', ctaText: 'Nous organisons des démos en ligne sur demande, adaptées à votre commission et à votre prochaine visite ABET.',
    ctaDemo: 'Réserver une démo en ligne', ctaQuote: 'Demander un devis',
    footerBlurb: 'Logiciel d’accréditation ABET pour les universités : évaluation des outcomes, rapports de cours, suivi de la préparation et Self-Study Report.',
    product: 'Produit', resources: 'Ressources', contact: 'Contact',
    productLinks: [['/fr/abet-self-study-report', 'Self-Study Report'], ['/fr/student-outcomes-assessment', 'Évaluation des Student Outcomes'], ['/fr/abet-readiness', 'Préparation ABET'], ['/fr/program-criteria', 'Program Criteria'], ['/fr/pricing', 'Tarifs']],
    resourceLinks: [['/fr/what-is-abet-accreditation', 'Qu’est-ce que l’accréditation ABET ?'], ['/fr/faq', 'Questions fréquentes']],
    rights: 'Academix, logiciel d’accréditation ABET de Jahiz Digital Solutions',
    updated: 'Dernière révision', notAffiliated: 'Academix est un logiciel indépendant, sans lien d’affiliation ni approbation d’ABET.',
  },
};

// ---- blocks → HTML -----------------------------------------------------------
// Content is authored in content/*.mjs as a list of blocks. Inline HTML in text
// (links, <strong>, <em>) is trusted: it is written in this repo, never input.
const H2 = 'mt-14 mb-4 scroll-mt-28 font-serif text-[30px] font-normal leading-[1.15] text-[#fbfcfe] sm:text-[34px]';
const H3 = 'mt-8 mb-2 text-[18px] font-semibold text-[#fbfcfe]';
const P = 'my-4 text-[16.5px] leading-[1.75] text-[#b3c0d8] [&_a]:text-[#e9b872] [&_a]:underline [&_a]:underline-offset-2 [&_strong]:text-[#eef3fb]';
const LI = 'text-[16px] leading-[1.7] text-[#b3c0d8] [&_a]:text-[#e9b872] [&_a]:underline [&_a]:underline-offset-2 [&_strong]:text-[#eef3fb]';

export function renderBlocks(blocks) {
  return blocks.map((b) => {
    if (b.h2) return `<h2 id="${b.id || ''}" class="${H2}">${b.h2}</h2>`;
    if (b.h3) return `<h3 class="${H3}">${b.h3}</h3>`;
    if (b.p) return `<p class="${P}">${b.p}</p>`;
    if (b.ul) return `<ul class="my-4 list-disc space-y-2 pl-6 marker:text-[#e9b872]">${b.ul.map((x) => `<li class="${LI}">${x}</li>`).join('')}</ul>`;
    if (b.ol) return `<ol class="my-4 list-decimal space-y-2 pl-6 marker:font-mono marker:text-[#e9b872]">${b.ol.map((x) => `<li class="${LI}">${x}</li>`).join('')}</ol>`;
    if (b.table) {
      const { head, rows, caption } = b.table;
      return `<div class="my-6 overflow-x-auto rounded-[14px] border border-white/[.1]"><table class="w-full min-w-[560px] border-collapse text-left text-[14.5px]">`
        + (caption ? `<caption class="sr-only">${caption}</caption>` : '')
        + `<thead><tr>${head.map((h) => `<th scope="col" class="border-b border-white/[.1] bg-white/[.03] px-4 py-3 font-mono text-[11.5px] font-medium uppercase tracking-[1.2px] text-[#8293af]">${h}</th>`).join('')}</tr></thead>`
        + `<tbody>${rows.map((r) => `<tr class="border-b border-white/[.06] last:border-0">${r.map((c, i) => `<td class="px-4 py-3 align-top leading-[1.55] ${i === 0 ? 'font-semibold text-[#eef3fb]' : 'text-[#b3c0d8]'}">${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
    }
    if (b.steps) {
      return `<ol class="my-6 grid gap-5 sm:grid-cols-2">${b.steps.map(([t, d], i) => `<li class="border-t border-[#e9b872]/40 pt-4"><div class="mb-1 font-mono text-[12px] tracking-[1.5px] text-[#e9b872]">${String(i + 1).padStart(2, '0')}</div><div class="mb-1 text-[16.5px] font-semibold text-[#fbfcfe]">${t}</div><p class="text-[15px] leading-[1.6] text-[#98a7c1]">${d}</p></li>`).join('')}</ol>`;
    }
    if (b.note) return `<aside class="my-6 rounded-[14px] border border-[#e9b872]/30 bg-[#e9b872]/[.05] px-5 py-4 text-[15px] leading-[1.65] text-[#c7d2e5] [&_a]:text-[#e9b872] [&_a]:underline">${b.note}</aside>`;
    if (b.faq) {
      return `<div class="my-4 divide-y divide-white/[.08] border-y border-white/[.08]">${b.faq.map(([q, a]) => `<details class="group py-4" open><summary class="cursor-pointer list-none text-[17px] font-semibold text-[#fbfcfe] marker:hidden"><h3 class="inline">${q}</h3></summary><div class="mt-2 text-[16px] leading-[1.7] text-[#b3c0d8] [&_a]:text-[#e9b872] [&_a]:underline">${a}</div></details>`).join('')}</div>`;
    }
    if (b.html) return b.html;
    throw new Error('unknown block ' + JSON.stringify(b).slice(0, 80));
  }).join('\n');
}

// Plain text of a block list, for descriptions and llms.txt.
export const textOf = (s) => String(s).replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

// ---- the page shell ------------------------------------------------------------
export function page({ lang, slug, title, description, h1, eyebrow, lede, body, jsonLd = [], breadcrumbs = [], css, updated, otherLangExists = true }) {
  const t = UI[lang];
  const other = lang === 'en' ? 'fr' : 'en';
  const canonical = abs(lang, slug);
  const crumbs = [[t.home, url(lang, '')], ...breadcrumbs];
  const ld = [
    ...jsonLd,
    {
      '@context': 'https://schema.org', '@type': 'BreadcrumbList',
      itemListElement: crumbs.map(([name, u], i) => ({ '@type': 'ListItem', position: i + 1, name: textOf(name), item: SITE + (u === '/' ? '/' : u) })),
    },
  ];
  const navLink = (href, label) => `<a href="${href}" class="text-[14.5px] font-medium text-[#aebbd2] no-underline transition-colors hover:text-white">${label}</a>`;
  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="theme-color" content="#0a1628" />
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}" />
<link rel="canonical" href="${canonical}" />
${otherLangExists ? `<link rel="alternate" hreflang="${lang}" href="${canonical}" />
<link rel="alternate" hreflang="${other}" href="${abs(other, slug)}" />
<link rel="alternate" hreflang="x-default" href="${abs('en', slug)}" />` : ''}
<meta property="og:type" content="article" />
<meta property="og:site_name" content="Academix" />
<meta property="og:title" content="${esc(title)}" />
<meta property="og:description" content="${esc(description)}" />
<meta property="og:url" content="${canonical}" />
<meta property="og:locale" content="${lang === 'fr' ? 'fr_FR' : 'en_US'}" />
<meta property="og:image" content="${SITE}/banner.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta name="twitter:card" content="summary_large_image" />
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="icon" type="image/png" sizes="192x192" href="/logo-192.png" />
<link rel="apple-touch-icon" href="/logo-192.png" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Hanken+Grotesk:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet" />
<link href="/${css}" rel="stylesheet" />
${ld.map((x) => `<script type="application/ld+json">${JSON.stringify(x)}</script>`).join('\n')}
</head>
<body class="dark min-h-screen bg-[#060e1c] font-sans text-[#eef3fb] antialiased">
<a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-[#e9b872] focus:px-4 focus:py-2 focus:text-[#0a1628]">${lang === 'fr' ? 'Aller au contenu' : 'Skip to content'}</a>
<header class="sticky top-0 z-50 border-b border-white/[.07] bg-[#060e1c]/85 backdrop-blur-xl">
  <div class="container-page flex h-[74px] items-center justify-between gap-6">
    <a href="${url(lang, '')}" class="flex items-center gap-3 no-underline"><img src="/brand/academix-shield-reversed.svg" alt="" width="88" height="100" class="h-9 w-auto" /><span class="font-serif text-[24px] tracking-[.3px] text-white">Academix</span></a>
    <nav class="hidden items-center gap-7 lg:flex" aria-label="${lang === 'fr' ? 'Principale' : 'Main'}">${t.nav.map(([h, l]) => navLink(h, l)).join('')}</nav>
    <div class="flex items-center gap-3">
      <a href="${url(other, slug)}" hreflang="${other}" lang="${other}" aria-label="${t.switchLabel}" class="hidden rounded-[9px] border border-white/15 bg-white/[.04] px-3 py-1.5 text-sm font-medium text-[#aebbd2] no-underline transition hover:border-[#e9b872]/50 hover:text-white sm:inline-block">${t.switchTo}</a>
      <a href="${lang === 'fr' ? '/fr' : '/'}#contact" class="hidden rounded-[9px] bg-[#e9b872] px-[18px] py-[10px] text-sm font-semibold text-[#0a1628] no-underline transition-colors hover:bg-[#f3c685] md:inline-block">${t.demo}</a>
      <details class="relative lg:hidden">
        <summary class="list-none cursor-pointer rounded-[9px] border border-white/15 px-3 py-2 text-sm font-medium text-white/90">${t.menu}</summary>
        <div class="absolute right-0 mt-2 flex w-64 flex-col gap-1 rounded-[12px] border border-white/10 bg-[#0a1628] p-2 shadow-2xl">
          ${t.nav.map(([h, l]) => `<a href="${h}" class="rounded-lg px-3 py-2.5 text-sm font-medium text-white/90 no-underline hover:bg-white/10">${l}</a>`).join('')}
          <a href="${url(other, slug)}" hreflang="${other}" lang="${other}" class="rounded-lg px-3 py-2.5 text-sm font-medium text-white/90 no-underline hover:bg-white/10">${t.switchTo}</a>
          <a href="${lang === 'fr' ? '/fr' : '/'}#contact" class="mt-1 rounded-[9px] bg-[#e9b872] px-3 py-2.5 text-center text-sm font-semibold text-[#0a1628] no-underline">${t.demo}</a>
        </div>
      </details>
    </div>
  </div>
</header>
<main id="main" class="relative">
  <div class="pointer-events-none absolute inset-x-0 top-0 h-[420px]" aria-hidden="true" style="background:radial-gradient(900px 420px at 80% -10%,rgba(233,184,114,.09),transparent 60%)"></div>
  <article class="container-page relative max-w-[860px] pb-16 pt-12 md:pt-16">
    <nav aria-label="Breadcrumb" class="mb-8 font-mono text-[12px] text-[#6f7f9b]"><ol class="flex flex-wrap gap-2">${crumbs.map(([n, u], i) => `<li>${i ? '<span aria-hidden="true">/ </span>' : ''}${i === crumbs.length - 1 && u === url(lang, slug) ? `<span aria-current="page" class="text-[#aebbd2]">${n}</span>` : `<a href="${u}" class="text-[#8293af] no-underline hover:text-[#e9b872]">${n}</a>`}</li>`).join('')}</ol></nav>
    ${eyebrow ? `<div class="mb-4 font-mono text-xs uppercase tracking-[2.5px] text-[#e9b872]">${eyebrow}</div>` : ''}
    <h1 class="mb-6 font-serif text-[40px] font-normal leading-[1.08] text-[#fbfcfe] sm:text-[52px]" style="text-wrap:balance">${h1}</h1>
    ${lede ? `<p class="mb-8 text-[18.5px] leading-[1.65] text-[#c7d2e5]">${lede}</p>` : ''}
    ${body}
    ${updated ? `<p class="mt-12 font-mono text-[12px] text-[#6f7f9b]">${t.updated}: ${updated}. ${t.notAffiliated}</p>` : ''}
  </article>
  <section class="border-t border-white/[.06] bg-gradient-to-b from-[#0d1a2e]/70 to-transparent">
    <div class="container-page flex flex-wrap items-center justify-between gap-6 py-14">
      <div class="max-w-[560px]"><h2 class="mb-2 font-serif text-[30px] font-normal text-[#fbfcfe]">${t.ctaTitle}</h2><p class="text-[16px] leading-[1.6] text-[#a9b7d0]">${t.ctaText}</p></div>
      <div class="flex flex-wrap gap-3">
        <a href="${lang === 'fr' ? '/fr' : '/'}#contact" data-track="cta-demo" class="rounded-[11px] bg-[#e9b872] px-6 py-3.5 text-[15px] font-semibold text-[#0a1628] no-underline transition-colors hover:bg-[#f3c685]">${t.ctaDemo}</a>
        <a href="${lang === 'fr' ? '/fr' : '/'}#quote" data-track="cta-quote" class="rounded-[11px] border border-white/[.16] px-6 py-3.5 text-[15px] font-semibold text-[#dfe7f4] no-underline transition-colors hover:border-[#e9b872] hover:text-[#e9b872]">${t.ctaQuote}</a>
      </div>
    </div>
  </section>
</main>
<footer class="border-t border-white/[.07]">
  <div class="container-page grid grid-cols-1 gap-10 pb-10 pt-[54px] md:grid-cols-[1.6fr_1fr_1fr_1fr]">
    <div><div class="mb-4 flex items-center gap-3"><img src="/brand/academix-shield-reversed.svg" alt="" width="88" height="100" class="h-9 w-auto" /><span class="font-serif text-[22px] text-white">Academix</span></div><p class="max-w-[340px] text-[14px] leading-[1.6] text-[#8293af]">${t.footerBlurb}</p></div>
    <div><div class="mb-4 font-mono text-[11px] uppercase tracking-[1.5px] text-[#6f7f9b]">${t.product}</div><ul class="flex flex-col gap-2.5 text-[14px]">${t.productLinks.map(([h, l]) => `<li><a href="${h}" class="text-[#bcc8de] no-underline hover:text-[#e9b872]">${l}</a></li>`).join('')}</ul></div>
    <div><div class="mb-4 font-mono text-[11px] uppercase tracking-[1.5px] text-[#6f7f9b]">${t.resources}</div><ul class="flex flex-col gap-2.5 text-[14px]">${t.resourceLinks.map(([h, l]) => `<li><a href="${h}" class="text-[#bcc8de] no-underline hover:text-[#e9b872]">${l}</a></li>`).join('')}</ul></div>
    <div><div class="mb-4 font-mono text-[11px] uppercase tracking-[1.5px] text-[#6f7f9b]">${t.contact}</div><ul class="flex flex-col gap-2.5 text-[14px]"><li><a href="mailto:contact@jahiz.tn" class="text-[#bcc8de] no-underline hover:text-[#e9b872]">contact@jahiz.tn</a></li><li><a href="https://www.linkedin.com/in/jahiz-digital-solutions-922998412" rel="noopener" class="text-[#bcc8de] no-underline hover:text-[#e9b872]">LinkedIn</a></li></ul></div>
  </div>
  <div class="border-t border-white/[.06]"><div class="container-page py-5 text-[12.5px] text-[#6f7f9b]">© ${new Date().getFullYear()} ${t.rights}</div></div>
</footer>
<script>
(function(){try{
  var ls=function(a,k){try{var s=window[a],v=s.getItem(k);if(v)return[v,false];v=(crypto.randomUUID?crypto.randomUUID():'x'+Math.random().toString(36).slice(2));s.setItem(k,v);return[v,true]}catch(e){return['x'+Math.random().toString(36).slice(2),true]}};
  var vid=ls('localStorage','jz_vid'),sid=ls('sessionStorage','jz_sid');
  var send=function(p){try{var b=JSON.stringify(Object.assign({path:location.pathname,lang:document.documentElement.lang,ref:document.referrer||null,vid:vid[0],sid:sid[0]},p));navigator.sendBeacon?navigator.sendBeacon('/api/track',new Blob([b],{type:'application/json'})):fetch('/api/track',{method:'POST',headers:{'Content-Type':'application/json'},body:b,keepalive:true})}catch(e){}};
  send({type:'pageview',new:vid[1]});
  document.addEventListener('click',function(e){var el=e.target.closest&&e.target.closest('a[href],[data-track]');if(!el)return;send({type:'click',target:el.getAttribute('data-track')||el.getAttribute('href'),label:(el.textContent||'').trim().slice(0,120)})});
}catch(e){}})();
</script>
</body>
</html>
`;
}
