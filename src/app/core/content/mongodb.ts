export const questions = [
  {
    question: "What is a document database, and how does MongoDB's model differ from a relational one?",
    answer:
      "Instead of rows split across normalized tables joined at query time, MongoDB stores a self-contained JSON-like document (BSON) per record, with nested objects and arrays representing related data directly inside it; the tradeoff is fewer joins and a schema that can evolve per document, against weaker cross-document consistency guarantees than a relational engine gives you by default.",
    questionFr: "Qu'est-ce qu'une base de données document, et en quoi le modèle de MongoDB diffère-t-il d'un modèle relationnel ?",
    answerFr:
      "Plutôt que des lignes réparties sur des tables normalisées jointes au moment de la requête, MongoDB stocke un document auto-suffisant de type JSON (BSON) par enregistrement, avec des objets et tableaux imbriqués représentant directement les données liées à l'intérieur ; le compromis est moins de jointures et un schéma qui peut évoluer par document, contre des garanties de cohérence inter-documents plus faibles que ce qu'un moteur relationnel offre par défaut.",
  },
  {
    question: "What is denormalization, and when does MongoDB's document model favor it?",
    answer:
      "Denormalization means duplicating some data across documents instead of referencing it once in a normalized form, trading extra storage and update complexity for faster reads with no join; it's favored in MongoDB when data is read together far more often than it's updated (e.g. embedding a product's name and price inside an order line, rather than joining to a live product table).",
    questionFr: "Qu'est-ce que la dénormalisation, et quand le modèle document de MongoDB la favorise-t-il ?",
    answerFr:
      "La dénormalisation consiste à dupliquer certaines données à travers des documents plutôt que de les référencer une seule fois sous forme normalisée, échangeant du stockage supplémentaire et une complexité de mise à jour contre des lectures plus rapides sans jointure ; elle est favorisée dans MongoDB quand des données sont lues ensemble bien plus souvent qu'elles ne sont mises à jour (ex. intégrer le nom et le prix d'un produit dans une ligne de commande, plutôt que joindre une table produit à jour).",
  },
  {
    question: "Difference between embedding and referencing related data in MongoDB?",
    answer:
      "Embedding nests related data directly inside the parent document, ideal for data that's always accessed together and doesn't grow unbounded (an address inside a user document); referencing stores just an ID and requires a separate query (or `$lookup`) to fetch the related document, better suited for data that's large, shared across many parents, or updated independently.",
    questionFr: "Différence entre l'embedding et le référencement de données liées dans MongoDB ?",
    answerFr:
      "L'embedding imbrique les données liées directement dans le document parent, idéal pour des données toujours accédées ensemble et qui ne grossissent pas sans limite (une adresse dans un document utilisateur) ; le référencement ne stocke qu'un ID et nécessite une requête séparée (ou un `$lookup`) pour récupérer le document lié, mieux adapté à des données volumineuses, partagées entre de nombreux parents, ou mises à jour indépendamment.",
  },
  {
    question: "What is a MongoDB index, and how does it affect write performance?",
    answer:
      "An index maintains a separate, ordered data structure (typically a B-tree) mapping field values to document locations, letting queries on that field avoid scanning the whole collection; every index must also be updated on every write to the collection, so each additional index speeds up matching reads but adds write overhead and storage cost.",
    questionFr: "Qu'est-ce qu'un index MongoDB, et comment affecte-t-il la performance en écriture ?",
    answerFr:
      "Un index maintient une structure de données séparée et ordonnée (typiquement un B-tree) qui fait correspondre les valeurs d'un champ à l'emplacement des documents, permettant aux requêtes sur ce champ d'éviter de scanner toute la collection ; chaque index doit aussi être mis à jour à chaque écriture sur la collection, donc chaque index supplémentaire accélère les lectures correspondantes mais ajoute un coût en écriture et en stockage.",
  },
  {
    question: "What is the aggregation pipeline in MongoDB?",
    answer:
      "A framework for processing documents through a sequence of stages (`$match`, `$group`, `$sort`, `$project`, `$lookup`), each transforming the output of the previous one, similar in spirit to a SQL query with `GROUP BY`/`JOIN`/`WHERE` but expressed as a declarative pipeline of composable stages instead of a single query.",
    questionFr: "Qu'est-ce que l'aggregation pipeline dans MongoDB ?",
    answerFr:
      "Un framework pour traiter des documents à travers une séquence d'étapes (`$match`, `$group`, `$sort`, `$project`, `$lookup`), chacune transformant la sortie de la précédente, dans un esprit similaire à une requête SQL avec `GROUP BY`/`JOIN`/`WHERE` mais exprimé comme un pipeline déclaratif d'étapes composables plutôt qu'une requête unique.",
  },
  {
    question: "How does MongoDB achieve high availability through replica sets?",
    answer:
      "A replica set is a group of MongoDB instances holding the same data, with one primary accepting writes and secondaries replicating from it asynchronously; if the primary becomes unreachable, the remaining members hold an election to promote a new primary automatically, giving automatic failover without manual intervention.",
    questionFr: "Comment MongoDB assure-t-il la haute disponibilité via les replica sets ?",
    answerFr:
      "Un replica set est un groupe d'instances MongoDB portant les mêmes données, avec un primary qui accepte les écritures et des secondaries qui répliquent depuis lui de façon asynchrone ; si le primary devient inaccessible, les membres restants tiennent une élection pour promouvoir automatiquement un nouveau primary, offrant un failover automatique sans intervention manuelle.",
  },
  {
    question: "What is sharding in MongoDB, and when do you need it?",
    answer:
      "Sharding horizontally partitions a collection's data across multiple servers (shards) based on a shard key, needed once a dataset or its write/read throughput outgrows what a single replica set can handle; choosing a shard key with good cardinality and even distribution is critical, since a poor choice creates hotspots much like a poorly chosen partition key elsewhere.",
    questionFr: "Qu'est-ce que le sharding dans MongoDB, et quand en a-t-on besoin ?",
    answerFr:
      "Le sharding partitionne horizontalement les données d'une collection sur plusieurs serveurs (shards) selon une shard key, nécessaire une fois qu'un jeu de données ou son débit lecture/écriture dépasse ce qu'un seul replica set peut gérer ; choisir une shard key avec une bonne cardinalité et une distribution homogène est critique, car un mauvais choix crée des hotspots un peu comme une clé de partition mal choisie ailleurs.",
  },
  {
    question: "What are write concern and read concern in MongoDB, and what do they control?",
    answer:
      "Write concern controls how many replica set members must acknowledge a write before it's considered successful (e.g. `w: \"majority\"` waits for most members, safer but slower than `w: 1`); read concern controls what guarantee a read gives about the data it returns (e.g. whether it might read data that could still be rolled back), letting you tune the consistency/latency tradeoff per operation.",
    questionFr: "Que sont le write concern et le read concern dans MongoDB, et que contrôlent-ils ?",
    answerFr:
      "Le write concern contrôle combien de membres du replica set doivent acquitter une écriture avant qu'elle soit considérée réussie (ex. `w: \"majority\"` attend la plupart des membres, plus sûr mais plus lent que `w: 1`) ; le read concern contrôle quelle garantie une lecture donne sur les données qu'elle retourne (ex. si elle pourrait lire des données encore susceptibles d'être annulées), permettant d'ajuster le compromis cohérence/latence par opération.",
  },
  {
    question: "What is schema validation in MongoDB, and why use it despite being \"schemaless\"?",
    answer:
      "MongoDB lets you attach a JSON Schema validator to a collection that rejects documents not matching defined rules (required fields, types, value ranges) on insert/update; even though the engine itself doesn't enforce a schema, application correctness usually benefits from guardrails that catch malformed documents before they ever reach the database.",
    questionFr: "Qu'est-ce que la validation de schéma dans MongoDB, et pourquoi l'utiliser malgré le côté \"schemaless\" ?",
    answerFr:
      "MongoDB permet d'attacher un validateur JSON Schema à une collection qui rejette les documents ne respectant pas des règles définies (champs requis, types, plages de valeurs) à l'insertion/mise à jour ; même si le moteur lui-même n'impose pas de schéma, la correction applicative bénéficie généralement de garde-fous qui détectent les documents malformés avant qu'ils n'atteignent la base de données.",
  },
  {
    question: "Where does MongoDB sit relative to the CAP theorem?",
    answer:
      "MongoDB is generally classified as CP (consistent and partition-tolerant): during a network partition affecting the primary, it favors electing a new primary and refusing writes on the wrong side over serving potentially stale or conflicting writes, unlike AP systems that would keep accepting writes on both sides and reconcile later.",
    questionFr: "Où se situe MongoDB par rapport au théorème CAP ?",
    answerFr:
      "MongoDB est généralement classé comme CP (cohérent et tolérant aux partitions) : lors d'une partition réseau affectant le primary, il privilégie l'élection d'un nouveau primary et le refus d'écritures du mauvais côté plutôt que de servir des écritures potentiellement obsolètes ou conflictuelles, contrairement aux systèmes AP qui continueraient d'accepter des écritures des deux côtés et réconcilieraient plus tard.",
  },
  {
    question: "What is a tool like Mongock (or Flyway for SQL) used for with MongoDB?",
    answer:
      "It applies versioned, ordered migration scripts (adding a field with a default, backfilling data, renaming a field) to a MongoDB database automatically as part of application startup or a pipeline step, giving document-store schema evolution the same auditability and repeatability that migration tools already give relational databases.",
    questionFr: "À quoi sert un outil comme Mongock (ou Flyway pour le SQL) avec MongoDB ?",
    answerFr:
      "Il applique des scripts de migration versionnés et ordonnés (ajouter un champ avec une valeur par défaut, faire un backfill de données, renommer un champ) à une base MongoDB automatiquement au démarrage de l'application ou comme étape de pipeline, donnant à l'évolution de schéma d'un document store la même auditabilité et répétabilité que les outils de migration offrent déjà aux bases relationnelles.",
  },
  {
    question: "What's a common anti-pattern when modeling a one-to-many relationship in MongoDB?",
    answer:
      "Embedding an unbounded array inside a parent document (e.g. storing every order a customer has ever placed inside the customer document) - as the array grows without limit, the document can hit MongoDB's 16MB document size limit and every update to the array rewrites the whole document, making referencing (or a bucketing pattern) the better fit once the \"many\" side is unbounded.",
    questionFr: "Quel est un anti-pattern courant en modélisant une relation un-à-plusieurs dans MongoDB ?",
    answerFr:
      "Intégrer un tableau non borné dans un document parent (ex. stocker toutes les commandes qu'un client a jamais passées dans le document client) - à mesure que le tableau grossit sans limite, le document peut atteindre la limite de taille de 16 Mo de MongoDB et chaque mise à jour du tableau réécrit tout le document, rendant le référencement (ou un pattern de bucketing) mieux adapté une fois que le côté \"plusieurs\" est non borné.",
  },
  {
    question: "What is a covered query in MongoDB?",
    answer:
      "A query where every field it needs (both in the filter and in the returned projection) is present in the index used, so MongoDB can answer entirely from the index without ever fetching the actual documents, making it noticeably faster than an equivalent query that has to load full documents.",
    questionFr: "Qu'est-ce qu'une covered query dans MongoDB ?",
    answerFr:
      "Une requête où chaque champ dont elle a besoin (à la fois dans le filtre et dans la projection retournée) est présent dans l'index utilisé, si bien que MongoDB peut répondre entièrement depuis l'index sans jamais charger les documents réels, la rendant nettement plus rapide qu'une requête équivalente qui doit charger des documents complets.",
  },
  {
    question: "When would you choose a relational database over MongoDB for a given use case?",
    answer:
      "When the data is naturally tabular with many-to-many relationships that would require heavy denormalization or frequent multi-document `$lookup` joins in MongoDB, or when strong multi-row/multi-table ACID transactions are a core requirement (e.g. double-entry accounting), a relational database's native support for joins and transactions is usually the better technical fit.",
    questionFr: "Quand choisir une base relationnelle plutôt que MongoDB pour un cas d'usage donné ?",
    answerFr:
      "Quand les données sont naturellement tabulaires avec des relations many-to-many qui nécessiteraient une lourde dénormalisation ou des jointures `$lookup` multi-documents fréquentes dans MongoDB, ou quand de fortes transactions ACID multi-lignes/multi-tables sont une exigence centrale (ex. une comptabilité en partie double), le support natif d'une base relationnelle pour les jointures et les transactions est généralement le meilleur choix technique.",
  },
];
