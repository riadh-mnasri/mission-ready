export const questions = [
  {
    question: "What is a standalone component and how does it differ from the older NgModule-based approach?",
    answer:
      "A standalone component declares its own dependencies directly (`imports: [...]` in the `@Component` decorator) instead of relying on a shared `NgModule` to declare and export it, removing a layer of indirection and boilerplate; it's now the default in modern Angular, with NgModules becoming optional rather than mandatory.",
    questionFr: "Qu'est-ce qu'un composant standalone et en quoi diffère-t-il de l'ancienne approche basée sur les NgModule ?",
    answerFr:
      "Un composant standalone déclare directement ses propres dépendances (`imports: [...]` dans le décorateur `@Component`) au lieu de dépendre d'un `NgModule` partagé pour le déclarer et l'exporter, supprimant une couche d'indirection et de boilerplate ; c'est maintenant le défaut en Angular moderne, les NgModules devenant optionnels plutôt qu'obligatoires.",
  },
  {
    question: "What is change detection, and how does Zone.js traditionally trigger it?",
    answer:
      "Change detection is Angular's process of checking component data against the DOM and updating what changed; traditionally Zone.js monkey-patches async browser APIs (`setTimeout`, event listeners, `fetch`) so Angular is automatically notified whenever any of them fires, triggering a change detection pass across the whole component tree.",
    questionFr: "Qu'est-ce que la change detection, et comment Zone.js la déclenche-t-elle traditionnellement ?",
    answerFr:
      "La change detection est le processus par lequel Angular vérifie les données des composants par rapport au DOM et met à jour ce qui a changé ; traditionnellement, Zone.js patche les API asynchrones du navigateur (`setTimeout`, écouteurs d'événements, `fetch`) pour qu'Angular soit automatiquement notifié dès que l'une d'elles se déclenche, lançant une passe de change detection sur tout l'arbre de composants.",
  },
  {
    question: "What are Signals in Angular, and how do they change change detection?",
    answer:
      "A Signal is a reactive value container (`signal()`, `computed()`) that tracks exactly which parts of the template read it; this lets Angular (in zoneless mode) update only the specific DOM bindings that depend on a changed signal instead of re-checking the whole component tree, which is both faster and removes the need for Zone.js entirely.",
    questionFr: "Que sont les Signals en Angular, et comment changent-ils la change detection ?",
    answerFr:
      "Un Signal est un conteneur de valeur réactif (`signal()`, `computed()`) qui suit précisément quelles parties du template le lisent ; cela permet à Angular (en mode zoneless) de ne mettre à jour que les bindings DOM spécifiques qui dépendent d'un signal modifié plutôt que de revérifier tout l'arbre de composants, ce qui est à la fois plus rapide et supprime le besoin de Zone.js.",
  },
  {
    question: "Difference between an Observable and a Promise?",
    answer:
      "A Promise represents a single future value and starts executing as soon as it's created (eager); an Observable can emit zero, one, or many values over time, does nothing until subscribed to (lazy), and can be cancelled via unsubscription, which is why Angular uses Observables for things like HTTP requests you might need to cancel or streams of multiple events.",
    questionFr: "Différence entre un Observable et une Promise ?",
    answerFr:
      "Une Promise représente une seule valeur future et commence à s'exécuter dès sa création (eager) ; un Observable peut émettre zéro, une, ou plusieurs valeurs dans le temps, ne fait rien tant qu'on ne s'y abonne pas (lazy), et peut être annulé via un désabonnement, ce qui explique pourquoi Angular utilise des Observables pour des choses comme des requêtes HTTP qu'on pourrait vouloir annuler ou des flux d'événements multiples.",
  },
  {
    question: "What does RxJS `switchMap` do, and when do you use it over `mergeMap`?",
    answer:
      "`switchMap` maps each source emission to a new inner observable and cancels the previous inner subscription whenever a new source value arrives, making it the right choice for a search-as-you-type request where only the latest query matters; `mergeMap` runs all inner observables concurrently without cancelling earlier ones, appropriate when every triggered request must complete independently.",
    questionFr: "Que fait `switchMap` en RxJS, et quand l'utiliser plutôt que `mergeMap` ?",
    answerFr:
      "`switchMap` mappe chaque émission source vers un nouvel observable interne et annule la souscription interne précédente dès qu'une nouvelle valeur source arrive, ce qui en fait le bon choix pour une recherche au fil de la frappe où seule la dernière requête compte ; `mergeMap` fait tourner tous les observables internes en parallèle sans annuler les précédents, approprié quand chaque requête déclenchée doit se terminer indépendamment.",
  },
  {
    question: "What is the async pipe, and why is it recommended over manually subscribing/unsubscribing?",
    answer:
      "The `| async` pipe subscribes to an Observable directly in the template, automatically unwraps emitted values for display, and automatically unsubscribes when the component is destroyed, eliminating an entire class of memory leaks caused by forgetting a manual `unsubscribe()` call in `ngOnDestroy`.",
    questionFr: "Qu'est-ce que l'async pipe, et pourquoi est-elle recommandée par rapport à un subscribe/unsubscribe manuel ?",
    answerFr:
      "Le pipe `| async` s'abonne directement à un Observable dans le template, déballe automatiquement les valeurs émises pour l'affichage, et se désabonne automatiquement à la destruction du composant, éliminant toute une classe de fuites mémoire causées par un `unsubscribe()` manuel oublié dans `ngOnDestroy`.",
  },
  {
    question: "What's a common memory leak risk with RxJS subscriptions, and how do you avoid it?",
    answer:
      "Manually calling `.subscribe()` on a long-lived observable (e.g. a router event stream) inside a component and never unsubscribing keeps that subscription (and the component it references) alive after the component is destroyed; the fix is the async pipe where possible, or a `takeUntil(this.destroyed$)` operator (or the `takeUntilDestroyed()` helper) that automatically completes the subscription on component destruction.",
    questionFr: "Quel est un risque courant de fuite mémoire avec les souscriptions RxJS, et comment l'éviter ?",
    answerFr:
      "Appeler manuellement `.subscribe()` sur un observable longue durée (ex. un flux d'événements du router) dans un composant et ne jamais se désabonner garde cette souscription (et le composant qu'elle référence) en vie après la destruction du composant ; la correction est l'async pipe quand c'est possible, ou un opérateur `takeUntil(this.destroyed$)` (ou l'utilitaire `takeUntilDestroyed()`) qui termine automatiquement la souscription à la destruction du composant.",
  },
  {
    question: "Difference between a template-driven form and a reactive form in Angular?",
    answer:
      "A template-driven form defines most of its structure and validation directly in the HTML template using directives (`ngModel`, `required`), suiting simple forms; a reactive form defines the form model (`FormGroup`, `FormControl`, validators) explicitly in the component class, giving more control, easier unit testing, and better handling of dynamic or complex forms.",
    questionFr: "Différence entre un formulaire template-driven et un formulaire reactive en Angular ?",
    answerFr:
      "Un formulaire template-driven définit l'essentiel de sa structure et de sa validation directement dans le template HTML via des directives (`ngModel`, `required`), adapté aux formulaires simples ; un formulaire reactive définit explicitement le modèle du formulaire (`FormGroup`, `FormControl`, validateurs) dans la classe du composant, offrant plus de contrôle, des tests unitaires plus faciles, et une meilleure gestion des formulaires dynamiques ou complexes.",
  },
  {
    question: "What is dependency injection in Angular, and what is a provider?",
    answer:
      "Angular's DI system supplies a class's dependencies (services) automatically based on its constructor's type signatures, rather than the class instantiating them itself; a provider tells the injector how to create a given dependency (a plain class, a factory function, or an existing value), and where it's registered (root, a specific route, a specific component) controls the singleton's scope.",
    questionFr: "Qu'est-ce que l'injection de dépendances en Angular, et qu'est-ce qu'un provider ?",
    answerFr:
      "Le système de DI d'Angular fournit automatiquement les dépendances (services) d'une classe selon les signatures de type de son constructeur, plutôt que la classe ne les instancie elle-même ; un provider indique à l'injecteur comment créer une dépendance donnée (une classe brute, une fonction factory, ou une valeur existante), et l'endroit où il est enregistré (root, une route spécifique, un composant spécifique) contrôle la portée du singleton.",
  },
  {
    question: "What's the difference between the classic `@Input()`/`@Output()` decorators and the newer signal-based `input()`/`output()` functions?",
    answer:
      "`@Input()`/`@Output()` are property decorators tied into the older change detection model, where reading an input's value gives you a plain property; `input()` returns a read-only Signal (so consuming it in a `computed()` is automatically reactive) and `output()` gives a simpler, decorator-free API for emitting events, both designed to fit naturally into a signal-based, zoneless component.",
    questionFr: "Quelle est la différence entre les décorateurs classiques `@Input()`/`@Output()` et les fonctions plus récentes `input()`/`output()` basées sur les signals ?",
    answerFr:
      "`@Input()`/`@Output()` sont des décorateurs de propriété liés à l'ancien modèle de change detection, où lire la valeur d'un input donne une propriété brute ; `input()` retourne un Signal en lecture seule (donc le consommer dans un `computed()` est automatiquement réactif) et `output()` offre une API plus simple, sans décorateur, pour émettre des événements, les deux étant conçus pour s'intégrer naturellement à un composant basé sur les signals, zoneless.",
  },
  {
    question: "What is lazy loading in Angular routing, and why does it matter for performance?",
    answer:
      "Instead of bundling every feature's code into one large initial JavaScript bundle, `loadComponent`/`loadChildren` defer a route's code to a separate chunk fetched only when the user navigates to it, shrinking the initial bundle size and improving first-load performance, especially for larger applications with many rarely-visited sections.",
    questionFr: "Qu'est-ce que le lazy loading dans le routing Angular, et pourquoi est-ce important pour la performance ?",
    answerFr:
      "Plutôt que de regrouper le code de chaque fonctionnalité dans un seul gros bundle JavaScript initial, `loadComponent`/`loadChildren` diffèrent le code d'une route vers un chunk séparé récupéré seulement quand l'utilisateur y navigue, réduisant la taille du bundle initial et améliorant la performance du premier chargement, en particulier pour de grandes applications avec de nombreuses sections rarement visitées.",
  },
  {
    question: "What is an Angular HttpInterceptor used for?",
    answer:
      "A function or class that sits in the pipeline of every outgoing HTTP request and incoming response, letting you apply cross-cutting logic in one place - attaching an auth token header, logging requests, retrying on specific errors, or globally handling 401 responses - instead of repeating that logic at every call site.",
    questionFr: "À quoi sert un HttpInterceptor en Angular ?",
    answerFr:
      "Une fonction ou classe placée dans le pipeline de chaque requête HTTP sortante et réponse entrante, permettant d'appliquer une logique transverse à un seul endroit - attacher un header de token d'authentification, logger les requêtes, réessayer sur des erreurs spécifiques, ou gérer globalement les réponses 401 - plutôt que de répéter cette logique à chaque point d'appel.",
  },
  {
    question: "Difference between `Subject`, `BehaviorSubject`, and `ReplaySubject`?",
    answer:
      "A plain `Subject` has no memory of past values and only pushes new emissions to current subscribers; a `BehaviorSubject` requires an initial value and always replays its current/latest value to any new subscriber; a `ReplaySubject` replays a configurable number of the most recent emissions (not just the latest one) to new subscribers.",
    questionFr: "Différence entre `Subject`, `BehaviorSubject` et `ReplaySubject` ?",
    answerFr:
      "Un `Subject` simple n'a aucune mémoire des valeurs passées et ne pousse que les nouvelles émissions aux souscripteurs actuels ; un `BehaviorSubject` exige une valeur initiale et rejoue toujours sa valeur courante/dernière à tout nouveau souscripteur ; un `ReplaySubject` rejoue un nombre configurable des émissions les plus récentes (pas seulement la dernière) aux nouveaux souscripteurs.",
  },
  {
    question: "What is the OnPush change detection strategy, and what does it require of a component's inputs?",
    answer:
      "`OnPush` tells Angular to skip re-checking a component unless one of its `@Input()` references changes (by identity, not deep equality), one of its own events fires, or an observable it's subscribed to via the async pipe emits; this requires treating inputs as immutable (creating a new object/array reference on change rather than mutating in place), otherwise Angular won't detect the change at all.",
    questionFr: "Qu'est-ce que la stratégie de change detection OnPush, et qu'exige-t-elle des inputs d'un composant ?",
    answerFr:
      "`OnPush` indique à Angular de ne pas revérifier un composant à moins que l'une de ses références `@Input()` ne change (par identité, pas par égalité profonde), que l'un de ses propres événements ne se déclenche, ou qu'un observable auquel il est abonné via l'async pipe n'émette ; cela exige de traiter les inputs comme immuables (créer une nouvelle référence d'objet/tableau au changement plutôt que de muter en place), sinon Angular ne détectera pas du tout le changement.",
  },
  {
    question: "What is Angular's Renderer2, and why avoid direct DOM manipulation in components?",
    answer:
      "Renderer2 is an abstraction for DOM operations (adding classes, setting styles, creating elements) that works consistently across rendering environments (browser, server-side rendering, web workers), unlike directly touching `nativeElement`, which assumes a real DOM exists and breaks under SSR or other non-browser rendering contexts.",
    questionFr: "Qu'est-ce que Renderer2 en Angular, et pourquoi éviter la manipulation directe du DOM dans les composants ?",
    answerFr:
      "Renderer2 est une abstraction pour les opérations DOM (ajouter des classes, définir des styles, créer des éléments) qui fonctionne de façon cohérente à travers les environnements de rendu (navigateur, server-side rendering, web workers), contrairement à toucher directement `nativeElement`, ce qui suppose l'existence d'un vrai DOM et casse sous SSR ou d'autres contextes de rendu non-navigateur.",
  },
];
