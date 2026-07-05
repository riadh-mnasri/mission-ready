export const questions = [
  {
    question: "What is the principle behind hexagonal architecture?",
    answer:
      "Isolate the business domain at the center, exposed through \"ports\" (interfaces), with \"adapters\" on each side (primary/driving for inputs like HTTP/CLI, secondary/driven for outputs like DB/external APIs).",
    questionFr: "Quel est le principe de l'architecture hexagonale ?",
    answerFr:
      "Isoler le domaine métier au centre, exposé via des \"ports\" (interfaces), avec des \"adapters\" de chaque côté (primary/driving pour les entrées comme HTTP/CLI, secondary/driven pour les sorties comme la DB/des APIs externes).",
  },
  {
    question: "Difference between a primary port and a secondary port?",
    answer:
      "A primary (driving) port is an interface the domain exposes to be driven from outside (e.g. a use case called by a controller). A secondary (driven) port is an interface the domain expects to be provided by the outside world (e.g. a repository, an HTTP client).",
    questionFr: "Différence entre un primary port et un secondary port ?",
    answerFr:
      "Un primary port (driving) est une interface que le domaine expose pour être piloté depuis l'extérieur (ex. un use case appelé par un controller). Un secondary port (driven) est une interface que le domaine attend de recevoir depuis l'extérieur (ex. un repository, un client HTTP).",
  },
  {
    question: "What is an adapter in this model?",
    answer:
      "A concrete technical implementation of a port: a REST controller is a primary adapter, a JPA implementation of a repository is a secondary adapter.",
    questionFr: "Qu'est-ce qu'un adapter dans ce modèle ?",
    answerFr:
      "Une implémentation technique concrète d'un port : un controller REST est un primary adapter, une implémentation JPA d'un repository est un secondary adapter.",
  },
  {
    question: "Why does hexagonal architecture make testing easier?",
    answer:
      "You can test the domain in isolation by substituting ports with test doubles (mocks/stubs), and plug in real adapters (in-memory, test database) only for integration tests.",
    questionFr: "En quoi l'architecture hexagonale facilite-t-elle les tests ?",
    answerFr:
      "On peut tester le domaine en isolation en substituant les ports par des test doubles (mocks/stubs), et brancher de vrais adapters (in-memory, base de test) uniquement pour les tests d'intégration.",
  },
  {
    question:
      "How does hexagonal architecture handle swapping a technology (e.g. PostgreSQL to MongoDB)?",
    answer:
      "Only the affected secondary adapter changes (a new implementation of the repository port); the domain and every other adapter stay untouched.",
    questionFr:
      "Comment l'architecture hexagonale gère-t-elle le changement d'une techno (ex. PostgreSQL vers MongoDB) ?",
    answerFr:
      "Seul le secondary adapter concerné change (une nouvelle implémentation du repository port) ; le domaine et tous les autres adapters restent inchangés.",
  },
  {
    question: "What's the main difference with Clean Architecture?",
    answer:
      "They share the same dependency-inversion principle; hexagonal thinks in ports/adapters (two sides: driving/driven) while Clean Architecture spells out more concentric layers (Entities, Use Cases, Interface Adapters, Frameworks).",
    questionFr: "Quelle est la principale différence avec la Clean Architecture ?",
    answerFr:
      "Elles partagent le même principe de dependency inversion ; l'hexagonale raisonne en ports/adapters (deux côtés : driving/driven) alors que la Clean Architecture détaille davantage de couches concentriques (Entities, Use Cases, Interface Adapters, Frameworks).",
  },
  {
    question: "How do you organize packages/modules for hexagonal architecture in Java/Kotlin?",
    answer:
      "Typically `domain` (no external dependencies), `application` (use cases, orchestration), `adapters/in` (controllers, consumers), and `adapters/out` (repositories, HTTP clients) - the domain never references `adapters`.",
    questionFr:
      "Comment organiser les packages/modules pour une architecture hexagonale en Java/Kotlin ?",
    answerFr:
      "Typiquement `domain` (aucune dépendance externe), `application` (use cases, orchestration), `adapters/in` (controllers, consumers), et `adapters/out` (repositories, clients HTTP) - le domaine ne référence jamais `adapters`.",
  },
  {
    question: "What's a concrete example of a \"driving adapter\"?",
    answer:
      "A REST controller, a Kafka message listener, or a CLI command that calls a primary port (use case) to trigger a business action.",
    questionFr: "Quel est un exemple concret de \"driving adapter\" ?",
    answerFr:
      "Un controller REST, un listener de messages Kafka, ou une commande CLI qui appelle un primary port (use case) pour déclencher une action métier.",
  },
  {
    question: "How do you keep the domain from depending on a framework like Spring?",
    answer:
      "Don't put Spring annotations (@Service, @Autowired) on domain classes; dependency injection and adapter wiring happen in the configuration/infrastructure layer.",
    questionFr: "Comment éviter que le domaine dépende d'un framework comme Spring ?",
    answerFr:
      "Ne pas mettre d'annotations Spring (@Service, @Autowired) sur les classes du domaine ; l'injection de dépendances et le wiring des adapters se font dans la couche configuration/infrastructure.",
  },
  {
    question: "What are common pitfalls of hexagonal architecture in practice?",
    answer:
      "Creating overly granular ports (interface explosion), duplicating DTOs with no real value, or letting technical details (e.g. JPA exceptions) leak through a port that's supposed to be technology-agnostic.",
    questionFr: "Quels sont les pièges classiques de l'architecture hexagonale en pratique ?",
    answerFr:
      "Créer des ports trop granulaires (explosion d'interfaces), dupliquer des DTOs sans valeur réelle, ou laisser fuiter des détails techniques (ex. des exceptions JPA) à travers un port censé être agnostique de la techno.",
  },
  {
    question: "How do you test a secondary adapter (e.g. a repository)?",
    answer:
      "A targeted integration test (e.g. Testcontainers with a real database) that verifies the implementation honors the port's contract, kept separate from the domain's unit tests.",
    questionFr: "Comment teste-t-on un secondary adapter (ex. un repository) ?",
    answerFr:
      "Un test d'intégration ciblé (ex. Testcontainers avec une vraie base de données) qui vérifie que l'implémentation respecte le contrat du port, séparé des unit tests du domaine.",
  },
];
