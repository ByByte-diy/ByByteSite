import { CommonModule } from '@angular/common';
import { Component, HostListener, inject, signal } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { environment } from '../../../../../environments/environment.js';
import { RouterService } from '../../services/router.service.js';
import { DropdownButtonComponent } from '../../../../shared/ui/dropdown-button/dropdown-button.js';

@Component({
  selector: 'app-lang-switcher',
  imports: [CommonModule, TranslateModule, DropdownButtonComponent],
  template: `
    <app-dropdown-button ariaLabel="Language">
      <span
        dropdownTrigger
        class="icon-mask"
        [style.--icon]="'url(icons/globe.svg)'"
        aria-hidden="true"
      ></span>
      <ng-container dropdownMenu>
        @for (o of options; track o.code) {
          <li role="option" [attr.aria-selected]="current() === o.code">
            <button type="button" (click)="choose(o.code)">
              <span class="dropdown__flag">{{ o.flag }}</span
              ><span class="dropdown__label">{{ o.label }}</span>
            </button>
          </li>
        }
      </ng-container>
    </app-dropdown-button>
  `,
})
export class LangSwitcher {
  private readonly translate = inject(TranslateService);
  private readonly routerService = inject(RouterService);
  protected langs = signal(this.translate.getLangs());
  protected current = signal(this.translate.getCurrentLang() || environment.defaultLang);
  protected open = signal(false);
  protected readonly options = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'uk', label: 'Українська', flag: '🇺🇦' },
    { code: 'ru', label: 'Русский', flag: '🇷🇺' },
  ];

  constructor() {
    this.current.set(this.translate.getCurrentLang() || environment.defaultLang);
    this.langs.set(this.translate.getLangs());
    this.translate.onLangChange.subscribe((e) => this.current.set(e.lang));
  }

  protected toggle() {
    this.open.update((v) => !v);
  }
  protected close() {
    this.open.set(false);
  }
  protected choose(lang: string) {
    this.routerService.switchLanguage(lang);
    this.current.set(lang);
    this.open.set(false);
  }

  @HostListener('document:click', ['$event'])
  onDocClick(ev: MouseEvent) {
    const path = ev.composedPath() as Array<EventTarget>;
    const isInside = path.some((n: any) => n?.classList?.contains?.('lang'));
    if (!isInside) this.close();
  }
}
