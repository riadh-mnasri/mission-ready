import type { Box, Flashcard } from "./types";

const DAY_MS = 24 * 60 * 60 * 1000;

/** Number of days before a card in this box comes due again. */
const BOX_INTERVAL_DAYS: Record<Box, number> = {
  1: 0,
  2: 2,
  3: 4,
  4: 8,
  5: 16,
};

export function nextReviewAt(box: Box, from: number = Date.now()): number {
  return from + BOX_INTERVAL_DAYS[box] * DAY_MS;
}

export function createCard(
  themeId: string,
  question: string,
  answer: string,
  now: number = Date.now(),
): Flashcard {
  return {
    id: crypto.randomUUID(),
    themeId,
    question,
    answer,
    box: 1,
    nextReviewAt: now,
    createdAt: now,
  };
}

export function reviewCorrect(card: Flashcard, now: number = Date.now()): Flashcard {
  const box = (Math.min(card.box + 1, 5) as Box);
  return { ...card, box, nextReviewAt: nextReviewAt(box, now) };
}

export function reviewIncorrect(card: Flashcard, now: number = Date.now()): Flashcard {
  return { ...card, box: 1, nextReviewAt: nextReviewAt(1, now) };
}

export function isDue(card: Flashcard, now: number = Date.now()): boolean {
  return card.nextReviewAt <= now;
}

export function dueCards(cards: Flashcard[], now: number = Date.now()): Flashcard[] {
  return cards.filter((c) => isDue(c, now));
}

/** Mastery of a set of cards, 0-1, averaged across the 5 Leitner boxes. */
export function masteryRatio(cards: Flashcard[]): number {
  if (cards.length === 0) return 0;
  const total = cards.reduce((sum, c) => sum + c.box, 0);
  return total / (cards.length * 5);
}
