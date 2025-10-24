import { Component, HostListener, inject, signal } from '@angular/core';
import { DropdownButtonComponent } from '../ui/dropdown-button/dropdown-button.js';
import { ThemeService } from '../../core/theme/theme.service.js';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [DropdownButtonComponent],
  template: `
    <app-dropdown-button ariaLabel="Theme">
      <span
        dropdownTrigger
        class="icon-mask"
        [style.--icon]="effectiveTheme === 'dark' ? 'url(icons/moon.svg)' : 'url(icons/sun.svg)'"
        aria-hidden="true"
      ></span>
      <ng-container dropdownMenu>
        <li role="option" [attr.aria-selected]="current() === 'system'">
          <button type="button" (click)="choose('system')">
            <span class="dropdown__flag">🖥️</span><span class="dropdown__label">System</span>
          </button>
        </li>
        <li role="option" [attr.aria-selected]="current() === 'light'">
          <button type="button" (click)="choose('light')">
            <span class="dropdown__flag">☀️</span><span class="dropdown__label">Light</span>
          </button>
        </li>
        <li role="option" [attr.aria-selected]="current() === 'dark'">
          <button type="button" (click)="choose('dark')">
            <span class="dropdown__flag">🌙</span><span class="dropdown__label">Dark</span>
          </button>
        </li>
      </ng-container>
    </app-dropdown-button>
  `,
})
export class ThemeToggleComponent {
  private readonly themeService = inject(ThemeService);
  protected current = this.themeService.theme;
  protected open = signal(false);

  protected get effectiveTheme(): 'light' | 'dark' {
    return this.themeService.getEffectiveTheme();
  }

  protected toggle() {
    this.open.update((v) => !v);
  }
  protected close() {
    this.open.set(false);
  }
  protected choose(value: 'light' | 'dark' | 'system') {
    this.themeService.setTheme(value);
    this.open.set(false);
  }

  @HostListener('document:click', ['$event'])
  onDocClick(ev: MouseEvent) {
    const path = ev.composedPath() as Array<EventTarget>;
    const isInside = path.some((n: any) => n?.classList?.contains?.('theme'));
    if (!isInside) this.close();
  }
}
