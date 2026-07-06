export const questions = [
  {
    question: "What is a DataFrame in Spark and how does it differ from an RDD?",
    answer:
      "An RDD (Resilient Distributed Dataset) is Spark's low-level distributed collection API with no schema, offering full control but no query optimization; a DataFrame adds a schema (named, typed columns) on top, letting the Catalyst optimizer plan and optimize operations the way a SQL query planner would.",
    questionFr: "Qu'est-ce qu'un DataFrame dans Spark et en quoi diffère-t-il d'un RDD ?",
    answerFr:
      "Un RDD (Resilient Distributed Dataset) est l'API de collection distribuée bas niveau de Spark sans schéma, offrant un contrôle total mais aucune optimisation de requête ; un DataFrame ajoute un schéma (colonnes nommées et typées) par-dessus, permettant à l'optimiseur Catalyst de planifier et optimiser les opérations comme le ferait un planificateur de requêtes SQL.",
  },
  {
    question: "What is the Catalyst optimizer?",
    answer:
      "Spark SQL's query optimization engine: it parses a DataFrame/SQL query into a logical plan, applies rule-based and cost-based optimizations (predicate pushdown, column pruning, join reordering), and generates an optimized physical plan, all before any actual computation runs.",
    questionFr: "Qu'est-ce que l'optimiseur Catalyst ?",
    answerFr:
      "Le moteur d'optimisation de requêtes de Spark SQL : il parse une requête DataFrame/SQL en un plan logique, applique des optimisations basées sur des règles et sur le coût (predicate pushdown, column pruning, réordonnancement des jointures), et génère un plan physique optimisé, tout cela avant qu'aucun calcul réel ne s'exécute.",
  },
  {
    question: "What is a Spark job, a stage, and a task, and how do they relate?",
    answer:
      "A job is triggered by an action (e.g. `collect()`, `write()`) and is split into stages at every shuffle boundary; each stage is further split into tasks, one per partition, which are the actual units of work executed in parallel on executors.",
    questionFr: "Qu'est-ce qu'un job Spark, un stage et une task, et comment se relient-ils ?",
    answerFr:
      "Un job est déclenché par une action (ex. `collect()`, `write()`) et se découpe en stages à chaque frontière de shuffle ; chaque stage se découpe ensuite en tasks, une par partition, qui sont les unités de travail réellement exécutées en parallèle sur les executors.",
  },
  {
    question: "What causes data shuffling in Spark, and why is it expensive?",
    answer:
      "Operations that require data with the same key to be co-located (`groupByKey`, `join`, `repartition`) force records to be redistributed across the cluster over the network and written to disk between stages, making shuffles the most common source of slow Spark jobs compared to purely in-partition transformations.",
    questionFr: "Qu'est-ce qui cause le shuffling de données dans Spark, et pourquoi est-ce coûteux ?",
    answerFr:
      "Les opérations qui exigent que les données partageant une même clé soient co-localisées (`groupByKey`, `join`, `repartition`) forcent une redistribution des enregistrements à travers le cluster sur le réseau et une écriture sur disque entre les stages, faisant des shuffles la source la plus courante de lenteur des jobs Spark par rapport aux transformations purement intra-partition.",
  },
  {
    question: "Difference between a narrow and a wide transformation?",
    answer:
      "A narrow transformation (`map`, `filter`) computes each output partition from a single input partition with no data movement across the cluster; a wide transformation (`groupBy`, `join`, `repartition`) requires data from multiple input partitions, forcing a shuffle.",
    questionFr: "Différence entre une transformation narrow et une transformation wide ?",
    answerFr:
      "Une transformation narrow (`map`, `filter`) calcule chaque partition de sortie à partir d'une seule partition d'entrée sans mouvement de données à travers le cluster ; une transformation wide (`groupBy`, `join`, `repartition`) nécessite des données de plusieurs partitions d'entrée, forçant un shuffle.",
  },
  {
    question: "What is lazy evaluation in Spark, and why does it matter?",
    answer:
      "Transformations (`map`, `filter`, `select`) just build up a logical execution plan without computing anything; only an action (`collect`, `count`, `write`) triggers actual execution, which lets Catalyst see and optimize the whole chain of transformations at once instead of executing each one eagerly and in isolation.",
    questionFr: "Qu'est-ce que l'évaluation paresseuse (lazy) dans Spark, et pourquoi est-ce important ?",
    answerFr:
      "Les transformations (`map`, `filter`, `select`) ne font que construire un plan d'exécution logique sans rien calculer ; seule une action (`collect`, `count`, `write`) déclenche l'exécution réelle, ce qui permet à Catalyst de voir et d'optimiser toute la chaîne de transformations d'un coup plutôt que d'exécuter chacune de façon isolée et immédiate.",
  },
  {
    question: "What is a broadcast join and when should you use one?",
    answer:
      "When joining a large DataFrame with a much smaller one, Spark can broadcast the small DataFrame's full data to every executor, avoiding a shuffle of the large DataFrame entirely; it's ideal when the small side comfortably fits in each executor's memory, and Spark's optimizer will often do it automatically below a configurable size threshold.",
    questionFr: "Qu'est-ce qu'un broadcast join et quand l'utiliser ?",
    answerFr:
      "En joignant un grand DataFrame avec un beaucoup plus petit, Spark peut diffuser (broadcast) toutes les données du petit DataFrame à chaque executor, évitant entièrement un shuffle du grand DataFrame ; idéal quand le petit côté tient confortablement dans la mémoire de chaque executor, et l'optimiseur de Spark le fait souvent automatiquement en dessous d'un seuil de taille configurable.",
  },
  {
    question: "How do you control partitioning in Spark, and what's the difference between `repartition` and `coalesce`?",
    answer:
      "`repartition(n)` performs a full shuffle to redistribute data into exactly `n` partitions, useful to increase parallelism or fix skew; `coalesce(n)` only merges existing partitions without a full shuffle, which is cheaper but can only reduce the partition count, not increase it evenly.",
    questionFr: "Comment contrôler le partitioning dans Spark, et quelle différence entre `repartition` et `coalesce` ?",
    answerFr:
      "`repartition(n)` effectue un shuffle complet pour redistribuer les données en exactement `n` partitions, utile pour augmenter le parallélisme ou corriger un skew ; `coalesce(n)` ne fait que fusionner des partitions existantes sans shuffle complet, ce qui est moins coûteux mais ne peut que réduire le nombre de partitions, pas l'augmenter de façon équilibrée.",
  },
  {
    question: "Difference between `cache()` and `persist()`?",
    answer:
      "`cache()` is shorthand for `persist()` with the default storage level (memory, spilling to disk if needed); `persist()` lets you explicitly choose the storage level (memory-only, disk-only, memory-and-disk, with or without serialization/replication), giving finer control over the memory/recomputation tradeoff for data reused across multiple actions.",
    questionFr: "Différence entre `cache()` et `persist()` ?",
    answerFr:
      "`cache()` est un raccourci pour `persist()` avec le niveau de stockage par défaut (mémoire, avec spill sur disque si besoin) ; `persist()` permet de choisir explicitement le niveau de stockage (mémoire seule, disque seul, mémoire-et-disque, avec ou sans sérialisation/réplication), donnant un contrôle plus fin sur le compromis mémoire/recalcul pour des données réutilisées à travers plusieurs actions.",
  },
  {
    question: "What is data skew in Spark, and how do you mitigate it?",
    answer:
      "Skew happens when one or a few partition keys hold a disproportionate share of the data (e.g. one customer ID with millions of rows), leaving one task doing most of the work while others finish instantly; common mitigations are salting the skewed key with a random suffix before the join/groupBy, or using adaptive query execution's automatic skew join optimization.",
    questionFr: "Qu'est-ce que le data skew dans Spark, et comment le corriger ?",
    answerFr:
      "Le skew survient quand une ou quelques clés de partition portent une part disproportionnée des données (ex. un ID client avec des millions de lignes), laissant une task faire l'essentiel du travail pendant que les autres finissent instantanément ; les corrections courantes sont le salting de la clé skewée avec un suffixe aléatoire avant le join/groupBy, ou l'utilisation de l'optimisation automatique de skew join de l'adaptive query execution.",
  },
  {
    question: "Difference between Spark Structured Streaming and the older Spark Streaming (DStreams)?",
    answer:
      "DStreams process data as a sequence of small RDD-based micro-batches with a lower-level API and no unified batch/streaming model; Structured Streaming models a stream as an unbounded DataFrame/table, reusing the same Catalyst-optimized DataFrame API for both batch and streaming and adding exactly-once semantics with checkpointing.",
    questionFr: "Différence entre Spark Structured Streaming et l'ancien Spark Streaming (DStreams) ?",
    answerFr:
      "Les DStreams traitent les données comme une séquence de micro-batches basés sur des RDD avec une API bas niveau et aucun modèle unifié batch/streaming ; Structured Streaming modélise un flux comme un DataFrame/table non borné, réutilisant la même API DataFrame optimisée par Catalyst pour le batch et le streaming, et ajoutant une sémantique exactly-once avec checkpointing.",
  },
  {
    question: "What is the Tungsten execution engine?",
    answer:
      "Spark's internal component that manages memory and generates optimized JVM bytecode for physical query plans directly, bypassing standard Java object overhead (via off-heap binary memory management and whole-stage code generation) to get performance closer to hand-written low-level code.",
    questionFr: "Qu'est-ce que le moteur d'exécution Tungsten ?",
    answerFr:
      "Le composant interne de Spark qui gère la mémoire et génère directement du bytecode JVM optimisé pour les plans de requête physiques, contournant l'overhead standard des objets Java (via une gestion mémoire binaire off-heap et la génération de code whole-stage) pour obtenir des performances proches de code bas niveau écrit à la main.",
  },
  {
    question: "How does Spark achieve fault tolerance?",
    answer:
      "Every RDD/DataFrame keeps a lineage graph recording the sequence of transformations used to build it from its original source; if a partition is lost (e.g. an executor crashes), Spark recomputes just that partition from the lineage instead of needing constant replication of every intermediate result.",
    questionFr: "Comment Spark assure-t-il la tolérance aux pannes ?",
    answerFr:
      "Chaque RDD/DataFrame garde un graphe de lignage enregistrant la séquence de transformations utilisée pour le construire depuis sa source d'origine ; si une partition est perdue (ex. un executor plante), Spark ne recalcule que cette partition à partir du lignage au lieu de nécessiter une réplication constante de chaque résultat intermédiaire.",
  },
  {
    question: "What's the role of the driver versus the executors in a Spark application?",
    answer:
      "The driver runs the application's `main()`, builds the logical/physical execution plan, and schedules tasks; executors are the worker processes that actually run those tasks on their assigned data partitions and report results back to the driver, which is why a driver-side bottleneck (e.g. collecting too much data with `collect()`) can crash the whole job even with plenty of executor capacity.",
    questionFr: "Quel est le rôle du driver par rapport aux executors dans une application Spark ?",
    answerFr:
      "Le driver exécute le `main()` de l'application, construit le plan d'exécution logique/physique, et planifie les tasks ; les executors sont les processus travailleurs qui exécutent réellement ces tasks sur leurs partitions de données assignées et renvoient les résultats au driver, ce qui explique pourquoi un goulot d'étranglement côté driver (ex. trop de données rapatriées avec `collect()`) peut faire planter tout le job même avec une large capacité d'executors.",
  },
  {
    question: "What is Adaptive Query Execution (AQE) and what problem does it solve?",
    answer:
      "AQE re-optimizes a query plan at runtime using actual statistics gathered after each shuffle stage, rather than relying only on estimates made before execution; it can dynamically coalesce small shuffle partitions, switch join strategies, and rebalance skewed joins, correcting cases where the initial plan's assumptions turned out to be wrong.",
    questionFr: "Qu'est-ce que l'Adaptive Query Execution (AQE) et quel problème résout-elle ?",
    answerFr:
      "AQE réoptimise un plan de requête à l'exécution en utilisant des statistiques réelles collectées après chaque stage de shuffle, plutôt que de se fier uniquement à des estimations faites avant l'exécution ; elle peut fusionner dynamiquement de petites partitions de shuffle, changer de stratégie de jointure, et rééquilibrer des jointures skewées, corrigeant les cas où les hypothèses du plan initial se révèlent fausses.",
  },
];
