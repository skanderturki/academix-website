import { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle2, Mail, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { cn } from '../lib/utils';

// "Request a quote" (#quote). Posts to /api/quote, which relays the request to
// the Academix control plane (see quote.js). Nothing is paid here: the team
// prices the request and emails the quote.

const CONTACT_EMAIL = 'academix@jahiz.tn';

const EMPTY = {
  customer: { institution: '', country: '', contactName: '', contactRole: '', contactEmail: '', contactPhone: '' },
  request: { kind: 'new', existingHost: '', subdomain: '', departments: 1, maxActiveCurricula: 1, termYears: 1, departmentNames: '', message: '' },
  invoicing: { legalName: '', taxId: '', address: '' },
  website: '', // honeypot, never shown
};

const fieldClass = (bad) => cn(
  'w-full rounded-[10px] border bg-white/[.04] px-4 py-2.5 text-[15px] text-[#eef3fb] placeholder:text-[#6f7f9b] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e9b872]/60',
  bad ? 'border-red-400/70' : 'border-white/[.12] hover:border-white/25 focus:border-[#e9b872]/70'
);

function Field({ id, label, hint, required, requiredLabel, bad, children }) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-[13.5px] font-medium text-[#c7d2e5]">
        {label}
        {required && <span className="ml-1 text-[#e9b872]" aria-hidden="true">*</span>}
        {required && <span className="sr-only"> ({requiredLabel})</span>}
      </label>
      {children}
      {hint && <p id={`${id}-hint`} className={cn('text-[12.5px]', bad ? 'text-red-300' : 'text-[#7d8ca8]')}>{hint}</p>}
    </div>
  );
}

function Legend({ children, hint }) {
  return (
    <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2 border-b border-white/[.08] pb-2">
      <legend className="font-mono text-[11px] uppercase tracking-[1.8px] text-[#e9b872]">{children}</legend>
      {hint && <span className="text-[12.5px] text-[#7d8ca8]">{hint}</span>}
    </div>
  );
}

// Validates like the server, so the customer sees problems before sending.
function check(f) {
  const bad = [];
  if (!f.customer.institution.trim()) bad.push('customer.institution');
  if (!f.customer.contactName.trim()) bad.push('customer.contactName');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.customer.contactEmail.trim())) bad.push('customer.contactEmail');
  if (f.request.kind === 'existing' && !f.request.existingHost.trim()) bad.push('request.existingHost');
  if (f.request.kind === 'new' && f.request.subdomain && !/^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/i.test(f.request.subdomain)) bad.push('request.subdomain');
  const d = Number(f.request.departments);
  if (!Number.isInteger(d) || d < 1 || d > 200) bad.push('request.departments');
  const c = Number(f.request.maxActiveCurricula);
  if (!Number.isInteger(c) || c < 1 || c > 20) bad.push('request.maxActiveCurricula');
  return bad;
}

