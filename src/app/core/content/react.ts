export const questions = [
  {
    question: 'What is the Virtual DOM, and what problem does it actually solve?',
    answer:
      'A lightweight in-memory representation of the UI tree that React diffs against the previous version to compute the minimal set of real DOM mutations needed; the real DOM is slow to read/write, so batching and minimizing direct mutations through this diffing process (reconciliation) is what keeps UI updates fast at scale.',
    questionFr: "Qu'est-ce que le Virtual DOM, et quel problème résout-il réellement ?",
    answerFr:
      "Une représentation en mémoire légère de l'arbre UI que React compare à la version précédente pour calculer l'ensemble minimal de mutations DOM réelles nécessaires ; le DOM réel est lent à lire/écrire, donc regrouper et minimiser les mutations directes via ce processus de diffing (reconciliation) est ce qui garde les mises à jour UI rapides à l'échelle.",
  },
  {
    question: 'useState vs useRef - when do you reach for each?',
    answer:
      "useState triggers a re-render whenever its value changes and is for state that affects what's rendered; useRef gives you a mutable box that persists across renders without ever causing a re-render, used for values the render output doesn't depend on directly - a DOM node reference, a timer ID, or a previous value you need to compare against.",
    questionFr: "useState vs useRef - quand utiliser l'un ou l'autre ?",
    answerFr:
      'useState déclenche un re-render à chaque changement de valeur et sert pour un état qui affecte ce qui est rendu ; useRef donne une boîte mutable qui persiste entre les renders sans jamais déclencher de re-render, utilisée pour des valeurs dont le rendu ne dépend pas directement - une référence à un nœud DOM, un ID de timer, ou une valeur précédente à comparer.',
  },
  {
    question:
      "What's the most common useEffect pitfall involving the dependency array, and why does it happen?",
    answer:
      'Stale closures: an effect captures the values of props/state from the render it was created in, so omitting a value from the dependency array while still using it inside the effect means the effect keeps referencing an outdated snapshot instead of the latest value - the fix is including every reactive value the effect reads, not just the ones that "feel" relevant.',
    questionFr:
      'Quel est le piège le plus courant avec le tableau de dépendances de useEffect, et pourquoi survient-il ?',
    answerFr:
      "Les closures obsolètes (stale closures) : un effet capture les valeurs des props/state du render où il a été créé, donc omettre une valeur du tableau de dépendances tout en l'utilisant dans l'effet fait que l'effet continue de référencer un instantané périmé plutôt que la dernière valeur - la solution est d'inclure chaque valeur réactive lue par l'effet, pas seulement celles qui \"semblent\" pertinentes.",
  },
  {
    question: "Controlled vs uncontrolled components - what's the practical tradeoff?",
    answer:
      'A controlled component has its value driven entirely by React state (every keystroke goes through a state update and re-render), giving full programmatic control (validation, formatting) at the cost of more re-renders; an uncontrolled component lets the DOM hold its own value, read via a ref only when needed, which is simpler and cheaper but harder to validate or react to in real time.',
    questionFr: 'Composants controlled vs uncontrolled - quel est le compromis pratique ?',
    answerFr:
      'Un composant controlled a sa valeur entièrement pilotée par le state React (chaque frappe passe par une mise à jour de state et un re-render), donnant un contrôle programmatique complet (validation, formatage) au prix de plus de re-renders ; un composant uncontrolled laisse le DOM garder sa propre valeur, lue via une ref seulement au besoin, ce qui est plus simple et moins coûteux mais plus difficile à valider ou à réagir en temps réel.',
  },
  {
    question:
      "When does the Context API stop being enough, and you'd reach for an external state library (Redux, Zustand)?",
    answer:
      'Context solves prop drilling for relatively static or infrequently-changing values (theme, auth user), but every consumer of a context re-renders on any change to its value, with no built-in mechanism for slicing state or preventing unrelated updates; an external store adds fine-grained subscriptions, middleware (logging, persistence), and devtools that become worth the extra dependency once state is large, frequently updated, or shared across many unrelated components.',
    questionFr:
      'Quand la Context API ne suffit-elle plus, et faut-il passer à une lib de state externe (Redux, Zustand) ?',
    answerFr:
      "Context résout le prop drilling pour des valeurs relativement statiques ou peu changeantes (thème, utilisateur connecté), mais chaque consommateur d'un contexte se re-render à chaque changement de sa valeur, sans mécanisme intégré pour découper le state ou éviter des mises à jour non liées ; une lib externe ajoute des abonnements granulaires, des middlewares (logging, persistance) et des devtools qui justifient la dépendance supplémentaire une fois le state large, fréquemment mis à jour, ou partagé entre de nombreux composants sans rapport.",
  },
  {
    question:
      "What's the difference between a Server Component and a Client Component (e.g. in Next.js), and what governs which to use?",
    answer:
      "A Server Component renders on the server, never ships its code to the browser, and can access backend resources (a database, secrets) directly, but can't use state, effects, or browser-only APIs; a Client Component ships JavaScript to the browser and supports interactivity (state, event handlers). The default should be Server Components, dropping to Client Components only where interactivity or browser APIs are actually needed.",
    questionFr:
      "Quelle est la différence entre un Server Component et un Client Component (Next.js par exemple), et qu'est-ce qui guide le choix ?",
    answerFr:
      "Un Server Component se rend côté serveur, n'envoie jamais son code au navigateur, et peut accéder directement à des ressources backend (une base de données, des secrets), mais ne peut pas utiliser de state, d'effets, ou d'APIs navigateur ; un Client Component envoie du JavaScript au navigateur et supporte l'interactivité (state, gestionnaires d'événements). Le défaut devrait être les Server Components, en ne descendant vers des Client Components que là où l'interactivité ou des APIs navigateur sont réellement nécessaires.",
  },
  {
    question:
      'Why does React need a stable `key` prop on list items, and what breaks when you use the array index instead?',
    answer:
      'Keys let React match elements between renders to decide which to update, reorder, or destroy/recreate; using the array index as a key breaks this matching whenever items are inserted, removed, or reordered, since the index no longer identifies the same logical item, which can cause component state to attach to the wrong item or unnecessary DOM/component recreation.',
    questionFr:
      "Pourquoi React a-t-il besoin d'une prop `key` stable sur les éléments de liste, et que casse l'utilisation de l'index du tableau à la place ?",
    answerFr:
      "Les keys permettent à React de faire correspondre les éléments entre les renders pour décider lesquels mettre à jour, réordonner, ou détruire/recréer ; utiliser l'index du tableau comme key casse cette correspondance dès que des éléments sont insérés, supprimés ou réordonnés, car l'index n'identifie plus le même élément logique, ce qui peut faire que le state d'un composant s'attache au mauvais élément ou provoquer des recréations DOM/composant inutiles.",
  },
  {
    question: 'useMemo vs useCallback - what does each actually memoize, and when does it matter?',
    answer:
      'useMemo memoizes a computed value, recomputing it only when its dependencies change - useful for expensive calculations; useCallback memoizes a function reference itself so it stays stable across renders - useful when passing callbacks to memoized child components (React.memo) or as effect dependencies, where a new function reference on every render would otherwise defeat the memoization or re-trigger the effect.',
    questionFr:
      'useMemo vs useCallback - que mémoïse réellement chacun, et quand cela compte-t-il ?',
    answerFr:
      "useMemo mémoïse une valeur calculée, ne la recalculant que si ses dépendances changent - utile pour des calculs coûteux ; useCallback mémoïse la référence de fonction elle-même pour qu'elle reste stable entre les renders - utile en passant des callbacks à des composants enfants mémoïsés (React.memo) ou comme dépendances d'effet, où une nouvelle référence de fonction à chaque render annulerait sinon la mémoïsation ou redéclencherait l'effet.",
  },
  {
    question:
      'What problem do custom hooks solve, and how do they differ from the older Higher-Order Component (HOC) pattern?',
    answer:
      'Custom hooks let you extract and reuse stateful logic (a subscription, a piece of form logic, a data fetch) as a plain function composed directly inside a component, without adding an extra component to the tree or the prop-name collisions and "wrapper hell" that HOCs and render props were prone to when several were composed together.',
    questionFr:
      "Quel problème résolvent les custom hooks, et en quoi diffèrent-ils de l'ancien pattern Higher-Order Component (HOC) ?",
    answerFr:
      'Les custom hooks permettent d\'extraire et de réutiliser de la logique avec state (un abonnement, une logique de formulaire, un fetch de données) comme une simple fonction composée directement dans un composant, sans ajouter de composant supplémentaire à l\'arbre ni les collisions de noms de props et le "wrapper hell" auxquels les HOCs et render props étaient sujets quand plusieurs étaient composés ensemble.',
  },
  {
    question:
      "What does React.memo actually do, and why doesn't wrapping every component in it automatically make an app faster?",
    answer:
      "It skips re-rendering a component when its props are shallowly equal to the previous render's props; wrapping everything in it isn't automatically faster because the shallow comparison itself has a cost, and it's useless (or even counterproductive) on components that re-render cheaply anyway or that receive a new object/function reference on every parent render regardless.",
    questionFr:
      'Que fait réellement React.memo, et pourquoi envelopper chaque composant dedans ne rend-il pas automatiquement une app plus rapide ?',
    answerFr:
      "Il évite de re-render un composant quand ses props sont superficiellement égales à celles du render précédent ; en envelopper systématiquement n'accélère pas automatiquement car la comparaison superficielle elle-même a un coût, et c'est inutile (voire contre-productif) sur des composants qui se re-render déjà à bas coût ou qui reçoivent de toute façon une nouvelle référence d'objet/fonction à chaque render du parent.",
  },
  {
    question:
      "What does Suspense let you do for data fetching or code splitting that a plain loading flag in state doesn't?",
    answer:
      'It lets a component declaratively "wait" for async work (a lazy-loaded chunk, a data fetch integrated with Suspense) by showing a fallback UI while any descendant is still pending, coordinating multiple nested loading states without each component manually tracking its own isLoading flag and conditionally rendering around it.',
    questionFr:
      "Que permet Suspense pour le fetching de données ou le code splitting qu'un simple flag de chargement en state ne permet pas ?",
    answerFr:
      'Il permet à un composant d\'"attendre" déclarativement un travail asynchrone (un chunk chargé paresseusement, un fetch de données intégré à Suspense) en affichant une UI de repli tant qu\'un descendant est en attente, coordonnant plusieurs états de chargement imbriqués sans que chaque composant ne suive manuellement son propre flag isLoading et ne rende conditionnellement autour.',
  },
  {
    question: 'useReducer vs useState - when does the added structure of useReducer pay off?',
    answer:
      'useReducer centralizes how state transitions happen into one reducer function, which pays off once state updates involve multiple related sub-values, the next state depends on the previous one in a non-trivial way, or several event handlers need to trigger the same kind of update - keeping the transition logic in one testable place instead of scattered across several useState setters.',
    questionFr:
      'useReducer vs useState - quand la structure supplémentaire de useReducer devient-elle rentable ?',
    answerFr:
      "useReducer centralise la façon dont les transitions de state se produisent dans une seule fonction reducer, ce qui devient rentable dès que les mises à jour de state impliquent plusieurs sous-valeurs liées, que le prochain state dépend du précédent de façon non triviale, ou que plusieurs gestionnaires d'événements doivent déclencher le même type de mise à jour - gardant la logique de transition à un seul endroit testable plutôt qu'éparpillée sur plusieurs setters useState.",
  },
  {
    question: 'What do error boundaries catch, and what do they explicitly not catch?',
    answer:
      'They catch rendering errors thrown by their child component tree during render, in lifecycle methods, and in constructors, replacing the crashed subtree with a fallback UI; they do not catch errors in event handlers, in asynchronous code (a rejected promise in a useEffect), during server-side rendering, or errors thrown in the boundary component itself, which need their own try/catch or handling.',
    questionFr: 'Que capturent les error boundaries, et que ne capturent-elles explicitement pas ?',
    answerFr:
      "Elles capturent les erreurs de rendu levées par leur arbre de composants enfants pendant le render, dans les méthodes de cycle de vie, et dans les constructeurs, remplaçant le sous-arbre planté par une UI de repli ; elles ne capturent pas les erreurs dans les gestionnaires d'événements, dans du code asynchrone (une promesse rejetée dans un useEffect), pendant le rendu côté serveur, ni les erreurs levées dans le composant boundary lui-même, qui nécessitent leur propre try/catch ou gestion.",
  },
  {
    question:
      "What is a Portal used for, and why can't you just style your way around the same problem with CSS?",
    answer:
      "A portal renders a component's children into a different DOM node than its parent while keeping it in the same React tree (context, event bubbling still work normally) - used for modals, tooltips, and dropdowns that need to visually escape an ancestor's `overflow: hidden` or `z-index` stacking context, which CSS alone cannot reliably override once that ancestor constrains it.",
    questionFr:
      'À quoi sert un Portal, et pourquoi ne peut-on pas simplement contourner le même problème en CSS ?',
    answerFr:
      "Un portal rend les enfants d'un composant dans un nœud DOM différent de son parent tout en le gardant dans le même arbre React (le contexte, la propagation d'événements continuent de fonctionner normalement) - utilisé pour des modales, tooltips et menus déroulants qui doivent s'échapper visuellement d'un `overflow: hidden` ou d'un contexte d'empilement `z-index` d'un ancêtre, que le CSS seul ne peut pas surpasser de façon fiable une fois que cet ancêtre le contraint.",
  },
  {
    question:
      'What does StrictMode actually do at runtime, and why does it double-invoke certain functions in development?',
    answer:
      "It's a development-only tool that intentionally double-invokes things like component render functions and effect setup/cleanup to surface impure logic - side effects during render, or effects that aren't properly idempotent when cleaned up and re-run - so bugs that would otherwise only show up unpredictably under concurrent rendering are caught early and consistently in dev, with zero effect on the production build.",
    questionFr:
      "Que fait réellement StrictMode à l'exécution, et pourquoi double-invoque-t-il certaines fonctions en développement ?",
    answerFr:
      "C'est un outil réservé au développement qui double-invoque intentionnellement des choses comme les fonctions de render des composants et le setup/cleanup des effets pour révéler de la logique impure - des effets de bord pendant le render, ou des effets qui ne sont pas correctement idempotents une fois nettoyés et rejoués - pour que des bugs qui ne se manifesteraient sinon qu'imprévisiblement sous le rendu concurrent soient détectés tôt et de façon cohérente en dev, sans aucun effet sur le build de production.",
  },
  {
    question:
      'What is automatic batching in React 18, and what problem did it fix compared to React 17?',
    answer:
      "React 18 batches multiple state updates into a single re-render regardless of where they originate - including inside promises, timeouts, and native event handlers - whereas React 17 only batched updates inside React's own event handlers, meaning the same code could cause one re-render in a click handler but several in a setTimeout or fetch callback, an inconsistency automatic batching removes.",
    questionFr:
      "Qu'est-ce que le batching automatique dans React 18, et quel problème corrige-t-il par rapport à React 17 ?",
    answerFr:
      "React 18 regroupe plusieurs mises à jour de state en un seul re-render quel que soit leur point d'origine - y compris dans des promesses, des timeouts, et des gestionnaires d'événements natifs - alors que React 17 ne regroupait les mises à jour qu'à l'intérieur des gestionnaires d'événements propres à React, ce qui faisait que le même code pouvait causer un re-render dans un handler de clic mais plusieurs dans un callback setTimeout ou fetch, une incohérence que le batching automatique supprime.",
  },
  {
    question:
      'What does React Testing Library\'s core philosophy ("test behavior, not implementation") mean in practice?',
    answer:
      "Tests should query the rendered output the way a user would - by visible text, label, or accessible role - and interact with it via realistic events, rather than reaching into component internals (state, instance methods, CSS class names); this makes tests survive internal refactors that don't change user-facing behavior, and fail when behavior actually breaks, rather than the other way around.",
    questionFr:
      'Que signifie en pratique la philosophie centrale de React Testing Library ("tester le comportement, pas l\'implémentation") ?',
    answerFr:
      "Les tests doivent interroger le rendu comme le ferait un utilisateur - par texte visible, label, ou rôle accessible - et interagir via des événements réalistes, plutôt que d'aller chercher dans les internes du composant (state, méthodes d'instance, noms de classes CSS) ; cela fait que les tests survivent aux refactors internes qui ne changent pas le comportement visible par l'utilisateur, et échouent quand le comportement casse réellement, plutôt que l'inverse.",
  },
  {
    question:
      "How does TypeScript typically type a React component's props, and what does it catch that PropTypes at runtime doesn't?",
    answer:
      'Props are typed with an interface or type alias for the props object, checked entirely at compile time; unlike PropTypes, which only warns at runtime when an invalid prop actually reaches a rendered component, TypeScript catches a missing or mistyped prop before the code ever runs, including at every call site across a large codebase, not just the ones exercised by a given test run.',
    questionFr:
      "Comment TypeScript type-t-il typiquement les props d'un composant React, et que détecte-t-il que PropTypes à l'exécution ne détecte pas ?",
    answerFr:
      "Les props sont typées avec une interface ou un alias de type pour l'objet props, vérifié entièrement à la compilation ; contrairement à PropTypes, qui n'avertit qu'à l'exécution quand une prop invalide atteint réellement un composant rendu, TypeScript détecte une prop manquante ou mal typée avant même que le code ne s'exécute, y compris à chaque site d'appel à travers un grand codebase, pas seulement ceux exercés par un run de test donné.",
  },
];
