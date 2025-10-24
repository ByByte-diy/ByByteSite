import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonComponent } from '../../shared/ui/button/button';
import { Title, Meta } from '@angular/platform-browser';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [TranslateModule, ButtonComponent],
  template: `
    <div class="not-found">
      <div class="not-found__container">
        <div class="not-found__content">
          <div class="not-found__icon">
            <span class="not-found__emoji">🔍</span>
          </div>
          <h1 class="not-found__title">{{ 'notFound.title' | translate }}</h1>
          <p class="not-found__description">{{ 'notFound.description' | translate }}</p>
          <div class="not-found__actions">
            <app-button
              [data]="{
                text: 'notFound.backHome',
                href: '/',
                variant: 'primary',
                size: 'lg',
              }"
            />
            <button class="btn btn-outline btn-lg" (click)="goBack()">
              {{ 'notFound.goBack' | translate }}
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .not-found {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--bg-app);
        padding: 2rem 1rem;
      }

      .not-found__container {
        max-width: 600px;
        width: 100%;
      }

      .not-found__content {
        text-align: center;
      }

      .not-found__icon {
        margin-bottom: 2rem;
      }

      .not-found__emoji {
        font-size: 4rem;
        display: block;
      }

      .not-found__title {
        font-size: 2.5rem;
        font-weight: 900;
        color: var(--text-primary);
        margin-bottom: 1rem;
        font-family: var(--font-display);
      }

      .not-found__description {
        font-size: 1.125rem;
        color: var(--text-secondary);
        margin-bottom: 2rem;
        line-height: 1.6;
      }

      .not-found__actions {
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;
      }

      .btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0.75rem 1.5rem;
        border-radius: 0.5rem;
        font-weight: 500;
        text-decoration: none;
        transition: all 0.2s;
        border: 1px solid transparent;
        cursor: pointer;
        font-size: 1rem;
      }

      .btn-outline {
        background: transparent;
        border-color: var(--color-primary);
        color: var(--color-primary);
      }

      .btn-outline:hover {
        background: var(--color-primary);
        color: white;
      }

      .btn-lg {
        padding: 1rem 2rem;
        font-size: 1.125rem;
      }

      @media (max-width: 640px) {
        .not-found__actions {
          flex-direction: column;
          align-items: center;
        }

        .not-found__actions app-button,
        .not-found__actions .btn {
          width: 100%;
          max-width: 300px;
        }
      }
    `,
  ],
})
export class NotFoundComponent implements OnInit {
  private readonly _router = inject(Router);
  private readonly _title = inject(Title);
  private readonly _meta = inject(Meta);
  private readonly _seoService = inject(SeoService);

  ngOnInit(): void {
    this.setupSeo();
  }

  private setupSeo(): void {
    const title = `404 - ${this._seoService.siteName}`;
    const description = 'The page you are looking for does not exist or has been moved.';
    const url = `${this._seoService.siteUrl}/404`;

    // Update page title
    this._title.setTitle(title);

    // Update meta tags
    this._meta.updateTag({ name: 'description', content: description });
    this._meta.updateTag({ name: 'robots', content: 'noindex, nofollow' });
    this._meta.updateTag({ name: 'viewport', content: 'width=device-width, initial-scale=1' });

    // Open Graph tags
    this._meta.updateTag({ property: 'og:title', content: title });
    this._meta.updateTag({ property: 'og:description', content: description });
    this._meta.updateTag({ property: 'og:url', content: url });
    this._meta.updateTag({ property: 'og:type', content: 'website' });
    this._meta.updateTag({ property: 'og:site_name', content: this._seoService.siteName });

    // Twitter Card tags
    this._meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this._meta.updateTag({ name: 'twitter:title', content: title });
    this._meta.updateTag({ name: 'twitter:description', content: description });
  }

  protected goBack = () => {
    window.history.back();
  };
}
