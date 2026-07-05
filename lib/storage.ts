import { useSyncExternalStore } from "react";
import type { AppState } from "./types";
import { createInitialState } from "./content";

function createStore<T>(key: string, initialValue: T) {
  let cache: T = initialValue;
  let listeners: Array<() => void> = [];
  let hydrated = false;

  function hydrate() {
    if (hydrated || typeof window === "undefined") return;
    hydrated = true;
    try {
      const raw = window.localStorage.getItem(key);
      if (raw) cache = JSON.parse(raw) as T;
    } catch {
      cache = initialValue;
    }
  }

  function getSnapshot(): T {
    hydrate();
    return cache;
  }

  function getServerSnapshot(): T {
    return initialValue;
  }

  function subscribe(listener: () => void) {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  }

  function set(value: T) {
    cache = value;
    hydrated = true;
    if (typeof window !== "undefined") {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
    listeners.forEach((l) => l());
  }

  return { getSnapshot, getServerSnapshot, subscribe, set };
}

const STORAGE_KEY = "missionready:state";

const appStateStore = createStore<AppState>(STORAGE_KEY, createInitialState());

/** Reads persisted state directly from localStorage, bypassing React's hydration timing. */
export function readPersistedState(): AppState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as AppState) : null;
  } catch {
    return null;
  }
}

export function useAppState() {
  const state = useSyncExternalStore(
    appStateStore.subscribe,
    appStateStore.getSnapshot,
    appStateStore.getServerSnapshot,
  );
  return [state, appStateStore.set] as const;
}

/** Reads the current cached state, applies an updater fn, persists the result. */
export function updateAppState(updater: (state: AppState) => AppState) {
  const current = appStateStore.getSnapshot();
  appStateStore.set(updater(current));
}
