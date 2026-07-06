export const questions = [
  {
    question: "What is the TDD cycle?",
    answer:
      "Red (write a failing test) -> Green (write the minimal code to make it pass) -> Refactor (clean up the code without changing behavior, keeping tests green).",
    questionFr: "Quel est le cycle du TDD ?",
    answerFr:
      "Red (écrire un test qui échoue) -> Green (écrire le minimum de code pour le faire passer) -> Refactor (nettoyer le code sans changer le comportement, en gardant les tests green).",
  },
  {
    question: "Why write the test before the code?",
    answer:
      "It forces you to clarify the need/API before implementation, guarantees every line of code is justified by a test, and prevents writing untested or untestable code.",
    questionFr: "Pourquoi écrire le test avant le code ?",
    answerFr:
      "Ça force à clarifier le besoin/l'API avant l'implémentation, garantit que chaque ligne de code est justifiée par un test, et évite d'écrire du code non testé ou non testable.",
  },
  {
    question: "Difference between a unit test and an integration test in TDD?",
    answer:
      "A unit test isolates a single unit of code (often a class) with test doubles for its dependencies; an integration test verifies real collaboration between multiple components (e.g. a repository with a real database).",
    questionFr: "Différence entre un unit test et un integration test en TDD ?",
    answerFr:
      "Un unit test isole une seule unité de code (souvent une classe) avec des test doubles pour ses dépendances ; un integration test vérifie la vraie collaboration entre plusieurs composants (ex. un repository avec une vraie base de données).",
  },
  {
    question: "What is the F.I.R.S.T principle for unit tests?",
    answer:
      "Fast, Independent (no ordering dependency between tests), Repeatable (same result every run/environment), Self-validating (pass/fail with no manual inspection), Timely (written at the right time, before or alongside the code).",
    questionFr: "Qu'est-ce que le principe F.I.R.S.T pour les unit tests ?",
    answerFr:
      "Fast, Independent (pas de dépendance d'ordre entre les tests), Repeatable (même résultat à chaque run/environnement), Self-validating (pass/fail sans inspection manuelle), Timely (écrit au bon moment, avant ou en même temps que le code).",
  },
  {
    question: "What's the difference between a mock, a stub, and a fake?",
    answer:
      "A stub returns predefined answers without verifying interactions; a mock explicitly asserts that certain methods were called (behavior verification); a fake is a simplified but working implementation (e.g. an in-memory repository).",
    questionFr: "Quelle est la différence entre un mock, un stub et un fake ?",
    answerFr:
      "Un stub renvoie des réponses prédéfinies sans vérifier les interactions ; un mock vérifie explicitement que certaines méthodes ont été appelées (behavior verification) ; un fake est une implémentation simplifiée mais fonctionnelle (ex. un repository in-memory).",
  },
  {
    question: "What's the risk of tests too tightly coupled to implementation details?",
    answer:
      "They break on any refactor even when observable behavior is unchanged (brittle tests) - prefer testing behavior/outcome rather than internal details.",
    questionFr: "Quel est le risque de tests trop couplés aux détails d'implémentation ?",
    answerFr:
      "Ils cassent au moindre refactor même quand le comportement observable est inchangé (tests fragiles) - il vaut mieux tester le comportement/résultat plutôt que les détails internes.",
  },
  {
    question:
      "What's the difference between the London School (mockist) and the Detroit/Chicago School (classicist) of TDD?",
    answer:
      "The London School tests a unit in isolation by mocking all its collaborators, starting from interactions; the Chicago School tests real behavior with real collaborating objects, mocking only at external boundaries (DB, network).",
    questionFr:
      "Quelle est la différence entre la London School (mockist) et la Detroit/Chicago School (classicist) du TDD ?",
    answerFr:
      "La London School teste une unité en isolation en mockant tous ses collaborateurs, en partant des interactions ; la Chicago School teste le vrai comportement avec de vrais objets collaborateurs, en ne mockant qu'aux frontières externes (DB, réseau).",
  },
  {
    question: "How does TDD influence code design?",
    answer:
      "Writing the test first forces you to think about the API from the caller's perspective, pushes toward injectable/testable dependencies and low coupling - TDD is as much a design tool as a verification tool.",
    questionFr: "Comment le TDD influence-t-il le design du code ?",
    answerFr:
      "Écrire le test en premier force à penser l'API du point de vue de l'appelant, pousse vers des dépendances injectables/testables et un faible couplage - le TDD est autant un outil de design que de vérification.",
  },
  {
    question: "What is code coverage and what are its limits?",
    answer:
      "A percentage of lines/branches executed by tests; a high number doesn't guarantee the absence of bugs (tests with weak or missing assertions can \"cover\" code without verifying its behavior).",
    questionFr: "Qu'est-ce que la code coverage et quelles sont ses limites ?",
    answerFr:
      "Un pourcentage de lignes/branches exécutées par les tests ; un chiffre élevé ne garantit pas l'absence de bugs (des tests avec des assertions faibles ou absentes peuvent \"couvrir\" du code sans vérifier son comportement).",
  },
  {
    question: "How do you apply TDD to legacy code with no tests?",
    answer:
      "First write a characterization test that pins down the current behavior, then refactor with that safety net in place before adding classic TDD on top of new code.",
    questionFr: "Comment applique-t-on le TDD sur du legacy code sans tests ?",
    answerFr:
      "On écrit d'abord un characterization test qui fige le comportement actuel, puis on refactore avec ce filet de sécurité avant d'ajouter du TDD classique sur le nouveau code.",
  },
  {
    question: "What is the Arrange-Act-Assert (AAA) pattern?",
    answer:
      "A readable test structure: Arrange (set up data/dependencies), Act (execute the action under test), Assert (verify the outcome) - improves test readability and maintainability.",
    questionFr: "Qu'est-ce que le pattern Arrange-Act-Assert (AAA) ?",
    answerFr:
      "Une structure de test lisible : Arrange (préparer les données/dépendances), Act (exécuter l'action testée), Assert (vérifier le résultat) - améliore la lisibilité et la maintenabilité des tests.",
  },
  {
    question: "Why avoid conditional logic inside tests?",
    answer:
      "A test with ifs/loops becomes itself prone to bugs and loses readability; each case should ideally be a simple, explicit test rather than an overly generic parameterized test.",
    questionFr: "Pourquoi éviter la logique conditionnelle dans les tests ?",
    answerFr:
      "Un test avec des ifs/loops devient lui-même sujet à bugs et perd en lisibilité ; chaque cas devrait idéalement être un test simple et explicite plutôt qu'un test paramétré trop générique.",
  },
  {
    question: "What is outside-in TDD (also called the London/mockist double-loop)?",
    answer:
      "Start from a failing acceptance test expressing the feature from the user's point of view, then work inward writing unit tests for each collaborator you discover you need, mocking them until you implement them one by one. It keeps design driven by actual usage rather than by components built bottom-up.",
    questionFr: "Qu'est-ce que le TDD outside-in (aussi appelé double-loop London/mockist) ?",
    answerFr:
      "Partir d'un acceptance test qui échoue et qui exprime la fonctionnalité du point de vue de l'utilisateur, puis avancer vers l'intérieur en écrivant des tests unitaires pour chaque collaborateur découvert, en les mockant jusqu'à les implémenter un par un. Ça garde un design piloté par l'usage réel plutôt que par des composants construits de bas en haut.",
  },
  {
    question: "What is a \"dummy\" as a type of test double, and how does it differ from a stub?",
    answer:
      "A dummy is passed around only to satisfy a method signature and is never actually used by the code under test (e.g. a null-ish placeholder argument); a stub, by contrast, is used and returns a canned value the test relies on.",
    questionFr: "Qu'est-ce qu'un \"dummy\" comme type de test double, et en quoi diffère-t-il d'un stub ?",
    answerFr:
      "Un dummy est passé uniquement pour satisfaire une signature de méthode et n'est jamais réellement utilisé par le code testé (ex. un argument placeholder quasi null) ; un stub, à l'inverse, est utilisé et renvoie une valeur préprogrammée dont le test dépend.",
  },
  {
    question: "What is mutation testing and what does it tell you that coverage doesn't?",
    answer:
      "A tool systematically introduces small bugs (\"mutants\") into the code, e.g. flipping a `>` to `>=`, and reruns the test suite; if tests still pass, that mutant \"survived\", revealing a gap in assertion quality that plain line/branch coverage would never expose.",
    questionFr: "Qu'est-ce que le mutation testing et que révèle-t-il que la coverage ne révèle pas ?",
    answerFr:
      "Un outil introduit systématiquement de petits bugs (\"mutants\") dans le code, ex. remplacer un `>` par un `>=`, puis relance la suite de tests ; si les tests passent quand même, ce mutant a \"survécu\", révélant un trou dans la qualité des assertions que la simple coverage de lignes/branches ne montrerait jamais.",
  },
  {
    question: "What typically causes a flaky test, and how do you fix it?",
    answer:
      "Common causes: shared mutable state between tests, reliance on real time/dates, unmanaged async operations, or test order dependency. Fixes: isolate state per test, inject a controllable clock, explicitly await async work instead of sleeping, and make each test independent of execution order.",
    questionFr: "Qu'est-ce qui cause typiquement un test flaky, et comment le corriger ?",
    answerFr:
      "Causes courantes : état mutable partagé entre tests, dépendance au temps/dates réels, opérations async non maîtrisées, ou dépendance à l'ordre d'exécution des tests. Corrections : isoler l'état par test, injecter une horloge contrôlable, attendre explicitement le travail async plutôt que de faire un sleep, et rendre chaque test indépendant de l'ordre d'exécution.",
  },
  {
    question: "What is the \"test pyramid\" and what's the \"ice cream cone\" anti-pattern?",
    answer:
      "The test pyramid recommends many fast unit tests, fewer integration tests, and very few slow end-to-end tests. The ice cream cone anti-pattern inverts this, with a thin layer of unit tests and a heavy reliance on slow, brittle UI/E2E tests, making the suite slow and painful to maintain.",
    questionFr: "Qu'est-ce que la \"test pyramid\" et l'anti-pattern \"ice cream cone\" ?",
    answerFr:
      "La test pyramid recommande beaucoup de unit tests rapides, moins de tests d'intégration, et très peu de tests end-to-end lents. L'anti-pattern ice cream cone inverse cela, avec une fine couche de unit tests et une forte dépendance à des tests UI/E2E lents et fragiles, rendant la suite lente et pénible à maintenir.",
  },
  {
    question: "What is contract testing and when do you need it?",
    answer:
      "A way to verify that a consumer and a provider of an API agree on the shape of their interaction (e.g. via Pact), without spinning up the real provider in every test run; essential once you have multiple independently deployed services that evolve their APIs over time.",
    questionFr: "Qu'est-ce que le contract testing et quand en a-t-on besoin ?",
    answerFr:
      "Une façon de vérifier qu'un consumer et un provider d'une API sont d'accord sur la forme de leur interaction (ex. via Pact), sans faire tourner le vrai provider à chaque run de test ; essentiel dès qu'on a plusieurs services déployés indépendamment dont les APIs évoluent dans le temps.",
  },
  {
    question: "What is a Spy as a type of test double, and how does it differ from a Mock?",
    answer:
      "A Spy wraps a real (or mostly real) object and records how it was called, letting you make assertions about interactions after the fact; a Mock is pre-programmed with expectations before the call happens and typically fails the test immediately if an unexpected interaction occurs, making Spies slightly more permissive and Mocks stricter.",
    questionFr: "Qu'est-ce qu'un Spy comme type de test double, et en quoi diffère-t-il d'un Mock ?",
    answerFr:
      "Un Spy enveloppe un objet réel (ou en grande partie réel) et enregistre comment il a été appelé, permettant de faire des assertions sur les interactions après coup ; un Mock est pré-programmé avec des attentes avant que l'appel n'ait lieu et fait typiquement échouer le test immédiatement en cas d'interaction inattendue, rendant les Spies légèrement plus permissifs et les Mocks plus stricts.",
  },
  {
    question: "What's the difference between the classic (Detroit) and mockist (London) schools of TDD?",
    answer:
      "The classic/Detroit school favors real collaborators and state-based assertions, mocking only true external boundaries (network, filesystem); the mockist/London school mocks every collaborator of the unit under test and verifies interactions between them, driving design outside-in from the top of the call chain down.",
    questionFr: "Quelle est la différence entre l'école classique (Detroit) et mockiste (London) du TDD ?",
    answerFr:
      "L'école classique/Detroit privilégie de vrais collaborateurs et des assertions basées sur l'état, en ne mockant que les vraies frontières externes (réseau, système de fichiers) ; l'école mockiste/London mocke chaque collaborateur de l'unité testée et vérifie les interactions entre eux, pilotant la conception outside-in depuis le haut de la chaîne d'appels.",
  },
  {
    question: "How do you TDD a piece of logic that needs to make an external HTTP call?",
    answer:
      "Define a port/interface for the external dependency first, write the test against a fake or mock implementation of that port so the test stays fast and deterministic, then implement the real HTTP-calling adapter separately (often verified by a smaller number of integration or contract tests instead of unit tests).",
    questionFr: "Comment faire du TDD sur une logique qui doit effectuer un appel HTTP externe ?",
    answerFr:
      "Définir d'abord un port/interface pour la dépendance externe, écrire le test contre une implémentation fake ou mock de ce port pour que le test reste rapide et déterministe, puis implémenter séparément le vrai adapter qui fait l'appel HTTP (souvent vérifié par un plus petit nombre de tests d'intégration ou de contract testing plutôt que des tests unitaires).",
  },
  {
    question: "What is \"triangulation\" in TDD?",
    answer:
      "Writing a second (and sometimes third) test case with different input/output pairs before generalizing the implementation, so the code is forced to become genuinely correct rather than hard-coded to pass the first example (e.g. `return 4` would pass a single `add(2, 2)` test but not a second `add(3, 5)` one).",
    questionFr: "Qu'est-ce que la \"triangulation\" en TDD ?",
    answerFr:
      "Écrire un deuxième (et parfois un troisième) cas de test avec des paires entrée/sortie différentes avant de généraliser l'implémentation, pour forcer le code à devenir réellement correct plutôt que codé en dur pour passer le premier exemple (ex. `return 4` passerait un seul test `add(2, 2)` mais pas un second `add(3, 5)`).",
  },
  {
    question: "What does the Given-When-Then (BDD-style) format add on top of the plain Arrange-Act-Assert pattern?",
    answer:
      "Structurally it's the same three-part shape (setup, action, verification), but Given-When-Then is phrased in domain/business language meant to be readable by non-developers and often lives in a specification tool (Cucumber, SpecFlow), while AAA is aimed purely at the developer reading the test code.",
    questionFr: "Qu'apporte le format Given-When-Then (style BDD) par rapport au simple pattern Arrange-Act-Assert ?",
    answerFr:
      "Structurellement c'est la même forme en trois parties (préparation, action, vérification), mais Given-When-Then est formulé en langage métier/domaine pensé pour être lisible par des non-développeurs et vit souvent dans un outil de spécification (Cucumber, SpecFlow), alors qu'AAA vise purement le développeur qui lit le code du test.",
  },
];
