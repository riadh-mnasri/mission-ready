import { Component, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
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
  private readonly router = inject(Router);
  protected readonly i18n = inject(I18nService);

  protected readonly themes = computed(() => this.appState.state().themes);
  protected readonly cards = computed(() => this.appState.state().cards);

  protected readonly expandedThemeId = signal<string | null>(null);
  protected readonly newThemeOpen = signal(false);
  protected readonly selectedThemeIds = signal<ReadonlySet<string>>(new Set());

  protected cardsForTheme(themeId: string) {
    return this.cards().filter((c) => c.themeId === themeId);
  }

  protected toggleExpand(themeId: string): void {
    this.expandedThemeId.set(this.expandedThemeId() === themeId ? null : themeId);
  }

  protected toggleThemeSelection(themeId: string, checked: boolean): void {
    this.selectedThemeIds.update((prev) => {
      const next = new Set(prev);
      checked ? next.add(themeId) : next.delete(themeId);
      return next;
    });
  }

  protected clearSelection(): void {
    this.selectedThemeIds.set(new Set());
  }

  protected startFocusSession(): void {
    const ids = Array.from(this.selectedThemeIds());
    if (ids.length === 0) return;
    this.router.navigate(['/review', 'all'], { queryParams: { themes: ids.join(',') } });
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

  protected exportBackup(): void {
    const blob = new Blob([this.appState.exportJson()], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const date = new Date().toISOString().slice(0, 10);
    const link = document.createElement('a');
    link.href = url;
    link.download = `missionready-backup-${date}.json`;
    link.click();
    URL.revokeObjectURL(url);
  }

  protected async importBackup(event: Event): Promise<void> {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;

    const raw = await file.text();
    const ok = this.appState.importJson(raw);
    alert(ok ? this.i18n.strings.importSuccess : this.i18n.strings.importInvalidFile);
    input.value = '';
  }
}
