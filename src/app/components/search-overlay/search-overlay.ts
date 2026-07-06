import {
  Component,
  ElementRef,
  HostListener,
  computed,
  effect,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppStateService } from '../../core/app-state.service';
import { I18nService } from '../../core/i18n.service';
import { SearchOverlayService } from '../../core/search-overlay.service';
import type { Flashcard, Theme } from '../../core/types';

const MAX_RESULTS = 30;

interface SearchResult {
  card: Flashcard;
  theme: Theme;
}

@Component({
  selector: 'app-search-overlay',
  imports: [FormsModule],
  templateUrl: './search-overlay.html',
})
export class SearchOverlay {
  private readonly appState = inject(AppStateService);
  private readonly router = inject(Router);
  protected readonly i18n = inject(I18nService);
  protected readonly overlay = inject(SearchOverlayService);

  protected readonly query = signal('');
  private readonly inputRef = viewChild<ElementRef<HTMLInputElement>>('searchInput');

  protected readonly totalCards = computed(() => this.appState.state().cards.length);

  protected readonly results = computed<SearchResult[]>(() => {
    const term = this.query().trim().toLowerCase();
    if (!term) return [];

    const { cards, themes } = this.appState.state();
    const themesById = new Map(themes.map((t) => [t.id, t]));

    const matches: SearchResult[] = [];
    for (const card of cards) {
      const haystack = `${card.question} ${card.questionFr ?? ''} ${card.answer} ${card.answerFr ?? ''}`.toLowerCase();
      if (!haystack.includes(term)) continue;
      const theme = themesById.get(card.themeId);
      if (!theme) continue;
      matches.push({ card, theme });
      if (matches.length >= MAX_RESULTS) break;
    }
    return matches;
  });

  constructor() {
    effect(() => {
      if (!this.overlay.isOpen()) return;
      this.query.set('');
      setTimeout(() => this.inputRef()?.nativeElement.focus(), 0);
    });
  }

  @HostListener('document:keydown', ['$event'])
  protected onKeydown(event: KeyboardEvent): void {
    const isToggleShortcut = (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k';
    if (isToggleShortcut) {
      event.preventDefault();
      this.overlay.toggle();
      return;
    }
    if (event.key === 'Escape' && this.overlay.isOpen()) {
      this.overlay.close();
    }
  }

  protected selectResult(result: SearchResult): void {
    this.overlay.close();
    this.router.navigate(['/themes'], { queryParams: { highlight: result.card.id } });
  }

  protected cardText(card: Flashcard) {
    return this.i18n.cardText(card);
  }

  protected themeName(theme: Theme): string {
    return this.i18n.themeName(theme);
  }
}
