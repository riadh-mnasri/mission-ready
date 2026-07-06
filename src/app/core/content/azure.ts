export const questions = [
  {
    question: "Difference between Azure App Service and Azure Functions?",
    answer:
      "App Service hosts long-running web apps/APIs on a dedicated scaling plan; Azure Functions is a serverless, event-driven model billed per execution, suited to short tasks triggered by events (HTTP, queue, timer).",
    questionFr: "Différence entre Azure App Service et Azure Functions ?",
    answerFr:
      "App Service héberge des web apps/APIs long-running sur un plan de scaling dédié ; Azure Functions est un modèle serverless événementiel, facturé à l'exécution, adapté à des tâches courtes déclenchées par des events (HTTP, queue, timer).",
  },
  {
    question: "What is a Resource Group?",
    answer:
      "A logical container grouping Azure resources that share the same lifecycle (deployment, permissions, cost tracking, bulk deletion), with no requirement to share a physical location.",
    questionFr: "Qu'est-ce qu'un Resource Group ?",
    answerFr:
      "Un conteneur logique qui regroupe des ressources Azure partageant le même lifecycle (déploiement, permissions, suivi des coûts, suppression groupée), sans obligation de partager une localisation physique.",
  },
  {
    question: "How does Azure AD (Entra ID) handle app authentication?",
    answer:
      "It provides identity (OAuth2/OIDC), issues JWT tokens after authentication, and enables auth via App Registrations, with Managed Identities letting Azure resources authenticate to each other without managing secrets.",
    questionFr: "Comment Azure AD (Entra ID) gère-t-il l'authentification d'une app ?",
    answerFr:
      "Il fournit l'identité (OAuth2/OIDC), émet des tokens JWT après authentification, et permet l'auth via des App Registrations, avec des Managed Identities qui permettent aux ressources Azure de s'authentifier entre elles sans gérer de secrets.",
  },
  {
    question: "What is a Managed Identity and why use one?",
    answer:
      "An identity automatically managed by Azure for a resource (VM, App Service...), letting it access other services (Key Vault, Storage) without manually storing or rotating credentials.",
    questionFr: "Qu'est-ce qu'une Managed Identity et pourquoi l'utiliser ?",
    answerFr:
      "Une identité automatiquement gérée par Azure pour une ressource (VM, App Service...), qui lui permet d'accéder à d'autres services (Key Vault, Storage) sans stocker ni faire tourner des credentials manuellement.",
  },
  {
    question: "Difference between Azure SQL Database and Cosmos DB?",
    answer:
      "Azure SQL is a managed relational database (SQL Server); Cosmos DB is a globally distributed multi-model database with multiple APIs (SQL, MongoDB, Cassandra...), native horizontal scaling, and guaranteed latency SLAs.",
    questionFr: "Différence entre Azure SQL Database et Cosmos DB ?",
    answerFr:
      "Azure SQL est une base relationnelle managée (SQL Server) ; Cosmos DB est une base multi-modèle distribuée globalement, avec plusieurs APIs (SQL, MongoDB, Cassandra...), un scaling horizontal natif et des SLA de latence garantis.",
  },
  {
    question: "How does Azure DevOps compare to GitHub Actions?",
    answer:
      "Azure DevOps is an integrated suite (Boards, Repos, Pipelines, Artifacts) historically tied to the Microsoft on-prem/cloud ecosystem; GitHub Actions is GitHub's native CI/CD, lighter weight. Both support YAML pipelines with hosted or self-hosted runners.",
    questionFr: "Comment Azure DevOps se compare-t-il à GitHub Actions ?",
    answerFr:
      "Azure DevOps est une suite intégrée (Boards, Repos, Pipelines, Artifacts) historiquement liée à l'écosystème Microsoft on-prem/cloud ; GitHub Actions est le CI/CD natif de GitHub, plus léger. Les deux supportent des pipelines YAML avec des runners hébergés ou self-hosted.",
  },
  {
    question: "What is a Virtual Network (VNet) and VNet peering?",
    answer:
      "The AWS VPC equivalent: an isolated private network with its own subnets; VNet peering connects two VNets so they communicate as if on the same network, without going through the internet.",
    questionFr: "Qu'est-ce qu'un Virtual Network (VNet) et le VNet peering ?",
    answerFr:
      "L'équivalent du VPC AWS : un réseau privé isolé avec ses propres subnets ; le VNet peering connecte deux VNets pour qu'ils communiquent comme s'ils étaient sur le même réseau, sans passer par internet.",
  },
  {
    question: "How does Azure Key Vault work?",
    answer:
      "Centralized, secure storage for secrets, encryption keys, and certificates, with access control via Azure AD/RBAC, access auditing, and native integration with Managed Identity to avoid hardcoded secrets.",
    questionFr: "Comment fonctionne Azure Key Vault ?",
    answerFr:
      "Un stockage centralisé et sécurisé pour les secrets, clés de chiffrement et certificats, avec un contrôle d'accès via Azure AD/RBAC, un audit des accès, et une intégration native avec Managed Identity pour éviter les secrets en dur.",
  },
  {
    question: "What is Azure Kubernetes Service (AKS) and what does Azure manage for you?",
    answer:
      "Managed Kubernetes where Azure runs the control plane (API server, etcd) free of charge on the base tier; you manage the node pools (worker VMs), with native integration to Azure AD, Azure Monitor, and Azure CNI for networking.",
    questionFr: "Qu'est-ce qu'Azure Kubernetes Service (AKS) et que gère Azure pour vous ?",
    answerFr:
      "Du Kubernetes managé où Azure fait tourner le control plane (API server, etcd) gratuitement sur le tier de base ; vous gérez les node pools (VMs worker), avec une intégration native à Azure AD, Azure Monitor, et Azure CNI pour le réseau.",
  },
  {
    question: "Difference between vertical and horizontal scaling in Azure App Service?",
    answer:
      "Scale up: change to a higher pricing tier (more CPU/RAM per instance). Scale out: increase the number of instances behind the built-in load balancer, driven manually or by autoscale rules.",
    questionFr: "Différence entre scaling vertical et horizontal sur Azure App Service ?",
    answerFr:
      "Scale up : passer à un pricing tier supérieur (plus de CPU/RAM par instance). Scale out : augmenter le nombre d'instances derrière le load balancer intégré, piloté manuellement ou par des règles d'autoscale.",
  },
  {
    question: "What is Azure Service Bus vs Event Grid?",
    answer:
      "Service Bus is enterprise messaging (queues/topics, FIFO, transactions, dead-lettering) for application decoupling; Event Grid is a lightweight, reactive event router (pub/sub) for large-scale notifications between services/SaaS.",
    questionFr: "Qu'est-ce qu'Azure Service Bus vs Event Grid ?",
    answerFr:
      "Service Bus est de la messagerie d'entreprise (queues/topics, FIFO, transactions, dead-lettering) pour découpler des applications ; Event Grid est un routeur d'events léger et réactif (pub/sub) pour des notifications à grande échelle entre services/SaaS.",
  },
  {
    question: "What are Durable Functions and what problem do they solve?",
    answer:
      "An extension to Azure Functions that lets you write stateful, long-running orchestrations (chaining, fan-out/fan-in, human approval waits) as plain code, with the framework handling checkpointing and replay, instead of hand-rolling state machines across stateless function calls.",
    questionFr: "Que sont les Durable Functions et quel problème résolvent-elles ?",
    answerFr:
      "Une extension d'Azure Functions qui permet d'écrire des orchestrations stateful et longue durée (chaînage, fan-out/fan-in, attente d'approbation humaine) en code classique, le framework gérant le checkpointing et le replay, plutôt que de coder à la main des state machines à travers des appels de fonctions stateless.",
  },
  {
    question: "What is Azure Container Apps and how does it compare to AKS?",
    answer:
      "A serverless container platform built on Kubernetes/KEDA/Dapr under the hood, but without exposing the Kubernetes API: you get autoscaling (including scale-to-zero), revisions, and traffic splitting with far less operational overhead than running your own AKS cluster.",
    questionFr: "Qu'est-ce qu'Azure Container Apps et comment se compare-t-il à AKS ?",
    answerFr:
      "Une plateforme de conteneurs serverless construite sur Kubernetes/KEDA/Dapr en interne, mais sans exposer l'API Kubernetes : on obtient de l'autoscaling (y compris le scale-to-zero), des revisions, et du traffic splitting avec beaucoup moins de charge opérationnelle qu'un cluster AKS géré soi-même.",
  },
  {
    question: "What does Azure API Management provide on top of raw APIs?",
    answer:
      "A managed gateway layer for publishing, securing (keys, OAuth, rate limiting), versioning, and monitoring APIs, plus a developer portal for consumers, decoupling API consumers from the backend implementations behind it.",
    questionFr: "Qu'apporte Azure API Management par-dessus des APIs brutes ?",
    answerFr:
      "Une couche de gateway managée pour publier, sécuriser (clés, OAuth, rate limiting), versionner et monitorer des APIs, plus un developer portal pour les consommateurs, découplant les consommateurs d'API des implémentations backend derrière.",
  },
  {
    question: "What is Application Insights and what does distributed tracing add to it?",
    answer:
      "Application Insights (part of Azure Monitor) collects requests, dependencies, exceptions, and custom telemetry from an app; distributed tracing correlates that telemetry across service boundaries via an operation ID, letting you follow a single request through multiple microservices.",
    questionFr: "Qu'est-ce qu'Application Insights et qu'apporte le distributed tracing ?",
    answerFr:
      "Application Insights (partie d'Azure Monitor) collecte requests, dependencies, exceptions et télémétrie custom d'une app ; le distributed tracing corrèle cette télémétrie à travers les frontières de services via un operation ID, permettant de suivre une seule requête à travers plusieurs microservices.",
  },
  {
    question: "What is the difference between an ARM template and Bicep?",
    answer:
      "ARM templates are the underlying JSON format Azure Resource Manager consumes to deploy resources declaratively; Bicep is a more concise, readable DSL that compiles down to ARM JSON, making infrastructure-as-code on Azure much less verbose to write and review.",
    questionFr: "Quelle est la différence entre un template ARM et Bicep ?",
    answerFr:
      "Les templates ARM sont le format JSON sous-jacent consommé par Azure Resource Manager pour déployer des ressources de façon déclarative ; Bicep est un DSL plus concis et lisible qui compile vers du JSON ARM, rendant l'infrastructure-as-code sur Azure beaucoup moins verbeuse à écrire et relire.",
  },
  {
    question: "What is Azure Front Door and how does it differ from a regional load balancer?",
    answer:
      "A global, edge-based entry point that routes traffic across regions based on latency, health, and priority, adding CDN caching, WAF, and TLS termination at the edge; a regional load balancer (like an ALB equivalent) only distributes traffic within a single region, so Front Door sits a layer above it for global-scale applications.",
    questionFr: "Qu'est-ce qu'Azure Front Door et en quoi diffère-t-il d'un load balancer régional ?",
    answerFr:
      "Un point d'entrée global basé sur l'edge qui route le trafic entre régions selon la latence, la santé et la priorité, en ajoutant du cache CDN, du WAF et de la terminaison TLS en périphérie ; un load balancer régional ne distribue le trafic qu'au sein d'une seule région, donc Front Door se place une couche au-dessus pour des applications à échelle mondiale.",
  },
  {
    question: "What is Azure Policy and how does it differ from RBAC?",
    answer:
      "RBAC controls who can do what (identity and permissions); Azure Policy controls what configurations are allowed to exist regardless of who created them (e.g. \"deny any storage account without encryption\", \"only allow VMs in West Europe\"), enforcing organizational rules on top of, not instead of, RBAC.",
    questionFr: "Qu'est-ce qu'Azure Policy et en quoi diffère-t-il du RBAC ?",
    answerFr:
      "Le RBAC contrôle qui peut faire quoi (identité et permissions) ; Azure Policy contrôle quelles configurations ont le droit d'exister quel que soit qui les a créées (ex. \"refuser tout storage account sans chiffrement\", \"autoriser les VM uniquement en West Europe\"), imposant des règles organisationnelles en plus du RBAC, pas à sa place.",
  },
  {
    question: "Difference between the Consumption plan and the Premium plan for Azure Functions?",
    answer:
      "Consumption scales to zero and bills strictly per execution/memory, but pays a cold-start penalty and has stricter timeout limits; Premium keeps pre-warmed instances (no cold start), allows longer execution times and VNet integration, at the cost of a baseline reserved capacity you pay for even when idle.",
    questionFr: "Différence entre le plan Consumption et le plan Premium pour Azure Functions ?",
    answerFr:
      "Consumption redescend à zéro et facture strictement par exécution/mémoire, mais paie une pénalité de cold start et a des limites de timeout plus strictes ; Premium garde des instances préchauffées (pas de cold start), permet des exécutions plus longues et l'intégration VNet, au prix d'une capacité réservée de base payée même à vide.",
  },
  {
    question: "What are the Hot, Cool, and Archive access tiers in Azure Blob Storage for?",
    answer:
      "They trade storage cost against retrieval cost and latency based on expected access frequency: Hot for frequently accessed data, Cool for infrequently accessed data kept at least 30 days, Archive for rarely accessed data kept at least 180 days with retrieval taking hours instead of milliseconds.",
    questionFr: "À quoi servent les tiers d'accès Hot, Cool et Archive dans Azure Blob Storage ?",
    answerFr:
      "Ils échangent le coût de stockage contre le coût et la latence de récupération selon la fréquence d'accès attendue : Hot pour des données accédées fréquemment, Cool pour des données peu accédées gardées au moins 30 jours, Archive pour des données rarement accédées gardées au moins 180 jours avec une récupération qui prend des heures au lieu de millisecondes.",
  },
  {
    question: "What is a Deployment Slot in Azure App Service, and what does slot swapping give you?",
    answer:
      "A separate, fully configured instance of the same app (e.g. \"staging\") running alongside production; swapping slots exchanges the staging and production instances with no downtime (and with warm-up before the swap), giving a safe way to validate a release and roll it back instantly if needed.",
    questionFr: "Qu'est-ce qu'un Deployment Slot dans Azure App Service, et qu'apporte le slot swapping ?",
    answerFr:
      "Une instance séparée et entièrement configurée de la même app (ex. \"staging\") qui tourne à côté de la production ; l'échange de slots permute les instances staging et production sans interruption (avec un warm-up avant l'échange), offrant un moyen sûr de valider une release et de la rollback instantanément si besoin.",
  },
  {
    question: "What problem does Azure Private Link / Private Endpoint solve?",
    answer:
      "It gives a PaaS service (Storage, SQL Database, Key Vault...) a private IP address inside your VNet, so traffic to it never traverses the public internet, closing off a class of exposure that exists even when the service's public endpoint is protected by firewall rules.",
    questionFr: "Quel problème résout Azure Private Link / Private Endpoint ?",
    answerFr:
      "Il donne à un service PaaS (Storage, SQL Database, Key Vault...) une adresse IP privée à l'intérieur de votre VNet, de sorte que le trafic vers lui ne traverse jamais l'internet public, fermant une classe d'exposition qui existe même quand le endpoint public du service est protégé par des règles de firewall.",
  },
];
