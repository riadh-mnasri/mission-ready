import { Component, effect, input, signal } from "@angular/core";

@Component({
  selector: "app-animated-number",
  template: `{{ displayed() }}{{ suffix() }}`,
})
export class AnimatedNumber {
  readonly value = input.required<number>();
  readonly suffix = input<string>("");
  readonly duration = input<number>(900);

  protected readonly displayed = signal(0);

  private previous = 0;

  constructor() {
    effect((onCleanup) => {
      const target = this.value();
      const durationMs = this.duration();
      const from = this.previous;
      const startTime = performance.now();
      let frame: number;

      const tick = (now: number) => {
        const t = Math.min((now - startTime) / durationMs, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        this.displayed.set(Math.round(from + (target - from) * eased));
        if (t < 1) {
          frame = requestAnimationFrame(tick);
        } else {
          this.previous = target;
        }
      };
      frame = requestAnimationFrame(tick);
      onCleanup(() => cancelAnimationFrame(frame));
    });
  }
}
