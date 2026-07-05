import { Component, inject, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { I18nService } from '../../../core/i18n.service';

@Component({
  selector: 'app-card-row',
  imports: [FormsModule],
  templateUrl: './card-row.html',
})
export class CardRow {
  protected readonly i18n = inject(I18nService);

  readonly question = input.required<string>();
  readonly answer = input.required<string>();

  readonly save = output<{ question: string; answer: string }>();
  readonly delete = output<void>();

  protected readonly editing = signal(false);
  protected readonly draftQuestion = signal('');
  protected readonly draftAnswer = signal('');

  protected startEditing(): void {
    this.draftQuestion.set(this.question());
    this.draftAnswer.set(this.answer());
    this.editing.set(true);
  }

  protected submit(): void {
    this.save.emit({ question: this.draftQuestion(), answer: this.draftAnswer() });
    this.editing.set(false);
  }
}
