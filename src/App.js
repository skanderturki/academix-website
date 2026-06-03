import { useState, useEffect } from 'react';
import { Menu, X, GraduationCap, Workflow, Bot, Mail, Languages } from 'lucide-react';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Portfolio from './components/Portfolio';
import { useAuth } from './contexts/AuthContext';
import { useLanguage } from './contexts/LanguageContext';
import { initAnalytics } from './lib/analytics';
import { cn } from './lib/utils';

function BrandLogo({ className }) {
  return (
    <img
      src="/logo.png"
      alt="Academix"
      className={className}
      draggable={false}
    />
  );
}

// LinkedIn glyph (lucide dropped brand marks, so it's inlined).
function LinkedInIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

// Positional — index-aligned with content.featureChips.
const FEATURE_CHIP_ICONS = [GraduationCap, Workflow, Bot];

function App() {
  const { isAuthenticated, logout } = useAuth();
  const { t, lang, toggleLang } = useLanguage();
  const [currentView, setCurrentView] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    // Handle hash-based routing
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'home';
      // Strip any section-anchor portion; we only route on top-level views
      const view = hash.split('#')[0].split('/')[0];
      if (['home', 'login', 'register', 'portfolio'].includes(view)) {
        setCurrentView(view);
      } else {
        // It's a section anchor like #about/#services/#contact — stay on home
        setCurrentView('home');
      }
      setMobileOpen(false);
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // First-party analytics: pageviews + clicks -> /api/track (embedded SQLite).
  useEffect(() => {
    initAnalytics();
  }, []);

  const handleLogout = () => {
    logout();
    setCurrentView('home');
    window.location.hash = '#home';
  };

  const navLinks = [
    { href: '#home', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#services', label: t.nav.services },
    { href: '#contact', label: t.nav.contact },
    { href: 'https://pmp.academix.tn', label: t.nav.pmp, external: true },
  ];

  const LangToggle = ({ className }) => (
    <button
      type="button"
      onClick={toggleLang}
      aria-label={t.nav.switchLabel}
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm font-medium text-white/85 transition hover:bg-white/10 hover:border-white/30',
        className
      )}
    >
      <Languages className="h-4 w-4 text-brand-steel" />
      <span className="tabular-nums uppercase tracking-wider">{lang}</span>
      <span className="text-white/40">/</span>
      <span>{t.nav.switchTo}</span>
    </button>
  );

  return (
    <div className="dark min-h-screen flex flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50">
        {/* Banner with gradient mesh background */}
        <div className="relative overflow-hidden bg-mesh-banner border-b border-white/10">
          {/* Grid overlay */}
          <div className="absolute inset-0 grid-overlay opacity-60 animate-grid-move" aria-hidden="true" />

          {/* Floating glow orbs */}
          <div
            className="pointer-events-none absolute -top-24 -right-16 h-80 w-80 rounded-full bg-brand-navy/30 blur-3xl animate-float"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-brand-light/25 blur-3xl animate-float-reverse"
            aria-hidden="true"
          />

          {/* Binary scroll decoration */}
          <div className="pointer-events-none absolute top-2 left-0 right-0 overflow-hidden">
            <div className="font-mono text-[10px] tracking-[0.2em] text-white/15 whitespace-nowrap animate-binary-scroll">
              01001000 01100101 01101100 01101100 01101111 00100000 01010011 01001011 01000001 00100000 01010011 01111001 01110011 01110100 01100101 01101101 01110011
            </div>
          </div>

          <div className="container-page relative z-10 py-6 md:py-8">
            <div className="flex flex-wrap items-center justify-between gap-5">
              {/* Brand */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div
                    className="absolute inset-0 rounded-full bg-brand-navy/40 blur-xl animate-glow"
                    aria-hidden="true"
                  />
                  <BrandLogo className="relative h-14 w-auto sm:h-[72px] object-contain animate-pulse-slow drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)] transition hover:scale-105 hover:rotate-3" />
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold leading-tight tracking-tight text-white">
                    Academix
                  </h1>
                  <p className="text-xs sm:text-sm text-white/80 mt-1">
                    {t.banner.line1} <span className="text-white/40">|</span> {t.banner.line2}
                  </p>
                </div>
              </div>

              {/* Feature chips */}
              <div className="hidden md:flex flex-wrap gap-2">
                {t.featureChips.map((label, i) => {
                  const Icon = FEATURE_CHIP_ICONS[i] || GraduationCap;
                  return (
                    <div
                      key={label}
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 backdrop-blur px-3 py-1.5 text-xs font-medium text-white/90 transition hover:bg-white/20 hover:border-white/30 hover:-translate-y-0.5"
                    >
                      <Icon className="h-3.5 w-3.5 text-brand-steel" />
                      <span>{label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Navbar */}
        <nav className="relative border-b border-white/10 bg-brand-deep/80 backdrop-blur-lg supports-[backdrop-filter]:bg-brand-deep/60">
          <div className="container-page flex h-14 items-center justify-between">

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className="rounded-full px-4 py-2 text-sm font-medium text-white/80 transition hover:text-white hover:bg-white/10"
                >
                  {link.label}
                </a>
              ))}
              {isAuthenticated && (
                <>
                  <a
                    href="https://n8n.academix.tn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full px-4 py-2 text-sm font-medium text-white/80 transition hover:text-white hover:bg-white/10"
                  >
                    {t.nav.n8n}
                  </a>
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="rounded-full px-4 py-2 text-sm font-medium text-white/80 transition hover:text-white hover:bg-white/10"
                  >
                    {t.nav.logout}
                  </button>
                </>
              )}
            </div>

            {/* Right side: language toggle + mobile toggle */}
            <div className="flex items-center gap-2 lg:ml-auto">
              <LangToggle className="hidden sm:inline-flex" />

              <button
                type="button"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileOpen}
                className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full text-white/90 hover:bg-white/10 transition"
                onClick={() => setMobileOpen((v) => !v)}
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Mobile nav drawer */}
          <div
            className={cn(
              'lg:hidden overflow-hidden border-t border-white/10 bg-brand-deep/95 backdrop-blur-lg transition-[max-height,opacity] duration-300',
              mobileOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
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
              {isAuthenticated && (
                <>
                  <a
                    href="https://n8n.academix.tn"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg px-4 py-3 text-sm font-medium text-white/90 hover:bg-white/10"
                  >
                    {t.nav.n8n}
                  </a>
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="text-left rounded-lg px-4 py-3 text-sm font-medium text-white/90 hover:bg-white/10"
                  >
                    {t.nav.logout}
                  </button>
                </>
              )}
              <div className="px-4 py-3">
                <LangToggle />
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        {currentView === 'login' ? (
          <Login />
        ) : currentView === 'register' ? (
          <Register />
        ) : currentView === 'portfolio' ? (
          <Portfolio />
        ) : (
          <Home />
        )}
      </main>

      <footer className="relative bg-brand-deep text-white/80 border-t border-white/10">
        {/* Gradient hairline */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-brand-navy via-brand-steel to-brand-light" />

        <div className="container-page py-12 md:py-16">
          <div className="grid gap-10 md:grid-cols-3">
            {/* Brand col */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <BrandLogo className="h-10 w-auto object-contain" />
                <span className="font-bold text-white text-lg">Academix</span>
              </div>
              <p className="text-sm text-white/60 leading-relaxed max-w-sm">
                {t.footer.blurb}
              </p>
            </div>

            {/* Platforms col */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {t.footer.platformsHeading}
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://pmp.academix.tn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-brand-steel transition"
                  >
                    {t.footer.links.pmp}
                  </a>
                </li>
                <li>
                  <a
                    href="https://n8n.academix.tn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-brand-steel transition"
                  >
                    {t.footer.links.n8n}
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-white/70 hover:text-brand-steel transition">
                    {t.footer.links.allServices}
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact col */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {t.footer.getInTouch}
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="mailto:contact@academix.tn"
                    className="inline-flex items-center gap-2 text-white/70 hover:text-brand-steel transition"
                  >
                    <Mail className="h-4 w-4" />
                    contact@academix.tn
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-white/70 hover:text-brand-steel transition">
                    {t.footer.links.contactForm}
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/jahiz-digital-solutions-922998412"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white/70 hover:text-brand-steel transition"
                  >
                    <LinkedInIcon className="h-4 w-4" />
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
            <p>© {new Date().getFullYear()} {t.footer.rights}</p>
            <p className="font-mono">{t.footer.built}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
