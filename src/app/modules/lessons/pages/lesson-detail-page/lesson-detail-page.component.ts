import { Component, OnInit, OnDestroy, inject, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Meta, Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { LessonsService } from '../../../../services/lessons.service';
import { LessonViewComponent } from '../../components/lesson-view/lesson-view.component';
import { Lesson } from '../../../../models/lesson.model';
import { SeoService } from '../../../../services/seo.service';

@Component({
  selector: 'app-lesson-detail-page',
  standalone: true,
  imports: [CommonModule, TranslateModule, LessonViewComponent],
  template: `
    <div class="lesson-detail-page">
      <div class="lesson-detail-page__nav">
        <button class="back-button" (click)="goBack()">
          ← {{ 'lessons.backToList' | translate }}
        </button>
      </div>

      <app-lesson-view [lesson]="lessonsService.currentLesson()"></app-lesson-view>

      @if (lessonsService.error()) {
        <div class="lesson-detail-page__error">
          <p class="error-message">{{ lessonsService.error() }}</p>
          <button class="back-button" (click)="goBack()">
            ← {{ 'lessons.backToList' | translate }}
          </button>
        </div>
      }
    </div>
  `,
  styles: [
    `
      .lesson-detail-page {
        padding: 2rem 1rem;
      }

      .lesson-detail-page__nav {
        max-width: 900px;
        margin: 0 auto 1rem;
      }

      .back-button {
        background: none;
        border: none;
        color: var(--color-primary);
        font-size: var(--text-base);
        cursor: pointer;
        padding: 0.5rem 0;

        &:hover {
          text-decoration: underline;
        }
      }

      .lesson-detail-page__error {
        max-width: 900px;
        margin: 2rem auto;
        padding: 2rem;
        background: var(--color-surface);
        border-radius: 12px;
        text-align: center;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

        .error-message {
          font-size: var(--text-lg);
          color: var(--color-error);
          margin-bottom: 1.5rem;
        }
      }
    `,
  ],
})
export class LessonDetailPageComponent implements OnInit, OnDestroy {
  protected readonly lessonsService = inject(LessonsService);
  private readonly _route = inject(ActivatedRoute);
  private readonly _router = inject(Router);
  private readonly _translate = inject(TranslateService);
  private readonly _meta = inject(Meta);
  private readonly _title = inject(Title);
  private readonly _seoService = inject(SeoService);
  private _paramMapSubscription?: Subscription;

  constructor() {
    // Watch lesson changes for SEO updates
    effect(() => {
      const lesson = this.lessonsService.currentLesson();
      if (lesson) {
        this._updateSEOTags(lesson);
      }
    });
  }

  ngOnInit(): void {
    // Load lessons index, if it's not loaded yet
    if (!this.lessonsService.lessonsIndex()) {
      this.lessonsService.loadLessonsIndex().subscribe(() => {
        this._loadLesson();
      });
    } else {
      this._loadLesson();
    }
  }

  /**
   * Returns to lessons list
   */
  goBack(): void {
    this._router.navigate(['/learn']);
  }

  /**
   * Clean up subscriptions to prevent memory leaks
   */
  ngOnDestroy(): void {
    if (this._paramMapSubscription) {
      this._paramMapSubscription.unsubscribe();
    }
  }

  /**
   * Load lesson by parameters from URL
   */
  private _loadLesson(): void {
    this._paramMapSubscription = this._route.paramMap.subscribe((params) => {
      const slug = params.get('slug');
      const platform = params.get('platform');
      const level = params.get('level');

      if (!slug || !platform || !level) {
        this._router.navigate(['/learn']);
        return;
      }

      // Get current language from TranslateService
      const currentLang = this._translate.currentLang || this._translate.defaultLang || '';

      this.lessonsService.loadLesson(slug, currentLang, platform).subscribe();
    });
  }

  /**
   * Update SEO meta tags for the lesson
   */
  private _updateSEOTags(lesson: Lesson): void {
    // Safe handling of data
    const platforms = lesson.platforms || [];
    const tags = lesson.tags || [];
    const primaryPlatform = platforms[0] || 'arduino';
    const platformList = platforms.length > 0 ? platforms.join(', ') : 'Arduino';

    const title = this._seoService.generateLessonTitle(lesson.title);
    const description =
      lesson.description ||
      this._seoService.generateLessonDescription(lesson.title, lesson.level, platforms);
    const keywords =
      tags.length > 0 ? tags.join(', ') : `${lesson.title}, ${lesson.level}, ${platformList}`;
    const url = this._seoService.generateLessonUrl(primaryPlatform, lesson.level, lesson.slug);

    // Update page title
    this._title.setTitle(title);

    // Update meta tags
    this._meta.updateTag({ name: 'description', content: description });
    this._meta.updateTag({ name: 'keywords', content: keywords });
    this._meta.updateTag({ name: 'author', content: this._seoService.siteName });
    this._meta.updateTag({ name: 'robots', content: 'index, follow' });
    this._meta.updateTag({ name: 'viewport', content: 'width=device-width, initial-scale=1' });
    this._meta.updateTag({ name: 'theme-color', content: '#2563eb' });

    // Open Graph tags
    this._meta.updateTag({ property: 'og:title', content: title });
    this._meta.updateTag({ property: 'og:description', content: description });
    this._meta.updateTag({ property: 'og:url', content: url });
    this._meta.updateTag({ property: 'og:type', content: 'article' });
    this._meta.updateTag({ property: 'og:site_name', content: this._seoService.siteName });
    this._meta.updateTag({
      property: 'og:locale',
      content: lesson.lang === 'uk' ? 'uk_UA' : lesson.lang === 'ru' ? 'ru_RU' : 'en_US',
    });

    // Twitter Card tags
    this._meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this._meta.updateTag({ name: 'twitter:title', content: title });
    this._meta.updateTag({ name: 'twitter:description', content: description });
    this._meta.updateTag({ name: 'twitter:site', content: '@ByByteDIY' });

    // Structured data for search engines
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'LearningResource',
      name: lesson.title,
      description: description,
      educationalLevel: lesson.level,
      learningResourceType: 'Lesson',
      inLanguage: lesson.lang,
      keywords: keywords,
      url: url,
      isPartOf: {
        '@type': 'Course',
        name: `${this._seoService.siteName} ${primaryPlatform} Course`,
        description: `Learn ${primaryPlatform} programming with ${this._seoService.siteName}`,
      },
      provider: {
        '@type': 'Organization',
        name: this._seoService.siteName,
        url: this._seoService.siteUrl,
        logo: `${this._seoService.siteUrl}/assets/logo.png`,
      },
      audience: {
        '@type': 'EducationalAudience',
        educationalRole: 'student',
      },
    };

    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }
}
