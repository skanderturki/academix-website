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
      about: 'About',
      services: 'Services',
      contact: 'Contact',
      pmp: 'PMP Platform',
      n8n: 'n8n Server',
      logout: 'Logout',
      switchTo: 'Français',
      switchLabel: 'Switch language to French',
    },
    hero: {
      badge: 'University Software Solutions for Quality Assurance',
      title: 'Quality Assurance Software for Universities and Accreditation',
      subtitle:
        'Academix builds the platforms universities use to manage course quality, assess learning outcomes, and generate the evidence required for ABET, NCAAA, and institutional accreditation reviews — at scale, with auditable workflows.',
      ctaPrimary: 'Explore Our Solutions',
      ctaSecondary: 'Talk to Our Team',
      trust: ['ABET-aligned', 'NCAAA-aligned', 'Tunisia-based, university-trusted'],
    },
    about: {
      eyebrow: 'Who We Are',
      title: 'An independent studio specialized in',
      titleHighlight: 'university quality & accreditation',
      p1: 'Academix is an independent software studio focused on the operational backbone of university quality: course learning outcomes, programme outcomes, accreditation evidence, and the academic processes that produce them. We design and ship platforms that turn institutional QA work from spreadsheet-and-email into structured, auditable systems.',
      p2: 'From CLO/PLO assessment platforms with verifiable evidence trails to AI-assisted curriculum analysis grounded in your own regulations and rubrics, we help universities, colleges, and accreditation offices deliver on quality without the overhead of an internal dev team.',
      capabilities: [
        { label: 'Quality & Accreditation', desc: 'CLO/PLO assessment + ABET/NCAAA evidence' },
        { label: 'Process Automation', desc: 'Self-hosted n8n + LMS/SIS integrations' },
        { label: 'AI for Academia', desc: 'Curriculum parsing + RAG advising' },
      ],
    },
    services: {
      eyebrow: 'What We Build',
      title: 'Three core offerings,',
      titleHighlight: 'one tailored solution',
      titleSuffix: 'for your institution',
      subtitle:
        'Each service is delivered as a custom build for your university, accreditation body, and existing stack.',
      items: [
        {
          badge: 'Quality & Accreditation',
          title: 'University Quality Assurance Platforms',
          description:
            'Full-featured QA platforms for universities pursuing ABET, NCAAA, or local accreditation. Manage curricula, courses, course offerings, learning outcomes, assessment, and auditable evidence — all in one auditable system.',
          features: [
            'Curriculum & programme outcomes (PLO) modeling',
            'Course learning outcome (CLO) assessment & analysis',
            'Direct + indirect assessment (surveys, rubrics, exams)',
            'Course reports, coordinator reports, programme reports',
            'ABET / NCAAA evidence trails with file storage',
          ],
          cta: 'Request a demo',
        },
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
          cta: 'Explore Our n8n Server',
        },
        {
          badge: 'AI for Academia',
          title: 'AI-Powered Curriculum & Advising Tools',
          description:
            'Apply LLMs to the document-heavy work academic departments do daily — parsing curricula, drafting course specifications, advising students against your own regulations and catalogs.',
          features: [
            'Curriculum PDF import (Gemini-assisted parsing)',
            'RAG chatbots grounded in your regulations and catalogs',
            'Course specification & report drafting assistance',
            'Indirect assessment survey synthesis',
            'Configurable tone & policy guardrails',
          ],
          cta: 'Request Early Access',
        },
      ],
    },
    why: {
      eyebrow: 'Why Academix',
      title: 'A small, hands-on team with a',
      titleHighlight: 'strong focus on university quality',
      pillars: [
        {
          title: 'Quality-First Expertise',
          desc: 'Built on hands-on experience with curriculum design, accreditation reviews, CLO/PLO frameworks, and the actual mechanics of ABET and NCAAA submissions — not generic templates retrofitted for universities.',
        },
        {
          title: 'End-to-End Delivery',
          desc: 'We handle architecture, development, deployment and hosting. You get a working platform on your own domain, not a pile of code.',
        },
        {
          title: 'Direct & Responsive',
          desc: 'You work directly with the people building your product. No account managers, no hand-offs, no surprises.',
        },
      ],
    },
    contact: {
      eyebrow: 'Start Your Project',
      title: 'Let’s talk about',
      titleHighlight: 'your quality programme',
      subtitle: 'Tell us what you want to build or automate — we’ll get back to you.',
      form: {
        heading: 'Send Us a Message',
        directIntro: 'Or reach us directly at',
        name: 'Name',
        namePlaceholder: 'Your full name',
        email: 'Email',
        emailPlaceholder: 'you@example.com',
        organization: 'Organization',
        organizationPlaceholder: 'University, company or team (optional)',
        serviceType: 'Service of Interest',
        serviceSelect: 'Select a service',
        message: 'Message',
        messagePlaceholder:
          'Tell us about your project, goals, timeline, and anything else we should know...',
        minChars: 'Minimum 20 characters.',
        send: 'Send Message',
        sending: 'Sending...',
        successTitle: 'Thanks!',
        success: 'Your message has been sent. We’ll get back to you soon.',
        serviceOptions: [
          'University Quality / Accreditation Platform',
          'Academic Process Automation (n8n)',
          'AI-Powered Academic Tools',
          'Other / Not sure yet',
        ],
        errors: {
          name: 'Please enter your name',
          email: 'Please enter your email',
          emailInvalid: 'Please enter a valid email',
          serviceType: 'Please select a service type',
          message: 'Please provide a more detailed message (at least 20 characters)',
          generic: 'Could not send your message. Please try emailing us directly.',
        },
      },
    },
    footer: {
      blurb:
        'University software solutions and quality assurance — accreditation evidence, learning outcome assessment, and academic process automation.',
      platformsHeading: 'Platforms',
      getInTouch: 'Get in Touch',
      links: {
        pmp: 'PMP Platform',
        n8n: 'n8n Server',
        allServices: 'All Services',
        contactForm: 'Contact form',
      },
      rights: 'Academix — University Software Solutions for Quality Assurance',
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
      about: 'À propos',
      services: 'Services',
      contact: 'Contact',
      pmp: 'Plateforme PMP',
      n8n: 'Serveur n8n',
      logout: 'Déconnexion',
      switchTo: 'English',
      switchLabel: 'Changer la langue vers l’anglais',
    },
    hero: {
      badge: 'Logiciels universitaires pour l’assurance qualité',
      title: 'Logiciels d’assurance qualité pour les universités et l’accréditation',
      subtitle:
        'Academix conçoit les plateformes que les universités utilisent pour gérer la qualité des cours, évaluer les acquis d’apprentissage et produire les preuves exigées par les revues d’accréditation ABET, NCAAA et institutionnelles — à grande échelle, avec des flux de travail auditables.',
      ctaPrimary: 'Découvrir nos solutions',
      ctaSecondary: 'Parler à notre équipe',
      trust: ['Conforme ABET', 'Conforme NCAAA', 'Basés en Tunisie, adoptés par les universités'],
    },
    about: {
      eyebrow: 'Qui sommes-nous',
      title: 'Un studio indépendant spécialisé en',
      titleHighlight: 'qualité et accréditation universitaires',
      p1: 'Academix est un studio logiciel indépendant dédié à l’ossature opérationnelle de la qualité universitaire : acquis d’apprentissage des cours, acquis des programmes, preuves d’accréditation et processus académiques qui les produisent. Nous concevons et livrons des plateformes qui transforment le travail d’assurance qualité — jusque-là fait de tableurs et d’e-mails — en systèmes structurés et auditables.',
      p2: 'Des plateformes d’évaluation des acquis (CLO/PLO) avec des traces de preuves vérifiables jusqu’à l’analyse de curriculum assistée par IA, ancrée dans vos propres réglementations et grilles, nous aidons les universités, les facultés et les bureaux d’accréditation à concrétiser la qualité sans la charge d’une équipe de développement interne.',
      capabilities: [
        { label: 'Qualité & accréditation', desc: 'Évaluation CLO/PLO + preuves ABET/NCAAA' },
        { label: 'Automatisation des processus', desc: 'n8n auto-hébergé + intégrations LMS/SIS' },
        { label: 'IA pour l’enseignement', desc: 'Analyse de curriculum + conseil RAG' },
      ],
    },
    services: {
      eyebrow: 'Ce que nous construisons',
      title: 'Trois offres clés,',
      titleHighlight: 'une solution sur mesure',
      titleSuffix: 'pour votre établissement',
      subtitle:
        'Chaque service est livré comme une réalisation sur mesure, adaptée à votre université, à votre organisme d’accréditation et à votre environnement existant.',
      items: [
        {
          badge: 'Qualité & accréditation',
          title: 'Plateformes d’assurance qualité universitaire',
          description:
            'Des plateformes d’assurance qualité complètes pour les universités visant l’accréditation ABET, NCAAA ou locale. Gérez les curricula, les cours, les offres de cours, les acquis d’apprentissage, l’évaluation et les preuves — le tout dans un seul système auditable.',
          features: [
            'Modélisation des curricula et des acquis de programme (PLO)',
            'Évaluation et analyse des acquis de cours (CLO)',
            'Évaluation directe et indirecte (enquêtes, grilles, examens)',
            'Rapports de cours, de coordinateur et de programme',
            'Traces de preuves ABET / NCAAA avec stockage de fichiers',
          ],
          cta: 'Demander une démo',
        },
        {
          badge: 'Automatisation des processus',
          title: 'Automatisation des processus académiques',
          description:
            'Remplacez les tâches administratives académiques répétitives par des flux de travail sur mesure sur n8n auto-hébergé. Nous nous intégrons à votre LMS, votre SIS, votre stockage de fichiers, votre messagerie et vos formulaires pour automatiser les admissions, les chaînes de notation, la collecte de preuves et la communication avec les parties prenantes.',
          features: [
            'Mise en place d’un serveur n8n auto-hébergé',
            'Intégrations LMS, SIS & Google Workspace',
            'E-mails, notifications et rapports internes automatisés',
            'Génération de documents (relevés, attestations, rapports)',
            'Flux de contenu et de notation assistés par IA',
          ],
          cta: 'Découvrir notre serveur n8n',
        },
        {
          badge: 'IA pour l’enseignement',
          title: 'Outils de curriculum et de conseil propulsés par l’IA',
          description:
            'Mettez les grands modèles de langage au service du travail documentaire quotidien des départements : analyse des curricula, rédaction des fiches de cours, conseil aux étudiants à partir de vos propres réglementations et catalogues.',
          features: [
            'Import de curriculum PDF (analyse assistée par Gemini)',
            'Chatbots RAG ancrés dans vos réglementations et catalogues',
            'Aide à la rédaction des fiches de cours et des rapports',
            'Synthèse des enquêtes d’évaluation indirecte',
            'Garde-fous de ton et de politique configurables',
          ],
          cta: 'Demander un accès anticipé',
        },
      ],
    },
    why: {
      eyebrow: 'Pourquoi Academix',
      title: 'Une petite équipe impliquée, avec un',
      titleHighlight: 'fort accent sur la qualité universitaire',
      pillars: [
        {
          title: 'Expertise centrée qualité',
          desc: 'Fondée sur une expérience concrète de la conception de curricula, des revues d’accréditation, des cadres CLO/PLO et de la mécanique réelle des dossiers ABET et NCAAA — pas des modèles génériques adaptés après coup aux universités.',
        },
        {
          title: 'Livraison de bout en bout',
          desc: 'Nous prenons en charge l’architecture, le développement, le déploiement et l’hébergement. Vous obtenez une plateforme opérationnelle sur votre propre domaine, pas un tas de code.',
        },
        {
          title: 'Direct & réactif',
          desc: 'Vous travaillez directement avec celles et ceux qui construisent votre produit. Pas de chargés de compte, pas de transferts, pas de surprises.',
        },
      ],
    },
    contact: {
      eyebrow: 'Démarrez votre projet',
      title: 'Parlons de',
      titleHighlight: 'votre démarche qualité',
      subtitle: 'Dites-nous ce que vous souhaitez construire ou automatiser — nous vous répondrons.',
      form: {
        heading: 'Envoyez-nous un message',
        directIntro: 'Ou contactez-nous directement à',
        name: 'Nom',
        namePlaceholder: 'Votre nom complet',
        email: 'E-mail',
        emailPlaceholder: 'vous@exemple.com',
        organization: 'Organisation',
        organizationPlaceholder: 'Université, entreprise ou équipe (optionnel)',
        serviceType: 'Service concerné',
        serviceSelect: 'Choisir un service',
        message: 'Message',
        messagePlaceholder:
          'Parlez-nous de votre projet, vos objectifs, votre calendrier et tout ce qu’il faut savoir...',
        minChars: 'Minimum 20 caractères.',
        send: 'Envoyer le message',
        sending: 'Envoi...',
        successTitle: 'Merci !',
        success: 'Votre message a bien été envoyé. Nous vous répondrons rapidement.',
        serviceOptions: [
          'Plateforme qualité / accréditation universitaire',
          'Automatisation des processus académiques (n8n)',
          'Outils académiques propulsés par l’IA',
          'Autre / Je ne sais pas encore',
        ],
        errors: {
          name: 'Veuillez saisir votre nom',
          email: 'Veuillez saisir votre e-mail',
          emailInvalid: 'Veuillez saisir un e-mail valide',
          serviceType: 'Veuillez choisir un service',
          message: 'Veuillez détailler davantage votre message (au moins 20 caractères)',
          generic: 'Impossible d’envoyer votre message. Merci de nous écrire directement.',
        },
      },
    },
    footer: {
      blurb:
        'Solutions logicielles et assurance qualité pour les universités — preuves d’accréditation, évaluation des acquis d’apprentissage et automatisation des processus académiques.',
      platformsHeading: 'Plateformes',
      getInTouch: 'Nous contacter',
      links: {
        pmp: 'Plateforme PMP',
        n8n: 'Serveur n8n',
        allServices: 'Tous les services',
        contactForm: 'Formulaire de contact',
      },
      rights: 'Academix — Solutions logicielles universitaires pour l’assurance qualité',
      built: 'Conçu avec soin pour les universités.',
    },
  },
};
