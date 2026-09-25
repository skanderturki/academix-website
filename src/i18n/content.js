/* -------------------------------------------------------------------------- */
/*  Academix — bilingual marketing copy (English / French)                    */
/*                                                                            */
/*  All user-facing marketing copy lives here, keyed by language. Components  */
/*  read the active-language object via the useLanguage() hook. Non-          */
/*  translatable structural meta (icons, colors) stays in the components;     */
/*  positional arrays (featureChips, capabilities, services.items, pillars)   */
/*  must keep the same length and order across en/fr and match the *_META     */
/*  arrays in the components.                                                 */
/*                                                                            */
/*  NB: the authenticated views (Login/Register/Portfolio) are not i18n'd yet */
/*  — only the public marketing site is bilingual for now.                    */
/* -------------------------------------------------------------------------- */

export const content = {
  en: {
    banner: {
      line1: 'University Software Solutions',
      line2: 'Quality Assurance',
    },
    featureChips: ['Quality & Accreditation', 'Process Automation', 'AI for Academia'],
    nav: {
      home: 'Home',
      platform: 'Platform',
      how: 'How it works',
      services: 'Services',
      quote: 'Pricing',
      demo: 'Book a demo',
      contact: 'Contact',
      pmp: 'PMP Platform',
      n8n: 'n8n Server',
      logout: 'Logout',
      switchTo: 'Français',
      switchLabel: 'Switch language to French',
    },
    hero: {
      badge: 'ABET accreditation software',
      title: 'From course assessment to the ABET Self-Study Report',
      subtitle:
        'Academix is the accreditation platform for ABET programs. Instructors assess, coordinators report, quality managers track readiness criterion by criterion, and the Self-Study Report is generated from the evidence you collected all year.',
      ctaPrimary: 'Book an online demo',
      ctaSecondary: 'Request a quote',
      trust: ['EAC · CAC · ETAC · ANSAC', 'Program Criteria for 65 disciplines, word for word', 'Hosted for you, one database per institution'],
      mapTitle: 'CLO → SO attainment',
      mapLive: 'live evidence',
      stats: [
        { n: '8', l: 'ABET criteria, structured' },
        { n: '65', l: 'disciplines’ Program Criteria' },
        { n: '.docx', l: 'Self-Study Report export' },
      ],
    },
    platform: {
      eyebrow: 'The platform',
      title: 'One place for the whole',
      titleHighlight: 'ABET cycle',
      intro:
        'Everything an accreditation cycle needs, organised by role, with every figure traceable to the grades behind it.',
      features: [
        {
          title: 'Self-Study Report, generated',
          desc: 'Your commission’s official outline, from Background through Criteria 1 to 8, Program Criteria and appendices, with Tables 5-1 and 6-1 and an evidence binder. Exported as an editable Word document.',
        },
        {
          title: 'Program Criteria, word for word',
          desc: 'The 2026–27 Program Criteria for every EAC, ETAC and CAC discipline are built in, proposed changes included, and printed in your report.',
        },
        {
          title: 'ABET Readiness Center',
          desc: 'See where each criterion stands and what is missing next, well before the site visit.',
        },
        {
          title: 'Student Outcomes assessment',
          desc: 'PEOs, Student Outcomes, performance indicators and CLOs in one chain. Plan assessment campaigns per term; attainment is the share of students meeting expectations, snapshotted so the record does not drift.',
        },
        {
          title: 'Course reports that lock',
          desc: 'Instructors and coordinators complete course reports that lock on submit, with Word export in the ETEC TP-154 format used by Saudi universities.',
        },
        {
          title: 'Continuous improvement',
          desc: 'Constituent surveys collected online, PEO reviews and closed-loop improvement actions, ready for Criterion 4.',
        },
        {
          title: 'Roles and governance',
          desc: 'Deans, chairs, quality and curriculum managers, coordinators and instructors each see their own work, and every term moves from planning to active to closed.',
        },
      ],
    },
    how: {
      eyebrow: 'How it works',
      title: 'How a term runs',
      titleHighlight: 'on Academix',
      steps: [
        { title: 'Set up your programs', desc: 'Curricula, courses, Student Outcomes and performance indicators, with the map from each CLO to the indicators it evidences.' },
        { title: 'Assess during the term', desc: 'Instructors enter grades, coordinators write course reports, and campaigns show which outcomes are covered.' },
        { title: 'Track readiness', desc: 'Attainment and completeness update per program and per criterion; chairs and deans see who has done what.' },
        { title: 'Export the Self-Study Report', desc: 'At the end of the cycle the report is assembled from the record, ready for your team’s narrative.' },
      ],
    },
    services: {
      eyebrow: 'Beyond the platform',
      title: 'Services for',
      titleHighlight: 'academic teams',
      titleSuffix: '',
      subtitle:
        'Alongside the platform, we build automation and AI tools for academic departments, delivered for your own systems.',
      items: [
        {
          badge: 'Process Automation',
          title: 'Academic Process Automation',
          description:
            'Replace repetitive academic admin work with custom workflows on self-hosted n8n. We integrate with your LMS, SIS, file storage, email, and existing forms to automate admissions, grading pipelines, evidence collection and stakeholder communication.',
          features: [
            'Self-hosted n8n server setup',
            'LMS, SIS & Google Workspace integrations',
            'Automated emails, notifications, internal reports',
            'Document generation (transcripts, certificates, reports)',
            'AI-assisted content and grading workflows',
          ],
          cta: 'Discuss a project',
        },
        {
          badge: 'AI for Academia',
          title: 'AI-Powered Curriculum & Advising Tools',
          description:
            'Apply LLMs to the document-heavy work academic departments do daily: parsing curricula, drafting course specifications, advising students against your own regulations and catalogs.',
          features: [
            'Curriculum PDF import (Gemini-assisted parsing)',
            'RAG chatbots grounded in your regulations and catalogs',
            'Course specification & report drafting assistance',
            'Indirect assessment survey synthesis',
            'Configurable tone & policy guardrails',
          ],
          cta: 'Discuss a project',
        },
      ],
    },
    why: {
      eyebrow: 'Why Academix',
      title: 'Built around',
      titleHighlight: 'ABET’s own documents',
      pillars: [
        {
          title: 'Faithful to the criteria',
          desc: 'Student Outcomes, Program Criteria and report outlines are encoded from ABET’s official 2026–27 criteria documents and refreshed every cycle.',
        },
        {
          title: 'Your data, isolated',
          desc: 'Each institution gets its own address and its own database. Nothing is shared between customers.',
        },
        {
          title: 'Direct access to the team',
          desc: 'Demos, onboarding and support come from the people who build the platform. No account managers, no hand-offs.',
        },
      ],
    },
    contact: {
      eyebrow: 'Book an online demo',
      title: 'See Academix with',
      titleHighlight: 'your programs',
      subtitle:
        'We run live online demos on request. Tell us about your programs and your next ABET visit, and we will propose a time.',
      form: {
        heading: 'Book a demo',
        directIntro: 'Or reach us directly at',
        name: 'Name',
        namePlaceholder: 'Your full name',
        email: 'Work email',
        emailPlaceholder: 'you@university.edu',
        organization: 'University',
        organizationPlaceholder: 'University and department',
        serviceType: 'What would you like?',
        serviceSelect: 'Choose one',
        message: 'Message',
        messagePlaceholder:
          'Your programs and commission (EAC, CAC, ETAC…), your next ABET visit, and times that suit you for a demo…',
        minChars: 'Minimum 20 characters.',
        send: 'Send request',
        sending: 'Sending...',
        successTitle: 'Thank you.',
        success: 'We will reply within two working days.',
        serviceOptions: [
          'Online demo of the ABET platform',
          'Licence and pricing questions',
          'Academic process automation',
          'AI tools for academic teams',
          'Something else',
        ],
        errors: {
          name: 'Please enter your name',
          email: 'Please enter your email',
          emailInvalid: 'Please enter a valid email',
          serviceType: 'Please choose what you would like',
          message: 'Please tell us a little more (at least 20 characters)',
          generic: 'Could not send your message. Please try emailing us directly.',
        },
      },
    },
    quote: {
      nav: 'Request a quote',
      eyebrow: 'Academix licence',
      title: 'Request a quote for',
      titleHighlight: 'your institution',
      subtitle:
        'Academix is licensed per department, per year. Tell us what you need and we will email you a quote. There is nothing to pay online.',
      stepsTitle: 'What happens next',
      steps: [
        { title: 'We price your request', desc: 'You receive our quote by email, usually within two working days.' },
        { title: 'You accept and pay the invoice', desc: 'Reply to the quote; we send the invoice for your finance office.' },
        { title: 'Your platform goes live', desc: 'You get your address and a link to set your password. You set up your departments from there.' },
      ],
      sections: { institution: 'Your institution', need: 'What you need', invoicing: 'Invoicing details', invoicingHint: 'Optional now; needed for the invoice.' },
      fields: {
        institution: 'Institution', institutionPh: 'University or school name',
        country: 'Country', countryPh: 'Saudi Arabia',
        contactName: 'Your name', contactRole: 'Your role', contactRolePh: 'e.g. Quality director',
        contactEmail: 'Work email', contactPhone: 'Phone',
        kind: 'Is your institution already on Academix?', kindNew: 'No, a new subscription', kindExisting: 'Yes, more departments or a renewal',
        existingHost: 'Your current Academix address', existingHostPh: 'myuniversity.academix.tn',
        subdomain: 'Preferred address', subdomainHint: 'Letters, digits and hyphens. We confirm it with the quote.',
        departments: 'Departments', departmentsHint: 'Each accredited department needs its own licence.',
        curricula: 'Active curricula per department', curriculaHint: 'Programme versions in use at the same time.',
        term: 'Length', termYear: (n) => (n === 1 ? '1 year' : `${n} years`),
        departmentNames: 'Which departments?', departmentNamesPh: 'e.g. Computer Science, Electrical Engineering',
        message: 'Anything else we should know?', messagePh: 'Accreditation timeline, number of programmes, questions…',
        legalName: 'Legal name', taxId: 'Tax ID', address: 'Billing address',
      },
      required: 'required',
      submit: 'Request my quote',
      sending: 'Sending…',
      errors: {
        fields: 'Please check the highlighted fields.',
        rate_limited: 'Too many requests from your connection. Please try again in an hour, or email us.',
        unavailable: 'Quote requests are not open yet. Please email us instead.',
        failed: 'Your request could not be sent. Please try again, or email us.',
      },
      done: {
        title: 'Request received',
        body: 'Thank you. We have emailed you a confirmation and will send your quote within two working days.',
        reference: 'Your reference',
        another: 'Send another request',
      },
    },
    footer: {
      blurb:
        'ABET accreditation software for universities: outcomes assessment, course reports, readiness tracking and the Self-Study Report.',
      platformsHeading: 'Platforms',
      getInTouch: 'Get in Touch',
      links: {
        pmp: 'PMP Platform',
        n8n: 'n8n Server',
        allServices: 'All Services',
        contactForm: 'Contact form',
      },
      rights: 'Academix, ABET accreditation software by Jahiz Digital Solutions',
      built: 'Built with care for universities.',
    },
  },

  fr: {
    banner: {
      line1: 'Solutions logicielles universitaires',
      line2: 'Assurance qualité',
    },
    featureChips: ['Qualité & accréditation', 'Automatisation des processus', 'IA pour l’enseignement'],
    nav: {
      home: 'Accueil',
      platform: 'Plateforme',
      how: 'Fonctionnement',
      services: 'Services',
      quote: 'Tarifs',
      demo: 'Réserver une démo',
      contact: 'Contact',
      pmp: 'Plateforme PMP',
      n8n: 'Serveur n8n',
      logout: 'Déconnexion',
      switchTo: 'English',
      switchLabel: 'Changer la langue vers l’anglais',
    },
    hero: {
      badge: 'Logiciel d’accréditation ABET',
      title: 'De l’évaluation des cours au rapport d’auto-évaluation ABET',
      subtitle:
        'Academix est la plateforme d’accréditation des programmes ABET. Les enseignants évaluent, les coordinateurs rédigent leurs rapports, les responsables qualité suivent l’état de préparation critère par critère, et le Self-Study Report est généré à partir des preuves réunies toute l’année.',
      ctaPrimary: 'Réserver une démo en ligne',
      ctaSecondary: 'Demander un devis',
      trust: ['EAC · CAC · ETAC · ANSAC', 'Program Criteria de 65 disciplines, mot pour mot', 'Hébergé pour vous, une base de données par établissement'],
      mapTitle: 'Atteinte CLO → SO',
      mapLive: 'preuves en direct',
      stats: [
        { n: '8', l: 'critères ABET structurés' },
        { n: '65', l: 'disciplines (Program Criteria)' },
        { n: '.docx', l: 'export du Self-Study Report' },
      ],
    },
    platform: {
      eyebrow: 'La plateforme',
      title: 'Un seul outil pour tout',
      titleHighlight: 'le cycle ABET',
      intro:
        'Tout ce qu’exige un cycle d’accréditation, organisé par rôle, chaque chiffre pouvant être retracé jusqu’aux notes qui le fondent.',
      features: [
        {
          title: 'Self-Study Report généré',
          desc: 'Le plan officiel de votre commission, du Background aux critères 1 à 8, aux Program Criteria et aux annexes, avec les tableaux 5-1 et 6-1 et un dossier de preuves. Exporté en document Word modifiable.',
        },
        {
          title: 'Program Criteria, mot pour mot',
          desc: 'Les Program Criteria 2026–27 de chaque discipline EAC, ETAC et CAC sont intégrés, modifications proposées comprises, et imprimés dans votre rapport.',
        },
        {
          title: 'Centre de préparation ABET',
          desc: 'Voyez où en est chaque critère et ce qu’il reste à faire, bien avant la visite.',
        },
        {
          title: 'Évaluation des Student Outcomes',
          desc: 'PEO, Student Outcomes, indicateurs de performance et CLO dans une seule chaîne. Planifiez des campagnes d’évaluation par semestre ; l’atteinte est la part d’étudiants au niveau attendu, figée pour que le résultat ne dérive pas.',
        },
        {
          title: 'Rapports de cours verrouillés',
          desc: 'Enseignants et coordinateurs remplissent des rapports de cours verrouillés à la soumission, avec export Word au format ETEC TP-154 utilisé par les universités saoudiennes.',
        },
        {
          title: 'Amélioration continue',
          desc: 'Enquêtes auprès des parties prenantes collectées en ligne, revues des PEO et actions d’amélioration en boucle fermée, prêtes pour le critère 4.',
        },
        {
          title: 'Rôles et gouvernance',
          desc: 'Doyens, chefs de département, responsables qualité et curriculum, coordinateurs et enseignants voient chacun leur travail, et chaque semestre passe de la planification à l’activité puis à la clôture.',
        },
      ],
    },
    how: {
      eyebrow: 'Fonctionnement',
      title: 'Un semestre',
      titleHighlight: 'sur Academix',
      steps: [
        { title: 'Configurez vos programmes', desc: 'Curricula, cours, Student Outcomes et indicateurs de performance, avec le lien entre chaque CLO et les indicateurs qu’il atteste.' },
        { title: 'Évaluez pendant le semestre', desc: 'Les enseignants saisissent les notes, les coordinateurs rédigent les rapports de cours, et les campagnes montrent quels outcomes sont couverts.' },
        { title: 'Suivez la préparation', desc: 'L’atteinte et la complétude se mettent à jour par programme et par critère ; chefs de département et doyens voient qui a fait quoi.' },
        { title: 'Exportez le Self-Study Report', desc: 'En fin de cycle, le rapport est assemblé à partir des données, prêt pour la rédaction de votre équipe.' },
      ],
    },
    services: {
      eyebrow: 'Au-delà de la plateforme',
      title: 'Des services pour',
      titleHighlight: 'les équipes académiques',
      titleSuffix: '',
      subtitle:
        'En complément de la plateforme, nous concevons des outils d’automatisation et d’IA pour les départements académiques, livrés sur vos propres systèmes.',
      items: [
        {
          badge: 'Automatisation des processus',
          title: 'Automatisation des processus académiques',
          description:
            'Remplacez les tâches administratives académiques répétitives par des flux de travail sur mesure sur n8n auto-hébergé. Nous nous intégrons à votre LMS, votre SIS, votre stockage de fichiers, votre messagerie et vos formulaires pour automatiser les admissions, les chaînes de notation, la collecte de preuves et la communication avec les parties prenantes.',
          features: [
            'Mise en place d’un serveur n8n auto-hébergé',
            'Intégrations LMS, SIS et Google Workspace',
            'E-mails, notifications et rapports internes automatisés',
            'Génération de documents (relevés, attestations, rapports)',
            'Flux de contenu et de notation assistés par IA',
          ],
          cta: 'Parler d’un projet',
        },
        {
          badge: 'IA pour l’enseignement supérieur',
          title: 'Outils de curriculum et d’accompagnement propulsés par l’IA',
          description:
            'Appliquez les LLM au travail documentaire quotidien des départements : analyse des curricula, rédaction des fiches de cours, accompagnement des étudiants selon vos propres règlements et catalogues.',
          features: [
            'Import de curriculum PDF (analyse assistée par Gemini)',
            'Chatbots RAG fondés sur vos règlements et catalogues',
            'Aide à la rédaction des fiches et rapports de cours',
            'Synthèse des enquêtes d’évaluation indirecte',
            'Ton et garde-fous configurables',
          ],
          cta: 'Parler d’un projet',
        },
      ],
    },
    why: {
      eyebrow: 'Pourquoi Academix',
      title: 'Construit à partir',
      titleHighlight: 'des documents ABET',
      pillars: [
        {
          title: 'Fidèle aux critères',
          desc: 'Student Outcomes, Program Criteria et plans de rapport sont encodés à partir des documents officiels ABET 2026–27 et mis à jour à chaque cycle.',
        },
        {
          title: 'Vos données, isolées',
          desc: 'Chaque établissement a sa propre adresse et sa propre base de données. Rien n’est partagé entre clients.',
        },
        {
          title: 'Un accès direct à l’équipe',
          desc: 'Démos, prise en main et support assurés par ceux qui construisent la plateforme. Pas de chargé de compte, pas d’intermédiaire.',
        },
      ],
    },
    contact: {
      eyebrow: 'Réserver une démo en ligne',
      title: 'Découvrez Academix avec',
      titleHighlight: 'vos programmes',
      subtitle:
        'Nous organisons des démos en ligne sur demande. Parlez-nous de vos programmes et de votre prochaine visite ABET, nous vous proposerons un créneau.',
      form: {
        heading: 'Réserver une démo',
        directIntro: 'Ou contactez-nous directement à',
        name: 'Nom',
        namePlaceholder: 'Votre nom complet',
        email: 'E-mail professionnel',
        emailPlaceholder: 'vous@universite.edu',
        organization: 'Université',
        organizationPlaceholder: 'Université et département',
        serviceType: 'Que souhaitez-vous ?',
        serviceSelect: 'Choisir',
        message: 'Message',
        messagePlaceholder:
          'Vos programmes et votre commission (EAC, CAC, ETAC…), votre prochaine visite ABET, et vos disponibilités pour une démo…',
        minChars: 'Minimum 20 caractères.',
        send: 'Envoyer la demande',
        sending: 'Envoi...',
        successTitle: 'Merci.',
        success: 'Nous vous répondrons sous deux jours ouvrés.',
        serviceOptions: [
          'Démo en ligne de la plateforme ABET',
          'Questions sur la licence et les tarifs',
          'Automatisation des processus académiques',
          'Outils d’IA pour les équipes académiques',
          'Autre chose',
        ],
        errors: {
          name: 'Veuillez saisir votre nom',
          email: 'Veuillez saisir votre e-mail',
          emailInvalid: 'Veuillez saisir un e-mail valide',
          serviceType: 'Veuillez choisir ce que vous souhaitez',
          message: 'Merci de nous en dire un peu plus (au moins 20 caractères)',
          generic: 'Impossible d’envoyer votre message. Merci de nous écrire directement.',
        },
      },
    },
    quote: {
      nav: 'Demander un devis',
      eyebrow: 'Licence Academix',
      title: 'Demandez un devis pour',
      titleHighlight: 'votre établissement',
      subtitle:
        'Academix est proposé sous licence par département et par an. Dites-nous ce dont vous avez besoin : nous vous envoyons un devis par e-mail. Aucun paiement en ligne.',
      stepsTitle: 'La suite',
      steps: [
        { title: 'Nous chiffrons votre demande', desc: 'Vous recevez notre devis par e-mail, en général sous deux jours ouvrés.' },
        { title: 'Vous acceptez et réglez la facture', desc: 'Répondez au devis ; nous envoyons la facture à votre service financier.' },
        { title: 'Votre plateforme est ouverte', desc: 'Vous recevez votre adresse et un lien pour choisir votre mot de passe. Vous y créez ensuite vos départements.' },
      ],
      sections: { institution: 'Votre établissement', need: 'Votre besoin', invoicing: 'Facturation', invoicingHint: 'Facultatif pour l’instant ; nécessaire pour la facture.' },
      fields: {
        institution: 'Établissement', institutionPh: 'Nom de l’université ou de l’école',
        country: 'Pays', countryPh: 'Arabie saoudite',
        contactName: 'Votre nom', contactRole: 'Votre fonction', contactRolePh: 'ex. Directeur qualité',
        contactEmail: 'E-mail professionnel', contactPhone: 'Téléphone',
        kind: 'Votre établissement utilise-t-il déjà Academix ?', kindNew: 'Non, un nouvel abonnement', kindExisting: 'Oui, des départements en plus ou un renouvellement',
        existingHost: 'Votre adresse Academix actuelle', existingHostPh: 'monuniversite.academix.tn',
        subdomain: 'Adresse souhaitée', subdomainHint: 'Lettres, chiffres et tirets. Nous la confirmons avec le devis.',
        departments: 'Départements', departmentsHint: 'Chaque département accrédité a sa propre licence.',
        curricula: 'Programmes actifs par département', curriculaHint: 'Versions de programme utilisées en même temps.',
        term: 'Durée', termYear: (n) => (n === 1 ? '1 an' : `${n} ans`),
        departmentNames: 'Quels départements ?', departmentNamesPh: 'ex. Informatique, Génie électrique',
        message: 'Autre chose à nous dire ?', messagePh: 'Calendrier d’accréditation, nombre de programmes, questions…',
        legalName: 'Raison sociale', taxId: 'Matricule fiscal', address: 'Adresse de facturation',
      },
      required: 'obligatoire',
      submit: 'Demander mon devis',
      sending: 'Envoi…',
      errors: {
        fields: 'Merci de vérifier les champs signalés.',
        rate_limited: 'Trop de demandes depuis votre connexion. Réessayez dans une heure, ou écrivez-nous.',
        unavailable: 'Les demandes de devis ne sont pas encore ouvertes. Écrivez-nous plutôt.',
        failed: 'Votre demande n’a pas pu être envoyée. Réessayez, ou écrivez-nous.',
      },
      done: {
        title: 'Demande reçue',
        body: 'Merci. Nous vous avons envoyé une confirmation par e-mail et vous adresserons votre devis sous deux jours ouvrés.',
        reference: 'Votre référence',
        another: 'Envoyer une autre demande',
      },
    },
    footer: {
      blurb:
        'Logiciel d’accréditation ABET pour les universités : évaluation des outcomes, rapports de cours, suivi de la préparation et Self-Study Report.',
      platformsHeading: 'Plateformes',
      getInTouch: 'Nous contacter',
      links: {
        pmp: 'Plateforme PMP',
        n8n: 'Serveur n8n',
        allServices: 'Tous les services',
        contactForm: 'Formulaire de contact',
      },
      rights: 'Academix, logiciel d’accréditation ABET de Jahiz Digital Solutions',
      built: 'Conçu avec soin pour les universités.',
    },
  },
};
