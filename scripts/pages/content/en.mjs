// English content for the static pages. Facts about ABET are taken from ABET's
// own 2026–27 documents (Accreditation Policy and Procedure Manual, the four
// commissions' criteria) and abet.org; product statements must match what the
// abet_quality platform ships. Keep content/fr.mjs in step.

const APPM = '<a href="https://www.abet.org/accreditation/accreditation-criteria/accreditation-policy-and-procedure-manual-appm-2026-2027/" rel="noopener">Accreditation Policy and Procedure Manual (APPM), 2026–27</a>';
const CRITERIA = '<a href="https://www.abet.org/accreditation/accreditation-criteria/" rel="noopener">ABET accreditation criteria</a>';

export const faqItems = [
  // About ABET
  ['What is ABET accreditation?', 'ABET accreditation is a review, by ABET’s volunteer experts, that confirms a college or university program meets the quality standards of its profession. ABET is a nonprofit, non-governmental organization that accredits programs in applied and natural science, computing, engineering and engineering technology. According to abet.org it currently accredits 4,863 programs at 950 colleges and universities in 42 countries. See <a href="/what-is-abet-accreditation">our guide to ABET accreditation</a>.'],
  ['Why is ABET accreditation important for a program?', 'It gives graduates a degree that employers, licensing bodies and graduate schools recognize. Graduation from an ABET-accredited program is a prerequisite for many licensing and certifying bodies, and ABET signs mutual recognition agreements (the Washington, Sydney, Dublin and Seoul Accords, among others) that extend recognition of its accredited programs internationally. It also gives the program a structured continuous-improvement process.'],
  ['Does ABET accredit universities or departments?', 'No. ABET accredits individual educational programs, each leading to a degree. It does not accredit institutions or departments.'],
  ['Which programs can be ABET accredited?', 'Programs that fall under one of ABET’s four commissions: engineering (EAC; bachelor’s and master’s), engineering technology (ETAC; associate and bachelor’s), computing (CAC; associate, bachelor’s and master’s) and applied and natural science (ANSAC; associate, bachelor’s and master’s). The program name must describe its content, and engineering program names must include the word “engineering”.'],
  ['What are the eligibility requirements for an initial ABET review?', 'The institution must be a recognized degree-granting institution with control over the program; the program must have had at least one graduate within the two academic years before the on-site review; and an institution with no ABET-accredited programs in that commission must first complete a Readiness Review. Details are in our <a href="/what-is-abet-accreditation#eligibility">eligibility section</a>.'],
  ['What are the ABET criteria?', 'Every program must meet the General Criteria of its commission: 1 Students, 2 Program Educational Objectives, 3 Student Outcomes, 4 Continuous Improvement, 5 Curriculum, 6 Faculty, 7 Facilities and 8 Institutional Support. A program must also satisfy the Program Criteria for its discipline, written with ABET’s member societies.'],
  ['How long does ABET accreditation last?', 'A program with no deficiencies or weaknesses receives a Next General Review action, with a typical duration of six years. Accredited programs are reviewed comprehensively at intervals of no more than six years.'],
  ['When must a program apply, and when is the Self-Study Report due?', 'The institution submits a Request for Evaluation by January 31 of the year it wants the review, and the Self-Study Report by July 1. On-site reviews normally take place between September and December, and the final decision reaches the institution by August 31 of the following year.'],
  ['What is an ABET Self-Study Report?', 'It is the document in which a program shows, criterion by criterion, how it meets ABET’s criteria and policies. It must be written in English and follows the Self-Study Questionnaire of the program’s commission. See <a href="/abet-self-study-report">how Academix generates it</a>.'],
  // About Academix
  ['What is Academix?', 'Academix is ABET accreditation software for universities. Instructors enter assessment results, coordinators write course reports, quality managers follow readiness criterion by criterion, and the platform generates the Self-Study Report from the evidence collected over the cycle.'],
  ['Which ABET commissions does Academix support?', 'All four: EAC, CAC, ETAC and ANSAC, with each commission’s Student Outcomes and Self-Study outline. The 2026–27 Program Criteria of every EAC, ETAC and CAC discipline are included word for word; for ANSAC disciplines the criteria are named and cited.'],
  ['How is Academix priced?', 'Academix is licensed per department, per year, for one to three years. You request a quote, receive it by email, and pay by invoice; there is no online payment. See <a href="/pricing">pricing</a>.'],
  ['Where is our data hosted, and who can see it?', 'Academix is hosted by Jahiz Digital Solutions. Each institution gets its own address and its own database, and nothing is shared between customers. Access inside the platform follows each person’s role and department, and the database is backed up weekly.'],
  ['Can we see Academix before buying?', 'Yes. We run live online demos on request. <a href="/#contact">Book a demo</a> and tell us about your programs and your next ABET visit.'],
  ['Does Academix support NCAAA or other accreditors?', 'Academix is built for ABET. Its course reports can also be exported in the ETEC TP-154 format used by Saudi universities, but it does not claim alignment with NCAAA standards.'],
];

