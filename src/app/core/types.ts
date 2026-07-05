export type Box = 1 | 2 | 3 | 4 | 5;

export interface Theme {
  id: string;
  name: string;
  nameFr?: string;
  color: string;
  isCustom: boolean;
}

export interface Flashcard {
  id: string;
  themeId: string;
  question: string;
  answer: string;
  questionFr?: string;
  answerFr?: string;
  box: Box;
  nextReviewAt: number;
  createdAt: number;
}

export interface AppState {
  themes: Theme[];
  cards: Flashcard[];
}
