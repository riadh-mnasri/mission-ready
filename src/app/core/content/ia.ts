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
  {
    question: "What are embeddings and what is a vector database used for?",
    answer:
      "An embedding maps a piece of text (or image, audio...) to a dense numerical vector such that semantically similar inputs end up close together in that vector space; a vector database indexes millions of such vectors for fast nearest-neighbor search, which is the retrieval half of RAG.",
    questionFr: "Que sont les embeddings et à quoi sert une base de données vectorielle ?",
    answerFr:
      "Un embedding transforme un morceau de texte (ou image, audio...) en un vecteur numérique dense tel que des entrées sémantiquement similaires se retrouvent proches dans cet espace vectoriel ; une base de données vectorielle indexe des millions de ces vecteurs pour une recherche rapide des plus proches voisins, ce qui constitue la moitié \"retrieval\" du RAG.",
  },
  {
    question: "What does the \"temperature\" sampling parameter control when generating text?",
    answer:
      "It scales the randomness of token selection: near 0 makes the model almost deterministic, picking the highest-probability token every time (good for factual/code tasks); higher values flatten the probability distribution, producing more varied/creative but less predictable output.",
    questionFr: "Que contrôle le paramètre d'échantillonnage \"temperature\" lors de la génération de texte ?",
    answerFr:
      "Il ajuste le caractère aléatoire de la sélection des tokens : proche de 0, le modèle devient quasi déterministe et choisit à chaque fois le token le plus probable (bon pour des tâches factuelles/de code) ; des valeurs plus hautes aplatissent la distribution de probabilité, produisant une sortie plus variée/créative mais moins prévisible.",
  },
  {
    question: "What is the practical difference between a system prompt and a user prompt?",
    answer:
      "The system prompt sets persistent instructions, role, and constraints for the whole conversation (usually not shown to the end user and given more \"authority\" by the model), while the user prompt is the specific, turn-by-turn input; well-designed agents keep stable behavior rules in the system prompt rather than repeating them per user message.",
    questionFr: "Quelle est la différence pratique entre un system prompt et un user prompt ?",
    answerFr:
      "Le system prompt fixe des instructions persistantes, un rôle et des contraintes pour toute la conversation (généralement invisible pour l'utilisateur final et doté de plus \"d'autorité\" par le modèle), tandis que le user prompt est l'entrée spécifique, tour par tour ; des agents bien conçus gardent les règles de comportement stables dans le system prompt plutôt que de les répéter à chaque message utilisateur.",
  },
  {
    question: "What do AI \"guardrails\" typically consist of in a production application?",
    answer:
      "A combination of input filtering (blocking disallowed requests before they reach the model), output filtering/moderation (checking generated content before it reaches the user), and structural constraints (forcing a schema/format), layered on top of the model's own built-in safety training rather than relying on it alone.",
    questionFr: "En quoi consistent typiquement les \"guardrails\" IA dans une application en production ?",
    answerFr:
      "Une combinaison de filtrage des entrées (bloquer les requêtes non autorisées avant qu'elles n'atteignent le modèle), de filtrage/modération des sorties (vérifier le contenu généré avant qu'il n'atteigne l'utilisateur), et de contraintes structurelles (imposer un schéma/format), en plus de l'entraînement de sécurité intégré du modèle plutôt que de s'y fier seul.",
  },
  {
    question: "What tradeoffs come with choosing an open-weight model over a closed/hosted API model?",
    answer:
      "Open-weight models can be self-hosted for data control, fine-tuned freely, and avoid per-token API costs at scale, but require your own inference infrastructure and ongoing ops; closed API models (Claude, GPT) usually lead on raw capability and require zero infrastructure, at the cost of per-request pricing and less control over data handling.",
    questionFr: "Quels compromis implique le choix d'un modèle open-weight plutôt qu'un modèle API fermé/hébergé ?",
    answerFr:
      "Les modèles open-weight peuvent être auto-hébergés pour garder le contrôle des données, fine-tunés librement, et évitent les coûts API par token à grande échelle, mais nécessitent sa propre infrastructure d'inférence et son exploitation continue ; les modèles API fermés (Claude, GPT) sont généralement en tête sur la capacité brute et ne demandent aucune infrastructure, au prix d'une tarification par requête et de moins de contrôle sur le traitement des données.",
  },
  {
    question: "What is LoRA and why is it popular for fine-tuning large models?",
    answer:
      "Low-Rank Adaptation freezes the original model weights and trains a small set of additional low-rank matrices injected into specific layers, achieving most of the benefit of full fine-tuning at a fraction of the compute/memory cost, and letting you swap different LoRA adapters onto the same base model.",
    questionFr: "Qu'est-ce que LoRA et pourquoi est-il populaire pour le fine-tuning de grands modèles ?",
    answerFr:
      "Low-Rank Adaptation gèle les poids originaux du modèle et entraîne un petit ensemble de matrices low-rank additionnelles injectées dans des couches spécifiques, obtenant l'essentiel du bénéfice d'un fine-tuning complet pour une fraction du coût en calcul/mémoire, et permettant d'échanger différents adaptateurs LoRA sur le même modèle de base.",
  },
  {
    question: "When would you choose fine-tuning over RAG, or the other way around?",
    answer:
      "RAG is the default when the need is grounding answers in specific, changing, or proprietary documents (the model's reasoning stays the same, only its retrieved context changes); fine-tuning is worth its higher cost when you need to change the model's behavior itself (a specific tone, a specialized output format, domain vocabulary baked in) rather than just what facts it has access to.",
    questionFr: "Quand choisir le fine-tuning plutôt que le RAG, ou l'inverse ?",
    answerFr:
      "Le RAG est le choix par défaut quand le besoin est d'ancrer les réponses dans des documents spécifiques, changeants ou propriétaires (le raisonnement du modèle reste le même, seul son contexte récupéré change) ; le fine-tuning justifie son coût plus élevé quand il faut changer le comportement du modèle lui-même (un ton spécifique, un format de sortie spécialisé, un vocabulaire métier intégré) plutôt que juste les faits auxquels il a accès.",
  },
  {
    question: "What is an \"agentic loop\", and how does it differ from a single LLM call?",
    answer:
      "A single LLM call returns one response to one prompt; an agentic loop repeatedly calls the model, lets it choose and invoke tools, feeds the tool results back into the context, and continues until the model decides the task is done, letting it handle multi-step tasks that require gathering information or taking actions along the way.",
    questionFr: "Qu'est-ce qu'une \"boucle agentique\", et en quoi diffère-t-elle d'un simple appel LLM ?",
    answerFr:
      "Un simple appel LLM retourne une réponse à un prompt ; une boucle agentique appelle le modèle de façon répétée, le laisse choisir et invoquer des outils, réinjecte les résultats des outils dans le contexte, et continue jusqu'à ce que le modèle décide que la tâche est terminée, ce qui lui permet de gérer des tâches multi-étapes nécessitant de récupérer des informations ou d'agir en chemin.",
  },
  {
    question: "What is a model card / system card, and why does it matter for enterprise AI adoption?",
    answer:
      "A document published by the model provider describing intended use cases, known limitations, evaluated risks, and safety testing results for a given model; enterprises use it during vendor/model selection and risk assessment to understand what a model was and wasn't validated for before deploying it in a production workflow.",
    questionFr: "Qu'est-ce qu'une model card / system card, et pourquoi compte-t-elle pour l'adoption de l'IA en entreprise ?",
    answerFr:
      "Un document publié par le fournisseur du modèle décrivant les cas d'usage prévus, les limitations connues, les risques évalués, et les résultats des tests de sécurité pour un modèle donné ; les entreprises l'utilisent lors de la sélection de fournisseur/modèle et de l'évaluation des risques pour comprendre pour quoi un modèle a (ou n'a pas) été validé avant de le déployer dans un workflow de production.",
  },
  {
    question: "Difference between zero-shot, few-shot, and chain-of-thought prompting?",
    answer:
      "Zero-shot gives the model just the task description with no examples; few-shot adds a handful of example input/output pairs in the prompt to steer format and style; chain-of-thought asks the model to reason step by step before answering, which tends to improve accuracy on multi-step or logical tasks at the cost of more output tokens.",
    questionFr: "Différence entre le prompting zero-shot, few-shot et chain-of-thought ?",
    answerFr:
      "Le zero-shot ne donne au modèle que la description de la tâche sans exemple ; le few-shot ajoute quelques paires exemple entrée/sortie dans le prompt pour orienter le format et le style ; le chain-of-thought demande au modèle de raisonner étape par étape avant de répondre, ce qui tend à améliorer la précision sur des tâches multi-étapes ou logiques au prix de plus de tokens en sortie.",
  },
  {
    question: "What is \"context engineering\", and how does it differ from prompt engineering?",
    answer:
      "Prompt engineering focuses narrowly on wording a single instruction well; context engineering is the broader discipline of deciding what information (retrieved documents, tool outputs, conversation history, system instructions) the model sees at all, and in what order and format, since for agentic and long-running tasks what's in the context window matters more than how any one instruction is phrased.",
    questionFr: "Qu'est-ce que le \"context engineering\", et en quoi diffère-t-il du prompt engineering ?",
    answerFr:
      "Le prompt engineering se concentre étroitement sur la bonne formulation d'une seule instruction ; le context engineering est la discipline plus large qui consiste à décider quelles informations (documents récupérés, résultats d'outils, historique de conversation, instructions système) le modèle voit, et dans quel ordre et format, car pour des tâches agentiques ou longue durée, ce qui est dans la fenêtre de contexte compte plus que la formulation d'une instruction isolée.",
  },
  {
    question: "For billing and context-window purposes, what is a token, and how does it relate to words?",
    answer:
      "A token is the model's basic unit of text, typically a sub-word chunk (roughly 3-4 characters in English on average) produced by the model's tokenizer, not a whole word; as a rule of thumb one word is often around 1.3 tokens in English, though it varies significantly by language and vocabulary, which is why context limits and API costs are always specified in tokens rather than words.",
    questionFr: "Pour la facturation et la fenêtre de contexte, qu'est-ce qu'un token, et quel est son lien avec les mots ?",
    answerFr:
      "Un token est l'unité de base de texte du modèle, typiquement un fragment de sous-mot (environ 3-4 caractères en anglais en moyenne) produit par le tokenizer du modèle, pas un mot entier ; en règle générale un mot fait souvent environ 1,3 token en anglais, même si cela varie fortement selon la langue et le vocabulaire, ce qui explique pourquoi les limites de contexte et les coûts API sont toujours exprimés en tokens plutôt qu'en mots.",
  },
];
