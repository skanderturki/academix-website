import { render, screen } from '@testing-library/react';
import App from './App';
import { LanguageProvider } from './contexts/LanguageContext';

// jsdom lacks what framer-motion's scroll reveals and the analytics beacon use.
beforeAll(() => {
  window.scrollTo = () => {};
  window.IntersectionObserver = class { observe() {} unobserve() {} disconnect() {} };
  global.fetch = () => Promise.resolve({ ok: true, json: () => Promise.resolve({}) });
  navigator.sendBeacon = () => true;
});

test('leads with the ABET platform and a demo request', () => {
  render(<LanguageProvider><App /></LanguageProvider>);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/ABET Self-Study Report/i);
  expect(screen.getAllByText(/Book an online demo/i).length).toBeGreaterThan(0);
  expect(screen.getByText(/Program Criteria, word for word/i)).toBeInTheDocument();
});

test('makes no NCAAA claim and has no sign-in pages', () => {
  const { container } = render(<LanguageProvider><App /></LanguageProvider>);
  expect(container.textContent).not.toMatch(/NCAAA/);
  expect(container.textContent).not.toMatch(/log ?in|sign ?in|register/i);
});
