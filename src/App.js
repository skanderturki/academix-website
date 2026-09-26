import { useState, useEffect } from 'react';
import { Menu, X, Mail, Languages } from 'lucide-react';
import Home from './components/Home';
import QuoteRequest from './components/QuoteRequest';
import { useLanguage } from './contexts/LanguageContext';
import { initAnalytics } from './lib/analytics';
import { cn } from './lib/utils';

function BrandLogo({ className }) {
  return <img src="/brand/academix-shield-reversed.svg" alt="" width="88" height="100" className={className} draggable={false} />;
}

// LinkedIn glyph (lucide dropped brand marks, so it's inlined).
function LinkedInIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function App() {
  const { t, lang, toggleLang } = useLanguage();
  const [currentView, setCurrentView] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    // Hash-based routing for the top-level views (sections stay on home).
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'home';
      const view = hash.split('#')[0].split('/')[0];
      setCurrentView(['home', 'quote'].includes(view) ? view : 'home');
      setMobileOpen(false);
      if (view === 'quote') window.scrollTo(0, 0);
      // A section link (#platform, #contact…) followed from another view: the
      // section only exists once home has rendered, so scroll on the next frame.
      else if (hash && hash !== 'home') requestAnimationFrame(() => document.getElementById(hash)?.scrollIntoView());
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // First-party analytics: pageviews + clicks -> /api/track (embedded SQLite).
  useEffect(() => { initAnalytics(); }, []);


  // Sections live on the home page; '#quote' is its own view.
  // Content pages are separate static pages, in each language (/fr/...).
  const L = (p) => (lang === 'fr' ? `/fr${p}` : p);
  const navLinks = [
    { href: '#platform', label: t.nav.platform },
    { href: L('/what-is-abet-accreditation'), label: t.nav.guide },
    { href: L('/program-criteria'), label: t.nav.criteria },
    { href: L('/pricing'), label: t.nav.quote },
    { href: L('/faq'), label: t.nav.faq },
    { href: '#contact', label: t.nav.contact },
  ];

  const LangToggle = ({ className }) => (
    <button
      type="button"
      onClick={toggleLang}
      aria-label={t.nav.switchLabel}
      className={cn(
        'inline-flex items-center gap-2 rounded-[9px] border border-white/15 bg-white/[.04] px-3 py-1.5 text-sm font-medium text-[#aebbd2] transition hover:border-[#e9b872]/50 hover:text-white',
        className
      )}
    >
      <Languages className="h-4 w-4 text-[#e9b872]" />
      <span className="font-mono uppercase tracking-wider">{lang}</span>
      <span className="text-white/30">/</span>
      <span>{t.nav.switchTo}</span>
    </button>
  );

  return (
    <div className="dark min-h-screen flex flex-col bg-[#060e1c] text-[#eef3fb] font-sans antialiased">
      {/* ===================== NAV ===================== */}
      <header className="sticky top-0 z-50 border-b border-white/[.07] bg-[#060e1c]/70 backdrop-blur-xl">
        <div className="container-page flex h-[74px] items-center justify-between gap-6">
          {/* Brand */}
          <a href="#home" className="flex items-center gap-3 no-underline">
            <BrandLogo className="h-9 w-auto" />
            <span className="font-serif text-[24px] tracking-[.3px] text-white">Academix</span>
          </a>

          {/* Center links (desktop) */}
          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="text-[14.5px] font-medium text-[#aebbd2] no-underline transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: language + CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <LangToggle className="hidden sm:inline-flex" />
            <a
              href="#contact"
              className="hidden rounded-[9px] bg-[#e9b872] px-[18px] py-[10px] text-sm font-semibold text-[#0a1628] no-underline shadow-[0_6px_18px_rgba(233,184,114,.25)] transition-colors hover:bg-[#f3c685] md:inline-block"
            >
              {t.nav.demo}
            </a>
            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-[9px] text-white/90 transition hover:bg-white/10"
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <div
          className={cn(
            'lg:hidden overflow-hidden border-t border-white/[.07] bg-[#060e1c]/95 backdrop-blur-xl transition-[max-height,opacity] duration-300',
            mobileOpen ? 'max-h-[640px] opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <div className="container-page py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-white/90 hover:bg-white/10"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mx-4 my-2 rounded-[9px] bg-[#e9b872] px-4 py-3 text-center text-sm font-semibold text-[#0a1628] no-underline"
            >
              {t.nav.demo}
            </a>
            <div className="px-4 py-3">
              <LangToggle />
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {currentView === 'quote' ? (
          <QuoteRequest />
        ) : (
          <Home />
        )}
      </main>

      {/* ===================== FOOTER ===================== */}
      <footer className="border-t border-white/[.07]">
        <div className="container-page grid grid-cols-1 gap-10 pb-10 pt-[54px] md:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <BrandLogo className="h-9 w-auto" />
              <span className="font-serif text-[22px] text-white">Academix</span>
            </div>
            <p className="max-w-[340px] text-[14px] leading-[1.6] text-[#8293af]">{t.footer.blurb}</p>
          </div>

          <div>
            <div className="mb-4 font-mono text-[11px] uppercase tracking-[1.5px] text-[#6f7f9b]">
              {t.footer.platformsHeading}
            </div>
            <ul className="flex flex-col gap-2.5 text-[14px]">
              <li>
                <a href="https://pmp.academix.tn" target="_blank" rel="noopener noreferrer" className="text-[#bcc8de] no-underline transition-colors hover:text-[#e9b872]">
                  {t.footer.links.pmp}
                </a>
              </li>
              {[
                ['/what-is-abet-accreditation', t.footer.links.guide],
                ['/program-criteria', t.footer.links.criteria],
                ['/abet-self-study-report', t.footer.links.ssr],
                ['/faq', t.footer.links.faq],
                ['/pricing', t.footer.links.pricing],
              ].map(([href, label]) => (
                <li key={href}>
                  <a href={L(href)} className="text-[#bcc8de] no-underline transition-colors hover:text-[#e9b872]">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-4 font-mono text-[11px] uppercase tracking-[1.5px] text-[#6f7f9b]">
              {t.footer.getInTouch}
            </div>
            <ul className="flex flex-col gap-2.5 text-[14px]">
              <li>
                <a href="mailto:contact@jahiz.tn" className="inline-flex items-center gap-2 text-[#bcc8de] no-underline transition-colors hover:text-[#e9b872]">
                  <Mail className="h-4 w-4" /> contact@jahiz.tn
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[#bcc8de] no-underline transition-colors hover:text-[#e9b872]">
                  {t.footer.links.contactForm}
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/jahizds/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#bcc8de] no-underline transition-colors hover:text-[#e9b872]">
                  <LinkedInIcon className="h-4 w-4" /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/[.06]">
          <div className="container-page flex flex-wrap justify-between gap-2.5 py-5 text-[12.5px] text-[#6f7f9b]">
            <span>© {new Date().getFullYear()} {t.footer.rights}</span>
            <span className="font-mono">{t.footer.built}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
