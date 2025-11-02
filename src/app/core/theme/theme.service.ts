import { Injectable, effect, signal, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

type Theme = 'light' | 'dark' | 'system';

// Abstract interfaces for different environments
interface StorageAdapter {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
}

interface MediaQueryAdapter {
  matches: boolean;
  addEventListener(event: string, callback: () => void): void;
}

interface DOMAdapter {
  applyTheme(theme: 'light' | 'dark'): void;
}

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly storageKey = 'app-theme';
  private readonly platformId = inject(PLATFORM_ID);

  // Dependency injection with adapters
  private readonly storage: StorageAdapter;
  private readonly mediaQuery: MediaQueryAdapter;
  private readonly dom: DOMAdapter;

  readonly theme = signal<Theme>('system');

  constructor() {
    // Initialize adapters based on platform
    this.storage = this.createStorageAdapter();
    this.mediaQuery = this.createMediaQueryAdapter();
    this.dom = this.createDOMAdapter();

    // Load initial theme after adapters are initialized
    this.theme.set(this.loadInitialTheme());

    effect(() => {
      this.applyTheme(this.theme());
    });

    this.mediaQuery.addEventListener('change', () => {
      if (this.theme() === 'system') {
        this.applyTheme('system');
      }
    });
  }

  setTheme(theme: Theme) {
    this.theme.set(theme);
    this.storage.setItem(this.storageKey, theme);
  }

  getEffectiveTheme(): 'light' | 'dark' {
    const current = this.theme();
    if (current === 'system') {
      return this.mediaQuery.matches ? 'dark' : 'light';
    }
    return current;
  }

  private loadInitialTheme(): Theme {
    const saved = this.storage.getItem(this.storageKey) as Theme;
    return saved || 'system';
  }

  private applyTheme(theme: Theme) {
    const effective = theme === 'system' ? (this.mediaQuery.matches ? 'dark' : 'light') : theme;
    this.dom.applyTheme(effective);
  }

  // Factory methods for different environments
  private createStorageAdapter(): StorageAdapter {
    if (isPlatformBrowser(this.platformId)) {
      return {
        getItem: (key: string) => localStorage.getItem(key),
        setItem: (key: string, value: string) => localStorage.setItem(key, value),
      };
    }

    // Server-side mock
    return {
      getItem: () => null,
      setItem: () => {},
    };
  }

  private createMediaQueryAdapter(): MediaQueryAdapter {
    if (isPlatformBrowser(this.platformId)) {
      return matchMedia('(prefers-color-scheme: dark)');
    }

    // Server-side mock
    return {
      matches: false,
      addEventListener: () => {},
    };
  }

  private createDOMAdapter(): DOMAdapter {
    if (isPlatformBrowser(this.platformId)) {
      return {
        applyTheme: (theme: 'light' | 'dark') => {
          const root = document.documentElement;
          root.classList.remove('theme-light', 'theme-dark');
          root.classList.add(theme === 'dark' ? 'theme-dark' : 'theme-light');
        },
      };
    }

    // Server-side mock
    return {
      applyTheme: () => {},
    };
  }
}
