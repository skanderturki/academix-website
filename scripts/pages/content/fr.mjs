// French content for the static pages: the same keys, blocks and order as
// content/en.mjs (build.mjs checks the page keys and the FAQ count). ABET's
// own terms (Student Outcomes, Program Criteria, Self-Study Report…) are kept
// in English, as programs use them in their ABET documents.

const APPM = '<a href="https://www.abet.org/accreditation/accreditation-criteria/accreditation-policy-and-procedure-manual-appm-2026-2027/" rel="noopener" hreflang="en">Accreditation Policy and Procedure Manual (APPM) 2026–27</a>';
const CRITERIA = '<a href="https://www.abet.org/accreditation/accreditation-criteria/" rel="noopener" hreflang="en">critères d’accréditation ABET</a>';

export const home = {
  title: 'Logiciel d’accréditation ABET pour les universités | Academix',
  description: 'Logiciel d’accréditation ABET : évaluez les Student Outcomes, suivez la préparation critère par critère et générez le Self-Study Report. Réservez une démo en ligne.',
  fallback: `<h1>De l’évaluation des cours au rapport d’auto-évaluation ABET</h1>
        <p>Academix est la plateforme d’accréditation des programmes ABET. Les enseignants évaluent, les coordinateurs rédigent leurs rapports, les responsables qualité suivent la préparation critère par critère, et le Self-Study Report est généré à partir des preuves réunies toute l’année.</p>
        <h2>La plateforme</h2>
        <ul>
          <li><strong>Self-Study Report généré</strong> : le plan officiel de votre commission, critères 1 à 8, Program Criteria et annexes, avec les tableaux 5-1 et 6-1 et un dossier de preuves, en document Word modifiable.</li>
          <li><strong>Program Criteria, mot pour mot</strong> : les Program Criteria 2026–27 de chaque discipline EAC, ETAC et CAC.</li>
          <li><strong>Centre de préparation ABET</strong> : l’état de chaque critère et ce qu’il reste à faire.</li>
          <li><strong>Évaluation des Student Outcomes</strong> : PEO, Student Outcomes, indicateurs de performance et CLO dans une seule chaîne, avec des campagnes d’évaluation par semestre.</li>
          <li><strong>Rapports de cours</strong> verrouillés à la soumission, avec export Word au format ETEC TP-154.</li>
          <li><strong>Amélioration continue</strong> : enquêtes, revues des PEO et actions d’amélioration en boucle fermée pour le critère 4.</li>
        </ul>
        <h2>Guides</h2>
        <ul>
          <li><a href="https://academix.tn/fr/what-is-abet-accreditation">Qu’est-ce que l’accréditation ABET ?</a></li>
          <li><a href="https://academix.tn/fr/program-criteria">Les Program Criteria ABET par commission</a></li>
          <li><a href="https://academix.tn/fr/faq">Questions fréquentes</a></li>
          <li><a href="https://academix.tn/fr/pricing">Tarifs</a></li>
        </ul>
        <p><a href="https://academix.tn/fr#contact">Réserver une démo en ligne</a> · <a href="https://academix.tn/fr#quote">Demander un devis</a> · <a href="mailto:contact@jahiz.tn">contact@jahiz.tn</a></p>`,
};

export const faqItems = [
  ['Qu’est-ce que l’accréditation ABET ?', 'L’accréditation ABET est une évaluation, par les experts bénévoles d’ABET, qui confirme qu’un programme universitaire répond aux standards de qualité de sa profession. ABET est une organisation à but non lucratif et non gouvernementale qui accrédite des programmes en sciences appliquées et naturelles, en informatique, en ingénierie et en technologie de l’ingénierie. Selon abet.org, elle accrédite actuellement 4 863 programmes dans 950 établissements de 42 pays. Voir <a href="/what-is-abet-accreditation">notre guide de l’accréditation ABET</a>.'],
  ['Pourquoi l’accréditation ABET est-elle importante pour un programme ?', 'Elle donne aux diplômés un diplôme reconnu par les employeurs, les organismes d’habilitation et les écoles doctorales. Être diplômé d’un programme accrédité ABET est un prérequis pour de nombreux organismes d’habilitation et de certification, et ABET est signataire d’accords de reconnaissance mutuelle (notamment les accords de Washington, Sydney, Dublin et Séoul) qui étendent la reconnaissance de ses programmes à l’international. Elle donne aussi au programme une démarche structurée d’amélioration continue.'],
  ['ABET accrédite-t-elle des universités ou des départements ?', 'Non. ABET accrédite des programmes, chacun menant à un diplôme. Elle n’accrédite ni les établissements ni les départements.'],
  ['Quels programmes peuvent être accrédités par ABET ?', 'Ceux qui relèvent de l’une des quatre commissions d’ABET : ingénierie (EAC ; licence et master), technologie de l’ingénierie (ETAC ; associate et licence), informatique (CAC ; associate, licence et master) et sciences appliquées et naturelles (ANSAC ; associate, licence et master). Le nom du programme doit décrire son contenu, et celui d’un programme d’ingénierie doit comporter le mot « engineering ».'],
  ['Quelles sont les conditions d’éligibilité à une première évaluation ABET ?', 'L’établissement doit être habilité à délivrer des diplômes et contrôler le programme ; le programme doit avoir eu au moins un diplômé dans les deux années universitaires précédant la visite ; et un établissement sans programme accrédité ABET dans la commission concernée doit d’abord passer une Readiness Review. Détails dans notre <a href="/what-is-abet-accreditation#eligibility">section sur l’éligibilité</a>.'],
  ['Quels sont les critères ABET ?', 'Tout programme doit satisfaire les critères généraux de sa commission : 1 Étudiants, 2 Program Educational Objectives, 3 Student Outcomes, 4 Amélioration continue, 5 Curriculum, 6 Corps enseignant, 7 Installations et 8 Soutien institutionnel. Il doit aussi satisfaire les Program Criteria de sa discipline, rédigés avec les sociétés membres d’ABET.'],
  ['Combien de temps dure l’accréditation ABET ?', 'Un programme sans déficience ni faiblesse reçoit une décision « Next General Review », d’une durée habituelle de six ans. Les programmes accrédités font l’objet d’une évaluation complète au moins tous les six ans.'],
  ['Quand faut-il postuler, et quand le Self-Study Report est-il dû ?', 'L’établissement envoie une Request for Evaluation avant le 31 janvier de l’année souhaitée pour l’évaluation, puis le Self-Study Report avant le 1er juillet. Les visites ont normalement lieu entre septembre et décembre, et la décision finale parvient à l’établissement au plus tard le 31 août de l’année suivante.'],
  ['Qu’est-ce que le Self-Study Report ABET ?', 'C’est le document dans lequel un programme montre, critère par critère, comment il satisfait les critères et politiques d’ABET. Il est rédigé en anglais et suit le Self-Study Questionnaire de la commission du programme. Voir <a href="/abet-self-study-report">comment Academix le génère</a>.'],
  ['Combien coûte l’accréditation ABET ?', 'Pour les programmes hors des États-Unis, les frais ABET 2026–27 sont de 1 185 dollars US par programme pour la Readiness Review, 8 975 $ pour le président d’équipe et 8 975 $ par évaluateur de programme pour l’évaluation, puis des frais de maintien annuels de 1 685 $ par campus et par commission, plus 1 685 $ par programme accrédité. Une première évaluation d’un programme revient à environ 19 135 $. Voir <a href="/abet-accreditation-cost">le coût de l’accréditation ABET</a>.'],
  ['Combien de temps faut-il pour obtenir l’accréditation ABET ?', 'Pour un premier programme dans un établissement nouveau pour la commission, environ deux ans entre la Readiness Review (avant le 1er septembre) et la décision finale (au plus tard le 31 août deux ans plus tard), une fois que le programme a des diplômés et des preuves d’évaluation. Voir <a href="/abet-accreditation-timeline">le calendrier ABET</a>.'],
  ['Que sont les indicateurs de performance dans l’évaluation ABET ?', 'Des énoncés précis et mesurables qui décomposent un Student Outcome en éléments qu’une grille peut noter, comme « présente un travail technique à un public non spécialiste » pour la communication. Les critères ABET ne les imposent pas, mais ils sont une manière courante d’évaluer les outcomes au titre du critère 4. Voir <a href="/abet-performance-indicators">les indicateurs de performance, avec exemples</a>.'],
  ['Qu’est-ce qu’Academix ?', 'Academix est un logiciel d’accréditation ABET pour les universités. Les enseignants saisissent les résultats d’évaluation, les coordinateurs rédigent les rapports de cours, les responsables qualité suivent la préparation critère par critère, et la plateforme génère le Self-Study Report à partir des preuves réunies pendant le cycle.'],
  ['Quelles commissions ABET Academix prend-il en charge ?', 'Les quatre : EAC, CAC, ETAC et ANSAC, avec les Student Outcomes et le plan de Self-Study de chacune. Les Program Criteria 2026–27 de chaque discipline EAC, ETAC et CAC sont intégrés mot pour mot ; pour les disciplines ANSAC, les critères sont nommés et cités.'],
  ['Quel est le tarif d’Academix ?', 'Academix est proposé sous licence par département et par an, pour un à trois ans. Vous demandez un devis, le recevez par e-mail et réglez sur facture ; il n’y a pas de paiement en ligne. Voir les <a href="/pricing">tarifs</a>.'],
  ['Où nos données sont-elles hébergées, et qui peut les voir ?', 'Academix est hébergé par Jahiz Digital Solutions. Chaque établissement a sa propre adresse et sa propre base de données, et rien n’est partagé entre clients. Dans la plateforme, l’accès suit le rôle et le département de chacun, et la base est sauvegardée chaque semaine.'],
  ['Peut-on voir Academix avant d’acheter ?', 'Oui. Nous organisons des démos en ligne sur demande. <a href="/#contact">Réservez une démo</a> et parlez-nous de vos programmes et de votre prochaine visite ABET.'],
  ['Academix prend-il en charge le NCAAA ou d’autres accréditeurs ?', 'Academix est conçu pour ABET. Ses rapports de cours peuvent aussi être exportés au format ETEC TP-154 utilisé par les universités saoudiennes, mais il ne revendique pas d’alignement sur les standards du NCAAA.'],
];

