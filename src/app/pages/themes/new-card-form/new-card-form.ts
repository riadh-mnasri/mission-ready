import { Component, inject, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { I18nService } from '../../../core/i18n.service';

@Component({
  selector: 'app-new-card-form',
  imports: [FormsModule],
  templateUrl: './new-card-form.html',
})
export class NewCardForm {
  protected readonly i18n = inject(I18nService);

  protected readonly open = signal(false);
  protected readonly question = signal('');
  protected readonly answer = signal('');

  readonly create = output<{ question: string; answer: string }>();

  protected submit(): void {
    const q = this.question().trim();
    const a = this.answer().trim();
    if (!q || !a) return;
    this.create.emit({ question: q, answer: a });
    this.question.set('');
    this.answer.set('');
    this.open.set(false);
  }
}
