export const questions = [
  {
    question: "What is null-safety in Kotlin?",
    answer:
      "The type system distinguishes nullable types (`String?`) from non-nullable ones (`String`) at compile time, eliminating most `NullPointerException`s by forcing explicit handling of the null case (`?.`, `?:`, `!!`).",
    questionFr: "Qu'est-ce que la null-safety en Kotlin ?",
    answerFr:
      "Le système de types distingue les types nullable (`String?`) des non-nullable (`String`) à la compilation, ce qui élimine la plupart des `NullPointerException` en forçant à gérer explicitement le cas null (`?.`, `?:`, `!!`).",
  },
  {
    question: "Difference between `val` and `var`?",
    answer:
      "`val` declares a read-only reference (immutable once assigned, like `final` in Java); `var` declares a reassignable reference - Kotlin encourages `val` by default.",
    questionFr: "Différence entre `val` et `var` ?",
    answerFr:
      "`val` déclare une référence en lecture seule (immuable une fois assignée, comme `final` en Java) ; `var` déclare une référence réassignable - Kotlin encourage `val` par défaut.",
  },
  {
    question: "What is a data class and what does it generate automatically?",
    answer:
      "A class designed to hold data; the compiler generates `equals()`, `hashCode()`, `toString()`, `copy()`, and destructuring components based on the primary constructor's properties.",
    questionFr: "Qu'est-ce qu'une data class et que génère-t-elle automatiquement ?",
    answerFr:
      "Une classe pensée pour porter des données ; le compilateur génère `equals()`, `hashCode()`, `toString()`, `copy()`, et les composants de destructuring à partir des propriétés du constructeur primaire.",
  },
  {
    question: "What is an extension function?",
    answer:
      "A function added to an existing type without modifying its source or inheriting from it (`fun String.lastChar(): Char`), resolved statically at compile time based on the declared type.",
    questionFr: "Qu'est-ce qu'une extension function ?",
    answerFr:
      "Une fonction ajoutée à un type existant sans modifier son code source ni en hériter (`fun String.lastChar(): Char`), résolue statiquement à la compilation selon le type déclaré.",
  },
  {
    question: "Difference between a `sealed class` and an `enum class`?",
    answer:
      "An enum represents a fixed set of instances without complex differentiated state; a sealed class allows subtypes with different data per variant, while still guaranteeing exhaustiveness of a `when` at compile time.",
    questionFr: "Différence entre une `sealed class` et une `enum class` ?",
    answerFr:
      "Un enum représente un ensemble fixe d'instances sans état différencié complexe ; une sealed class permet des sous-types avec des données différentes par variante, tout en garantissant l'exhaustivité d'un `when` à la compilation.",
  },
  {
    question: "How do coroutines work at a high level?",
    answer:
      "A concurrency model based on suspendable functions (`suspend`) that free up the thread during a wait instead of blocking it, orchestrated by a `CoroutineScope` and a dispatcher (e.g. `Dispatchers.IO`), enabling lightweight concurrency without nested callbacks.",
    questionFr: "Comment fonctionnent les coroutines à haut niveau ?",
    answerFr:
      "Un modèle de concurrence basé sur des fonctions suspendables (`suspend`) qui libèrent le thread pendant une attente au lieu de le bloquer, orchestrées par un `CoroutineScope` et un dispatcher (ex. `Dispatchers.IO`), permettant de la concurrence légère sans callbacks imbriqués.",
  },
  {
    question: "Difference between `launch` and `async` in coroutines?",
    answer:
      "`launch` starts a \"fire and forget\" coroutine returning a `Job` (no direct result); `async` starts a coroutine that returns a `Deferred<T>` whose result you retrieve via `.await()`.",
    questionFr: "Différence entre `launch` et `async` en coroutines ?",
    answerFr:
      "`launch` démarre une coroutine \"fire and forget\" qui retourne un `Job` (pas de résultat direct) ; `async` démarre une coroutine qui retourne un `Deferred<T>` dont on récupère le résultat via `.await()`.",
  },
  {
    question:
      "What are scope functions (`let`, `apply`, `run`, `also`, `with`) and how do you choose between them?",
    answer:
      "Generic extension functions that execute a block in the context of an object; the choice depends on whether you want the block's result or the object itself (`apply`/`also`), and whether you reference the object via `this` or `it`.",
    questionFr:
      "Que sont les scope functions (`let`, `apply`, `run`, `also`, `with`) et comment choisir entre elles ?",
    answerFr:
      "Des extension functions génériques qui exécutent un bloc dans le contexte d'un objet ; le choix dépend de si on veut le résultat du bloc ou l'objet lui-même (`apply`/`also`), et si on référence l'objet via `this` ou `it`.",
  },
  {
    question: "How does Kotlin interoperate with Java?",
    answer:
      "It compiles to the same JVM bytecode, allowing calls in both directions; Kotlin adds annotations (`@JvmStatic`, `@JvmOverloads`) to expose a more idiomatic API to Java, and treats Java types as \"platform types\" (nullability not guaranteed by the compiler).",
    questionFr: "Comment Kotlin interagit-il avec Java ?",
    answerFr:
      "Il compile vers le même bytecode JVM, permettant des appels dans les deux sens ; Kotlin ajoute des annotations (`@JvmStatic`, `@JvmOverloads`) pour exposer une API plus idiomatique côté Java, et traite les types Java comme des \"platform types\" (nullabilité non garantie par le compilateur).",
  },
  {
    question: "What is a companion object?",
    answer:
      "A singleton attached to a class (the closest equivalent to a Java `static` member), which can implement interfaces and is often used for factory methods or class-related constants.",
    questionFr: "Qu'est-ce qu'un companion object ?",
    answerFr:
      "Un singleton attaché à une classe (l'équivalent le plus proche d'un membre `static` Java), qui peut implémenter des interfaces et sert souvent pour des factory methods ou des constantes liées à la classe.",
  },
  {
    question: "Difference between `List` and `MutableList` in Kotlin?",
    answer:
      "`List` only exposes read operations (interface-level immutability, not necessarily of the underlying object); `MutableList` adds mutating operations (`add`, `remove`) - the distinction is at the type level, not the runtime level.",
    questionFr: "Différence entre `List` et `MutableList` en Kotlin ?",
    answerFr:
      "`List` n'expose que des opérations de lecture (immutabilité au niveau de l'interface, pas forcément de l'objet sous-jacent) ; `MutableList` ajoute des opérations de mutation (`add`, `remove`) - la distinction se fait au niveau du type, pas du runtime.",
  },
  {
    question: "What are type inference and smart casts?",
    answer:
      "The compiler infers types without explicit annotation, and after a successful `is`/null check, it automatically \"casts\" the variable to the checked type within that scope, with no manual cast needed.",
    questionFr: "Que sont l'inférence de type et les smart casts ?",
    answerFr:
      "Le compilateur déduit les types sans annotation explicite, et après un check `is`/null réussi, il \"caste\" automatiquement la variable au type vérifié dans ce scope, sans cast manuel nécessaire.",
  },
];
