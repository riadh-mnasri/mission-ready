export const questions = [
  {
    question: "What is the central principle of Clean Architecture?",
    answer:
      "The Dependency Rule: source code dependencies only point inward, toward higher-level policies. The business domain must not depend on any technical detail (database, framework, UI).",
  },
  {
    question: "What are the typical layers, from innermost to outermost?",
    answer:
      "Entities (enterprise-wide business rules) → Use Cases (application-specific business rules) → Interface Adapters (controllers, presenters, gateways) → Frameworks & Drivers (DB, UI, web, devices).",
  },
  {
    question: "How does the domain stay independent from the database?",
    answer:
      "The domain defines repository interfaces (ports); concrete implementations (SQL, NoSQL...) live in the outer layer and implement those interfaces — this is dependency inversion.",
  },
  {
    question: "What is a Use Case in this model?",
    answer:
      "A class or function that orchestrates application-specific business rules for a given user scenario, manipulating Entities through ports, independent of how the request arrives (HTTP, CLI, event).",
  },
  {
    question: "Why avoid Entities depending on framework annotations (e.g. JPA)?",
    answer:
      "It would couple the core business logic to a replaceable technical detail; changing ORM or framework shouldn't require touching business rules.",
  },
  {
    question: "How do you test a Clean Architecture?",
    answer:
      "Use Cases and Entities are unit-tested without a database or framework, mocking the ports (repositories) — tests are fast and stable since business truth doesn't depend on infrastructure.",
  },
  {
    question: "What's the difference between Clean Architecture and a classic layered (N-tier) architecture?",
    answer:
      "Classic N-tier often makes the business layer depend downward on the data layer; Clean Architecture inverts that dependency through interfaces so the domain never knows about infrastructure.",
  },
  {
    question: "What is a \"Boundary\" in Clean Architecture?",
    answer:
      "The crossing point between two layers, materialized by an interface; data crossing it is a simple structure (DTO), never a domain object or a framework object.",
  },
  {
    question: "How do you handle DTOs between layers?",
    answer:
      "Each layer has its own data models; mappers convert between them (e.g. Entity ↔ API DTO) so domain objects never leak outward and external constraints (HTTP validation) never pollute the domain.",
  },
  {
    question: "What's the main risk of misapplying Clean Architecture?",
    answer:
      "Over-engineering: too many layers/mappers for a simple need, slowing development without real benefit — reserve it for domains with genuine business complexity or a long expected lifespan.",
  },
  {
    question: "How does Clean Architecture make it easier to swap the web framework?",
    answer:
      "HTTP controllers/adapters are a thin outer layer; switching from Express to Fastify (for example) touches only that adapter, never the Use Cases or Entities.",
  },
  {
    question: "How does Clean Architecture relate to the SOLID principles?",
    answer:
      "Clean Architecture applies the D in SOLID (Dependency Inversion) at the architectural scale, and also leans on SRP to clearly separate each layer by responsibility.",
  },
];