export const pages = {
  'what-is-abet-accreditation': {
    title: 'Accréditation ABET : critères et éligibilité | Academix',
    description: 'Guide de l’accréditation ABET : ses quatre commissions, les critères généraux et Program Criteria, l’éligibilité et le calendrier d’évaluation.',
    eyebrow: 'Guide ABET',
    h1: 'Qu’est-ce que l’accréditation ABET ?',
    lede: 'L’accréditation ABET confirme qu’un programme universitaire répond aux standards de qualité de sa profession. Ce guide explique ce qu’ABET accrédite, quels programmes sont éligibles, ce que demandent les critères et comment se déroule une évaluation, d’après les documents ABET 2026–27.',
    type: 'Article',
    guide: true,
    blocks: [
      { h2: 'Ce qu’est ABET', id: 'what-is-abet' },
      { p: 'ABET est une organisation à but non lucratif et non gouvernementale qui accrédite des programmes universitaires en sciences appliquées et naturelles, en informatique, en ingénierie et en technologie de l’ingénierie. Son processus d’accréditation est certifié ISO 9001:2015. Selon <a href="https://www.abet.org/about-abet/" rel="noopener" hreflang="en">abet.org</a>, ABET accrédite actuellement <strong>4 863 programmes dans 950 établissements de 42 pays</strong>.' },
      { p: 'Les évaluations sont menées par des experts bénévoles issus de l’industrie, de l’université et de l’administration, organisés en quatre commissions d’accréditation. ABET n’accrédite <strong>ni</strong> les établissements <strong>ni</strong> les départements : elle accrédite des programmes, chacun menant à un diplôme.' },

      { h2: 'Les programmes accrédités par ABET', id: 'commissions' },
      { p: 'Un programme doit relever d’au moins une des quatre commissions d’ABET. La commission, et donc les critères applicables, dépend du nom du programme, de son curriculum, de ses publications, de ses objectifs et des relevés de notes de ses diplômés.' },
      { table: { caption: 'Commissions ABET', head: ['Commission', 'Programmes', 'Niveaux'], rows: [
        ['EAC, ingénierie', 'Programmes menant à l’exercice professionnel de l’ingénierie. Leur nom doit comporter le mot « engineering ».', 'Licence (bachelor), master'],
        ['ETAC, technologie de l’ingénierie', 'Licences menant à l’exercice de la technologie de l’ingénierie ; associate degrees formant des techniciens. Un nom comportant « engineering » doit aussi comporter « technology ».', 'Associate, licence'],
        ['CAC, informatique', 'Programmes des disciplines de l’informatique et de l’information : informatique, cybersécurité, systèmes d’information, technologies de l’information…', 'Associate, licence, master'],
        ['ANSAC, sciences appliquées et naturelles', 'Programmes fondés sur les mathématiques et les sciences : sciences de l’environnement, radioprotection, sécurité, géomatique…', 'Associate, licence, master'],
      ] } },
      { p: 'Si le nom d’un programme renvoie à une discipline dotée de Program Criteria, le programme doit aussi les satisfaire ; s’il relève de plusieurs commissions, il est évalué conjointement par toutes.' },

      { h2: 'Pourquoi l’accréditation compte', id: 'why' },
      { ul: [
        '<strong>Reconnaissance des diplômés.</strong> Être diplômé d’un programme accrédité ABET est un prérequis pour de nombreux organismes d’habilitation et de certification.',
        '<strong>Mobilité internationale.</strong> ABET est signataire d’accords de reconnaissance mutuelle, dont l’accord de Washington (ingénierie), l’accord de Sydney (technologie de l’ingénierie, niveau licence), l’accord de Dublin (techniciens, niveau associate) et l’accord de Séoul (informatique).',
        '<strong>Employeurs et poursuite d’études.</strong> L’accréditation est un signal externe, évalué par des pairs, que les diplômés sont prêts pour l’exercice professionnel.',
        '<strong>Une discipline d’amélioration continue.</strong> Les critères demandent au programme de fixer des objectifs, de mesurer les Student Outcomes et d’agir sur les résultats, cycle après cycle.',
      ] },

      { h2: 'L’éligibilité à une évaluation ABET', id: 'eligibility' },
      { p: 'Les règles d’éligibilité figurent à la section I.C du ' + APPM + ' d’ABET. En résumé :' },
      { h3: 'L’établissement' },
      { ul: [
        'Il doit être un établissement d’enseignement supérieur disposant d’une reconnaissance gouvernementale, nationale ou régionale vérifiable pour délivrer des diplômes. Hors des États-Unis, il doit être reconnu comme habilité à délivrer des diplômes dans son pays ; aux États-Unis, il doit être accrédité par un accréditeur institutionnel reconnu.',
        'Il doit contrôler le programme, et pouvoir produire pour chaque diplômé un relevé officiel des études et une attestation de diplôme indiquant le programme et le niveau.',
        'Le nom du programme et le diplôme doivent y figurer en anglais exactement comme sur la Request for Evaluation acceptée par ABET.',
      ] },
      { h3: 'Le programme' },
      { ul: [
        'Il doit être un parcours intégré et organisé menant à un diplôme, avec des Program Educational Objectives, des Student Outcomes, un curriculum, un corps enseignant et des installations.',
        'Son nom doit décrire son contenu et apparaître de façon identique sur les relevés, les publications et la Request for Evaluation. Dans les pays non anglophones, le nom est donné en anglais et dans la langue officielle.',
        'Pour une <strong>première évaluation</strong>, le programme doit avoir eu <strong>au moins un diplômé dans les deux années universitaires précédant la visite</strong>.',
        'Un établissement sans programme accrédité ABET dans une commission donnée doit d’abord passer une <strong>Readiness Review</strong>, un examen documentaire obligatoire qui vérifie qu’il est prêt pour une évaluation.',
      ] },

      { h2: 'Les critères ABET', id: 'criteria' },
      { p: 'Chaque commission publie ses critères chaque année. Ils comportent deux parties : les <strong>critères généraux</strong>, que tout programme de la commission doit satisfaire, et les <strong>Program Criteria</strong> propres à certaines disciplines.' },
      { h3: 'Critères généraux' },
      { table: { caption: 'Critères généraux ABET', head: ['Critère', 'Ce que le programme doit montrer'], rows: [
        ['1. Étudiants', 'Comment les étudiants sont admis, suivis, accompagnés et évalués, et que les diplômés remplissent toutes les exigences.'],
        ['2. Program Educational Objectives', 'Des objectifs publiés, cohérents avec la mission de l’établissement et revus avec les parties prenantes du programme.'],
        ['3. Student Outcomes', 'Ce que savent faire les diplômés. Les programmes EAC ont sept outcomes ; CAC et ETAC cinq, auxquels les Program Criteria peuvent en ajouter.'],
        ['4. Amélioration continue', 'L’évaluation régulière de l’atteinte des Student Outcomes, et la preuve que les résultats servent à améliorer le programme.'],
        ['5. Curriculum', 'Les domaines et la profondeur exigés par la commission, dont une expérience de synthèse lorsqu’elle est requise.'],
        ['6. Corps enseignant', 'Des enseignants en nombre suffisant, compétents et qualifiés pour couvrir le curriculum.'],
        ['7. Installations', 'Salles, laboratoires, équipements et ressources informatiques adaptés aux outcomes.'],
        ['8. Soutien institutionnel', 'Une direction, des moyens financiers et du personnel suffisants pour garantir la qualité et la continuité du programme.'],
      ] } },
      { p: 'Les critères 1, 2, 4, 7 et 8 sont <em>harmonisés</em> : identiques dans les quatre commissions pour les programmes de licence et d’associate. Les masters suivent leurs propres critères généraux, plus courts.' },
      { h3: 'Program Criteria' },
      { p: 'Les Program Criteria ajoutent des exigences propres à une discipline, surtout sur le curriculum et le corps enseignant, et sont rédigés avec les sociétés membres d’ABET. Un programme de génie logiciel, par exemple, doit satisfaire à la fois les critères généraux EAC et les Program Criteria du génie logiciel. Voir <a href="/program-criteria">les Program Criteria par commission</a>.' },

      { h2: 'Le déroulement et le calendrier', id: 'timeline' },
      { steps: [
        ['Contacter ABET et passer la Readiness Review', 'Obligatoire pour un établissement sans programme accrédité dans la commission, avant de demander une évaluation.'],
        ['Request for Evaluation avant le 31 janvier', 'Signée par le chef d’établissement, avec le relevé officiel d’un diplômé récent pour chaque programme. Hors des États-Unis, avec l’accord de l’organisme national de reconnaissance.'],
        ['Self-Study Report avant le 1er juillet', 'Déposé en anglais dans l’Accreditation Management System d’ABET, un par programme.'],
        ['Visite sur site, de septembre à décembre', 'En général trois jours, du dimanche au mardi, par une équipe d’experts bénévoles.'],
        ['Draft Statement et réponse sous 30 jours', 'L’établissement reçoit les constats de l’équipe et dispose de 30 jours pour répondre par des actions correctives.'],
        ['Décision finale au plus tard le 31 août suivant', 'La commission prend sa décision d’accréditation, et l’établissement reçoit le Final Statement.'],
      ] },
      { p: 'Les constats sont classés en <strong>Deficiencies</strong> (un critère n’est pas satisfait), <strong>Weaknesses</strong> (la conformité manque de solidité) et <strong>Concerns</strong>. Un programme sans déficience ni faiblesse reçoit une décision « Next General Review », en général pour six ans ; les autres peuvent devoir remettre un rapport intermédiaire ou recevoir une nouvelle visite.' },

      { h2: 'Se préparer avec Academix', id: 'academix' },
      { p: 'L’essentiel du travail d’un cycle ABET consiste à réunir des preuves chaque semestre : évaluations des outcomes, rapports de cours, enquêtes et actions d’amélioration. Academix organise ce travail par rôle et en tire le <a href="/abet-self-study-report">Self-Study Report</a>, avec une <a href="/abet-readiness">vue de préparation</a> par critère tout au long du cycle.' },
      { note: 'Sources : ABET, ' + APPM + ' (sections I.B à I.E et III.D) ; ' + CRITERIA + ' 2026–27 ; <a href="https://www.abet.org/about-abet/" rel="noopener" hreflang="en">About ABET</a> et <a href="https://www.abet.org/global-engagement/mutual-recognition-agreements/" rel="noopener" hreflang="en">accords de reconnaissance mutuelle</a> sur abet.org. Les documents ABET font foi : vérifiez-les pour votre année d’évaluation.' },
    ],
  },

  'abet-student-outcomes': {
    title: 'Student Outcomes ABET 2026–27 : EAC, CAC, ETAC, ANSAC | Academix',
    description: 'Les Student Outcomes exigés par chaque commission ABET au critère 3 en 2026–27 : sept pour l’EAC, cinq pour la CAC et l’ETAC, cinq ou six pour l’ANSAC.',
    eyebrow: 'Guide ABET',
    h1: 'Les Student Outcomes ABET, par commission',
    lede: 'Les Student Outcomes décrivent ce que les étudiants doivent savoir et savoir faire à la fin de leurs études. Le critère 3 fixe ceux que tout programme doit inclure ; cette page les résume pour les quatre commissions du cycle 2026–27.',
    type: 'Article',
    guide: true,
    blocks: [
      { p: 'Chaque programme doit documenter ses Student Outcomes et montrer, au titre du <a href="/abet-criterion-4-continuous-improvement">critère 4</a>, dans quelle mesure ils sont atteints. Un programme peut ajouter ses propres outcomes, et certains Program Criteria en ajoutent un. Les résumés ci-dessous sont les nôtres ; la formulation qui fait foi figure dans les ' + CRITERIA + ' de chaque commission.' },

      { h2: 'Ingénierie (EAC) : sept outcomes', id: 'eac' },
      { table: { caption: 'Student Outcomes EAC 1 à 7', head: ['N°', 'Outcome', 'En bref'], rows: [
        ['1', 'Résolution de problèmes complexes', 'Identifier, formuler et résoudre des problèmes d’ingénierie complexes en appliquant les principes de l’ingénierie, des sciences et des mathématiques.'],
        ['2', 'Conception', 'Concevoir des solutions répondant à des besoins spécifiés, en tenant compte de la santé, de la sécurité et du bien-être publics et des facteurs mondiaux, culturels, sociaux, environnementaux et économiques.'],
        ['3', 'Communication', 'Communiquer efficacement avec des publics variés.'],
        ['4', 'Éthique et responsabilité professionnelle', 'Reconnaître ses responsabilités éthiques et professionnelles et porter des jugements éclairés tenant compte de l’impact des solutions dans leurs contextes mondial, économique, environnemental et sociétal.'],
        ['5', 'Travail en équipe', 'Travailler efficacement dans une équipe dont les membres, ensemble, dirigent, collaborent, fixent des objectifs, planifient et atteignent leurs buts.'],
        ['6', 'Expérimentation', 'Concevoir et mener des expériences, analyser et interpréter des données, et exercer son jugement d’ingénieur pour conclure.'],
        ['7', 'Acquisition de connaissances', 'Acquérir et appliquer de nouvelles connaissances selon les besoins, avec des stratégies d’apprentissage adaptées.'],
      ] } },
      { p: 'Les Program Criteria de l’EAC ajoutent des exigences de curriculum et de corps enseignant, pas d’outcomes supplémentaires.' },

      { h2: 'Informatique (CAC) : cinq outcomes, plus un outcome de discipline', id: 'cac' },
      { table: { caption: 'Student Outcomes CAC 1 à 5', head: ['N°', 'Outcome', 'En bref'], rows: [
        ['1', 'Analyse de problèmes', 'Analyser un problème informatique complexe et appliquer les principes de l’informatique et des disciplines voisines pour trouver des solutions.'],
        ['2', 'Conception de solutions', 'Concevoir, réaliser et évaluer une solution informatique répondant à un ensemble d’exigences dans la discipline du programme.'],
        ['3', 'Communication', 'Communiquer efficacement dans divers contextes professionnels.'],
        ['4', 'Responsabilité professionnelle', 'Reconnaître ses responsabilités professionnelles et porter des jugements éclairés, fondés sur des principes juridiques et éthiques.'],
        ['5', 'Travail en équipe', 'Travailler efficacement comme membre ou responsable d’une équipe.'],
      ] } },
      { p: 'Chaque discipline CAC dotée de Program Criteria ajoute un sixième outcome. Les programmes d’informatique (computer science), par exemple, doivent aussi montrer que les diplômés savent appliquer la théorie de l’informatique et les fondamentaux du développement logiciel pour produire des solutions ; la cybersécurité, la science des données, les systèmes d’information et les technologies de l’information ajoutent chacun le leur. Voir les <a href="/program-criteria/cac">Program Criteria CAC</a>.' },

      { h2: 'Technologie de l’ingénierie (ETAC) : cinq outcomes à chaque niveau', id: 'etac' },
      { p: 'L’ETAC distingue les problèmes <strong>bien définis</strong> (pratiques, de portée restreinte, avec des procédés conventionnels) au niveau associate, des problèmes <strong>largement définis</strong> (plus vastes et complexes, pouvant faire appel à de nouveaux procédés ou techniques) au niveau licence.' },
      { table: { caption: 'Student Outcomes ETAC, associate et licence', head: ['N°', 'Diplôme associate', 'Licence (bachelor)'], rows: [
        ['1', 'Appliquer mathématiques, sciences, ingénierie et technologie, avec des outils modernes, à des problèmes bien définis.', 'Idem, pour des problèmes largement définis.'],
        ['2', 'Concevoir des solutions à des problèmes techniques bien définis et participer à la conception de systèmes, composants ou procédés.', 'Concevoir des systèmes, composants ou procédés répondant à des besoins spécifiés, pour des problèmes largement définis.'],
        ['3', 'Communication écrite, orale et graphique dans des contextes bien définis ; trouver et utiliser la littérature technique.', 'Idem, dans des contextes largement définis.'],
        ['4', 'Réaliser des essais, mesures et expériences standard et en analyser les résultats.', 'Idem, et utiliser les résultats pour améliorer les procédés.'],
        ['5', 'Travailler efficacement comme membre d’une équipe technique.', 'Travailler efficacement comme membre et comme responsable d’équipes techniques.'],
      ] } },

      { h2: 'Sciences appliquées et naturelles (ANSAC) : cinq ou six outcomes', id: 'ansac' },
      { table: { caption: 'Student Outcomes ANSAC, associate et licence', head: ['N°', 'Diplôme associate (5)', 'Licence (6)'], rows: [
        ['1', 'Résoudre des problèmes techniques ou scientifiques largement définis à l’aide des mathématiques, des sciences et des connaissances techniques de la discipline.', 'Idem.'],
        ['2', 'Mener des expériences ou tester des théories, analyser et interpréter des données.', 'Formuler ou concevoir un système, un procédé, une procédure ou un programme adapté à son objectif.'],
        ['3', 'Travailler en équipe.', 'Concevoir et mener des expériences ou tester des hypothèses, analyser les données et exercer son jugement scientifique pour conclure.'],
        ['4', 'Comprendre la responsabilité professionnelle et éthique.', 'Communiquer efficacement avec des publics variés.'],
        ['5', 'Communiquer efficacement.', 'Comprendre les responsabilités éthiques et professionnelles et l’impact des solutions dans leurs contextes mondial, économique, environnemental et sociétal.'],
        ['6', '', 'Travailler efficacement dans des équipes qui fixent des objectifs, planifient, respectent les délais et analysent risques et incertitudes.'],
      ] } },

      { h2: 'Des outcomes aux preuves', id: 'evidence' },
      { p: 'Un outcome comme « communiquer efficacement » est trop large pour être noté directement. La plupart des programmes le décomposent en quelques <a href="/abet-performance-indicators">indicateurs de performance</a>, les mesurent dans des travaux précis et comparent les résultats à une cible. Ce sont ces preuves que le <a href="/abet-criterion-4-continuous-improvement">critère 4</a> demande d’analyser et d’exploiter.' },
      { p: 'Dans Academix, les modèles de Student Outcomes suivent les critères 2026–27 de chaque commission, y compris les outcomes de discipline de la CAC, et chaque résultat remonte aux cours et aux étudiants concernés. Voir <a href="/student-outcomes-assessment">l’évaluation des Student Outcomes</a>.' },
      { note: 'Source : ABET, critères d’accréditation des programmes d’ingénierie, d’informatique, de technologie de l’ingénierie et de sciences appliquées et naturelles 2026–27, critère 3 et Program Criteria. Les masters suivent des critères distincts. La formulation exacte figure dans les ' + CRITERIA + '.' },
    ],
  },

  'abet-performance-indicators': {
    title: 'Indicateurs de performance ABET : définition, exemples | Academix',
    description: 'Ce que sont les indicateurs de performance dans l’évaluation des outcomes ABET, comment bien les rédiger, et des exemples pour les sept Student Outcomes EAC.',
    eyebrow: 'Guide ABET',
    h1: 'Les indicateurs de performance des Student Outcomes ABET',
    lede: 'Un indicateur de performance est un énoncé précis et mesurable de ce qu’un étudiant doit démontrer pour atteindre un Student Outcome. Il transforme un outcome général en élément qu’une grille peut noter et qu’un programme peut améliorer.',
    type: 'Article',
    guide: true,
    blocks: [
      { h2: 'Qu’est-ce qu’un indicateur de performance ?', id: 'definition' },
      { p: 'Les critères ABET exigent des processus documentés pour évaluer l’atteinte des <a href="/abet-student-outcomes">Student Outcomes</a> (critère 4). Ils ne définissent <strong>pas</strong> et n’imposent pas d’indicateurs de performance. Ceux-ci sont une manière courante de répondre à l’exigence : chaque outcome est décomposé en deux à quatre éléments observables, chacun mesuré dans les travaux des cours.' },
      { p: 'Prenons l’outcome EAC 3, « communiquer efficacement avec des publics variés ». Une note unique en dit peu. Des indicateurs comme « organise logiquement un rapport technique » et « présente à un public non spécialiste » montrent ce qui est acquis et ce qui doit progresser.' },

      { h2: 'Bien rédiger ses indicateurs', id: 'writing' },
      { ul: [
        '<strong>Un seul comportement observable,</strong> introduit par un verbe d’action : conçoit, analyse, présente, justifie.',
        '<strong>Deux à quatre par outcome.</strong> Assez pour couvrir l’outcome, assez peu pour tout mesurer à chaque cycle.',
        '<strong>La même formulation dans chaque cours</strong> qui le mesure, pour pouvoir agréger les résultats.',
        '<strong>Mesuré sur un travail précis,</strong> rapport de conception, analyse de laboratoire ou question d’examen, et non sur la note globale d’un cours.',
        '<strong>Noté avec une grille</strong> de quelques niveaux, par exemple insuffisant, en progrès, conforme et supérieur aux attentes.',
        '<strong>Une cible fixée à l’avance,</strong> par exemple la part d’étudiants attendue au niveau « conforme aux attentes » ou au-dessus. Le programme choisit la cible ; ABET n’en impose pas.',
      ] },

      { h2: 'Exemples d’indicateurs pour les outcomes EAC', id: 'examples' },
      { p: 'Ce sont des exemples à adapter, pas des exigences ABET. Rédigez des indicateurs adaptés aux cours et aux parties prenantes de votre programme.' },
      { table: { caption: 'Exemples d’indicateurs de performance, Student Outcomes EAC 1 à 7', head: ['Outcome', 'Exemples d’indicateurs'], rows: [
        ['1. Problèmes complexes', 'Formule le problème avec ses hypothèses et contraintes · Choisit et applique les principes pertinents d’ingénierie, de sciences et de mathématiques · Vérifie que la solution est plausible'],
        ['2. Conception', 'Traduit les besoins en exigences mesurables · Propose et compare plusieurs conceptions · Tient compte de la sécurité, de l’économie et de l’environnement dans la solution retenue'],
        ['3. Communication', 'Rédige un rapport technique clair et bien organisé · Présente un travail technique à un public non spécialiste · Utilise des figures et tableaux au service du propos'],
        ['4. Éthique et responsabilité', 'Identifie les enjeux éthiques d’un cas d’ingénierie · Évalue l’impact d’une solution sur la société et l’environnement · Justifie une décision au regard d’un code de déontologie'],
        ['5. Travail en équipe', 'Assume sa juste part du travail de l’équipe · Participe à la fixation des objectifs et à la planification · Prend la direction d’une partie du projet'],
        ['6. Expérimentation', 'Planifie une expérience pour répondre à une question posée · Analyse les données avec des méthodes appropriées · Tire des conclusions étayées par les données'],
        ['7. Acquisition de connaissances', 'Trouve et évalue des informations au-delà du cours · Applique un outil ou une méthode non enseignés en classe'],
      ] } },

      { h2: 'Du travail en cours à l’outcome', id: 'rollup' },
      { steps: [
        ['Relier', 'Associer chaque indicateur aux acquis d’apprentissage des cours (CLO) et aux travaux évalués qui le démontrent.'],
        ['Noter', 'Les enseignants notent ces travaux avec la grille de l’indicateur.'],
        ['Agréger', 'Les résultats sont combinés entre sections et cours pour chaque indicateur, puis entre indicateurs pour l’outcome.'],
        ['Comparer et agir', 'Les indicateurs sous la cible montrent quoi changer, et sont mesurés de nouveau après le changement.'],
      ] },
      { p: 'Academix fonctionne ainsi : les CLO sont reliés aux indicateurs et les indicateurs aux Student Outcomes, l’atteinte est comparée à la cible de chaque indicateur, et la méthode d’agrégation est enregistrée avec chaque résultat. Voir <a href="/student-outcomes-assessment">l’évaluation des Student Outcomes</a>.' },
      { note: 'L’affirmation selon laquelle les critères ABET ne définissent pas d’indicateurs de performance repose sur les critères 2026–27 des quatre commissions. Les exemples d’indicateurs sont ceux d’Academix.' },
    ],
  },

  'abet-criterion-4-continuous-improvement': {
    title: 'Critère 4 ABET : l’amélioration continue expliquée | Academix',
    description: 'Ce qu’exige le critère 4 d’ABET, la différence entre assessment et evaluation, et comment mener et documenter un cycle d’amélioration lisible par les évaluateurs.',
    eyebrow: 'Guide ABET',
    h1: 'Critère 4 ABET : l’amélioration continue',
    lede: 'Le critère 4 demande à un programme de mesurer dans quelle mesure ses étudiants atteignent les Student Outcomes, et d’en tirer des améliorations. Il est court, identique dans les quatre commissions, et concentre une grande partie des preuves du Self-Study Report.',
    type: 'Article',
    guide: true,
    blocks: [
      { h2: 'Ce que dit le critère 4', id: 'text' },
      { p: 'Le critère commence ainsi : « The program must regularly use appropriate, documented processes for assessing and evaluating the extent to which the student outcomes are being attained. » Il exige ensuite que les résultats alimentent systématiquement les actions d’amélioration continue du programme, et permet d’utiliser aussi d’autres informations.' },
      { p: 'Trois mots portent l’essentiel : les processus doivent être <strong>réguliers</strong>, <strong>documentés</strong> et <strong>exploités</strong>. Les critères ne fixent ni la fréquence de mesure de chaque outcome, ni les méthodes, ni la cible à atteindre : ces choix reviennent au programme, qui doit pouvoir les expliquer.' },

      { h2: 'Assessment et evaluation sont deux étapes distinctes', id: 'assessment-evaluation' },
      { table: { caption: 'Définitions ABET', head: ['', 'Ce que c’est', 'Ce que cela produit'], rows: [
        ['Assessment (mesure)', 'Les processus qui identifient, collectent et préparent les données sur l’atteinte des Student Outcomes, avec des mesures directes, indirectes, quantitatives et qualitatives selon le cas ; l’échantillonnage est permis.', 'Des résultats : notes, taux, réponses aux enquêtes.'],
        ['Evaluation (analyse)', 'Les processus qui interprètent les données et preuves issues de la mesure, et déterminent dans quelle mesure les outcomes sont atteints.', 'Des décisions et des actions pour améliorer le programme.'],
      ] } },
      { p: 'Un programme qui collecte des données sans jamais consigner ses conclusions ni ce qu’il a changé fait de la mesure sans analyse, et ne satisfait pas le critère.' },

      { h2: 'Un cycle d’amélioration lisible par les évaluateurs', id: 'cycle' },
      { steps: [
        ['Définir ce qui est mesuré', 'Décomposer chaque <a href="/abet-student-outcomes">Student Outcome</a> en <a href="/abet-performance-indicators">indicateurs de performance</a>, chacun avec une grille et une cible.'],
        ['Planifier', 'Prévoir quels travaux mesurent chaque indicateur, et à quel semestre. Beaucoup de programmes couvrent tous les outcomes sur un cycle de plusieurs années plutôt qu’à chaque semestre.'],
        ['Collecter les preuves', 'Mesures directes à partir des travaux notés, et indirectes comme les enquêtes auprès des étudiants, des diplômés et des employeurs.'],
        ['Analyser', 'Les enseignants comparent les résultats aux cibles, cherchent les causes et consignent leurs conclusions.'],
        ['Agir', 'Décider des changements, sur un cours, un prérequis ou une évaluation, avec un responsable et une échéance.'],
        ['Boucler la boucle', 'Mesurer de nouveau après le changement et consigner s’il a fonctionné.'],
      ] },

      { h2: 'Les preuves à conserver', id: 'documentation' },
      { ul: [
        'Le plan d’évaluation : outcomes, indicateurs, grilles, cibles et calendrier.',
        'Les résultats par indicateur et par outcome, par semestre, avec le nombre d’étudiants évalués.',
        'Les comptes rendus des réunions d’analyse : participants et conclusions.',
        'Chaque action d’amélioration, sa raison, son responsable, sa date et le résultat du suivi.',
        'Tout changement de méthode ou de cible, et sa justification.',
      ] },

      { h2: 'Les pièges courants', id: 'pitfalls' },
      { ul: [
        '<strong>Les notes de cours comme preuve.</strong> Une note mêle plusieurs outcomes ; notez le travail précis qui démontre l’outcome.',
        '<strong>Des données que personne n’utilise.</strong> Des résultats qui ne débouchent sur aucune décision consignée ne montrent pas d’analyse.',
        '<strong>Des actions sans suivi.</strong> Un changement n’est une amélioration qu’une fois mesuré de nouveau.',
        '<strong>Des chiffres qui bougent.</strong> Un résultat rapporté une année puis recalculé autrement l’année suivante fragilise tout le dossier.',
      ] },
      { p: 'Academix tient ce dossier au fil du travail : les campagnes d’évaluation planifient les mesures, l’atteinte est comparée à la cible de chaque indicateur et figée une fois rapportée, et les actions d’amélioration sont suivies jusqu’à la fermeture de la boucle. La section critère 4 du <a href="/abet-self-study-report">Self-Study Report</a> en est issue.' },
      { note: 'Source : ' + CRITERIA + ' 2026–27, définitions et critère 4, rédigé à l’identique pour l’EAC, la CAC, l’ETAC et l’ANSAC. Les pièges sont des conseils d’Academix, non un texte ABET.' },
    ],
  },

  'abet-accreditation-timeline': {
    title: 'Combien de temps prend l’accréditation ABET ? | Academix',
    description: 'Le calendrier ABET, de la Readiness Review à la décision finale : toutes les échéances (15 août, 1er septembre, 31 janvier, 1er juillet) et un exemple.',
    eyebrow: 'Guide ABET',
    h1: 'Combien de temps prend l’accréditation ABET ?',
    lede: 'Pour un premier programme dans un établissement nouveau pour une commission ABET, environ deux ans séparent la Readiness Review de la décision finale, et le programme doit déjà avoir des diplômés. Voici chaque étape, avec les échéances d’ABET.',
    type: 'Article',
    guide: true,
    blocks: [
      { h2: 'Avant de commencer', id: 'before' },
      { ul: [
        'Le programme doit avoir eu <strong>au moins un diplômé dans les deux années universitaires précédant la visite</strong>.',
        'Il lui faut des objectifs et des Student Outcomes documentés, et des résultats d’évaluation à présenter : prévoyez au moins un ou deux ans d’<a href="/abet-criterion-4-continuous-improvement">évaluation</a> avant la visite.',
        'Un établissement sans programme accrédité ABET dans la commission doit d’abord réussir une <strong>Readiness Review</strong>.',
      ] },

      { h2: 'Les échéances', id: 'deadlines' },
      { table: { caption: 'Échéances d’une évaluation ABET', head: ['Étape', 'Échéance', 'Remarques'], rows: [
        ['Demande de Readiness Review', '15 août de l’année précédant la Request for Evaluation', 'Formulaire en ligne ; seulement pour les établissements nouveaux pour la commission.'],
        ['Rapport de Readiness Review et relevé de notes', '1er septembre de la même année', 'Un rapport par programme, avec le relevé officiel d’un diplômé récent. Facturé en octobre.'],
        ['Request for Evaluation (RFE)', '31 janvier de l’année de l’évaluation', 'Signée par le chef d’établissement ; une par commission. Modifiable ou annulable jusqu’à la réunion de juillet de la commission.'],
        ['Self-Study Report', '1er juillet de l’année de l’évaluation', 'En anglais, un par programme.'],
        ['Visite sur site', 'De septembre à décembre', 'En général trois jours, par un président d’équipe et des évaluateurs de programme.'],
        ['Réponse au Draft Statement', '30 jours après sa réception', 'La réponse de l’établissement, avec ses éventuelles actions correctives.'],
        ['Décision finale', 'Au plus tard le 31 août de l’année suivante', 'La décision de la commission et le Final Statement.'],
      ] } },

      { h2: 'Un exemple', id: 'example' },
      { p: 'Une université sans programme d’ingénierie accrédité ABET vise sa première évaluation EAC à l’automne 2028.' },
      { steps: [
        ['Août–septembre 2027', 'Readiness Review : demande avant le 15 août, rapport et relevé avant le 1er septembre.'],
        ['31 janvier 2028', 'Envoi de la Request for Evaluation.'],
        ['1er juillet 2028', 'Envoi du Self-Study Report.'],
        ['Septembre–décembre 2028', 'Visite sur site.'],
        ['Après la visite', 'Réception du Draft Statement ; l’établissement dispose de 30 jours pour répondre.'],
        ['Au plus tard le 31 août 2029', 'Décision finale d’accréditation.'],
      ] },
      { p: 'Les preuves d’évaluation du Self-Study Report de juillet 2028 doivent être collectées pendant les semestres qui précèdent : en pratique, la préparation commence en 2026 ou avant.' },

      { h2: 'Après l’accréditation', id: 'after' },
      { p: 'Les programmes accrédités font l’objet d’une évaluation complète au moins tous les six ans. Un programme sans déficience ni faiblesse reçoit une décision « Next General Review », en général pour six ans ; les autres peuvent devoir fournir plus tôt un rapport intermédiaire ou recevoir une visite intermédiaire.' },
      { p: 'Academix accompagne toute la période : les preuves sont collectées semestre après semestre, la <a href="/abet-readiness">préparation</a> montre ce qui reste à faire pour chaque critère, et le <a href="/abet-self-study-report">Self-Study Report</a> est généré le moment venu.' },
      { note: 'Sources : ABET ' + APPM + ', sections I.C et I.D ; <a href="https://www.abet.org/accreditation/get-accredited/accreditation-step-by-step/readiness-review/" rel="noopener" hreflang="en">Readiness Review</a> sur abet.org. L’exemple est illustratif ; confirmez les dates de votre année d’évaluation auprès d’ABET.' },
    ],
  },

  'abet-accreditation-cost': {
    title: 'Combien coûte l’accréditation ABET ? Frais 2026–27 | Academix',
    description: 'Les frais ABET 2026–27 pour les programmes hors des États-Unis : Readiness Review, équipe d’évaluation, rapports intermédiaires et maintien annuel, avec exemples.',
    eyebrow: 'Guide ABET',
    h1: 'Combien coûte l’accréditation ABET ?',
    lede: 'ABET publie ses tarifs chaque année. Pour un premier programme hors des États-Unis, les frais du cycle 2026–27 s’élèvent à environ 19 000 dollars US pour la Readiness Review et l’évaluation, puis à environ 3 400 dollars par an pour maintenir l’accréditation.',
    type: 'Article',
    guide: true,
    blocks: [
      { h2: 'Frais ABET pour les programmes hors des États-Unis, 2026–27', id: 'fees' },
      { table: { caption: 'Barème ABET, programmes hors des États-Unis, 2026–27 (dollars US)', head: ['Frais', 'Montant', 'Facturation'], rows: [
        ['Readiness Review', '1 185 $', 'Par programme, pour les établissements nouveaux pour la commission'],
        ['Président d’équipe (ou coprésident)', '8 975 $', 'Par évaluation'],
        ['Évaluateur de programme', '8 975 $', 'Par évaluateur, en général un par programme'],
        ['Un évaluateur pour deux programmes', '445 $', 'En supplément'],
        ['Jour supplémentaire, par évaluateur', '445 $', 'En supplément'],
        ['Visite d’un site hors campus', '445 $', 'Par site et par évaluateur'],
        ['Rapport intermédiaire', '4 785 $', 'Par programme évalué'],
        ['Maintien annuel, base', '1 685 $', 'Par campus et par commission, chaque année'],
        ['Maintien annuel, par programme', '1 685 $', 'Par programme accrédité sur chaque campus, chaque année'],
      ] } },
      { p: 'Les factures sont établies par commission et payables à 30 jours ; ABET applique ensuite un intérêt de 1,5 % par mois. Annuler une évaluation coûte 10 % de la facture avant le 1er juin, jusqu’à 50 % après le 15 août, et davantage une fois les déplacements commencés. Les tarifs des programmes américains sont différents.' },

      { h2: 'Exemples chiffrés', id: 'examples' },
      { table: { caption: 'Frais ABET d’une première évaluation, programmes hors des États-Unis, 2026–27', head: ['', 'Un programme', 'Deux programmes, même commission'], rows: [
        ['Readiness Review', '1 185 $', '2 370 $'],
        ['Président d’équipe', '8 975 $', '8 975 $'],
        ['Évaluateurs de programme', '8 975 $', '17 950 $'],
        ['<strong>Première évaluation, total</strong>', '<strong>19 135 $</strong>', '<strong>29 295 $</strong>'],
        ['<strong>Maintien annuel, chaque année</strong>', '<strong>3 370 $</strong>', '<strong>5 055 $</strong>'],
      ] } },
      { p: 'Hypothèses : un seul campus, un évaluateur par programme, sans jour supplémentaire. Un établissement ayant déjà des programmes accrédités dans la commission n’a pas de Readiness Review.' },

      { h2: 'Les coûts hors facture ABET', id: 'other-costs' },
      { ul: [
        'Le temps des enseignants et du personnel pour évaluer chaque semestre et rédiger le <a href="/abet-self-study-report">Self-Study Report</a>, généralement le poste le plus lourd.',
        'La formation, comme les ateliers ABET destinés aux enseignants.',
        'Les outils de collecte et de restitution des preuves d’évaluation.',
        'Les lacunes révélées par l’évaluation : laboratoires, corps enseignant, curriculum.',
      ] },
      { p: 'Academix est proposé sous licence par département et par an, sur devis. Voir les <a href="/pricing">tarifs</a>.' },
      { note: 'Source : ABET, <a href="https://www.abet.org/accreditation/cost-of-accreditation/fees-for-programs-outside-the-u-s/" rel="noopener" hreflang="en">Fees for programs outside the U.S.</a>, cycle 2026–27, et ' + APPM + ', section I.D (le barème est publié au plus tard le 1er avril de chaque année). Les totaux sont calculés par Academix ; utilisez toujours le barème en vigueur d’ABET.' },
    ],
  },

  'choosing-abet-accreditation-software': {
    title: 'Choisir un logiciel d’accréditation ABET : la checklist | Academix',
    description: 'Les questions à poser avant de choisir un logiciel d’accréditation ABET : commissions, modèle d’outcomes, chiffres traçables, Self-Study Report, données, tarifs.',
    eyebrow: 'Guide ABET',
    h1: 'Choisir un logiciel d’accréditation ABET',
    lede: 'Un tableur suffit pour un programme et un cycle. Avec plusieurs programmes, des dizaines d’enseignants et six ans de preuves, un logiciel aide. Voici les questions à poser à tout éditeur, nous compris.',
    type: 'Article',
    guide: true,
    blocks: [
      { h2: 'Est-il adapté à ABET ?', id: 'fit' },
      { ol: [
        '<strong>Commissions et niveaux.</strong> Prend-il en charge vos commissions (EAC, CAC, ETAC, ANSAC) et vos niveaux de diplôme ?',
        '<strong>Les critères en vigueur.</strong> Les critères du cycle sont-ils intégrés, y compris les <a href="/program-criteria">Program Criteria</a> de vos disciplines, et mis à jour chaque année ?',
        '<strong>Votre modèle d’outcomes.</strong> Pouvez-vous modéliser objectifs, <a href="/abet-student-outcomes">Student Outcomes</a>, <a href="/abet-performance-indicators">indicateurs de performance</a> et acquis des cours comme votre programme les pratique ?',
        '<strong>Le Self-Study Report.</strong> Produit-il le rapport selon le plan de votre commission, en document modifiable, avec les tableaux remplis à partir de vos données ?',
      ] },
      { h2: 'Ses chiffres sont-ils fiables ?', id: 'figures' },
      { ol: [
        '<strong>Traçables.</strong> Chaque taux d’atteinte remonte-t-il aux étudiants, cours et évaluations concernés ?',
        '<strong>Expliqués.</strong> La méthode de calcul accompagne-t-elle le résultat, pour qu’un évaluateur puisse la suivre ?',
        '<strong>Stables.</strong> Un chiffre rapporté reste-t-il identique quand une note est corrigée plus tard, ou change-t-il sans prévenir ?',
        '<strong>Directs et indirects.</strong> Les résultats d’enquêtes peuvent-ils figurer à côté des mesures directes, comme le permet le <a href="/abet-criterion-4-continuous-improvement">critère 4</a> ?',
      ] },
      { h2: 'Sera-t-il utilisé ?', id: 'use' },
      { ol: [
        '<strong>Les rôles.</strong> Enseignants, coordinateurs de cours, responsables qualité et doyens voient-ils chacun ce dont ils ont besoin, et seulement cela ?',
        '<strong>L’import des données.</strong> Peut-on importer cours, outcomes et listes d’étudiants depuis les tableurs existants ?',
      ] },
      { h2: 'L’éditeur est-il un choix sûr ?', id: 'vendor' },
      { ol: [
        '<strong>Vos données.</strong> Où sont-elles hébergées, sont-elles séparées de celles des autres clients, et comment sont-elles sauvegardées ?',
        '<strong>Le tarif.</strong> Par département, par programme ou par utilisateur, et pour quelle durée ?',
        '<strong>Une démo sur vos programmes.</strong> L’éditeur présente-t-il le produit en tenant compte de votre commission et de votre prochaine évaluation ?',
      ] },

      { h2: 'Les réponses d’Academix', id: 'academix' },
      { table: { caption: 'Academix face à la checklist', head: ['Question', 'Academix'], rows: [
        ['Commissions', 'Les quatre : EAC, CAC, ETAC et ANSAC.'],
        ['Critères en vigueur', 'Program Criteria 2026–27 de chaque discipline EAC, ETAC et CAC, mot pour mot ; disciplines ANSAC nommées et citées.'],
        ['Modèle d’outcomes', 'PEO, Student Outcomes, indicateurs de performance et CLO, avec la matrice CLO–indicateurs.'],
        ['Self-Study Report', 'Généré selon le plan de votre commission en document Word, avec les tableaux 5-1 et 6-1.'],
        ['Chiffres', 'Traçables jusqu’aux étudiants ; la méthode est enregistrée avec chaque résultat ; les chiffres rapportés sont figés jusqu’à un nouveau calcul explicite.'],
        ['Rôles', 'Enseignants, coordinateurs, responsables qualité et curriculum, chefs de département et doyens ; chacun travaille dans son département, les doyens dans leur faculté.'],
        ['Données', 'Votre propre adresse et votre propre base de données, sauvegardée chaque semaine.'],
        ['Tarif', 'Par département et par an, pour un à trois ans, sur devis.'],
      ] } },
      { p: 'Le meilleur test, ce sont vos programmes. <a href="/#contact">Réservez une démo en ligne</a>.' },
    ],
  },

  'abet-self-study-report': {
    title: 'Logiciel de Self-Study Report ABET : générez le rapport | Academix',
    description: 'Générez votre Self-Study Report ABET selon le plan officiel de votre commission : critères 1 à 8, Program Criteria, tableaux 5-1 et 6-1 et annexes, en Word.',
    eyebrow: 'Self-Study Report',
    h1: 'Le Self-Study Report ABET, généré à partir de vos preuves',
    lede: 'Le Self-Study Report est le document où un programme montre à ABET comment il satisfait chaque critère. Academix l’assemble à partir des données réunies tout au long du cycle, selon le plan officiel de votre commission, et l’exporte en document Word modifiable.',
    type: 'WebPage',
    blocks: [
      { h2: 'Ce qu’est le Self-Study Report' },
      { p: 'ABET évalue un programme notamment à partir du Self-Study Report qu’il remet, qui montre comment le programme satisfait chaque critère et politique applicable. Il couvre tous les modes d’enseignement et parcours menant au diplôme, est rédigé en anglais et doit être remis avant le 1er juillet de l’année d’évaluation. Chaque commission publie un Self-Study Questionnaire qui en fixe le plan.' },
      { h2: 'Ce qu’Academix y met' },
      { table: { caption: 'Contenu du Self-Study Report', head: ['Partie', 'Alimentée par'], rows: [
        ['Background', 'Les informations du programme et vos sections rédigées.'],
        ['Critère 1, Étudiants', 'Vos politiques et le suivi des inscrits et des diplômés.'],
        ['Critère 2, Program Educational Objectives', 'Vos PEO, leur lien avec la mission, vos parties prenantes et l’historique des revues.'],
        ['Critère 3, Student Outcomes', 'Vos outcomes et indicateurs de performance, et leur lien avec les PEO.'],
        ['Critère 4, Amélioration continue', 'Les résultats d’atteinte, les campagnes d’évaluation, les enquêtes et les actions d’amélioration en boucle fermée.'],
        ['Critère 5, Curriculum', 'Le curriculum, avec le tableau 5-1 généré à partir de vos cours.'],
        ['Critère 6, Corps enseignant', 'Les fiches des enseignants, avec le tableau 6-1 de leurs qualifications.'],
        ['Critères 7 et 8', 'Les installations et équipements, et les sections sur le soutien institutionnel.'],
        ['Program Criteria', 'Les Program Criteria 2026–27 de votre discipline, mot pour mot, suivis de votre réponse.'],
        ['Annexes', 'Plans de cours, CV des enseignants, équipements (annexe C) et synthèse institutionnelle (annexe D).'],
      ] } },
      { p: 'La rédaction reste la vôtre : chaque section a son éditeur et son état d’avancement, et Academix fournit les parties chiffrées, pour que les chiffres du rapport soient ceux que votre équipe voit à l’écran.' },
      { h2: 'Pourquoi le générer plutôt que l’écrire de zéro' },
      { ul: [
        '<strong>Une seule source de chiffres.</strong> Atteintes, tableaux et effectifs viennent des mêmes données que les tableaux de bord : un export ne contredit jamais l’écran.',
        '<strong>Le bon plan.</strong> Le rapport suit le plan de la commission du programme : EAC, CAC, ETAC ou ANSAC.',
        '<strong>Le texte exact des critères.</strong> Les Program Criteria sont imprimés tels qu’ABET les publie, y compris les modifications proposées en consultation.',
        '<strong>Les preuves au même endroit.</strong> Les fichiers joints à chaque critère sont listés dans l’index des preuves du rapport.',
      ] },
      { p: 'Voir aussi la <a href="/abet-readiness">préparation ABET</a>, qui montre ce qui manque encore avant l’export.' },
    ],
  },

  'student-outcomes-assessment': {
    title: 'Évaluation des Student Outcomes ABET | Academix',
    description: 'Évaluez les Student Outcomes ABET via indicateurs de performance et CLO, planifiez les campagnes par semestre et bouclez l’amélioration continue du critère 4.',
    eyebrow: 'Student Outcomes',
    h1: 'L’évaluation des Student Outcomes, du carnet de notes au critère 4',
    lede: 'ABET demande à chaque programme de mesurer dans quelle mesure ses diplômés atteignent ses Student Outcomes et d’en tirer des améliorations. Academix relie chaque outcome aux travaux qui l’attestent et fige les chiffres une fois publiés.',
    type: 'WebPage',
    blocks: [
      { h2: 'La chaîne des objectifs aux cours' },
      { ol: [
        '<strong>Program Educational Objectives (PEO)</strong> : ce que les diplômés accomplissent quelques années après le diplôme (critère 2).',
        '<strong>Student Outcomes (SO)</strong> : ce que les étudiants savent faire au diplôme, comme les sept outcomes EAC (critère 3).',
        '<strong>Indicateurs de performance (PI)</strong> : des énoncés mesurables qui décomposent chaque outcome.',
        '<strong>Acquis d’apprentissage des cours (CLO)</strong> : évalués dans les cours et reliés aux indicateurs qu’ils attestent.',
      ] },
      { p: 'Les notes des travaux évalués remontent des CLO aux indicateurs puis aux Student Outcomes : chaque chiffre peut être retracé jusqu’aux étudiants et aux cours qui le fondent.' },
      { h2: 'Comment l’atteinte est mesurée' },
      { p: 'Academix exprime l’atteinte en part d’étudiants évalués au niveau « répond aux attentes » ou au-dessus, comparée à la cible fixée pour chaque indicateur. La manière de combiner les preuves entre cours et indicateurs est un paramètre, et la méthode utilisée est enregistrée avec chaque résultat.' },
      { ul: [
        '<strong>Campagnes d’évaluation</strong> : quels CLO mesurent chaque indicateur au cours d’un semestre, et la couverture sur tout le cycle.',
        '<strong>Instantanés</strong> : un chiffre publié est figé et ne dérive pas si une note est corrigée plus tard.',
        '<strong>Preuves indirectes</strong> : les enquêtes auprès des parties prenantes s’ajoutent aux mesures directes.',
        '<strong>Actions d’amélioration</strong> : ouvertes sur les indicateurs sous la cible et suivies jusqu’à la clôture de la boucle, pour le critère 4.',
      ] },
      { h2: 'Pour chaque commission' },
      { p: 'Les modèles de Student Outcomes suivent les critères 2026–27 de chaque commission : sept outcomes pour l’EAC, cinq pour la CAC et l’ETAC, avec l’outcome disciplinaire qu’ajoutent certains Program Criteria de la CAC. Voir <a href="/what-is-abet-accreditation#criteria">les critères ABET</a>.' },
    ],
  },

  'abet-readiness': {
    title: 'Préparation ABET : suivi critère par critère | Academix',
    description: 'Voyez où en est chaque programme avant son évaluation ABET : complétude de chaque critère, points restants et page où les traiter, à partir des données déjà saisies.',
    eyebrow: 'Préparation ABET',
    h1: 'Sachez où en est chaque critère, avant la visite',
    lede: 'Le centre de préparation ABET vérifie chaque programme au regard des critères, à partir des données déjà présentes dans Academix, et liste ce qui reste à faire avec un lien vers la page où le traiter.',
    type: 'WebPage',
    blocks: [
      { h2: 'Ce qu’il vérifie' },
      { p: 'La préparation est un ensemble de contrôles concrets par critère : par exemple, que chaque indicateur de performance est mesuré par au moins un CLO, que les actions d’amélioration ont un suivi enregistré, que les fiches des enseignants sont complètes et que les preuves sont jointes. Chaque programme obtient un taux de complétude global et une liste des points restants.' },
      { ul: [
        '<strong>Le reste à faire d’abord.</strong> Ce qui demande encore du travail, regroupé par critère.',
        '<strong>Un clic vers la correction.</strong> Chaque point renvoie à la page où il se traite.',
        '<strong>Par programme et par cycle.</strong> La préparation est calculée par curriculum, et peut être limitée à un cycle d’évaluation.',
        '<strong>Sur le tableau de bord.</strong> La préparation apparaît aussi sur la page d’accueil : on la voit tous les jours, pas seulement avant une visite.',
      ] },
      { p: 'Une fois les contrôles au vert, le <a href="/abet-self-study-report">Self-Study Report</a> s’exporte depuis la même page.' },
    ],
  },

  'program-criteria': {
    title: 'Program Criteria ABET par commission (EAC, ETAC, CAC) | Academix',
    description: 'Les Program Criteria ABET de chaque discipline EAC, ETAC et CAC pour le cycle 2026–27, avec leurs sociétés responsables. Academix en intègre le texte mot pour mot.',
    eyebrow: 'Program Criteria',
    h1: 'Les Program Criteria ABET, par commission',
    lede: 'Les Program Criteria ajoutent des exigences propres à chaque discipline aux critères généraux d’ABET. Academix intègre mot pour mot les Program Criteria 2026–27 de chaque discipline EAC, ETAC et CAC, et les imprime dans votre Self-Study Report.',
    type: 'CollectionPage',
    blocks: [
      { p: 'Un programme dont le nom renvoie à une discipline dotée de Program Criteria doit les satisfaire en plus des critères généraux de sa commission. Ils sont rédigés avec les sociétés membres d’ABET et portent surtout sur le curriculum et le corps enseignant ; certains critères CAC ajoutent aussi un Student Outcome.' },
      { html: '__COMMISSION_INDEX__' },
      { note: 'Les Program Criteria ANSAC (par exemple sciences de l’environnement, géologie, sécurité, géomatique) sont nommés et cités dans Academix ; leur texte intégral est en cours d’ajout.' },
    ],
  },
  'program-criteria/eac': { commission: 'EAC' },
  'program-criteria/etac': { commission: 'ETAC' },
  'program-criteria/cac': { commission: 'CAC' },

  pricing: {
    title: 'Tarifs Academix : licence par département et par an',
    description: 'Academix : licence par département et par an, pour un à trois ans. Devis par e-mail, règlement sur facture. Hébergement, support et mises à jour inclus.',
    eyebrow: 'Tarifs',
    h1: 'Une licence par département et par an',
    lede: 'Chaque département accrédité a sa propre licence. Vous nous dites ce dont vous avez besoin, nous vous envoyons un devis par e-mail, et vous réglez sur facture. Rien à payer en ligne.',
    type: 'WebPage',
    blocks: [
      { h2: 'Ce dont dépend le prix' },
      { ul: [
        '<strong>Départements.</strong> Une licence par département dont vous préparez les programmes à ABET.',
        '<strong>Programmes actifs par département.</strong> Le nombre de versions de programme utilisées en même temps.',
        '<strong>Durée.</strong> Un, deux ou trois ans.',
      ] },
      { h2: 'Ce que comprend chaque licence' },
      { ul: [
        'L’adresse propre de votre établissement et sa propre base de données, hébergées pour vous, avec une sauvegarde hebdomadaire.',
        'Tous les modules : évaluation des outcomes, rapports de cours, préparation, Self-Study Report et amélioration continue.',
        'Les mises à jour lorsqu’ABET publie de nouveaux critères à chaque cycle.',
        'La prise en main et le support par l’équipe qui construit la plateforme.',
      ] },
      { h2: 'Comment se passe l’achat' },
      { steps: [
        ['Demander un devis', 'Décrivez votre établissement, vos départements et votre calendrier dans le <a href="/#quote">formulaire de devis</a>.'],
        ['Recevoir le devis', 'Nous vous l’envoyons par e-mail, en général sous deux jours ouvrés.'],
        ['Accepter et régler la facture', 'Répondez au devis ; nous envoyons la facture à votre service financier.'],
        ['Démarrer', 'Vous recevez votre adresse et un lien pour choisir votre mot de passe, puis créez vos départements.'],
      ] },
      { p: 'Vous préférez voir d’abord ? <a href="/#contact">Réservez une démo en ligne</a>.' },
    ],
  },

  faq: {
    title: 'Accréditation ABET et Academix : questions fréquentes',
    description: 'Réponses sur l’accréditation ABET (éligibilité, critères, calendrier, intérêt) et sur Academix (commissions prises en charge, tarifs, hébergement, démos).',
    eyebrow: 'FAQ',
    h1: 'Questions fréquentes',
    lede: 'Sur l’accréditation ABET, et sur Academix.',
    type: 'FAQPage',
    blocks: [
      { h2: 'Sur l’accréditation ABET', id: 'abet' },
      { faq: '__FAQ_ABET__' },
      { h2: 'Sur Academix', id: 'academix' },
      { faq: '__FAQ_ACADEMIX__' },
    ],
  },
};

