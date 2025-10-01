import { Component, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-community',
  standalone: true,
  imports: [TranslateModule],
  template: `
    <div class="community-page">
      <div class="community-container">
        <header class="community-header">
          <div class="community-hero">
            <div class="community-hero__icon">
              <div class="hero-icon">
                <img src="/img/community.png" alt="community" class="hero-icon-img" />
              </div>
            </div>
            <div class="community-hero__content">
              <h1 class="community-title">{{ 'community.hero.title' | translate }}</h1>
              <p class="community-description">{{ 'community.hero.description' | translate }}</p>
              <p class="community-tagline">{{ 'community.hero.tagline' | translate }}</p>
              <a
                class="community-join-btn"
                href="https://discord.com"
                target="_blank"
                rel="noopener"
              >
                <span class="join-icon">✌️</span>
                {{ 'community.hero.joinButton' | translate }}
              </a>
            </div>
          </div>
        </header>

        <div class="community-content">
          <section class="benefits-section">
            <h2 class="benefits-title">{{ 'community.benefits.title' | translate }}</h2>
            <div class="benefits-grid">
              @for (benefit of benefits(); track $index) {
                <div class="benefit-card" [style.background-color]="benefit.color">
                  <div class="benefit-card__icon">
                    <span class="benefit-icon">{{ benefit.icon }}</span>
                  </div>
                  <div class="benefit-card__content">
                    <h3 class="benefit-card__title">{{ benefit.title | translate }}</h3>
                    <p class="benefit-card__description">{{ benefit.description | translate }}</p>
                  </div>
                </div>
              }
            </div>
          </section>

          <div class="coming-soon">
            <div class="coming-soon-icon">🚧</div>
            <h2 class="coming-soon-title">{{ 'community.comingSoon.title' | translate }}</h2>
            <p class="coming-soon-description">
              {{ 'community.comingSoon.description' | translate }}
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./community.scss'],
})
export class Community {
  protected benefits = signal([
    {
      icon: '🤝',
      title: 'community.benefits.support.title',
      description: 'community.benefits.support.description',
      color: 'var(--color-primary)',
    },
    {
      icon: '💡',
      title: 'community.benefits.ideas.title',
      description: 'community.benefits.ideas.description',
      color: 'var(--color-secondary)',
    },
    {
      icon: '📂',
      title: 'community.benefits.resources.title',
      description: 'community.benefits.resources.description',
      color: 'var(--color-accent)',
    },
    {
      icon: '🚀',
      title: 'community.benefits.growth.title',
      description: 'community.benefits.growth.description',
      color: 'var(--color-success)',
    },
  ]);
}
