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
  {
    question: "What are delegated properties (`by lazy`, `by Delegates.observable`)?",
    answer:
      "A mechanism where a property's getter/setter logic is handed off to a separate delegate object implementing `getValue`/`setValue`, letting you reuse common patterns (lazy initialization, observable changes, storing in a map) without repeating boilerplate on every property.",
    questionFr: "Que sont les delegated properties (`by lazy`, `by Delegates.observable`) ?",
    answerFr:
      "Un mécanisme où la logique getter/setter d'une propriété est déléguée à un objet delegate séparé implémentant `getValue`/`setValue`, permettant de réutiliser des patterns courants (initialisation lazy, changements observables, stockage dans une map) sans répéter le boilerplate sur chaque propriété.",
  },
  {
    question: "What does `inline` do for a higher-order function, and what are reified generics?",
    answer:
      "`inline` copies the function's bytecode (and its lambda parameters') directly at each call site instead of allocating a function object, removing lambda overhead; combined with `reified` on a generic type parameter, it lets you access the actual type at runtime inside an inline function, which normal generics erase.",
    questionFr: "Que fait `inline` pour une fonction d'ordre supérieur, et que sont les reified generics ?",
    answerFr:
      "`inline` copie le bytecode de la fonction (et de ses paramètres lambda) directement à chaque site d'appel plutôt que d'allouer un objet fonction, supprimant l'overhead des lambdas ; combiné à `reified` sur un paramètre de type générique, ça permet d'accéder au vrai type à l'exécution à l'intérieur d'une fonction inline, ce que les generics normaux effacent.",
  },
  {
    question: "How do you build a type-safe DSL in Kotlin, and what role do lambdas with receivers play?",
    answer:
      "A DSL (like the Kotlin Gradle build script or HTML builders) is typically built from functions taking a lambda with receiver (`fun html(block: HTML.() -> Unit)`), so inside the block you're implicitly operating on the receiver's members, giving a nested, declarative syntax while staying fully type-checked.",
    questionFr: "Comment construit-on un DSL type-safe en Kotlin, et quel rôle jouent les lambdas avec receiver ?",
    answerFr:
      "Un DSL (comme le script de build Gradle Kotlin ou des builders HTML) est typiquement construit à partir de fonctions prenant une lambda avec receiver (`fun html(block: HTML.() -> Unit)`), donc à l'intérieur du bloc on opère implicitement sur les membres du receiver, offrant une syntaxe imbriquée et déclarative tout en restant entièrement type-checked.",
  },
  {
    question: "What is a Flow and how does it differ from a suspend function returning a single value?",
    answer:
      "A `Flow<T>` represents an asynchronous stream of multiple values over time (cold by default, computed on each collection), built on coroutines; a plain `suspend fun` returns exactly one value once, whereas `Flow` composes with operators like `map`/`filter`/`debounce` similarly to reactive streams but using coroutine primitives.",
    questionFr: "Qu'est-ce qu'un Flow et en quoi diffère-t-il d'une fonction suspend qui retourne une seule valeur ?",
    answerFr:
      "Un `Flow<T>` représente un flux asynchrone de plusieurs valeurs dans le temps (cold par défaut, recalculé à chaque collecte), construit sur les coroutines ; une simple `suspend fun` retourne exactement une valeur une fois, alors que `Flow` se compose avec des opérateurs comme `map`/`filter`/`debounce` un peu comme des reactive streams mais avec les primitives des coroutines.",
  },
  {
    question: "What is a value class (`@JvmInline value class`) and why use one?",
    answer:
      "A wrapper around a single value (e.g. `value class UserId(val value: String)`) that the compiler erases at the bytecode level where possible, giving you strong type safety (can't pass a raw String where a UserId is expected) with no runtime allocation overhead in most cases.",
    questionFr: "Qu'est-ce qu'une value class (`@JvmInline value class`) et pourquoi en utiliser une ?",
    answerFr:
      "Un wrapper autour d'une seule valeur (ex. `value class UserId(val value: String)`) que le compilateur efface au niveau du bytecode quand c'est possible, offrant une forte sécurité de type (impossible de passer un String brut là où un UserId est attendu) sans overhead d'allocation à l'exécution dans la plupart des cas.",
  },
  {
    question: "What is a `typealias` used for in Kotlin?",
    answer:
      "It gives an existing type (often a long generic type or a function type) an alternative, more meaningful name (e.g. `typealias UserId = String` or `typealias ClickHandler = (View) -> Unit`) purely for readability; it creates no new type, so a `UserId` and a `String` remain fully interchangeable to the compiler.",
    questionFr: "À quoi sert un `typealias` en Kotlin ?",
    answerFr:
      "Il donne à un type existant (souvent un type générique long ou un type fonction) un nom alternatif plus parlant (ex. `typealias UserId = String` ou `typealias ClickHandler = (View) -> Unit`) purement pour la lisibilité ; il ne crée aucun nouveau type, donc un `UserId` et un `String` restent totalement interchangeables pour le compilateur.",
  },
  {
    question: "What is Kotlin's `Result<T>` and how does it change error handling compared to throwing exceptions?",
    answer:
      "`Result<T>` wraps either a success value or a failure exception as a single return value, forcing callers to explicitly handle both branches (via `.fold()`, `.getOrElse()`) instead of relying on a possibly-uncaught thrown exception; it's especially useful at boundaries where you want error handling to be visible in the function's signature.",
    questionFr: "Qu'est-ce que `Result<T>` en Kotlin et en quoi change-t-il la gestion d'erreur par rapport à lever des exceptions ?",
    answerFr:
      "`Result<T>` enveloppe soit une valeur de succès soit une exception d'échec dans une seule valeur de retour, forçant les appelants à gérer explicitement les deux branches (via `.fold()`, `.getOrElse()`) plutôt que de compter sur une exception levée possiblement non catchée ; particulièrement utile aux frontières où l'on veut que la gestion d'erreur soit visible dans la signature de la fonction.",
  },
  {
    question: "What does the `tailrec` modifier do, and what must a function satisfy to use it?",
    answer:
      "The compiler rewrites a `tailrec` function's recursive call into a loop, avoiding stack growth (and `StackOverflowError`) for deep recursion; the function must be tail-recursive, meaning the recursive call is the very last operation performed, with no computation left to do after it returns.",
    questionFr: "Que fait le modificateur `tailrec`, et que doit satisfaire une fonction pour l'utiliser ?",
    answerFr:
      "Le compilateur réécrit une fonction `tailrec` en boucle au lieu d'un appel récursif, évitant la croissance de la pile (et un `StackOverflowError`) pour une récursion profonde ; la fonction doit être récursive terminale, c'est-à-dire que l'appel récursif est la toute dernière opération effectuée, sans calcul restant à faire après son retour.",
  },
  {
    question: "What's the difference between `Any`, `Any?`, and `Unit` in Kotlin's type system?",
    answer:
      "`Any` is the root of the non-nullable type hierarchy (roughly Kotlin's `Object`); `Any?` additionally allows null, sitting above `Any` since every type in Kotlin is implicitly nullable-or-not; `Unit` is the return type of functions that return no meaningful value (Kotlin's equivalent of `void`, but an actual singleton object rather than the absence of a type).",
    questionFr: "Quelle est la différence entre `Any`, `Any?` et `Unit` dans le système de types de Kotlin ?",
    answerFr:
      "`Any` est la racine de la hiérarchie de types non-nullable (à peu près l'équivalent de `Object`) ; `Any?` autorise en plus null, se plaçant au-dessus d'`Any` puisque chaque type en Kotlin est implicitement nullable ou non ; `Unit` est le type de retour des fonctions qui ne retournent aucune valeur significative (l'équivalent de `void` en Kotlin, mais un vrai objet singleton plutôt que l'absence de type).",
  },
  {
    question: "Difference between `StateFlow` and `SharedFlow`?",
    answer:
      "`StateFlow` always holds a current value (it needs an initial one) and only emits distinct-by-default state updates to collectors, modeling observable state; `SharedFlow` is more general, has no required initial value, and can be configured to replay a configurable number of past emissions to new collectors, modeling arbitrary event streams rather than just state.",
    questionFr: "Différence entre `StateFlow` et `SharedFlow` ?",
    answerFr:
      "`StateFlow` porte toujours une valeur courante (il en faut une initiale) et n'émet par défaut que des mises à jour d'état distinctes aux collecteurs, modélisant un état observable ; `SharedFlow` est plus général, n'a pas de valeur initiale requise, et peut être configuré pour rejouer un nombre configurable d'émissions passées aux nouveaux collecteurs, modélisant des flux d'événements arbitraires plutôt que juste un état.",
  },
  {
    question: "How does operator overloading work in Kotlin, and what's an example beyond arithmetic?",
    answer:
      "Marking a function `operator` and naming it after a conventional symbol (`plus`, `times`, `get`, `invoke`) lets instances of your type use that operator syntax directly (e.g. `money1 + money2`); beyond arithmetic, overloading `invoke` lets an object be called like a function (`myObject()`), which is how many Kotlin DSLs and functional-style APIs are built.",
    questionFr: "Comment fonctionne la surcharge d'opérateurs en Kotlin, et quel est un exemple au-delà de l'arithmétique ?",
    answerFr:
      "Marquer une fonction `operator` et la nommer d'après un symbole conventionnel (`plus`, `times`, `get`, `invoke`) permet aux instances de votre type d'utiliser directement cette syntaxe d'opérateur (ex. `money1 + money2`) ; au-delà de l'arithmétique, surcharger `invoke` permet d'appeler un objet comme une fonction (`monObjet()`), ce qui est la base de nombreux DSL Kotlin et API de style fonctionnel.",
  },
];
