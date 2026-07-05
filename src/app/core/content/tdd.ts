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
];
