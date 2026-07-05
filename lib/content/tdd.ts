export const questions = [
  {
    question: "What is the TDD cycle?",
    answer:
      "Red (write a failing test) → Green (write the minimal code to make it pass) → Refactor (clean up the code without changing behavior, keeping tests green).",
  },
  {
    question: "Why write the test before the code?",
    answer:
      "It forces you to clarify the need/API before implementation, guarantees every line of code is justified by a test, and prevents writing untested or untestable code.",
  },
  {
    question: "Difference between a unit test and an integration test in TDD?",
    answer:
      "A unit test isolates a single unit of code (often a class) with test doubles for its dependencies; an integration test verifies real collaboration between multiple components (e.g. a repository with a real database).",
  },
  {
    question: "What is the F.I.R.S.T principle for unit tests?",
    answer:
      "Fast, Independent (no ordering dependency between tests), Repeatable (same result every run/environment), Self-validating (pass/fail with no manual inspection), Timely (written at the right time, before or alongside the code).",
  },
  {
    question: "What's the difference between a mock, a stub, and a fake?",
    answer:
      "A stub returns predefined answers without verifying interactions; a mock explicitly asserts that certain methods were called (behavior verification); a fake is a simplified but working implementation (e.g. an in-memory repository).",
  },
  {
    question: "What's the risk of tests too tightly coupled to implementation details?",
    answer:
      "They break on any refactor even when observable behavior is unchanged (brittle tests) — prefer testing behavior/outcome rather than internal details.",
  },
  {
    question: "What's the difference between the London School (mockist) and the Detroit/Chicago School (classicist) of TDD?",
    answer:
      "The London School tests a unit in isolation by mocking all its collaborators, starting from interactions; the Chicago School tests real behavior with real collaborating objects, mocking only at external boundaries (DB, network).",
  },
  {
    question: "How does TDD influence code design?",
    answer:
      "Writing the test first forces you to think about the API from the caller's perspective, pushes toward injectable/testable dependencies and low coupling — TDD is as much a design tool as a verification tool.",
  },
  {
    question: "What is code coverage and what are its limits?",
    answer:
      "A percentage of lines/branches executed by tests; a high number doesn't guarantee the absence of bugs (tests with weak or missing assertions can \"cover\" code without verifying its behavior).",
  },
  {
    question: "How do you apply TDD to legacy code with no tests?",
    answer:
      "First write a characterization test that pins down the current behavior, then refactor with that safety net in place before adding classic TDD on top of new code.",
  },
  {
    question: "What is the Arrange-Act-Assert (AAA) pattern?",
    answer:
      "A readable test structure: Arrange (set up data/dependencies), Act (execute the action under test), Assert (verify the outcome) — improves test readability and maintainability.",
  },
  {
    question: "Why avoid conditional logic inside tests?",
    answer:
      "A test with ifs/loops becomes itself prone to bugs and loses readability; each case should ideally be a simple, explicit test rather than an overly generic parameterized test.",
  },
];
