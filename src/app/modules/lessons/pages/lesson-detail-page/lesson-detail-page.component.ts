import { Component, OnInit, OnDestroy, inject, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { LessonsService } from '../../services/lessons.service';
import { LessonParserService } from '../../services/lesson-parser.service';
import { LessonProgressService } from '../../services/lesson-progress.service';
import { LessonPdfTriggerService } from '../../services/lesson-pdf-trigger.service';
import { LessonViewComponent } from '../../components/lesson-view/lesson-view.component';
import { LessonStepFlowComponent } from '../../components/lesson-step-flow/lesson-step-flow.component';
import { Lesson, ParsedLesson, buildLessonKey } from '../../models/lesson.model';
import { toPdfExportSource } from '../../adapters/lesson-pdf.adapter';
import { SeoModule } from '../../../seo/seo.module';
import { SeoService } from '../../../seo/services/seo.service';
import { RouterService } from '../../../language/services/router.service';

@Component({
  selector: 'app-lesson-detail-page',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    LessonViewComponent,
    LessonStepFlowComponent,
    SeoModule,
  ],
  template: `
    <div class="lesson-detail-page">
      <div class="lesson-detail-page__nav">
        <button class="back-button" (click)="goBack()">
          ← {{ 'lessons.backToList' | translate }}
        </button>

        @if (parsedLesson() || lessonsService.currentLesson()) {
          <button
            type="button"
            class="export-pdf-button"
            [disabled]="isExportingPdf()"
            (click)="exportToPdf()"
          >
            @if (isExportingPdf()) {
              {{ 'pdfExport.generating' | translate }}
            } @else {
              {{ 'pdfExport.export' | translate }}
            }
          </button>
        }
      </div>

      @if (parsedLesson()?.mode === 'stepped') {
        <app-lesson-step-flow
          [parsedLesson]="parsedLesson()!"
          [routeParams]="routeParams()!"
        />
      } @else if (lessonsService.currentLesson()) {
        <app-lesson-view [lesson]="lessonsService.currentLesson()"></app-lesson-view>
      }

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
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        flex-wrap: wrap;
      }

      .export-pdf-button {
        background: var(--color-surface);
        border: 1px solid var(--color-primary);
        color: var(--color-primary);
        font-size: var(--text-sm);
        cursor: pointer;
        padding: 0.5rem 1rem;
        border-radius: 8px;

        &:hover:not(:disabled) {
          background: var(--color-primary);
          color: #fff;
        }

        &:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
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
  private readonly _parser = inject(LessonParserService);
  private readonly _progressService = inject(LessonProgressService);
  private readonly _pdfTrigger = inject(LessonPdfTriggerService);
  private readonly _route = inject(ActivatedRoute);
  private readonly _routerService = inject(RouterService);
  private readonly _translate = inject(TranslateService);
  private readonly _seoService = inject(SeoService);
  private _paramMapSubscription?: Subscription;

  protected readonly parsedLesson = signal<ParsedLesson | null>(null);
  protected readonly isExportingPdf = signal(false);
  protected readonly routeParams = signal<{
    lang: string;
    platform: string;
    level: string;
  } | null>(null);

  constructor() {
    effect(() => {
      const lesson = this.lessonsService.currentLesson();
      if (lesson) {
        this._updateSEOTags(lesson);
        this.parsedLesson.set(this._parser.parse(lesson));
      }
    });
  }

  ngOnInit(): void {
    if (!this.lessonsService.lessonsIndex()) {
      this.lessonsService.loadLessonsIndex().subscribe(() => {
        this._loadLesson();
      });
    } else {
      this._loadLesson();
    }
  }

  /**
   * Returns to lessons list with language prefix
   */
  goBack(): void {
    this._routerService.navigateTo('/learn');
  }

  async exportToPdf(): Promise<void> {
    const parsed = this.parsedLesson();
    const params = this.routeParams();
    if (!parsed || !params || this.isExportingPdf()) {
      return;
    }

    this.isExportingPdf.set(true);

    try {
      const lessonKey = buildLessonKey(params.lang, params.platform, params.level, parsed.slug);
      const progress = this._progressService.getProgress(lessonKey);
      const source = toPdfExportSource(parsed, this._parser, {
        lang: params.lang,
        platform: params.platform,
        level: params.level,
        progress,
      });
      await this._pdfTrigger.openExport(source);
    } finally {
      this.isExportingPdf.set(false);
    }
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
        this._routerService.navigateTo('/learn');
        return;
      }

      // Get current language from TranslateService
      const currentLang = this._translate.currentLang || this._translate.defaultLang || '';
      this.routeParams.set({ lang: currentLang, platform, level });
      this.lessonsService.loadLesson(slug, currentLang, platform).subscribe();
    });
  }

  private _updateSEOTags(lesson: Lesson): void {
    const platforms = lesson.platforms || [];
    const primaryPlatform = platforms[0] || 'arduino';
    this._seoService.updateLessonSeo(lesson, primaryPlatform, lesson.level, lesson.slug);
  }
}
