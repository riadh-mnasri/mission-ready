import { Component, computed, inject, input, output } from '@angular/core';
import type { Flashcard, Theme } from '../../../core/types';
import { masteryRatio } from '../../../core/leitner';
import { I18nService } from '../../../core/i18n.service';
import { MasteryBar } from '../../../components/mastery-bar/mastery-bar';
import { CardRow } from '../card-row/card-row';
import { NewCardForm } from '../new-card-form/new-card-form';

@Component({
  selector: 'app-theme-row',
  imports: [MasteryBar, CardRow, NewCardForm],
  templateUrl: './theme-row.html',
})
export class ThemeRow {
  protected readonly i18n = inject(I18nService);

  readonly theme = input.required<Theme>();
  readonly cards = input.required<Flashcard[]>();
  readonly expanded = input.required<boolean>();
  readonly selected = input<boolean>(false);
  readonly highlightedCardId = input<string>('');

  readonly toggleExpand = output<void>();
  readonly toggleSelect = output<boolean>();
  readonly addCard = output<{ question: string; answer: string }>();
  readonly updateCard = output<{ cardId: string; question: string; answer: string }>();
  readonly deleteCard = output<string>();
  readonly deleteTheme = output<void>();

  protected readonly mastery = computed(() => masteryRatio(this.cards()));
}
