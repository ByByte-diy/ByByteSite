import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LessonsService } from '../../../../services/lessons.service';
import { LessonViewComponent } from '../../components/lesson-view/lesson-view.component';

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
export class LessonDetailPageComponent implements OnInit {
  protected readonly lessonsService = inject(LessonsService);
  private readonly _route = inject(ActivatedRoute);
  private readonly _router = inject(Router);
  private readonly _translate = inject(TranslateService);

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
   * Load lesson by parameters from URL
   */
  private _loadLesson(): void {
    this._route.paramMap.subscribe((params) => {
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
}