export const pages = {
  // -------------------------------------------------------------------------
  'what-is-abet-accreditation': {
    title: 'What Is ABET Accreditation? Criteria and Eligibility | Academix',
    description: 'A guide to ABET accreditation: what ABET is, which programs its four commissions accredit, the General and Program Criteria, eligibility, and the review timeline.',
    eyebrow: 'ABET guide',
    h1: 'What is ABET accreditation?',
    lede: 'ABET accreditation confirms that a college or university program meets the quality standards of its profession. This guide explains what ABET accredits, which programs are eligible, what the criteria ask for and how a review runs, based on ABET’s 2026–27 documents.',
    type: 'Article',
    blocks: [
      { h2: 'What ABET is', id: 'what-is-abet' },
      { p: 'ABET is a nonprofit, non-governmental organization that accredits college and university programs in applied and natural science, computing, engineering and engineering technology. Its accreditation process is ISO 9001:2015 certified. According to <a href="https://www.abet.org/about-abet/" rel="noopener">abet.org</a>, ABET currently accredits <strong>4,863 programs at 950 colleges and universities in 42 countries</strong>.' },
      { p: 'Reviews are carried out by volunteer experts from industry, academia and government, organized in four accreditation commissions. ABET does <strong>not</strong> accredit institutions or departments: it accredits individual programs, each leading to a degree.' },

      { h2: 'Which programs ABET accredits', id: 'commissions' },
      { p: 'A program must be accreditable under one or more of ABET’s four commissions. The commission, and so the criteria that apply, is determined by the program’s name, curriculum, publications, objectives and graduate transcripts.' },
      { table: { caption: 'ABET commissions', head: ['Commission', 'Programs', 'Degree levels'], rows: [
        ['EAC, Engineering', 'Programs leading to the professional practice of engineering. Every program name must include the word “engineering”.', 'Bachelor’s, master’s'],
        ['ETAC, Engineering Technology', 'Bachelor’s programs leading to the professional practice of engineering technology; associate programs preparing engineering technicians. A name with “engineering” must also include “technology”.', 'Associate, bachelor’s'],
        ['CAC, Computing', 'Programs across computing, computational, information and informatics disciplines, such as computer science, cybersecurity, information systems and information technology.', 'Associate, bachelor’s, master’s'],
        ['ANSAC, Applied and Natural Science', 'Programs using mathematics and the sciences as the foundation for professional practice, such as environmental science, health physics, safety or surveying.', 'Associate, bachelor’s, master’s'],
      ] } },
      { p: 'If a program’s name implies a discipline for which Program Criteria exist, the program must meet those criteria too; if it invokes more than one commission, it is reviewed jointly by all of them.' },

      { h2: 'Why accreditation matters', id: 'why' },
      { ul: [
        '<strong>Recognition of graduates.</strong> Graduation from an ABET-accredited program is a prerequisite for many licensing and certifying bodies.',
        '<strong>International mobility.</strong> ABET is signatory to mutual recognition agreements, including the Washington Accord (engineering), the Sydney Accord (engineering technology, bachelor’s level), the Dublin Accord (engineering technician, associate level) and the Seoul Accord (computing).',
        '<strong>Employers and graduate schools.</strong> Accreditation is an external, peer-reviewed signal that a program’s graduates are prepared for professional practice.',
        '<strong>A continuous-improvement discipline.</strong> The criteria require a program to set objectives, measure student outcomes and act on the results, cycle after cycle.',
      ] },

      { h2: 'Eligibility for an ABET review', id: 'eligibility' },
      { p: 'The eligibility rules are set out in section I.C of ABET’s ' + APPM + '. In summary:' },
      { h3: 'The institution' },
      { ul: [
        'It must be an institution of higher education with verifiable governmental, national or regional recognition to provide programs and confer degrees. Outside the United States, it must be recognized as degree-granting in its home jurisdiction; U.S. institutions must be accredited by a recognized institutional accreditor.',
        'It must show control over the program, and be able to produce for each graduate an official record of academic work and a statement of graduation that names the program and the degree level.',
        'The program name and degree on those documents must appear in English exactly as on the Request for Evaluation accepted by ABET.',
      ] },
      { h3: 'The program' },
      { ul: [
        'It must be an integrated, organized experience that leads to a degree, with program educational objectives, student outcomes, a curriculum, faculty and facilities.',
        'Its name must describe its content and be shown consistently on transcripts, in publications and on the Request for Evaluation. In non-English-speaking countries, the name is given in English and in the official language.',
        'For an <strong>initial review</strong>, the program must have had <strong>at least one graduate within the two academic years before the on-site review</strong>.',
        'An institution with no ABET-accredited programs in a given commission must first complete a <strong>Readiness Review</strong>, a mandatory document screening that assesses whether it is prepared for a review.',
      ] },

      { h2: 'The ABET criteria', id: 'criteria' },
      { p: 'Each commission publishes its criteria every year. They have two parts: the <strong>General Criteria</strong>, which every program under the commission must meet, and the <strong>Program Criteria</strong> for specific disciplines.' },
      { h3: 'General Criteria' },
      { table: { caption: 'ABET General Criteria', head: ['Criterion', 'What the program must show'], rows: [
        ['1. Students', 'How students are admitted, advised, monitored and evaluated, and that graduates meet all requirements.'],
        ['2. Program Educational Objectives', 'Published objectives, consistent with the institution’s mission and reviewed with the program’s constituencies.'],
        ['3. Student Outcomes', 'What graduates can do. EAC programs use seven outcomes; CAC and ETAC programs five, to which Program Criteria may add.'],
        ['4. Continuous Improvement', 'Regular assessment of how far student outcomes are attained, and evidence that results are used to improve the program.'],
        ['5. Curriculum', 'The subject areas and depth required by the commission, including a culminating experience where required.'],
        ['6. Faculty', 'Enough faculty, with the competence and qualifications to cover the curriculum.'],
        ['7. Facilities', 'Classrooms, laboratories, equipment and computing resources adequate for the outcomes.'],
        ['8. Institutional Support', 'Leadership, financial resources and staff sufficient to assure the program’s quality and continuity.'],
      ] } },
      { p: 'Criteria 1, 2, 4, 7 and 8 are <em>harmonized</em>: identical across all four commissions for bachelor’s and associate programs. Master’s programs follow their own, shorter set of general criteria.' },
      { h3: 'Program Criteria' },
      { p: 'Program Criteria add discipline-specific requirements, mainly on curriculum and faculty, and are written with ABET’s member societies. A software engineering program, for example, must meet both the EAC General Criteria and the Program Criteria for software engineering. See <a href="/program-criteria">Program Criteria by commission</a>.' },

      { h2: 'How a review works, and when', id: 'timeline' },
      { steps: [
        ['Contact ABET and complete a Readiness Review', 'Required for an institution without ABET-accredited programs in the commission, before it requests a review.'],
        ['Request for Evaluation by January 31', 'Signed by the institution’s chief executive, with an official transcript of a recent graduate for each program. Institutions outside the U.S. also provide acknowledgement from their national recognizing body.'],
        ['Self-Study Report by July 1', 'Submitted in English through ABET’s Accreditation Management System, one per program.'],
        ['On-site review, September to December', 'Usually three days, Sunday to Tuesday, by a team of volunteer experts.'],
        ['Draft Statement and 30-day response', 'The institution receives the team’s findings and has 30 days to respond with corrective actions.'],
        ['Final decision by August 31 of the following year', 'The commission takes its accreditation action, and the institution receives the Final Statement.'],
      ] },
      { p: 'Findings are classed as <strong>Deficiencies</strong> (a criterion is not satisfied), <strong>Weaknesses</strong> (compliance lacks strength) and <strong>Concerns</strong>. A program with no deficiencies or weaknesses receives a Next General Review action, typically for six years; others may be asked for an interim report or visit.' },

      { h2: 'Preparing with Academix', id: 'academix' },
      { p: 'Most of the work of an ABET cycle is collecting evidence every term: outcome assessments, course reports, surveys and improvement actions. Academix organizes that work by role and generates the <a href="/abet-self-study-report">Self-Study Report</a> from it, with a <a href="/abet-readiness">readiness view</a> for each criterion along the way.' },
      { note: 'Sources: ABET, ' + APPM + ' (sections I.B–I.E and III.D); ' + CRITERIA + ' for 2026–27; <a href="https://www.abet.org/about-abet/" rel="noopener">About ABET</a> and <a href="https://www.abet.org/global-engagement/mutual-recognition-agreements/" rel="noopener">mutual recognition agreements</a> on abet.org. ABET’s documents are authoritative; always check them for your review year.' },
    ],
  },

  // -------------------------------------------------------------------------
  'abet-self-study-report': {
    title: 'ABET Self-Study Report Software: Generate the SSR | Academix',
    description: 'Generate the ABET Self-Study Report in your commission’s outline: Criteria 1–8, Program Criteria, Tables 5-1 and 6-1 and appendices, in Word.',
    eyebrow: 'Self-Study Report',
    h1: 'The ABET Self-Study Report, generated from your evidence',
    lede: 'The Self-Study Report is where a program shows ABET how it meets each criterion. Academix assembles it from the data you collect all cycle, in your commission’s official outline, and exports it as an editable Word document.',
    type: 'WebPage',
    blocks: [
      { h2: 'What the Self-Study Report is' },
      { p: 'ABET evaluates a program partly on the Self-Study Report it submits, which addresses how the program meets every criterion and applicable policy. It covers all delivery methods and paths to the degree, must be written in English, and is due by July 1 of the review year. Each commission publishes a Self-Study Questionnaire that sets its outline.' },
      { h2: 'What Academix puts in it' },
      { table: { caption: 'Self-Study Report contents', head: ['Part', 'Filled from'], rows: [
        ['Background', 'Program information and your narrative sections.'],
        ['Criterion 1, Students', 'Your policies and the enrollment and graduation record.'],
        ['Criterion 2, Program Educational Objectives', 'Your PEOs, their mapping to the mission, your constituents and the PEO review record.'],
        ['Criterion 3, Student Outcomes', 'Your outcomes and performance indicators, and how they relate to the PEOs.'],
        ['Criterion 4, Continuous Improvement', 'Attainment results, the assessment campaigns, surveys and closed-loop improvement actions.'],
        ['Criterion 5, Curriculum', 'The curriculum, with Table 5-1 generated from your courses.'],
        ['Criterion 6, Faculty', 'Faculty records, with Table 6-1 of faculty qualifications.'],
        ['Criteria 7 and 8', 'Facilities and equipment records, and institutional support narratives.'],
        ['Program Criteria', 'The 2026–27 Program Criteria for your discipline, word for word, followed by your response.'],
        ['Appendices', 'Course syllabi, faculty vitae, equipment (Appendix C) and the institutional summary (Appendix D).'],
      ] } },
      { p: 'The narrative sections stay yours to write: Academix gives each one its own editor and progress status, and supplies the data-driven parts so the numbers in the report are the same ones your team sees on screen.' },
      { h2: 'Why generate it instead of writing it from scratch' },
      { ul: [
        '<strong>One source of figures.</strong> Attainment, tables and counts come from the same records as the dashboards, so a download never disagrees with the screen.',
        '<strong>The right outline.</strong> The report follows the outline of your program’s commission: EAC, CAC, ETAC or ANSAC.',
        '<strong>The exact criteria text.</strong> Program Criteria are printed as ABET publishes them, including proposed changes when they are out for comment.',
        '<strong>Evidence in one place.</strong> Files attached to each criterion are listed in the report’s evidence index.',
      ] },
      { p: 'See also <a href="/abet-readiness">ABET readiness</a>, which shows what is still missing before you export.' },
    ],
  },

  // -------------------------------------------------------------------------
  'student-outcomes-assessment': {
    title: 'ABET Student Outcomes Assessment Software | Academix',
    description: 'Assess ABET Student Outcomes through performance indicators and course learning outcomes, plan assessment campaigns per term and close the loop for Criterion 4.',
    eyebrow: 'Student Outcomes',
    h1: 'Student Outcomes assessment, from the grade book to Criterion 4',
    lede: 'ABET asks every program to measure how far its graduates attain its Student Outcomes and to use the results to improve. Academix links each outcome to the course work that evidences it and keeps the figures stable once reported.',
    type: 'WebPage',
    blocks: [
      { h2: 'The chain from objectives to courses' },
      { ol: [
        '<strong>Program Educational Objectives (PEOs)</strong>: what graduates achieve a few years after graduation (Criterion 2).',
        '<strong>Student Outcomes (SOs)</strong>: what students can do by graduation, such as ABET’s seven EAC outcomes (Criterion 3).',
        '<strong>Performance indicators (PIs)</strong>: measurable statements that break each outcome down.',
        '<strong>Course learning outcomes (CLOs)</strong>: assessed in courses and mapped to the indicators they evidence.',
      ] },
      { p: 'Grades on assessed work roll up from CLOs to performance indicators to Student Outcomes, so every outcome figure can be traced back to the students and courses behind it.' },
      { h2: 'How attainment is measured' },
      { p: 'Academix reports attainment as the share of assessed students at or above the “meets expectations” level, compared with the target you set for each indicator. How evidence is combined across courses and indicators is a setting, and the method in use is recorded with every result.' },
      { ul: [
        '<strong>Assessment campaigns</strong> plan which CLOs measure each indicator in a term, and show coverage across the cycle.',
        '<strong>Snapshots</strong> freeze a reported figure, so it does not drift when a grade is corrected later.',
        '<strong>Indirect evidence</strong> from constituent surveys sits beside the direct measures.',
        '<strong>Improvement actions</strong> are raised against below-target indicators and followed until the loop is closed, for Criterion 4.',
      ] },
      { h2: 'For every commission' },
      { p: 'Student Outcome templates follow each commission’s 2026–27 criteria: seven outcomes for EAC programs, five for CAC and ETAC, with the discipline outcome that some CAC Program Criteria add. See <a href="/what-is-abet-accreditation#criteria">the ABET criteria</a>.' },
    ],
  },

  // -------------------------------------------------------------------------
  'abet-readiness': {
    title: 'ABET Readiness: Criterion-by-Criterion Tracking | Academix',
    description: 'See how ready each program is for its ABET review: completeness for every criterion, what is outstanding and where to fix it, from data you already collect.',
    eyebrow: 'ABET readiness',
    h1: 'Know where each criterion stands, before the visit',
    lede: 'The ABET Readiness Center checks each program against the criteria, using the data already in Academix, and lists what is still outstanding with a link to where it is fixed.',
    type: 'WebPage',
    blocks: [
      { h2: 'What it checks' },
      { p: 'Readiness is a set of concrete checks for each criterion, for example that every performance indicator is measured by at least one CLO, that improvement actions have recorded follow-ups, that faculty records are complete and that evidence is attached. Each program gets an overall completeness figure and a list of outstanding items.' },
      { ul: [
        '<strong>Outstanding first.</strong> What still needs work, grouped by criterion.',
        '<strong>One click to the fix.</strong> Each item links to the page where it is resolved.',
        '<strong>By program and cycle.</strong> Readiness is computed per curriculum, and can be limited to an assessment cycle.',
        '<strong>On the home dashboard.</strong> Readiness also appears on the home page, so it is seen every day, not only before a visit.',
      ] },
      { p: 'When the checks are complete, the <a href="/abet-self-study-report">Self-Study Report</a> can be exported from the same page.' },
    ],
  },

  // -------------------------------------------------------------------------
  'program-criteria': {
    title: 'ABET Program Criteria by Commission (EAC, ETAC, CAC) | Academix',
    description: 'ABET Program Criteria for every EAC, ETAC and CAC discipline in the 2026–27 cycle, with their lead societies. Academix includes the criteria text word for word.',
    eyebrow: 'Program Criteria',
    h1: 'ABET Program Criteria, by commission',
    lede: 'Program Criteria add discipline-specific requirements to ABET’s General Criteria. Academix includes the 2026–27 Program Criteria of every EAC, ETAC and CAC discipline word for word, and prints them in your Self-Study Report.',
    type: 'CollectionPage',
    blocks: [
      { p: 'A program whose name implies a discipline with Program Criteria must meet them in addition to its commission’s General Criteria. They are written with ABET’s member societies and mostly concern curriculum and faculty; some CAC criteria also add a Student Outcome.' },
      { html: '__COMMISSION_INDEX__' },
      { note: 'ANSAC Program Criteria (for example environmental science, geology, safety and surveying) are named and cited in Academix; their full text is being added.' },
    ],
  },
  'program-criteria/eac': { commission: 'EAC' },
  'program-criteria/etac': { commission: 'ETAC' },
  'program-criteria/cac': { commission: 'CAC' },

  // -------------------------------------------------------------------------
  pricing: {
    title: 'Academix Pricing: Licensed per Department, per Year',
    description: 'Academix is licensed per department, per year, for one to three years. Request a quote by email; pay by invoice. Hosting, support and updates are included.',
    eyebrow: 'Pricing',
    h1: 'Licensed per department, per year',
    lede: 'Each accredited department needs its own licence. You tell us what you need, we email you a quote, and you pay by invoice. There is nothing to pay online.',
    type: 'WebPage',
    blocks: [
      { h2: 'What the price depends on' },
      { ul: [
        '<strong>Departments.</strong> One licence per department whose programs you prepare for ABET.',
        '<strong>Active curricula per department.</strong> How many program versions are in use at the same time.',
        '<strong>Length.</strong> One, two or three years.',
      ] },
      { h2: 'What every licence includes' },
      { ul: [
        'Your institution’s own address and its own database, hosted for you, with weekly backups.',
        'Every module: outcomes assessment, course reports, readiness, the Self-Study Report and continuous improvement.',
        'Updates as ABET publishes new criteria each cycle.',
        'Onboarding and support from the team that builds the platform.',
      ] },
      { h2: 'How buying works' },
      { steps: [
        ['Request a quote', 'Tell us about your institution, departments and timeline on the <a href="/#quote">quote form</a>.'],
        ['Receive the quote', 'We email it, usually within two working days.'],
        ['Accept and pay the invoice', 'Reply to the quote; we send the invoice for your finance office.'],
        ['Go live', 'You receive your address and a link to choose your password, then set up your departments.'],
      ] },
      { p: 'Prefer to see it first? <a href="/#contact">Book an online demo</a>.' },
    ],
  },

  // -------------------------------------------------------------------------
  faq: {
    title: 'ABET Accreditation and Academix: Frequently Asked Questions',
    description: 'Answers about ABET accreditation (eligibility, criteria, timeline, why it matters) and about Academix (commissions supported, pricing, hosting, demos).',
    eyebrow: 'FAQ',
    h1: 'Frequently asked questions',
    lede: 'About ABET accreditation, and about Academix.',
    type: 'FAQPage',
    blocks: [
      { h2: 'About ABET accreditation', id: 'abet' },
      { faq: '__FAQ_ABET__' },
      { h2: 'About Academix', id: 'academix' },
      { faq: '__FAQ_ACADEMIX__' },
    ],
  },
};

