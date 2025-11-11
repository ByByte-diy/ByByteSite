import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../../../environments/environment';
import { getLangFromPath, isValidLanguage } from '../utils/lang.utils';

@Injectable({
  providedIn: 'root',
})
export class RouterService {
  private readonly router = inject(Router);
  private readonly translate = inject(TranslateService);

  getCurrentLang(): string {
    const currentUrl = this.getCurrentUrl();
    const urlLang = getLangFromPath(currentUrl);

    if (currentUrl.startsWith(`/${urlLang}/`) || currentUrl === `/${urlLang}`) {
      return urlLang;
    }

    return (
      this.translate.getCurrentLang() || this.translate.getFallbackLang() || environment.defaultLang
    );
  }

  getLocalizedRoute(path: string, lang?: string): string {
    const targetLang = lang || this.getCurrentLang();
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;

    if (!cleanPath) {
      return `${targetLang}`;
    }

    return `${targetLang}/${cleanPath}`;
  }

  navigateTo(path: string, lang?: string): void {
    const route = this.getLocalizedRoute(path, lang);
    this.router.navigate([route]);
  }

  switchLanguage(lang: string): void {
    if (!isValidLanguage(lang)) {
      console.error(`Invalid language: ${lang}`);
      return;
    }

    const currentUrl = this.router.url;
    const urlLang = getLangFromPath(currentUrl);
    const segments = currentUrl.split('/').filter(Boolean);

    let path = '';
    if (segments.length > 0 && segments[0] === urlLang) {
      path = '/' + segments.slice(1).join('/');
    } else {
      path = currentUrl || '/';
    }

    if (path === '/' || path === '') {
      path = '';
    } else if (!path.startsWith('/')) {
      path = '/' + path;
    }

    this.translate.use(lang);

    try {
      localStorage.setItem('app-lang', lang);
    } catch {}

    const newRoute = this.getLocalizedRoute(path, lang);
    this.router.navigate([newRoute]);
  }

  private getCurrentUrl(): string {
    const current = this.router.url || '';
    return current || `/${environment.defaultLang}`;
  }
}
