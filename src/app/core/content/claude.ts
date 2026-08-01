export const questions = [
  {
    question:
      'How do the Claude model tiers (e.g. Opus, Sonnet, Haiku) typically trade off against each other?',
    answer:
      'Within a given model generation, the larger tier (Opus) targets maximum capability on hard reasoning/agentic tasks at higher cost and latency; the mid tier (Sonnet) aims for the best balance of capability, speed, and cost for most production use; the smallest tier (Haiku) optimizes for speed and cost on simpler, high-volume tasks. Picking a tier is a per-task cost/latency/capability tradeoff, not a single "best" choice.',
    questionFr:
      'Comment les tiers de modèles Claude (Opus, Sonnet, Haiku) se compromettent-ils généralement entre eux ?',
    answerFr:
      "Au sein d'une même génération de modèles, le tier le plus large (Opus) vise la capacité maximale sur des tâches de raisonnement/agentiques difficiles, au prix d'un coût et d'une latence plus élevés ; le tier intermédiaire (Sonnet) vise le meilleur équilibre capacité/vitesse/coût pour la plupart des usages en production ; le plus petit (Haiku) optimise vitesse et coût sur des tâches simples à fort volume. Choisir un tier est un compromis coût/latence/capacité par tâche, pas un choix unique \"meilleur\".",
  },
  {
    question: 'What is Claude Code, and how does it differ from a chat interface to an LLM?',
    answer:
      "Claude Code is an agentic coding tool (CLI and IDE integrations) that gives the model direct access to a real filesystem, shell, and version control: it reads and edits files, runs commands and tests, and iterates across multiple files toward a task's completion, rather than just returning a text response the developer has to manually apply.",
    questionFr:
      "Qu'est-ce que Claude Code, et en quoi diffère-t-il d'une interface de chat vers un LLM ?",
    answerFr:
      "Claude Code est un outil de codage agentique (CLI et intégrations IDE) qui donne au modèle un accès direct à un vrai système de fichiers, un shell et le contrôle de version : il lit et modifie des fichiers, exécute des commandes et des tests, et itère sur plusieurs fichiers jusqu'à l'accomplissement d'une tâche, plutôt que de simplement retourner une réponse texte que le développeur doit appliquer manuellement.",
  },
  {
    question: 'What is "extended thinking" (reasoning mode) in Claude, and when does it help?',
    answer:
      'A mode where the model generates an explicit intermediate reasoning trace before its final answer, allocating more "thinking" tokens to work through multi-step logic, math, or planning problems; it improves accuracy on hard reasoning tasks at the cost of extra latency and tokens, so it\'s most valuable on genuinely hard problems rather than simple lookups.',
    questionFr:
      'Qu\'est-ce que l\'"extended thinking" (mode raisonnement) chez Claude, et quand est-ce utile ?',
    answerFr:
      'Un mode où le modèle génère une trace de raisonnement intermédiaire explicite avant sa réponse finale, allouant plus de tokens de "réflexion" pour traiter des problèmes de logique, de calcul ou de planification multi-étapes ; cela améliore la précision sur des tâches de raisonnement difficiles au prix de latence et de tokens supplémentaires, donc c\'est surtout utile sur des problèmes réellement difficiles plutôt que de simples recherches.',
  },
  {
    question: 'What is the "computer use" capability, and what class of task does it unlock?',
    answer:
      'The ability for the model to perceive a screen (via screenshots) and act on it by issuing mouse/keyboard actions, letting it operate existing GUI applications the same way a human would rather than requiring an API or a purpose-built tool for every application - useful for automating legacy software or workflows with no accessible API.',
    questionFr:
      'Qu\'est-ce que la capacité "computer use", et quel type de tâche débloque-t-elle ?',
    answerFr:
      "La capacité pour le modèle de percevoir un écran (via des captures) et d'agir dessus en émettant des actions souris/clavier, lui permettant d'opérer des applications GUI existantes comme le ferait un humain, plutôt que de nécessiter une API ou un outil dédié pour chaque application - utile pour automatiser des logiciels legacy ou des workflows sans API accessible.",
  },
  {
    question:
      'What is Constitutional AI, and how does it differ from purely relying on human feedback (RLHF)?',
    answer:
      'A training approach where the model is guided by an explicit set of written principles (a "constitution") and trained to critique and revise its own outputs against them, complementing human feedback with a more scalable, transparent, and consistent source of guidance than relying solely on human raters for every judgment.',
    questionFr:
      "Qu'est-ce que le Constitutional AI, et en quoi diffère-t-il d'une dépendance pure au feedback humain (RLHF) ?",
    answerFr:
      'Une approche d\'entraînement où le modèle est guidé par un ensemble explicite de principes écrits (une "constitution") et entraîné à critiquer et réviser ses propres sorties par rapport à eux, complétant le feedback humain par une source de guidage plus scalable, transparente et cohérente que de dépendre uniquement d\'évaluateurs humains pour chaque jugement.',
  },
  {
    question: "How should you think about Claude's context window when designing an application?",
    answer:
      'It bounds the total tokens (input + prior turns + output) available in a single call; for large codebases or document sets you either need to select/retrieve only the relevant portion (RAG-style), summarize history, or rely on prompt caching to make repeatedly sending a large stable context affordable, rather than assuming everything can always be pasted in.',
    questionFr:
      'Comment faut-il penser la fenêtre de contexte de Claude en concevant une application ?',
    answerFr:
      "Elle borne le nombre total de tokens (entrée + tours précédents + sortie) disponibles dans un seul appel ; pour de gros codebases ou ensembles de documents, il faut soit sélectionner/récupérer seulement la portion pertinente (façon RAG), résumer l'historique, ou s'appuyer sur le prompt caching pour rendre abordable l'envoi répété d'un gros contexte stable, plutôt que de supposer que tout peut toujours être collé.",
  },
  {
    question: 'What are Projects in Claude.ai, and what problem do they solve for recurring work?',
    answer:
      'A way to group conversations around a shared set of persistent context (custom instructions, uploaded reference documents) so every chat in that project starts already grounded in the relevant background, instead of re-explaining or re-uploading the same context in every new conversation.',
    questionFr:
      'Que sont les Projects dans Claude.ai, et quel problème résolvent-ils pour du travail récurrent ?',
    answerFr:
      "Un moyen de regrouper des conversations autour d'un contexte persistant partagé (instructions personnalisées, documents de référence uploadés) pour que chaque chat de ce projet démarre déjà ancré dans le contexte pertinent, plutôt que de réexpliquer ou réuploader le même contexte à chaque nouvelle conversation.",
  },
  {
    question: 'What is MCP (Model Context Protocol) and how does Claude Code use it?',
    answer:
      'An open protocol that standardizes how a model/agent connects to external tools and data sources through MCP servers; Claude Code can be configured to connect to MCP servers (e.g. a database, a ticketing system, a browser) so the agent gains new tools without a bespoke integration being hand-built for each one.',
    questionFr:
      "Qu'est-ce que le MCP (Model Context Protocol) et comment Claude Code l'utilise-t-il ?",
    answerFr:
      "Un protocole ouvert qui standardise la façon dont un modèle/agent se connecte à des outils et sources de données externes via des serveurs MCP ; Claude Code peut être configuré pour se connecter à des serveurs MCP (une base de données, un système de tickets, un navigateur) pour que l'agent gagne de nouveaux outils sans intégration ad hoc construite à la main pour chacun.",
  },
  {
    question:
      'What are subagents in Claude Code, and why delegate a task to one instead of handling it inline?',
    answer:
      "Subagents are separately spawned agent instances (often with their own tool access and instructions) used to parallelize independent pieces of work or to keep a large, noisy exploration (e.g. searching a big codebase) out of the main conversation's context, returning only a distilled result to the orchestrating agent.",
    questionFr:
      'Que sont les subagents dans Claude Code, et pourquoi déléguer une tâche à un plutôt que de la traiter directement ?',
    answerFr:
      "Les subagents sont des instances d'agent lancées séparément (souvent avec leur propre accès aux outils et leurs propres instructions) utilisées pour paralléliser des morceaux de travail indépendants ou pour garder une exploration lourde et bruyante (chercher dans un gros codebase) hors du contexte de la conversation principale, en ne renvoyant qu'un résultat condensé à l'agent orchestrateur.",
  },
  {
    question: 'What are hooks in Claude Code, and what kind of behavior do they enable?',
    answer:
      "Shell commands configured to run automatically in response to specific events (before/after a tool call, on session start, etc.), used to enforce deterministic guardrails - linting or formatting on file edits, blocking a disallowed command, logging activity - that shouldn't depend on the model choosing to do them every time.",
    questionFr:
      'Que sont les hooks dans Claude Code, et quel type de comportement permettent-ils ?',
    answerFr:
      "Des commandes shell configurées pour s'exécuter automatiquement en réponse à des événements précis (avant/après un appel d'outil, au démarrage de session, etc.), utilisées pour imposer des garde-fous déterministes - lint ou formatage à chaque édition de fichier, blocage d'une commande interdite, journalisation d'activité - qui ne doivent pas dépendre du choix du modèle de les faire à chaque fois.",
  },
  {
    question:
      "What do Claude Code's permission modes (e.g. plan mode, auto-accept) control, and why does that matter for agentic coding?",
    answer:
      'They control how much the agent can act before a human confirms: plan mode has the agent propose an approach for review before any file is touched, while auto-accept lets it apply changes and run commands without per-action confirmation; the tradeoff is oversight and safety versus speed, and it should scale with how reversible and well-scoped the task is.',
    questionFr:
      'Que contrôlent les modes de permission de Claude Code (plan mode, auto-accept), et pourquoi cela compte-t-il pour le codage agentique ?',
    answerFr:
      "Ils contrôlent jusqu'où l'agent peut agir avant qu'un humain confirme : le plan mode fait proposer une approche à l'agent pour revue avant de toucher un fichier, tandis qu'auto-accept lui permet d'appliquer des changements et d'exécuter des commandes sans confirmation à chaque action ; le compromis est la supervision et la sécurité contre la vitesse, et cela doit s'ajuster à la réversibilité et au périmètre de la tâche.",
  },
  {
    question:
      'What does prompt caching do specifically for the Claude API, and what kind of workload benefits most?',
    answer:
      'It lets the API reuse the already-processed representation of a stable prefix of the prompt (a long system prompt, a large document, tool definitions) across repeated calls, cutting both latency and cost for that reused portion; workloads with a large, mostly static context and many short follow-up turns - like an agent repeatedly re-reading the same codebase context - benefit the most.',
    questionFr:
      "Que fait précisément le prompt caching pour l'API Claude, et quel type de workload en bénéficie le plus ?",
    answerFr:
      "Il permet à l'API de réutiliser la représentation déjà traitée d'un préfixe stable du prompt (un long system prompt, un gros document, des définitions d'outils) à travers des appels répétés, réduisant à la fois latence et coût pour cette portion réutilisée ; les workloads avec un gros contexte majoritairement statique et de nombreux tours de suite courts - comme un agent qui relit sans cesse le même contexte de codebase - en bénéficient le plus.",
  },
  {
    question:
      'What are Skills in the context of Claude, and how do they differ from a one-off system prompt instruction?',
    answer:
      'Skills are packaged, reusable sets of instructions (and sometimes bundled scripts/resources) that the model can invoke for a specific kind of task, discovered from a short description rather than being pasted in full every time; this keeps the base context lean while still giving the model access to detailed, specialized procedures on demand.',
    questionFr:
      "Que sont les Skills dans le contexte de Claude, et en quoi diffèrent-elles d'une instruction ponctuelle en system prompt ?",
    answerFr:
      "Les Skills sont des ensembles d'instructions réutilisables et packagés (parfois avec des scripts/ressources associés) que le modèle peut invoquer pour un type de tâche précis, découverts via une courte description plutôt que collés en entier à chaque fois ; cela garde le contexte de base léger tout en donnant au modèle accès à des procédures détaillées et spécialisées à la demande.",
  },
  {
    question:
      "What's the practical difference between calling Claude via the Anthropic API directly versus through Amazon Bedrock or Google Vertex AI?",
    answer:
      "The underlying model capabilities are the same; the difference is operational - Bedrock and Vertex integrate Claude into that cloud provider's existing IAM, billing, VPC networking, and compliance boundary, which matters for enterprises standardized on one cloud, while the direct Anthropic API is often the fastest path to new features and model releases.",
    questionFr:
      "Quelle est la différence pratique entre appeler Claude via l'API Anthropic directement ou via Amazon Bedrock ou Google Vertex AI ?",
    answerFr:
      "Les capacités du modèle sous-jacent sont les mêmes ; la différence est opérationnelle - Bedrock et Vertex intègrent Claude dans l'IAM, la facturation, le réseau VPC et le périmètre de conformité existants de ce fournisseur cloud, ce qui compte pour des entreprises standardisées sur un cloud, tandis que l'API Anthropic directe est souvent le chemin le plus rapide vers les nouvelles fonctionnalités et modèles.",
  },
  {
    question:
      'What are Artifacts in Claude.ai, and what problem do they solve compared to inline chat responses?',
    answer:
      'A separate panel that renders substantial, self-contained generated content (code, documents, diagrams, small web apps) outside the linear chat flow, so it can be viewed, edited, and iterated on directly without scrolling back through the conversation to find the latest version buried in a chat bubble.',
    questionFr:
      'Que sont les Artifacts dans Claude.ai, et quel problème résolvent-ils par rapport aux réponses en ligne dans le chat ?',
    answerFr:
      'Un panneau séparé qui affiche du contenu généré conséquent et autonome (code, documents, diagrammes, petites web apps) en dehors du fil de discussion linéaire, pour pouvoir être visualisé, édité et itéré directement sans faire défiler la conversation pour retrouver la dernière version enfouie dans une bulle de chat.',
  },
  {
    question:
      "How does Claude's vision capability typically get used in an enterprise workflow, beyond simple image description?",
    answer:
      'Reading and reasoning over screenshots, scanned documents, charts, or diagrams as part of a larger task - for example extracting structured data from a scanned invoice, reviewing a UI mockup against a spec, or interpreting a chart in a report - combined with text reasoning rather than used as a standalone image-captioning feature.',
    questionFr:
      "Comment la capacité de vision de Claude est-elle typiquement utilisée dans un workflow en entreprise, au-delà d'une simple description d'image ?",
    answerFr:
      "Lire et raisonner sur des captures d'écran, documents scannés, graphiques ou diagrammes dans le cadre d'une tâche plus large - par exemple extraire des données structurées d'une facture scannée, comparer une maquette UI à une spec, ou interpréter un graphique dans un rapport - combiné à du raisonnement textuel plutôt qu'utilisé comme une fonctionnalité de légendage d'image isolée.",
  },
  {
    question:
      'What is the "helpful, harmless, honest" (HHH) framing, and how does it show up in how Claude is trained to behave?',
    answer:
      'A framing for the objectives a well-behaved assistant should balance: being genuinely useful to the user, avoiding actions that cause harm, and being truthful rather than telling the user what they want to hear; in practice this shows up as Claude declining unsafe requests, flagging uncertainty instead of confabulating, and pushing back on a flawed premise rather than silently complying.',
    questionFr:
      'Qu\'est-ce que le cadrage "helpful, harmless, honest" (HHH), et comment se traduit-il dans le comportement entraîné de Claude ?',
    answerFr:
      "Un cadrage pour les objectifs qu'un assistant bien conçu doit équilibrer : être réellement utile à l'utilisateur, éviter les actions causant du tort, et être honnête plutôt que de dire à l'utilisateur ce qu'il veut entendre ; en pratique cela se traduit par le refus de requêtes dangereuses, le signalement de l'incertitude plutôt que la confabulation, et la remise en question d'une prémisse erronée plutôt qu'une conformité silencieuse.",
  },
  {
    question:
      'What kind of enterprise data handling guarantees typically matter most when adopting Claude in a regulated environment?',
    answer:
      'Whether customer prompts/outputs are used to train future models (typically not, by default, for API/enterprise usage), data retention periods, regional data residency options, and audit/compliance certifications - these govern what a security or legal team needs to sign off on before an LLM can touch sensitive or regulated data.',
    questionFr:
      "Quel type de garanties de traitement des données en entreprise compte le plus lors de l'adoption de Claude dans un environnement régulé ?",
    answerFr:
      "Que les prompts/sorties client soient utilisés ou non pour entraîner de futurs modèles (typiquement non, par défaut, pour un usage API/entreprise), les durées de rétention des données, les options de résidence régionale des données, et les certifications d'audit/conformité - c'est ce qu'une équipe sécurité ou juridique doit valider avant qu'un LLM ne touche des données sensibles ou régulées.",
  },
  {
    question: 'What is the Message Batches API, and what workload is it designed for?',
    answer:
      "An asynchronous endpoint that accepts a large set of independent requests at once and returns results within a longer completion window (rather than real-time), at a significantly lower per-token cost than synchronous calls; it fits large offline workloads - bulk classification, dataset labeling, batch summarization - where latency on any single request doesn't matter but total cost does.",
    questionFr:
      "Qu'est-ce que l'API Message Batches, et pour quel type de workload est-elle conçue ?",
    answerFr:
      "Un endpoint asynchrone qui accepte un grand ensemble de requêtes indépendantes d'un coup et retourne les résultats dans une fenêtre de complétion plus longue (plutôt qu'en temps réel), à un coût par token significativement plus bas que des appels synchrones ; elle convient aux gros workloads hors ligne - classification en masse, labellisation de dataset, résumé par lot - où la latence d'une requête individuelle importe peu mais le coût total oui.",
  },
  {
    question:
      "What are Claude's built-in tools (e.g. web search, code execution), and how do they differ from custom tools/MCP servers a developer defines?",
    answer:
      'Built-in tools are capabilities Anthropic hosts and maintains directly (fetching live web results, running code in a sandbox) that a developer enables with a flag rather than implementing themselves; custom tools and MCP servers are integrations the developer defines and hosts to connect the model to their own systems - the two are complementary, letting an application mix ready-made capabilities with bespoke ones.',
    questionFr:
      'Que sont les outils intégrés de Claude (recherche web, exécution de code), et en quoi diffèrent-ils des outils custom/serveurs MCP définis par un développeur ?',
    answerFr:
      "Les outils intégrés sont des capacités hébergées et maintenues directement par Anthropic (récupérer des résultats web en direct, exécuter du code dans un sandbox) qu'un développeur active avec un flag plutôt que de les implémenter lui-même ; les outils custom et serveurs MCP sont des intégrations que le développeur définit et héberge pour connecter le modèle à ses propres systèmes - les deux sont complémentaires, permettant à une application de mélanger des capacités prêtes à l'emploi et sur mesure.",
  },
  {
    question:
      'How do you get reliable structured (JSON) output from Claude for a downstream system to parse?',
    answer:
      'The most reliable approach is defining a tool with a strict input schema and forcing the model to call it, since the API then validates the response against that schema rather than hoping a free-text instruction like "respond in JSON" is followed exactly; this matters whenever an LLM\'s output feeds directly into code rather than being read by a human.',
    questionFr:
      "Comment obtenir une sortie structurée (JSON) fiable de Claude pour qu'un système en aval la parse ?",
    answerFr:
      "L'approche la plus fiable consiste à définir un outil avec un schéma d'entrée strict et à forcer le modèle à l'appeler, car l'API valide alors la réponse contre ce schéma plutôt que d'espérer qu'une instruction en texte libre comme \"réponds en JSON\" soit suivie exactement ; cela compte dès qu'une sortie de LLM alimente directement du code plutôt que d'être lue par un humain.",
  },
  {
    question: 'What is the Claude Agent SDK, and how does it relate to Claude Code?',
    answer:
      'A software development kit that exposes the same agentic loop, tool-use, and context-management primitives that power Claude Code, so a team can build their own custom agents for tasks beyond coding (e.g. a support or research agent) instead of reimplementing the orchestration logic (looping, tool dispatch, context/memory handling) from scratch.',
    questionFr: "Qu'est-ce que le Claude Agent SDK, et quel est son lien avec Claude Code ?",
    answerFr:
      "Un kit de développement qui expose les mêmes primitives de boucle agentique, d'usage d'outils et de gestion du contexte qui font tourner Claude Code, pour qu'une équipe puisse construire ses propres agents sur mesure pour des tâches au-delà du code (un agent de support ou de recherche par exemple) plutôt que de réimplémenter la logique d'orchestration (boucle, dispatch d'outils, gestion du contexte/mémoire) à partir de zéro.",
  },
  {
    question:
      'What do API usage tiers and rate limits typically govern, and why do they matter when architecting an application on Claude?',
    answer:
      'They cap requests-per-minute and tokens-per-minute based on account tier and spend history, meaning a production application needs to handle 429 responses with backoff/retry and, for bursty or high-volume workloads, either request a tier increase or spread load (e.g. via batching) rather than assuming unlimited throughput from day one.',
    questionFr:
      "Que gouvernent typiquement les tiers d'usage et les rate limits de l'API, et pourquoi comptent-ils en concevant une application sur Claude ?",
    answerFr:
      "Ils plafonnent les requêtes par minute et les tokens par minute selon le tier du compte et l'historique de dépense, ce qui signifie qu'une application en production doit gérer les réponses 429 avec du backoff/retry et, pour des workloads en pics ou à fort volume, soit demander une augmentation de tier soit étaler la charge (via du batching par exemple) plutôt que de supposer un débit illimité dès le premier jour.",
  },
];
