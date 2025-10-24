import { CommonModule } from '@angular/common';
import { Component, HostListener, ElementRef, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LangSwitcher } from '../../shared/lang-switcher/lang-switcher.js';
import { ThemeToggleComponent } from '../../shared/theme-toggle/theme-toggle.js';
import { TranslateModule } from '@ngx-translate/core';
import { SocialLinks } from '../../shared/social-links/social-links.js';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    LangSwitcher,
    ThemeToggleComponent,
    TranslateModule,
    SocialLinks,
  ],
  template: `
    <header class="header">
      <div class="header__inner">
        <a class="header__logo" routerLink="/" [attr.aria-label]="'brand.name' | translate">
          <img src="img/logo.png" [attr.alt]="'brand.name' | translate" class="logo-img" />
          <span class="logo-text">{{ 'brand.name' | translate }}</span>
        </a>

        <nav class="nav" [class.nav--open]="isMobileMenuOpen()">
          <a class="nav__link" routerLink="/build">{{ 'nav.build' | translate }}</a>
          <a class="nav__link" routerLink="/learn">{{ 'nav.learning' | translate }}</a>
          <a class="nav__link" href="/#blog">{{ 'nav.blog' | translate }}</a>
          <a class="nav__link" routerLink="/community">{{ 'nav.community' | translate }}</a>
          <div class="nav__tools">
            <app-social-links class="actions__socials actions__socials--in-menu" />
            <app-theme-toggle></app-theme-toggle>
            <app-lang-switcher></app-lang-switcher>
          </div>
        </nav>

        <div class="actions">
          <app-social-links class="actions__socials actions__socials--desktop" />

          <app-theme-toggle class="actions__theme"></app-theme-toggle>
          <app-lang-switcher class="actions__lang"></app-lang-switcher>

          <button class="burger" type="button" aria-label="Menu" (click)="toggleMobile()">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  `,
  styleUrls: ['./header.scss'],
})
export class HeaderComponent {
  protected isMobileMenuOpen = signal(false);
  private readonly host = inject(ElementRef<HTMLElement>);

  protected toggleMobile() {
    this.isMobileMenuOpen.update((v) => !v);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.isMobileMenuOpen()) return;
    const path = (event.composedPath && event.composedPath()) || [];
    const clickedInside = path.includes(this.host.nativeElement);
    if (!clickedInside) {
      this.isMobileMenuOpen.set(false);
    }
  }
}
