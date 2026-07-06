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
import { questions as spark } from "./spark";
import { questions as springBoot } from "./spring-boot";
import { questions as cicdDevsecops } from "./cicd-devsecops";
import { questions as angular } from "./angular";
import { questions as mongodb } from "./mongodb";

interface ThemeSeed {
  id: string;
  name: string;
  nameFr?: string;
  color: string;
  questions: { question: string; answer: string; questionFr: string; answerFr: string }[];
}

const THEME_SEEDS: ThemeSeed[] = [
  { id: "aws", name: "AWS", color: "#f0a860", questions: aws },
  { id: "clean-archi", name: "Clean Architecture", color: "#5b8def", questions: cleanArchi },
  {
    id: "archi-hexagonale",
    name: "Hexagonal Architecture",
    color: "#8f7ee8",
    questions: archiHexagonale,
  },
  { id: "ddd", name: "Domain-Driven Design", color: "#c77dd1", questions: ddd },
  { id: "tdd", name: "TDD", color: "#3dd68c", questions: tdd },
  { id: "azure", name: "Azure", color: "#4fb8e0", questions: azure },
  { id: "kubernetes", name: "Kubernetes", color: "#4fd1c5", questions: kubernetes },
  { id: "kafka", name: "Kafka", color: "#f0656b", questions: kafka },
  { id: "java", name: "Java", color: "#e8735a", questions: java },
  { id: "kotlin", name: "Kotlin", color: "#f0b45e", questions: kotlin },
  {
    id: "risque-contrepartie",
    name: "Counterparty Risk",
    nameFr: "Risque de contrepartie",
    color: "#c9b458",
    questions: risqueContrepartie,
  },
  {
    id: "ia",
    name: "AI (Copilot, Claude...)",
    nameFr: "IA (Copilot, Claude...)",
    color: "#b98ee8",
    questions: ia,
  },
  { id: "spark", name: "Apache Spark", color: "#d9482c", questions: spark },
  { id: "spring-boot", name: "Spring Boot", color: "#8bc34a", questions: springBoot },
  {
    id: "cicd-devsecops",
    name: "CI/CD & DevSecOps",
    color: "#6b8fa3",
    questions: cicdDevsecops,
  },
  { id: "angular", name: "Angular & RxJS", color: "#d6336c", questions: angular },
  { id: "mongodb", name: "MongoDB & NoSQL", color: "#2f9e6e", questions: mongodb },
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

  return { themes, cards, reviewLog: [] };
}
