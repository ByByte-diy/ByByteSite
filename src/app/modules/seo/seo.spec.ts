import { TestBed } from '@angular/core/testing';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';

import { SeoService } from './services/seo.service';
import { SeoPageConfig } from './models/seo.model';
import { environment } from '../../../environments/environment';

describe('SeoModule', () => {
  let service: SeoService;
  let meta: Meta;
  let title: Title;
  let translateService: jasmine.SpyObj<TranslateService>;

  beforeEach(() => {
    const translateSpy = jasmine.createSpyObj('TranslateService', [
      'instant',
      'getCurrentLang',
      'getFallbackLang',
    ]);
    translateSpy.instant.and.returnValue('');
    translateSpy.getCurrentLang.and.returnValue('en');
    translateSpy.getFallbackLang.and.returnValue('en');
    translateSpy.store = {
      translations: {
        en: {
          seo: {
            home: {
              title: 'Home Title',
              description: 'Home Description',
              keywords: 'home, keywords',
              image: '/img/logo.png',
              structuredData: '{"@context":"https://schema.org","@type":"WebSite"}',
            },
          },
        },
      },
    };

    TestBed.configureTestingModule({
      providers: [SeoService, { provide: TranslateService, useValue: translateSpy }],
    });

    service = TestBed.inject(SeoService);
    meta = TestBed.inject(Meta);
    title = TestBed.inject(Title);
    translateService = TestBed.inject(TranslateService) as jasmine.SpyObj<TranslateService>;

    spyOn(meta, 'addTag');
    spyOn(meta, 'updateTag');
    spyOn(meta, 'getTag').and.returnValue(null);
    spyOn(title, 'setTitle');
  });

  describe('Environment properties', () => {
    it('should return siteName from environment', () => {
      expect(service.siteName).toBe(environment.siteName);
    });

    it('should return siteUrl from environment', () => {
      expect(service.siteUrl).toBe(environment.siteUrl);
    });

    it('should return siteDescription from environment', () => {
      expect(service.siteDescription).toBe(environment.siteDescription);
    });
  });

  describe('updateSeoMeta', () => {
    it('should set title', () => {
      service.updateSeoMeta({
        title: 'Test Title',
        description: 'Test Description',
      });

      expect(title.setTitle).toHaveBeenCalledWith('Test Title');
    });

    it('should update meta tags', () => {
      service.updateSeoMeta({
        title: 'Test Title',
        description: 'Test Description',
        keywords: 'test, keywords',
        author: 'Test Author',
      });

      expect(meta.addTag).toHaveBeenCalledWith({
        name: 'description',
        content: 'Test Description',
      });
      expect(meta.addTag).toHaveBeenCalledWith({ name: 'keywords', content: 'test, keywords' });
      expect(meta.addTag).toHaveBeenCalledWith({ name: 'author', content: 'Test Author' });
    });

    it('should update OpenGraph tags', () => {
      service.updateSeoMeta({
        title: 'Test Title',
        description: 'Test Description',
        image: '/img/test.png',
        url: 'https://test.com',
        type: 'website',
        siteName: 'Test Site',
        locale: 'en_US',
      });

      expect(meta.addTag).toHaveBeenCalledWith({ property: 'og:title', content: 'Test Title' });
      expect(meta.addTag).toHaveBeenCalledWith({
        property: 'og:description',
        content: 'Test Description',
      });
      expect(meta.addTag).toHaveBeenCalledWith({ property: 'og:image', content: '/img/test.png' });
      expect(meta.addTag).toHaveBeenCalledWith({
        property: 'og:url',
        content: 'https://test.com',
      });
      expect(meta.addTag).toHaveBeenCalledWith({ property: 'og:type', content: 'website' });
      expect(meta.addTag).toHaveBeenCalledWith({
        property: 'og:site_name',
        content: 'Test Site',
      });
      expect(meta.addTag).toHaveBeenCalledWith({ property: 'og:locale', content: 'en_US' });
    });

    it('should use OpenGraph overrides when provided', () => {
      service.updateSeoMeta({
        title: 'Test Title',
        description: 'Test Description',
        openGraph: {
          title: 'OG Title',
          description: 'OG Description',
          image: '/img/og.png',
        },
      });

      expect(meta.addTag).toHaveBeenCalledWith({ property: 'og:title', content: 'OG Title' });
      expect(meta.addTag).toHaveBeenCalledWith({
        property: 'og:description',
        content: 'OG Description',
      });
      expect(meta.addTag).toHaveBeenCalledWith({ property: 'og:image', content: '/img/og.png' });
    });

    it('should update Twitter tags', () => {
      service.updateSeoMeta({
        title: 'Test Title',
        description: 'Test Description',
        image: '/img/test.png',
        twitterCard: 'summary_large_image',
        twitterSite: '@testsite',
        twitterCreator: '@testcreator',
      });

      expect(meta.addTag).toHaveBeenCalledWith({
        name: 'twitter:card',
        content: 'summary_large_image',
      });
      expect(meta.addTag).toHaveBeenCalledWith({ name: 'twitter:site', content: '@testsite' });
      expect(meta.addTag).toHaveBeenCalledWith({
        name: 'twitter:creator',
        content: '@testcreator',
      });
      expect(meta.addTag).toHaveBeenCalledWith({ name: 'twitter:title', content: 'Test Title' });
      expect(meta.addTag).toHaveBeenCalledWith({
        name: 'twitter:description',
        content: 'Test Description',
      });
      expect(meta.addTag).toHaveBeenCalledWith({ name: 'twitter:image', content: '/img/test.png' });
    });

    it('should not add meta tag if content is undefined', () => {
      service.updateSeoMeta({
        title: 'Test Title',
        description: 'Test Description',
      });

      const calls = (meta.addTag as jasmine.Spy).calls.allArgs();
      const hasUndefinedContent = calls.some(
        (call) => call[0].content === undefined || call[0].content === null,
      );
      expect(hasUndefinedContent).toBeFalse();
    });

    it('should update existing tag if it exists', () => {
      (meta.getTag as jasmine.Spy).and.returnValue({ name: 'description', content: 'Old' });

      service.updateSeoMeta({
        title: 'Test Title',
        description: 'New Description',
      });

      expect(meta.updateTag).toHaveBeenCalledWith(
        { name: 'description', content: 'New Description' },
        'name="description"',
      );
    });
  });

  describe('generateLessonUrl', () => {
    it('should generate correct lesson URL', () => {
      translateService.getCurrentLang.and.returnValue('en');
      const url = service.generateLessonUrl('arduino', 'beginner', 'blink-led');
      expect(url).toBe(`${environment.siteUrl}/en/learn/arduino/beginner/blink-led`);
    });

    it('should use current language in URL', () => {
      translateService.getCurrentLang.and.returnValue('uk');
      const url = service.generateLessonUrl('mega', 'advanced', 'motors');
      expect(url).toBe(`${environment.siteUrl}/uk/learn/mega/advanced/motors`);
    });
  });

  describe('generateLessonTitle', () => {
    it('should append site name to lesson title', () => {
      const title = service.generateLessonTitle('Blink LED');
      expect(title).toBe(`Blink LED - ${environment.siteName}`);
    });
  });

  describe('generateLessonDescription', () => {
    it('should generate description with single platform', () => {
      const desc = service.generateLessonDescription('Blink LED', 'Beginner', ['Arduino']);
      expect(desc).toContain('Blink LED');
      expect(desc).toContain(environment.siteName);
      expect(desc).toContain('Beginner');
      expect(desc).toContain('Arduino');
    });

    it('should join multiple platforms', () => {
      const desc = service.generateLessonDescription('Motors', 'Advanced', [
        'Arduino',
        'Raspberry',
      ]);
      expect(desc).toContain('Arduino, Raspberry');
    });

    it('should default to Arduino when platforms array is empty', () => {
      const desc = service.generateLessonDescription('Test', 'Beginner', []);
      expect(desc).toContain('Arduino');
    });
  });

  describe('updateLessonSeo', () => {
    it('should set article type for lesson', () => {
      const lesson = {
        title: 'Test Lesson',
        description: 'Test Description',
        platforms: ['Arduino'],
      };

      service.updateLessonSeo(lesson, 'arduino', 'beginner', 'test-lesson');

      expect(meta.addTag).toHaveBeenCalledWith({ property: 'og:type', content: 'article' });
    });

    it('should use lesson image when provided', () => {
      const lesson = {
        title: 'Test Lesson',
        image: '/img/lesson.png',
      };

      service.updateLessonSeo(lesson, 'arduino', 'beginner', 'test-lesson');

      expect(meta.addTag).toHaveBeenCalledWith({
        property: 'og:image',
        content: '/img/lesson.png',
      });
    });

    it('should use default image when lesson has no image', () => {
      const lesson = {
        title: 'Test Lesson',
      };

      service.updateLessonSeo(lesson, 'arduino', 'beginner', 'test-lesson');

      const calls = (meta.addTag as jasmine.Spy).calls.allArgs();
      const ogImageCall = calls.find((call) => call[0].property === 'og:image');
      expect(ogImageCall).toBeDefined();
      expect(ogImageCall![0].content).toBe(`${environment.siteUrl}/img/logo.png`);
    });

    it('should generate keywords from tags', () => {
      const lesson = {
        title: 'Test Lesson',
        tags: ['robotics', 'programming', 'arduino'],
      };

      service.updateLessonSeo(lesson, 'arduino', 'beginner', 'test-lesson');

      expect(meta.addTag).toHaveBeenCalledWith({
        name: 'keywords',
        content: 'robotics, programming, arduino',
      });
    });

    it('should generate default keywords when tags not provided', () => {
      const lesson = {
        title: 'Test Lesson',
      };

      service.updateLessonSeo(lesson, 'arduino', 'beginner', 'test-lesson');

      expect(meta.addTag).toHaveBeenCalledWith({
        name: 'keywords',
        content: 'arduino, beginner, robotics, programming',
      });
    });

    it('should add structured data script tag', () => {
      const lesson = {
        title: 'Test Lesson',
        description: 'Test Description',
      };

      service.updateLessonSeo(lesson, 'arduino', 'beginner', 'test-lesson');

      const script = document.querySelector('script[type="application/ld+json"]');
      expect(script).toBeTruthy();

      const data = JSON.parse(script!.textContent!);
      expect(data['@type']).toBe('Article');
      expect(data.headline).toBe('Test Lesson');
      expect(data.educationalLevel).toBe('beginner');
      expect(data.learningResourceType).toBe('Tutorial');
    });
  });

  describe('getCurrentLanguage', () => {
    it('should return current language from translate service', () => {
      translateService.getCurrentLang.and.returnValue('en');
      const lang = service.getCurrentLanguage();
      expect(lang).toBe('en');
    });

    it('should return fallback language when current is not set', () => {
      translateService.getCurrentLang.and.returnValue('');
      translateService.getFallbackLang.and.returnValue('uk');
      const lang = service.getCurrentLanguage();
      expect(lang).toBe('uk');
    });

    it('should return default language when no language is available', () => {
      translateService.getCurrentLang.and.returnValue('');
      translateService.getFallbackLang.and.returnValue('');
      const lang = service.getCurrentLanguage();
      expect(lang).toBe(environment.defaultLang);
    });
  });

  describe('updateSeoFromConfig', () => {
    it('should use translation keys from config', () => {
      translateService.instant.and.callFake((key: string) => {
        if (key === 'seo.home.title') return 'Translated Title';
        if (key === 'seo.home.description') return 'Translated Description';
        if (key === 'seo.home.keywords') return 'translated, keywords';
        return key;
      });

      const config: SeoPageConfig = {
        titleKey: 'seo.home.title',
        descriptionKey: 'seo.home.description',
        keywordsKey: 'seo.home.keywords',
      };

      service.updateSeoFromConfig(config);

      expect(title.setTitle).toHaveBeenCalledWith('Translated Title');
      expect(meta.addTag).toHaveBeenCalledWith({
        name: 'description',
        content: 'Translated Description',
      });
      expect(meta.addTag).toHaveBeenCalledWith({
        name: 'keywords',
        content: 'translated, keywords',
      });
    });

    it('should use default keys when not provided in config', () => {
      translateService.instant.and.callFake((key: string) => {
        if (key === 'seo.home.title') return 'Default Title';
        if (key === 'seo.home.description') return 'Default Description';
        return key;
      });

      const config: SeoPageConfig = {
        titleKey: '',
        descriptionKey: '',
      };

      service.updateSeoFromConfig(config);

      expect(title.setTitle).toHaveBeenCalledWith('Default Title');
    });

    it('should interpolate additional data in title and description', () => {
      translateService.instant.and.callFake((key: string) => {
        if (key === 'seo.home.title') return 'Title with {{name}}';
        if (key === 'seo.home.description') return 'Description for {{name}}';
        return key;
      });

      const config: SeoPageConfig = {
        titleKey: 'seo.home.title',
        descriptionKey: 'seo.home.description',
      };

      service.updateSeoFromConfig(config, { name: 'Test' });

      expect(title.setTitle).toHaveBeenCalledWith('Title with Test');
      expect(meta.addTag).toHaveBeenCalledWith({
        name: 'description',
        content: 'Description for Test',
      });
    });

    it('should set website type by default', () => {
      const config: SeoPageConfig = {
        titleKey: 'seo.home.title',
        descriptionKey: 'seo.home.description',
      };

      service.updateSeoFromConfig(config);

      expect(meta.addTag).toHaveBeenCalledWith({ property: 'og:type', content: 'website' });
    });

    it('should use custom type from config', () => {
      const config: SeoPageConfig = {
        titleKey: 'seo.home.title',
        descriptionKey: 'seo.home.description',
        type: 'article',
      };

      service.updateSeoFromConfig(config);

      expect(meta.addTag).toHaveBeenCalledWith({ property: 'og:type', content: 'article' });
    });

    it('should include structured data when available', () => {
      translateService.instant.and.callFake((key: string) => {
        if (key === 'seo.home.structuredData') {
          return '{"@context":"https://schema.org","@type":"Organization"}';
        }
        return key;
      });

      const config: SeoPageConfig = {
        titleKey: 'seo.home.title',
        descriptionKey: 'seo.home.description',
        structuredDataKey: 'seo.home.structuredData',
      };

      service.updateSeoFromConfig(config);

      const script = document.querySelector('script[type="application/ld+json"]');
      expect(script).toBeTruthy();

      const data = JSON.parse(script!.textContent!);
      expect(data['@type']).toBe('Organization');
    });
  });

  afterEach(() => {
    const scripts = document.querySelectorAll('script[type="application/ld+json"]');
    scripts.forEach((script) => script.remove());
  });
});
