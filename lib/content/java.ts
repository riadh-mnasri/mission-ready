export const questions = [
  {
    question: "Difference between `==` and `.equals()` for objects?",
    answer:
      "`==` compares references (identity); `.equals()` compares logical content as defined by the class (must be overridden consistently with `hashCode()` for correct behavior in hash-based collections).",
    questionFr: "Différence entre `==` et `.equals()` pour des objets ?",
    answerFr:
      "`==` compare des références (identité) ; `.equals()` compare le contenu logique tel que défini par la classe (doit être surchargé en cohérence avec `hashCode()` pour un comportement correct dans les collections basées sur le hash).",
  },
  {
    question: "What is the `equals`/`hashCode` contract?",
    answer:
      "Two objects equal according to `equals()` must have the same `hashCode()`; the reverse isn't required. Violating this contract breaks `HashMap`/`HashSet` behavior.",
    questionFr: "Qu'est-ce que le contrat `equals`/`hashCode` ?",
    answerFr:
      "Deux objets égaux selon `equals()` doivent avoir le même `hashCode()` ; l'inverse n'est pas requis. Violer ce contrat casse le comportement de `HashMap`/`HashSet`.",
  },
  {
    question: "Difference between `String`, `StringBuilder`, and `StringBuffer`?",
    answer:
      "`String` is immutable (every concatenation creates a new object); `StringBuilder` is mutable and not thread-safe (fast); `StringBuffer` is mutable and thread-safe (synchronized, slower).",
    questionFr: "Différence entre `String`, `StringBuilder` et `StringBuffer` ?",
    answerFr:
      "`String` est immuable (chaque concaténation crée un nouvel objet) ; `StringBuilder` est mutable et non thread-safe (rapide) ; `StringBuffer` est mutable et thread-safe (synchronized, plus lent).",
  },
  {
    question: "How does the Garbage Collector work at a high level?",
    answer:
      "It identifies objects unreachable from the GC roots and reclaims their memory; the JVM offers several collectors (G1, ZGC, Shenandoah) with different trade-offs between pause latency and throughput.",
    questionFr: "Comment fonctionne le Garbage Collector à haut niveau ?",
    answerFr:
      "Il identifie les objets inatteignables depuis les GC roots et libère leur mémoire ; la JVM propose plusieurs collectors (G1, ZGC, Shenandoah) avec des compromis différents entre latence de pause et throughput.",
  },
  {
    question: "What is the JVM memory model (Heap vs Stack)?",
    answer:
      "The Stack holds local variables and call frames (per thread); the Heap holds allocated objects (shared across threads), typically split into young/old generations for GC purposes.",
    questionFr: "Qu'est-ce que le memory model de la JVM (Heap vs Stack) ?",
    answerFr:
      "Le Stack contient les variables locales et les call frames (par thread) ; le Heap contient les objets alloués (partagé entre threads), généralement découpé en young/old generation pour le GC.",
  },
  {
    question: "Difference between an interface and an abstract class (modern Java)?",
    answer:
      "An interface can have default/static methods but no instance state, and supports multiple inheritance; an abstract class can hold state and constructors but only allows single inheritance.",
    questionFr: "Différence entre une interface et une abstract class (Java moderne) ?",
    answerFr:
      "Une interface peut avoir des méthodes default/static mais pas d'état d'instance, et permet l'héritage multiple ; une abstract class peut avoir un état et des constructeurs mais n'autorise qu'un seul héritage.",
  },
  {
    question: "What is the Stream API and a typical pipeline?",
    answer:
      "A functional API for processing collections declaratively via lazy intermediate operations (`filter`, `map`) and a terminal operation (`collect`, `reduce`) that triggers the pipeline's execution.",
    questionFr: "Qu'est-ce que le Stream API et un pipeline typique ?",
    answerFr:
      "Une API fonctionnelle pour traiter des collections de façon déclarative via des opérations intermédiaires lazy (`filter`, `map`) et une opération terminale (`collect`, `reduce`) qui déclenche l'exécution du pipeline.",
  },
  {
    question: "How do generics and \"type erasure\" work?",
    answer:
      "Generics enforce type safety at compile time, but generic type information is erased at runtime (bytecode) - which is why you can't do `new T()` or `instanceof List<String>` directly.",
    questionFr: "Comment fonctionnent les generics et le \"type erasure\" ?",
    answerFr:
      "Les generics garantissent la type safety à la compilation, mais l'information de type générique est effacée au runtime (bytecode) - c'est pour ça qu'on ne peut pas faire `new T()` ou `instanceof List<String>` directement.",
  },
  {
    question: "What is a `CompletableFuture` and why is it useful?",
    answer:
      "It represents a composable asynchronous result (chaining via `thenApply`, `thenCompose`, combining via `thenCombine`), letting you write non-blocking async code without deeply nested callbacks.",
    questionFr: "Qu'est-ce qu'un `CompletableFuture` et pourquoi est-il utile ?",
    answerFr:
      "Il représente un résultat asynchrone composable (chaînage via `thenApply`, `thenCompose`, combinaison via `thenCombine`), permettant d'écrire du code async non bloquant sans callbacks imbriqués.",
  },
  {
    question: "Difference between checked and unchecked exceptions?",
    answer:
      "Checked exceptions (extending `Exception` but not `RuntimeException`) must be declared or caught at compile time; unchecked ones (`RuntimeException` and subclasses) don't require it, often used for programming errors.",
    questionFr: "Différence entre checked et unchecked exceptions ?",
    answerFr:
      "Les checked exceptions (héritant d'`Exception` mais pas de `RuntimeException`) doivent être déclarées ou catchées à la compilation ; les unchecked (`RuntimeException` et sous-classes) ne l'exigent pas, souvent utilisées pour des erreurs de programmation.",
  },
  {
    question: "What are Virtual Threads (Project Loom, Java 21+)?",
    answer:
      "Lightweight threads managed by the JVM (not 1:1 with OS threads), letting you block massively without exhausting system resources, simplifying blocking concurrent code at scale without resorting to reactive programming.",
    questionFr: "Que sont les Virtual Threads (Project Loom, Java 21+) ?",
    answerFr:
      "Des threads légers gérés par la JVM (pas en 1:1 avec les threads OS), permettant de bloquer massivement sans épuiser les ressources système, ce qui simplifie le code concurrent bloquant à grande échelle sans passer par la programmation réactive.",
  },
  {
    question: "How does the `volatile` keyword work?",
    answer:
      "It guarantees immediate visibility of writes to a variable across threads (no per-thread local caching) and prevents certain instruction reordering, but doesn't guarantee atomicity of compound operations (e.g. increment).",
    questionFr: "Comment fonctionne le mot-clé `volatile` ?",
    answerFr:
      "Il garantit la visibilité immédiate des écritures sur une variable entre threads (pas de cache local par thread) et empêche certains reorderings d'instructions, mais ne garantit pas l'atomicité des opérations composées (ex. un incrément).",
  },
  {
    question: "Difference between `synchronized` and `ReentrantLock`?",
    answer:
      "`synchronized` is simpler (block/method) and managed by the JVM; `ReentrantLock` offers finer control (timed tryLock, interruption, fair locks, multiple conditions) at the cost of explicit manual unlocking.",
    questionFr: "Différence entre `synchronized` et `ReentrantLock` ?",
    answerFr:
      "`synchronized` est plus simple (bloc/méthode) et géré par la JVM ; `ReentrantLock` offre un contrôle plus fin (tryLock avec timeout, interruption, locks équitables, conditions multiples) au prix d'un unlock manuel explicite.",
  },
];
