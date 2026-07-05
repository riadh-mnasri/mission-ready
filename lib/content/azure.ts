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
];