function QuoteRequest() {
  const { t, lang } = useLanguage();
  const q = t.quote;
  const L = q.fields;
  const [form, setForm] = useState(EMPTY);
  const [bad, setBad] = useState([]);
  const [error, setError] = useState('');
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(null); // { reference }

  const upd = (group, key) => (e) => {
    const value = e.target.value;
    setForm((f) => ({ ...f, [group]: { ...f[group], [key]: value } }));
    setBad((b) => b.filter((x) => x !== `${group}.${key}`));
  };
  const is = (path) => bad.includes(path);
  const described = (id, hint) => (hint ? `${id}-hint` : undefined);

  const submit = async (e) => {
    e.preventDefault();
    const problems = check(form);
    setBad(problems);
    if (problems.length) { setError(q.errors.fields); return; }
    setSending(true);
    setError('');
    try {
      const body = {
        ...form,
        locale: lang,
        request: {
          ...form.request,
          departments: Number(form.request.departments),
          maxActiveCurricula: Number(form.request.maxActiveCurricula),
          termYears: Number(form.request.termYears),
          subdomain: form.request.kind === 'new' ? form.request.subdomain.trim().toLowerCase() : '',
          existingHost: form.request.kind === 'existing' ? form.request.existingHost.trim().toLowerCase() : '',
        },
      };
      const res = await fetch('/api/quote', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setDone({ reference: data.reference });
        setForm(EMPTY);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (res.status === 400 && data.fields) {
        setBad(data.fields);
        setError(q.errors.fields);
      } else {
        setError(q.errors[data.error] || q.errors.failed);
      }
    } catch {
      setError(q.errors.failed);
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{ background: 'radial-gradient(900px 520px at 85% -10%, rgba(233,184,114,.09), transparent 60%)' }}
      />
      <div className="container-page relative grid grid-cols-1 items-start gap-14 py-16 md:py-20 lg:grid-cols-[.85fr_1.15fr]">
        {/* Left: what this is and what happens next */}
        <div className="lg:sticky lg:top-28">
          <div className="mb-4 font-mono text-xs uppercase tracking-[2.5px] text-[#e9b872]">{q.eyebrow}</div>
          <h1 className="mb-5 font-serif text-[38px] font-normal leading-[1.06] text-[#fbfcfe] sm:text-[48px]" style={{ textWrap: 'balance' }}>
            {q.title} <span className="text-[#e9b872]">{q.titleHighlight}</span>
          </h1>
          <p className="mb-10 max-w-[460px] text-[16.5px] leading-[1.6] text-[#a9b7d0]">{q.subtitle}</p>

          <h2 className="mb-4 font-mono text-[11px] uppercase tracking-[1.8px] text-[#8293af]">{q.stepsTitle}</h2>
          <ol className="relative ml-[13px] max-w-[460px] space-y-6 border-l border-white/[.1] pl-6">
            {q.steps.map((s, i) => (
              <li key={s.title} className="relative">
                <span className="absolute -left-[37px] top-0 grid h-[26px] w-[26px] place-items-center rounded-full border border-[#e9b872]/50 bg-[#060e1c] font-mono text-[12px] text-[#e9b872]">
                  {i + 1}
                </span>
                <div className="text-[15.5px] font-semibold text-[#eef3fb]">{s.title}</div>
                <p className="mt-1 text-[14px] leading-[1.55] text-[#8d9cb7]">{s.desc}</p>
              </li>
            ))}
          </ol>

          <a href={`mailto:${CONTACT_EMAIL}`} className="mt-10 inline-flex items-center gap-2 text-[14px] text-[#bcc8de] no-underline transition-colors hover:text-[#e9b872]">
            <Mail className="h-4 w-4" /> {CONTACT_EMAIL}
          </a>
        </div>

        {/* Right: the form, or the confirmation */}
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}>
          {done ? (
            <div className="rounded-[18px] border border-white/[.1] bg-white/[.03] p-8 sm:p-10" role="status">
              <CheckCircle2 className="mb-5 h-9 w-9 text-[#e9b872]" />
              <h2 className="mb-3 font-serif text-[32px] font-normal text-[#fbfcfe]">{q.done.title}</h2>
              <p className="mb-7 max-w-[480px] text-[15.5px] leading-[1.6] text-[#a9b7d0]">{q.done.body}</p>
              {done.reference && (
                <div className="mb-8 inline-flex flex-col rounded-[12px] border border-[#e9b872]/30 bg-[#e9b872]/[.06] px-5 py-3">
                  <span className="font-mono text-[11px] uppercase tracking-[1.5px] text-[#8293af]">{q.done.reference}</span>
                  <span className="font-mono text-[20px] tracking-[1px] text-[#f3c685]">{done.reference}</span>
                </div>
              )}
              <div>
                <button type="button" onClick={() => setDone(null)} className="text-[14px] font-semibold text-[#dfe7f4] underline-offset-4 hover:text-[#e9b872] hover:underline">
                  {q.done.another}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={submit} noValidate className="relative space-y-9 rounded-[18px] border border-white/[.1] bg-white/[.025] p-6 sm:p-9">
              {error && (
                <div role="alert" className="flex items-start gap-3 rounded-[10px] border border-red-400/40 bg-red-500/10 px-4 py-3 text-[14px] text-red-100">
                  <AlertTriangle className="mt-0.5 h-4 w-4 flex-none" /> <span>{error}</span>
                </div>
              )}

              <fieldset className="space-y-5">
                <Legend>{q.sections.institution}</Legend>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-[1.4fr_1fr]">
                  <Field id="q-inst" label={L.institution} required requiredLabel={q.required} bad={is('customer.institution')}>
                    <input id="q-inst" className={fieldClass(is('customer.institution'))} value={form.customer.institution} onChange={upd('customer', 'institution')} placeholder={L.institutionPh} aria-invalid={is('customer.institution')} autoComplete="organization" maxLength={200} />
                  </Field>
                  <Field id="q-country" label={L.country}>
                    <input id="q-country" className={fieldClass(false)} value={form.customer.country} onChange={upd('customer', 'country')} placeholder={L.countryPh} autoComplete="country-name" maxLength={100} />
                  </Field>
                </div>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field id="q-name" label={L.contactName} required requiredLabel={q.required} bad={is('customer.contactName')}>
                    <input id="q-name" className={fieldClass(is('customer.contactName'))} value={form.customer.contactName} onChange={upd('customer', 'contactName')} aria-invalid={is('customer.contactName')} autoComplete="name" maxLength={200} />
                  </Field>
                  <Field id="q-role" label={L.contactRole}>
                    <input id="q-role" className={fieldClass(false)} value={form.customer.contactRole} onChange={upd('customer', 'contactRole')} placeholder={L.contactRolePh} autoComplete="organization-title" maxLength={100} />
                  </Field>
                  <Field id="q-email" label={L.contactEmail} required requiredLabel={q.required} bad={is('customer.contactEmail')}>
                    <input id="q-email" type="email" className={fieldClass(is('customer.contactEmail'))} value={form.customer.contactEmail} onChange={upd('customer', 'contactEmail')} aria-invalid={is('customer.contactEmail')} autoComplete="email" maxLength={200} />
                  </Field>
                  <Field id="q-phone" label={L.contactPhone}>
                    <input id="q-phone" type="tel" className={fieldClass(false)} value={form.customer.contactPhone} onChange={upd('customer', 'contactPhone')} autoComplete="tel" maxLength={50} />
                  </Field>
                </div>
              </fieldset>

              <fieldset className="space-y-5">
                <Legend>{q.sections.need}</Legend>
                <div role="radiogroup" aria-label={L.kind} className="space-y-2">
                  <div className="text-[13.5px] font-medium text-[#c7d2e5]">{L.kind}</div>
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {[['new', L.kindNew], ['existing', L.kindExisting]].map(([v, label]) => (
                      <label key={v} className={cn(
                        'flex cursor-pointer items-center gap-3 rounded-[10px] border px-4 py-3 text-[14px] transition-colors',
                        form.request.kind === v ? 'border-[#e9b872]/70 bg-[#e9b872]/[.07] text-[#fbfcfe]' : 'border-white/[.12] text-[#aebbd2] hover:border-white/25'
                      )}>
                        <input type="radio" name="kind" value={v} checked={form.request.kind === v} onChange={upd('request', 'kind')} className="accent-[#e9b872]" />
                        {label}
                      </label>
                    ))}
                  </div>
                </div>

                {form.request.kind === 'existing' ? (
                  <Field id="q-host" label={L.existingHost} required requiredLabel={q.required} bad={is('request.existingHost')}>
                    <input id="q-host" className={fieldClass(is('request.existingHost'))} value={form.request.existingHost} onChange={upd('request', 'existingHost')} placeholder={L.existingHostPh} aria-invalid={is('request.existingHost')} maxLength={200} />
                  </Field>
                ) : (
                  <Field id="q-sub" label={L.subdomain} hint={L.subdomainHint} bad={is('request.subdomain')}>
                    <div className={cn('flex items-stretch overflow-hidden rounded-[10px] border bg-white/[.04] focus-within:ring-2 focus-within:ring-[#e9b872]/60', is('request.subdomain') ? 'border-red-400/70' : 'border-white/[.12]')}>
                      <input id="q-sub" className="min-w-0 flex-1 bg-transparent px-4 py-2.5 text-[15px] text-[#eef3fb] placeholder:text-[#6f7f9b] focus:outline-none" value={form.request.subdomain} onChange={upd('request', 'subdomain')} placeholder="myuniversity" aria-invalid={is('request.subdomain')} aria-describedby="q-sub-hint" maxLength={63} autoCapitalize="none" spellCheck={false} />
                      <span className="flex items-center border-l border-white/[.1] px-3 font-mono text-[13px] text-[#8293af]">.academix.tn</span>
                    </div>
                  </Field>
                )}

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field id="q-depts" label={L.departments} hint={L.departmentsHint} required requiredLabel={q.required} bad={is('request.departments')}>
                    <input id="q-depts" type="number" min={1} max={200} inputMode="numeric" className={cn(fieldClass(is('request.departments')), 'tabular-nums')} value={form.request.departments} onChange={upd('request', 'departments')} aria-invalid={is('request.departments')} aria-describedby={described('q-depts', L.departmentsHint)} />
                  </Field>
                  <Field id="q-curr" label={L.curricula} hint={L.curriculaHint} bad={is('request.maxActiveCurricula')}>
                    <input id="q-curr" type="number" min={1} max={20} inputMode="numeric" className={cn(fieldClass(is('request.maxActiveCurricula')), 'tabular-nums')} value={form.request.maxActiveCurricula} onChange={upd('request', 'maxActiveCurricula')} aria-invalid={is('request.maxActiveCurricula')} aria-describedby={described('q-curr', L.curriculaHint)} />
                  </Field>
                </div>

                <div role="radiogroup" aria-label={L.term} className="space-y-2">
                  <div className="text-[13.5px] font-medium text-[#c7d2e5]">{L.term}</div>
                  <div className="inline-flex rounded-[10px] border border-white/[.12] p-1">
                    {[1, 2, 3].map((n) => (
                      <label key={n} className={cn(
                        'cursor-pointer rounded-[7px] px-4 py-1.5 text-[14px] transition-colors focus-within:ring-2 focus-within:ring-[#e9b872]/60',
                        Number(form.request.termYears) === n ? 'bg-[#e9b872] font-semibold text-[#0a1628]' : 'text-[#aebbd2] hover:text-white'
                      )}>
                        <input type="radio" name="term" value={n} checked={Number(form.request.termYears) === n} onChange={upd('request', 'termYears')} className="sr-only" />
                        {L.termYear(n)}
                      </label>
                    ))}
                  </div>
                </div>

                <Field id="q-names" label={L.departmentNames}>
                  <input id="q-names" className={fieldClass(false)} value={form.request.departmentNames} onChange={upd('request', 'departmentNames')} placeholder={L.departmentNamesPh} maxLength={2000} />
                </Field>
                <Field id="q-msg" label={L.message}>
                  <textarea id="q-msg" rows={4} className={cn(fieldClass(false), 'min-h-[110px]')} value={form.request.message} onChange={upd('request', 'message')} placeholder={L.messagePh} maxLength={5000} />
                </Field>
              </fieldset>

              <fieldset className="space-y-5">
                <Legend hint={q.sections.invoicingHint}>{q.sections.invoicing}</Legend>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field id="q-legal" label={L.legalName}>
                    <input id="q-legal" className={fieldClass(false)} value={form.invoicing.legalName} onChange={upd('invoicing', 'legalName')} maxLength={200} />
                  </Field>
                  <Field id="q-tax" label={L.taxId}>
                    <input id="q-tax" className={fieldClass(false)} value={form.invoicing.taxId} onChange={upd('invoicing', 'taxId')} maxLength={100} />
                  </Field>
                </div>
                <Field id="q-addr" label={L.address}>
                  <textarea id="q-addr" rows={2} className={fieldClass(false)} value={form.invoicing.address} onChange={upd('invoicing', 'address')} autoComplete="street-address" maxLength={500} />
                </Field>
              </fieldset>

              {/* Honeypot: hidden from people and assistive tech. */}
              <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
                <label htmlFor="q-website">Website</label>
                <input id="q-website" tabIndex={-1} autoComplete="off" value={form.website} onChange={(e) => setForm((f) => ({ ...f, website: e.target.value }))} />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-[11px] bg-[#e9b872] px-6 py-[14px] text-[15.5px] font-semibold text-[#0a1628] shadow-[0_10px_30px_rgba(233,184,114,.25)] transition hover:bg-[#f3c685] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f3c685] focus-visible:ring-offset-2 focus-visible:ring-offset-[#060e1c] disabled:opacity-60"
              >
                <Send className="h-4 w-4" /> {sending ? q.sending : q.submit}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default QuoteRequest;
