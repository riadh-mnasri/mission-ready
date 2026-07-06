import type { ReviewLogEntry } from "./types";

const DAY_MS = 24 * 60 * 60 * 1000;

export function dateKey(timestamp: number): string {
  const d = new Date(timestamp);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function logReviewEntry(
  log: ReviewLogEntry[],
  correct: boolean,
  now: number = Date.now(),
): ReviewLogEntry[] {
  const key = dateKey(now);
  const existing = log.find((e) => e.date === key);
  if (existing) {
    return log.map((e) =>
      e.date === key ? { ...e, reviewed: e.reviewed + 1, correct: e.correct + (correct ? 1 : 0) } : e,
    );
  }
  return [...log, { date: key, reviewed: 1, correct: correct ? 1 : 0 }];
}

/**
 * Consecutive days with at least one review, ending today (or yesterday if
 * today hasn't happened yet, so the streak isn't broken mid-day).
 */
export function currentStreak(log: ReviewLogEntry[], now: number = Date.now()): number {
  const byDate = new Map(log.map((e) => [e.date, e.reviewed]));
  let streak = 0;
  let cursor = now;

  if (!byDate.get(dateKey(cursor))) {
    cursor -= DAY_MS;
  }

  while (byDate.get(dateKey(cursor))) {
    streak += 1;
    cursor -= DAY_MS;
  }
  return streak;
}

export interface ActivityDay {
  date: string;
  reviewed: number;
}

export function lastNDays(log: ReviewLogEntry[], n: number, now: number = Date.now()): ActivityDay[] {
  const byDate = new Map(log.map((e) => [e.date, e.reviewed]));
  const days: ActivityDay[] = [];
  for (let i = n - 1; i >= 0; i--) {
    const key = dateKey(now - i * DAY_MS);
    days.push({ date: key, reviewed: byDate.get(key) ?? 0 });
  }
  return days;
}
