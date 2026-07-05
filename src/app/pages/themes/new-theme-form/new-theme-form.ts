import { Component, inject, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { I18nService } from '../../../core/i18n.service';

const THEME_COLORS = [
  '#1e3a5f',
  '#a83c2a',
  '#3f6b52',
  '#b8862f',
  '#6b4a7a',
  '#2b6b6b',
  '#a8562c',
  '#5a5548',
];

@Component({
  selector: 'app-new-theme-form',
  imports: [FormsModule],
  templateUrl: './new-theme-form.html',
})
export class NewThemeForm {
  protected readonly i18n = inject(I18nService);
  protected readonly colors = THEME_COLORS;

  protected readonly name = signal('');
  protected readonly color = signal(THEME_COLORS[0]);

  readonly create = output<{ name: string; color: string }>();

  protected submit(): void {
    const trimmed = this.name().trim();
    if (!trimmed) return;
    this.create.emit({ name: trimmed, color: this.color() });
    this.name.set('');
  }
}
