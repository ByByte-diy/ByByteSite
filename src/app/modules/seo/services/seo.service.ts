import { Injectable, inject, PLATFORM_ID, INJECTOR } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../../../environments/environment';
import { SeoMetaData, SeoPageConfig } from '../models/seo.model';
import { getLangFromPath, isValidLanguage } from '../../language/utils/lang.utils';

@Injectable()
export class SeoService {
  private readonly meta = inject(Meta);
  private readonly title = inject(Title);
  private readonly translate = inject(TranslateService);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly injector = inject(INJECTOR);

  get siteName(): string {
    return environment.siteName;
  }

  get siteUrl(): string {
    return environment.siteUrl;
  }

  get siteDescription(): string {
    return environment.siteDescription;
  }

  updateSeoMeta(metaData: SeoMetaData): void {
    this.title.setTitle(metaData.title);

    this.updateMetaTag('description', metaData.description);
    this.updateMetaTag('keywords', metaData.keywords);
    this.updateMetaTag('author', metaData.author);

    this.updateMetaTag('og:title', metaData.openGraph?.title || metaData.title, 'property');
    this.updateMetaTag(
      'og:description',
      metaData.openGraph?.description || metaData.description,
      'property',
    );
    this.updateMetaTag('og:image', metaData.openGraph?.image || metaData.image, 'property');
    this.updateMetaTag('og:url', metaData.openGraph?.url || metaData.url, 'property');
    this.updateMetaTag('og:type', metaData.openGraph?.type || metaData.type, 'property');
    this.updateMetaTag(
      'og:site_name',
      metaData.openGraph?.siteName || metaData.siteName,
      'property',
    );
    this.updateMetaTag('og:locale', metaData.openGraph?.locale || metaData.locale, 'property');

    this.updateMetaTag('twitter:card', metaData.twitterCard);
    this.updateMetaTag('twitter:site', metaData.twitterSite);
    this.updateMetaTag('twitter:creator', metaData.twitterCreator);
    this.updateMetaTag('twitter:title', metaData.title);
    this.updateMetaTag('twitter:description', metaData.description);
    this.updateMetaTag('twitter:image', metaData.image);

    if (metaData.structuredData && isPlatformBrowser(this.platformId)) {
      this.updateStructuredData(metaData.structuredData);
    }
  }

  private getTranslationFromStore(key: string, lang: string): any {
    if (isPlatformBrowser(this.platformId)) {
      return null;
    }

    try {
      const store = (this.translate as any).store;
      if (!store?.translations?.[lang]) {
        return null;
      }

      const translations = store.translations[lang];
      const keys = key.split('.');
      let value: any = translations;

      for (const k of keys) {
        value = value?.[k];
        if (value === undefined || value === null) {
          return null;
        }
      }

      return value;
    } catch (e) {
      return null;
    }
  }

  private getTranslationValue(key: string, defaultValue?: string): any {
    let translation = this.translate.instant(key);

    if (translation === key && !isPlatformBrowser(this.platformId)) {
      const currentLang = this.getCurrentLanguage();
      const storeValue = this.getTranslationFromStore(key, currentLang);
      if (storeValue !== null) {
        translation = storeValue;
      }
    }

    if (translation === key || !translation) {
      return defaultValue !== undefined ? defaultValue : key;
    }

    return typeof translation === 'string'
      ? translation
      : defaultValue !== undefined
        ? defaultValue
        : key;
  }

  private parseStructuredData(value: any, key: string): any {
    if (!value || value === key) {
      return undefined;
    }

    if (typeof value === 'object') {
      return value;
    }

    if (typeof value === 'string') {
      try {
        return JSON.parse(value);
      } catch (e) {
        return undefined;
      }
    }

    return undefined;
  }

  updateSeoFromConfig(config: SeoPageConfig, additionalData?: any): void {
    const currentLang = this.getCurrentLanguage();

    const titleKey = config.titleKey || 'seo.home.title';
    const descriptionKey = config.descriptionKey || 'seo.home.description';
    const keywordsKey = config.keywordsKey || 'seo.home.keywords';
    const imageKey = config.imageKey || 'seo.home.image';
    const structuredDataKey = config.structuredDataKey || 'seo.home.structuredData';

    const title = this.getTranslationValue(titleKey, titleKey);
    const description = this.getTranslationValue(descriptionKey, descriptionKey);
    const keywords = this.getTranslationValue(keywordsKey) || undefined;
    const image = this.getTranslationValue(imageKey) || this.getDefaultImage();

    let structuredDataValue = this.translate.instant(structuredDataKey);
    if (structuredDataValue === structuredDataKey && !isPlatformBrowser(this.platformId)) {
      structuredDataValue = this.getTranslationFromStore(structuredDataKey, currentLang);
    }
    const structuredData = this.parseStructuredData(structuredDataValue, structuredDataKey);

    const metaData: SeoMetaData = {
      title: this.interpolateString(title, additionalData),
      description: this.interpolateString(description, additionalData),
      keywords: keywords || undefined,
      image: image,
      url: this.getCurrentUrl(),
      type: config.type || 'website',
      locale: currentLang,
      siteName: this.siteName,
      twitterCard: 'summary_large_image',
      twitterSite: '@bybyte_diy',
      openGraph: {
        title: this.interpolateString(title, additionalData),
        description: this.interpolateString(description, additionalData),
        image: image,
        url: this.getCurrentUrl(),
        type: config.type || 'website',
        siteName: this.siteName,
        locale: currentLang,
      },
      structuredData: structuredData,
    };

    this.updateSeoMeta(metaData);
  }