export const commissionPages = {
  EAC: {
    title: 'ABET EAC Program Criteria: 31 Disciplines | Academix',
    description: 'The 31 engineering disciplines with ABET EAC Program Criteria in 2026–27, with their lead societies. Academix includes the full text of each.',
    h1: 'EAC Program Criteria: engineering disciplines',
    lede: 'The Engineering Accreditation Commission publishes Program Criteria for 31 disciplines in 2026–27. EAC criteria concern curriculum and faculty, and apply at the bachelor’s and master’s levels.',
  },
  ETAC: {
    title: 'ABET ETAC Program Criteria: 26 Disciplines | Academix',
    description: 'The 26 engineering technology disciplines with ABET ETAC Program Criteria in 2026–27, with their lead societies. Academix includes the full text of each.',
    h1: 'ETAC Program Criteria: engineering technology disciplines',
    lede: 'The Engineering Technology Accreditation Commission publishes Program Criteria for 26 disciplines in 2026–27, most with separate associate and baccalaureate requirements.',
  },
  CAC: {
    title: 'ABET CAC Program Criteria: Computing Disciplines | Academix',
    description: 'ABET CAC Program Criteria 2026–27: computer science, cybersecurity, data science, information systems and IT, including associate and proposed criteria.',
    h1: 'CAC Program Criteria: computing disciplines',
    lede: 'The Computing Accreditation Commission publishes Program Criteria for computing disciplines, several of which add a discipline Student Outcome to the five general ones.',
  },
};

export const ui = {
  commissionIntro: (n, c) => `${n} disciplines with ${c} Program Criteria in the 2026–27 cycle.`,
  colDiscipline: 'Discipline', colSociety: 'Lead society', colStatus: 'In Academix',
  full: 'Full text', proposed: 'Proposed (not yet in force)', proposedChange: 'Full text; proposed change shown',
  seeAll: (c) => `See all ${c} disciplines`,
  commissionNames: { EAC: 'Engineering (EAC)', ETAC: 'Engineering Technology (ETAC)', CAC: 'Computing (CAC)' },
  programCriteria: 'Program Criteria',
  levelsNote: 'Associate level',
};