export const commissionPages = {
  EAC: {
    title: 'Program Criteria ABET EAC : 31 disciplines | Academix',
    description: 'Les 31 disciplines d’ingénierie dotées de Program Criteria EAC en 2026–27, avec leurs sociétés responsables. Academix en intègre le texte intégral.',
    h1: 'Program Criteria EAC : disciplines d’ingénierie',
    lede: 'L’Engineering Accreditation Commission publie des Program Criteria pour 31 disciplines en 2026–27. Ils portent sur le curriculum et le corps enseignant, et s’appliquent en licence comme en master.',
  },
  ETAC: {
    title: 'Program Criteria ABET ETAC : 26 disciplines | Academix',
    description: 'Les 26 disciplines de technologie de l’ingénierie dotées de Program Criteria ETAC en 2026–27, avec leurs sociétés responsables, intégrées en texte intégral.',
    h1: 'Program Criteria ETAC : technologie de l’ingénierie',
    lede: 'L’Engineering Technology Accreditation Commission publie des Program Criteria pour 26 disciplines en 2026–27, la plupart avec des exigences distinctes pour l’associate et la licence.',
  },
  CAC: {
    title: 'Program Criteria ABET CAC : disciplines informatiques | Academix',
    description: 'Program Criteria ABET CAC 2026–27 : informatique, cybersécurité, science des données, systèmes et technologies de l’information, niveau associate compris.',
    h1: 'Program Criteria CAC : disciplines informatiques',
    lede: 'La Computing Accreditation Commission publie des Program Criteria pour les disciplines informatiques, dont plusieurs ajoutent un Student Outcome disciplinaire aux cinq outcomes généraux.',
  },
};

export const ui = {
  commissionIntro: (n, c) => `${n} disciplines dotées de Program Criteria ${c} pour le cycle 2026–27.`,
  colDiscipline: 'Discipline (intitulé ABET)', colSociety: 'Société responsable', colStatus: 'Dans Academix',
  full: 'Texte intégral', proposed: 'Proposé (pas encore en vigueur)', proposedChange: 'Texte intégral ; modification proposée affichée',
  seeAll: (n) => `Voir les ${n} disciplines`,
  commissionNames: { EAC: 'Ingénierie (EAC)', ETAC: 'Technologie de l’ingénierie (ETAC)', CAC: 'Informatique (CAC)' },
  programCriteria: 'Program Criteria',
  moreGuides: 'Autres guides ABET',
  levelsNote: 'Niveau associate',
};
