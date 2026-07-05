export const questions = [
  {
    question: "What is a Bounded Context?",
    answer:
      "An explicit boundary (often aligned with a business subdomain) inside which a model and vocabulary (ubiquitous language) have a single, coherent meaning — the same term can mean something different in another context.",
  },
  {
    question: "Difference between an Entity and a Value Object?",
    answer:
      "An Entity has an identity that persists over time (e.g. a Customer, identified by an ID even as its attributes change). A Value Object is defined solely by its attributes, immutable, and interchangeable (e.g. an Address, a Money amount).",
  },
  {
    question: "What is an Aggregate and its root (Aggregate Root)?",
    answer:
      "A cluster of entities/value objects treated as a single transactional consistency unit; the root is the only entry point accessible from outside, guarding the invariants of the whole aggregate.",
  },
  {
    question: "Why keep aggregates small?",
    answer:
      "An oversized aggregate transactionally locks more data than necessary and hurts concurrency/performance; the rule of thumb is \"one aggregate, one transaction, as small as possible while still guaranteeing invariants\".",
  },
  {
    question: "What is the Ubiquitous Language?",
    answer:
      "A shared, rigorous vocabulary between developers and domain experts, used both in conversation and in code (class/method names), eliminating ambiguous translation between business and technical terms.",
  },
  {
    question: "Difference between a Domain Event and a plain technical event?",
    answer:
      "A Domain Event represents a meaningful, immutable business fact that happened (e.g. \"OrderConfirmed\"), named in the past tense, used to decouple business reactions — unlike a low-level plumbing event like \"RowUpdated\".",
  },
  {
    question: "What is a Repository in DDD?",
    answer:
      "An abstraction that gives the illusion of an in-memory collection of aggregates, hiding actual persistence; it's not a generic CRUD DAO but a port shaped around the domain's real needs.",
  },
  {
    question: "What is a Domain Service?",
    answer:
      "A business operation that doesn't naturally belong to any single Entity or Value Object (often because it spans multiple aggregates), expressed as a stateless service carrying explicit business logic.",
  },
  {
    question: "In Context Mapping, what does an \"Anti-Corruption Layer\" relationship represent?",
    answer:
      "A translation layer that shields one Bounded Context's model from another context's concepts (often legacy or external), converting models at the boundary to prevent contamination of the language/model.",
  },
  {
    question: "Difference between Strategic DDD and Tactical DDD?",
    answer:
      "Strategic DDD deals with splitting the system into Bounded Contexts and their relationships (Context Map, Core/Supporting/Generic subdomains); Tactical DDD provides implementation patterns (Entity, Aggregate, Repository, Domain Event...).",
  },
  {
    question: "What is a Core Domain?",
    answer:
      "The subdomain that constitutes the company's competitive advantage, where modeling effort and talent investment should be maximal — unlike \"Supporting\" or \"Generic\" subdomains that can be simplified or even bought as SaaS.",
  },
  {
    question: "How does DDD relate to hexagonal/Clean Architecture?",
    answer:
      "DDD structures the domain's content (aggregates, ubiquitous language, events); hexagonal/Clean Architecture provides the technical frame that isolates that domain from infrastructure details — the two are complementary, not competing.",
  },
  {
    question: "What is Event Storming?",
    answer:
      "A collaborative workshop (developers + domain experts) that surfaces the domain model by placing Domain Events on a wall in chronological order, then adding the commands, actors, and aggregates that produce them.",
  },
];
