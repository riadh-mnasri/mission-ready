export const questions = [
  {
    question: "What is a topic and a partition?",
    answer:
      "A topic is a named stream of messages; it's split into partitions (units of parallelism and ordering) - message order is only guaranteed within a single partition, not across partitions.",
  },
  {
    question: "How does Kafka guarantee read/write scalability?",
    answer:
      "Each partition is spread across the cluster's brokers and can be consumed in parallel by different consumers in a consumer group; more partitions allow more parallelism (up to the number of active consumers).",
  },
  {
    question: "What is a consumer group?",
    answer:
      "A set of consumers that share the reading of a topic's partitions, with each partition read by only one consumer in the group at a time, enabling horizontal scaling of consumption.",
  },
  {
    question: "How does replication work in Kafka?",
    answer:
      "Each partition has a leader and replicas (followers) on other brokers; writes go through the leader and are then replicated, with a configurable replication factor for fault tolerance.",
  },
  {
    question: "What is an offset and how is it managed?",
    answer:
      "The position of a message within a partition; each consumer group tracks its own offset (committed to an internal `__consumer_offsets` topic), allowing it to resume consumption where it left off.",
  },
  {
    question: "Difference between \"at least once\", \"at most once\", and \"exactly once\"?",
    answer:
      "At most once: a message can be lost but never duplicated (commit before processing). At least once: a message is never lost but can be duplicated (commit after processing, the common default). Exactly once: no loss and no duplication, via Kafka transactions and producer idempotence.",
  },
  {
    question: "What does the producer's `acks` setting control?",
    answer:
      "The acknowledgment level required before considering a send successful: `acks=0` (no acknowledgment, risk of loss), `acks=1` (leader acknowledgment only), `acks=all`/`-1` (acknowledgment from all in-sync replicas, the most reliable).",
  },
  {
    question: "What is ISR (In-Sync Replicas)?",
    answer:
      "The set of a partition's replicas that are up to date enough with the leader to be eligible to become leader on failure, guaranteeing that no acknowledged data is lost during a failover.",
  },
  {
    question: "How do you preserve ordering for messages related to the same entity (e.g. a user)?",
    answer:
      "Use that entity as the partitioning key (same key hashes to the same partition), guaranteeing order for that entity without requiring a single global partition.",
  },
  {
    question: "What are Kafka Streams and Kafka Connect, at a high level?",
    answer:
      "Kafka Streams is a library for stream processing (aggregation, joins, windowing) directly on topics; Kafka Connect is a framework for syncing data between Kafka and external systems (DB, S3...) via source/sink connectors.",
  },
  {
    question: "How do you handle failed message processing on the consumer side?",
    answer:
      "A common pattern is a dead letter topic (DLQ), where failed messages get republished after a number of retries, so the partition isn't blocked while keeping a trace for reprocessing/analysis.",
  },
  {
    question: "What's the difference between Kafka and a classic message queue (e.g. RabbitMQ)?",
    answer:
      "Kafka is a persistent distributed log where messages remain available to be replayed as long as retention hasn't expired, with multiple independent consumers reading the same stream; a classic queue typically removes a message once consumed (point-to-point model).",
  },
];
