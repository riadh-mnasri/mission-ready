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
}
