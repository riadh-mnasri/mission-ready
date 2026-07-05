import { Component, inject, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { I18nService } from '../../../core/i18n.service';

const THEME_COLORS = [
  '#f0b429',
  '#38bdf8',
  '#6366f1',
  '#a78bfa',
  '#34d399',
  '#f43f5e',
  '#fb923c',
  '#d946ef',
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
