import { CommonModule } from '@angular/common';
import { Component, HostListener, ElementRef, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LangSwitcher } from '../../shared/lang-switcher/lang-switcher.js';
import { ThemeToggleComponent } from '../../shared/theme-toggle/theme-toggle.js';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, LangSwitcher, ThemeToggleComponent, TranslateModule],
  template: `
    <header class="header">
      <div class="header__inner">
        <a class="header__logo" routerLink="/" aria-label="ByByte">
          <img src="/img/logo.png" alt="ByByte" class="logo-img" />
          <span class="logo-text">БАБАЙ</span>
        </a>

        <nav class="nav" [class.nav--open]="isMobileMenuOpen()">
          <a class="nav__link" href="/#build">{{ 'nav.build' | translate }}</a>
          <a class="nav__link" routerLink="/learn">{{ 'nav.learning' | translate }}</a>
          <a class="nav__link" href="/#blog">{{ 'nav.blog' | translate }}</a>
          <a class="nav__link" href="/#community">{{ 'nav.community' | translate }}</a>
          <div class="nav__tools">
            <app-theme-toggle></app-theme-toggle>
            <app-lang-switcher></app-lang-switcher>
          </div>
        </nav>

        <div class="actions">
          <div class="actions__socials">
            <a
              class="social"
              href="https://instagram.com"
              target="_blank"
              rel="noopener"
              aria-label="Instagram"
            >
              <span class="social-icon" style="--icon: url(/icons/instagram.svg)"></span>
            </a>
            <a
              class="social"
              href="https://facebook.com"
              target="_blank"
              rel="noopener"
              aria-label="Facebook"
            >
              <span class="social-icon" style="--icon: url(/icons/facebook.svg)"></span>
            </a>
            <a
              class="social"
              href="https://t.me"
              target="_blank"
              rel="noopener"
              aria-label="Telegram"
            >
              <span class="social-icon" style="--icon: url(/icons/telegram.svg)"></span>
            </a>
            <a
              class="social"
              href="https://discord.com"
              target="_blank"
              rel="noopener"
              aria-label="Discord"
            >
              <span class="social-icon" style="--icon: url(/icons/discord.svg)"></span>
            </a>
          </div>

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
