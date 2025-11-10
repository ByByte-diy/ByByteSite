import {
  INJECTOR$1,
  Injectable,
  Meta,
  PLATFORM_ID,
  Title,
  TranslateService,
  environment,
  getLangFromPath,
  init_common,
  init_core,
  init_platform_browser,
  init_ssr,
  inject,
  isPlatformBrowser,
  isValidLanguage,
  setClassMetadata,
  ssr_exports,
  ɵɵdefineInjectable
} from "./chunk-5JG7UUPK.js";
import {
  __require,
  __toCommonJS
} from "./chunk-MXU7DO7X.js";

// src/app/services/seo.service.ts
init_core();
init_platform_browser();
init_common();
init_core();
var SeoService = class _SeoService {
  meta = inject(Meta);
  title = inject(Title);
  translate = inject(TranslateService);
  platformId = inject(PLATFORM_ID);
  injector = inject(INJECTOR$1);
  /**
   * Get site name from environment
   */
  get siteName() {
    return environment.siteName;
  }
  /**
   * Get site URL from environment
   */
  get siteUrl() {
    return environment.siteUrl;
  }
  /**
   * Get site description from environment
   */
  get siteDescription() {
    return environment.siteDescription;
  }
  /**
   * Update page SEO meta tags
   */
  updateSeoMeta(metaData) {
    this.title.setTitle(metaData.title);
    this.updateMetaTag("description", metaData.description);
    this.updateMetaTag("keywords", metaData.keywords);
    this.updateMetaTag("author", metaData.author);
    this.updateMetaTag("og:title", metaData.openGraph?.title || metaData.title, "property");
    this.updateMetaTag("og:description", metaData.openGraph?.description || metaData.description, "property");
    this.updateMetaTag("og:image", metaData.openGraph?.image || metaData.image, "property");
    this.updateMetaTag("og:url", metaData.openGraph?.url || metaData.url, "property");
    this.updateMetaTag("og:type", metaData.openGraph?.type || metaData.type, "property");
    this.updateMetaTag("og:site_name", metaData.openGraph?.siteName || metaData.siteName, "property");
    this.updateMetaTag("og:locale", metaData.openGraph?.locale || metaData.locale, "property");
    this.updateMetaTag("twitter:card", metaData.twitterCard);
    this.updateMetaTag("twitter:site", metaData.twitterSite);
    this.updateMetaTag("twitter:creator", metaData.twitterCreator);
    this.updateMetaTag("twitter:title", metaData.title);
    this.updateMetaTag("twitter:description", metaData.description);
    this.updateMetaTag("twitter:image", metaData.image);
    if (metaData.structuredData && isPlatformBrowser(this.platformId)) {
      this.updateStructuredData(metaData.structuredData);
    }
  }
  /**
   * Get value from translations store by nested key (for SSR fallback)
   */
  getTranslationFromStore(key, lang) {
    if (isPlatformBrowser(this.platformId)) {
      return null;
    }
    try {
      const store = this.translate.store;
      if (!store?.translations?.[lang]) {
        return null;
      }
      const translations = store.translations[lang];
      const keys = key.split(".");
      let value = translations;
      for (const k of keys) {
        value = value?.[k];
        if (value === void 0 || value === null) {
          return null;
        }
      }
      return value;
    } catch (e) {
      return null;
    }
  }
  /**
   * Get translation value - handles both instant() and store fallback for SSR
   */
  getTranslationValue(key, defaultValue) {
    let translation = this.translate.instant(key);
    if (translation === key && !isPlatformBrowser(this.platformId)) {
      const currentLang = this.getCurrentLanguage();
      const storeValue = this.getTranslationFromStore(key, currentLang);
      if (storeValue !== null) {
        translation = storeValue;
      }
    }
    if (translation === key || !translation) {
      return defaultValue !== void 0 ? defaultValue : key;
    }
    return typeof translation === "string" ? translation : defaultValue !== void 0 ? defaultValue : key;
  }
  /**
   * Parse structured data from translation value
   */
  parseStructuredData(value, key) {
    if (!value || value === key) {
      return void 0;
    }
    if (typeof value === "object") {
      return value;
    }
    if (typeof value === "string") {
      try {
        return JSON.parse(value);
      } catch (e) {
        return void 0;
      }
    }
    return void 0;
  }
  /**
   * Update SEO meta tags using translation keys
   * For SSR: Ensures translations are loaded before setting meta tags
   */
  updateSeoFromConfig(config, additionalData) {
    const currentLang = this.getCurrentLanguage();
    const titleKey = config.titleKey || "seo.home.title";
    const descriptionKey = config.descriptionKey || "seo.home.description";
    const keywordsKey = config.keywordsKey || "seo.home.keywords";
    const imageKey = config.imageKey || "seo.home.image";
    const structuredDataKey = config.structuredDataKey || "seo.home.structuredData";
    const title = this.getTranslationValue(titleKey, titleKey);
    const description = this.getTranslationValue(descriptionKey, descriptionKey);
    const keywords = this.getTranslationValue(keywordsKey) || void 0;
    const image = this.getTranslationValue(imageKey) || this.getDefaultImage();
    let structuredDataValue = this.translate.instant(structuredDataKey);
    if (structuredDataValue === structuredDataKey && !isPlatformBrowser(this.platformId)) {
      structuredDataValue = this.getTranslationFromStore(structuredDataKey, currentLang);
    }
    const structuredData = this.parseStructuredData(structuredDataValue, structuredDataKey);
    const metaData = {
      title: this.interpolateString(title, additionalData),
      description: this.interpolateString(description, additionalData),
      keywords: keywords || void 0,
      image,
      url: this.getCurrentUrl(),
      type: config.type || "website",
      locale: currentLang,
      siteName: this.siteName,
      twitterCard: "summary_large_image",
      twitterSite: "@bybyte_diy",
      openGraph: {
        title: this.interpolateString(title, additionalData),
        description: this.interpolateString(description, additionalData),
        image,
        url: this.getCurrentUrl(),
        type: config.type || "website",
        siteName: this.siteName,
        locale: currentLang
      },
      structuredData
    };
    this.updateSeoMeta(metaData);
  }
  /**
   * Generate lesson URL with language prefix
   */
  generateLessonUrl(platform, level, slug) {
    const lang = this.getCurrentLanguage();
    return `${this.siteUrl}/${lang}/learn/${platform}/${level}/${slug}`;
  }
  /**
   * Generate lesson title
   */
  generateLessonTitle(lessonTitle) {
    return `${lessonTitle} - ${this.siteName}`;
  }
  /**
   * Generate lesson description
   */
  generateLessonDescription(lessonTitle, level, platforms) {
    const platformList = platforms.length > 0 ? platforms.join(", ") : "Arduino";
    return `Learn ${lessonTitle} with ${this.siteName}. ${level} level lesson for ${platformList}.`;
  }
  /**
   * Update lesson SEO meta tags
   */
  updateLessonSeo(lesson, platform, level, slug) {
    const lessonUrl = this.generateLessonUrl(platform, level, slug);
    const lessonTitle = this.generateLessonTitle(lesson.title);
    const lessonDescription = this.generateLessonDescription(lesson.title, level, lesson.platforms || [platform]);
    const lessonImage = lesson.image || this.getDefaultImage();
    const metaData = {
      title: lessonTitle,
      description: lessonDescription,
      keywords: lesson.tags?.join(", ") || `${platform}, ${level}, robotics, programming`,
      image: lessonImage,
      url: lessonUrl,
      type: "article",
      locale: this.getCurrentLanguage(),
      siteName: this.siteName,
      twitterCard: "summary_large_image",
      twitterSite: "@bybyte_diy",
      openGraph: {
        title: lessonTitle,
        description: lessonDescription,
        image: lessonImage,
        url: lessonUrl,
        type: "article",
        siteName: this.siteName,
        locale: this.getCurrentLanguage()
      },
      structuredData: this.generateLessonStructuredData(lesson, platform, level, slug)
    };
    this.updateSeoMeta(metaData);
  }
  /**
   * Update meta tag
   */
  updateMetaTag(name, content, attribute = "name") {
    if (!content)
      return;
    const selector = `${attribute}="${name}"`;
    const existingTag = this.meta.getTag(selector);
    if (existingTag) {
      this.meta.updateTag({ [attribute]: name, content }, selector);
    } else {
      this.meta.addTag({ [attribute]: name, content });
    }
  }
  /**
   * Update structured data
   */
  updateStructuredData(data) {
    if (!isPlatformBrowser(this.platformId))
      return;
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  }
  /**
   * Interpolate string with additional data
   */
  interpolateString(template, data) {
    if (!data)
      return template;
    return template.replace(/\{\{(\w+)\}\}/g, (match, key) => {
      return data[key] || match;
    });
  }
  /**
   * Get current URL
   */
  getCurrentUrl() {
    if (!isPlatformBrowser(this.platformId))
      return this.siteUrl;
    return window.location.href;
  }
  /**
   * Get current language from URL
   * Works both in browser and server-side rendering
   */
  getCurrentLanguage() {
    let url = "";
    if (isPlatformBrowser(this.platformId)) {
      url = window.location.pathname;
    } else {
      try {
        let request = null;
        try {
          const { REQUEST } = (init_ssr(), __toCommonJS(ssr_exports));
          request = this.injector.get(REQUEST, null);
        } catch (e1) {
          try {
            const { REQUEST } = __require("@nguniversal/express-engine/tokens");
            request = this.injector.get(REQUEST, null);
          } catch (e2) {
          }
        }
        if (request && request.url && typeof request.url === "string") {
          url = request.url;
        }
      } catch (e) {
      }
    }
    const urlLang = getLangFromPath(url);
    if (urlLang !== environment.defaultLang || url && url.startsWith(`/${urlLang}`)) {
      return urlLang;
    }
    const currentLang = this.translate.getCurrentLang() || this.translate.getFallbackLang() || null;
    if (currentLang && isValidLanguage(currentLang)) {
      return currentLang;
    }
    return environment.defaultLang;
  }
  /**
   * Get default image
   */
  getDefaultImage() {
    return `${this.siteUrl}/assets/img/logo.png`;
  }
  /**
   * Generate lesson structured data
   */
  generateLessonStructuredData(lesson, platform, level, slug) {
    return {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: lesson.title,
      description: lesson.description || this.generateLessonDescription(lesson.title, level, lesson.platforms || [platform]),
      image: lesson.image || this.getDefaultImage(),
      author: {
        "@type": "Organization",
        name: this.siteName,
        url: this.siteUrl
      },
      publisher: {
        "@type": "Organization",
        name: this.siteName,
        logo: {
          "@type": "ImageObject",
          url: `${this.siteUrl}/assets/img/logo.png`
        }
      },
      datePublished: lesson.createdAt || (/* @__PURE__ */ new Date()).toISOString(),
      dateModified: lesson.updatedAt || (/* @__PURE__ */ new Date()).toISOString(),
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": this.generateLessonUrl(platform, level, slug)
      },
      about: {
        "@type": "Thing",
        name: `${platform} ${level} robotics programming`
      },
      educationalLevel: level,
      learningResourceType: "Tutorial",
      educationalUse: "instruction"
    };
  }
  static \u0275fac = function SeoService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SeoService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SeoService, factory: _SeoService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SeoService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  SeoService
};
//# sourceMappingURL=chunk-DUVATNFJ.js.map
