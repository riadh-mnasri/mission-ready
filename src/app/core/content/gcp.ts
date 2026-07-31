export const questions = [
  {
    question: 'Difference between Compute Engine, Cloud Run, and Cloud Functions?',
    answer:
      'Compute Engine gives you full VMs you manage yourself; Cloud Run runs stateless containers with autoscaling (including to zero) without managing servers; Cloud Functions is event-driven, single-purpose code (an even lighter, more opinionated serverless model than Cloud Run).',
    questionFr: 'Différence entre Compute Engine, Cloud Run et Cloud Functions ?',
    answerFr:
      'Compute Engine donne des VMs complètes que vous gérez vous-même ; Cloud Run fait tourner des conteneurs stateless avec autoscaling (y compris à zéro) sans gérer de serveurs ; Cloud Functions est du code événementiel mono-fonction (un modèle serverless encore plus léger et cadré que Cloud Run).',
  },
  {
    question: 'How is the GCP resource hierarchy organized (Organization, Folder, Project)?',
    answer:
      'Organization sits at the top and maps to a company domain; Folders group projects (e.g. by team or environment) and can be nested; Projects are the actual billing and resource container - IAM policies and quotas set higher in the hierarchy are inherited downward.',
    questionFr:
      'Comment est organisée la hiérarchie de ressources GCP (Organization, Folder, Project) ?',
    answerFr:
      "L'Organization est au sommet et correspond au domaine de l'entreprise ; les Folders regroupent des projects (par équipe ou environnement par exemple) et peuvent être imbriqués ; les Projects sont le conteneur réel de facturation et de ressources - les politiques IAM et quotas définis plus haut dans la hiérarchie sont hérités vers le bas.",
  },
  {
    question: 'What is a Service Account and how does Workload Identity improve on static keys?',
    answer:
      'A Service Account is a non-human identity used by workloads to call GCP APIs; instead of downloading and storing a long-lived JSON key, Workload Identity lets a workload (e.g. a GKE pod or an external CI job) impersonate a service account via short-lived tokens, removing the need to manage and rotate secrets.',
    questionFr:
      "Qu'est-ce qu'un Service Account et en quoi Workload Identity améliore-t-il les clés statiques ?",
    answerFr:
      "Un Service Account est une identité non humaine utilisée par des workloads pour appeler les APIs GCP ; au lieu de télécharger et stocker une clé JSON longue durée, Workload Identity permet à un workload (un pod GKE ou un job CI externe) d'usurper un service account via des tokens de courte durée, supprimant le besoin de gérer et faire tourner des secrets.",
  },
  {
    question: "What is a VPC in GCP and what makes it different from AWS's per-region VPC model?",
    answer:
      "A GCP VPC is a single global resource spanning all regions, with subnets created per region; this means you don't need VPC peering across regions of the same network the way you often do on AWS - only cross-project or cross-organization connectivity typically needs peering or Shared VPC.",
    questionFr:
      "Qu'est-ce qu'un VPC dans GCP et en quoi diffère-t-il du modèle VPC par région d'AWS ?",
    answerFr:
      "Un VPC GCP est une ressource globale unique qui couvre toutes les régions, avec des subnets créés par région ; cela signifie qu'on n'a pas besoin de peering VPC entre régions d'un même réseau comme souvent sur AWS - seule la connectivité inter-projets ou inter-organisation nécessite généralement du peering ou un Shared VPC.",
  },
  {
    question: 'Cloud SQL vs Spanner vs Firestore/Bigtable - when do you pick each?',
    answer:
      'Cloud SQL is managed MySQL/PostgreSQL/SQL Server for standard relational workloads that fit on one region; Spanner is a globally distributed, strongly consistent relational database for workloads that need horizontal scale with SQL semantics; Firestore is a document database for app/mobile backends; Bigtable is a wide-column store for very high-throughput, low-latency analytical or time-series workloads.',
    questionFr: 'Cloud SQL vs Spanner vs Firestore/Bigtable - quand choisir chacun ?',
    answerFr:
      "Cloud SQL est du MySQL/PostgreSQL/SQL Server managé pour des workloads relationnels standards tenant sur une région ; Spanner est une base relationnelle distribuée globalement et fortement cohérente pour des workloads nécessitant du scale horizontal avec sémantique SQL ; Firestore est une base documentaire pour des backends d'app/mobile ; Bigtable est un store wide-column pour des workloads analytiques ou time-series à très haut débit et faible latence.",
  },
  {
    question:
      "What does Google manage for you in GKE, and what's the difference between Autopilot and Standard mode?",
    answer:
      'In both modes Google runs and patches the control plane (API server, etcd) for you; in Standard mode you provision and manage the node pools yourself, while Autopilot manages the nodes too and bills per pod resource request instead of per node, trading some low-level control for near-zero infrastructure operations.',
    questionFr:
      'Que gère Google pour vous dans GKE, et quelle est la différence entre le mode Autopilot et Standard ?',
    answerFr:
      "Dans les deux modes, Google fait tourner et patche le control plane (API server, etcd) pour vous ; en mode Standard vous provisionnez et gérez vous-même les node pools, tandis qu'Autopilot gère aussi les nœuds et facture par requête de ressource au pod plutôt que par nœud, échangeant un peu de contrôle bas niveau contre une charge opérationnelle quasi nulle.",
  },
  {
    question: 'What are the Cloud Storage classes and what tradeoff do they encode?',
    answer:
      'Standard, Nearline, Coldline, and Archive trade a lower storage cost for a higher retrieval cost and a minimum storage duration, based on how often the data is expected to be accessed - from daily access (Standard) down to roughly once a year (Archive), similar in spirit to AWS S3 or Azure Blob tiers.',
    questionFr: 'Quelles sont les classes Cloud Storage et quel compromis encodent-elles ?',
    answerFr:
      "Standard, Nearline, Coldline et Archive échangent un coût de stockage plus bas contre un coût de récupération plus élevé et une durée de stockage minimale, selon la fréquence d'accès attendue aux données - d'un accès quotidien (Standard) à environ une fois par an (Archive), dans le même esprit que les tiers S3 d'AWS ou Blob d'Azure.",
  },
  {
    question: 'What is Pub/Sub and what problem does it solve?',
    answer:
      'A fully managed, globally available messaging service for asynchronous, decoupled communication between services: publishers send messages to a topic without knowing who consumes them, and subscribers pull or receive pushed messages independently, absorbing spikes in load and decoupling producer and consumer availability.',
    questionFr: "Qu'est-ce que Pub/Sub et quel problème résout-il ?",
    answerFr:
      'Un service de messagerie entièrement managé et disponible globalement pour une communication asynchrone et découplée entre services : les publishers envoient des messages sur un topic sans savoir qui les consomme, et les subscribers reçoivent ou tirent les messages indépendamment, absorbant les pics de charge et découplant la disponibilité du producteur et du consommateur.',
  },
  {
    question: 'What is BigQuery and why is it described as serverless data warehousing?',
    answer:
      "A fully managed, columnar analytical data warehouse that runs SQL queries over massive datasets without you provisioning or managing any compute cluster; storage and compute scale and are billed independently, and queries automatically parallelize across Google's infrastructure.",
    questionFr:
      "Qu'est-ce que BigQuery et pourquoi le décrit-on comme un data warehouse serverless ?",
    answerFr:
      "Un data warehouse analytique columnar entièrement managé qui exécute des requêtes SQL sur des jeux de données massifs sans provisionner ni gérer de cluster de calcul ; le stockage et le calcul scalent et sont facturés indépendamment, et les requêtes se parallélisent automatiquement sur l'infrastructure de Google.",
  },
  {
    question: 'How does Cloud Build fit into a CI/CD pipeline on GCP?',
    answer:
      'A managed CI/CD service that runs build steps as a sequence of containers defined in a config file, typically triggered by a push to a source repo (Cloud Source Repositories, GitHub, GitLab); it commonly builds container images, pushes them to Artifact Registry, and deploys to Cloud Run or GKE as the last steps.',
    questionFr: "Comment Cloud Build s'intègre-t-il dans un pipeline CI/CD sur GCP ?",
    answerFr:
      "Un service CI/CD managé qui exécute des étapes de build sous forme d'une séquence de conteneurs définis dans un fichier de config, généralement déclenché par un push sur un repo source (Cloud Source Repositories, GitHub, GitLab) ; il construit typiquement des images de conteneurs, les pousse vers Artifact Registry, et déploie vers Cloud Run ou GKE en dernières étapes.",
  },
  {
    question: 'Difference between Cloud KMS and Secret Manager?',
    answer:
      'Cloud KMS manages cryptographic keys and performs encrypt/decrypt/sign operations without ever exposing the key material; Secret Manager stores and versions the secrets themselves (API keys, passwords, certificates) with access control and audit logging, and can use KMS under the hood for envelope encryption at rest.',
    questionFr: 'Différence entre Cloud KMS et Secret Manager ?',
    answerFr:
      "Cloud KMS gère des clés cryptographiques et effectue des opérations de chiffrement/déchiffrement/signature sans jamais exposer la clé elle-même ; Secret Manager stocke et versionne les secrets eux-mêmes (clés API, mots de passe, certificats) avec contrôle d'accès et audit, et peut utiliser KMS en interne pour le chiffrement enveloppe au repos.",
  },
  {
    question:
      "Global HTTP(S) Load Balancing vs a regional load balancer on GCP - what's the difference?",
    answer:
      "The global external HTTP(S) load balancer uses a single anycast IP and Google's edge network to route each user to the closest healthy backend across regions, enabling multi-region failover and CDN integration; a regional load balancer only distributes traffic among backends within one region, similar in scope to a classic ALB.",
    questionFr:
      'Load balancing HTTP(S) global vs load balancer régional sur GCP - quelle différence ?',
    answerFr:
      "Le load balancer HTTP(S) externe global utilise une seule IP anycast et le réseau edge de Google pour router chaque utilisateur vers le backend sain le plus proche à travers les régions, permettant du failover multi-région et l'intégration CDN ; un load balancer régional ne distribue le trafic qu'entre des backends d'une seule région, un périmètre similaire à un ALB classique.",
  },
  {
    question:
      'How does Terraform typically manage GCP infrastructure, and where does Config Connector fit in?',
    answer:
      'Terraform is the common external, provider-agnostic way to declare GCP resources as code and apply changes via a plan/apply workflow; Config Connector instead lets you manage the same GCP resources as Kubernetes custom resources reconciled by a controller running inside GKE, useful when a team already standardizes its whole deployment model on Kubernetes manifests and GitOps.',
    questionFr:
      "Comment Terraform gère-t-il typiquement l'infra GCP, et où se situe Config Connector ?",
    answerFr:
      "Terraform est la façon externe et agnostique du fournisseur la plus courante de déclarer les ressources GCP en code et d'appliquer des changements via un workflow plan/apply ; Config Connector permet au contraire de gérer les mêmes ressources GCP comme des custom resources Kubernetes réconciliées par un contrôleur tournant dans GKE, utile quand une équipe standardise déjà tout son modèle de déploiement sur des manifests Kubernetes et du GitOps.",
  },
  {
    question: 'What does Cloud Operations (formerly Stackdriver) provide?',
    answer:
      'A unified suite covering Cloud Monitoring (metrics, dashboards, alerting), Cloud Logging (centralized structured logs with retention and export), and Cloud Trace/Profiler for latency and performance analysis, integrated by default across most GCP services without extra agents to install.',
    questionFr: "Qu'apporte Cloud Operations (anciennement Stackdriver) ?",
    answerFr:
      "Une suite unifiée couvrant Cloud Monitoring (métriques, dashboards, alerting), Cloud Logging (logs structurés centralisés avec rétention et export), et Cloud Trace/Profiler pour l'analyse de latence et de performance, intégrée par défaut sur la plupart des services GCP sans agent supplémentaire à installer.",
  },
  {
    question: 'What is VPC Service Controls and what threat does it mitigate?',
    answer:
      'A perimeter that restricts data movement between GCP services (e.g. BigQuery, Cloud Storage) to within an authorized boundary, mitigating data exfiltration even by an identity with valid IAM permissions - for example blocking a compromised or malicious credential from copying data to a project outside the perimeter.',
    questionFr: "Qu'est-ce que VPC Service Controls et quelle menace cela atténue-t-il ?",
    answerFr:
      "Un périmètre qui restreint le mouvement de données entre services GCP (BigQuery, Cloud Storage...) à l'intérieur d'une frontière autorisée, atténuant l'exfiltration de données même par une identité disposant de permissions IAM valides - par exemple en empêchant un credential compromis ou malveillant de copier des données vers un projet hors du périmètre.",
  },
  {
    question: "IAM Roles vs Organization Policy - what's the difference in what they control?",
    answer:
      'IAM roles and bindings control who (which identity) can perform which actions on which resources; Organization Policy constrains what configurations are allowed to exist in the first place regardless of who created them (e.g. "disallow public IP addresses on VMs", "restrict resource creation to certain regions"), layered as guardrails on top of IAM.',
    questionFr: "IAM Roles vs Organization Policy - quelle différence dans ce qu'ils contrôlent ?",
    answerFr:
      'Les rôles et bindings IAM contrôlent qui (quelle identité) peut effectuer quelles actions sur quelles ressources ; Organization Policy contraint quelles configurations ont le droit d\'exister, indépendamment de qui les a créées (ex. "interdire les IP publiques sur les VMs", "restreindre la création de ressources à certaines régions"), en tant que garde-fous en plus de l\'IAM.',
  },
  {
    question: 'What is Cloud Dataflow and what does it abstract away for stream/batch processing?',
    answer:
      'A fully managed runner for Apache Beam pipelines that unifies batch and streaming data processing under one programming model; Dataflow handles autoscaling of workers, dynamic work rebalancing, and windowing/watermark logic for late or out-of-order events, so teams write pipeline logic once instead of maintaining separate batch and streaming systems.',
    questionFr:
      "Qu'est-ce que Cloud Dataflow et qu'abstrait-il pour le traitement en stream/batch ?",
    answerFr:
      "Un runner entièrement managé pour les pipelines Apache Beam qui unifie le traitement de données batch et streaming sous un seul modèle de programmation ; Dataflow gère l'autoscaling des workers, le rééquilibrage dynamique du travail, et la logique de fenêtrage/watermark pour les événements en retard ou désordonnés, évitant à l'équipe de maintenir des systèmes batch et streaming séparés.",
  },
  {
    question:
      'What is Artifact Registry and how does it fit into a container-based deployment pipeline?',
    answer:
      'A managed registry for container images and language packages (npm, Maven, Python...), scoped per project/region with fine-grained IAM; a typical pipeline builds an image with Cloud Build, pushes it to Artifact Registry, then deploys it to Cloud Run or GKE by reference to that registry, with vulnerability scanning available on push.',
    questionFr:
      "Qu'est-ce qu'Artifact Registry et comment s'intègre-t-il dans un pipeline de déploiement conteneurisé ?",
    answerFr:
      'Un registre managé pour les images de conteneurs et paquets de langages (npm, Maven, Python...), scopé par projet/région avec un IAM fin ; un pipeline typique construit une image avec Cloud Build, la pousse vers Artifact Registry, puis la déploie sur Cloud Run ou GKE par référence à ce registre, avec un scan de vulnérabilités disponible au push.',
  },
  {
    question:
      "What is BigQuery's separation of storage and compute, and why does it matter for cost?",
    answer:
      'Data at rest in BigQuery is billed for storage independently of query execution, which is billed either per bytes scanned (on-demand) or via reserved slot capacity (flat-rate); this separation means idle data costs little, but query cost is directly driven by how much data a query scans, making partitioning and clustering tables a key cost-control lever.',
    questionFr:
      "Qu'est-ce que la séparation stockage/calcul de BigQuery, et pourquoi compte-t-elle pour le coût ?",
    answerFr:
      "Les données au repos dans BigQuery sont facturées pour le stockage indépendamment de l'exécution des requêtes, facturée soit par octets scannés (on-demand) soit via une capacité de slots réservée (flat-rate) ; cette séparation fait que des données inactives coûtent peu, mais le coût d'une requête dépend directement de la quantité de données scannées, ce qui fait du partitionnement et du clustering des tables un levier clé de maîtrise des coûts.",
  },
];
