import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Workflow,
  Bot,
  BookOpen,
  Sparkles,
  Check,
  ArrowRight,
  Package,
  MessageSquare,
  Zap,
} from 'lucide-react';
import ContactForm from './ContactForm';
import { Button } from './ui/button';
import { useLanguage } from '../contexts/LanguageContext';
import { cn } from '../lib/utils';

/* -------------------------------------------------------------------------- */
/*  Animated grid + glow background (from 21st.dev magic — variant 3)         */
/* -------------------------------------------------------------------------- */

function GridGlowBackground({
  children,
  backgroundColor = '#050a18',
  gridColor = 'rgba(139, 92, 246, 0.08)',
  gridSize = 60,
  glowColors = ['#0e2a47', '#1e3a5f', '#4a90b8', '#6ba4cf'],
  glowCount = 14,
  className,
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let glows = [];
    let frameId;

    class Glow {
      constructor() {
        this.x = Math.floor(Math.random() * (canvas.width / gridSize)) * gridSize;
        this.y = Math.floor(Math.random() * (canvas.height / gridSize)) * gridSize;
        this.targetX = this.x;
        this.targetY = this.y;
        this.radius = Math.random() * 120 + 80;
        this.speed = Math.random() * 0.015 + 0.008;
        this.color = glowColors[Math.floor(Math.random() * glowColors.length)];
        this.alpha = 0;
        this.setNewTarget();
      }

      setNewTarget() {
        this.targetX = Math.floor(Math.random() * (canvas.width / gridSize)) * gridSize;
        this.targetY = Math.floor(Math.random() * (canvas.height / gridSize)) * gridSize;
      }

      update() {
        this.x += (this.targetX - this.x) * this.speed;
        this.y += (this.targetY - this.y) * this.speed;
        if (
          Math.abs(this.targetX - this.x) < 1 &&
          Math.abs(this.targetY - this.y) < 1
        ) {
          this.setNewTarget();
        }
        if (this.alpha < 1) this.alpha += 0.01;
      }

      draw() {
        ctx.globalAlpha = this.alpha;
        const grad = ctx.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          this.radius
        );
        grad.addColorStop(0, this.color);
        grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    const resize = () => {
      const parent = canvas.parentElement;
      canvas.width = parent ? parent.offsetWidth : window.innerWidth;
      canvas.height = parent ? parent.offsetHeight : window.innerHeight;
      glows = Array.from({ length: glowCount }, () => new Glow());
    };

    const drawGrid = () => {
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 1;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawGrid();
      glows.forEach((g) => {
        g.update();
        g.draw();
      });
      frameId = requestAnimationFrame(animate);
    };

    resize();
    animate();
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(frameId);
    };
  }, [gridColor, gridSize, glowColors, glowCount]);

  return (
    <div
      className={cn('relative w-full overflow-hidden', className)}
      style={{ backgroundColor }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 h-full w-full opacity-60"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

/* -------------------------------------------------------------------------- */
/*  Non-translatable structural meta (icons, colors, links). Positional —     */
/*  index-aligned with the content arrays in i18n/content.js.                  */
/* -------------------------------------------------------------------------- */

const CAPABILITY_ICONS = [GraduationCap, Workflow, Bot];

const SERVICE_META = [
  {
    Icon: BookOpen,
    accent: 'from-brand-navy/40 via-brand-navy/10 to-transparent',
    iconBg: 'from-brand-navy/30 to-brand-steel/20',
    glowColor: '#0e2a47',
    href: '#contact',
    external: false,
  },
  {
    Icon: Workflow,
    accent: 'from-brand-steel/40 via-brand-steel/10 to-transparent',
    iconBg: 'from-brand-steel/30 to-emerald-500/20',
    glowColor: '#4a90b8',
    href: 'https://n8n.academix.tn',
    external: true,
  },
  {
    Icon: Sparkles,
    accent: 'from-brand-light/40 via-brand-light/10 to-transparent',
    iconBg: 'from-brand-light/30 to-brand-glow/20',
    glowColor: '#6ba4cf',
    href: '#contact',
    external: false,
  },
];

const PILLAR_ICONS = [GraduationCap, Package, MessageSquare];

/* -------------------------------------------------------------------------- */
/*  Hero                                                                       */
/* -------------------------------------------------------------------------- */

function Hero() {
  const { t } = useLanguage();
  return (
    <GridGlowBackground className="min-h-[calc(100vh-13rem)] flex items-center">
      <div className="container-page relative py-20 md:py-28 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-white/80 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-steel opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-steel"></span>
          </span>
          {t.hero.badge}
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="mx-auto max-w-5xl mb-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <span className="inline text-gradient-brand">{t.hero.title}</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-white/70 sm:text-xl"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button asChild variant="brand" size="lg">
            <a href="#services">
              {t.hero.ctaPrimary}
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#contact">{t.hero.ctaSecondary}</a>
          </Button>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
          className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/50"
        >
          {t.hero.trust.map((item) => (
            <div key={item} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-emerald-400" />
              <span>{item}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </GridGlowBackground>
  );
}

/* -------------------------------------------------------------------------- */
/*  About                                                                      */
/* -------------------------------------------------------------------------- */

function About() {
  const { t } = useLanguage();
  return (
    <section
      id="about"
      className="section-anchor relative bg-brand-deep/50 border-y border-white/5"
    >
      <div
        className="absolute inset-0 opacity-40"
        aria-hidden="true"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(107,164,207,0.18), transparent 70%)',
        }}
      />
      <div className="container-page relative py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-brand-steel uppercase tracking-widest mb-6">
            {t.about.eyebrow}
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl mb-6">
            {t.about.title}{' '}
            <span className="text-gradient-brand">{t.about.titleHighlight}</span>
          </h2>
          <p className="text-lg text-white/70 leading-relaxed mb-5">{t.about.p1}</p>
          <p className="text-base text-white/60 leading-relaxed">{t.about.p2}</p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3 max-w-4xl mx-auto">
          {t.about.capabilities.map((cap, i) => {
            const Icon = CAPABILITY_ICONS[i] || GraduationCap;
            return (
              <div
                key={cap.label}
                className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-center transition hover:border-brand-steel/40 hover:bg-white/[0.04]"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-navy/30 to-brand-light/30 border border-white/10 mb-4 group-hover:scale-110 transition">
                  <Icon className="h-6 w-6 text-brand-steel" />
                </div>
                <h3 className="text-base font-semibold text-white">{cap.label}</h3>
                <p className="text-sm text-white/50 mt-1">{cap.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Services                                                                   */
/* -------------------------------------------------------------------------- */

function Services() {
  const { t } = useLanguage();
  return (
    <section id="services" className="section-anchor relative bg-mesh-dark">
      <div className="absolute inset-0 grid-overlay opacity-30" aria-hidden="true" />
      <div className="container-page relative py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-brand-steel uppercase tracking-widest mb-6">
            {t.services.eyebrow}
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-5">
            {t.services.title}{' '}
            <span className="text-gradient-brand">{t.services.titleHighlight}</span>{' '}
            {t.services.titleSuffix}
          </h2>
          <p className="text-lg text-white/60">{t.services.subtitle}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {t.services.items.map((svc, i) => {
            const meta = SERVICE_META[i] || SERVICE_META[0];
            return (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
                className="group relative"
              >
                {/* Outer glow */}
                <div
                  className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-sm"
                  style={{
                    background: `linear-gradient(135deg, ${meta.glowColor}66, transparent 60%)`,
                  }}
                  aria-hidden="true"
                />
                <div className="relative h-full flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 overflow-hidden transition group-hover:border-white/20 group-hover:-translate-y-1">
                  {/* Accent gradient top */}
                  <div
                    className={cn(
                      'absolute inset-x-0 top-0 h-1 bg-gradient-to-r opacity-70',
                      meta.accent
                    )}
                  />

                  {/* Icon */}
                  <div
                    className={cn(
                      'inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br border border-white/10 mb-5',
                      meta.iconBg
                    )}
                  >
                    <meta.Icon className="h-7 w-7 text-white" />
                  </div>

                  {/* Badge */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-2.5 py-0.5 text-xs font-medium text-white/80 uppercase tracking-wider">
                      {svc.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white mb-3 leading-snug">
                    {svc.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-white/60 leading-relaxed mb-6">
                    {svc.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2.5 mb-8 flex-1">
                    {svc.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-sm text-white/75">
                        <Check className="h-4 w-4 text-brand-steel mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button asChild variant="outline" className="w-full mt-auto">
                    <a
                      href={meta.href}
                      target={meta.external ? '_blank' : undefined}
                      rel={meta.external ? 'noopener noreferrer' : undefined}
                    >
                      {svc.cta}
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Why Choose Us                                                              */
/* -------------------------------------------------------------------------- */

function WhyChoose() {
  const { t } = useLanguage();
  return (
    <section className="section-anchor relative bg-brand-deep border-y border-white/5">
      <div
        className="absolute inset-0 opacity-50"
        aria-hidden="true"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 50%, rgba(107,164,207,0.12), transparent 60%)',
        }}
      />
      <div className="container-page relative py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-brand-steel uppercase tracking-widest mb-6">
            {t.why.eyebrow}
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-5">
            {t.why.title}{' '}
            <span className="text-gradient-brand">{t.why.titleHighlight}</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {t.why.pillars.map((pillar, idx) => {
            const Icon = PILLAR_ICONS[idx] || GraduationCap;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative text-center"
              >
                <div className="relative inline-flex mb-6">
                  <div
                    className="absolute inset-0 rounded-2xl bg-brand-navy/40 blur-2xl"
                    aria-hidden="true"
                  />
                  <div className="relative inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-gradient-to-br from-brand-navy/20 to-brand-light/20 backdrop-blur-sm">
                    <Icon className="h-8 w-8 text-brand-steel" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{pillar.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed max-w-sm mx-auto">
                  {pillar.desc}
                </p>
              </motion.div>
            );
          })}
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
    <section id="contact" className="section-anchor relative bg-mesh-dark">
      <div className="absolute inset-0 grid-overlay opacity-30" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        aria-hidden="true"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(74,144,184,0.15), transparent 70%)',
        }}
      />
      <div className="container-page relative py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-brand-steel uppercase tracking-widest mb-6">
            <Zap className="h-3.5 w-3.5" />
            {t.contact.eyebrow}
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-5">
            {t.contact.title}{' '}
            <span className="text-gradient-brand">{t.contact.titleHighlight}</span>
          </h2>
          <p className="text-lg text-white/60">{t.contact.subtitle}</p>
        </div>

        <div className="mx-auto max-w-2xl">
          <ContactForm />
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
      <About />
      <Services />
      <WhyChoose />
      <ContactSection />
    </>
  );
}

export default Home;
