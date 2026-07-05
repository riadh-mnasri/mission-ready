export const questions = [
  {
    question: "What's the difference between an LLM and an AI agent?",
    answer:
      "An LLM generates text from a prompt in a stateless way; an agent wraps a decision loop around the LLM (planning, tool calls, memory, observing results) to accomplish a multi-step task autonomously.",
    questionFr: "Quelle est la différence entre un LLM et un agent IA ?",
    answerFr:
      "Un LLM génère du texte à partir d'un prompt de façon stateless ; un agent enveloppe une boucle de décision autour du LLM (planification, tool calls, mémoire, observation des résultats) pour accomplir une tâche en plusieurs étapes de façon autonome.",
  },
  {
    question: "What is RAG (Retrieval-Augmented Generation) and why use it?",
    answer:
      "A technique that retrieves relevant documents (often via vector search) and injects them into the prompt before generation, grounding the model's answers in up-to-date/private data without retraining it.",
    questionFr: "Qu'est-ce que le RAG (Retrieval-Augmented Generation) et pourquoi l'utiliser ?",
    answerFr:
      "Une technique qui récupère des documents pertinents (souvent via une recherche vectorielle) et les injecte dans le prompt avant la génération, pour ancrer les réponses du modèle sur des données à jour/privées sans le réentraîner.",
  },
  {
    question: "What is \"tool use\"/\"function calling\" in modern LLMs (Claude, GPT)?",
    answer:
      "The model can emit a structured call (function name + arguments) instead of or alongside a text answer; the application actually executes the action and feeds the result back to the model so it can continue reasoning.",
    questionFr: "Qu'est-ce que le \"tool use\"/\"function calling\" chez les LLM modernes (Claude, GPT) ?",
    answerFr:
      "Le modèle peut émettre un appel structuré (nom de fonction + arguments) à la place ou en complément d'une réponse texte ; l'application exécute réellement l'action et renvoie le résultat au modèle pour qu'il poursuive son raisonnement.",
  },
  {
    question: "What is MCP (Model Context Protocol)?",
    answer:
      "An open protocol standardizing how a model/agent accesses external tools and data sources (files, APIs, databases) via MCP servers, avoiding a bespoke integration per tool for every application.",
    questionFr: "Qu'est-ce que le MCP (Model Context Protocol) ?",
    answerFr:
      "Un protocole ouvert qui standardise la façon dont un modèle/agent accède à des outils et sources de données externes (fichiers, APIs, bases de données) via des serveurs MCP, évitant une intégration ad hoc par outil pour chaque application.",
  },
  {
    question: "How do Copilot/Claude Code differ from simple code autocomplete?",
    answer:
      "They don't just complete the current line: they can understand a repo's multi-file context, run commands, read test results, and iterate across multiple files agentically to complete an entire task.",
    questionFr: "En quoi Copilot/Claude Code diffèrent-ils d'un simple autocomplete de code ?",
    answerFr:
      "Ils ne se contentent pas de compléter la ligne courante : ils peuvent comprendre le contexte multi-fichiers d'un repo, exécuter des commandes, lire des résultats de tests, et itérer sur plusieurs fichiers de façon agentique pour accomplir une tâche complète.",
  },
  {
    question: "What is \"prompt injection\" and why is it a risk for agents?",
    answer:
      "An attack where external content (a webpage, document, tool result) contains hidden instructions meant to hijack the agent's behavior - critical as soon as an agent has access to tools with real-world effects (files, payments, emails).",
    questionFr: "Qu'est-ce que le \"prompt injection\" et pourquoi est-ce un risque pour les agents ?",
    answerFr:
      "Une attaque où du contenu externe (une page web, un document, un résultat d'outil) contient des instructions cachées destinées à détourner le comportement de l'agent - critique dès qu'un agent a accès à des outils avec des effets réels (fichiers, paiements, emails).",
  },
  {
    question: "What is the context window and why is it a key constraint?",
    answer:
      "The maximum amount of tokens (input + output) the model can process at once; beyond that, you need to summarize, chunk, or use RAG - this directly shapes the architecture of any LLM application over large documents/codebases.",
    questionFr: "Qu'est-ce que la context window et pourquoi est-ce une contrainte clé ?",
    answerFr:
      "La quantité maximale de tokens (entrée + sortie) que le modèle peut traiter en une fois ; au-delà, il faut résumer, découper, ou utiliser du RAG - ça façonne directement l'architecture de toute application LLM sur de gros documents/codebases.",
  },
  {
    question:
      "Difference between fine-tuning and prompt engineering/RAG to adapt an LLM to a domain?",
    answer:
      "Fine-tuning retrains (part of) the model's weights on domain-specific data, costly and needing to be redone on every update; prompt engineering/RAG adapts behavior at inference time without touching the weights, faster to iterate on and maintain.",
    questionFr:
      "Différence entre le fine-tuning et le prompt engineering/RAG pour adapter un LLM à un domaine ?",
    answerFr:
      "Le fine-tuning réentraîne (en partie) les poids du modèle sur des données spécifiques au domaine, coûteux et à refaire à chaque mise à jour ; le prompt engineering/RAG adapte le comportement à l'inférence sans toucher aux poids, plus rapide à itérer et à maintenir.",
  },
  {
    question: "What is LLM \"hallucination\" and how do you limit it in practice?",
    answer:
      "The model generates plausible but false/invented information; it's mitigated via RAG (grounding in verifiable sources), prompts that explicitly allow \"I don't know\", and citing/verifying sources in the output.",
    questionFr: "Qu'est-ce que l'\"hallucination\" d'un LLM et comment la limiter en pratique ?",
    answerFr:
      "Le modèle génère une information plausible mais fausse/inventée ; on la limite via le RAG (ancrage sur des sources vérifiables), des prompts qui autorisent explicitement \"je ne sais pas\", et la citation/vérification des sources en sortie.",
  },
  {
    question: "How does prompt caching work and what's its benefit?",
    answer:
      "Reusing server-side, already-processed tokens from an identical prompt prefix (e.g. a system prompt, a large context) across multiple calls, sharply cutting latency and cost when the context changes little between calls.",
    questionFr: "Comment fonctionne le prompt caching et quel est son intérêt ?",
    answerFr:
      "Réutiliser côté serveur des tokens déjà traités d'un préfixe de prompt identique (ex. un system prompt, un gros contexte) entre plusieurs appels, réduisant fortement la latence et le coût quand le contexte change peu d'un appel à l'autre.",
  },
  {
    question: "What are the specific security concerns of using AI agents in the enterprise (e.g. Copilot)?",
    answer:
      "Leaking sensitive data to the model/third parties, executing unwanted actions via connected tools (prompt injection), and governing the permissions granted to the agent - often requiring a least-privilege approach similar to a service account.",
    questionFr: "Quels sont les enjeux de sécurité spécifiques à l'usage d'agents IA en entreprise (ex. Copilot) ?",
    answerFr:
      "La fuite de données sensibles vers le modèle/des tiers, l'exécution d'actions non désirées via des outils connectés (prompt injection), et la gouvernance des permissions accordées à l'agent - nécessitant souvent une approche least-privilege similaire à un compte de service.",
  },
  {
    question: "How do you objectively evaluate the quality of an AI agent/assistant on a given task?",
    answer:
      "Through \"evals\": a representative set of tasks with measurable success criteria (tests passing, factual accuracy, format compliance), re-run on every prompt/model change to catch regressions, rather than relying on a subjective impression.",
    questionFr: "Comment évaluer objectivement la qualité d'un agent/assistant IA sur une tâche donnée ?",
    answerFr:
      "Via des \"evals\" : un jeu de tâches représentatives avec des critères de succès mesurables (tests qui passent, exactitude factuelle, respect d'un format), rejoués à chaque changement de prompt/modèle pour détecter les régressions, plutôt qu'une impression subjective.",
  },
];
