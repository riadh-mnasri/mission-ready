export const questions = [
  {
    question: "Difference between Azure App Service and Azure Functions?",
    answer:
      "App Service hosts long-running web apps/APIs on a dedicated scaling plan; Azure Functions is a serverless, event-driven model billed per execution, suited to short tasks triggered by events (HTTP, queue, timer).",
  },
  {
    question: "What is a Resource Group?",
    answer:
      "A logical container grouping Azure resources that share the same lifecycle (deployment, permissions, cost tracking, bulk deletion), with no requirement to share a physical location.",
  },
  {
    question: "How does Azure AD (Entra ID) handle app authentication?",
    answer:
      "It provides identity (OAuth2/OIDC), issues JWT tokens after authentication, and enables auth via App Registrations, with Managed Identities letting Azure resources authenticate to each other without managing secrets.",
  },
  {
    question: "What is a Managed Identity and why use one?",
    answer:
      "An identity automatically managed by Azure for a resource (VM, App Service...), letting it access other services (Key Vault, Storage) without manually storing or rotating credentials.",
  },
  {
    question: "Difference between Azure SQL Database and Cosmos DB?",
    answer:
      "Azure SQL is a managed relational database (SQL Server); Cosmos DB is a globally distributed multi-model database with multiple APIs (SQL, MongoDB, Cassandra...), native horizontal scaling, and guaranteed latency SLAs.",
  },
  {
    question: "How does Azure DevOps compare to GitHub Actions?",
    answer:
      "Azure DevOps is an integrated suite (Boards, Repos, Pipelines, Artifacts) historically tied to the Microsoft on-prem/cloud ecosystem; GitHub Actions is GitHub's native CI/CD, lighter weight. Both support YAML pipelines with hosted or self-hosted runners.",
  },
  {
    question: "What is a Virtual Network (VNet) and VNet peering?",
    answer:
      "The AWS VPC equivalent: an isolated private network with its own subnets; VNet peering connects two VNets so they communicate as if on the same network, without going through the internet.",
  },
  {
    question: "How does Azure Key Vault work?",
    answer:
      "Centralized, secure storage for secrets, encryption keys, and certificates, with access control via Azure AD/RBAC, access auditing, and native integration with Managed Identity to avoid hardcoded secrets.",
  },
  {
    question: "What is Azure Kubernetes Service (AKS) and what does Azure manage for you?",
    answer:
      "Managed Kubernetes where Azure runs the control plane (API server, etcd) free of charge on the base tier; you manage the node pools (worker VMs), with native integration to Azure AD, Azure Monitor, and Azure CNI for networking.",
  },
  {
    question: "Difference between vertical and horizontal scaling in Azure App Service?",
    answer:
      "Scale up: change to a higher pricing tier (more CPU/RAM per instance). Scale out: increase the number of instances behind the built-in load balancer, driven manually or by autoscale rules.",
  },
  {
    question: "What is Azure Service Bus vs Event Grid?",
    answer:
      "Service Bus is enterprise messaging (queues/topics, FIFO, transactions, dead-lettering) for application decoupling; Event Grid is a lightweight, reactive event router (pub/sub) for large-scale notifications between services/SaaS.",
  },
];
