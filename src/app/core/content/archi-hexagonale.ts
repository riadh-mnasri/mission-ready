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
  {
    question: "How does hexagonal architecture differ from Onion Architecture?",
    answer:
      "Both invert dependencies toward the domain; Onion Architecture is more explicit about multiple concentric layers (domain model, domain services, application services, outer infrastructure), while hexagonal keeps a simpler two-sided (driving/driven) mental model. In practice they lead to very similar codebases.",
    questionFr: "En quoi l'architecture hexagonale diffère-t-elle de l'Onion Architecture ?",
    answerFr:
      "Les deux inversent les dépendances vers le domaine ; l'Onion Architecture est plus explicite sur plusieurs couches concentriques (domain model, domain services, application services, infrastructure externe), tandis que l'hexagonale garde un modèle mental à deux côtés (driving/driven) plus simple. En pratique, elles mènent à des codebases très similaires.",
  },
  {
    question: "Can a single port have multiple adapters at the same time?",
    answer:
      "Yes, and it's a common reason to use one: the same primary port (use case) can be driven by both a REST controller and a GraphQL resolver, and the same secondary port (repository) could have a production JPA adapter and an in-memory adapter used only in tests.",
    questionFr: "Un même port peut-il avoir plusieurs adapters en même temps ?",
    answerFr:
      "Oui, et c'est une raison courante de l'utiliser : un même primary port (use case) peut être piloté à la fois par un controller REST et un resolver GraphQL, et un même secondary port (repository) peut avoir un adapter JPA en production et un adapter in-memory utilisé seulement en tests.",
  },
  {
    question: "Where do cross-cutting concerns like logging or authorization fit in a hexagonal design?",
    answer:
      "They're usually implemented as decorators wrapping a port's implementation (e.g. a logging decorator around a repository, an authorization check around a use case), keeping the concern outside both the domain logic and the concrete adapter it wraps.",
    questionFr: "Où se situent les cross-cutting concerns comme le logging ou l'autorisation dans une conception hexagonale ?",
    answerFr:
      "Ils sont généralement implémentés comme des decorators qui enveloppent l'implémentation d'un port (ex. un decorator de logging autour d'un repository, une vérification d'autorisation autour d'un use case), gardant la préoccupation en dehors à la fois de la logique du domaine et de l'adapter concret qu'il enveloppe.",
  },
  {
    question: "What is the \"composition root\" in a hexagonal application?",
    answer:
      "The single place (typically near the application's entry point) where concrete adapters get wired to the ports they implement and injected into use cases; it's the only part of the codebase allowed to know about every concrete implementation at once.",
    questionFr: "Qu'est-ce que le \"composition root\" dans une application hexagonale ?",
    answerFr:
      "L'endroit unique (typiquement près du point d'entrée de l'application) où les adapters concrets sont câblés aux ports qu'ils implémentent et injectés dans les use cases ; c'est la seule partie du codebase autorisée à connaître toutes les implémentations concrètes à la fois.",
  },
  {
    question: "Where does the term \"Ports and Adapters\" come from, and is it the same thing as hexagonal architecture?",
    answer:
      "Alistair Cockburn coined \"Ports and Adapters\" in the early 2000s; \"hexagonal architecture\" is the same pattern, just named for the hexagon shape often used to diagram the domain with multiple ports/adapters around it. The hexagon itself has no special meaning beyond giving the domain room to show several sides.",
    questionFr: "D'où vient le terme \"Ports and Adapters\", et est-ce la même chose que l'architecture hexagonale ?",
    answerFr:
      "Alistair Cockburn a inventé \"Ports and Adapters\" au début des années 2000 ; \"l'architecture hexagonale\" est le même pattern, simplement nommé d'après la forme d'hexagone souvent utilisée pour diagrammer le domaine avec plusieurs ports/adapters autour. L'hexagone lui-même n'a pas de signification particulière au-delà de donner de la place au domaine pour montrer plusieurs faces.",
  },
  {
    question: "In tests, what's the difference between a mock adapter and a stub adapter for the same port?",
    answer:
      "A stub adapter returns canned data to let the test run (e.g. a `FakeUserRepository` seeded with fixtures); a mock adapter additionally verifies that specific interactions happened (e.g. asserting `save()` was called exactly once with a given argument) - both implement the same port interface, but a mock adds behavioral verification on top of the stub's state-based one.",
    questionFr: "Dans les tests, quelle différence entre un adapter mock et un adapter stub pour le même port ?",
    answerFr:
      "Un adapter stub retourne des données préparées pour faire tourner le test (ex. un `FakeUserRepository` peuplé de fixtures) ; un adapter mock vérifie en plus que des interactions précises ont eu lieu (ex. s'assurer que `save()` a été appelé exactement une fois avec un argument donné) - les deux implémentent la même interface de port, mais le mock ajoute une vérification comportementale par-dessus la vérification par état du stub.",
  },
  {
    question: "How do you handle several driving adapters (REST, CLI, a scheduled job) triggering the same use case?",
    answer:
      "Each driving adapter translates its own trigger (an HTTP request, a CLI argument, a cron tick) into the same input port's call signature and invokes it; the use case itself is written once and stays unaware of which adapter called it, so adding a new entry point never touches application or domain code.",
    questionFr: "Comment gérer plusieurs adapters primaires (REST, CLI, un job planifié) qui déclenchent le même use case ?",
    answerFr:
      "Chaque adapter primaire traduit son propre déclencheur (une requête HTTP, un argument CLI, un tick cron) vers la même signature d'appel du port d'entrée et l'invoque ; le use case lui-même est écrit une seule fois et reste indifférent à l'adapter qui l'a appelé, donc ajouter un nouveau point d'entrée ne touche jamais le code applicatif ou domaine.",
  },
  {
    question: "What role does an Application Service typically play compared to the use case interactor itself?",
    answer:
      "In many hexagonal codebases the \"Application Service\" and the \"use case\" are the same class; when they're split, the Application Service adds cross-cutting orchestration (transactions, authorization checks, publishing domain events after success) around a thinner interactor that holds only the core business steps.",
    questionFr: "Quel rôle joue typiquement un Application Service par rapport à l'interactor du use case lui-même ?",
    answerFr:
      "Dans beaucoup de codebases hexagonales, l'\"Application Service\" et le \"use case\" sont la même classe ; quand ils sont séparés, l'Application Service ajoute de l'orchestration transverse (transactions, vérifications d'autorisation, publication d'événements de domaine après succès) autour d'un interactor plus fin qui ne porte que les étapes métier principales.",
  },
  {
    question: "A new requirement means switching from Postgres to a document store for one aggregate. What changes?",
    answer:
      "Only a new secondary adapter implementing the existing repository port, plus the wiring in the composition root; the port's interface, the domain model, and every use case that depends on it stay untouched, which is the concrete payoff hexagonal architecture is designed to deliver.",
    questionFr: "Une nouvelle exigence impose de passer de Postgres à un document store pour un aggregate. Qu'est-ce qui change ?",
    answerFr:
      "Seulement un nouvel adapter secondaire implémentant le port de repository existant, plus le câblage dans le composition root ; l'interface du port, le modèle de domaine, et chaque use case qui en dépend restent intouchés, ce qui est le bénéfice concret que l'architecture hexagonale est conçue pour offrir.",
  },
  {
    question: "What's a common mistake when defining a port interface?",
    answer:
      "Letting persistence-specific or transport-specific types leak into the port's signature (e.g. a method returning a JPA entity, or taking an HTTP request object as a parameter), which quietly re-couples the domain to the very infrastructure the port was meant to isolate it from.",
    questionFr: "Quelle est une erreur courante en définissant l'interface d'un port ?",
    answerFr:
      "Laisser des types spécifiques à la persistance ou au transport s'infiltrer dans la signature du port (ex. une méthode qui retourne une entité JPA, ou qui prend un objet requête HTTP en paramètre), ce qui recouple silencieusement le domaine à l'infrastructure même dont le port était censé l'isoler.",
  },
];
