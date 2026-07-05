import { Component, computed, effect, inject, input, signal, untracked } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppStateService } from '../../core/app-state.service';
import { I18nService } from '../../core/i18n.service';
import { dueCards, reviewCorrect, reviewIncorrect } from '../../core/leitner';
import type { Flashcard } from '../../core/types';
import { FlashcardFlip } from '../../components/flashcard-flip/flashcard-flip';
import { ReviewControls } from '../../components/review-controls/review-controls';

function buildQueue(themeId: string, cards: Flashcard[]): string[] {
  const scoped = themeId === 'all' ? cards : cards.filter((c) => c.themeId === themeId);
  // Weakest cards first: lower box means more past failures, so surfacing
  // them before well-mastered cards makes each session target real gaps.
  return dueCards(scoped)
    .sort((a, b) => a.box - b.box || a.nextReviewAt - b.nextReviewAt)
    .map((c) => c.id);
}

@Component({
  selector: 'app-review',
  imports: [RouterLink, FlashcardFlip, ReviewControls],
  templateUrl: './review.html',
})
export class Review {
  readonly themeId = input.required<string>();

  private readonly appState = inject(AppStateService);
  protected readonly i18n = inject(I18nService);

  protected readonly theme = computed(() => {
    const id = this.themeId();
    return id === 'all' ? null : (this.appState.state().themes.find((t) => t.id === id) ?? null);
  });

  protected readonly queue = signal<string[]>([]);
  protected readonly flipped = signal(false);
  protected readonly stats = signal({ reviewed: 0, correct: 0 });

  protected readonly currentCard = computed(() => {
    const id = this.queue()[0];
    return id ? (this.appState.state().cards.find((c) => c.id === id) ?? null) : null;
  });

  protected readonly currentTheme = computed(() => {
    const card = this.currentCard();
    return card ? (this.appState.state().themes.find((t) => t.id === card.themeId) ?? null) : null;
  });

  protected readonly title = computed(() =>
    this.theme() ? this.i18n.themeName(this.theme()!) : this.i18n.strings.allDueTitle,
  );

  protected readonly accent = computed(
    () => this.currentTheme()?.color ?? this.theme()?.color ?? '#f0b429',
  );

  protected readonly cardText = computed(() => {
    const card = this.currentCard();
    return card ? this.i18n.cardText(card) : { question: '', answer: '' };
  });

  constructor() {
    // Re-seed the session queue whenever themeId changes, reading the current
    // (already-persisted, no-SSR-so-no-race) cards untracked so later card
    // reviews don't cause the whole queue to be rebuilt mid-session.
    effect(() => {
      const id = this.themeId();
      const cards = untracked(() => this.appState.state().cards);
      this.queue.set(buildQueue(id, cards));
      this.stats.set({ reviewed: 0, correct: 0 });
      this.flipped.set(false);
    });
  }

  protected advance(remembered: boolean): void {
    const card = this.currentCard();
    if (!card) return;

    this.appState.update((prev) => ({
      ...prev,
      cards: prev.cards.map((c) =>
        c.id === card.id ? (remembered ? reviewCorrect(c) : reviewIncorrect(c)) : c,
      ),
    }));

    this.stats.update((s) => ({
      reviewed: s.reviewed + 1,
      correct: s.correct + (remembered ? 1 : 0),
    }));

    this.queue.update((q) => {
      const rest = q.slice(1);
      return remembered ? rest : [...rest, card.id];
    });
    this.flipped.set(false);
  }
}
