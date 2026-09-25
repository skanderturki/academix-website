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
  levelsNote: 'Niveau associate',
};
