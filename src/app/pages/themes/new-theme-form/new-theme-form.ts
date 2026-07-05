import { Component, inject, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { I18nService } from '../../../core/i18n.service';

const THEME_COLORS = [
  '#5468e0',
  '#5b8def',
  '#4fd1c5',
  '#3dd68c',
  '#f0b45e',
  '#e8735a',
  '#f0656b',
  '#b98ee8',
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
