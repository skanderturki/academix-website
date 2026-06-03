import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { content } from '../i18n/content';

const STORAGE_KEY = 'academix-lang';
const SUPPORTED = ['en', 'fr'];
const DEFAULT_LANG = 'en';
// Visitors from these countries get the French version by default.
const FRENCH_COUNTRIES = ['TN', 'FR'];

const LanguageContext = createContext({
  lang: DEFAULT_LANG,
  t: content[DEFAULT_LANG],
  setLang: () => {},
  toggleLang: () => {},
});

// The user's EXPLICIT choice (set only via the toggle), if any.
function getStoredLang() {
  if (typeof window === 'undefined') return null;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return SUPPORTED.includes(stored) ? stored : null;
  } catch {
    return null;
  }
}

export function LanguageProvider({ children }) {
  // Start from an explicit choice if there is one, else English. Country-based
  // auto-detection (below) refines this on first visit.
  const [lang, setLangState] = useState(() => getStoredLang() || DEFAULT_LANG);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  // First-visit default: French for TN/FR, English otherwise. Skipped once the
  // user has explicitly picked a language. The detected value is NOT persisted,
  // so it re-evaluates each visit until the user toggles.
  useEffect(() => {
    if (getStoredLang()) return;

    let cancelled = false;
    (async () => {
      let country = null;
      try {
        const res = await fetch('/api/geo', {
          signal: AbortSignal.timeout ? AbortSignal.timeout(3000) : undefined,
        });
        if (res.ok) {
          const data = await res.json();
          country = data && data.country ? String(data.country).toUpperCase() : null;
        }
      } catch {
        /* geo unavailable — fall back below */
      }
      if (cancelled) return;

      if (country) {
        setLangState(FRENCH_COUNTRIES.includes(country) ? 'fr' : 'en');
      } else {
        const nav = (navigator.language || '').slice(0, 2).toLowerCase();
        if (nav === 'fr') setLangState('fr');
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  const setLang = useCallback((next) => {
    if (!SUPPORTED.includes(next)) return;
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore storage failures */
    }
  }, []);

  const toggleLang = useCallback(() => {
    setLangState((prev) => {
      const next = prev === 'en' ? 'fr' : 'en';
      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  const value = {
    lang,
    t: content[lang] || content[DEFAULT_LANG],
    setLang,
    toggleLang,
  };

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
