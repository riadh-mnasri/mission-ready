export const questions = [
  {
    question: "Difference between `==` and `.equals()` for objects?",
    answer:
      "`==` compares references (identity); `.equals()` compares logical content as defined by the class (must be overridden consistently with `hashCode()` for correct behavior in hash-based collections).",
  },
  {
    question: "What is the `equals`/`hashCode` contract?",
    answer:
      "Two objects equal according to `equals()` must have the same `hashCode()`; the reverse isn't required. Violating this contract breaks `HashMap`/`HashSet` behavior.",
  },
  {
    question: "Difference between `String`, `StringBuilder`, and `StringBuffer`?",
    answer:
      "`String` is immutable (every concatenation creates a new object); `StringBuilder` is mutable and not thread-safe (fast); `StringBuffer` is mutable and thread-safe (synchronized, slower).",
  },
  {
    question: "How does the Garbage Collector work at a high level?",
    answer:
      "It identifies objects unreachable from the GC roots and reclaims their memory; the JVM offers several collectors (G1, ZGC, Shenandoah) with different trade-offs between pause latency and throughput.",
  },
  {
    question: "What is the JVM memory model (Heap vs Stack)?",
    answer:
      "The Stack holds local variables and call frames (per thread); the Heap holds allocated objects (shared across threads), typically split into young/old generations for GC purposes.",
  },
  {
    question: "Difference between an interface and an abstract class (modern Java)?",
    answer:
      "An interface can have default/static methods but no instance state, and supports multiple inheritance; an abstract class can hold state and constructors but only allows single inheritance.",
  },
  {
    question: "What is the Stream API and a typical pipeline?",
    answer:
      "A functional API for processing collections declaratively via lazy intermediate operations (`filter`, `map`) and a terminal operation (`collect`, `reduce`) that triggers the pipeline's execution.",
  },
  {
    question: "How do generics and \"type erasure\" work?",
    answer:
      "Generics enforce type safety at compile time, but generic type information is erased at runtime (bytecode) - which is why you can't do `new T()` or `instanceof List<String>` directly.",
  },
  {
    question: "What is a `CompletableFuture` and why is it useful?",
    answer:
      "It represents a composable asynchronous result (chaining via `thenApply`, `thenCompose`, combining via `thenCombine`), letting you write non-blocking async code without deeply nested callbacks.",
  },
  {
    question: "Difference between checked and unchecked exceptions?",
    answer:
      "Checked exceptions (extending `Exception` but not `RuntimeException`) must be declared or caught at compile time; unchecked ones (`RuntimeException` and subclasses) don't require it, often used for programming errors.",
  },
  {
    question: "What are Virtual Threads (Project Loom, Java 21+)?",
    answer:
      "Lightweight threads managed by the JVM (not 1:1 with OS threads), letting you block massively without exhausting system resources, simplifying blocking concurrent code at scale without resorting to reactive programming.",
  },
  {
    question: "How does the `volatile` keyword work?",
    answer:
      "It guarantees immediate visibility of writes to a variable across threads (no per-thread local caching) and prevents certain instruction reordering, but doesn't guarantee atomicity of compound operations (e.g. increment).",
  },
  {
    question: "Difference between `synchronized` and `ReentrantLock`?",
    answer:
      "`synchronized` is simpler (block/method) and managed by the JVM; `ReentrantLock` offers finer control (timed tryLock, interruption, fair locks, multiple conditions) at the cost of explicit manual unlocking.",
  },
];
