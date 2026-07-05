import type { AppState, Flashcard, Theme } from "../types";
import { questions as aws } from "./aws";
import { questions as cleanArchi } from "./clean-archi";
import { questions as archiHexagonale } from "./archi-hexagonale";
import { questions as ddd } from "./ddd";
import { questions as tdd } from "./tdd";
import { questions as azure } from "./azure";
import { questions as kubernetes } from "./kubernetes";
import { questions as kafka } from "./kafka";
import { questions as java } from "./java";
import { questions as kotlin } from "./kotlin";
import { questions as risqueContrepartie } from "./risque-contrepartie";
import { questions as ia } from "./ia";

interface ThemeSeed {
  id: string;
  name: string;
  nameFr?: string;
  color: string;
  questions: { question: string; answer: string; questionFr: string; answerFr: string }[];
}

const THEME_SEEDS: ThemeSeed[] = [
  { id: "aws", name: "AWS", color: "#f59e0b", questions: aws },
  { id: "clean-archi", name: "Clean Architecture", color: "#38bdf8", questions: cleanArchi },
  {
    id: "archi-hexagonale",
    name: "Hexagonal Architecture",
    color: "#6366f1",
    questions: archiHexagonale,
  },
  { id: "ddd", name: "Domain-Driven Design", color: "#a78bfa", questions: ddd },
  { id: "tdd", name: "TDD", color: "#34d399", questions: tdd },
  { id: "azure", name: "Azure", color: "#0ea5e9", questions: azure },
  { id: "kubernetes", name: "Kubernetes", color: "#3b82f6", questions: kubernetes },
  { id: "kafka", name: "Kafka", color: "#f43f5e", questions: kafka },
  { id: "java", name: "Java", color: "#dc2626", questions: java },
  { id: "kotlin", name: "Kotlin", color: "#fb923c", questions: kotlin },
  {
    id: "risque-contrepartie",
    name: "Counterparty Risk",
    nameFr: "Risque de contrepartie",
    color: "#eab308",
    questions: risqueContrepartie,
  },
  {
    id: "ia",
    name: "AI (Copilot, Claude...)",
    nameFr: "IA (Copilot, Claude...)",
    color: "#d946ef",
    questions: ia,
  },
];

export function createInitialState(): AppState {
  const now = Date.now();

  const themes: Theme[] = THEME_SEEDS.map((seed) => ({
    id: seed.id,
    name: seed.name,
    nameFr: seed.nameFr,
    color: seed.color,
    isCustom: false,
  }));

  const cards: Flashcard[] = THEME_SEEDS.flatMap((seed) =>
    seed.questions.map((q, index) => ({
      id: `${seed.id}-${index}`,
      themeId: seed.id,
      question: q.question,
      answer: q.answer,
      questionFr: q.questionFr,
      answerFr: q.answerFr,
      box: 1 as const,
      nextReviewAt: now,
      createdAt: now,
    })),
  );

  return { themes, cards };
}
