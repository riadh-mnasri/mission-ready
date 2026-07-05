import { Component, inject, input, output } from '@angular/core';
import { I18nService } from '../../core/i18n.service';

@Component({
  selector: 'app-flashcard-flip',
  templateUrl: './flashcard-flip.html',
  styleUrl: './flashcard-flip.css',
})
export class FlashcardFlip {
  protected readonly i18n = inject(I18nService);

  readonly question = input.required<string>();
  readonly answer = input.required<string>();
  readonly flipped = input.required<boolean>();
  readonly accent = input<string>('#f0b429');

  readonly flip = output<void>();
}
