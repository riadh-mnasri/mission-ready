export const questions = [
  {
    question: "What are the control plane components?",
    answer:
      "kube-apiserver (API entry point), etcd (distributed state store), kube-scheduler (assigns pods to nodes), kube-controller-manager (drives actual state toward desired state).",
    questionFr: "Quels sont les composants du control plane ?",
    answerFr:
      "kube-apiserver (point d'entrée API), etcd (stockage d'état distribué), kube-scheduler (assigne les pods aux nodes), kube-controller-manager (fait converger l'état réel vers l'état désiré).",
  },
  {
    question: "Difference between Pod, Deployment, and ReplicaSet?",
    answer:
      "A Pod is the deployable unit (one or more containers sharing network/storage); a ReplicaSet guarantees a number of replicas of a Pod; a Deployment manages the ReplicaSet and orchestrates declarative rollouts/rollbacks.",
    questionFr: "Différence entre Pod, Deployment et ReplicaSet ?",
    answerFr:
      "Un Pod est l'unité déployable (un ou plusieurs conteneurs partageant réseau/storage) ; un ReplicaSet garantit un nombre de replicas d'un Pod ; un Deployment gère le ReplicaSet et orchestre des rollouts/rollbacks déclaratifs.",
  },
  {
    question: "What is a Service and its types (ClusterIP, NodePort, LoadBalancer)?",
    answer:
      "A stable network abstraction routing traffic to a set of pods via label selectors. ClusterIP: reachable only inside the cluster. NodePort: exposes a port on every node. LoadBalancer: provisions an external (cloud) load balancer.",
    questionFr: "Qu'est-ce qu'un Service et ses types (ClusterIP, NodePort, LoadBalancer) ?",
    answerFr:
      "Une abstraction réseau stable qui route le trafic vers un ensemble de pods via des label selectors. ClusterIP : accessible uniquement dans le cluster. NodePort : expose un port sur chaque node. LoadBalancer : provisionne un load balancer externe (cloud).",
  },
  {
    question: "How does an Ingress work?",
    answer:
      "A resource defining HTTP/HTTPS routing rules (host, path) to internal Services; it requires an Ingress Controller (nginx, Traefik...) that actually implements the routing.",
    questionFr: "Comment fonctionne un Ingress ?",
    answerFr:
      "Une ressource qui définit des règles de routage HTTP/HTTPS (host, path) vers des Services internes ; elle nécessite un Ingress Controller (nginx, Traefik...) qui implémente réellement le routage.",
  },
  {
    question: "Difference between liveness probe and readiness probe?",
    answer:
      "A liveness probe detects if the container is stuck/dead and triggers a restart; a readiness probe detects if the pod is ready to receive traffic and removes it from the Service otherwise, without restarting it.",
    questionFr: "Différence entre liveness probe et readiness probe ?",
    answerFr:
      "Une liveness probe détecte si le conteneur est bloqué/mort et déclenche un restart ; une readiness probe détecte si le pod est prêt à recevoir du trafic et le retire du Service sinon, sans le redémarrer.",
  },
  {
    question: "What is a ConfigMap vs a Secret?",
    answer:
      "A ConfigMap stores non-sensitive configuration (key/value, files) injectable as env vars or volumes; a Secret stores sensitive data, base64-encoded (not encrypted by default unless encryption-at-rest via KMS is enabled on etcd).",
    questionFr: "Qu'est-ce qu'un ConfigMap vs un Secret ?",
    answerFr:
      "Un ConfigMap stocke de la configuration non sensible (clé/valeur, fichiers) injectable en env vars ou volumes ; un Secret stocke des données sensibles, encodées en base64 (pas chiffrées par défaut sans encryption-at-rest via KMS activé sur etcd).",
  },
  {
    question: "How does pod scheduling work, at a high level?",
    answer:
      "The scheduler filters eligible nodes (available resources, taints/tolerations, affinities) then scores them by criteria (bin-packing, spreading) to pick the best node.",
    questionFr: "Comment fonctionne le scheduling d'un pod, à haut niveau ?",
    answerFr:
      "Le scheduler filtre les nodes éligibles (ressources dispo, taints/tolerations, affinities) puis les score selon des critères (bin-packing, spreading) pour choisir le meilleur node.",
  },
  {
    question: "Difference between requests and limits on pod resources?",
    answer:
      "Requests are guaranteed resources reserved for scheduling; limits are the cap a pod can't exceed (CPU gets throttled, memory overage triggers an OOMKill).",
    questionFr: "Différence entre requests et limits sur les ressources d'un pod ?",
    answerFr:
      "Les requests sont des ressources garanties réservées pour le scheduling ; les limits sont le plafond que le pod ne peut pas dépasser (le CPU est throttlé, un dépassement mémoire déclenche un OOMKill).",
  },
  {
    question: "What is a Namespace and what is it for?",
    answer:
      "A logical partition of the cluster to isolate resources (by team, environment...), with quotas and RBAC applicable per namespace - no native network isolation though (requires NetworkPolicies for that).",
    questionFr: "Qu'est-ce qu'un Namespace et à quoi sert-il ?",
    answerFr:
      "Une partition logique du cluster pour isoler des ressources (par équipe, environnement...), avec des quotas et du RBAC applicables par namespace - pas d'isolation réseau native cependant (nécessite des NetworkPolicies pour ça).",
  },
  {
    question: "How does a Deployment's rolling update work?",
    answer:
      "Kubernetes progressively replaces old pods with new ones according to `maxSurge`/`maxUnavailable`, relying on readiness probes to only route traffic to ready pods, allowing a rollback if needed.",
    questionFr: "Comment fonctionne le rolling update d'un Deployment ?",
    answerFr:
      "Kubernetes remplace progressivement les anciens pods par des nouveaux selon `maxSurge`/`maxUnavailable`, en s'appuyant sur les readiness probes pour ne router le trafic que vers les pods prêts, permettant un rollback si besoin.",
  },
  {
    question: "What is a StatefulSet and when do you use it?",
    answer:
      "Like a Deployment, but guarantees a stable network identity and dedicated persistent storage per replica (deterministic creation/deletion order) - used for stateful workloads like databases.",
    questionFr: "Qu'est-ce qu'un StatefulSet et quand l'utiliser ?",
    answerFr:
      "Comme un Deployment, mais garantit une identité réseau stable et un storage persistant dédié par replica (ordre de création/suppression déterministe) - utilisé pour des workloads stateful comme des bases de données.",
  },
  {
    question: "What is a HorizontalPodAutoscaler (HPA)?",
    answer:
      "Automatically adjusts the number of replicas of a Deployment based on metrics (CPU, memory, or custom metrics) to track load.",
    questionFr: "Qu'est-ce qu'un HorizontalPodAutoscaler (HPA) ?",
    answerFr:
      "Ajuste automatiquement le nombre de replicas d'un Deployment selon des métriques (CPU, mémoire, ou des métriques custom) pour suivre la charge.",
  },
  {
    question: "What is a NetworkPolicy?",
    answer:
      "A resource defining firewall rules at the pod level (by labels), controlling what inbound/outbound traffic is allowed - without it, all pods in a cluster can communicate with each other by default.",
    questionFr: "Qu'est-ce qu'une NetworkPolicy ?",
    answerFr:
      "Une ressource qui définit des règles de firewall au niveau des pods (par labels), contrôlant quel trafic entrant/sortant est autorisé - sans elle, tous les pods d'un cluster peuvent communiquer entre eux par défaut.",
  },
];
