import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-mastery-bar',
  templateUrl: './mastery-bar.html',
})
export class MasteryBar {
  readonly ratio = input.required<number>();
  readonly color = input<string>('#f0b429');

  protected readonly percent = computed(() => Math.round(this.ratio() * 100));
}
