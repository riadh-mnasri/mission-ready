import { Injectable, effect, signal } from "@angular/core";
import type { AppState } from "./types";
import { createInitialState } from "./content";
import { logReviewEntry } from "./activity";

const STORAGE_KEY = "missionready:state";

function loadInitialState(): AppState {
  const seeded = createInitialState();
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return seeded;
    return mergeNewSeedContent(JSON.parse(raw) as AppState, seeded);
  } catch {
    return seeded;
  }
}

/**
 * Deck content grows over time (new seed themes/cards added in later releases).
 * Seed ids are deterministic, so anything already in persisted state keeps its
 * progress untouched, and only genuinely new seed themes/cards get appended.
 */
function mergeNewSeedContent(persisted: AppState, seeded: AppState): AppState {
  const knownThemeIds = new Set(persisted.themes.map((t) => t.id));
  const knownCardIds = new Set(persisted.cards.map((c) => c.id));
  const newThemes = seeded.themes.filter((t) => !knownThemeIds.has(t.id));
  const newCards = seeded.cards.filter((c) => !knownCardIds.has(c.id));

  if (newThemes.length === 0 && newCards.length === 0) {
    return { ...persisted, reviewLog: persisted.reviewLog ?? [] };
  }

  return {
    themes: [...persisted.themes, ...newThemes],
    cards: [...persisted.cards, ...newCards],
    reviewLog: persisted.reviewLog ?? [],
  };
}

@Injectable({ providedIn: "root" })
export class AppStateService {
  readonly state = signal<AppState>(loadInitialState());

  constructor() {
    effect(() => {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state()));
    });
  }

  update(updater: (state: AppState) => AppState): void {
    this.state.update(updater);
  }

  logReview(correct: boolean): void {
    this.state.update((prev) => ({
      ...prev,
      reviewLog: logReviewEntry(prev.reviewLog ?? [], correct),
    }));
  }

  exportJson(): string {
    return JSON.stringify(this.state(), null, 2);
  }

  /** Returns true on success; leaves the current state untouched on any invalid input. */
  importJson(raw: string): boolean {
    let parsed: unknown;
    try {
      parsed = JSON.parse(raw);
    } catch {
      return false;
    }
    if (!isAppState(parsed)) return false;
    this.state.set(parsed);
    return true;
  }
}

function isAppState(value: unknown): value is AppState {
  if (typeof value !== "object" || value === null) return false;
  const { themes, cards } = value as Partial<AppState>;
  return Array.isArray(themes) && Array.isArray(cards);
}
