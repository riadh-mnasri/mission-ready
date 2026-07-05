import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import type { Flashcard, Theme } from '../../core/types';
import { dueCards, masteryRatio } from '../../core/leitner';
import { I18nService } from '../../core/i18n.service';
import { MasteryBar } from '../mastery-bar/mastery-bar';

@Component({
  selector: 'app-theme-card',
  imports: [RouterLink, MasteryBar],
  templateUrl: './theme-card.html',
  styleUrl: './theme-card.css',
})
export class ThemeCard {
  protected readonly i18n = inject(I18nService);

  readonly theme = input.required<Theme>();
  readonly cards = input.required<Flashcard[]>();

  protected readonly due = computed(() => dueCards(this.cards()).length);
  protected readonly mastery = computed(() => masteryRatio(this.cards()));

  /** Small deterministic tilt per theme so the deck looks like a loose stack, not a grid. */
  protected readonly tilt = computed(() => {
    const id = this.theme().id;
    let hash = 0;
    for (let i = 0; i < id.length; i++) hash = (hash * 31 + id.charCodeAt(i)) % 1000;
    return ((hash / 1000) * 3 - 1.5).toFixed(2);
  });
}
