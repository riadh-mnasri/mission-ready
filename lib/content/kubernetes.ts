export const questions = [
  {
    question: "What are the control plane components?",
    answer:
      "kube-apiserver (API entry point), etcd (distributed state store), kube-scheduler (assigns pods to nodes), kube-controller-manager (drives actual state toward desired state).",
  },
  {
    question: "Difference between Pod, Deployment, and ReplicaSet?",
    answer:
      "A Pod is the deployable unit (one or more containers sharing network/storage); a ReplicaSet guarantees a number of replicas of a Pod; a Deployment manages the ReplicaSet and orchestrates declarative rollouts/rollbacks.",
  },
  {
    question: "What is a Service and its types (ClusterIP, NodePort, LoadBalancer)?",
    answer:
      "A stable network abstraction routing traffic to a set of pods via label selectors. ClusterIP: reachable only inside the cluster. NodePort: exposes a port on every node. LoadBalancer: provisions an external (cloud) load balancer.",
  },
  {
    question: "How does an Ingress work?",
    answer:
      "A resource defining HTTP/HTTPS routing rules (host, path) to internal Services; it requires an Ingress Controller (nginx, Traefik...) that actually implements the routing.",
  },
  {
    question: "Difference between liveness probe and readiness probe?",
    answer:
      "A liveness probe detects if the container is stuck/dead and triggers a restart; a readiness probe detects if the pod is ready to receive traffic and removes it from the Service otherwise, without restarting it.",
  },
  {
    question: "What is a ConfigMap vs a Secret?",
    answer:
      "A ConfigMap stores non-sensitive configuration (key/value, files) injectable as env vars or volumes; a Secret stores sensitive data, base64-encoded (not encrypted by default unless encryption-at-rest via KMS is enabled on etcd).",
  },
  {
    question: "How does pod scheduling work, at a high level?",
    answer:
      "The scheduler filters eligible nodes (available resources, taints/tolerations, affinities) then scores them by criteria (bin-packing, spreading) to pick the best node.",
  },
  {
    question: "Difference between requests and limits on pod resources?",
    answer:
      "Requests are guaranteed resources reserved for scheduling; limits are the cap a pod can't exceed (CPU gets throttled, memory overage triggers an OOMKill).",
  },
  {
    question: "What is a Namespace and what is it for?",
    answer:
      "A logical partition of the cluster to isolate resources (by team, environment...), with quotas and RBAC applicable per namespace — no native network isolation though (requires NetworkPolicies for that).",
  },
  {
    question: "How does a Deployment's rolling update work?",
    answer:
      "Kubernetes progressively replaces old pods with new ones according to `maxSurge`/`maxUnavailable`, relying on readiness probes to only route traffic to ready pods, allowing a rollback if needed.",
  },
  {
    question: "What is a StatefulSet and when do you use it?",
    answer:
      "Like a Deployment, but guarantees a stable network identity and dedicated persistent storage per replica (deterministic creation/deletion order) — used for stateful workloads like databases.",
  },
  {
    question: "What is a HorizontalPodAutoscaler (HPA)?",
    answer:
      "Automatically adjusts the number of replicas of a Deployment based on metrics (CPU, memory, or custom metrics) to track load.",
  },
  {
    question: "What is a NetworkPolicy?",
    answer:
      "A resource defining firewall rules at the pod level (by labels), controlling what inbound/outbound traffic is allowed — without it, all pods in a cluster can communicate with each other by default.",
  },
];
