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
  {
    question: "What is Helm and what problem does it solve?",
    answer:
      "A package manager for Kubernetes: it bundles a set of manifests into a templated \"chart\" with configurable values, so you can install, upgrade, and roll back a whole application (with all its resources) as one versioned unit instead of applying raw YAML by hand.",
    questionFr: "Qu'est-ce que Helm et quel problème résout-il ?",
    answerFr:
      "Un package manager pour Kubernetes : il regroupe un ensemble de manifests dans un \"chart\" templatisé avec des valeurs configurables, pour installer, mettre à jour et rollback toute une application (avec toutes ses ressources) comme une seule unité versionnée plutôt que d'appliquer du YAML brut à la main.",
  },
  {
    question: "What is a Kubernetes Operator?",
    answer:
      "A controller that extends Kubernetes with a Custom Resource Definition (CRD) and application-specific logic, encoding operational knowledge (how to back up, upgrade, or fail over a piece of software) so that managing it becomes as declarative as managing a built-in resource like a Deployment.",
    questionFr: "Qu'est-ce qu'un Operator Kubernetes ?",
    answerFr:
      "Un controller qui étend Kubernetes avec une Custom Resource Definition (CRD) et une logique spécifique à l'application, encodant une connaissance opérationnelle (comment sauvegarder, mettre à jour, ou basculer un logiciel) pour que le gérer devienne aussi déclaratif que gérer une ressource native comme un Deployment.",
  },
  {
    question: "What is a PodDisruptionBudget and why does it matter during cluster maintenance?",
    answer:
      "It caps how many replicas of an application can be voluntarily evicted at once (e.g. during a node drain for upgrades), preventing a maintenance operation from accidentally taking down all replicas of a service simultaneously.",
    questionFr: "Qu'est-ce qu'un PodDisruptionBudget et pourquoi est-ce important pendant la maintenance du cluster ?",
    answerFr:
      "Il plafonne combien de replicas d'une application peuvent être évincés volontairement en même temps (ex. lors d'un node drain pour des mises à jour), évitant qu'une opération de maintenance ne mette accidentellement à terre tous les replicas d'un service en même temps.",
  },
  {
    question: "What is an init container used for?",
    answer:
      "A container that runs to completion before the main application containers in a pod start, typically used to wait for a dependency to be ready, run a one-off setup/migration step, or fetch configuration, keeping that logic out of the main container's image.",
    questionFr: "À quoi sert un init container ?",
    answerFr:
      "Un conteneur qui s'exécute jusqu'à sa fin avant que les conteneurs applicatifs principaux d'un pod ne démarrent, typiquement utilisé pour attendre qu'une dépendance soit prête, exécuter une étape de setup/migration ponctuelle, ou récupérer de la configuration, gardant cette logique hors de l'image du conteneur principal.",
  },
  {
    question: "What is the sidecar pattern and where is it commonly used?",
    answer:
      "Running a second container in the same pod that augments the main container without modifying it, e.g. a service mesh proxy (Envoy in Istio), a log shipper, or a TLS-terminating proxy, sharing the pod's network namespace and lifecycle.",
    questionFr: "Qu'est-ce que le sidecar pattern et où est-il couramment utilisé ?",
    answerFr:
      "Faire tourner un second conteneur dans le même pod qui enrichit le conteneur principal sans le modifier, ex. un proxy de service mesh (Envoy dans Istio), un log shipper, ou un proxy qui termine le TLS, en partageant le namespace réseau et le cycle de vie du pod.",
  },
  {
    question: "At a high level, what does a service mesh like Istio add on top of Kubernetes networking?",
    answer:
      "Uniform mTLS between services, fine-grained traffic control (canary routing, retries, circuit breaking) without touching application code, and rich observability (latency, error rates, traces) by routing pod-to-pod traffic through sidecar proxies.",
    questionFr: "À haut niveau, qu'apporte un service mesh comme Istio par-dessus le réseau Kubernetes ?",
    answerFr:
      "Du mTLS uniforme entre services, un contrôle de trafic fin (canary routing, retries, circuit breaking) sans toucher au code applicatif, et une observabilité riche (latence, taux d'erreur, traces) en routant le trafic pod-à-pod à travers des proxies sidecar.",
  },
];
