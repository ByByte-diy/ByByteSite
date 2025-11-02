import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LessonsService } from '../../../../services/lessons.service';
import { LessonsListComponent } from '../../components/lessons-list/lessons-list.component';
import { SeoService } from '../../../../services/seo.service';

@Component({
  selector: 'app-lessons-page',
  standalone: true,
  imports: [CommonModule, TranslateModule, LessonsListComponent],
  template: `
    <div class="lessons-page">
      <div class="lessons-page__header">
        <h1 class="page-title">{{ 'lessons.pageTitle' | translate }}</h1>
        <p class="page-description">{{ 'lessons.pageDescription' | translate }}</p>
      </div>

      <app-lessons-list></app-lessons-list>
    </div>
  `,
  styles: [
    `
      .lessons-page {
        padding: 2rem 1rem;
      }

      .lessons-page__header {
        max-width: 1200px;
        margin: 0 auto 2rem;
        text-align: center;
      }

      .page-title {
        font-family: var(--font-display);
        font-size: var(--text-5xl);
        font-weight: var(--font-weight-bold);
        margin-bottom: 1rem;
        color: var(--text-primary);
      }

      .page-description {
        font-size: var(--text-xl);
        color: var(--text-secondary);
        max-width: 800px;
        margin: 0 auto;
      }

      @media (max-width: 768px) {
        .page-title {
          font-size: var(--text-4xl);
        }

        .page-description {
          font-size: var(--text-lg);
        }
      }
    `,
  ],
})
export class LessonsPageComponent implements OnInit {
  private readonly _lessonsService = inject(LessonsService);
  private readonly _seoService = inject(SeoService);

  ngOnInit(): void {
    // Завантажуємо індекс уроків
    this._lessonsService.loadLessonsIndex().subscribe();

    // Setup SEO with translations
    this._seoService.updateSeoFromConfig({
      titleKey: 'seo.learn.title',
      descriptionKey: 'seo.learn.description',
      keywordsKey: 'seo.learn.keywords',
      type: 'website',
    });
  }
}
