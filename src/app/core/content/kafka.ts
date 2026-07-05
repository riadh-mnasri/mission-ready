export const questions = [
  {
    question: "What is a topic and a partition?",
    answer:
      "A topic is a named stream of messages; it's split into partitions (units of parallelism and ordering) - message order is only guaranteed within a single partition, not across partitions.",
    questionFr: "Qu'est-ce qu'un topic et une partition ?",
    answerFr:
      "Un topic est un flux nommé de messages ; il est découpé en partitions (unités de parallélisme et d'ordonnancement) - l'ordre des messages n'est garanti qu'au sein d'une même partition, pas entre partitions.",
  },
  {
    question: "How does Kafka guarantee read/write scalability?",
    answer:
      "Each partition is spread across the cluster's brokers and can be consumed in parallel by different consumers in a consumer group; more partitions allow more parallelism (up to the number of active consumers).",
    questionFr: "Comment Kafka garantit-il la scalabilité en lecture/écriture ?",
    answerFr:
      "Chaque partition est répartie sur les brokers du cluster et peut être consommée en parallèle par différents consumers d'un même consumer group ; plus de partitions permet plus de parallélisme (jusqu'au nombre de consumers actifs).",
  },
  {
    question: "What is a consumer group?",
    answer:
      "A set of consumers that share the reading of a topic's partitions, with each partition read by only one consumer in the group at a time, enabling horizontal scaling of consumption.",
    questionFr: "Qu'est-ce qu'un consumer group ?",
    answerFr:
      "Un ensemble de consumers qui se partagent la lecture des partitions d'un topic, chaque partition n'étant lue que par un seul consumer du groupe à la fois, permettant un scaling horizontal de la consommation.",
  },
  {
    question: "How does replication work in Kafka?",
    answer:
      "Each partition has a leader and replicas (followers) on other brokers; writes go through the leader and are then replicated, with a configurable replication factor for fault tolerance.",
    questionFr: "Comment fonctionne la réplication dans Kafka ?",
    answerFr:
      "Chaque partition a un leader et des replicas (followers) sur d'autres brokers ; les écritures passent par le leader puis sont répliquées, avec un replication factor configurable pour la tolérance aux pannes.",
  },
  {
    question: "What is an offset and how is it managed?",
    answer:
      "The position of a message within a partition; each consumer group tracks its own offset (committed to an internal `__consumer_offsets` topic), allowing it to resume consumption where it left off.",
    questionFr: "Qu'est-ce qu'un offset et comment est-il géré ?",
    answerFr:
      "La position d'un message dans une partition ; chaque consumer group maintient son propre offset (commité dans un topic interne `__consumer_offsets`), lui permettant de reprendre la consommation là où il s'était arrêté.",
  },
  {
    question: "Difference between \"at least once\", \"at most once\", and \"exactly once\"?",
    answer:
      "At most once: a message can be lost but never duplicated (commit before processing). At least once: a message is never lost but can be duplicated (commit after processing, the common default). Exactly once: no loss and no duplication, via Kafka transactions and producer idempotence.",
    questionFr: "Différence entre \"at least once\", \"at most once\" et \"exactly once\" ?",
    answerFr:
      "At most once : un message peut être perdu mais jamais dupliqué (commit avant traitement). At least once : un message n'est jamais perdu mais peut être dupliqué (commit après traitement, le défaut le plus courant). Exactly once : ni perte ni duplication, via des transactions Kafka et l'idempotence du producer.",
  },
  {
    question: "What does the producer's `acks` setting control?",
    answer:
      "The acknowledgment level required before considering a send successful: `acks=0` (no acknowledgment, risk of loss), `acks=1` (leader acknowledgment only), `acks=all`/`-1` (acknowledgment from all in-sync replicas, the most reliable).",
    questionFr: "Que contrôle le paramètre `acks` côté producer ?",
    answerFr:
      "Le niveau d'acknowledgment attendu avant de considérer un envoi réussi : `acks=0` (aucun acknowledgment, risque de perte), `acks=1` (acknowledgment du leader seul), `acks=all`/`-1` (acknowledgment de tous les replicas in-sync, le plus fiable).",
  },
  {
    question: "What is ISR (In-Sync Replicas)?",
    answer:
      "The set of a partition's replicas that are up to date enough with the leader to be eligible to become leader on failure, guaranteeing that no acknowledged data is lost during a failover.",
    questionFr: "Qu'est-ce qu'ISR (In-Sync Replicas) ?",
    answerFr:
      "L'ensemble des replicas d'une partition suffisamment à jour avec le leader pour être éligibles à devenir leader en cas de panne, garantissant qu'aucune donnée acquittée ne soit perdue lors d'un failover.",
  },
  {
    question: "How do you preserve ordering for messages related to the same entity (e.g. a user)?",
    answer:
      "Use that entity as the partitioning key (same key hashes to the same partition), guaranteeing order for that entity without requiring a single global partition.",
    questionFr:
      "Comment préserver l'ordre des messages liés à une même entité (ex. un utilisateur) ?",
    answerFr:
      "Utiliser cette entité comme clé de partitionnement (même clé -> même partition via hash), ce qui garantit l'ordre pour cette entité sans nécessiter une seule partition globale.",
  },
  {
    question: "What are Kafka Streams and Kafka Connect, at a high level?",
    answer:
      "Kafka Streams is a library for stream processing (aggregation, joins, windowing) directly on topics; Kafka Connect is a framework for syncing data between Kafka and external systems (DB, S3...) via source/sink connectors.",
    questionFr: "Que sont Kafka Streams et Kafka Connect, à haut niveau ?",
    answerFr:
      "Kafka Streams est une librairie de stream processing (agrégation, jointures, windowing) directement sur des topics ; Kafka Connect est un framework pour synchroniser des données entre Kafka et des systèmes externes (DB, S3...) via des connectors source/sink.",
  },
  {
    question: "How do you handle failed message processing on the consumer side?",
    answer:
      "A common pattern is a dead letter topic (DLQ), where failed messages get republished after a number of retries, so the partition isn't blocked while keeping a trace for reprocessing/analysis.",
    questionFr: "Comment gérer les échecs de traitement de messages côté consumer ?",
    answerFr:
      "Un pattern courant est le dead letter topic (DLQ), où les messages en échec sont republiés après un certain nombre de retries, pour ne pas bloquer la partition tout en gardant une trace pour retraitement/analyse.",
  },
  {
    question: "What's the difference between Kafka and a classic message queue (e.g. RabbitMQ)?",
    answer:
      "Kafka is a persistent distributed log where messages remain available to be replayed as long as retention hasn't expired, with multiple independent consumers reading the same stream; a classic queue typically removes a message once consumed (point-to-point model).",
    questionFr: "Quelle est la différence entre Kafka et une message queue classique (ex. RabbitMQ) ?",
    answerFr:
      "Kafka est un log distribué persistant où les messages restent disponibles pour être rejoués tant que la rétention n'a pas expiré, avec plusieurs consumers indépendants lisant le même flux ; une queue classique retire généralement un message une fois consommé (modèle point-to-point).",
  },
];
