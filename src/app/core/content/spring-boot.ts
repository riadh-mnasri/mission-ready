export const questions = [
  {
    question: "What does Spring Boot's auto-configuration mechanism actually do?",
    answer:
      "At startup, Spring Boot inspects what's on the classpath and what beans already exist, then conditionally registers sensible default beans (a `DataSource`, a `DispatcherServlet`, a Jackson `ObjectMapper`...) via `@Conditional`-based configuration classes, so a working application needs almost no manual wiring for common setups.",
    questionFr: "Que fait réellement le mécanisme d'auto-configuration de Spring Boot ?",
    answerFr:
      "Au démarrage, Spring Boot inspecte ce qui est présent sur le classpath et quels beans existent déjà, puis enregistre conditionnellement des beans par défaut sensés (un `DataSource`, un `DispatcherServlet`, un `ObjectMapper` Jackson...) via des classes de configuration basées sur `@Conditional`, si bien qu'une application fonctionnelle ne nécessite presque aucun câblage manuel pour les configurations courantes.",
  },
  {
    question: "What is a Spring Bean and how does the IoC container manage its lifecycle?",
    answer:
      "A Bean is any object whose instantiation, configuration, and lifecycle (creation, dependency injection, initialization callbacks, destruction) is managed by the Spring IoC container instead of being created directly with `new`, which is what enables dependency injection and lets the framework apply cross-cutting behavior (proxies, AOP) around it.",
    questionFr: "Qu'est-ce qu'un Spring Bean et comment le conteneur IoC gère-t-il son cycle de vie ?",
    answerFr:
      "Un Bean est tout objet dont l'instanciation, la configuration et le cycle de vie (création, injection de dépendances, callbacks d'initialisation, destruction) sont gérés par le conteneur IoC de Spring plutôt que créés directement avec `new`, ce qui permet l'injection de dépendances et laisse le framework appliquer un comportement transverse (proxies, AOP) autour de lui.",
  },
  {
    question: "Difference between `@Component`, `@Service`, `@Repository`, and `@Controller`?",
    answer:
      "All four are specializations of `@Component` and get picked up identically by component scanning; the more specific ones exist for readability and to trigger extra framework behavior (`@Repository` translates persistence exceptions into Spring's `DataAccessException` hierarchy, `@Controller` marks a class for MVC request mapping), not because they behave fundamentally differently as beans.",
    questionFr: "Différence entre `@Component`, `@Service`, `@Repository` et `@Controller` ?",
    answerFr:
      "Les quatre sont des spécialisations de `@Component` et sont détectées de façon identique par le component scanning ; les plus spécifiques existent pour la lisibilité et pour déclencher un comportement de framework supplémentaire (`@Repository` traduit les exceptions de persistance dans la hiérarchie `DataAccessException` de Spring, `@Controller` marque une classe pour le mapping de requêtes MVC), pas parce qu'ils se comportent fondamentalement différemment en tant que beans.",
  },
  {
    question: "How do Spring profiles work, and what problem do they solve?",
    answer:
      "A profile (e.g. `dev`, `prod`) lets you activate a different subset of beans and configuration properties (`application-dev.yml`, `application-prod.yml`) depending on the environment, so the same codebase can point to an in-memory database locally and a managed production database in production without an `if` statement anywhere in application code.",
    questionFr: "Comment fonctionnent les profils Spring, et quel problème résolvent-ils ?",
    answerFr:
      "Un profil (ex. `dev`, `prod`) permet d'activer un sous-ensemble différent de beans et de propriétés de configuration (`application-dev.yml`, `application-prod.yml`) selon l'environnement, si bien que le même codebase peut pointer vers une base de données en mémoire en local et une base de données managée en production sans aucun `if` dans le code applicatif.",
  },
  {
    question: "What does `@Transactional` do, and what is the classic self-invocation pitfall?",
    answer:
      "It wraps the annotated method in a proxy that starts a transaction before the call and commits/rolls back after it; because that proxy only intercepts calls coming from outside the bean, calling a `@Transactional` method from another method in the same class (self-invocation) bypasses the proxy entirely and silently runs with no transaction.",
    questionFr: "Que fait `@Transactional`, et quel est le piège classique de l'auto-invocation ?",
    answerFr:
      "Elle enveloppe la méthode annotée dans un proxy qui démarre une transaction avant l'appel et commit/rollback après ; comme ce proxy n'intercepte que les appels venant de l'extérieur du bean, appeler une méthode `@Transactional` depuis une autre méthode de la même classe (auto-invocation) contourne entièrement le proxy et s'exécute silencieusement sans transaction.",
  },
  {
    question: "What is Spring Data JPA and how does it reduce repository boilerplate?",
    answer:
      "It generates a working repository implementation at runtime from just an interface (`extends JpaRepository<Entity, Id>`), deriving queries from method names (`findByEmailAndActiveTrue`) or `@Query` annotations, eliminating the manual DAO/EntityManager boilerplate that plain JPA would otherwise require for common CRUD and query operations.",
    questionFr: "Qu'est-ce que Spring Data JPA et comment réduit-il le boilerplate des repositories ?",
    answerFr:
      "Il génère à l'exécution une implémentation de repository fonctionnelle à partir d'une simple interface (`extends JpaRepository<Entity, Id>`), en dérivant des requêtes à partir des noms de méthode (`findByEmailAndActiveTrue`) ou d'annotations `@Query`, éliminant le boilerplate manuel de DAO/EntityManager que du JPA brut exigerait autrement pour les opérations CRUD et de requête courantes.",
  },
  {
    question: "Why is constructor injection generally preferred over field injection?",
    answer:
      "Constructor injection makes dependencies explicit and required (the object can't be constructed in an invalid state), enables making fields `final`, and makes the class trivially testable with plain `new` and no Spring context; field injection (`@Autowired` on a field) hides the dependency graph and forces reflection-based test setup even for pure unit tests.",
    questionFr: "Pourquoi l'injection par constructeur est-elle généralement préférée à l'injection par champ ?",
    answerFr:
      "L'injection par constructeur rend les dépendances explicites et obligatoires (l'objet ne peut pas être construit dans un état invalide), permet de rendre les champs `final`, et rend la classe trivialement testable avec un simple `new` sans contexte Spring ; l'injection par champ (`@Autowired` sur un champ) masque le graphe de dépendances et force une configuration de test basée sur la réflexion même pour de purs tests unitaires.",
  },
  {
    question: "What is Spring Boot Actuator and what does it expose?",
    answer:
      "A set of production-ready endpoints (`/actuator/health`, `/actuator/metrics`, `/actuator/env`, `/actuator/info`) that expose an application's operational state for monitoring and management tools, letting ops teams check readiness/liveness, pull metrics, or inspect configuration without adding custom code.",
    questionFr: "Qu'est-ce que Spring Boot Actuator et qu'expose-t-il ?",
    answerFr:
      "Un ensemble d'endpoints prêts pour la production (`/actuator/health`, `/actuator/metrics`, `/actuator/env`, `/actuator/info`) qui exposent l'état opérationnel d'une application pour des outils de monitoring et de gestion, permettant aux équipes ops de vérifier readiness/liveness, récupérer des métriques, ou inspecter la configuration sans code custom.",
  },
  {
    question: "At a high level, how does the Spring Security filter chain work?",
    answer:
      "Every incoming HTTP request passes through an ordered chain of servlet filters, each handling one concern (authentication, CSRF protection, session management, authorization); a request is only allowed to reach the actual controller once it has passed every filter, which is why security rules are configured as an ordered chain rather than a single check.",
    questionFr: "À haut niveau, comment fonctionne la filter chain de Spring Security ?",
    answerFr:
      "Chaque requête HTTP entrante traverse une chaîne ordonnée de filtres servlet, chacun gérant une préoccupation (authentification, protection CSRF, gestion de session, autorisation) ; une requête n'est autorisée à atteindre le vrai controller qu'une fois qu'elle a passé chaque filtre, ce qui explique pourquoi les règles de sécurité sont configurées comme une chaîne ordonnée plutôt qu'une seule vérification.",
  },
  {
    question: "What is Spring WebFlux and how does it differ from Spring MVC?",
    answer:
      "Spring MVC is a traditional blocking, thread-per-request model built on the Servlet API; WebFlux is Spring's reactive stack built on Project Reactor, using a small number of event-loop threads to handle many concurrent requests non-blockingly, trading a steeper learning curve (`Mono`/`Flux` everywhere) for much better resource usage under high-concurrency, I/O-bound workloads.",
    questionFr: "Qu'est-ce que Spring WebFlux et en quoi diffère-t-il de Spring MVC ?",
    answerFr:
      "Spring MVC est un modèle bloquant traditionnel à un thread par requête, construit sur l'API Servlet ; WebFlux est la stack réactive de Spring construite sur Project Reactor, utilisant un petit nombre de threads event-loop pour gérer de nombreuses requêtes concurrentes de façon non bloquante, échangeant une courbe d'apprentissage plus raide (`Mono`/`Flux` partout) contre une bien meilleure utilisation des ressources sous forte concurrence pour des charges I/O-bound.",
  },
  {
    question: "What is a Spring AOP aspect, and what's a typical use case?",
    answer:
      "An aspect defines cross-cutting behavior (logging, metrics, retry, authorization checks) applied around matching method calls via a pointcut expression, without modifying those methods' code; a common example is a `@Loggable` annotation whose aspect logs method entry/exit and duration for every annotated method across the codebase.",
    questionFr: "Qu'est-ce qu'un aspect Spring AOP, et quel est un cas d'usage typique ?",
    answerFr:
      "Un aspect définit un comportement transverse (logging, métriques, retry, vérifications d'autorisation) appliqué autour d'appels de méthode correspondants via une expression pointcut, sans modifier le code de ces méthodes ; un exemple courant est une annotation `@Loggable` dont l'aspect logue l'entrée/sortie et la durée de méthode pour chaque méthode annotée à travers le codebase.",
  },
  {
    question: "Difference between `@SpringBootTest` and a plain unit test using Mockito?",
    answer:
      "A plain Mockito test instantiates the class under test directly with mocked collaborators, running in milliseconds with no framework involved; `@SpringBootTest` boots some or all of the actual Spring application context, which is slower but verifies real wiring, configuration, and integration between beans, so the two are complementary rather than interchangeable.",
    questionFr: "Différence entre `@SpringBootTest` et un test unitaire classique avec Mockito ?",
    answerFr:
      "Un test Mockito classique instancie directement la classe testée avec des collaborateurs mockés, s'exécutant en millisecondes sans framework impliqué ; `@SpringBootTest` démarre tout ou partie du vrai contexte applicatif Spring, ce qui est plus lent mais vérifie le vrai câblage, la configuration, et l'intégration entre beans, donc les deux sont complémentaires plutôt qu'interchangeables.",
  },
  {
    question: "Difference between singleton and prototype bean scope, and when would you use prototype?",
    answer:
      "Singleton (the default) creates exactly one shared instance of a bean for the entire application context; prototype creates a brand-new instance every time the bean is requested, useful for stateful, non-thread-safe objects (e.g. a mutable builder or a per-use-case working object) that must never be shared across requests.",
    questionFr: "Différence entre le scope singleton et prototype pour un bean, et quand utiliser prototype ?",
    answerFr:
      "Singleton (par défaut) crée exactement une instance partagée d'un bean pour tout le contexte applicatif ; prototype crée une toute nouvelle instance à chaque demande du bean, utile pour des objets à état, non thread-safe (ex. un builder mutable ou un objet de travail par cas d'usage) qui ne doivent jamais être partagés entre requêtes.",
  },
  {
    question: "What's the benefit of centralized exception handling with `@ControllerAdvice`/`@ExceptionHandler` versus handling exceptions in each controller?",
    answer:
      "A `@ControllerAdvice` class catches exceptions thrown by any controller in one place, mapping domain exceptions to consistent HTTP error responses (status code, error body shape) across the whole API; handling them locally in every controller duplicates that mapping logic and risks inconsistent error formats between endpoints.",
    questionFr: "Quel est l'avantage d'une gestion centralisée des exceptions avec `@ControllerAdvice`/`@ExceptionHandler` plutôt que dans chaque controller ?",
    answerFr:
      "Une classe `@ControllerAdvice` intercepte les exceptions levées par n'importe quel controller à un seul endroit, mappant les exceptions métier vers des réponses d'erreur HTTP cohérentes (code de statut, forme du corps d'erreur) sur toute l'API ; les gérer localement dans chaque controller duplique cette logique de mapping et risque des formats d'erreur incohérents entre endpoints.",
  },
];
