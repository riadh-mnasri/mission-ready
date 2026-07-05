import { Injectable, effect, signal } from "@angular/core";
import type { AppState } from "./types";
import { createInitialState } from "./content";

const STORAGE_KEY = "missionready:state";

function loadInitialState(): AppState {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as AppState) : createInitialState();
  } catch {
    return createInitialState();
  }
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
