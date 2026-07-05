export const questions = [
  {
    question: "What is a Bounded Context?",
    answer:
      "An explicit boundary (often aligned with a business subdomain) inside which a model and vocabulary (ubiquitous language) have a single, coherent meaning - the same term can mean something different in another context.",
    questionFr: "Qu'est-ce qu'un Bounded Context ?",
    answerFr:
      "Une frontière explicite (souvent alignée avec un subdomain métier) à l'intérieur de laquelle un modèle et un vocabulaire (ubiquitous language) ont un sens unique et cohérent - le même terme peut vouloir dire autre chose dans un autre contexte.",
  },
  {
    question: "Difference between an Entity and a Value Object?",
    answer:
      "An Entity has an identity that persists over time (e.g. a Customer, identified by an ID even as its attributes change). A Value Object is defined solely by its attributes, immutable, and interchangeable (e.g. an Address, a Money amount).",
    questionFr: "Différence entre une Entity et un Value Object ?",
    answerFr:
      "Une Entity a une identité qui persiste dans le temps (ex. un Customer, identifié par un ID même si ses attributs changent). Un Value Object est défini uniquement par ses attributs, immuable, et interchangeable (ex. une Address, un montant Money).",
  },
  {
    question: "What is an Aggregate and its root (Aggregate Root)?",
    answer:
      "A cluster of entities/value objects treated as a single transactional consistency unit; the root is the only entry point accessible from outside, guarding the invariants of the whole aggregate.",
    questionFr: "Qu'est-ce qu'un Aggregate et sa racine (Aggregate Root) ?",
    answerFr:
      "Un cluster d'entities/value objects traité comme une seule unité de cohérence transactionnelle ; la racine est le seul point d'entrée accessible depuis l'extérieur, garante des invariants de tout l'aggregate.",
  },
  {
    question: "Why keep aggregates small?",
    answer:
      "An oversized aggregate transactionally locks more data than necessary and hurts concurrency/performance; the rule of thumb is \"one aggregate, one transaction, as small as possible while still guaranteeing invariants\".",
    questionFr: "Pourquoi garder des aggregates petits ?",
    answerFr:
      "Un aggregate trop gros verrouille transactionnellement plus de données que nécessaire et dégrade la concurrence/performance ; la règle empirique est \"un aggregate, une transaction, le plus petit possible tout en garantissant les invariants\".",
  },
  {
    question: "What is the Ubiquitous Language?",
    answer:
      "A shared, rigorous vocabulary between developers and domain experts, used both in conversation and in code (class/method names), eliminating ambiguous translation between business and technical terms.",
    questionFr: "Qu'est-ce que l'Ubiquitous Language ?",
    answerFr:
      "Un vocabulaire partagé et rigoureux entre développeurs et experts métier, utilisé aussi bien en conversation que dans le code (noms de classes/méthodes), qui élimine la traduction ambiguë entre termes métier et techniques.",
  },
  {
    question: "Difference between a Domain Event and a plain technical event?",
    answer:
      "A Domain Event represents a meaningful, immutable business fact that happened (e.g. \"OrderConfirmed\"), named in the past tense, used to decouple business reactions - unlike a low-level plumbing event like \"RowUpdated\".",
    questionFr: "Différence entre un Domain Event et un simple event technique ?",
    answerFr:
      "Un Domain Event représente un fait métier significatif et immuable qui s'est produit (ex. \"OrderConfirmed\"), nommé au passé, utilisé pour découpler des réactions métier - contrairement à un event bas niveau type \"RowUpdated\".",
  },
  {
    question: "What is a Repository in DDD?",
    answer:
      "An abstraction that gives the illusion of an in-memory collection of aggregates, hiding actual persistence; it's not a generic CRUD DAO but a port shaped around the domain's real needs.",
    questionFr: "Qu'est-ce qu'un Repository en DDD ?",
    answerFr:
      "Une abstraction qui donne l'illusion d'une collection en mémoire d'aggregates, masquant la persistance réelle ; ce n'est pas un DAO CRUD générique mais un port pensé autour des vrais besoins du domaine.",
  },
  {
    question: "What is a Domain Service?",
    answer:
      "A business operation that doesn't naturally belong to any single Entity or Value Object (often because it spans multiple aggregates), expressed as a stateless service carrying explicit business logic.",
    questionFr: "Qu'est-ce qu'un Domain Service ?",
    answerFr:
      "Une opération métier qui n'appartient naturellement à aucune Entity ou Value Object (souvent parce qu'elle implique plusieurs aggregates), exprimée comme un service sans état portant une logique métier explicite.",
  },
  {
    question: "In Context Mapping, what does an \"Anti-Corruption Layer\" relationship represent?",
    answer:
      "A translation layer that shields one Bounded Context's model from another context's concepts (often legacy or external), converting models at the boundary to prevent contamination of the language/model.",
    questionFr:
      "En Context Mapping, que représente une relation \"Anti-Corruption Layer\" ?",
    answerFr:
      "Une couche de traduction qui protège le modèle d'un Bounded Context des concepts d'un autre contexte (souvent legacy ou externe), en convertissant les modèles à la frontière pour éviter de contaminer le langage/modèle.",
  },
  {
    question: "Difference between Strategic DDD and Tactical DDD?",
    answer:
      "Strategic DDD deals with splitting the system into Bounded Contexts and their relationships (Context Map, Core/Supporting/Generic subdomains); Tactical DDD provides implementation patterns (Entity, Aggregate, Repository, Domain Event...).",
    questionFr: "Différence entre Strategic DDD et Tactical DDD ?",
    answerFr:
      "Le Strategic DDD s'occupe de découper le système en Bounded Contexts et de leurs relations (Context Map, subdomains Core/Supporting/Generic) ; le Tactical DDD fournit des patterns d'implémentation (Entity, Aggregate, Repository, Domain Event...).",
  },
  {
    question: "What is a Core Domain?",
    answer:
      "The subdomain that constitutes the company's competitive advantage, where modeling effort and talent investment should be maximal - unlike \"Supporting\" or \"Generic\" subdomains that can be simplified or even bought as SaaS.",
    questionFr: "Qu'est-ce qu'un Core Domain ?",
    answerFr:
      "Le subdomain qui constitue l'avantage compétitif de l'entreprise, où l'effort de modélisation et l'investissement en talent doivent être maximaux - contrairement aux subdomains \"Supporting\" ou \"Generic\" qu'on peut simplifier voire acheter en SaaS.",
  },
  {
    question: "How does DDD relate to hexagonal/Clean Architecture?",
    answer:
      "DDD structures the domain's content (aggregates, ubiquitous language, events); hexagonal/Clean Architecture provides the technical frame that isolates that domain from infrastructure details - the two are complementary, not competing.",
    questionFr: "Quel est le lien entre DDD et l'architecture hexagonale/Clean Architecture ?",
    answerFr:
      "Le DDD structure le contenu du domaine (aggregates, ubiquitous language, events) ; l'architecture hexagonale/Clean fournit le cadre technique qui isole ce domaine des détails d'infrastructure - les deux sont complémentaires, pas concurrents.",
  },
  {
    question: "What is Event Storming?",
    answer:
      "A collaborative workshop (developers + domain experts) that surfaces the domain model by placing Domain Events on a wall in chronological order, then adding the commands, actors, and aggregates that produce them.",
    questionFr: "Qu'est-ce que l'Event Storming ?",
    answerFr:
      "Un atelier collaboratif (développeurs + experts métier) qui fait émerger le modèle du domaine en plaçant les Domain Events sur un mur dans l'ordre chronologique, puis en ajoutant les commands, acteurs et aggregates qui les produisent.",
  },
];
