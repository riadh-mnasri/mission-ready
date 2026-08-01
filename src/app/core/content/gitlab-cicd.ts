export const questions = [
  {
    question: 'What are the three core levels of structure in a `.gitlab-ci.yml` pipeline?',
    answer:
      'A pipeline is made of stages (ordered phases like build, test, deploy), each stage contains one or more jobs, and each job is a set of shell commands (a `script`) run in its own isolated environment; jobs in the same stage run in parallel by default, and a stage only starts once every job in the previous stage has completed.',
    questionFr:
      "Quels sont les trois niveaux de structure centraux d'un pipeline `.gitlab-ci.yml` ?",
    answerFr:
      "Un pipeline est composé de stages (des phases ordonnées comme build, test, deploy), chaque stage contient un ou plusieurs jobs, et chaque job est un ensemble de commandes shell (un `script`) exécuté dans son propre environnement isolé ; les jobs d'un même stage s'exécutent en parallèle par défaut, et un stage ne démarre qu'une fois que tous les jobs du stage précédent sont terminés.",
  },
  {
    question:
      "What is a GitLab Runner, and what's the difference between a shared and a specific/self-hosted runner?",
    answer:
      "A Runner is the agent process that actually picks up and executes a job's script, typically inside a Docker container or VM; shared runners are provided by GitLab (or a GitLab instance admin) and available to any project on that instance, while a specific runner is registered to and reserved for one project or group, commonly used when a job needs custom hardware, network access, or a controlled software environment.",
    questionFr:
      "Qu'est-ce qu'un GitLab Runner, et quelle est la différence entre un runner partagé et un runner spécifique/self-hosted ?",
    answerFr:
      "Un Runner est le processus agent qui récupère et exécute réellement le script d'un job, typiquement dans un conteneur Docker ou une VM ; les runners partagés sont fournis par GitLab (ou un admin d'instance GitLab) et disponibles pour tout projet sur cette instance, tandis qu'un runner spécifique est enregistré et réservé à un seul projet ou groupe, couramment utilisé quand un job a besoin de matériel spécifique, d'accès réseau, ou d'un environnement logiciel contrôlé.",
  },
  {
    question:
      "What's the difference between a Merge Request pipeline and a branch (push) pipeline?",
    answer:
      'A branch pipeline runs on every push to a branch, regardless of any merge request; a Merge Request pipeline runs specifically in the context of an open MR and can additionally validate what the code would look like merged into the target branch, surfacing integration issues before merge rather than only after - configured via `rules` targeting the `merge_request_event` context.',
    questionFr:
      'Quelle est la différence entre un pipeline de Merge Request et un pipeline de branche (push) ?',
    answerFr:
      "Un pipeline de branche s'exécute à chaque push sur une branche, indépendamment de toute merge request ; un pipeline de Merge Request s'exécute spécifiquement dans le contexte d'une MR ouverte et peut en plus valider à quoi ressemblerait le code une fois mergé dans la branche cible, faisant remonter des problèmes d'intégration avant le merge plutôt qu'après seulement - configuré via `rules` ciblant le contexte `merge_request_event`.",
  },
  {
    question: 'What is a GitLab Environment, and how does it relate to a deployment job?',
    answer:
      'An Environment (e.g. staging, production) is a named target that GitLab tracks deployment history and status for; a job becomes a deployment job by declaring an `environment:` key, which lets GitLab show a timeline of what was deployed where and when, and enables environment-specific features like manual approval gates, auto-stop for review apps, and one-click rollback to a previous deployment.',
    questionFr:
      "Qu'est-ce qu'un Environment GitLab, et quel est son rapport avec un job de déploiement ?",
    answerFr:
      "Un Environment (staging, production, par exemple) est une cible nommée pour laquelle GitLab suit l'historique et le statut de déploiement ; un job devient un job de déploiement en déclarant une clé `environment:`, ce qui permet à GitLab d'afficher une timeline de ce qui a été déployé où et quand, et active des fonctionnalités spécifiques à l'environnement comme des portes d'approbation manuelle, l'arrêt auto pour les review apps, et un rollback en un clic vers un déploiement précédent.",
  },
  {
    question: "Artifacts vs cache in GitLab CI - what's the difference in purpose and lifecycle?",
    answer:
      "Artifacts are a job's output files (a built binary, test reports, coverage) explicitly passed downstream to later stages/jobs and stored/browsable after the pipeline finishes; cache is meant purely as a performance optimization to speed up repeated installs (dependencies like `node_modules`) between pipeline runs, is not guaranteed to persist, and shouldn't be relied on to actually carry required data between jobs.",
    questionFr: 'Artifacts vs cache dans GitLab CI - quelle différence de but et de cycle de vie ?',
    answerFr:
      "Les artifacts sont les fichiers de sortie d'un job (un binaire construit, des rapports de test, la couverture) explicitement transmis aux stages/jobs suivants et stockés/consultables une fois le pipeline terminé ; le cache est pensé purement comme une optimisation de performance pour accélérer des installations répétées (des dépendances comme `node_modules`) entre les exécutions de pipeline, n'est pas garanti de persister, et ne doit pas être utilisé pour transporter réellement des données requises entre jobs.",
  },
  {
    question:
      'What do `include` and `extends` let you do for reusing pipeline configuration, and how do they differ?',
    answer:
      '`include` pulls in configuration from another YAML file (local, from another project, a remote URL, or a template), letting shared pipeline logic live in one place across multiple projects; `extends` lets one job inherit and merge configuration from a hidden template job defined within the same (or an included) config, avoiding copy-pasted job definitions that only differ in a few keys.',
    questionFr:
      'Que permettent `include` et `extends` pour réutiliser de la configuration de pipeline, et en quoi diffèrent-ils ?',
    answerFr:
      "`include` importe de la configuration depuis un autre fichier YAML (local, d'un autre projet, une URL distante, ou un template), permettant à une logique de pipeline partagée de vivre à un seul endroit à travers plusieurs projets ; `extends` permet à un job d'hériter et de fusionner la configuration d'un job template caché défini dans la même config (ou une config incluse), évitant des définitions de job copiées-collées qui ne diffèrent que par quelques clés.",
  },
  {
    question:
      'Why did GitLab move from `only`/`except` toward `rules` for controlling when a job runs?',
    answer:
      '`only`/`except` used a fixed, limited set of conditions (branch name, tag, specific keywords) with confusing combination semantics when both were used together; `rules` evaluates an ordered list of conditions with full expression support and lets each matching rule set its own behavior (run, skip, run manually, set `allow_failure`), giving far more precise and readable control over exactly when and how a job executes.',
    questionFr:
      "Pourquoi GitLab est-il passé de `only`/`except` à `rules` pour contrôler quand un job s'exécute ?",
    answerFr:
      "`only`/`except` utilisait un ensemble fixe et limité de conditions (nom de branche, tag, mots-clés spécifiques) avec une sémantique de combinaison confuse quand les deux étaient utilisés ensemble ; `rules` évalue une liste ordonnée de conditions avec un support d'expression complet et permet à chaque règle correspondante de définir son propre comportement (exécuter, ignorer, exécuter manuellement, définir `allow_failure`), donnant un contrôle bien plus précis et lisible sur exactement quand et comment un job s'exécute.",
  },
  {
    question:
      'What are the three scopes at which GitLab CI/CD variables can be defined, and what does "protected"/"masked" add on top of that?',
    answer:
      'Variables can be set at the project, group, or instance level, with narrower scopes overriding broader ones; marking a variable "protected" restricts it to only be exposed on protected branches/tags (keeping deploy credentials away from arbitrary feature branches), and "masked" hides its value from job logs, both aimed at reducing the blast radius of a leaked secret.',
    questionFr:
      'Quels sont les trois niveaux auxquels des variables CI/CD GitLab peuvent être définies, et qu\'ajoutent "protected"/"masked" par-dessus ?',
    answerFr:
      'Les variables peuvent être définies au niveau projet, groupe, ou instance, les portées plus étroites surchargeant les plus larges ; marquer une variable "protected" la restreint à n\'être exposée que sur les branches/tags protégés (gardant les credentials de déploiement hors des branches de feature arbitraires), et "masked" cache sa valeur dans les logs de job, les deux visant à réduire l\'impact d\'un secret qui fuiterait.',
  },
  {
    question: 'What does Auto DevOps automate, and when does relying on it stop being a good fit?',
    answer:
      "It auto-detects a project's language/framework and generates a full pipeline (build, test, container scan, deploy to Kubernetes, review apps) with zero pipeline configuration required; it stops being a good fit once a project's build, test, or deployment process diverges meaningfully from its generic conventions, at which point a hand-written `.gitlab-ci.yml` gives back the control Auto DevOps trades away for convenience.",
    questionFr: "Qu'automatise Auto DevOps, et quand cesse-t-il d'être un bon choix ?",
    answerFr:
      "Il détecte automatiquement le langage/framework d'un projet et génère un pipeline complet (build, test, scan de conteneur, déploiement sur Kubernetes, review apps) sans aucune configuration de pipeline requise ; il cesse d'être un bon choix dès que le processus de build, test ou déploiement d'un projet diverge significativement de ses conventions génériques, moment où un `.gitlab-ci.yml` écrit à la main redonne le contrôle qu'Auto DevOps échange contre la commodité.",
  },
  {
    question: 'What is a Review App, and what feedback loop problem does it solve?',
    answer:
      "An ephemeral, fully deployed environment automatically created for a specific merge request (and torn down when it's closed/merged), letting reviewers and stakeholders click through the actual running application for that change rather than only reading a diff - catching visual, UX, or integration issues a code review alone would miss, before the change ever reaches a shared staging environment.",
    questionFr: "Qu'est-ce qu'une Review App, et quel problème de boucle de feedback résout-elle ?",
    answerFr:
      "Un environnement éphémère, entièrement déployé, créé automatiquement pour une merge request spécifique (et détruit à sa fermeture/son merge), permettant aux relecteurs et parties prenantes de naviguer dans l'application réellement en cours d'exécution pour ce changement plutôt que de seulement lire un diff - détectant des problèmes visuels, UX ou d'intégration qu'une revue de code seule manquerait, avant que le changement n'atteigne un environnement de staging partagé.",
  },
  {
    question:
      "What's a key conceptual difference between GitLab CI/CD and GitHub Actions, beyond just syntax?",
    answer:
      'GitLab CI/CD is one integrated part of a single all-in-one DevOps platform (issues, MRs, container registry, environments, security scanning all natively wired into the pipeline), whereas GitHub Actions is workflow automation built around a marketplace of independently maintained, reusable actions - GitLab favors an integrated, opinionated pipeline, GitHub favors composing third-party building blocks.',
    questionFr:
      'Quelle est une différence conceptuelle clé entre GitLab CI/CD et GitHub Actions, au-delà de la simple syntaxe ?',
    answerFr:
      "GitLab CI/CD est une partie intégrée d'une plateforme DevOps tout-en-un unique (issues, MRs, registre de conteneurs, environnements, scan de sécurité tous nativement connectés au pipeline), tandis que GitHub Actions est de l'automatisation de workflow construite autour d'une marketplace d'actions réutilisables maintenues indépendamment - GitLab privilégie un pipeline intégré et opiniâtre, GitHub privilégie la composition de briques tierces.",
  },
  {
    question:
      'What does the `needs` keyword change about how a pipeline executes, compared to the default stage-sequential model?',
    answer:
      "By default, a job waits for every job in the previous stage to finish even if it doesn't actually depend on most of them; `needs` lets a job declare exactly which other jobs it depends on and start as soon as those specific jobs finish, turning the pipeline into a DAG (directed acyclic graph) instead of a strict stage-by-stage sequence, which can significantly cut total pipeline duration when jobs have few real cross-dependencies.",
    questionFr:
      "Que change le mot-clé `needs` dans l'exécution d'un pipeline, comparé au modèle séquentiel par stage par défaut ?",
    answerFr:
      "Par défaut, un job attend que tous les jobs du stage précédent se terminent même s'il ne dépend en réalité que de peu d'entre eux ; `needs` permet à un job de déclarer exactement de quels autres jobs il dépend et de démarrer dès que ces jobs spécifiques sont terminés, transformant le pipeline en DAG (graphe orienté acyclique) plutôt qu'une séquence stricte stage par stage, ce qui peut réduire significativement la durée totale du pipeline quand les jobs ont peu de vraies interdépendances.",
  },
  {
    question:
      "How does GitLab's built-in Container Registry typically fit into a pipeline that builds and deploys Docker images?",
    answer:
      "A build stage job builds the image and pushes it to the project's own Container Registry (authenticated automatically via a predefined CI job token, no separate credential setup needed), then a later deploy stage job pulls that same tagged image by reference - keeping the built artifact, its provenance, and its deployment target all within one integrated, access-controlled system instead of wiring up a third-party registry.",
    questionFr:
      "Comment le Container Registry intégré de GitLab s'intègre-t-il typiquement dans un pipeline qui construit et déploie des images Docker ?",
    answerFr:
      "Un job du stage de build construit l'image et la pousse vers le Container Registry propre au projet (authentifié automatiquement via un job token CI prédéfini, sans configuration de credential séparée), puis un job du stage de déploiement ultérieur récupère cette même image taguée par référence - gardant l'artefact construit, sa provenance, et sa cible de déploiement au sein d'un même système intégré et contrôlé en accès plutôt que de connecter un registre tiers.",
  },
  {
    question:
      "What do GitLab's built-in SAST and DAST scanning add to a pipeline, and how do they differ in what they analyze?",
    answer:
      "SAST (Static Application Security Testing) analyzes the source code itself for known vulnerability patterns without running the application; DAST (Dynamic Application Security Testing) probes a running instance of the application (typically a review app or staging deployment) by actually sending it requests, catching runtime and configuration issues SAST can't see from source alone - both are included as ready-to-use pipeline templates rather than requiring a separately integrated third-party tool.",
    questionFr:
      "Qu'apportent le SAST et le DAST intégrés de GitLab à un pipeline, et en quoi diffèrent-ils dans ce qu'ils analysent ?",
    answerFr:
      "Le SAST (Static Application Security Testing) analyse le code source lui-même à la recherche de motifs de vulnérabilité connus sans exécuter l'application ; le DAST (Dynamic Application Security Testing) sonde une instance en cours d'exécution de l'application (typiquement une review app ou un déploiement staging) en lui envoyant réellement des requêtes, détectant des problèmes d'exécution et de configuration que le SAST ne peut pas voir depuis le seul code source - les deux sont inclus comme templates de pipeline prêts à l'emploi plutôt que de nécessiter un outil tiers intégré séparément.",
  },
  {
    question:
      'What problem do multi-project (parent-child) pipelines solve for a system split across several repositories?',
    answer:
      'A pipeline in one project can trigger a pipeline in another project (or a downstream sub-pipeline within the same project), letting a change in a shared library trigger validation in its dependent services, or letting a monorepo-style setup split unrelated parts of a large pipeline into independently triggered, independently visualized pipelines instead of one enormous, tightly coupled configuration.',
    questionFr:
      'Quel problème résolvent les pipelines multi-projets (parent-enfant) pour un système découpé en plusieurs repositories ?',
    answerFr:
      "Un pipeline d'un projet peut déclencher un pipeline dans un autre projet (ou un sous-pipeline en aval au sein du même projet), permettant à un changement dans une librairie partagée de déclencher la validation de ses services dépendants, ou permettant à une configuration façon monorepo de découper des parties sans rapport d'un grand pipeline en pipelines déclenchés et visualisés indépendamment plutôt qu'une seule configuration énorme et fortement couplée.",
  },
  {
    question:
      'What do protected branches and protected environments enforce together, in a typical production deployment gate?',
    answer:
      'A protected branch restricts who can push to or merge into it (e.g. only via an approved MR to `main`); a protected environment additionally restricts who is allowed to actually trigger a deployment job targeting it (e.g. only specific users or groups, or requiring manual approval); combined, they ensure both "what code can reach production" and "who can push the button to deploy it" are independently governed.',
    questionFr:
      'Que garantissent ensemble les branches protégées et les environnements protégés, dans une porte de déploiement production typique ?',
    answerFr:
      'Une branche protégée restreint qui peut y pousser ou y merger (uniquement via une MR approuvée vers `main`, par exemple) ; un environnement protégé restreint en plus qui est autorisé à réellement déclencher un job de déploiement le ciblant (seulement certains utilisateurs ou groupes, ou une approbation manuelle requise) ; combinés, ils garantissent que "quel code peut atteindre la production" et "qui peut appuyer sur le bouton pour le déployer" sont gouvernés indépendamment.',
  },
  {
    question:
      "What's the practical impact of properly configuring dependency caching (e.g. node_modules, Maven `.m2`) across pipeline runs?",
    answer:
      'Without a cache, every job re-downloads the full dependency tree from scratch, which dominates pipeline duration for dependency-heavy projects far more than the actual build/test work itself; a correctly keyed cache (typically by lockfile hash) persists that download between runs, cutting pipeline time significantly - though it needs a correct cache key to avoid silently reusing stale dependencies after a lockfile change.',
    questionFr:
      "Quel est l'impact pratique de bien configurer le cache de dépendances (node_modules, Maven `.m2`, par exemple) entre les exécutions de pipeline ?",
    answerFr:
      "Sans cache, chaque job retélécharge tout l'arbre de dépendances depuis zéro, ce qui domine la durée du pipeline pour des projets riches en dépendances bien plus que le travail de build/test lui-même ; un cache correctement clé (typiquement par un hash du lockfile) persiste ce téléchargement entre les exécutions, réduisant significativement le temps de pipeline - à condition d'avoir une clé de cache correcte pour éviter de réutiliser silencieusement des dépendances obsolètes après un changement de lockfile.",
  },
];
