import { Component, inject, input, output } from '@angular/core';
import { I18nService } from '../../core/i18n.service';

@Component({
  selector: 'app-review-controls',
  templateUrl: './review-controls.html',
})
export class ReviewControls {
  protected readonly i18n = inject(I18nService);

  readonly visible = input.required<boolean>();

  readonly knew = output<void>();
  readonly missed = output<void>();
}
