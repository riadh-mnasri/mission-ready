import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { I18nService } from '../../core/i18n.service';
import { SearchOverlayService } from '../../core/search-overlay.service';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.html',
})
export class NavBar {
  protected readonly i18n = inject(I18nService);
  protected readonly search = inject(SearchOverlayService);
}
