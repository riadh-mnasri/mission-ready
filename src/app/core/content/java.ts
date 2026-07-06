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
  {
    question: "What are Java records and what do they generate for you?",
    answer:
      "A concise syntax for immutable data carriers: declaring `record Point(int x, int y)` generates a canonical constructor, accessor methods, `equals()`, `hashCode()`, and `toString()`, removing the boilerplate of a manual immutable value class.",
    questionFr: "Que sont les records Java et que génèrent-ils automatiquement ?",
    answerFr:
      "Une syntaxe concise pour des porteurs de données immuables : déclarer `record Point(int x, int y)` génère un constructeur canonique, des méthodes d'accès, `equals()`, `hashCode()`, et `toString()`, supprimant le boilerplate d'une classe de valeur immuable écrite à la main.",
  },
  {
    question: "What do sealed classes/interfaces add, combined with pattern matching for switch?",
    answer:
      "A sealed type declares exactly which classes are allowed to extend/implement it; combined with pattern matching in a `switch`, the compiler can verify exhaustiveness (every permitted subtype is handled), catching missing cases at compile time instead of at runtime.",
    questionFr: "Qu'apportent les sealed classes/interfaces, combinées au pattern matching pour switch ?",
    answerFr:
      "Un type sealed déclare précisément quelles classes ont le droit de l'étendre/l'implémenter ; combiné au pattern matching dans un `switch`, le compilateur peut vérifier l'exhaustivité (chaque sous-type autorisé est géré), détectant les cas manquants à la compilation plutôt qu'à l'exécution.",
  },
  {
    question: "What's a common misuse of `Optional` that best practices warn against?",
    answer:
      "Using `Optional` as a field type or a method parameter type (it was designed as a return type to signal \"may be absent\" to a caller), or calling `.get()` without checking presence first, which just relocates the null-check problem instead of solving it.",
    questionFr: "Quel mésusage courant d'`Optional` les bonnes pratiques déconseillent-elles ?",
    answerFr:
      "Utiliser `Optional` comme type de champ ou comme type de paramètre de méthode (il a été conçu comme type de retour pour signaler \"peut être absent\" à un appelant), ou appeler `.get()` sans vérifier la présence d'abord, ce qui ne fait que déplacer le problème du null-check plutôt que de le résoudre.",
  },
  {
    question: "What is a ClassLoader and why does it matter in frameworks like application servers?",
    answer:
      "The JVM component that finds and loads class bytecode at runtime, organized hierarchically (bootstrap, platform, application, and custom loaders); frameworks use custom class loaders for hot-reloading, plugin isolation, or running multiple app versions side by side without class conflicts.",
    questionFr: "Qu'est-ce qu'un ClassLoader et pourquoi est-ce important dans des frameworks comme les serveurs d'application ?",
    answerFr:
      "Le composant de la JVM qui trouve et charge le bytecode des classes à l'exécution, organisé hiérarchiquement (bootstrap, platform, application, et loaders custom) ; les frameworks utilisent des class loaders custom pour le hot-reloading, l'isolation de plugins, ou faire tourner plusieurs versions d'une app côte à côte sans conflit de classes.",
  },
  {
    question: "What is the difference between JIT compilation and a tool like GraalVM native image (AOT)?",
    answer:
      "JIT (Just-In-Time) compiles hot bytecode paths to native code at runtime, trading a warm-up period for adaptive optimization based on real execution profiles; AOT (Ahead-Of-Time, as in GraalVM native image) compiles everything to a native binary before startup, giving near-instant startup and lower memory at the cost of losing some runtime adaptive optimizations and reflection support.",
    questionFr: "Quelle est la différence entre la compilation JIT et un outil comme GraalVM native image (AOT) ?",
    answerFr:
      "Le JIT (Just-In-Time) compile les chemins de bytecode chauds en code natif à l'exécution, échangeant une période de warm-up contre une optimisation adaptative basée sur les profils d'exécution réels ; l'AOT (Ahead-Of-Time, comme GraalVM native image) compile tout en binaire natif avant le démarrage, offrant un démarrage quasi instantané et moins de mémoire au prix de la perte de certaines optimisations adaptatives à l'exécution et du support de la réflexion.",
  },
  {
    question: "What are common causes of memory leaks in a garbage-collected language like Java?",
    answer:
      "Objects that stay reachable longer than intended: unbounded caches with no eviction, listeners/callbacks never unregistered, static collections that keep growing, and ThreadLocal values not cleaned up in pooled threads (e.g. in application servers), all keeping objects alive despite the GC working correctly.",
    questionFr: "Quelles sont les causes courantes de fuites mémoire dans un langage garbage-collected comme Java ?",
    answerFr:
      "Des objets qui restent atteignables plus longtemps que prévu : des caches non bornés sans éviction, des listeners/callbacks jamais désenregistrés, des collections statiques qui grossissent sans fin, et des valeurs ThreadLocal non nettoyées dans des threads poolés (ex. dans des serveurs d'application), tout cela gardant des objets vivants malgré un GC qui fonctionne correctement.",
  },
  {
    question: "Difference between `List.of()` and `Arrays.asList()`?",
    answer:
      "`List.of()` returns a truly immutable list (any mutation attempt throws `UnsupportedOperationException`) and rejects null elements; `Arrays.asList()` returns a fixed-size view backed by the original array where `set()` works and mutates the array, but `add()`/`remove()` still throw, a middle ground that often surprises people.",
    questionFr: "Différence entre `List.of()` et `Arrays.asList()` ?",
    answerFr:
      "`List.of()` retourne une liste réellement immuable (toute tentative de mutation lève `UnsupportedOperationException`) et rejette les éléments null ; `Arrays.asList()` retourne une vue de taille fixe adossée au tableau d'origine où `set()` fonctionne et modifie le tableau, mais `add()`/`remove()` lèvent quand même une exception, un entre-deux qui surprend souvent.",
  },
  {
    question: "What is the Fork/Join framework used for?",
    answer:
      "A framework for recursively splitting a large task into smaller subtasks executed in parallel across a pool of worker threads, each idle thread able to \"steal\" work from busier ones (work-stealing); it's what `parallelStream()` uses under the hood for CPU-bound divide-and-conquer workloads.",
    questionFr: "À quoi sert le framework Fork/Join ?",
    answerFr:
      "Un framework pour découper récursivement une grande tâche en sous-tâches plus petites exécutées en parallèle sur un pool de threads travailleurs, chaque thread inactif pouvant \"voler\" du travail aux threads plus occupés (work-stealing) ; c'est ce qu'utilise `parallelStream()` en interne pour des charges CPU-bound de type diviser-pour-régner.",
  },
  {
    question: "What is try-with-resources and what interface makes a type eligible for it?",
    answer:
      "A syntax (`try (var r = openResource()) { ... }`) that automatically calls `close()` on the resource at the end of the block, even if an exception is thrown; any type implementing `AutoCloseable` (or the stricter `Closeable`) is eligible, removing the need for manual `finally` blocks to release files, connections, or streams.",
    questionFr: "Qu'est-ce que try-with-resources et quelle interface rend un type éligible ?",
    answerFr:
      "Une syntaxe (`try (var r = openResource()) { ... }`) qui appelle automatiquement `close()` sur la ressource à la fin du bloc, même si une exception est levée ; tout type implémentant `AutoCloseable` (ou le plus strict `Closeable`) est éligible, supprimant le besoin de blocs `finally` manuels pour libérer fichiers, connexions ou streams.",
  },
  {
    question: "Difference between `Comparable` and `Comparator`?",
    answer:
      "`Comparable` is implemented by the class itself to define its single \"natural\" ordering (via `compareTo`); `Comparator` is a separate object defining an ordering from the outside, letting you sort the same type in multiple different ways (e.g. by name, then separately by date) without touching the class.",
    questionFr: "Différence entre `Comparable` et `Comparator` ?",
    answerFr:
      "`Comparable` est implémenté par la classe elle-même pour définir son unique ordre \"naturel\" (via `compareTo`) ; `Comparator` est un objet séparé qui définit un ordre depuis l'extérieur, permettant de trier le même type de plusieurs façons différentes (ex. par nom, puis séparément par date) sans toucher à la classe.",
  },
  {
    question: "What problem does the Java Platform Module System (JPMS, `module-info.java`) address?",
    answer:
      "Before modules, any public class on the classpath was accessible from anywhere (\"JAR hell\" with no real encapsulation at the package level); JPMS lets a module explicitly declare which packages it `exports` and which modules it `requires`, enforcing strong encapsulation of internal packages even across JARs.",
    questionFr: "Quel problème résout le Java Platform Module System (JPMS, `module-info.java`) ?",
    answerFr:
      "Avant les modules, toute classe publique du classpath était accessible de partout (\"JAR hell\" sans réelle encapsulation au niveau package) ; JPMS permet à un module de déclarer explicitement quels packages il `exports` et de quels modules il `requires`, imposant une encapsulation forte des packages internes même à travers des JARs.",
  },
  {
    question: "Why is `Cloneable` considered a flawed way to copy an object, and what's usually preferred instead?",
    answer:
      "`Cloneable` is a marker interface with no `clone()` method of its own, relies on a fragile protocol (calling `super.clone()` correctly at every level, catching a checked `CloneNotSupportedException`), and defaults to a shallow copy that silently shares mutable fields; a copy constructor or a static factory method is usually clearer and safer.",
    questionFr: "Pourquoi `Cloneable` est-il considéré comme une façon boiteuse de copier un objet, et que préfère-t-on habituellement ?",
    answerFr:
      "`Cloneable` est une interface marqueur sans méthode `clone()` propre, repose sur un protocole fragile (appeler correctement `super.clone()` à chaque niveau, catcher une `CloneNotSupportedException` checked), et fait par défaut une copie superficielle qui partage silencieusement des champs mutables ; un constructeur de copie ou une méthode de fabrique statique est généralement plus clair et plus sûr.",
  },
];
