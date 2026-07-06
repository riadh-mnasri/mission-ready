export const questions = [
  {
    question: "What are the typical stages of a CI/CD pipeline?",
    answer:
      "Build (compile, resolve dependencies), test (unit, integration), static analysis/security scanning, packaging (a container image, an artifact), deployment to an environment, and often automated smoke tests or approval gates before promoting to the next environment.",
    questionFr: "Quelles sont les étapes typiques d'un pipeline CI/CD ?",
    answerFr:
      "Build (compilation, résolution des dépendances), tests (unitaires, intégration), analyse statique/scan de sécurité, packaging (une image container, un artefact), déploiement sur un environnement, et souvent des tests de fumée automatisés ou des portes d'approbation avant de promouvoir vers l'environnement suivant.",
  },
  {
    question: "Difference between continuous delivery and continuous deployment?",
    answer:
      "Continuous delivery means every change that passes the pipeline is proven deployable to production, but a human still triggers the actual release; continuous deployment goes one step further and releases automatically to production with no manual gate, as long as every automated check passes.",
    questionFr: "Différence entre continuous delivery et continuous deployment ?",
    answerFr:
      "Le continuous delivery signifie que chaque changement qui passe le pipeline est prouvé déployable en production, mais un humain déclenche encore la mise en production réelle ; le continuous deployment va un cran plus loin et met en production automatiquement, sans porte manuelle, tant que chaque vérification automatisée passe.",
  },
  {
    question: "What problem does Infrastructure as Code (e.g. Terraform) solve?",
    answer:
      "It replaces manually clicking through a cloud console (undocumented, hard to reproduce, easy to drift) with declarative configuration files describing the desired infrastructure state, checked into version control, reviewed like application code, and applied repeatably across environments.",
    questionFr: "Quel problème résout l'Infrastructure as Code (ex. Terraform) ?",
    answerFr:
      "Elle remplace le clic manuel dans une console cloud (non documenté, difficile à reproduire, sujet au drift) par des fichiers de configuration déclaratifs décrivant l'état d'infrastructure voulu, versionnés, revus comme du code applicatif, et appliqués de façon répétable à travers les environnements.",
  },
  {
    question: "What is a Terraform state file, and why does remote state with locking matter?",
    answer:
      "The state file maps Terraform's configuration to the real resources it manages, tracking their current attributes; storing it remotely (e.g. in an S3 bucket) with locking (e.g. via DynamoDB) prevents two people running `apply` at the same time from corrupting the state or applying conflicting changes to the same infrastructure.",
    questionFr: "Qu'est-ce qu'un fichier state Terraform, et pourquoi le state distant avec locking compte-t-il ?",
    answerFr:
      "Le fichier state fait correspondre la configuration Terraform aux ressources réelles qu'elle gère, en suivant leurs attributs actuels ; le stocker à distance (ex. dans un bucket S3) avec un verrouillage (ex. via DynamoDB) empêche que deux personnes lançant `apply` en même temps corrompent le state ou appliquent des changements conflictuels à la même infrastructure.",
  },
  {
    question: "Difference between a Jenkins declarative pipeline and a scripted pipeline?",
    answer:
      "A declarative pipeline uses a structured, opinionated syntax (`pipeline { stages { ... } }`) that's easier to read, validate, and restart mid-way; a scripted pipeline is plain Groovy code offering full programmatic flexibility at the cost of being harder to maintain and reason about, generally reserved for cases the declarative syntax can't express.",
    questionFr: "Différence entre un pipeline Jenkins declarative et un pipeline scripted ?",
    answerFr:
      "Un pipeline declarative utilise une syntaxe structurée et normée (`pipeline { stages { ... } }`) plus facile à lire, valider et redémarrer en cours de route ; un pipeline scripted est du code Groovy brut offrant une pleine flexibilité programmatique au prix d'être plus difficile à maintenir et à comprendre, généralement réservé aux cas que la syntaxe declarative ne peut pas exprimer.",
  },
  {
    question: "How do you manage secrets securely in a CI/CD pipeline?",
    answer:
      "Secrets (API keys, database passwords, signing certificates) are stored in a dedicated secrets manager or the CI platform's masked/protected variables, injected into the pipeline only at runtime and never committed to the repository or printed in logs; a dedicated vault (HashiCorp Vault, cloud-native secret managers) also adds rotation and fine-grained access policies.",
    questionFr: "Comment gérer les secrets de façon sécurisée dans un pipeline CI/CD ?",
    answerFr:
      "Les secrets (clés API, mots de passe de base de données, certificats de signature) sont stockés dans un gestionnaire de secrets dédié ou les variables masquées/protégées de la plateforme CI, injectés dans le pipeline seulement à l'exécution et jamais commités dans le dépôt ni affichés dans les logs ; un vault dédié (HashiCorp Vault, gestionnaires de secrets natifs cloud) ajoute aussi la rotation et des politiques d'accès fines.",
  },
  {
    question: "What is SAST and how does it differ from DAST?",
    answer:
      "SAST (Static Application Security Testing) analyzes source code or bytecode without running the application, catching issues like SQL injection patterns or hardcoded secrets early in the pipeline; DAST (Dynamic Application Security Testing) probes a running instance of the application from the outside, catching runtime and configuration issues SAST can't see, at the cost of needing a deployed environment to test against.",
    questionFr: "Qu'est-ce que le SAST et en quoi diffère-t-il du DAST ?",
    answerFr:
      "Le SAST (Static Application Security Testing) analyse le code source ou le bytecode sans exécuter l'application, détectant des problèmes comme des patterns d'injection SQL ou des secrets en dur tôt dans le pipeline ; le DAST (Dynamic Application Security Testing) sonde une instance en cours d'exécution de l'application depuis l'extérieur, détectant des problèmes d'exécution et de configuration que le SAST ne peut pas voir, au prix de nécessiter un environnement déployé pour tester.",
  },
  {
    question: "Difference between a blue-green deployment and a canary deployment?",
    answer:
      "Blue-green keeps two full production environments and switches all traffic from one to the other instantly once the new version is validated, giving an instant rollback by switching back; canary gradually shifts a small percentage of real traffic to the new version first, watching metrics before ramping up, trading a slower rollout for earlier detection of problems on live traffic.",
    questionFr: "Différence entre un déploiement blue-green et un déploiement canary ?",
    answerFr:
      "Le blue-green garde deux environnements de production complets et bascule tout le trafic de l'un à l'autre instantanément une fois la nouvelle version validée, offrant un rollback instantané en rebasculant ; le canary déplace graduellement un petit pourcentage de trafic réel vers la nouvelle version d'abord, en surveillant les métriques avant d'augmenter, échangeant un déploiement plus lent contre une détection plus précoce des problèmes sur du trafic réel.",
  },
  {
    question: "What is a quality gate in a CI pipeline (e.g. via SonarQube)?",
    answer:
      "An automated checkpoint that blocks a build from progressing (merging, deploying) unless it meets defined thresholds - code coverage, number of new bugs/vulnerabilities, code smell density, duplicated code percentage - enforcing a quality bar consistently instead of relying on manual code review alone.",
    questionFr: "Qu'est-ce qu'une quality gate dans un pipeline CI (ex. via SonarQube) ?",
    answerFr:
      "Un point de contrôle automatisé qui bloque un build de progresser (merge, déploiement) à moins qu'il ne respecte des seuils définis - couverture de code, nombre de nouveaux bugs/vulnérabilités, densité de code smells, pourcentage de code dupliqué - imposant un niveau de qualité de façon cohérente plutôt que de se reposer uniquement sur la revue de code manuelle.",
  },
  {
    question: "What does idempotency mean in the context of a Terraform apply, and why does it matter?",
    answer:
      "Running `terraform apply` repeatedly against the same configuration and the same real infrastructure should converge to the same result and make no further changes once the state matches the configuration; this idempotency is what makes it safe to re-run a pipeline after a partial failure instead of manually figuring out what already happened.",
    questionFr: "Que signifie l'idempotence dans le contexte d'un terraform apply, et pourquoi est-ce important ?",
    answerFr:
      "Exécuter `terraform apply` de façon répétée contre la même configuration et la même infrastructure réelle doit converger vers le même résultat et ne plus faire de changement une fois que le state correspond à la configuration ; cette idempotence est ce qui rend sûr de relancer un pipeline après un échec partiel plutôt que de devoir déterminer manuellement ce qui s'est déjà produit.",
  },
  {
    question: "What is a Terraform module, and why use one?",
    answer:
      "A reusable, self-contained package of Terraform configuration (e.g. \"a standard VPC\", \"a standard Kubernetes cluster\") that takes input variables and exposes outputs, letting teams provision consistent, reviewed infrastructure patterns across projects instead of copy-pasting and slowly diverging configuration.",
    questionFr: "Qu'est-ce qu'un module Terraform, et pourquoi en utiliser un ?",
    answerFr:
      "Un paquet réutilisable et autonome de configuration Terraform (ex. \"un VPC standard\", \"un cluster Kubernetes standard\") qui prend des variables d'entrée et expose des outputs, permettant aux équipes de provisionner des patterns d'infrastructure cohérents et revus à travers les projets plutôt que de copier-coller une configuration qui diverge lentement.",
  },
  {
    question: "How do you handle database schema migrations safely in a CI/CD pipeline?",
    answer:
      "Migrations are versioned, checked-in scripts (via Flyway, Liquibase, or a similar tool) applied automatically as a pipeline step before the new application version starts serving traffic; to stay safely reversible under rolling deployments, migrations should be backward-compatible (additive changes first, destructive changes only once no version depends on the old shape anymore).",
    questionFr: "Comment gérer les migrations de schéma de base de données de façon sûre dans un pipeline CI/CD ?",
    answerFr:
      "Les migrations sont des scripts versionnés et commités (via Flyway, Liquibase, ou un outil similaire) appliqués automatiquement comme étape de pipeline avant que la nouvelle version de l'application ne serve du trafic ; pour rester sûrement réversibles sous des déploiements rolling, les migrations doivent être rétro-compatibles (changements additifs d'abord, changements destructeurs seulement une fois qu'aucune version ne dépend plus de l'ancienne forme).",
  },
  {
    question: "How does least privilege apply to CI/CD service accounts and credentials?",
    answer:
      "The identity a pipeline uses to deploy should hold only the specific permissions needed for that pipeline's job (e.g. deploy to one specific environment/resource group), scoped and time-limited where possible, instead of a broad admin credential shared across every pipeline, so a compromised pipeline can't move laterally across the whole infrastructure.",
    questionFr: "Comment le principe du moindre privilège s'applique-t-il aux comptes de service et identifiants CI/CD ?",
    answerFr:
      "L'identité qu'un pipeline utilise pour déployer ne devrait porter que les permissions spécifiques nécessaires au travail de ce pipeline (ex. déployer vers un environnement/resource group précis), limitées et à durée de vie courte quand c'est possible, plutôt qu'un identifiant admin large partagé entre tous les pipelines, afin qu'un pipeline compromis ne puisse pas se déplacer latéralement sur toute l'infrastructure.",
  },
  {
    question: "What is a GitOps workflow?",
    answer:
      "A model where a Git repository is the single source of truth for the desired state of an environment (application manifests, infrastructure config), and an automated agent (e.g. Argo CD, Flux) continuously reconciles the real cluster/infrastructure to match what's declared in Git, rather than pipelines pushing changes imperatively to the target environment.",
    questionFr: "Qu'est-ce qu'un workflow GitOps ?",
    answerFr:
      "Un modèle où un dépôt Git est la source de vérité unique pour l'état voulu d'un environnement (manifestes applicatifs, configuration d'infrastructure), et un agent automatisé (ex. Argo CD, Flux) réconcilie en continu le vrai cluster/infrastructure pour correspondre à ce qui est déclaré dans Git, plutôt que des pipelines qui poussent des changements de façon impérative vers l'environnement cible.",
  },
  {
    question: "What is Software Composition Analysis (SCA), and why has it become critical?",
    answer:
      "SCA scans an application's third-party dependencies for known vulnerabilities (CVEs) and license compliance issues, since most of a modern application's code is actually open-source libraries; with supply-chain attacks (a compromised dependency, a typosquatted package) becoming a common attack vector, scanning what you depend on matters as much as scanning code you wrote yourself.",
    questionFr: "Qu'est-ce que le Software Composition Analysis (SCA), et pourquoi est-il devenu critique ?",
    answerFr:
      "Le SCA scanne les dépendances tierces d'une application à la recherche de vulnérabilités connues (CVE) et de problèmes de conformité de licence, puisque l'essentiel du code d'une application moderne est en réalité des bibliothèques open-source ; avec les attaques de la chaîne d'approvisionnement (une dépendance compromise, un package typosquatté) devenant un vecteur d'attaque courant, scanner ce dont on dépend compte autant que scanner le code qu'on a écrit soi-même.",
  },
];
