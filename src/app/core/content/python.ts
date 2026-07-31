export const questions = [
  {
    question:
      'What is the GIL, and how does it affect threading versus multiprocessing in CPython?',
    answer:
      "The Global Interpreter Lock ensures only one thread executes Python bytecode at a time in CPython, so threads don't give true CPU parallelism for pure-Python compute; threads still help for I/O-bound work (the GIL is released during I/O waits), while CPU-bound parallelism requires multiprocessing (separate processes, separate GILs) or offloading to native extensions that release the GIL.",
    questionFr:
      "Qu'est-ce que le GIL, et comment affecte-t-il le threading par rapport au multiprocessing en CPython ?",
    answerFr:
      "Le Global Interpreter Lock garantit qu'un seul thread exécute du bytecode Python à la fois dans CPython, donc les threads n'apportent pas de vrai parallélisme CPU pour du calcul Python pur ; les threads restent utiles pour du travail I/O-bound (le GIL est libéré pendant les attentes I/O), tandis que le parallélisme CPU-bound nécessite le multiprocessing (processus séparés, GIL séparés) ou un déchargement vers des extensions natives qui libèrent le GIL.",
  },
  {
    question: 'Generators vs list comprehensions - when do you prefer one over the other?',
    answer:
      'A list comprehension builds the entire result in memory immediately; a generator produces items lazily, one at a time, on demand - preferred when the sequence is large or infinite, when you only need to iterate once, or when you want to start processing before the whole sequence is computed.',
    questionFr: "Générateurs vs list comprehensions - quand préférer l'un à l'autre ?",
    answerFr:
      "Une list comprehension construit tout le résultat en mémoire immédiatement ; un générateur produit les éléments paresseusement, un par un, à la demande - préféré quand la séquence est grande ou infinie, quand on n'a besoin d'itérer qu'une fois, ou quand on veut commencer le traitement avant que toute la séquence soit calculée.",
  },
  {
    question: 'How do Python decorators work under the hood?',
    answer:
      "A decorator is a function that takes a function (or class) as input and returns a replacement, typically a wrapper that adds behavior before/after calling the original; `@decorator` above a function definition is exactly equivalent to `func = decorator(func)`, which is why decorators commonly use `functools.wraps` to preserve the wrapped function's name and docstring.",
    questionFr: 'Comment fonctionnent les décorateurs Python en interne ?',
    answerFr:
      "Un décorateur est une fonction qui prend une fonction (ou une classe) en entrée et retourne un remplaçant, typiquement un wrapper qui ajoute un comportement avant/après l'appel de l'original ; `@decorateur` au-dessus d'une définition de fonction équivaut exactement à `func = decorateur(func)`, ce qui explique pourquoi les décorateurs utilisent couramment `functools.wraps` pour préserver le nom et la docstring de la fonction décorée.",
  },
  {
    question:
      'What is the classic mutable default argument pitfall in Python, and how do you avoid it?',
    answer:
      'A default argument value (e.g. `def f(items=[])`) is evaluated once at function definition time and reused across all calls, so mutating it in one call leaks state into subsequent calls; the fix is to default to `None` and create a fresh mutable object inside the function body when the argument is `None`.',
    questionFr:
      "Quel est le piège classique des arguments par défaut mutables en Python, et comment l'éviter ?",
    answerFr:
      "Une valeur d'argument par défaut (ex. `def f(items=[])`) est évaluée une seule fois à la définition de la fonction et réutilisée à chaque appel, donc la muter dans un appel fait fuiter cet état vers les appels suivants ; la solution est de mettre `None` par défaut et de créer un nouvel objet mutable dans le corps de la fonction quand l'argument vaut `None`.",
  },
  {
    question: 'What problem does asyncio solve, and when is it preferable to threads?',
    answer:
      "asyncio runs many concurrent I/O-bound tasks on a single thread via an event loop and cooperative multitasking (`async`/`await`), avoiding thread-switching and locking overhead; it's preferable to threads for large numbers of concurrent I/O-bound operations (network calls, many open connections), while CPU-bound work still needs multiprocessing since asyncio doesn't bypass the GIL.",
    questionFr: 'Quel problème résout asyncio, et quand est-il préférable aux threads ?',
    answerFr:
      "asyncio fait tourner de nombreuses tâches concurrentes I/O-bound sur un seul thread via une boucle d'événements et du multitâche coopératif (`async`/`await`), évitant le coût de changement de contexte et de verrouillage des threads ; il est préférable aux threads pour un grand nombre d'opérations concurrentes I/O-bound (appels réseau, nombreuses connexions ouvertes), tandis que le travail CPU-bound nécessite toujours le multiprocessing puisqu'asyncio ne contourne pas le GIL.",
  },
  {
    question:
      'What do `__enter__` and `__exit__` do, and why use a context manager instead of manual try/finally?',
    answer:
      'They implement the context manager protocol invoked by the `with` statement: `__enter__` runs on entry and its return value is bound after `as`, `__exit__` always runs on exit (even on exception) and can suppress the exception by returning a truthy value; this packages acquire/release logic (files, locks, connections) into a reusable, less error-prone unit than repeating try/finally everywhere.',
    questionFr:
      "Que font `__enter__` et `__exit__`, et pourquoi utiliser un context manager plutôt qu'un try/finally manuel ?",
    answerFr:
      "Ils implémentent le protocole de context manager invoqué par l'instruction `with` : `__enter__` s'exécute à l'entrée et sa valeur de retour est liée après `as`, `__exit__` s'exécute toujours à la sortie (même en cas d'exception) et peut supprimer l'exception en retournant une valeur vraie ; cela encapsule la logique d'acquisition/libération (fichiers, locks, connexions) dans une unité réutilisable et moins sujette à erreur que de répéter try/finally partout.",
  },
  {
    question: "What do type hints actually enforce at runtime, and what is mypy's role?",
    answer:
      'Nothing, by default - type hints are optional annotations that CPython does not check or enforce when the code runs; a static type checker like mypy reads those annotations separately, before runtime, to catch type inconsistencies, meaning type safety in Python is opt-in and tooling-driven rather than built into the interpreter.',
    questionFr:
      "Que garantissent réellement les type hints à l'exécution, et quel est le rôle de mypy ?",
    answerFr:
      "Rien, par défaut - les type hints sont des annotations optionnelles que CPython ne vérifie ni n'impose à l'exécution ; un vérificateur de type statique comme mypy lit ces annotations séparément, avant l'exécution, pour détecter les incohérences de type, ce qui signifie que la sécurité de type en Python est opt-in et pilotée par l'outillage plutôt qu'intégrée à l'interpréteur.",
  },
  {
    question:
      'Why use a virtual environment, and how do tools like Poetry/uv improve on plain venv + pip?',
    answer:
      "A virtual environment isolates a project's dependencies from the system Python and other projects, avoiding version conflicts; Poetry and uv add a lockfile that pins exact resolved versions for reproducible installs, dependency resolution that catches conflicts up front, and unified commands for building/publishing packages that plain venv + pip don't provide on their own.",
    questionFr:
      'Pourquoi utiliser un environnement virtuel, et en quoi des outils comme Poetry/uv améliorent-ils le simple venv + pip ?',
    answerFr:
      "Un environnement virtuel isole les dépendances d'un projet du Python système et des autres projets, évitant les conflits de versions ; Poetry et uv ajoutent un lockfile qui fixe les versions résolues exactes pour des installations reproductibles, une résolution de dépendances qui détecte les conflits en amont, et des commandes unifiées pour construire/publier des paquets que venv + pip seuls n'offrent pas.",
  },
  {
    question: "What's the difference between `is` and `==` in Python?",
    answer:
      '`is` checks identity (whether two names refer to the exact same object in memory), while `==` checks equality (calls `__eq__`, which can be customized to compare values); this is why comparing to `None` should use `is None` - `None` is a singleton, so identity is both correct and faster than invoking equality machinery.',
    questionFr: 'Quelle est la différence entre `is` et `==` en Python ?',
    answerFr:
      "`is` vérifie l'identité (si deux noms référencent exactement le même objet en mémoire), tandis que `==` vérifie l'égalité (appelle `__eq__`, personnalisable pour comparer des valeurs) ; c'est pourquoi comparer à `None` doit utiliser `is None` - `None` est un singleton, donc l'identité est à la fois correcte et plus rapide qu'invoquer la mécanique d'égalité.",
  },
  {
    question: "Deep copy vs shallow copy - what's the practical difference?",
    answer:
      'A shallow copy (`copy.copy`) creates a new container object but still references the same nested objects inside it, so mutating a nested list/dict affects both copies; a deep copy (`copy.deepcopy`) recursively copies every nested object too, producing a fully independent structure at the cost of more time and memory.',
    questionFr: 'Deep copy vs shallow copy - quelle différence pratique ?',
    answerFr:
      "Une copie superficielle (`copy.copy`) crée un nouvel objet conteneur mais référence toujours les mêmes objets imbriqués à l'intérieur, donc muter une liste/dict imbriquée affecte les deux copies ; une copie profonde (`copy.deepcopy`) copie récursivement chaque objet imbriqué aussi, produisant une structure totalement indépendante au prix de plus de temps et de mémoire.",
  },
  {
    question: 'What are metaclasses, and when (rarely) would you actually reach for one?',
    answer:
      'A metaclass is the "class of a class" - by default `type` - that controls how classes themselves are constructed, letting you hook into or modify class creation (auto-registering subclasses, enforcing that certain methods are implemented, injecting attributes) across every class that uses it; it\'s a rare, powerful tool best reserved for framework-level code, since the same effect can usually be achieved more simply with a class decorator or `__init_subclass__`.',
    questionFr: 'Que sont les métaclasses, et quand (rarement) faut-il réellement y recourir ?',
    answerFr:
      "Une métaclasse est la \"classe d'une classe\" - `type` par défaut - qui contrôle comment les classes elles-mêmes sont construites, permettant de s'accrocher à ou modifier la création de classe (auto-enregistrement de sous-classes, imposer que certaines méthodes soient implémentées, injecter des attributs) sur toute classe qui l'utilise ; c'est un outil rare et puissant, réservé au code de niveau framework, car le même effet peut souvent être obtenu plus simplement avec un décorateur de classe ou `__init_subclass__`.",
  },
  {
    question: 'What is duck typing, and how do Protocols (PEP 544) formalize it with type hints?',
    answer:
      'Duck typing means Python code cares about whether an object supports the needed methods/attributes, not its declared type ("if it walks like a duck..."); Protocols let you express that structural expectation as a type hint - a class satisfies a Protocol simply by implementing its methods, with no explicit inheritance required, giving static type checking to code that was already relying on duck typing at runtime.',
    questionFr:
      "Qu'est-ce que le duck typing, et comment les Protocols (PEP 544) le formalisent-ils avec les type hints ?",
    answerFr:
      'Le duck typing signifie que le code Python se soucie de si un objet supporte les méthodes/attributs nécessaires, pas de son type déclaré ("si ça marche comme un canard...") ; les Protocols permettent d\'exprimer cette attente structurelle comme un type hint - une classe satisfait un Protocol simplement en implémentant ses méthodes, sans héritage explicite requis, apportant du typage statique à du code qui reposait déjà sur le duck typing à l\'exécution.',
  },
  {
    question:
      'How should you choose between multiprocessing, threading, and asyncio for a given workload?',
    answer:
      'Multiprocessing for CPU-bound work that needs true parallelism (bypassing the GIL via separate processes); threading for I/O-bound work with a moderate number of concurrent operations, especially when integrating with blocking libraries; asyncio for I/O-bound work with a very large number of concurrent operations, where the lower overhead of cooperative scheduling over an event loop outperforms OS thread switching.',
    questionFr:
      'Comment choisir entre multiprocessing, threading et asyncio pour un workload donné ?',
    answerFr:
      "Multiprocessing pour du travail CPU-bound nécessitant un vrai parallélisme (contournant le GIL via des processus séparés) ; threading pour du travail I/O-bound avec un nombre modéré d'opérations concurrentes, surtout en intégration avec des librairies bloquantes ; asyncio pour du travail I/O-bound avec un très grand nombre d'opérations concurrentes, où le coût plus faible de l'ordonnancement coopératif sur une boucle d'événements surpasse le changement de contexte des threads OS.",
  },
  {
    question:
      'Dataclasses vs plain classes vs NamedTuple - what do you gain by using `@dataclass`?',
    answer:
      '`@dataclass` auto-generates `__init__`, `__repr__`, and `__eq__` from declared fields, removing boilerplate a plain class requires by hand; compared to `NamedTuple`, dataclasses are mutable by default (though `frozen=True` makes them immutable) and support default values and methods more naturally, while `NamedTuple` instances remain tuples, giving cheap unpacking and true immutability at the cost of that flexibility.',
    questionFr: "Dataclasses vs classes classiques vs NamedTuple - qu'apporte `@dataclass` ?",
    answerFr:
      "`@dataclass` génère automatiquement `__init__`, `__repr__` et `__eq__` à partir des champs déclarés, supprimant le boilerplate qu'une classe classique demande à la main ; par rapport à `NamedTuple`, les dataclasses sont mutables par défaut (bien que `frozen=True` les rende immuables) et supportent plus naturellement des valeurs par défaut et des méthodes, tandis que les instances `NamedTuple` restent des tuples, offrant un unpacking bon marché et une vraie immutabilité au prix de cette flexibilité.",
  },
  {
    question:
      'What is `pyproject.toml`, and what does it replace from the older `setup.py`-based packaging workflow?',
    answer:
      'A single, declarative, tool-agnostic configuration file (standardized by PEP 517/518) for project metadata, dependencies, and build backend configuration; it replaces running arbitrary Python code in `setup.py` at install/build time with a static, parseable format, making builds more predictable and letting different tools (pip, Poetry, uv, build) interoperate through one shared standard.',
    questionFr:
      "Qu'est-ce que `pyproject.toml`, et que remplace-t-il par rapport à l'ancien workflow basé sur `setup.py` ?",
    answerFr:
      "Un fichier de configuration unique, déclaratif et agnostique de l'outil (standardisé par les PEP 517/518) pour les métadonnées du projet, les dépendances et la configuration du backend de build ; il remplace l'exécution de code Python arbitraire dans `setup.py` au moment de l'installation/build par un format statique et analysable, rendant les builds plus prévisibles et permettant à différents outils (pip, Poetry, uv, build) d'interopérer via un standard partagé.",
  },
  {
    question:
      'How do pytest fixtures and parametrize improve on writing tests with plain `unittest`?',
    answer:
      "Fixtures declare reusable setup/teardown as plain functions with dependency injection by argument name, composing more flexibly than `unittest`'s inheritance-based `setUp`/`tearDown`; `@pytest.mark.parametrize` runs the same test body against many input/output pairs without hand-writing a loop or duplicating test methods, keeping test intent and test data cleanly separated.",
    questionFr:
      "En quoi les fixtures et parametrize de pytest améliorent-ils l'écriture de tests par rapport à `unittest` classique ?",
    answerFr:
      "Les fixtures déclarent du setup/teardown réutilisable comme de simples fonctions avec injection de dépendance par nom d'argument, se composant plus souplement que le `setUp`/`tearDown` basé sur l'héritage d'`unittest` ; `@pytest.mark.parametrize` exécute le même corps de test contre de nombreuses paires entrée/sortie sans écrire de boucle à la main ni dupliquer des méthodes de test, gardant l'intention du test et les données de test proprement séparées.",
  },
  {
    question:
      "What does `cProfile` measure, and what's a common next step after finding a hot function?",
    answer:
      '`cProfile` measures how much time is spent in each function call across a run (call counts and cumulative/per-call time), pinpointing which functions dominate runtime; once a hot function is identified, common next steps are algorithmic improvement, vectorizing with NumPy, caching repeated results (`functools.lru_cache`), or moving the hot path to a compiled extension - rather than optimizing code that profiling shows is not actually a bottleneck.',
    questionFr:
      'Que mesure `cProfile`, et quelle est une suite courante après avoir trouvé une fonction chaude ?',
    answerFr:
      "`cProfile` mesure le temps passé dans chaque appel de fonction sur une exécution (nombre d'appels et temps cumulé/par appel), identifiant quelles fonctions dominent le temps d'exécution ; une fois une fonction chaude identifiée, les suites courantes sont une amélioration algorithmique, la vectorisation avec NumPy, la mise en cache de résultats répétés (`functools.lru_cache`), ou le déplacement du chemin chaud vers une extension compilée - plutôt que d'optimiser du code que le profiling montre comme n'étant pas réellement un goulot d'étranglement.",
  },
  {
    question:
      "What's the difference between `__init__` and `__new__`, and when would you override `__new__`?",
    answer:
      "`__new__` is the static method that actually creates and returns a new instance (allocating memory), called before `__init__`, which then initializes that already-created instance's attributes; overriding `__new__` is needed for cases `__init__` can't handle, such as subclassing an immutable type (like `str` or `tuple`) or implementing the singleton/instance-caching pattern, since by then the object already exists.",
    questionFr:
      'Quelle est la différence entre `__init__` et `__new__`, et quand faut-il surcharger `__new__` ?',
    answerFr:
      "`__new__` est la méthode statique qui crée et retourne réellement une nouvelle instance (alloue la mémoire), appelée avant `__init__`, qui initialise ensuite les attributs de cette instance déjà créée ; surcharger `__new__` est nécessaire pour des cas qu'`__init__` ne peut pas gérer, comme sous-classer un type immuable (`str` ou `tuple`) ou implémenter le pattern singleton/cache d'instances, car à ce stade l'objet existe déjà.",
  },
];