  generateLessonUrl(platform: string, level: string, slug: string): string {
    const lang = this.getCurrentLanguage();
    return `${this.siteUrl}/${lang}/learn/${platform}/${level}/${slug}`;
  }

  generateLessonTitle(lessonTitle: string): string {
    return `${lessonTitle} - ${this.siteName}`;
  }

  generateLessonDescription(lessonTitle: string, level: string, platforms: string[]): string {
    const platformList = platforms.length > 0 ? platforms.join(', ') : 'Arduino';
    return `Learn ${lessonTitle} with ${this.siteName}. ${level} level lesson for ${platformList}.`;
  }

  updateLessonSeo(lesson: any, platform: string, level: string, slug: string): void {
    const lessonUrl = this.generateLessonUrl(platform, level, slug);
    const lessonTitle = this.generateLessonTitle(lesson.title);
    const lessonDescription = this.generateLessonDescription(
      lesson.title,
      level,
      lesson.platforms || [platform],
    );
    const lessonImage = lesson.image || this.getDefaultImage();

    const metaData: SeoMetaData = {
      title: lessonTitle,
      description: lessonDescription,
      keywords: lesson.tags?.join(', ') || `${platform}, ${level}, robotics, programming`,
      image: lessonImage,
      url: lessonUrl,
      type: 'article',
      locale: this.getCurrentLanguage(),
      siteName: this.siteName,
      twitterCard: 'summary_large_image',
      twitterSite: '@bybyte_diy',
      openGraph: {
        title: lessonTitle,
        description: lessonDescription,
        image: lessonImage,
        url: lessonUrl,
        type: 'article',
        siteName: this.siteName,
        locale: this.getCurrentLanguage(),
      },
      structuredData: this.generateLessonStructuredData(lesson, platform, level, slug),
    };

    this.updateSeoMeta(metaData);
  }

  private updateMetaTag(
    name: string,
    content: string | undefined,
    attribute: string = 'name',
  ): void {
    if (!content) return;

    const selector = `${attribute}="${name}"`;
    const existingTag = this.meta.getTag(selector);

    if (existingTag) {
      this.meta.updateTag({ [attribute]: name, content }, selector);
    } else {
      this.meta.addTag({ [attribute]: name, content });
    }
  }

  private updateStructuredData(data: any): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  }

  private interpolateString(template: string, data?: any): string {
    if (!data) return template;

    return template.replace(/\{\{(\w+)\}\}/g, (match, key) => {
      return data[key] || match;
    });
  }

  private getCurrentUrl(): string {
    if (!isPlatformBrowser(this.platformId)) return this.siteUrl;
    return window.location.href;
  }

  getCurrentLanguage(): string {
    let url = '';

    if (isPlatformBrowser(this.platformId)) {
      url = window.location.pathname;
    } else {
      try {
        let request: any = null;
        try {
          const { REQUEST } = require('@angular/ssr');
          request = this.injector.get(REQUEST, null);
        } catch (e1) {
          try {
            const { REQUEST } = require('@nguniversal/express-engine/tokens');
            request = this.injector.get(REQUEST, null);
          } catch (e2) {
            // ignore
          }
        }

        if (request && request.url && typeof request.url === 'string') {
          url = request.url;
        }
      } catch (e) {
        // ignore
      }
    }

    const urlLang = getLangFromPath(url);

    if (urlLang !== environment.defaultLang || (url && url.startsWith(`/${urlLang}`))) {
      return urlLang;
    }

    const currentLang = this.translate.getCurrentLang() || this.translate.getFallbackLang() || null;
    if (currentLang && isValidLanguage(currentLang)) {
      return currentLang;
    }

    return environment.defaultLang;
  }

  private getDefaultImage(): string {
    return `${this.siteUrl}/assets/img/logo.png`;
  }

  private generateLessonStructuredData(
    lesson: any,
    platform: string,
    level: string,
    slug: string,
  ): any {
    return {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: lesson.title,
      description:
        lesson.description ||
        this.generateLessonDescription(lesson.title, level, lesson.platforms || [platform]),
      image: lesson.image || this.getDefaultImage(),
      author: {
        '@type': 'Organization',
        name: this.siteName,
        url: this.siteUrl,
      },
      publisher: {
        '@type': 'Organization',
        name: this.siteName,
        logo: {
          '@type': 'ImageObject',
          url: `${this.siteUrl}/assets/img/logo.png`,
        },
      },
      datePublished: lesson.createdAt || new Date().toISOString(),
      dateModified: lesson.updatedAt || new Date().toISOString(),
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': this.generateLessonUrl(platform, level, slug),
      },
      about: {
        '@type': 'Thing',
        name: `${platform} ${level} robotics programming`,
      },
      educationalLevel: level,
      learningResourceType: 'Tutorial',
      educationalUse: 'instruction',
    };
  }
}
