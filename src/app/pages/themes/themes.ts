import { Component, computed, inject, signal } from '@angular/core';
import { AppStateService } from '../../core/app-state.service';
import { I18nService } from '../../core/i18n.service';
import { createCard } from '../../core/leitner';
import type { Theme } from '../../core/types';
import { NewThemeForm } from './new-theme-form/new-theme-form';
import { ThemeRow } from './theme-row/theme-row';

@Component({
  selector: 'app-themes',
  imports: [NewThemeForm, ThemeRow],
  templateUrl: './themes.html',
})
export class Themes {
  private readonly appState = inject(AppStateService);
  protected readonly i18n = inject(I18nService);

  protected readonly themes = computed(() => this.appState.state().themes);
  protected readonly cards = computed(() => this.appState.state().cards);

  protected readonly expandedThemeId = signal<string | null>(null);
  protected readonly newThemeOpen = signal(false);

  protected cardsForTheme(themeId: string) {
    return this.cards().filter((c) => c.themeId === themeId);
  }

  protected toggleExpand(themeId: string): void {
    this.expandedThemeId.set(this.expandedThemeId() === themeId ? null : themeId);
  }

  protected addTheme(input: { name: string; color: string }): void {
    const theme: Theme = {
      id: `custom-${crypto.randomUUID()}`,
      name: input.name,
      color: input.color,
      isCustom: true,
    };
    this.appState.update((prev) => ({ ...prev, themes: [...prev.themes, theme] }));
    this.newThemeOpen.set(false);
    this.expandedThemeId.set(theme.id);
  }

  protected deleteTheme(themeId: string): void {
    if (!confirm(this.i18n.strings.confirmDeleteTheme)) return;
    this.appState.update((prev) => ({
      themes: prev.themes.filter((t) => t.id !== themeId),
      cards: prev.cards.filter((c) => c.themeId !== themeId),
    }));
    if (this.expandedThemeId() === themeId) this.expandedThemeId.set(null);
  }

  protected addCard(themeId: string, input: { question: string; answer: string }): void {
    const card = createCard(themeId, input.question, input.answer);
    this.appState.update((prev) => ({ ...prev, cards: [...prev.cards, card] }));
  }

  protected updateCard(input: { cardId: string; question: string; answer: string }): void {
    this.appState.update((prev) => ({
      ...prev,
      cards: prev.cards.map((c) =>
        c.id === input.cardId ? { ...c, question: input.question, answer: input.answer } : c,
      ),
    }));
  }

  protected deleteCard(cardId: string): void {
    if (!confirm(this.i18n.strings.confirmDeleteCard)) return;
    this.appState.update((prev) => ({
      ...prev,
      cards: prev.cards.filter((c) => c.id !== cardId),
    }));
  }
}
