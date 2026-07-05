import { Injectable, signal } from "@angular/core";
import type { Flashcard, Theme } from "./types";

export type Language = "en" | "fr";

const LANGUAGE_KEY = "missionready:lang";

function loadInitialLanguage(): Language {
  const raw = window.localStorage.getItem(LANGUAGE_KEY);
  return raw === "en" || raw === "fr" ? raw : "en";
}

interface Strings {
  navDashboard: string;
  navThemes: string;
  dashboardTitle: string;
  dashboardSubtitleDue: (n: number) => string;
  dashboardSubtitleUpToDate: string;
  reviewAllDue: string;
  duePill: (n: number) => string;
  upToDatePill: string;
  cardsCount: (n: number) => string;
  noThemesYet: string;
  createOne: string;
  toStartBuilding: string;
  reviewSessionLabel: string;
  allDueTitle: string;
  exit: string;
  cardsLeft: (n: number) => string;
  sessionComplete: string;
  nothingDue: string;
  knownOnFirstTry: (correct: number, reviewed: number) => string;
  backToDashboard: string;
  tapReveal: string;
  tapFlipBack: string;
  questionLabel: string;
  answerLabel: string;
  iDidNotKnow: string;
  iKnew: string;
  themesTitle: string;
  newTheme: string;
  cancel: string;
  themeNamePlaceholder: string;
  createTheme: string;
  addCard: string;
  questionPlaceholder: string;
  answerPlaceholder: string;
  save: string;
  edit: string;
  delete: string;
  deleteTheme: string;
  confirmDeleteTheme: string;
  confirmDeleteCard: string;
  statDueLabel: string;
  statMasteryLabel: string;
  statMasteredLabel: string;
  exportBackup: string;
  importBackup: string;
  importSuccess: string;
  importInvalidFile: string;
  shortcutHint: string;
  focusSessionTitle: string;
  selectThemesHint: string;
  startFocusSession: (n: number) => string;
  clearSelection: string;
}

const en: Strings = {
  navDashboard: "Dashboard",
  navThemes: "Themes",
  dashboardTitle: "Ready for your next interview?",
  dashboardSubtitleDue: (n) =>
    `${n} card${n > 1 ? "s" : ""} due for review across all themes.`,
  dashboardSubtitleUpToDate: "Everything is up to date. Add a theme or come back later.",
  reviewAllDue: "Review all due",
  duePill: (n) => `${n} due`,
  upToDatePill: "up to date",
  cardsCount: (n) => `${n} card${n !== 1 ? "s" : ""}`,
  noThemesYet: "No themes yet.",
  createOne: "Create one",
  toStartBuilding: "to start building your deck.",
  reviewSessionLabel: "Review session",
  allDueTitle: "All due cards",
  exit: "Exit",
  cardsLeft: (n) => `${n} card${n > 1 ? "s" : ""} left in this session`,
  sessionComplete: "Session complete",
  nothingDue: "Nothing was due here. Come back later.",
  knownOnFirstTry: (correct, reviewed) => `${correct} / ${reviewed} known on the first try.`,
  backToDashboard: "Back to dashboard",
  tapReveal: "Tap to reveal the answer",
  tapFlipBack: "Tap to flip back",
  questionLabel: "Question",
  answerLabel: "Answer",
  iDidNotKnow: "I did not know it",
  iKnew: "I knew it",
  themesTitle: "Themes",
  newTheme: "New theme",
  cancel: "Cancel",
  themeNamePlaceholder: "Theme name, e.g. GraphQL",
  createTheme: "Create theme",
  addCard: "+ Add a card",
  questionPlaceholder: "Question",
  answerPlaceholder: "Answer",
  save: "Save",
  edit: "Edit",
  delete: "Delete",
  deleteTheme: "Delete this theme",
  confirmDeleteTheme: "Delete this theme and all its cards?",
  confirmDeleteCard: "Delete this card?",
  statDueLabel: "Due today",
  statMasteryLabel: "Overall mastery",
  statMasteredLabel: "Cards mastered",
  exportBackup: "Export backup",
  importBackup: "Import backup",
  importSuccess: "Backup imported successfully.",
  importInvalidFile: "This file is not a valid MissionReady backup.",
  shortcutHint: "Space to flip, then ← I did not know it, → I knew it",
  focusSessionTitle: "Focus session",
  selectThemesHint: "Select themes to cram before an interview, regardless of what's due.",
  startFocusSession: (n) => `Start focus session (${n})`,
  clearSelection: "Clear selection",
};

