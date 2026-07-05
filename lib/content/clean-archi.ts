export const questions = [
  {
    question: "What is the central principle of Clean Architecture?",
    answer:
      "The Dependency Rule: source code dependencies only point inward, toward higher-level policies. The business domain must not depend on any technical detail (database, framework, UI).",
    questionFr: "Quel est le principe central de la Clean Architecture ?",
    answerFr:
      "La Dependency Rule : les dépendances du code source ne pointent que vers l'intérieur, vers les policies de plus haut niveau. Le domaine métier ne doit dépendre d'aucun détail technique (base de données, framework, UI).",
  },
  {
    question: "What are the typical layers, from innermost to outermost?",
    answer:
      "Entities (enterprise-wide business rules) -> Use Cases (application-specific business rules) -> Interface Adapters (controllers, presenters, gateways) -> Frameworks & Drivers (DB, UI, web, devices).",
    questionFr: "Quelles sont les couches typiques, de la plus interne à la plus externe ?",
    answerFr:
      "Entities (règles métier globales) -> Use Cases (règles métier applicatives) -> Interface Adapters (controllers, presenters, gateways) -> Frameworks & Drivers (DB, UI, web, devices).",
  },
  {
    question: "How does the domain stay independent from the database?",
    answer:
      "The domain defines repository interfaces (ports); concrete implementations (SQL, NoSQL...) live in the outer layer and implement those interfaces - this is dependency inversion.",
    questionFr: "Comment le domaine reste-t-il indépendant de la base de données ?",
    answerFr:
      "Le domaine définit des interfaces de repository (ports) ; les implémentations concrètes (SQL, NoSQL...) vivent dans la couche externe et implémentent ces interfaces - c'est de la dependency inversion.",
  },
  {
    question: "What is a Use Case in this model?",
    answer:
      "A class or function that orchestrates application-specific business rules for a given user scenario, manipulating Entities through ports, independent of how the request arrives (HTTP, CLI, event).",
    questionFr: "Qu'est-ce qu'un Use Case dans ce modèle ?",
    answerFr:
      "Une classe ou fonction qui orchestre les règles métier applicatives pour un scénario utilisateur donné, en manipulant des Entities via des ports, indépendamment de la façon dont la requête arrive (HTTP, CLI, event).",
  },
  {
    question: "Why avoid Entities depending on framework annotations (e.g. JPA)?",
    answer:
      "It would couple the core business logic to a replaceable technical detail; changing ORM or framework shouldn't require touching business rules.",
    questionFr: "Pourquoi éviter que les Entities dépendent d'annotations de framework (ex. JPA) ?",
    answerFr:
      "Ça coupleraît la logique métier centrale à un détail technique remplaçable ; changer d'ORM ou de framework ne devrait pas nécessiter de toucher aux règles métier.",
  },
  {
    question: "How do you test a Clean Architecture?",
    answer:
      "Use Cases and Entities are unit-tested without a database or framework, mocking the ports (repositories) - tests are fast and stable since business truth doesn't depend on infrastructure.",
    questionFr: "Comment teste-t-on une Clean Architecture ?",
    answerFr:
      "Les Use Cases et Entities sont testés en unit test sans base de données ni framework, en mockant les ports (repositories) - les tests sont rapides et stables puisque la vérité métier ne dépend pas de l'infrastructure.",
  },
  {
    question:
      "What's the difference between Clean Architecture and a classic layered (N-tier) architecture?",
    answer:
      "Classic N-tier often makes the business layer depend downward on the data layer; Clean Architecture inverts that dependency through interfaces so the domain never knows about infrastructure.",
    questionFr:
      "Quelle est la différence entre la Clean Architecture et une architecture en couches classique (N-tier) ?",
    answerFr:
      "Le N-tier classique fait souvent dépendre la couche métier de la couche data ; la Clean Architecture inverse cette dépendance via des interfaces pour que le domaine ne connaisse jamais l'infrastructure.",
  },
  {
    question: "What is a \"Boundary\" in Clean Architecture?",
    answer:
      "The crossing point between two layers, materialized by an interface; data crossing it is a simple structure (DTO), never a domain object or a framework object.",
    questionFr: "Qu'est-ce qu'un \"Boundary\" en Clean Architecture ?",
    answerFr:
      "Le point de passage entre deux couches, matérialisé par une interface ; les données qui le traversent sont une simple structure (DTO), jamais un objet du domaine ou un objet de framework.",
  },
  {
    question: "How do you handle DTOs between layers?",
    answer:
      "Each layer has its own data models; mappers convert between them (e.g. Entity <-> API DTO) so domain objects never leak outward and external constraints (HTTP validation) never pollute the domain.",
    questionFr: "Comment gère-t-on les DTOs entre les couches ?",
    answerFr:
      "Chaque couche a ses propres modèles de données ; des mappers convertissent entre eux (ex. Entity <-> API DTO) pour que les objets du domaine ne fuient jamais vers l'extérieur et que les contraintes externes (validation HTTP) ne polluent jamais le domaine.",
  },
  {
    question: "What's the main risk of misapplying Clean Architecture?",
    answer:
      "Over-engineering: too many layers/mappers for a simple need, slowing development without real benefit - reserve it for domains with genuine business complexity or a long expected lifespan.",
    questionFr: "Quel est le principal risque d'une mauvaise application de la Clean Architecture ?",
    answerFr:
      "L'over-engineering : trop de couches/mappers pour un besoin simple, qui ralentit le développement sans bénéfice réel - à réserver aux domaines avec une vraie complexité métier ou une longue durée de vie attendue.",
  },
  {
    question: "How does Clean Architecture make it easier to swap the web framework?",
    answer:
      "HTTP controllers/adapters are a thin outer layer; switching from Express to Fastify (for example) touches only that adapter, never the Use Cases or Entities.",
    questionFr: "En quoi la Clean Architecture facilite-t-elle le changement de framework web ?",
    answerFr:
      "Les controllers/adapters HTTP sont une couche externe fine ; passer d'Express à Fastify (par exemple) ne touche que cet adapter, jamais les Use Cases ou les Entities.",
  },
  {
    question: "How does Clean Architecture relate to the SOLID principles?",
    answer:
      "Clean Architecture applies the D in SOLID (Dependency Inversion) at the architectural scale, and also leans on SRP to clearly separate each layer by responsibility.",
    questionFr: "Quel est le lien entre la Clean Architecture et les principes SOLID ?",
    answerFr:
      "La Clean Architecture applique le D de SOLID (Dependency Inversion) à l'échelle de l'architecture, et s'appuie aussi sur le SRP pour séparer clairement chaque couche par responsabilité.",
  },
];
