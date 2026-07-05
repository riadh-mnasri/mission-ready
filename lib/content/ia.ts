export const questions = [
  {
    question: "What's the difference between an LLM and an AI agent?",
    answer:
      "An LLM generates text from a prompt in a stateless way; an agent wraps a decision loop around the LLM (planning, tool calls, memory, observing results) to accomplish a multi-step task autonomously.",
  },
  {
    question: "What is RAG (Retrieval-Augmented Generation) and why use it?",
    answer:
      "A technique that retrieves relevant documents (often via vector search) and injects them into the prompt before generation, grounding the model's answers in up-to-date/private data without retraining it.",
  },
  {
    question: "What is \"tool use\"/\"function calling\" in modern LLMs (Claude, GPT)?",
    answer:
      "The model can emit a structured call (function name + arguments) instead of or alongside a text answer; the application actually executes the action and feeds the result back to the model so it can continue reasoning.",
  },
  {
    question: "What is MCP (Model Context Protocol)?",
    answer:
      "An open protocol standardizing how a model/agent accesses external tools and data sources (files, APIs, databases) via MCP servers, avoiding a bespoke integration per tool for every application.",
  },
  {
    question: "How do Copilot/Claude Code differ from simple code autocomplete?",
    answer:
      "They don't just complete the current line: they can understand a repo's multi-file context, run commands, read test results, and iterate across multiple files agentically to complete an entire task.",
  },
  {
    question: "What is \"prompt injection\" and why is it a risk for agents?",
    answer:
      "An attack where external content (a webpage, document, tool result) contains hidden instructions meant to hijack the agent's behavior - critical as soon as an agent has access to tools with real-world effects (files, payments, emails).",
  },
  {
    question: "What is the context window and why is it a key constraint?",
    answer:
      "The maximum amount of tokens (input + output) the model can process at once; beyond that, you need to summarize, chunk, or use RAG - this directly shapes the architecture of any LLM application over large documents/codebases.",
  },
  {
    question: "Difference between fine-tuning and prompt engineering/RAG to adapt an LLM to a domain?",
    answer:
      "Fine-tuning retrains (part of) the model's weights on domain-specific data, costly and needing to be redone on every update; prompt engineering/RAG adapts behavior at inference time without touching the weights, faster to iterate on and maintain.",
  },
  {
    question: "What is LLM \"hallucination\" and how do you limit it in practice?",
    answer:
      "The model generates plausible but false/invented information; it's mitigated via RAG (grounding in verifiable sources), prompts that explicitly allow \"I don't know\", and citing/verifying sources in the output.",
  },
  {
    question: "How does prompt caching work and what's its benefit?",
    answer:
      "Reusing server-side, already-processed tokens from an identical prompt prefix (e.g. a system prompt, a large context) across multiple calls, sharply cutting latency and cost when the context changes little between calls.",
  },
  {
    question: "What are the specific security concerns of using AI agents in the enterprise (e.g. Copilot)?",
    answer:
      "Leaking sensitive data to the model/third parties, executing unwanted actions via connected tools (prompt injection), and governing the permissions granted to the agent - often requiring a least-privilege approach similar to a service account.",
  },
  {
    question: "How do you objectively evaluate the quality of an AI agent/assistant on a given task?",
    answer:
      "Through \"evals\": a representative set of tasks with measurable success criteria (tests passing, factual accuracy, format compliance), re-run on every prompt/model change to catch regressions, rather than relying on a subjective impression.",
  },
];
