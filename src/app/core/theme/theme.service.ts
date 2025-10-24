import { Injectable, effect, signal } from '@angular/core';

type Theme = 'light' | 'dark' | 'system';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly storageKey = 'app-theme';
  private readonly prefersDark = matchMedia('(prefers-color-scheme: dark)');

  readonly theme = signal<Theme>(this.loadInitialTheme());

  constructor() {
    effect(() => {
      this.applyTheme(this.theme());
    });

    this.prefersDark.addEventListener('change', () => {
      if (this.theme() === 'system') {
        this.applyTheme('system');
      }
    });
  }

  setTheme(theme: Theme) {
    this.theme.set(theme);
    localStorage.setItem(this.storageKey, theme);
  }

  getEffectiveTheme(): 'light' | 'dark' {
    const current = this.theme();
    if (current === 'system') {
      return this.prefersDark.matches ? 'dark' : 'light';
    }
    return current;
  }

  private loadInitialTheme(): Theme {
    const saved = (localStorage.getItem(this.storageKey) as Theme) || 'system';
    return saved;
  }

  private applyTheme(theme: Theme) {
    const root = document.documentElement;
    root.classList.remove('theme-light', 'theme-dark');
    const effective = theme === 'system' ? (this.prefersDark.matches ? 'dark' : 'light') : theme;
    root.classList.add(effective === 'dark' ? 'theme-dark' : 'theme-light');
  }
}
