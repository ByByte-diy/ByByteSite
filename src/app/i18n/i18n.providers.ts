import {
  EnvironmentProviders,
  Provider,
  inject,
  makeEnvironmentProviders,
  provideEnvironmentInitializer,
  PLATFORM_ID,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { isPlatformBrowser } from '@angular/common';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';

export const httpTranslateLoaderFactory = (http: HttpClient, platformId: any) => {
  if (isPlatformBrowser(platformId)) {
    return {
      getTranslation: (lang: string) => http.get(`assets/i18n/${lang}.json`),
    };
  }

  // Server-side mock loader
  return {
    getTranslation: (lang: string): Observable<any> => {
      // Return empty translations for server-side rendering
      return of({});
    },
  };
};

export function provideI18n(): Array<Provider | EnvironmentProviders> {
  return [
    makeEnvironmentProviders([
      TranslateModule.forRoot({
        fallbackLang: environment.defaultLang,
        loader: {
          provide: TranslateLoader,
          useFactory: httpTranslateLoaderFactory,
          deps: [HttpClient, PLATFORM_ID],
        },
      }).providers!,
    ]),
    provideEnvironmentInitializer(() => {
      const translate = inject(TranslateService);
      translate.addLangs(environment.supportedLangs);
      translate.setFallbackLang(environment.defaultLang);
      const savedLang =
        typeof localStorage !== 'undefined' ? localStorage.getItem('app-lang') : null;
      const browserLang =
        typeof window !== 'undefined'
          ? window.navigator.language.split('-')[0]
          : environment.defaultLang;
      const initial =
        savedLang && environment.supportedLangs.includes(savedLang)
          ? savedLang
          : environment.supportedLangs.includes(browserLang)
            ? browserLang
            : environment.defaultLang;
      translate.use(initial);
    }),
  ];
}
