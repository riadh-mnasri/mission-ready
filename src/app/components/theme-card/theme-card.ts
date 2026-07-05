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
})
export class ThemeCard {
  protected readonly i18n = inject(I18nService);

  readonly theme = input.required<Theme>();
  readonly cards = input.required<Flashcard[]>();

  protected readonly due = computed(() => dueCards(this.cards()).length);
  protected readonly mastery = computed(() => masteryRatio(this.cards()));
}
