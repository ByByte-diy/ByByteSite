import {
  EnvironmentProviders,
  Provider,
  inject,
  makeEnvironmentProviders,
  provideEnvironmentInitializer,
  PLATFORM_ID,
  INJECTOR,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { isPlatformBrowser } from '@angular/common';
import { Observable, of, catchError } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { getLangFromRequest } from '../../../utils/ssr.utils';

function loadTranslationFromFs(lang: string, injector?: any): any {
  try {
    const fs = require('fs');
    const path = require('path');

    let targetLang = lang;

    if (injector) {
      const urlLang = getLangFromRequest(injector);
      if (urlLang) {
        targetLang = urlLang;
      }
    }

    if (!environment.supportedLangs.includes(targetLang)) {
      targetLang = environment.defaultLang;
    }

    const translationsPath = path.join(process.cwd(), 'src/assets/i18n', `${targetLang}.json`);

    if (fs.existsSync(translationsPath)) {
      const translations = JSON.parse(fs.readFileSync(translationsPath, 'utf8'));
      return translations;
    }

    const defaultTranslationsPath = path.join(
      process.cwd(),
      'src/assets/i18n',
      `${environment.defaultLang}.json`,
    );

    if (fs.existsSync(defaultTranslationsPath)) {
      const defaultTranslations = JSON.parse(fs.readFileSync(defaultTranslationsPath, 'utf8'));
      return defaultTranslations;
    }

    return {};
  } catch (error) {
    console.error(`Error loading translations from filesystem for ${lang}:`, error);
    return {};
  }
}

export const httpTranslateLoaderFactory = (http: HttpClient, platformId: any, injector?: any) => {
  if (isPlatformBrowser(platformId)) {
    return {
      getTranslation: (lang: string) => {
        const targetLang = environment.supportedLangs.includes(lang)
          ? lang
          : environment.defaultLang;

        return http.get(`assets/i18n/${targetLang}.json`).pipe(
          catchError((error) => {
            if (targetLang !== environment.defaultLang && error.status === 404) {
              console.warn(
                `Translation file for ${targetLang} not found, falling back to ${environment.defaultLang}`,
              );
              return http.get(`assets/i18n/${environment.defaultLang}.json`).pipe(
                catchError(() => {
                  console.error(
                    `Failed to load default translations (${environment.defaultLang}.json)`,
                  );
                  return of({});
                }),
              );
            }

            console.error(`Error loading translations for ${targetLang}:`, error);
            return of({});
          }),
        );
      },
    };
  }

  return {
    getTranslation: (lang: string): Observable<any> => {
      const translations = loadTranslationFromFs(lang, injector);
      return of(translations);
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
          deps: [HttpClient, PLATFORM_ID, INJECTOR],
        },
      }).providers!,
    ]),
    provideEnvironmentInitializer(() => {
      const translate = inject(TranslateService);
      const injector = inject(INJECTOR);
      const platformId = inject(PLATFORM_ID);

      translate.addLangs(environment.supportedLangs);
      translate.setFallbackLang(environment.defaultLang);

      const getLangFromUrl = () => {
        if (isPlatformBrowser(platformId)) {
          const pathSegments = window.location.pathname.split('/').filter(Boolean);
          const firstSegment = pathSegments[0];
          return environment.supportedLangs.includes(firstSegment) ? firstSegment : null;
        }

        return getLangFromRequest(injector);
      };

      const urlLang = getLangFromUrl();
      const savedLang =
        isPlatformBrowser(platformId) && typeof localStorage !== 'undefined'
          ? localStorage.getItem('app-lang')
          : null;
      const browserLang = isPlatformBrowser(platformId)
        ? window.navigator.language.split('-')[0]
        : environment.defaultLang;

      const initial =
        urlLang ||
        (savedLang && environment.supportedLangs.includes(savedLang) ? savedLang : null) ||
        (environment.supportedLangs.includes(browserLang) ? browserLang : null) ||
        environment.defaultLang;

      translate.use(initial);
    }),
  ];
}