const fr: Strings = {
  navDashboard: "Dashboard",
  navThemes: "Thèmes",
  dashboardTitle: "Prêt pour votre prochain entretien ?",
  dashboardSubtitleDue: (n) => `${n} carte${n > 1 ? "s" : ""} à réviser sur tous les thèmes.`,
  dashboardSubtitleUpToDate: "Tout est à jour. Ajoutez un thème ou revenez plus tard.",
  reviewAllDue: "Réviser tout ce qui est dû",
  duePill: (n) => `${n} à réviser`,
  upToDatePill: "à jour",
  cardsCount: (n) => `${n} carte${n !== 1 ? "s" : ""}`,
  noThemesYet: "Aucun thème pour l'instant.",
  createOne: "Créez-en un",
  toStartBuilding: "pour commencer votre deck.",
  reviewSessionLabel: "Session de révision",
  allDueTitle: "Toutes les cartes dues",
  exit: "Quitter",
  cardsLeft: (n) => `${n} carte${n > 1 ? "s" : ""} restante${n > 1 ? "s" : ""} dans cette session`,
  sessionComplete: "Session terminée",
  nothingDue: "Rien n'était dû ici. Revenez plus tard.",
  knownOnFirstTry: (correct, reviewed) => `${correct} / ${reviewed} connues du premier coup.`,
  backToDashboard: "Retour au dashboard",
  tapReveal: "Touchez pour révéler la réponse",
  tapFlipBack: "Touchez pour retourner la carte",
  questionLabel: "Question",
  answerLabel: "Réponse",
  iDidNotKnow: "Je ne savais pas",
  iKnew: "Je savais",
  themesTitle: "Thèmes",
  newTheme: "Nouveau thème",
  cancel: "Annuler",
  themeNamePlaceholder: "Nom du thème, ex. GraphQL",
  createTheme: "Créer le thème",
  addCard: "+ Ajouter une carte",
  questionPlaceholder: "Question",
  answerPlaceholder: "Réponse",
  save: "Enregistrer",
  edit: "Modifier",
  delete: "Supprimer",
  deleteTheme: "Supprimer ce thème",
  confirmDeleteTheme: "Supprimer ce thème et toutes ses cartes ?",
  confirmDeleteCard: "Supprimer cette carte ?",
  statDueLabel: "À réviser aujourd'hui",
  statMasteryLabel: "Maîtrise globale",
  statMasteredLabel: "Cartes maîtrisées",
  exportBackup: "Exporter la sauvegarde",
  importBackup: "Importer une sauvegarde",
  importSuccess: "Sauvegarde importée avec succès.",
  importInvalidFile: "Ce fichier n'est pas une sauvegarde MissionReady valide.",
  shortcutHint: "Espace pour retourner, puis ← je ne savais pas, → je savais",
  focusSessionTitle: "Session ciblée",
  selectThemesHint: "Sélectionnez des thèmes à bachoter avant un entretien, peu importe ce qui est dû.",
  startFocusSession: (n) => `Démarrer la session ciblée (${n})`,
  clearSelection: "Effacer la sélection",
};

const DICTIONARIES: Record<Language, Strings> = { en, fr };

@Injectable({ providedIn: "root" })
export class I18nService {
  readonly language = signal<Language>(loadInitialLanguage());

  toggle(): void {
    const next: Language = this.language() === "en" ? "fr" : "en";
    this.language.set(next);
    window.localStorage.setItem(LANGUAGE_KEY, next);
  }

  get strings(): Strings {
    return DICTIONARIES[this.language()];
  }

  themeName(theme: Theme): string {
    return this.language() === "fr" ? (theme.nameFr ?? theme.name) : theme.name;
  }

  cardText(card: Flashcard): { question: string; answer: string } {
    return this.language() === "fr"
      ? { question: card.questionFr ?? card.question, answer: card.answerFr ?? card.answer }
      : { question: card.question, answer: card.answer };
  }
}
