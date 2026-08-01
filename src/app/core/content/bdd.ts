export const questions = [
  {
    question:
      'What is BDD, and how does it differ from TDD rather than just being "TDD with different syntax"?',
    answer:
      'TDD drives implementation from developer-facing unit tests written in code; BDD drives it from executable, plain-language scenarios describing observable behavior that a developer, tester, and business stakeholder can all read and agree on together - the shift is as much about collaboration and shared understanding before coding starts as it is about the test format itself.',
    questionFr:
      'Qu\'est-ce que le BDD, et en quoi diffère-t-il du TDD plutôt que d\'être juste "du TDD avec une autre syntaxe" ?',
    answerFr:
      "Le TDD pilote l'implémentation à partir de tests unitaires orientés développeur écrits en code ; le BDD la pilote à partir de scénarios exécutables en langage naturel décrivant un comportement observable que développeur, testeur et partie prenante métier peuvent tous lire et valider ensemble - le changement porte autant sur la collaboration et la compréhension partagée avant de coder que sur le format de test lui-même.",
  },
  {
    question: 'What is the Given/When/Then structure, and what does each part actually represent?',
    answer:
      'Given sets up the initial context/preconditions before the behavior under test; When describes the action or event that triggers the behavior; Then asserts the expected observable outcome - structuring every scenario this way keeps it focused on one clear cause-and-effect relationship instead of an unstructured list of steps.',
    questionFr:
      "Qu'est-ce que la structure Given/When/Then, et que représente réellement chaque partie ?",
    answerFr:
      "Given pose le contexte/les préconditions initiales avant le comportement testé ; When décrit l'action ou l'événement qui déclenche le comportement ; Then vérifie le résultat observable attendu - structurer chaque scénario ainsi le garde centré sur une relation de cause à effet claire plutôt qu'une liste de étapes non structurée.",
  },
  {
    question:
      "Why is Gherkin written in plain, structured natural language instead of code, and what's the tradeoff?",
    answer:
      'Plain language keeps scenarios readable and reviewable by non-developers (product owners, QA, business analysts), letting them validate the specification directly rather than trusting a developer\'s translation of it; the tradeoff is that Gherkin needs a layer of "glue code" (step definitions) to actually execute, and loose or ambiguous phrasing can make scenarios harder to automate reliably than an equivalent code-based test.',
    questionFr:
      "Pourquoi Gherkin est-il écrit en langage naturel structuré plutôt qu'en code, et quel est le compromis ?",
    answerFr:
      "Le langage naturel garde les scénarios lisibles et relisables par des non-développeurs (product owners, QA, analystes métier), leur permettant de valider directement la spécification plutôt que de faire confiance à la traduction d'un développeur ; le compromis est que Gherkin nécessite une couche de \"glue code\" (step definitions) pour s'exécuter réellement, et une formulation floue ou ambiguë peut rendre les scénarios plus difficiles à automatiser de façon fiable qu'un test équivalent en code.",
  },
  {
    question:
      "What are step definitions, and what's the actual division of responsibility between a feature file and its step definitions?",
    answer:
      'The feature file (in Gherkin) is the human-readable specification of behavior; step definitions are the code that maps each Given/When/Then line to executable actions (calling application code, making assertions) - the feature file should stay stable and readable by non-developers, while step definitions absorb all the technical implementation detail of how a step is actually carried out.',
    questionFr:
      'Que sont les step definitions, et quelle est la vraie séparation des responsabilités entre un fichier feature et ses step definitions ?',
    answerFr:
      "Le fichier feature (en Gherkin) est la spécification lisible par un humain du comportement ; les step definitions sont le code qui associe chaque ligne Given/When/Then à des actions exécutables (appeler le code applicatif, faire des assertions) - le fichier feature doit rester stable et lisible par des non-développeurs, tandis que les step definitions absorbent tout le détail technique d'implémentation de la façon dont une étape est réellement réalisée.",
  },
  {
    question:
      'Cucumber, SpecFlow, Behave - what do they have in common, and what does that reveal about BDD as a practice?',
    answer:
      "They're Gherkin-runners for different language ecosystems (Java/Kotlin, .NET, Python respectively) that all parse the same Given/When/Then syntax and dispatch to language-specific step definitions - revealing that BDD as a practice and Gherkin as a specification format are language-agnostic; the tool is just the execution engine, not the methodology itself.",
    questionFr:
      "Cucumber, SpecFlow, Behave - qu'ont-ils en commun, et que cela révèle-t-il sur le BDD en tant que pratique ?",
    answerFr:
      "Ce sont des exécuteurs Gherkin pour différents écosystèmes de langage (Java/Kotlin, .NET, Python respectivement) qui parsent tous la même syntaxe Given/When/Then et dispatchent vers des step definitions spécifiques au langage - révélant que le BDD en tant que pratique et Gherkin en tant que format de spécification sont agnostiques du langage ; l'outil n'est que le moteur d'exécution, pas la méthodologie elle-même.",
  },
  {
    question:
      'What is the "Three Amigos" practice, and what problem in requirements does it aim to prevent?',
    answer:
      "A short conversation before development starts between someone representing the business (what's needed and why), development (how it could be built), and testing (what could go wrong, edge cases) - aimed at surfacing ambiguity, missing edge cases, and misunderstandings while a story is cheap to change, instead of discovering them mid-implementation or in a bug report after release.",
    questionFr:
      'Qu\'est-ce que la pratique des "Three Amigos", et quel problème de spécification vise-t-elle à prévenir ?',
    answerFr:
      "Une courte conversation avant le début du développement entre quelqu'un représentant le métier (ce qui est nécessaire et pourquoi), le développement (comment ça pourrait être construit), et le test (ce qui pourrait mal tourner, les cas limites) - visant à faire remonter l'ambiguïté, les cas limites manquants et les malentendus pendant qu'une story est bon marché à changer, plutôt que de les découvrir en cours d'implémentation ou dans un rapport de bug après release.",
  },
  {
    question:
      'What is Example Mapping, and how does it help before scenarios get written in Gherkin?',
    answer:
      "A structured workshop technique using colored cards - a story, the business rules governing it, concrete examples illustrating each rule, and questions that need answers - used to explore and refine a story's scope collaboratively before committing anything to Gherkin, so the automated scenarios that follow are built on an already-agreed, unambiguous understanding rather than becoming the place where disagreements first surface.",
    questionFr:
      "Qu'est-ce que l'Example Mapping, et en quoi aide-t-il avant que les scénarios ne soient écrits en Gherkin ?",
    answerFr:
      "Une technique d'atelier structuré utilisant des cartes colorées - une story, les règles métier qui la régissent, des exemples concrets illustrant chaque règle, et des questions nécessitant des réponses - utilisée pour explorer et affiner collaborativement le périmètre d'une story avant d'écrire quoi que ce soit en Gherkin, pour que les scénarios automatisés qui suivent s'appuient sur une compréhension déjà partagée et non ambiguë plutôt que de devenir l'endroit où les désaccords apparaissent en premier.",
  },
  {
    question:
      'What does "outside-in" mean as a way of describing BDD\'s approach to development, in contrast to TDD\'s typical inside-out flow?',
    answer:
      "Outside-in starts from a high-level, user-observable scenario (an acceptance test) and works inward, writing just enough lower-level code and unit tests to make that outer scenario pass; a purely inside-out TDD flow instead starts by unit-testing small internal components first and composes them upward, risking well-tested pieces that don't actually add up to the behavior a user needs.",
    questionFr:
      'Que signifie "outside-in" comme façon de décrire l\'approche du BDD au développement, par contraste avec le flux inside-out typique du TDD ?',
    answerFr:
      "Outside-in part d'un scénario de haut niveau, observable par l'utilisateur (un test d'acceptation) et travaille vers l'intérieur, écrivant juste assez de code bas niveau et de tests unitaires pour faire passer ce scénario externe ; un flux TDD purement inside-out commence au contraire par tester unitairement de petits composants internes puis les compose vers le haut, risquant des pièces bien testées qui ne s'assemblent pas réellement en le comportement dont un utilisateur a besoin.",
  },
  {
    question:
      "What's the difference between an imperative and a declarative Gherkin scenario, and why is declarative usually preferred?",
    answer:
      'An imperative scenario spells out low-level UI steps ("I click the login button", "I type \'user\' in the username field"); a declarative scenario describes the same behavior at the level of business intent ("I log in as a valid user"); declarative scenarios are preferred because they stay readable and stable even when the UI implementation changes, pushing the low-level detail down into step definitions instead of baking it into the specification itself.',
    questionFr:
      'Quelle est la différence entre un scénario Gherkin impératif et déclaratif, et pourquoi le déclaratif est-il généralement préféré ?',
    answerFr:
      'Un scénario impératif détaille des étapes UI bas niveau ("je clique sur le bouton de connexion", "je tape \'user\' dans le champ nom d\'utilisateur") ; un scénario déclaratif décrit le même comportement au niveau de l\'intention métier ("je me connecte en tant qu\'utilisateur valide") ; les scénarios déclaratifs sont préférés car ils restent lisibles et stables même quand l\'implémentation UI change, repoussant le détail bas niveau dans les step definitions plutôt que de le figer dans la spécification elle-même.',
  },
  {
    question:
      'What does a Scenario Outline with an Examples table let you avoid, compared to writing several near-identical scenarios?',
    answer:
      'It lets you write one scenario template with placeholder variables and supply many rows of concrete input/expected-output data in an Examples table, running the same logical scenario once per row - avoiding copy-pasted, near-duplicate scenarios that differ only in their data and that would all need updating in lockstep if the underlying behavior changes.',
    questionFr:
      "Qu'évite un Scenario Outline avec une table Examples, comparé à écrire plusieurs scénarios quasi identiques ?",
    answerFr:
      "Il permet d'écrire un seul scénario modèle avec des variables placeholder et de fournir de nombreuses lignes de données entrée/sortie attendue concrètes dans une table Examples, exécutant le même scénario logique une fois par ligne - évitant des scénarios copiés-collés quasi dupliqués qui ne diffèrent que par leurs données et qui devraient tous être mis à jour en même temps si le comportement sous-jacent change.",
  },
  {
    question:
      'What is a Background section in a Gherkin feature file, and what problem of repeated setup does it solve?',
    answer:
      "A set of Given steps run automatically before every scenario in that feature file, factoring out setup steps that would otherwise be repeated identically at the top of each scenario - keeping each individual scenario focused on what's actually different about it rather than re-stating shared preconditions every time.",
    questionFr:
      "Qu'est-ce qu'une section Background dans un fichier feature Gherkin, et quel problème de setup répété résout-elle ?",
    answerFr:
      "Un ensemble d'étapes Given exécutées automatiquement avant chaque scénario de ce fichier feature, factorisant des étapes de setup qui seraient sinon répétées à l'identique en tête de chaque scénario - gardant chaque scénario individuel centré sur ce qui le distingue réellement plutôt que de reformuler des préconditions partagées à chaque fois.",
  },
  {
    question: 'What are tags used for in Cucumber/Gherkin, and what workflow does that unlock?',
    answer:
      "Labels (e.g. `@smoke`, `@slow`, `@wip`) attached to features or scenarios that let you run a filtered subset via the test runner's command line - unlocking workflows like running only fast smoke tests on every commit while reserving a full, slower regression suite for a nightly or pre-release run, without maintaining separate test files for each subset.",
    questionFr:
      'À quoi servent les tags dans Cucumber/Gherkin, et quel workflow cela débloque-t-il ?',
    answerFr:
      "Des labels (`@smoke`, `@slow`, `@wip` par exemple) attachés à des features ou scénarios qui permettent d'exécuter un sous-ensemble filtré via la ligne de commande du test runner - débloquant des workflows comme n'exécuter que des smoke tests rapides à chaque commit tout en réservant une suite de régression complète et plus lente à un run nocturne ou pré-release, sans maintenir des fichiers de test séparés pour chaque sous-ensemble.",
  },
  {
    question:
      "At what level(s) of the test pyramid does BDD typically operate, and what's the risk of using it exclusively at every level?",
    answer:
      "BDD is most commonly applied at the acceptance/end-to-end level, closest to actual user-observable behavior, though the same Given/When/Then style can also wrap unit-level tests; using it exclusively even for fast, fine-grained unit tests risks the overhead of Gherkin's indirection (feature file plus step definitions) outweighing its collaboration benefit, since unit tests are mostly read by developers who don't need the natural-language layer.",
    questionFr:
      "À quel(s) niveau(x) de la pyramide de tests le BDD opère-t-il typiquement, et quel est le risque de l'utiliser exclusivement à chaque niveau ?",
    answerFr:
      "Le BDD s'applique le plus couramment au niveau acceptance/end-to-end, au plus proche du comportement réellement observable par l'utilisateur, même si le même style Given/When/Then peut aussi envelopper des tests au niveau unitaire ; l'utiliser exclusivement même pour des tests unitaires rapides et fins risque de faire peser le coût d'indirection de Gherkin (fichier feature plus step definitions) plus lourd que son bénéfice de collaboration, puisque les tests unitaires sont surtout lus par des développeurs qui n'ont pas besoin de la couche langage naturel.",
  },
  {
    question:
      'What\'s the common anti-pattern of treating BDD as "just a test automation framework", and what does it cost a team that falls into it?',
    answer:
      "Writing Gherkin scenarios only after the fact, purely to automate testing, skips the collaborative discovery conversation (Three Amigos, example mapping) that's meant to happen before coding - the team still gets automated tests, but loses the actual value BDD is meant to deliver: catching ambiguous or missing requirements early, and a specification the whole team, not just developers, can read and trust.",
    questionFr:
      'Quel est l\'anti-pattern courant qui traite le BDD comme "juste un framework d\'automatisation de test", et que coûte-t-il à une équipe qui y tombe ?',
    answerFr:
      "Écrire des scénarios Gherkin seulement après coup, uniquement pour automatiser le test, saute la conversation de découverte collaborative (Three Amigos, example mapping) censée avoir lieu avant de coder - l'équipe obtient quand même des tests automatisés, mais perd la valeur réelle que le BDD est censé apporter : détecter tôt des besoins ambigus ou manquants, et une spécification que toute l'équipe, pas seulement les développeurs, peut lire et à laquelle elle peut se fier.",
  },
  {
    question:
      'How does DDD\'s "ubiquitous language" connect to how BDD scenarios should be worded?',
    answer:
      "Both aim to eliminate translation loss between how the business talks about a domain and how it's represented in the codebase; BDD scenarios should use the exact same domain terms the ubiquitous language defines, so a scenario reads naturally to a domain expert and the same vocabulary carries unbroken from conversation, to specification, to code, to tests - a mismatch in any one layer signals a gap in the shared model.",
    questionFr:
      'Comment le "langage ubiquitaire" du DDD se relie-t-il à la façon dont les scénarios BDD devraient être formulés ?',
    answerFr:
      "Les deux visent à éliminer la perte de traduction entre la façon dont le métier parle d'un domaine et sa représentation dans le codebase ; les scénarios BDD devraient utiliser exactement les mêmes termes métier que définit le langage ubiquitaire, pour qu'un scénario se lise naturellement pour un expert du domaine et que le même vocabulaire se transmette sans rupture de la conversation, à la spécification, au code, aux tests - une incohérence à un de ces niveaux signale une faille dans le modèle partagé.",
  },
  {
    question:
      "What are the most common causes of flaky BDD/end-to-end scenarios, and what's the general fix pattern?",
    answer:
      "Timing issues (asserting before an async UI update or network call has actually finished), shared/mutable test state leaking between scenarios, and reliance on brittle selectors or hardcoded waits; the general fix is explicit waiting on conditions rather than fixed sleeps, fully isolating each scenario's test data, and asserting against stable, semantic selectors instead of implementation details like CSS class names.",
    questionFr:
      'Quelles sont les causes les plus courantes de scénarios BDD/end-to-end instables (flaky), et quel est le pattern de correction général ?',
    answerFr:
      "Des problèmes de timing (asserter avant qu'une mise à jour UI asynchrone ou un appel réseau ne soit réellement terminé), du state de test partagé/mutable qui fuit entre scénarios, et une dépendance à des sélecteurs fragiles ou des attentes codées en dur ; la correction générale est d'attendre explicitement des conditions plutôt que des sleeps fixes, d'isoler complètement les données de test de chaque scénario, et d'asserter contre des sélecteurs stables et sémantiques plutôt que des détails d'implémentation comme des noms de classe CSS.",
  },
  {
    question:
      'What does "living documentation" mean in a BDD context, and what keeps it from going stale the way traditional specs often do?',
    answer:
      'Feature files double as both the executable test suite and the specification of system behavior, so a scenario that no longer matches actual behavior fails the build - forcing it to be updated as part of the normal development workflow instead of silently drifting out of sync the way a separate, manually-maintained requirements document typically does once nobody is incentivized to update it.',
    questionFr:
      'Que signifie la "documentation vivante" dans un contexte BDD, et qu\'est-ce qui l\'empêche de devenir obsolète comme le font souvent les specs traditionnelles ?',
    answerFr:
      "Les fichiers feature servent à la fois de suite de tests exécutable et de spécification du comportement système, donc un scénario qui ne correspond plus au comportement réel fait échouer le build - forçant sa mise à jour dans le cadre du workflow de développement normal plutôt qu'une dérive silencieuse hors synchronisation, comme le fait typiquement un document d'exigences séparé et maintenu manuellement une fois que plus personne n'est incité à le mettre à jour.",
  },
];
