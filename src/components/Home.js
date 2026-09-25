import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, ChevronRight, Mail } from 'lucide-react';
import OutcomeMap from './OutcomeMap';
import ContactForm from './ContactForm';
import { useLanguage } from '../contexts/LanguageContext';

/* -------------------------------------------------------------------------- */
/*  Animation helpers (2026 redesign)                                          */
/* -------------------------------------------------------------------------- */

const rise = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.2, 0.7, 0.2, 1] },
  }),
};

const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

function Eyebrow({ children }) {
  return (
    <div className="mb-4 font-mono text-xs uppercase tracking-[2.5px] text-[#e9b872]">{children}</div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Hero                                                                       */
/* -------------------------------------------------------------------------- */

function Hero() {
  const { t } = useLanguage();
  return (
    <header id="top" className="relative overflow-hidden">
      {/* ambient gradient field */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(1100px 600px at 78% -8%, rgba(233,184,114,.10), transparent 60%), radial-gradient(900px 700px at 5% 8%, rgba(127,168,217,.08), transparent 55%)',
        }}
      />
      <div className="container-page relative pb-16 pt-16 md:pt-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_.85fr]">
          <div>
            <motion.div variants={rise} initial="hidden" animate="show" className="mb-7 inline-flex items-center gap-2.5">
              <span className="h-[7px] w-[7px] rounded-full bg-[#e9b872] shadow-[0_0_12px_#e9b872]" />
              <span className="font-mono text-xs uppercase tracking-[2.5px] text-[#9fb0cc]">{t.hero.badge}</span>
            </motion.div>

            <motion.h1
              custom={1}
              variants={rise}
              initial="hidden"
              animate="show"
              className="mb-6 font-serif text-[44px] font-normal leading-[1.05] tracking-[-.5px] text-[#fbfcfe] sm:text-[56px] lg:text-[64px]"
            >
              {t.hero.title}
            </motion.h1>

            <motion.p
              custom={2}
              variants={rise}
              initial="hidden"
              animate="show"
              className="mb-9 max-w-[560px] text-[17px] leading-[1.6] text-[#a9b7d0] sm:text-[18.5px]"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div custom={3} variants={rise} initial="hidden" animate="show" className="mb-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 rounded-[11px] bg-[#e9b872] px-[26px] py-[15px] text-[15.5px] font-semibold text-[#0a1628] no-underline shadow-[0_10px_30px_rgba(233,184,114,.28)] transition hover:-translate-y-px hover:bg-[#f3c685]"
              >
                {t.hero.ctaPrimary} <ArrowRight size={18} />
              </a>
              <a
                href="#quote"
                className="rounded-[11px] border border-white/[.14] px-[22px] py-[15px] text-[15.5px] font-semibold text-[#dfe7f4] no-underline transition-colors hover:border-[#e9b872]/50 hover:text-white"
              >
                {t.hero.ctaSecondary}
              </a>
            </motion.div>

            <motion.div custom={4} variants={rise} initial="hidden" animate="show" className="flex flex-wrap gap-2.5">
              {t.hero.trust.map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.03] px-3.5 py-2 text-[13px] font-medium text-[#bcc8de]"
                >
                  <Check size={13} className="text-[#e9b872]" />
                  {chip}
                </span>
              ))}
            </motion.div>
          </div>

          {/* outcome-mapping motif card */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.1, delay: 0.4 }} className="relative">
            <div className="absolute -inset-8 bg-[radial-gradient(closest-side,rgba(233,184,114,.12),transparent)] blur-[10px]" aria-hidden="true" />
            <div className="relative rounded-[18px] border border-white/10 bg-gradient-to-b from-[#13243f]/85 to-[#0a1628]/85 p-6 shadow-[0_30px_70px_rgba(0,0,0,.45)]">
              <div className="mb-[18px] flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[1.5px] text-[#7f8fab]">{t.hero.mapTitle}</span>
                <span className="font-mono text-[11px] text-[#5fae8e]">● {t.hero.mapLive}</span>
              </div>
              <OutcomeMap />
              <div className="mt-[18px] grid grid-cols-3 gap-2.5">
                {t.hero.stats.map((s) => (
                  <div key={s.n} className="rounded-[11px] border border-white/[.08] bg-white/[.02] px-2.5 py-3">
                    <div className="font-serif text-[27px] leading-none text-[#e9b872]">{s.n}</div>
                    <div className="mt-1.5 text-[11.5px] leading-[1.3] text-[#8c9bb6]">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}

/* -------------------------------------------------------------------------- */
/*  Product tour: real screens from a demo program (fictional data)            */
/* -------------------------------------------------------------------------- */

function Tour() {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);
  const item = t.tour.items[active];
  return (
    <section id="tour" className="section-anchor relative border-t border-white/[.06]">
      <div className="container-page py-20 md:py-24">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>{t.tour.eyebrow}</Eyebrow>
            <h2 className="font-serif text-[34px] font-normal leading-[1.1] text-[#fbfcfe] sm:text-[42px]">
              {t.tour.title} <span className="text-[#e9b872]">{t.tour.titleHighlight}</span>
            </h2>
          </div>
          <div role="tablist" aria-label={t.tour.eyebrow} className="flex flex-wrap gap-1 rounded-[11px] border border-white/[.12] p-1">
            {t.tour.items.map((it, i) => (
              <button
                key={it.key}
                type="button"
                role="tab"
                id={`tour-tab-${it.key}`}
                aria-selected={i === active}
                aria-controls="tour-panel"
                onClick={() => setActive(i)}
                className={
                  'rounded-[8px] px-4 py-2 text-[14px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e9b872]/60 ' +
                  (i === active ? 'bg-[#e9b872] text-[#0a1628]' : 'text-[#aebbd2] hover:text-white')
                }
              >
                {it.tab}
              </button>
            ))}
          </div>
        </div>
        <figure id="tour-panel" role="tabpanel" aria-labelledby={`tour-tab-${item.key}`} className="m-0">
          <div className="overflow-hidden rounded-[16px] border border-white/[.12] bg-[#f4f4f0] shadow-[0_30px_80px_rgba(0,0,0,.45)]">
            <img
              key={item.key}
              src={`/screens/${item.key}.webp`}
              alt={item.alt}
              width="1440"
              height="900"
              loading="lazy"
              decoding="async"
              className="block h-auto w-full"
            />
          </div>
          <figcaption className="mt-5 flex flex-wrap items-baseline justify-between gap-3">
            <span className="max-w-[720px] text-[16px] leading-[1.6] text-[#b3c0d8]">{item.caption}</span>
            <span className="font-mono text-[11.5px] text-[#6f7f9b]">{t.tour.note}</span>
          </figcaption>
        </figure>
        {/* Preload the other screens once the first is on show. */}
        <div hidden>
          {t.tour.items.filter((_, i) => i !== active).map((it) => <link key={it.key} rel="prefetch" href={`/screens/${it.key}.webp`} />)}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  The platform                                                               */
/* -------------------------------------------------------------------------- */

function Platform() {
  const { t } = useLanguage();
  return (
    <section id="platform" className="section-anchor relative border-t border-white/[.06]">
      <div className="container-page py-20 md:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <div className="lg:sticky lg:top-28">
            <Eyebrow>{t.platform.eyebrow}</Eyebrow>
            <h2 className="mb-5 font-serif text-[34px] font-normal leading-[1.1] text-[#fbfcfe] sm:text-[42px]" style={{ textWrap: 'balance' }}>
              {t.platform.title} <span className="text-[#e9b872]">{t.platform.titleHighlight}</span>
            </h2>
            <p className="max-w-[400px] text-[16px] leading-[1.6] text-[#a9b7d0]">{t.platform.intro}</p>
          </div>
          <ul className="border-t border-white/[.08]">
            {t.platform.features.map((f) => (
              <motion.li
                key={f.title}
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-60px' }}
                className="grid gap-2 border-b border-white/[.08] py-6 sm:grid-cols-[230px_1fr] sm:gap-8"
              >
                <h3 className="flex items-start gap-2.5 text-[17px] font-semibold leading-[1.35] text-[#fbfcfe]">
                  <Check size={16} className="mt-[3px] flex-none text-[#e9b872]" />
                  {f.title}
                </h3>
                <p className="text-[15px] leading-[1.6] text-[#98a7c1]">{f.desc}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  How a term runs (a real sequence, so the steps are numbered)               */
/* -------------------------------------------------------------------------- */

function HowItWorks() {
  const { t } = useLanguage();
  return (
    <section id="how" className="section-anchor relative border-t border-white/[.06] bg-gradient-to-b from-transparent to-[#0d1a2e]/60">
      <div className="container-page py-20 md:py-24">
        <Eyebrow>{t.how.eyebrow}</Eyebrow>
        <h2 className="mb-12 font-serif text-[34px] font-normal leading-[1.1] text-[#fbfcfe] sm:text-[42px]">
          {t.how.title} <span className="text-[#e9b872]">{t.how.titleHighlight}</span>
        </h2>
        <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {t.how.steps.map((step, i) => (
            <motion.li
              key={step.title}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              className="border-t border-[#e9b872]/40 pt-5"
            >
              <div className="mb-3 font-mono text-[12px] tracking-[1.5px] text-[#e9b872]">{String(i + 1).padStart(2, '0')}</div>
              <h3 className="mb-2 text-[17px] font-semibold text-[#fbfcfe]">{step.title}</h3>
              <p className="text-[14.5px] leading-[1.6] text-[#98a7c1]">{step.desc}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  What we build                                                              */
/* -------------------------------------------------------------------------- */

function Services() {
  const { t } = useLanguage();
  return (
    <section id="services" className="section-anchor relative border-t border-white/[.06] bg-gradient-to-b from-transparent to-[#0d1a2e]/60">
      <div className="container-page py-20 md:py-24">
        <Eyebrow>{t.services.eyebrow}</Eyebrow>
        <h2 className="mb-3 max-w-[740px] font-serif text-[36px] font-normal leading-[1.08] text-[#fbfcfe] sm:text-[44px]">
          {t.services.title} <span className="text-[#e9b872]">{t.services.titleHighlight}</span>{t.services.titleSuffix ? ` ${t.services.titleSuffix}` : ''}
        </h2>
        <p className="mb-11 text-[16px] text-[#92a1bc]">{t.services.subtitle}</p>
        <div className="flex flex-col gap-[18px]">
          {t.services.items.map((o) => (
            <motion.div
              key={o.title}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              className="grid items-start gap-9 rounded-[18px] border border-white/[.09] bg-white/[.02] p-7 transition-colors hover:border-[#e9b872]/35 hover:bg-white/[.035] sm:p-8 lg:grid-cols-[300px_1fr_auto]"
            >
              <div>
                <div className="mb-3.5 font-mono text-[11px] uppercase tracking-[1.5px] text-[#e9b872]">{o.badge}</div>
                <h3 className="mb-3 font-serif text-[24px] font-normal leading-[1.12] text-[#fbfcfe] sm:text-[27px]">{o.title}</h3>
                <p className="text-[14px] leading-[1.55] text-[#8d9cb7]">{o.description}</p>
              </div>
              <div className="grid grid-cols-1 gap-x-7 gap-y-2.5 pt-1 sm:grid-cols-2">
                {o.features.map((f) => (
                  <div key={f} className="flex items-start gap-2.5 text-[14px] leading-[1.4] text-[#c2cee2]">
                    <ChevronRight size={15} className="mt-0.5 flex-none text-[#e9b872]" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
              <a
                href="#contact"
                className="flex items-center justify-center gap-1.5 self-center whitespace-nowrap rounded-[10px] border border-white/[.16] px-[18px] py-[11px] text-[14px] font-semibold text-[#dfe7f4] no-underline transition-colors hover:border-[#e9b872] hover:text-[#e9b872]"
              >
                {o.cta} <ArrowRight size={15} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Why Academix                                                               */
/* -------------------------------------------------------------------------- */

function WhyChoose() {
  const { t } = useLanguage();
  return (
    <section className="section-anchor relative border-t border-white/[.06]">
      <div className="container-page py-20 md:py-24">
        <div className="mb-11 flex flex-wrap items-end justify-between gap-5">
          <div>
            <Eyebrow>{t.why.eyebrow}</Eyebrow>
            <h2 className="max-w-[620px] font-serif text-[36px] font-normal leading-[1.08] text-[#fbfcfe] sm:text-[44px]">
              {t.why.title} <span className="text-[#e9b872]">{t.why.titleHighlight}</span>.
            </h2>
          </div>
          <a
            href="#contact"
            className="rounded-[11px] bg-[#e9b872] px-6 py-3.5 text-[15px] font-semibold text-[#0a1628] no-underline shadow-[0_10px_28px_rgba(233,184,114,.25)] transition-colors hover:bg-[#f3c685]"
          >
            {t.contact.eyebrow}
          </a>
        </div>
        <div className="grid grid-cols-1 gap-[18px] md:grid-cols-3">
          {t.why.pillars.map((r, i) => (
            <motion.div
              key={r.title}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              className="rounded-[16px] border border-white/[.09] bg-gradient-to-b from-white/[.03] to-white/[.01] p-[30px]"
            >
              <div className="mb-[18px] font-serif text-[30px] text-[#e9b872]">{String(i + 1).padStart(2, '0')}</div>
              <h3 className="mb-3 text-[18px] font-bold text-[#fbfcfe]">{r.title}</h3>
              <p className="text-[14.5px] leading-[1.6] text-[#94a3bd]">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Contact                                                                    */
/* -------------------------------------------------------------------------- */

function ContactSection() {
  const { t } = useLanguage();
  return (
    <section id="contact" className="section-anchor relative border-t border-white/[.06] bg-gradient-to-b from-[#0d1a2e]/70 to-transparent">
      <div className="container-page py-20 md:py-24">
        <div className="grid items-start gap-16 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <Eyebrow>{t.contact.eyebrow}</Eyebrow>
            <h2 className="mb-5 font-serif text-[36px] font-normal leading-[1.05] text-[#fbfcfe] sm:text-[44px]">
              {t.contact.title} <span className="text-[#e9b872]">{t.contact.titleHighlight}</span>.
            </h2>
            <p className="mb-8 max-w-[420px] text-[16px] leading-[1.6] text-[#a9b7d0] sm:text-[17px]">{t.contact.subtitle}</p>
            <div className="flex max-w-[380px] items-center gap-3 rounded-[13px] border border-white/10 bg-white/[.02] px-5 py-[18px]">
              <span className="grid h-[38px] w-[38px] flex-none place-items-center rounded-[9px] bg-[#e9b872]/[.14] text-[#e9b872]">
                <Mail size={17} />
              </span>
              <div>
                <div className="font-mono text-xs text-[#8293af]">{t.contact.form.directIntro}</div>
                <a href="mailto:academix@jahiz.tn" className="text-[15px] font-semibold text-[#eef3fb] no-underline hover:text-[#e9b872]">
                  academix@jahiz.tn
                </a>
              </div>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Home                                                                       */
/* -------------------------------------------------------------------------- */

function Home() {
  return (
    <>
      <Hero />
      <Tour />
      <Platform />
      <HowItWorks />
      <Services />
      <WhyChoose />
      <ContactSection />
    </>
  );
}

export default Home;
