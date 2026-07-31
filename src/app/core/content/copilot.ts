export const questions = [
  {
    question: "What's the difference between Copilot's inline code completion and Copilot Chat?",
    answer:
      'Inline completion silently suggests the next few lines or a whole function as you type, accepted with a keystroke; Copilot Chat is a conversational interface where you explicitly ask for explanations, refactors, or multi-file changes and review a proposed diff before applying it - a more deliberate, task-oriented mode than ambient autocomplete.',
    questionFr: 'Quelle est la différence entre la complétion inline de Copilot et Copilot Chat ?',
    answerFr:
      "La complétion inline suggère silencieusement les prochaines lignes ou une fonction entière pendant que vous tapez, acceptée d'une touche ; Copilot Chat est une interface conversationnelle où vous demandez explicitement des explications, des refactors ou des changements multi-fichiers et relisez un diff proposé avant de l'appliquer - un mode plus délibéré et orienté tâche que l'autocomplete ambiant.",
  },
  {
    question: 'How does Copilot build the context it uses to generate a suggestion?',
    answer:
      "It combines the current file's content around the cursor with signals from other open tabs, recently edited files, and (with workspace indexing enabled) a broader index of the repository, weighting nearby and recently touched code more heavily than distant, unrelated files.",
    questionFr: 'Comment Copilot construit-il le contexte utilisé pour générer une suggestion ?',
    answerFr:
      "Il combine le contenu du fichier courant autour du curseur avec des signaux d'autres onglets ouverts, de fichiers récemment édités, et (avec l'indexation du workspace activée) un index plus large du repository, en pondérant plus fortement le code proche et récemment touché que des fichiers distants et sans rapport.",
  },
  {
    question: 'What does the Copilot code review feature do differently from a human PR reviewer?',
    answer:
      "It scans a pull request's diff for likely bugs, style inconsistencies, and missed edge cases and leaves inline comments automatically, acting as a fast, tireless first pass that catches mechanical issues - it doesn't replace human review of intent, architecture fit, or business correctness.",
    questionFr:
      "Qu'apporte la fonctionnalité de revue de code Copilot par rapport à un relecteur humain ?",
    answerFr:
      "Elle scanne le diff d'une pull request pour repérer des bugs probables, des incohérences de style et des cas limites manqués, et laisse des commentaires inline automatiquement, agissant comme une première passe rapide et infatigable qui capte les problèmes mécaniques - elle ne remplace pas la revue humaine de l'intention, de la cohérence architecturale ou de la justesse métier.",
  },
  {
    question: 'What is Copilot in the CLI, and what task does it target?',
    answer:
      'A terminal-based assistant that explains a shell command before you run it or suggests the command for a task described in plain English, aimed at closing the gap between knowing what you want to do and remembering the exact flags/syntax for a less-frequently-used tool.',
    questionFr: "Qu'est-ce que Copilot dans le CLI, et quelle tâche cible-t-il ?",
    answerFr:
      "Un assistant en ligne de commande qui explique une commande shell avant de l'exécuter ou suggère la commande pour une tâche décrite en langage naturel, visant à combler l'écart entre savoir ce qu'on veut faire et se souvenir des flags/syntaxe exacts d'un outil moins fréquemment utilisé.",
  },
  {
    question:
      'What governance controls does Copilot Business/Enterprise typically add over the individual plan?',
    answer:
      'Organization-wide policy management (enabling/disabling Copilot per team, blocking specific IDEs), content exclusions (paths/repos Copilot should never read or suggest from), audit logs, and a contractual commitment that customer code snippets are not used to train the underlying model - controls a security/compliance team needs before rolling it out broadly.',
    questionFr:
      'Quels contrôles de gouvernance Copilot Business/Enterprise ajoute-t-il typiquement par rapport au plan individuel ?',
    answerFr:
      "Une gestion de politique à l'échelle de l'organisation (activer/désactiver Copilot par équipe, bloquer certains IDE), des exclusions de contenu (chemins/repos que Copilot ne doit jamais lire ni utiliser pour suggérer), des logs d'audit, et un engagement contractuel que les snippets de code client ne servent pas à entraîner le modèle sous-jacent - des contrôles qu'une équipe sécurité/conformité exige avant un déploiement large.",
  },
  {
    question: 'Can you choose which underlying model Copilot uses, and why would that matter?',
    answer:
      'Yes - Copilot exposes a choice of multiple underlying models (from different providers) for chat and agent tasks, since different models trade off reasoning depth, speed, and cost differently; a team can pick a stronger model for a hard refactor and a faster one for routine completions.',
    questionFr:
      'Peut-on choisir le modèle sous-jacent utilisé par Copilot, et pourquoi cela compte-t-il ?',
    answerFr:
      'Oui - Copilot expose un choix entre plusieurs modèles sous-jacents (de différents fournisseurs) pour le chat et les tâches agentiques, car les modèles offrent des compromis différents en profondeur de raisonnement, vitesse et coût ; une équipe peut choisir un modèle plus puissant pour un refactor difficile et un plus rapide pour des complétions courantes.',
  },
  {
    question:
      'What are custom/repo-level instructions files for Copilot, and what problem do they solve?',
    answer:
      'A checked-in file (e.g. describing coding conventions, preferred libraries, or architectural constraints) that Copilot automatically reads and applies to every suggestion and chat interaction in that repo, so the whole team gets consistent, project-aware output without every developer repeating the same context in every prompt.',
    questionFr:
      "Que sont les fichiers d'instructions personnalisées au niveau du repo pour Copilot, et quel problème résolvent-ils ?",
    answerFr:
      "Un fichier versionné (décrivant par exemple les conventions de code, les librairies préférées ou des contraintes d'architecture) que Copilot lit et applique automatiquement à chaque suggestion et interaction de chat dans ce repo, pour que toute l'équipe obtienne une sortie cohérente et consciente du projet sans que chaque développeur ne répète le même contexte dans chaque prompt.",
  },
  {
    question:
      'What are Copilot Extensions (Agents), and how do they extend Copilot beyond code generation?',
    answer:
      'Third-party or custom integrations that plug specialized tools or services (a ticketing system, a monitoring dashboard, a deployment pipeline) directly into Copilot Chat, so a developer can invoke them by name in a conversation and get a task performed against that external system without leaving the editor.',
    questionFr:
      'Que sont les Copilot Extensions (Agents), et comment étendent-elles Copilot au-delà de la génération de code ?',
    answerFr:
      "Des intégrations tierces ou personnalisées qui branchent des outils ou services spécialisés (un système de tickets, un dashboard de monitoring, un pipeline de déploiement) directement dans Copilot Chat, pour qu'un développeur puisse les invoquer par leur nom dans une conversation et faire exécuter une tâche sur ce système externe sans quitter l'éditeur.",
  },
  {
    question:
      'What does Copilot Autofix do, and how does it fit into a secure development workflow?',
    answer:
      'It analyzes a code scanning alert (a detected vulnerability) and proposes a targeted fix with an explanation, directly on the pull request, shortening the loop between a security finding and a merged remediation instead of leaving the fix entirely to a developer unfamiliar with that vulnerability class.',
    questionFr:
      "Que fait Copilot Autofix, et comment s'intègre-t-il dans un workflow de développement sécurisé ?",
    answerFr:
      'Il analyse une alerte de code scanning (une vulnérabilité détectée) et propose un correctif ciblé avec une explication, directement sur la pull request, raccourcissant la boucle entre une découverte de sécurité et une remédiation mergée plutôt que de laisser le correctif entièrement à un développeur peu familier de cette classe de vulnérabilité.',
  },
  {
    question:
      "What is Copilot's public code matching/filtering feature and what risk does it address?",
    answer:
      'An optional filter that blocks suggestions matching public code verbatim above a certain length, addressing the risk of unknowingly reproducing licensed third-party code (and the associated attribution/licensing exposure) in a suggestion that looks like fresh, original output.',
    questionFr:
      "Qu'est-ce que le filtre de correspondance au code public de Copilot et quel risque adresse-t-il ?",
    answerFr:
      "Un filtre optionnel qui bloque les suggestions correspondant mot pour mot à du code public au-delà d'une certaine longueur, adressant le risque de reproduire sans le savoir du code tiers sous licence (et l'exposition associée en attribution/licence) dans une suggestion qui ressemble à une sortie originale.",
  },
  {
    question:
      'What is Copilot Workspace / agentic task mode, and how does it differ from accepting one inline suggestion at a time?',
    answer:
      'Given a higher-level task or issue description, it plans a multi-file change, proposes a full implementation across the affected files, and lets you review, run, and iterate on the whole plan before committing - operating at the level of a task rather than a single line or function completion.',
    questionFr:
      "Qu'est-ce que Copilot Workspace / le mode de tâche agentique, et en quoi diffère-t-il d'accepter une suggestion inline à la fois ?",
    answerFr:
      "À partir d'une tâche ou d'une description d'issue de plus haut niveau, il planifie un changement multi-fichiers, propose une implémentation complète à travers les fichiers concernés, et permet de relire, exécuter et itérer sur l'ensemble du plan avant de commit - opérant au niveau d'une tâche plutôt que d'une seule ligne ou fonction.",
  },
  {
    question:
      "How does Copilot's knowledge base / documentation indexing feature change the quality of its chat answers?",
    answer:
      "It lets an organization point Copilot Chat at specific internal documentation or a set of repos as a grounding source, so answers about internal conventions or proprietary systems are retrieved from that curated source rather than relying solely on the model's general training knowledge, which reduces hallucination on org-specific questions.",
    questionFr:
      'Comment la fonctionnalité de knowledge base / indexation de documentation de Copilot change-t-elle la qualité de ses réponses en chat ?',
    answerFr:
      "Elle permet à une organisation de pointer Copilot Chat vers une documentation interne spécifique ou un ensemble de repos comme source d'ancrage, pour que les réponses sur des conventions internes ou des systèmes propriétaires soient récupérées depuis cette source curée plutôt que de dépendre uniquement des connaissances générales d'entraînement du modèle, ce qui réduit l'hallucination sur des questions spécifiques à l'organisation.",
  },
  {
    question:
      'What telemetry/privacy control matters most to developers evaluating Copilot for a company codebase?',
    answer:
      'Whether the plan retains and reviews the actual code snippets sent as prompts/context versus only aggregated usage metrics, and whether that data is used to train the underlying model - for Business/Enterprise plans this is contractually excluded by default, which is often the deciding factor for adoption on proprietary code.',
    questionFr:
      "Quel contrôle de télémétrie/confidentialité compte le plus pour des développeurs évaluant Copilot sur un codebase d'entreprise ?",
    answerFr:
      "Si le plan conserve et examine les snippets de code réels envoyés en prompt/contexte ou seulement des métriques d'usage agrégées, et si ces données servent à entraîner le modèle sous-jacent - pour les plans Business/Enterprise, cela est exclu par contrat par défaut, ce qui est souvent le facteur décisif pour l'adoption sur du code propriétaire.",
  },
  {
    question:
      'Does Copilot behave identically across IDEs (VS Code, JetBrains, Neovim), or does the integration model differ?',
    answer:
      "The underlying suggestion and chat engine is shared, but each IDE integration is a separate extension/plugin that surfaces the features through that editor's own UI conventions and exposes them on different release cadences, so a given feature (e.g. a new chat participant) can land in VS Code before it's available in JetBrains.",
    questionFr:
      "Copilot se comporte-t-il de façon identique entre IDE (VS Code, JetBrains, Neovim), ou le modèle d'intégration diffère-t-il ?",
    answerFr:
      "Le moteur de suggestion et de chat sous-jacent est partagé, mais chaque intégration IDE est une extension/plugin séparé qui expose les fonctionnalités selon les conventions UI propres à cet éditeur et sur des rythmes de sortie différents, si bien qu'une fonctionnalité donnée (un nouveau chat participant par exemple) peut arriver dans VS Code avant d'être disponible dans JetBrains.",
  },
  {
    question:
      'How does an org typically govern which repositories or content Copilot is allowed to use as context?',
    answer:
      'Through content exclusion policies configured at the organization or repository level, listing paths, file types, or entire repos that should never be sent to the model as context - commonly used to keep credentials, generated artifacts, or particularly sensitive domains out of what Copilot ever sees.',
    questionFr:
      "Comment une organisation gouverne-t-elle typiquement quels repositories ou contenus Copilot a le droit d'utiliser comme contexte ?",
    answerFr:
      "Via des politiques d'exclusion de contenu configurées au niveau de l'organisation ou du repository, listant des chemins, types de fichiers ou repos entiers qui ne doivent jamais être envoyés au modèle comme contexte - couramment utilisé pour garder les credentials, artefacts générés, ou domaines particulièrement sensibles hors de ce que Copilot voit jamais.",
  },
];
