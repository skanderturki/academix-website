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
  ['How much does ABET accreditation cost?', 'For programs outside the U.S., ABET’s 2026–27 fees are US $1,185 per program for a Readiness Review, $8,975 for the team chair and $8,975 per program evaluator for the review, then an annual maintenance fee of $1,685 per campus and commission plus $1,685 per accredited program. A first review of one program comes to about $19,135. See <a href="/abet-accreditation-cost">ABET accreditation cost</a>.'],
  ['How long does it take to get ABET accredited?', 'For a first program at an institution new to the commission, about two years from the Readiness Review (by September 1) to the final decision (by August 31 two years later), after the program has graduates and assessment evidence. See <a href="/abet-accreditation-timeline">the ABET timeline</a>.'],
  ['What are performance indicators in ABET assessment?', 'Specific, measurable statements that break a Student Outcome into parts a rubric can score, such as “presents technical work to a non-specialist audience” for communication. ABET’s criteria do not require them, but they are a common way to assess outcomes under Criterion 4. See <a href="/abet-performance-indicators">performance indicators with examples</a>.'],
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
    guide: true,
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
  'abet-student-outcomes': {
    title: 'ABET Student Outcomes 2026–27: EAC, CAC, ETAC, ANSAC | Academix',
    description: 'The Student Outcomes each ABET commission requires under Criterion 3 in 2026–27: seven for EAC, five for CAC and ETAC, five or six for ANSAC, summarized.',
    eyebrow: 'ABET guide',
    h1: 'ABET Student Outcomes, by commission',
    lede: 'Student Outcomes describe what students should know and be able to do by the time they graduate. Criterion 3 sets the outcomes every program must include; this page summarizes them for the four commissions in the 2026–27 cycle.',
    type: 'Article',
    guide: true,
    blocks: [
      { p: 'Every program must document its Student Outcomes and show, under <a href="/abet-criterion-4-continuous-improvement">Criterion 4</a>, how far they are attained. A program may add outcomes of its own, and some Program Criteria add one. The summaries below are ours; the binding wording is in each commission’s ' + CRITERIA + '.' },

      { h2: 'Engineering (EAC): seven outcomes', id: 'eac' },
      { table: { caption: 'EAC Student Outcomes 1–7', head: ['#', 'Outcome', 'In short'], rows: [
        ['1', 'Complex problem solving', 'Identify, formulate and solve complex engineering problems by applying engineering, science and mathematics.'],
        ['2', 'Engineering design', 'Design solutions that meet specified needs, considering public health, safety and welfare and global, cultural, social, environmental and economic factors.'],
        ['3', 'Communication', 'Communicate effectively with a range of audiences.'],
        ['4', 'Ethics and professional responsibility', 'Recognize ethical and professional responsibilities and make informed judgments that consider the impact of engineering solutions in global, economic, environmental and societal contexts.'],
        ['5', 'Teamwork', 'Work effectively on a team whose members together lead, collaborate, set goals, plan tasks and meet objectives.'],
        ['6', 'Experimentation', 'Develop and conduct experiments, analyze and interpret data, and use engineering judgment to draw conclusions.'],
        ['7', 'Learning new knowledge', 'Acquire and apply new knowledge as needed, using appropriate learning strategies.'],
      ] } },
      { p: 'EAC Program Criteria add requirements on curriculum and faculty, not further outcomes.' },

      { h2: 'Computing (CAC): five outcomes, plus a discipline outcome', id: 'cac' },
      { table: { caption: 'CAC Student Outcomes 1–5', head: ['#', 'Outcome', 'In short'], rows: [
        ['1', 'Problem analysis', 'Analyze a complex computing problem and apply principles of computing and related disciplines to identify solutions.'],
        ['2', 'Solution design', 'Design, implement and evaluate a computing-based solution that meets a given set of requirements in the program’s discipline.'],
        ['3', 'Communication', 'Communicate effectively in a variety of professional contexts.'],
        ['4', 'Professional responsibility', 'Recognize professional responsibilities and make informed judgments in computing practice based on legal and ethical principles.'],
        ['5', 'Teamwork', 'Function effectively as a member or leader of a team.'],
      ] } },
      { p: 'Each CAC discipline with Program Criteria adds a sixth outcome. Computer science programs, for example, must also show that graduates can apply computer science theory and software development fundamentals to produce computing-based solutions; cybersecurity, data science, information systems and information technology each add their own. See <a href="/program-criteria/cac">CAC Program Criteria</a>.' },

      { h2: 'Engineering technology (ETAC): five outcomes at each level', id: 'etac' },
      { p: 'ETAC distinguishes <strong>well-defined</strong> problems (practical, narrow in scope, using conventional processes) at the associate level from <strong>broadly-defined</strong> problems (broader, more complex, possibly using new processes or techniques) at the bachelor’s level.' },
      { table: { caption: 'ETAC Student Outcomes, associate and bachelor’s', head: ['#', 'Associate degree', 'Bachelor’s degree'], rows: [
        ['1', 'Apply mathematics, science, engineering and technology, with modern tools, to solve well-defined problems.', 'The same, for broadly-defined problems.'],
        ['2', 'Design solutions for well-defined technical problems and assist with the design of systems, components or processes.', 'Design systems, components or processes meeting specified needs for broadly-defined problems.'],
        ['3', 'Written, oral and graphical communication in well-defined settings; find and use technical literature.', 'The same, in broadly-defined settings.'],
        ['4', 'Conduct standard tests, measurements and experiments and analyze the results.', 'The same, and use the results to improve processes.'],
        ['5', 'Function effectively as a member of a technical team.', 'Function effectively as a member and as a leader of technical teams.'],
      ] } },

      { h2: 'Applied and natural science (ANSAC): five or six outcomes', id: 'ansac' },
      { table: { caption: 'ANSAC Student Outcomes, associate and bachelor’s', head: ['#', 'Associate degree (5)', 'Bachelor’s degree (6)'], rows: [
        ['1', 'Solve broadly defined technical or scientific problems using mathematics, science and technical knowledge of the discipline.', 'The same.'],
        ['2', 'Conduct experiments or test theories, and analyze and interpret data.', 'Formulate or design a system, process, procedure or program for its intended purpose.'],
        ['3', 'Function on teams.', 'Develop and conduct experiments or test hypotheses, analyze data and use scientific judgment to draw conclusions.'],
        ['4', 'Understand professional and ethical responsibility.', 'Communicate effectively with a range of audiences.'],
        ['5', 'Communicate effectively.', 'Understand ethical and professional responsibilities and the impact of solutions in global, economic, environmental and societal contexts.'],
        ['6', '', 'Work effectively on teams that set goals, plan tasks, meet deadlines and analyze risk and uncertainty.'],
      ] } },

      { h2: 'From outcomes to evidence', id: 'evidence' },
      { p: 'An outcome such as “communicate effectively” is too broad to score directly. Most programs break each outcome into a few <a href="/abet-performance-indicators">performance indicators</a>, measure those in specific course work, and compare the results with a target. That evidence is what <a href="/abet-criterion-4-continuous-improvement">Criterion 4</a> asks programs to evaluate and act on.' },
      { p: 'In Academix, Student Outcome templates follow each commission’s 2026–27 criteria, including the CAC discipline outcomes, and every figure traces back to the courses and students behind it. See <a href="/student-outcomes-assessment">Student Outcomes assessment</a>.' },
      { note: 'Source: ABET, Criteria for Accrediting Engineering, Computing, Engineering Technology and Applied and Natural Science Programs, 2026–27, Criterion 3 and the Program Criteria. Master’s programs follow separate criteria. Check ' + CRITERIA + ' for the exact wording.' },
    ],
  },

  // -------------------------------------------------------------------------
  'abet-performance-indicators': {
    title: 'ABET Performance Indicators: Definition and Examples | Academix',
    description: 'What performance indicators are in ABET outcomes assessment, how to write good ones, and example indicators for each of the seven EAC Student Outcomes.',
    eyebrow: 'ABET guide',
    h1: 'Performance indicators for ABET Student Outcomes',
    lede: 'A performance indicator is a specific, measurable statement of one thing a student must show to attain a Student Outcome. Indicators turn broad outcomes into something a rubric can score and a program can improve.',
    type: 'Article',
    guide: true,
    blocks: [
      { h2: 'What a performance indicator is', id: 'definition' },
      { p: 'ABET’s criteria require documented processes for assessing and evaluating the attainment of <a href="/abet-student-outcomes">Student Outcomes</a> (Criterion 4). They do <strong>not</strong> define or require performance indicators. Indicators are a widely used way to meet that requirement: each outcome is broken into two to four observable parts, and each part is measured in course work.' },
      { p: 'Take EAC outcome 3, “communicate effectively with a range of audiences”. A single score for it says little. Indicators such as “organizes a technical report logically” and “presents to a non-specialist audience” show which part is strong and which needs work.' },

      { h2: 'How to write good indicators', id: 'writing' },
      { ul: [
        '<strong>One observable behaviour each,</strong> starting with an action verb: designs, analyzes, presents, justifies.',
        '<strong>Two to four per outcome.</strong> Enough to cover the outcome, few enough to measure every cycle.',
        '<strong>The same wording in every course</strong> that measures it, so results can be combined.',
        '<strong>Measured by specific work,</strong> such as a design report, a lab analysis or an exam question, not by a whole course grade.',
        '<strong>Scored with a rubric</strong> of a few levels, for example below, developing, meets and exceeds expectations.',
        '<strong>A target set in advance,</strong> for example the share of students expected at or above “meets expectations”. The program chooses the target; ABET does not set one.',
      ] },

      { h2: 'Example indicators for the EAC outcomes', id: 'examples' },
      { p: 'These are examples to adapt, not ABET requirements. Write indicators that fit your program’s courses and constituents.' },
      { table: { caption: 'Example performance indicators, EAC Student Outcomes 1–7', head: ['Outcome', 'Example indicators'], rows: [
        ['1. Complex problem solving', 'Formulates the problem with its assumptions and constraints · Selects and applies the relevant engineering, science and mathematics principles · Checks that the solution is reasonable'],
        ['2. Engineering design', 'Translates needs into measurable requirements · Generates and compares alternative designs · Considers safety, economic and environmental factors in the chosen design'],
        ['3. Communication', 'Writes a clear, well-organized technical report · Presents technical work to a non-specialist audience · Uses figures and tables that support the message'],
        ['4. Ethics and responsibility', 'Identifies the ethical issues in an engineering case · Weighs the impact of a solution on society and the environment · Justifies a decision with reference to a code of ethics'],
        ['5. Teamwork', 'Contributes a fair share to the team’s work · Helps set goals and plan tasks · Takes the lead on part of the project'],
        ['6. Experimentation', 'Plans an experiment to answer a stated question · Analyzes data with appropriate methods · Draws conclusions supported by the data'],
        ['7. Learning new knowledge', 'Finds and evaluates information beyond the course material · Applies a tool or method not taught in class'],
      ] } },

      { h2: 'From course work to outcome', id: 'rollup' },
      { steps: [
        ['Map', 'Link each indicator to the course learning outcomes (CLOs) and assessed work that evidence it.'],
        ['Score', 'Instructors score that work with the indicator’s rubric.'],
        ['Combine', 'Results are combined across sections and courses for each indicator, then across indicators for the outcome.'],
        ['Compare and act', 'Indicators below target point to what to change, and are measured again after the change.'],
      ] },
      { p: 'Academix works this way: CLOs map to performance indicators and indicators to Student Outcomes, attainment is reported against each indicator’s target, and the method used to combine results is recorded with every figure. See <a href="/student-outcomes-assessment">Student Outcomes assessment</a>.' },
      { note: 'The statement that ABET’s criteria do not define performance indicators is based on the 2026–27 criteria of all four commissions. Example indicators are Academix’s own.' },
    ],
  },

  // -------------------------------------------------------------------------
  'abet-criterion-4-continuous-improvement': {
    title: 'ABET Criterion 4: Continuous Improvement Explained | Academix',
    description: 'What ABET Criterion 4 requires, how assessment differs from evaluation, and how to run and document an improvement cycle that a review team can follow.',
    eyebrow: 'ABET guide',
    h1: 'ABET Criterion 4: continuous improvement',
    lede: 'Criterion 4 asks a program to measure how well its students attain the Student Outcomes, and to use what it finds to improve. It is short, it reads the same in all four commissions, and it is where much of a Self-Study Report’s evidence lives.',
    type: 'Article',
    guide: true,
    blocks: [
      { h2: 'What Criterion 4 says', id: 'text' },
      { p: 'The criterion opens: “The program must regularly use appropriate, documented processes for assessing and evaluating the extent to which the student outcomes are being attained.” It goes on to require that the results be used systematically as input to the program’s continuous-improvement actions, and allows other information to be used as well.' },
      { p: 'Three words carry most of the weight: the processes must be <strong>regular</strong>, <strong>documented</strong> and <strong>used</strong>. The criteria do not set how often each outcome must be measured, which methods to use, or what target to reach; those choices are the program’s, and it must be able to explain them.' },

      { h2: 'Assessment and evaluation are different steps', id: 'assessment-evaluation' },
      { table: { caption: 'ABET definitions', head: ['', 'What it is', 'What it produces'], rows: [
        ['Assessment', 'Processes that identify, collect and prepare data on the attainment of Student Outcomes, using direct, indirect, quantitative and qualitative measures as appropriate; sampling is allowed.', 'Results: scores, rates, survey answers.'],
        ['Evaluation', 'Processes that interpret the data and evidence from assessment, and determine the extent to which outcomes are attained.', 'Decisions and actions to improve the program.'],
      ] } },
      { p: 'A program that collects data but never records what it concluded and changed has assessment without evaluation, and has not met the criterion.' },

      { h2: 'An improvement cycle a review team can follow', id: 'cycle' },
      { steps: [
        ['Define what you measure', 'Break each <a href="/abet-student-outcomes">Student Outcome</a> into <a href="/abet-performance-indicators">performance indicators</a>, each with a rubric and a target.'],
        ['Plan when', 'Schedule which course work measures each indicator, and in which term. Many programs cover every outcome over a multi-year cycle rather than every term.'],
        ['Collect evidence', 'Direct measures from scored student work, and indirect measures such as student, alumni and employer surveys.'],
        ['Evaluate', 'Faculty review the results against the targets, look for causes, and record their conclusions.'],
        ['Act', 'Decide on changes, such as to a course, a prerequisite or an assessment, with an owner and a date.'],
        ['Close the loop', 'Measure again after the change, and record whether it worked.'],
      ] },

      { h2: 'What to keep as evidence', id: 'documentation' },
      { ul: [
        'The assessment plan: outcomes, indicators, rubrics, targets and schedule.',
        'Results for each indicator and outcome, by term, with the number of students assessed.',
        'Records of evaluation meetings: who took part, what was concluded.',
        'Each improvement action, its reason, owner, date and follow-up result.',
        'Any change to the method or the targets, and why it was made.',
      ] },

      { h2: 'Common pitfalls', id: 'pitfalls' },
      { ul: [
        '<strong>Course grades as evidence.</strong> A grade mixes many outcomes; score the specific work that shows the outcome.',
        '<strong>Data that nobody uses.</strong> Results that never lead to a recorded decision do not show evaluation.',
        '<strong>Actions without follow-up.</strong> A change is only an improvement once it has been measured again.',
        '<strong>Figures that move.</strong> A result reported one year and recalculated differently the next undermines the whole record.',
      ] },
      { p: 'Academix keeps this record as you work: assessment campaigns plan the measurements, attainment is reported against each indicator’s target and frozen once reported, and improvement actions are tracked until the loop is closed. The Criterion 4 section of the <a href="/abet-self-study-report">Self-Study Report</a> is filled from it.' },
      { note: 'Source: ABET ' + CRITERIA + ' 2026–27, Definitions and Criterion 4, which is worded identically for EAC, CAC, ETAC and ANSAC. The pitfalls are Academix’s own guidance, not ABET text.' },
    ],
  },

  // -------------------------------------------------------------------------
  'abet-accreditation-timeline': {
    title: 'How Long Does ABET Accreditation Take? Timeline | Academix',
    description: 'The ABET accreditation timeline, from the Readiness Review to the final decision: every deadline (August 15, September 1, January 31, July 1) and a worked example.',
    eyebrow: 'ABET guide',
    h1: 'How long does ABET accreditation take?',
    lede: 'For a first program at an institution new to an ABET commission, about two years pass between the Readiness Review and the final decision, and the program must already have graduates. Here is every step, with ABET’s deadlines.',
    type: 'Article',
    guide: true,
    blocks: [
      { h2: 'Before you start', id: 'before' },
      { ul: [
        'The program must have had <strong>at least one graduate within the two academic years before the on-site review</strong>.',
        'It needs documented objectives and Student Outcomes, and assessment results to report: plan at least a year or two of <a href="/abet-criterion-4-continuous-improvement">assessment</a> before the review.',
        'An institution with no ABET-accredited programs in the commission must pass a <strong>Readiness Review</strong> first.',
      ] },

      { h2: 'The deadlines', id: 'deadlines' },
      { table: { caption: 'ABET review deadlines', head: ['Step', 'Deadline', 'Notes'], rows: [
        ['Readiness Review request', 'August 15, the year before the Request for Evaluation', 'Online form; only for institutions new to the commission.'],
        ['Readiness Review report and transcript', 'September 1, the same year', 'One report per program, with one official transcript of a recent graduate. Invoiced in October.'],
        ['Request for Evaluation (RFE)', 'January 31 of the review year', 'Signed by the chief executive; one per commission. It can be changed or withdrawn until the July Commission meeting.'],
        ['Self-Study Report', 'July 1 of the review year', 'In English, one per program.'],
        ['On-site review', 'September to December', 'Usually three days, by a team chair and program evaluators.'],
        ['Response to the Draft Statement', '30 days after receiving it', 'The institution’s due-process response, with any corrective actions.'],
        ['Final decision', 'By August 31 of the following year', 'The commission’s action and the Final Statement.'],
      ] } },

      { h2: 'A worked example', id: 'example' },
      { p: 'A university with no ABET-accredited engineering programs wants its first EAC review in the autumn of 2028.' },
      { steps: [
        ['August–September 2027', 'Readiness Review: request by August 15, report and transcript by September 1.'],
        ['January 31, 2028', 'Request for Evaluation submitted.'],
        ['July 1, 2028', 'Self-Study Report submitted.'],
        ['September–December 2028', 'On-site review.'],
        ['After the review', 'Draft Statement received; the institution has 30 days to respond.'],
        ['By August 31, 2029', 'Final accreditation decision.'],
      ] },
      { p: 'The assessment evidence in the July 2028 Self-Study Report has to be collected in the terms before it, so in practice preparation starts in 2026 or earlier.' },

      { h2: 'After accreditation', id: 'after' },
      { p: 'Accredited programs are reviewed comprehensively at intervals of no more than six years. A program with no deficiencies or weaknesses receives a Next General Review action, typically for six years; others may be asked for an interim report or an interim visit sooner.' },
      { p: 'Academix is built for the whole period: the evidence is collected term by term, <a href="/abet-readiness">readiness</a> shows what is outstanding for each criterion, and the <a href="/abet-self-study-report">Self-Study Report</a> is generated when July comes.' },
      { note: 'Sources: ABET ' + APPM + ', sections I.C and I.D; <a href="https://www.abet.org/accreditation/get-accredited/accreditation-step-by-step/readiness-review/" rel="noopener">Readiness Review</a> on abet.org. The example is illustrative; confirm the dates for your review year with ABET.' },
    ],
  },

  // -------------------------------------------------------------------------
  'abet-accreditation-cost': {
    title: 'How Much Does ABET Accreditation Cost? 2026–27 Fees | Academix',
    description: 'ABET’s 2026–27 fees for programs outside the U.S.: Readiness Review, review team, interim reports and annual maintenance, with worked examples.',
    eyebrow: 'ABET guide',
    h1: 'How much does ABET accreditation cost?',
    lede: 'ABET publishes its fees each year. For a first program outside the United States, the fees for the 2026–27 cycle come to about US $19,000 for the Readiness Review and the review, then about US $3,400 a year to maintain accreditation.',
    type: 'Article',
    guide: true,
    blocks: [
      { h2: 'ABET’s fees for programs outside the U.S., 2026–27', id: 'fees' },
      { table: { caption: 'ABET fee schedule, programs outside the U.S., 2026–27 (US dollars)', head: ['Fee', 'Amount', 'Charged'], rows: [
        ['Readiness Review', '$1,185', 'Per program, for institutions new to the commission'],
        ['Team chair (or co-chair)', '$8,975', 'Per review'],
        ['Program evaluator', '$8,975', 'Per evaluator, typically one per program'],
        ['One evaluator reviewing two programs', '$445', 'Added'],
        ['Extra day, per program evaluator', '$445', 'Added'],
        ['Off-campus location visit', '$445', 'Per location, per evaluator'],
        ['Interim report', '$4,785', 'Per program reviewed'],
        ['Annual maintenance, base', '$1,685', 'Per campus, per commission, each year'],
        ['Annual maintenance, per program', '$1,685', 'Per accredited program at each campus, each year'],
      ] } },
      { p: 'Invoices are billed per commission and due within 30 days; ABET adds interest of 1.5% a month after that. Cancelling a review costs 10% of the invoice before June 1, rising to 50% after August 15, and more once travel has started. Fees for U.S. programs are different.' },

      { h2: 'Worked examples', id: 'examples' },
      { table: { caption: 'ABET fees for a first review, programs outside the U.S., 2026–27', head: ['', 'One program', 'Two programs, same commission'], rows: [
        ['Readiness Review', '$1,185', '$2,370'],
        ['Team chair', '$8,975', '$8,975'],
        ['Program evaluators', '$8,975', '$17,950'],
        ['<strong>First review, total</strong>', '<strong>$19,135</strong>', '<strong>$29,295</strong>'],
        ['<strong>Annual maintenance, each year</strong>', '<strong>$3,370</strong>', '<strong>$5,055</strong>'],
      ] } },
      { p: 'These assume one campus, one evaluator per program and no extra days. An institution that already has accredited programs in the commission skips the Readiness Review.' },

      { h2: 'Costs that are not on ABET’s invoice', id: 'other-costs' },
      { ul: [
        'Faculty and staff time to run assessment every term and write the <a href="/abet-self-study-report">Self-Study Report</a>, usually the largest cost.',
        'Training, such as ABET’s workshops for program faculty.',
        'Tools for collecting and reporting assessment evidence.',
        'Any gaps the review exposes: laboratories, faculty, curriculum changes.',
      ] },
      { p: 'Academix is licensed per department, per year, and is priced by quote. See <a href="/pricing">pricing</a>.' },
      { note: 'Source: ABET, <a href="https://www.abet.org/accreditation/cost-of-accreditation/fees-for-programs-outside-the-u-s/" rel="noopener">Fees for programs outside the U.S.</a>, 2026–27 cycle, and ' + APPM + ', section I.D (the fee schedule is posted by April 1 each year). Totals are Academix’s arithmetic; always use ABET’s current schedule.' },
    ],
  },

  // -------------------------------------------------------------------------
  'choosing-abet-accreditation-software': {
    title: 'How to Choose ABET Accreditation Software: A Checklist | Academix',
    description: 'Questions to ask before choosing ABET accreditation software: commissions, outcomes model, traceable figures, the Self-Study Report, data isolation and pricing.',
    eyebrow: 'ABET guide',
    h1: 'How to choose ABET accreditation software',
    lede: 'Spreadsheets work for one program and one cycle. When several programs, dozens of instructors and six years of evidence are involved, software helps. These are the questions worth asking any vendor, including us.',
    type: 'Article',
    guide: true,
    blocks: [
      { h2: 'Does it fit ABET?', id: 'fit' },
      { ol: [
        '<strong>Commissions and degree levels.</strong> Does it support your commissions (EAC, CAC, ETAC, ANSAC) and your degree levels?',
        '<strong>The current criteria.</strong> Are this cycle’s criteria built in, including the <a href="/program-criteria">Program Criteria</a> for your disciplines, and updated each year?',
        '<strong>Your outcomes model.</strong> Can you model objectives, <a href="/abet-student-outcomes">Student Outcomes</a>, <a href="/abet-performance-indicators">performance indicators</a> and course outcomes the way your program works?',
        '<strong>The Self-Study Report.</strong> Does it produce the report in your commission’s outline, as an editable document, with the tables filled from your data?',
      ] },
      { h2: 'Can you trust its figures?', id: 'figures' },
      { ol: [
        '<strong>Traceable.</strong> Can every attainment figure be traced back to the students, courses and assessments behind it?',
        '<strong>Explained.</strong> Is the calculation method stated with the result, so an evaluator can follow it?',
        '<strong>Stable.</strong> Does a reported figure stay the same when a grade is corrected later, or change silently?',
        '<strong>Direct and indirect.</strong> Can survey results sit beside direct measures, as <a href="/abet-criterion-4-continuous-improvement">Criterion 4</a> allows?',
      ] },
      { h2: 'Will people use it?', id: 'use' },
      { ol: [
        '<strong>Roles.</strong> Do instructors, course coordinators, quality managers and deans each see what they need, and only that?',
        '<strong>Getting data in.</strong> Can courses, outcomes and rosters be imported from the spreadsheets you already have?',
      ] },
      { h2: 'Is the vendor a safe choice?', id: 'vendor' },
      { ol: [
        '<strong>Your data.</strong> Where is it hosted, is it separated from other customers, and how is it backed up?',
        '<strong>Pricing.</strong> Is it priced per department, per program or per user, and for how long?',
        '<strong>A demo on your programs.</strong> Will the vendor show the product with your commission and your next review in mind?',
      ] },

      { h2: 'How Academix answers', id: 'academix' },
      { table: { caption: 'Academix against the checklist', head: ['Question', 'Academix'], rows: [
        ['Commissions', 'All four: EAC, CAC, ETAC and ANSAC.'],
        ['Current criteria', '2026–27 Program Criteria for every EAC, ETAC and CAC discipline, word for word; ANSAC disciplines named and cited.'],
        ['Outcomes model', 'PEOs, Student Outcomes, performance indicators and CLOs, with the CLO-to-indicator map.'],
        ['Self-Study Report', 'Generated in your commission’s outline as a Word document, with Tables 5-1 and 6-1.'],
        ['Figures', 'Traceable to students; the method is recorded with every result; reported figures are frozen until someone recomputes them.'],
        ['Roles', 'Instructors, coordinators, quality and curriculum managers, chairs and deans; each works within their own department, deans within their college.'],
        ['Data', 'Your own address and your own database, with weekly backups.'],
        ['Pricing', 'Per department, per year, for one to three years, by quote.'],
      ] } },
      { p: 'The best test is your own programs. <a href="/#contact">Book an online demo</a>.' },
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
  moreGuides: 'More ABET guides',
  levelsNote: 'Associate level',
};
