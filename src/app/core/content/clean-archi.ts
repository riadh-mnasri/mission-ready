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
  {
    question: "What is a Presenter and how does it differ from a ViewModel?",
    answer:
      "A Presenter formats a Use Case's output into a display-ready structure (the ViewModel), staying on the inner side of the UI boundary; the ViewModel itself is a dumb data holder consumed directly by the UI framework, with no business logic.",
    questionFr: "Qu'est-ce qu'un Presenter et en quoi diffère-t-il d'un ViewModel ?",
    answerFr:
      "Un Presenter formate la sortie d'un Use Case en une structure prête à afficher (le ViewModel), en restant du côté interne de la frontière UI ; le ViewModel lui-même est une simple structure de données consommée directement par le framework UI, sans logique métier.",
  },
  {
    question: "What is \"Screaming Architecture\"?",
    answer:
      "Uncle Bob's idea that a codebase's top-level structure should reveal the business domain at a glance (folders named after use cases/features) rather than the framework used, so opening the repo \"screams\" what the system does, not what it's built with.",
    questionFr: "Qu'est-ce que la \"Screaming Architecture\" ?",
    answerFr:
      "L'idée d'Uncle Bob selon laquelle la structure de haut niveau d'un codebase devrait révéler le domaine métier au premier coup d'œil (des dossiers nommés d'après les use cases/features) plutôt que le framework utilisé, pour qu'ouvrir le repo \"crie\" ce que fait le système, pas ce avec quoi il est construit.",
  },
  {
    question: "Where does input validation belong in Clean Architecture?",
    answer:
      "Structural/format validation (required fields, types) belongs at the boundary (controller/adapter), close to the input; business rule validation (e.g. an order can't ship without stock) belongs inside the Use Case or Entity, since it's a domain invariant, not a data-shape check.",
    questionFr: "Où se situe la validation des entrées dans la Clean Architecture ?",
    answerFr:
      "La validation structurelle/de format (champs requis, types) se situe à la frontière (controller/adapter), près de l'entrée ; la validation des règles métier (ex. une commande ne peut pas être expédiée sans stock) se situe dans le Use Case ou l'Entity, car c'est un invariant du domaine, pas une simple vérification de forme.",
  },
  {
    question: "How do transaction boundaries fit into Clean Architecture?",
    answer:
      "A transaction typically spans exactly one Use Case execution; the Use Case orchestrates repository calls but delegates the actual commit/rollback to an infrastructure concern (e.g. a Unit of Work implementation injected via a port), keeping the domain unaware of the underlying transaction mechanism.",
    questionFr: "Comment les frontières transactionnelles s'intègrent-elles dans la Clean Architecture ?",
    answerFr:
      "Une transaction couvre typiquement l'exécution d'un seul Use Case ; le Use Case orchestre des appels au repository mais délègue le commit/rollback réel à une préoccupation d'infrastructure (ex. une implémentation Unit of Work injectée via un port), gardant le domaine indépendant du mécanisme transactionnel sous-jacent.",
  },
  {
    question: "What is the Humble Object pattern and why is it useful here?",
    answer:
      "Splitting a hard-to-test piece of logic (e.g. UI rendering, a framework callback) into a thin \"humble\" wrapper with no logic and a separate testable component holding all the behavior, so the untestable part shrinks to almost nothing.",
    questionFr: "Qu'est-ce que le pattern Humble Object et pourquoi est-il utile ici ?",
    answerFr:
      "Séparer un morceau de logique difficile à tester (ex. du rendu UI, un callback de framework) en un wrapper \"humble\" fin sans logique et un composant testable séparé qui porte tout le comportement, de sorte que la partie non testable se réduit à presque rien.",
  },
  {
    question: "What is the Dependency Rule, stated precisely?",
    answer:
      "Source code dependencies can only point inward, toward higher-level policies: an inner circle (e.g. Entities) must never reference anything declared in an outer circle (e.g. a controller or a database driver), which is what forces frameworks and infrastructure to depend on the domain instead of the reverse.",
    questionFr: "Quelle est la formulation précise de la Dependency Rule ?",
    answerFr:
      "Les dépendances du code source ne peuvent pointer que vers l'intérieur, vers les politiques de plus haut niveau : un cercle interne (ex. les Entities) ne doit jamais référencer quoi que ce soit déclaré dans un cercle externe (ex. un controller ou un driver de base de données), ce qui force les frameworks et l'infrastructure à dépendre du domaine et non l'inverse.",
  },
  {
    question: "What's the difference in responsibility between a Controller and a Use Case?",
    answer:
      "A Controller translates a delivery-mechanism-specific request (an HTTP request, a CLI argument list) into a plain input model and invokes the Use Case; the Use Case holds the actual application logic and knows nothing about HTTP, CLI, or any other entry point, which is what lets the same Use Case be reused behind different Controllers.",
    questionFr: "Quelle différence de responsabilité entre un Controller et un Use Case ?",
    answerFr:
      "Un Controller traduit une requête spécifique à un mécanisme de livraison (une requête HTTP, une liste d'arguments CLI) en un modèle d'entrée simple et invoque le Use Case ; le Use Case porte la vraie logique applicative et ne connaît ni HTTP, ni CLI, ni aucun autre point d'entrée, ce qui permet de réutiliser le même Use Case derrière différents Controllers.",
  },
  {
    question: "How do you avoid an anemic Use Case layer that's just a pass-through to the domain?",
    answer:
      "Keep genuine orchestration logic in the Use Case (coordinating multiple aggregates, checking cross-aggregate invariants, sequencing calls to ports) while pushing single-entity business rules down into the Entities themselves; a Use Case that only calls one repository method and returns is usually a sign the logic belongs elsewhere or doesn't need this layer at all.",
    questionFr: "Comment éviter une couche Use Case anémique qui ne fait que transmettre au domaine ?",
    answerFr:
      "Garder une vraie logique d'orchestration dans le Use Case (coordonner plusieurs aggregates, vérifier des invariants cross-aggregate, séquencer des appels à des ports) tout en poussant les règles métier propres à une seule entité dans les Entities elles-mêmes ; un Use Case qui ne fait qu'appeler une méthode de repository et retourner est souvent le signe que la logique devrait être ailleurs ou que cette couche n'est pas nécessaire.",
  },
  {
    question: "What's the tradeoff of introducing full Clean Architecture layering on a small CRUD service?",
    answer:
      "The extra layers (boundaries, DTOs, mappers, presenters) add real ceremony and indirection for logic that's genuinely just \"read from and write to a table\"; the architecture earns its cost when business rules, multiple delivery mechanisms, or long-term framework independence matter, not by default on every service regardless of complexity.",
    questionFr: "Quel est le compromis d'appliquer un layering Clean Architecture complet sur un petit service CRUD ?",
    answerFr:
      "Les couches supplémentaires (boundaries, DTOs, mappers, presenters) ajoutent un vrai cérémonial et de l'indirection pour une logique qui n'est vraiment que \"lire et écrire dans une table\" ; l'architecture justifie son coût quand des règles métier, plusieurs mécanismes de livraison, ou l'indépendance long terme au framework comptent réellement, pas par défaut sur chaque service quelle que soit sa complexité.",
  },
  {
    question: "How should exceptions cross layer boundaries in Clean Architecture?",
    answer:
      "Domain/Use Case layers should raise meaningful domain exceptions (e.g. `InsufficientFundsException`), not framework-specific ones; an outer layer (a Presenter or a Controller's error handler) is responsible for translating those into delivery-mechanism-specific responses (an HTTP 422, a CLI exit code), keeping the mapping to transport concerns out of the domain.",
    questionFr: "Comment les exceptions doivent-elles traverser les frontières de couches en Clean Architecture ?",
    answerFr:
      "Les couches Domain/Use Case doivent lever des exceptions métier porteuses de sens (ex. `InsufficientFundsException`), pas des exceptions spécifiques à un framework ; une couche externe (un Presenter ou le gestionnaire d'erreurs d'un Controller) est responsable de les traduire en réponses spécifiques au mécanisme de livraison (un HTTP 422, un code de sortie CLI), gardant ce mapping vers les préoccupations de transport hors du domaine.",
  },
  {
    question: "What is a Data Mapper and why keep it separate from Entities?",
    answer:
      "A Data Mapper converts between a persistence representation (a database row, a JSON document) and a domain Entity, isolating that translation logic in one place; keeping it out of the Entity itself prevents the domain model from being shaped by storage concerns (column names, ORM annotations) that have nothing to do with business rules.",
    questionFr: "Qu'est-ce qu'un Data Mapper et pourquoi le garder séparé des Entities ?",
    answerFr:
      "Un Data Mapper convertit entre une représentation de persistance (une ligne de base de données, un document JSON) et une Entity du domaine, isolant cette logique de traduction à un seul endroit ; la garder hors de l'Entity elle-même évite que le modèle de domaine soit façonné par des préoccupations de stockage (noms de colonnes, annotations ORM) qui n'ont rien à voir avec les règles métier.",
  },
];
