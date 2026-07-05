export const questions = [
  {
    question: "What's the difference between a Security Group and a NACL?",
    answer:
      "A Security Group is a stateful firewall at the instance/ENI level (return traffic is implicitly allowed). A NACL is a stateless firewall at the subnet level (you must explicitly allow both inbound and outbound). Security Groups only support \"allow\" rules, NACLs also support \"deny\".",
    questionFr: "Quelle est la différence entre un Security Group et une NACL ?",
    answerFr:
      "Un Security Group est un firewall stateful au niveau de l'instance/ENI (le trafic retour est implicitement autorisé). Une NACL est un firewall stateless au niveau du subnet (il faut autoriser explicitement l'entrant ET le sortant). Les Security Groups ne supportent que des règles \"allow\", les NACLs supportent aussi \"deny\".",
  },
  {
    question: "How does IAM work (roles vs policies vs users)?",
    answer:
      "JSON policies define permissions (actions/resources/conditions). Users/groups/roles are identities that policies get attached to. Roles are assumed temporarily (via STS) by services or humans, without long-lived access keys - best practice is to prefer roles over static credentials.",
    questionFr: "Comment fonctionne IAM (roles vs policies vs users) ?",
    answerFr:
      "Les policies JSON définissent des permissions (actions/resources/conditions). Les users/groups/roles sont des identités auxquelles on attache des policies. Les roles sont assumés temporairement (via STS) par des services ou des humains, sans access keys long-lived - la best practice est de privilégier les roles plutôt que des credentials statiques.",
  },
  {
    question: "Difference between S3 Standard, S3 IA, and Glacier?",
    answer:
      "Standard: frequent access, millisecond latency. IA (Infrequent Access): lower storage cost but retrieval fees, for rarely accessed data. Glacier/Deep Archive: long-term archival, retrieval from minutes to hours, minimal storage cost.",
    questionFr: "Différence entre S3 Standard, S3 IA et Glacier ?",
    answerFr:
      "Standard : accès fréquent, latence de l'ordre de la milliseconde. IA (Infrequent Access) : coût de stockage réduit mais frais de récupération, pour des données peu consultées. Glacier/Deep Archive : archivage longue durée, récupération de minutes à heures, coût de stockage minimal.",
  },
  {
    question: "What is a VPC and what are its key components?",
    answer:
      "An isolated virtual network in AWS with its own subnets (public/private), route tables, an internet gateway (public access), a NAT gateway (outbound internet for private subnets), and peering/VPN/Direct Connect for interconnection.",
    questionFr: "Qu'est-ce qu'un VPC et quels sont ses composants clés ?",
    answerFr:
      "Un réseau virtuel isolé dans AWS avec ses propres subnets (public/private), des route tables, un internet gateway (accès public), un NAT gateway (sortie internet pour les subnets privés), et du peering/VPN/Direct Connect pour l'interconnexion.",
  },
  {
    question: "Lambda: what limits should you know?",
    answer:
      "Max timeout of 15 minutes, memory up to 10 GB (CPU scales with memory), cold starts depending on the runtime, ephemeral /tmp storage of 512 MB-10 GB, reserved/provisioned concurrency to cap or guarantee capacity.",
    questionFr: "Lambda : quelles limites faut-il connaître ?",
    answerFr:
      "Timeout max de 15 minutes, mémoire jusqu'à 10 Go (le CPU scale avec la mémoire), cold starts selon le runtime, stockage /tmp éphémère de 512 Mo à 10 Go, concurrency réservée/provisionnée pour plafonner ou garantir la capacité.",
  },
  {
    question: "How does EC2 autoscaling work?",
    answer:
      "An Auto Scaling Group adjusts the number of instances based on policies (target tracking on CPU/latency, step scaling, scheduled), with health checks to replace failing instances, sitting behind a load balancer (ALB/NLB).",
    questionFr: "Comment fonctionne l'autoscaling EC2 ?",
    answerFr:
      "Un Auto Scaling Group ajuste le nombre d'instances selon des policies (target tracking sur CPU/latence, step scaling, scheduled), avec des health checks pour remplacer les instances défaillantes, derrière un load balancer (ALB/NLB).",
  },
  {
    question: "RDS Multi-AZ vs Read Replica?",
    answer:
      "Multi-AZ: high availability, synchronous replication to a standby in another AZ, automatic failover, not usable for reads. Read Replica: read scalability, asynchronous replication, can live in another region, promoted manually if needed.",
    questionFr: "RDS Multi-AZ vs Read Replica ?",
    answerFr:
      "Multi-AZ : haute disponibilité, réplication synchrone vers un standby dans une autre AZ, failover automatique, pas utilisable en lecture. Read Replica : scalabilité en lecture, réplication asynchrone, peut être dans une autre région, promue manuellement si besoin.",
  },
  {
    question: "What is the Well-Architected Framework?",
    answer:
      "An AWS framework with 6 pillars: operational excellence, security, reliability, performance efficiency, cost optimization, sustainability - used to challenge an architecture through pillar-specific questions and best practices.",
    questionFr: "Qu'est-ce que le Well-Architected Framework ?",
    answerFr:
      "Un framework AWS avec 6 pillars : operational excellence, security, reliability, performance efficiency, cost optimization, sustainability - utilisé pour challenger une architecture via des questions et best practices propres à chaque pillar.",
  },
  {
    question: "Difference between SQS, SNS, and EventBridge?",
    answer:
      "SQS: point-to-point queue (pull, one consumer processes the message). SNS: pub/sub push to multiple subscribers (SQS, Lambda, HTTP...). EventBridge: event bus with content-based routing rules and native SaaS integrations.",
    questionFr: "Différence entre SQS, SNS et EventBridge ?",
    answerFr:
      "SQS : queue point-to-point (pull, un seul consumer traite le message). SNS : pub/sub push vers plusieurs subscribers (SQS, Lambda, HTTP...). EventBridge : event bus avec des règles de routage basées sur le contenu et des intégrations SaaS natives.",
  },
  {
    question: "How do you secure secrets on AWS?",
    answer:
      "Secrets Manager (automatic rotation, versioning) or SSM Parameter Store (cheaper, no native rotation); never hardcoded in code/images, accessed via an IAM role with minimal permissions.",
    questionFr: "Comment sécuriser des secrets sur AWS ?",
    answerFr:
      "Secrets Manager (rotation automatique, versioning) ou SSM Parameter Store (moins cher, pas de rotation native) ; jamais en dur dans le code/les images, accès via un IAM role avec des permissions minimales.",
  },
  {
    question: "What is the least-privilege principle applied to IAM?",
    answer:
      "Grant only the permissions strictly required by an identity, scoping actions/resources/conditions precisely and reviewing them regularly (Access Analyzer), instead of broad permissions like \"*\".",
    questionFr: "Qu'est-ce que le principe de least privilege appliqué à IAM ?",
    answerFr:
      "N'accorder que les permissions strictement nécessaires à une identité, en scopant précisément actions/resources/conditions et en les revoyant régulièrement (Access Analyzer), plutôt que des permissions larges type \"*\".",
  },
  {
    question: "Difference between ECS, EKS, and Fargate?",
    answer:
      "ECS: AWS's proprietary container orchestrator. EKS: managed Kubernetes on AWS. Fargate: a serverless compute mode (no node management) usable with either ECS or EKS.",
    questionFr: "Différence entre ECS, EKS et Fargate ?",
    answerFr:
      "ECS : l'orchestrateur de conteneurs propriétaire d'AWS. EKS : Kubernetes managé sur AWS. Fargate : un mode d'exécution serverless (pas de gestion de nodes) utilisable avec ECS ou EKS.",
  },
  {
    question: "What is CloudFront and when do you use it?",
    answer:
      "AWS's CDN: caches content at edge locations close to users to reduce latency, offload origin traffic, and provide a single entry point for TLS termination, WAF, and Lambda@Edge/CloudFront Functions for edge logic.",
    questionFr: "Qu'est-ce que CloudFront et quand l'utiliser ?",
    answerFr:
      "Le CDN d'AWS : met en cache du contenu sur des edge locations proches des utilisateurs pour réduire la latence, décharger l'origine, et fournir un point d'entrée unique pour la terminaison TLS, le WAF, et de la logique edge via Lambda@Edge/CloudFront Functions.",
  },
  {
    question: "How does Route 53 support high availability?",
    answer:
      "Health checks on endpoints combined with routing policies (failover, weighted, latency-based, geolocation) let Route 53 stop resolving to unhealthy targets and shift traffic automatically, without changing application code.",
    questionFr: "Comment Route 53 contribue-t-il à la haute disponibilité ?",
    answerFr:
      "Des health checks sur les endpoints combinés à des routing policies (failover, weighted, latency-based, geolocation) permettent à Route 53 d'arrêter de résoudre vers des cibles en panne et de basculer le trafic automatiquement, sans changement côté application.",
  },
  {
    question: "What is Infrastructure as Code and why use CloudFormation or Terraform on AWS?",
    answer:
      "Declaring infrastructure in versioned templates instead of clicking in the console: reproducible environments, code review on infra changes, and drift detection. CloudFormation is native and free; Terraform is cloud-agnostic and has a larger ecosystem.",
    questionFr: "Qu'est-ce que l'Infrastructure as Code et pourquoi utiliser CloudFormation ou Terraform sur AWS ?",
    answerFr:
      "Déclarer l'infrastructure dans des templates versionnés plutôt qu'en cliquant dans la console : environnements reproductibles, revue de code sur les changements d'infra, et détection de drift. CloudFormation est natif et gratuit ; Terraform est agnostique du cloud et a un écosystème plus large.",
  },
  {
    question: "How do you reduce Lambda cold starts?",
    answer:
      "Provisioned concurrency keeps warm execution environments ready; smaller deployment packages and faster runtimes (e.g. avoiding heavy JVM startup) reduce init time; keeping functions in fewer VPCs (or using Hyperplane ENIs) avoids the old VPC networking cold-start penalty.",
    questionFr: "Comment réduire les cold starts sur Lambda ?",
    answerFr:
      "La provisioned concurrency garde des environnements d'exécution déjà chauds ; des packages de déploiement plus petits et des runtimes plus rapides (éviter le démarrage lourd de la JVM) réduisent le temps d'init ; limiter l'usage de VPC (ou profiter des Hyperplane ENIs) évite l'ancienne pénalité de cold start liée au réseau VPC.",
  },
  {
    question: "DynamoDB: how does partitioning affect data modeling?",
    answer:
      "Data is spread across partitions by hashing the partition key; a well-chosen key distributes traffic evenly (avoiding hot partitions), and access patterns must be designed upfront since DynamoDB has no ad hoc joins or secondary query flexibility like SQL.",
    questionFr: "DynamoDB : comment le partitioning influence-t-il le data modeling ?",
    answerFr:
      "Les données sont réparties entre des partitions par hachage de la partition key ; une clé bien choisie distribue le trafic uniformément (évite les hot partitions), et les access patterns doivent être conçus en amont puisque DynamoDB n'a pas de jointures ad hoc ni la flexibilité de requêtage d'un SQL.",
  },
  {
    question: "What is a VPC endpoint and why does it matter for security?",
    answer:
      "A private connection from a VPC to an AWS service (S3, DynamoDB via Gateway endpoints, most others via Interface/PrivateLink endpoints) that avoids routing traffic over the public internet, reducing exposure and often improving latency and cost.",
    questionFr: "Qu'est-ce qu'un VPC endpoint et pourquoi est-ce important pour la sécurité ?",
    answerFr:
      "Une connexion privée d'un VPC vers un service AWS (S3, DynamoDB via des Gateway endpoints, la plupart des autres via des Interface endpoints/PrivateLink) qui évite de faire transiter le trafic par l'internet public, réduisant l'exposition et souvent améliorant latence et coût.",
  },
  {
    question: "What's the difference between CloudWatch Logs, Metrics, and Alarms?",
    answer:
      "Logs store raw application/system output for search and analysis; Metrics are numerical time series (built-in or custom) tracking behavior over time; Alarms watch a metric against a threshold and trigger actions (notifications, autoscaling, remediation).",
    questionFr: "Quelle est la différence entre CloudWatch Logs, Metrics et Alarms ?",
    answerFr:
      "Logs stocke la sortie brute applicative/système pour recherche et analyse ; Metrics sont des séries temporelles numériques (natives ou custom) qui suivent un comportement dans le temps ; Alarms surveille une métrique par rapport à un seuil et déclenche des actions (notifications, autoscaling, remédiation).",
  },
  {
    question: "How do Reserved Instances / Savings Plans differ from Spot Instances for cost optimization?",
    answer:
      "Reserved Instances/Savings Plans trade a usage commitment (1-3 years) for a discount on predictable workloads; Spot Instances offer steep discounts on spare capacity that can be reclaimed with short notice, suited to fault-tolerant or batch workloads, not steady production traffic.",
    questionFr: "Comment les Reserved Instances/Savings Plans diffèrent-ils des Spot Instances pour optimiser les coûts ?",
    answerFr:
      "Les Reserved Instances/Savings Plans échangent un engagement d'usage (1-3 ans) contre une réduction sur des charges prévisibles ; les Spot Instances offrent de fortes réductions sur de la capacité inutilisée récupérable avec un court préavis, adaptées aux charges tolérantes aux pannes ou batch, pas au trafic de production stable.",
  },
];
