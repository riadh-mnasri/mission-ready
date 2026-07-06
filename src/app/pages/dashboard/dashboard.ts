import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppStateService } from '../../core/app-state.service';
import { I18nService } from '../../core/i18n.service';
import { dueCards, masteryRatio } from '../../core/leitner';
import { currentStreak, lastNDays } from '../../core/activity';
import { ThemeCard } from '../../components/theme-card/theme-card';
import { AnimatedNumber } from '../../components/animated-number/animated-number';

const ACTIVITY_DAYS = 84;

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink, ThemeCard, AnimatedNumber],
  templateUrl: './dashboard.html',
})
export class Dashboard {
  protected readonly appState = inject(AppStateService);
  protected readonly i18n = inject(I18nService);

  protected readonly themes = computed(() => this.appState.state().themes);
  protected readonly cards = computed(() => this.appState.state().cards);
  protected readonly totalDue = computed(() => dueCards(this.cards()).length);
  protected readonly masteryPercent = computed(() =>
    Math.round(masteryRatio(this.cards()) * 100),
  );
  protected readonly masteredCount = computed(
    () => this.cards().filter((c) => c.box === 5).length,
  );

  protected readonly reviewLog = computed(() => this.appState.state().reviewLog ?? []);
  protected readonly streak = computed(() => currentStreak(this.reviewLog()));
  protected readonly activityDays = computed(() => lastNDays(this.reviewLog(), ACTIVITY_DAYS));

  protected cardsForTheme(themeId: string) {
    return this.cards().filter((c) => c.themeId === themeId);
  }

  protected activityColor(reviewed: number): string {
    if (reviewed === 0) return 'var(--color-border)';
    if (reviewed < 3) return 'color-mix(in srgb, var(--color-accent) 35%, transparent)';
    if (reviewed < 8) return 'color-mix(in srgb, var(--color-accent) 60%, transparent)';
    if (reviewed < 15) return 'color-mix(in srgb, var(--color-accent) 85%, transparent)';
    return 'var(--color-accent)';
  }
}
