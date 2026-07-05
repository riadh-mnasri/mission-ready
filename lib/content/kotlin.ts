export const questions = [
  {
    question: "What is null-safety in Kotlin?",
    answer:
      "The type system distinguishes nullable types (`String?`) from non-nullable ones (`String`) at compile time, eliminating most `NullPointerException`s by forcing explicit handling of the null case (`?.`, `?:`, `!!`).",
  },
  {
    question: "Difference between `val` and `var`?",
    answer:
      "`val` declares a read-only reference (immutable once assigned, like `final` in Java); `var` declares a reassignable reference — Kotlin encourages `val` by default.",
  },
  {
    question: "What is a data class and what does it generate automatically?",
    answer:
      "A class designed to hold data; the compiler generates `equals()`, `hashCode()`, `toString()`, `copy()`, and destructuring components based on the primary constructor's properties.",
  },
  {
    question: "What is an extension function?",
    answer:
      "A function added to an existing type without modifying its source or inheriting from it (`fun String.lastChar(): Char`), resolved statically at compile time based on the declared type.",
  },
  {
    question: "Difference between a `sealed class` and an `enum class`?",
    answer:
      "An enum represents a fixed set of instances without complex differentiated state; a sealed class allows subtypes with different data per variant, while still guaranteeing exhaustiveness of a `when` at compile time.",
  },
  {
    question: "How do coroutines work at a high level?",
    answer:
      "A concurrency model based on suspendable functions (`suspend`) that free up the thread during a wait instead of blocking it, orchestrated by a `CoroutineScope` and a dispatcher (e.g. `Dispatchers.IO`), enabling lightweight concurrency without nested callbacks.",
  },
  {
    question: "Difference between `launch` and `async` in coroutines?",
    answer:
      "`launch` starts a \"fire and forget\" coroutine returning a `Job` (no direct result); `async` starts a coroutine that returns a `Deferred<T>` whose result you retrieve via `.await()`.",
  },
  {
    question: "What are scope functions (`let`, `apply`, `run`, `also`, `with`) and how do you choose between them?",
    answer:
      "Generic extension functions that execute a block in the context of an object; the choice depends on whether you want the block's result or the object itself (`apply`/`also`), and whether you reference the object via `this` or `it`.",
  },
  {
    question: "How does Kotlin interoperate with Java?",
    answer:
      "It compiles to the same JVM bytecode, allowing calls in both directions; Kotlin adds annotations (`@JvmStatic`, `@JvmOverloads`) to expose a more idiomatic API to Java, and treats Java types as \"platform types\" (nullability not guaranteed by the compiler).",
  },
  {
    question: "What is a companion object?",
    answer:
      "A singleton attached to a class (the closest equivalent to a Java `static` member), which can implement interfaces and is often used for factory methods or class-related constants.",
  },
  {
    question: "Difference between `List` and `MutableList` in Kotlin?",
    answer:
      "`List` only exposes read operations (interface-level immutability, not necessarily of the underlying object); `MutableList` adds mutating operations (`add`, `remove`) — the distinction is at the type level, not the runtime level.",
  },
  {
    question: "What are type inference and smart casts?",
    answer:
      "The compiler infers types without explicit annotation, and after a successful `is`/null check, it automatically \"casts\" the variable to the checked type within that scope, with no manual cast needed.",
  },
];
