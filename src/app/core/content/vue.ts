export const questions = [
  {
    question:
      "How does Vue 3's reactivity system work under the hood, and what changed from Vue 2?",
    answer:
      "Vue 3 wraps reactive objects in a JavaScript `Proxy`, intercepting property get/set to track dependencies and trigger updates, which lets it detect new property additions and array index/length changes that Vue 2's `Object.defineProperty`-based approach (which had to pre-define getters/setters per known property) couldn't reliably catch without extra workarounds like `Vue.set`.",
    questionFr:
      "Comment fonctionne le système de réactivité de Vue 3 en interne, et qu'est-ce qui a changé par rapport à Vue 2 ?",
    answerFr:
      "Vue 3 enveloppe les objets réactifs dans un `Proxy` JavaScript, interceptant les get/set de propriétés pour suivre les dépendances et déclencher des mises à jour, ce qui lui permet de détecter des ajouts de nouvelles propriétés et des changements d'index/longueur de tableau que l'approche de Vue 2 basée sur `Object.defineProperty` (qui devait prédéfinir des getters/setters par propriété connue) ne pouvait pas capter de façon fiable sans contournements comme `Vue.set`.",
  },
  {
    question:
      'Why was the Composition API introduced alongside the Options API, and what problem does it solve?',
    answer:
      'The Options API organizes a component by option type (data, methods, computed), which scatters the code for one logical feature across multiple sections as a component grows; the Composition API lets you group all the code for a single concern together in a `setup()` function (or `<script setup>`), and lets that logic be extracted into reusable composables the same way custom hooks work in React.',
    questionFr:
      "Pourquoi la Composition API a-t-elle été introduite en plus de l'Options API, et quel problème résout-elle ?",
    answerFr:
      "L'Options API organise un composant par type d'option (data, methods, computed), ce qui éparpille le code d'une même fonctionnalité logique sur plusieurs sections à mesure qu'un composant grossit ; la Composition API permet de regrouper tout le code d'une même préoccupation dans une fonction `setup()` (ou `<script setup>`), et permet d'extraire cette logique en composables réutilisables, à la manière des custom hooks en React.",
  },
  {
    question: "ref vs reactive - what's the practical difference in how you use them?",
    answer:
      '`ref` wraps a single value (primitive or object) and requires `.value` to read/write it in script code (unwrapped automatically in templates); `reactive` wraps a whole object directly with no `.value` needed, but loses reactivity if you destructure a property out of it - which is why `ref` is generally the safer default for values passed around or returned from composables.',
    questionFr: 'ref vs reactive - quelle est la différence pratique dans leur usage ?',
    answerFr:
      "`ref` enveloppe une seule valeur (primitive ou objet) et nécessite `.value` pour la lire/écrire dans le code script (déballé automatiquement dans les templates) ; `reactive` enveloppe directement tout un objet sans besoin de `.value`, mais perd la réactivité si l'on en déstructure une propriété - c'est pourquoi `ref` est généralement le choix par défaut le plus sûr pour des valeurs passées ou retournées par des composables.",
  },
  {
    question: 'computed vs watch vs watchEffect - when do you reach for each?',
    answer:
      '`computed` derives and caches a new value from reactive sources, recomputed only when a dependency changes - use it whenever you need a value. `watch` reacts to specific source(s) changing, giving you both the old and new value, typically for side effects tied to one known dependency. `watchEffect` auto-tracks whatever reactive values it reads inside itself and reruns on any of their changes, convenient when the dependency list would otherwise be tedious to maintain by hand.',
    questionFr: 'computed vs watch vs watchEffect - quand utiliser chacun ?',
    answerFr:
      "`computed` dérive et met en cache une nouvelle valeur à partir de sources réactives, recalculée seulement quand une dépendance change - à utiliser dès qu'on a besoin d'une valeur. `watch` réagit au changement de source(s) spécifiques, donnant à la fois l'ancienne et la nouvelle valeur, typiquement pour des effets de bord liés à une dépendance connue. `watchEffect` suit automatiquement les valeurs réactives qu'il lit en son sein et se rejoue à chacun de leurs changements, pratique quand la liste de dépendances serait autrement fastidieuse à maintenir à la main.",
  },
  {
    question:
      'What does v-model actually desugar to, and why does that matter for building a custom component that supports it?',
    answer:
      'On a native input, `v-model` is sugar for binding `:value` and listening for an `@input`/`@change` event that updates the bound variable; for a custom component to support `v-model`, it needs to accept a `modelValue` prop and emit an `update:modelValue` event with the new value - understanding this desugaring is what lets you build components (custom inputs, toggles) that integrate with `v-model` naturally.',
    questionFr:
      'En quoi v-model se désucre-t-il réellement, et pourquoi cela compte-t-il pour construire un composant custom qui le supporte ?',
    answerFr:
      "Sur un input natif, `v-model` est du sucre syntaxique pour lier `:value` et écouter un événement `@input`/`@change` qui met à jour la variable liée ; pour qu'un composant custom supporte `v-model`, il doit accepter une prop `modelValue` et émettre un événement `update:modelValue` avec la nouvelle valeur - comprendre ce désucrage est ce qui permet de construire des composants (inputs custom, toggles) qui s'intègrent naturellement avec `v-model`.",
  },
  {
    question:
      'What are the three sections of a Single File Component (.vue), and what does bundling them together buy you?',
    answer:
      "`<template>` (markup), `<script>` (logic), and `<style>` (CSS, optionally `scoped` to that component) live in one file; bundling them keeps a component's markup, behavior, and styling co-located and reviewable as one unit, while the build tool still compiles each section appropriately (template to render function, scoped styles to uniquely-attributed selectors) rather than shipping them as one opaque blob.",
    questionFr:
      "Quelles sont les trois sections d'un Single File Component (.vue), et qu'apporte le fait de les regrouper ?",
    answerFr:
      "`<template>` (le markup), `<script>` (la logique), et `<style>` (le CSS, optionnellement `scoped` à ce composant) vivent dans un seul fichier ; les regrouper garde le markup, le comportement et le style d'un composant co-localisés et relisibles comme une seule unité, tandis que l'outil de build compile quand même chaque section de façon appropriée (template vers fonction de render, styles scoped vers des sélecteurs uniquement attribués) plutôt que de les livrer comme un bloc opaque.",
  },
  {
    question:
      "How does Vue's template compiler approach rendering differently from React's runtime Virtual DOM diffing?",
    answer:
      'Vue compiles templates ahead of time into optimized render functions, using static analysis to mark parts of the template that can never change ("static hoisting") and skip diffing them entirely, and to track exactly which dynamic bindings exist per element ("patch flags") so updates target only what could have actually changed - a compile-time optimization React\'s JSX-as-plain-JavaScript approach doesn\'t have the same opportunity to perform.',
    questionFr:
      "Comment le compilateur de templates de Vue aborde-t-il le rendu différemment du diffing Virtual DOM à l'exécution de React ?",
    answerFr:
      'Vue compile les templates en amont en fonctions de render optimisées, utilisant une analyse statique pour marquer les parties du template qui ne peuvent jamais changer ("static hoisting") et éviter complètement de les differ, et pour suivre exactement quelles liaisons dynamiques existent par élément ("patch flags") pour que les mises à jour ne ciblent que ce qui a pu réellement changer - une optimisation à la compilation que l\'approche JSX-comme-JavaScript-classique de React n\'a pas la même opportunité de réaliser.',
  },
  {
    question:
      'What do provide/inject solve, and how do they compare to Vuex/Pinia for sharing state across a component tree?',
    answer:
      "`provide`/`inject` let an ancestor component make a value available to any descendant without passing it through every intermediate component's props (avoiding prop drilling), similar in spirit to React's Context; it's suited to scoped, tree-local dependencies (a theme, a form context), whereas Pinia/Vuex are meant for genuinely global, app-wide state with devtools, time-travel debugging, and a single predictable source of truth.",
    questionFr:
      'Que résolvent provide/inject, et comment se comparent-ils à Vuex/Pinia pour partager du state à travers un arbre de composants ?',
    answerFr:
      "`provide`/`inject` permettent à un composant ancêtre de rendre une valeur disponible à n'importe quel descendant sans la faire passer par les props de chaque composant intermédiaire (évitant le prop drilling), dans le même esprit que le Context de React ; c'est adapté à des dépendances scopées, locales à un arbre (un thème, un contexte de formulaire), tandis que Pinia/Vuex sont pensés pour du state réellement global à l'échelle de l'app, avec devtools, débogage time-travel, et une seule source de vérité prévisible.",
  },
  {
    question: 'Why did Pinia replace Vuex as the recommended state management library for Vue?',
    answer:
      "Pinia drops Vuex's mutations/actions distinction (a single action can now mutate state directly), has first-class TypeScript inference without extra boilerplate, works without a root store/module nesting ceremony, and integrates naturally with the Composition API - solving the ergonomic friction that made Vuex noticeably more verbose than equivalent state management in other ecosystems.",
    questionFr:
      'Pourquoi Pinia a-t-il remplacé Vuex comme librairie de gestion de state recommandée pour Vue ?',
    answerFr:
      "Pinia supprime la distinction mutations/actions de Vuex (une action peut désormais muter le state directement), a une inférence TypeScript de premier ordre sans boilerplate supplémentaire, fonctionne sans la cérémonie d'un store racine/imbrication de modules, et s'intègre naturellement avec la Composition API - résolvant la friction ergonomique qui rendait Vuex nettement plus verbeux que la gestion de state équivalente dans d'autres écosystèmes.",
  },
  {
    question: 'What are navigation guards in Vue Router, and what class of problem do they solve?',
    answer:
      'Functions (global, per-route, or in-component) that run before, during, or after a navigation and can allow it, redirect it, or cancel it - used for cross-cutting concerns like authentication checks, unsaved-changes confirmation, or data prefetching, keeping that logic out of every individual page component and centralized around the routing layer instead.',
    questionFr:
      'Que sont les navigation guards dans Vue Router, et quel type de problème résolvent-ils ?',
    answerFr:
      "Des fonctions (globales, par route, ou dans un composant) qui s'exécutent avant, pendant, ou après une navigation et peuvent l'autoriser, la rediriger, ou l'annuler - utilisées pour des préoccupations transverses comme des vérifications d'authentification, une confirmation de changements non sauvegardés, ou du préchargement de données, gardant cette logique hors de chaque composant de page individuel et centralisée autour de la couche de routage.",
  },
  {
    question:
      "What are the three kinds of slots in Vue, and what does a scoped slot let a child do that a default slot can't?",
    answer:
      "Default slots pass content into one unnamed placeholder; named slots let a component expose multiple distinct content areas; scoped slots let the child component pass data back up to the parent's slot content (e.g. an item from a list it's iterating over), so the parent can customize how each item renders while the child still owns the iteration and layout logic.",
    questionFr:
      "Quels sont les trois types de slots en Vue, et qu'est-ce qu'un scoped slot permet à l'enfant que ne permet pas un slot par défaut ?",
    answerFr:
      "Les slots par défaut passent du contenu dans un emplacement unique sans nom ; les slots nommés permettent à un composant d'exposer plusieurs zones de contenu distinctes ; les scoped slots permettent au composant enfant de renvoyer des données vers le contenu du slot du parent (un élément d'une liste qu'il itère, par exemple), pour que le parent puisse personnaliser le rendu de chaque élément tout en laissant l'enfant posséder la logique d'itération et de mise en page.",
  },
  {
    question:
      "What's the difference between a built-in directive like v-if/v-show and a custom directive?",
    answer:
      "Built-in directives like `v-if` (conditionally add/remove from the DOM) and `v-show` (toggle CSS display, always kept in the DOM) control structural rendering; a custom directive gives low-level, imperative access to an element's underlying DOM node itself (e.g. auto-focusing an input, integrating a non-Vue library) through lifecycle hooks like `mounted` and `updated`, for behavior that isn't naturally expressed as reactive template bindings.",
    questionFr:
      'Quelle est la différence entre une directive intégrée comme v-if/v-show et une directive custom ?',
    answerFr:
      "Les directives intégrées comme `v-if` (ajouter/retirer conditionnellement du DOM) et `v-show` (basculer le display CSS, toujours gardé dans le DOM) contrôlent le rendu structurel ; une directive custom donne un accès bas niveau et impératif au nœud DOM sous-jacent d'un élément (autofocus d'un input, intégration d'une librairie non-Vue) via des hooks de cycle de vie comme `mounted` et `updated`, pour un comportement qui ne s'exprime pas naturellement comme des liaisons de template réactives.",
  },
  {
    question:
      "What do defineProps and defineEmits do inside <script setup>, and why don't they need to be imported?",
    answer:
      "They're compiler macros: `defineProps` declares and types a component's props, `defineEmits` declares the events it can emit, and both are compiled away entirely by Vue's `<script setup>` compiler into the equivalent plain component options - they exist only at compile time as a syntax the compiler recognizes, which is why they work without an import despite looking like regular function calls.",
    questionFr:
      "Que font defineProps et defineEmits dans <script setup>, et pourquoi n'ont-ils pas besoin d'être importés ?",
    answerFr:
      "Ce sont des macros de compilation : `defineProps` déclare et type les props d'un composant, `defineEmits` déclare les événements qu'il peut émettre, et les deux sont entièrement effacés par le compilateur `<script setup>` de Vue au profit des options de composant classiques équivalentes - ils n'existent qu'à la compilation comme une syntaxe reconnue par le compilateur, ce qui explique qu'ils fonctionnent sans import malgré leur apparence d'appels de fonction classiques.",
  },
  {
    question:
      "What's the classic reactivity-loss pitfall when destructuring a reactive object, and how do you avoid it?",
    answer:
      'Destructuring a property out of a `reactive()` object copies its current primitive value into a plain, non-reactive variable, so further changes to the source no longer propagate to it; the fix is to keep the property access on the object (`state.count`) or convert it to a `ref` with `toRef`/`toRefs`, which preserves the live reactive connection instead of a one-time snapshot.',
    questionFr:
      "Quel est le piège classique de perte de réactivité en déstructurant un objet reactive, et comment l'éviter ?",
    answerFr:
      "Déstructurer une propriété d'un objet `reactive()` copie sa valeur primitive actuelle dans une variable simple, non réactive, donc les changements ultérieurs de la source ne s'y propagent plus ; la solution est de garder l'accès à la propriété sur l'objet (`state.count`) ou de la convertir en `ref` avec `toRef`/`toRefs`, ce qui préserve la connexion réactive vivante plutôt qu'un instantané ponctuel.",
  },
  {
    question:
      'What does Nuxt add on top of plain Vue, comparable to what Next.js adds on top of React?',
    answer:
      'File-based routing, server-side rendering and static site generation out of the box, an auto-import system for components and composables, and a unified data-fetching layer - removing the setup and configuration a team would otherwise hand-roll around plain Vue to get a production-grade, SEO-friendly, server-rendered application.',
    questionFr:
      "Qu'apporte Nuxt par-dessus Vue seul, comparable à ce que Next.js apporte par-dessus React ?",
    answerFr:
      "Un routage basé sur les fichiers, du rendu côté serveur et de la génération de site statique prêts à l'emploi, un système d'auto-import pour les composants et composables, et une couche de fetching de données unifiée - supprimant la configuration qu'une équipe devrait sinon assembler à la main autour de Vue seul pour obtenir une application de qualité production, SEO-friendly et rendue côté serveur.",
  },
  {
    question:
      'What is Teleport used for in Vue, and how does it compare conceptually to a React Portal?',
    answer:
      "Teleport moves a component's rendered content to a different location in the actual DOM (commonly `document.body`) while keeping it logically part of the same component in the Vue instance tree, exactly mirroring what a Portal does in React - both exist to let modals, tooltips, and overlays escape a parent's CSS stacking/overflow constraints without breaking the component's logical parent-child relationship.",
    questionFr:
      'À quoi sert Teleport dans Vue, et comment se compare-t-il conceptuellement à un Portal React ?',
    answerFr:
      "Teleport déplace le contenu rendu d'un composant vers un autre endroit du DOM réel (souvent `document.body`) tout en le gardant logiquement partie du même composant dans l'arbre d'instance Vue, reflétant exactement ce que fait un Portal en React - les deux existent pour permettre aux modales, tooltips et overlays d'échapper aux contraintes d'empilement/overflow CSS d'un parent sans casser la relation logique parent-enfant du composant.",
  },
  {
    question:
      "What does Vue's built-in Suspense component coordinate, and what's its current stability caveat?",
    answer:
      'It shows fallback content while descendant components perform async setup (e.g. an async `setup()` function awaiting a fetch), similar in purpose to React Suspense; unlike many other Vue 3 features, it has shipped as an experimental feature for several releases, so relying on it in a production codebase means accepting that its API could still change in a future version.',
    questionFr:
      'Que coordonne le composant Suspense intégré de Vue, et quelle est sa réserve de stabilité actuelle ?',
    answerFr:
      "Il affiche un contenu de repli tant que des composants descendants effectuent un setup asynchrone (une fonction `setup()` async qui attend un fetch, par exemple), dans le même but que Suspense en React ; contrairement à beaucoup d'autres fonctionnalités de Vue 3, il est resté une fonctionnalité expérimentale sur plusieurs versions, donc s'y fier dans un codebase de production signifie accepter que son API puisse encore changer dans une future version.",
  },
  {
    question:
      "What does Vue Test Utils' component mounting approach let you verify that a shallow snapshot test doesn't?",
    answer:
      "Mounting a component (fully or shallowly) gives access to its rendered output, emitted events, and props/state for assertions driven by actual user-facing behavior - clicking a button and checking the resulting DOM or emitted event - rather than just diffing a serialized snapshot, which catches unintended output changes but says nothing about whether the component's behavior is actually correct.",
    questionFr:
      "Que permet de vérifier l'approche de montage de composant de Vue Test Utils qu'un simple test de snapshot superficiel ne permet pas ?",
    answerFr:
      "Monter un composant (complètement ou superficiellement) donne accès à son rendu, ses événements émis, et ses props/state pour des assertions pilotées par un comportement réellement visible par l'utilisateur - cliquer sur un bouton et vérifier le DOM résultant ou l'événement émis - plutôt que de simplement differ un snapshot sérialisé, ce qui détecte des changements de sortie non voulus mais ne dit rien sur si le comportement du composant est réellement correct.",
  },
  {
    question:
      "What's the core philosophical difference between Vue's template-based approach and React's JSX, beyond syntax preference?",
    answer:
      "Vue templates are a constrained, HTML-like DSL the compiler can statically analyze and optimize (enabling static hoisting and patch flags), while JSX is plain JavaScript with full language power (arbitrary expressions, dynamic component composition) that the runtime Virtual DOM diff can't optimize ahead of time the same way - a tradeoff between compile-time optimization potential and unconstrained runtime flexibility.",
    questionFr:
      "Quelle est la différence philosophique centrale entre l'approche par templates de Vue et le JSX de React, au-delà d'une préférence de syntaxe ?",
    answerFr:
      "Les templates Vue sont un DSL contraint, proche du HTML, que le compilateur peut analyser et optimiser statiquement (permettant static hoisting et patch flags), tandis que JSX est du JavaScript classique avec toute la puissance du langage (expressions arbitraires, composition dynamique de composants) que le diff Virtual DOM à l'exécution ne peut pas optimiser en amont de la même façon - un compromis entre potentiel d'optimisation à la compilation et flexibilité à l'exécution sans contrainte.",
  },
];
