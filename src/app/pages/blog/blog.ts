import { Component, OnInit, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Title, Meta } from '@angular/platform-browser';
import { SeoModule } from '../../modules/seo/seo.module';
import { SeoService } from '../../modules/seo/services/seo.service';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [TranslateModule, SeoModule],
  template: `
    <div class="blog-page">
      <div class="blog-container">
        <div class="blog-hero">
          <h1 class="blog-hero__title">{{ 'blog.title' | translate }}</h1>
          <p class="blog-hero__description">{{ 'blog.description' | translate }}</p>
        </div>

        <div class="blog-content">
          <div class="blog-placeholder">
            <div class="blog-placeholder__icon">
              <span class="blog-placeholder__emoji">📝</span>
            </div>
            <h2 class="blog-placeholder__title">{{ 'blog.comingSoon.title' | translate }}</h2>
            <p class="blog-placeholder__description">
              {{ 'blog.comingSoon.description' | translate }}
            </p>

            <div class="blog-placeholder__features">
              <div class="blog-feature">
                <span class="blog-feature__icon">🔧</span>
                <h3 class="blog-feature__title">
                  {{ 'blog.features.tutorials.title' | translate }}
                </h3>
                <p class="blog-feature__description">
                  {{ 'blog.features.tutorials.description' | translate }}
                </p>
              </div>

              <div class="blog-feature">
                <span class="blog-feature__icon">💡</span>
                <h3 class="blog-feature__title">{{ 'blog.features.tips.title' | translate }}</h3>
                <p class="blog-feature__description">
                  {{ 'blog.features.tips.description' | translate }}
                </p>
              </div>

              <div class="blog-feature">
                <span class="blog-feature__icon">🚀</span>
                <h3 class="blog-feature__title">
                  {{ 'blog.features.projects.title' | translate }}
                </h3>
                <p class="blog-feature__description">
                  {{ 'blog.features.projects.description' | translate }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .blog-page {
        min-height: 100vh;
        background: var(--bg-app);
        padding: 2rem 0;
      }

      .blog-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 1rem;
      }

      .blog-hero {
        text-align: center;
        margin-bottom: 4rem;
      }

      .blog-hero__title {
        font-size: 3rem;
        font-weight: 900;
        color: var(--text-primary);
        margin-bottom: 1rem;
        font-family: var(--font-display);
      }

      .blog-hero__description {
        font-size: 1.25rem;
        color: var(--text-secondary);
        max-width: 600px;
        margin: 0 auto;
        line-height: 1.6;
      }

      .blog-placeholder {
        text-align: center;
        padding: 3rem 2rem;
        background: var(--bg-surface);
        border-radius: 1rem;
        border: 1px solid var(--border-soft);
      }

      .blog-placeholder__icon {
        margin-bottom: 2rem;
      }

      .blog-placeholder__emoji {
        font-size: 4rem;
        display: block;
      }

      .blog-placeholder__title {
        font-size: 2rem;
        font-weight: 700;
        color: var(--text-primary);
        margin-bottom: 1rem;
      }

      .blog-placeholder__description {
        font-size: 1.125rem;
        color: var(--text-secondary);
        margin-bottom: 3rem;
        line-height: 1.6;
      }

      .blog-placeholder__features {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        margin-top: 3rem;
      }

      .blog-feature {
        text-align: left;
        padding: 1.5rem;
        background: var(--bg-app);
        border-radius: 0.75rem;
        border: 1px solid var(--border-soft);
      }

      .blog-feature__icon {
        font-size: 2rem;
        display: block;
        margin-bottom: 1rem;
      }

      .blog-feature__title {
        font-size: 1.25rem;
        font-weight: 600;
        color: var(--text-primary);
        margin-bottom: 0.5rem;
      }

      .blog-feature__description {
        color: var(--text-secondary);
        line-height: 1.5;
      }

      @media (max-width: 768px) {
        .blog-hero__title {
          font-size: 2rem;
        }

        .blog-placeholder__features {
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
})
export class BlogComponent implements OnInit {
  private readonly _seoService = inject(SeoService);

  ngOnInit(): void {
    this.setupSeo();
  }

  private setupSeo(): void {
    this._seoService.updateSeoFromConfig({
      titleKey: 'seo.blog.title',
      descriptionKey: 'seo.blog.description',
      keywordsKey: 'seo.blog.keywords',
      type: 'website',
    });
  }
}
