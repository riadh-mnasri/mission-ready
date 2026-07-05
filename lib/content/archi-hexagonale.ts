export const questions = [
  {
    question: "What is the principle behind hexagonal architecture?",
    answer:
      "Isolate the business domain at the center, exposed through \"ports\" (interfaces), with \"adapters\" on each side (primary/driving for inputs like HTTP/CLI, secondary/driven for outputs like DB/external APIs).",
  },
  {
    question: "Difference between a primary port and a secondary port?",
    answer:
      "A primary (driving) port is an interface the domain exposes to be driven from outside (e.g. a use case called by a controller). A secondary (driven) port is an interface the domain expects to be provided by the outside world (e.g. a repository, an HTTP client).",
  },
  {
    question: "What is an adapter in this model?",
    answer:
      "A concrete technical implementation of a port: a REST controller is a primary adapter, a JPA implementation of a repository is a secondary adapter.",
  },
  {
    question: "Why does hexagonal architecture make testing easier?",
    answer:
      "You can test the domain in isolation by substituting ports with test doubles (mocks/stubs), and plug in real adapters (in-memory, test database) only for integration tests.",
  },
  {
    question: "How does hexagonal architecture handle swapping a technology (e.g. PostgreSQL to MongoDB)?",
    answer:
      "Only the affected secondary adapter changes (a new implementation of the repository port); the domain and every other adapter stay untouched.",
  },
  {
    question: "What's the main difference with Clean Architecture?",
    answer:
      "They share the same dependency-inversion principle; hexagonal thinks in ports/adapters (two sides: driving/driven) while Clean Architecture spells out more concentric layers (Entities, Use Cases, Interface Adapters, Frameworks).",
  },
  {
    question: "How do you organize packages/modules for hexagonal architecture in Java/Kotlin?",
    answer:
      "Typically `domain` (no external dependencies), `application` (use cases, orchestration), `adapters/in` (controllers, consumers), and `adapters/out` (repositories, HTTP clients) - the domain never references `adapters`.",
  },
  {
    question: "What's a concrete example of a \"driving adapter\"?",
    answer:
      "A REST controller, a Kafka message listener, or a CLI command that calls a primary port (use case) to trigger a business action.",
  },
  {
    question: "How do you keep the domain from depending on a framework like Spring?",
    answer:
      "Don't put Spring annotations (@Service, @Autowired) on domain classes; dependency injection and adapter wiring happen in the configuration/infrastructure layer.",
  },
  {
    question: "What are common pitfalls of hexagonal architecture in practice?",
    answer:
      "Creating overly granular ports (interface explosion), duplicating DTOs with no real value, or letting technical details (e.g. JPA exceptions) leak through a port that's supposed to be technology-agnostic.",
  },
  {
    question: "How do you test a secondary adapter (e.g. a repository)?",
    answer:
      "A targeted integration test (e.g. Testcontainers with a real database) that verifies the implementation honors the port's contract, kept separate from the domain's unit tests.",
  },
];
