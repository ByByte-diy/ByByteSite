import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { SocialLinks } from '../../shared/social-links/social-links.js';
import { LanguageModule } from '../../modules/language/language.module.js';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, SocialLinks, RouterLink, LanguageModule, TranslateModule],
  template: `
    <footer class="footer">
      <div class="footer__inner">
        <div class="footer__left">
          <div class="footer__legal">
            <span>©{{ currentYear }} All rights reserved | БАБАЙ (ByByte.diy)</span>
          </div>
          <nav class="footer__links">
            <a [routerLink]="'/terms' | localizedRoute" class="footer__link">{{
              'terms.title' | translate
            }}</a>
            <span class="footer__sep">·</span>
            <a [routerLink]="'/privacy' | localizedRoute" class="footer__link">{{
              'privacy.title' | translate
            }}</a>
          </nav>
        </div>
        <div class="footer__right">
          <app-social-links />
        </div>
      </div>
    </footer>
  `,
  styleUrls: ['./footer.scss'],
})
export class FooterComponent {
  protected readonly currentYear = new Date().getFullYear();
}
