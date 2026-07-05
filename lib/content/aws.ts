export const questions = [
  {
    question: "What's the difference between a Security Group and a NACL?",
    answer:
      "A Security Group is a stateful firewall at the instance/ENI level (return traffic is implicitly allowed). A NACL is a stateless firewall at the subnet level (you must explicitly allow both inbound and outbound). Security Groups only support \"allow\" rules, NACLs also support \"deny\".",
  },
  {
    question: "How does IAM work (roles vs policies vs users)?",
    answer:
      "JSON policies define permissions (actions/resources/conditions). Users/groups/roles are identities that policies get attached to. Roles are assumed temporarily (via STS) by services or humans, without long-lived access keys — best practice is to prefer roles over static credentials.",
  },
  {
    question: "Difference between S3 Standard, S3 IA, and Glacier?",
    answer:
      "Standard: frequent access, millisecond latency. IA (Infrequent Access): lower storage cost but retrieval fees, for rarely accessed data. Glacier/Deep Archive: long-term archival, retrieval from minutes to hours, minimal storage cost.",
  },
  {
    question: "What is a VPC and what are its key components?",
    answer:
      "An isolated virtual network in AWS with its own subnets (public/private), route tables, an internet gateway (public access), a NAT gateway (outbound internet for private subnets), and peering/VPN/Direct Connect for interconnection.",
  },
  {
    question: "Lambda: what limits should you know?",
    answer:
      "Max timeout of 15 minutes, memory up to 10 GB (CPU scales with memory), cold starts depending on the runtime, ephemeral /tmp storage of 512 MB-10 GB, reserved/provisioned concurrency to cap or guarantee capacity.",
  },
  {
    question: "How does EC2 autoscaling work?",
    answer:
      "An Auto Scaling Group adjusts the number of instances based on policies (target tracking on CPU/latency, step scaling, scheduled), with health checks to replace failing instances, sitting behind a load balancer (ALB/NLB).",
  },
  {
    question: "RDS Multi-AZ vs Read Replica?",
    answer:
      "Multi-AZ: high availability, synchronous replication to a standby in another AZ, automatic failover, not usable for reads. Read Replica: read scalability, asynchronous replication, can live in another region, promoted manually if needed.",
  },
  {
    question: "What is the Well-Architected Framework?",
    answer:
      "An AWS framework with 6 pillars: operational excellence, security, reliability, performance efficiency, cost optimization, sustainability — used to challenge an architecture through pillar-specific questions and best practices.",
  },
  {
    question: "Difference between SQS, SNS, and EventBridge?",
    answer:
      "SQS: point-to-point queue (pull, one consumer processes the message). SNS: pub/sub push to multiple subscribers (SQS, Lambda, HTTP...). EventBridge: event bus with content-based routing rules and native SaaS integrations.",
  },
  {
    question: "How do you secure secrets on AWS?",
    answer:
      "Secrets Manager (automatic rotation, versioning) or SSM Parameter Store (cheaper, no native rotation); never hardcoded in code/images, accessed via an IAM role with minimal permissions.",
  },
  {
    question: "What is the least-privilege principle applied to IAM?",
    answer:
      "Grant only the permissions strictly required by an identity, scoping actions/resources/conditions precisely and reviewing them regularly (Access Analyzer), instead of broad permissions like \"*\".",
  },
  {
    question: "Difference between ECS, EKS, and Fargate?",
    answer:
      "ECS: AWS's proprietary container orchestrator. EKS: managed Kubernetes on AWS. Fargate: a serverless compute mode (no node management) usable with either ECS or EKS.",
  },
];
