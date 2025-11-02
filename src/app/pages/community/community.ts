import { Component, signal, OnInit, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { BenefitCardComponent, BenefitCardData } from '../../shared/benefit-card/benefit-card';
import { ButtonComponent, BUTTON_PRESETS } from '../../shared/ui/button';
import { environment } from '../../../environments/environment';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-community',
  standalone: true,
  imports: [TranslateModule, BenefitCardComponent, ButtonComponent],
  template: `
    <div class="community-page">
      <div class="community-container">
        <header class="community-header">
          <div class="community-hero">
            <div class="community-hero__icon">
              <div class="hero-icon">
                <img src="img/community.png" alt="community" class="hero-icon-img" />
              </div>
            </div>
            <div class="community-hero__content">
              <h1 class="community-title">{{ 'community.hero.title' | translate }}</h1>
              <p class="community-description">{{ 'community.hero.description' | translate }}</p>
              <p class="community-tagline">{{ 'community.hero.tagline' | translate }}</p>
              <app-button [data]="joinButtonData()" />
            </div>
          </div>
        </header>

        <div class="community-content">
          <section class="benefits-section">
            <h2 class="benefits-title">{{ 'community.benefits.title' | translate }}</h2>
            <div class="benefits-grid">
              @for (benefit of benefits(); track $index) {
                <app-benefit-card [data]="benefit" />
              }
            </div>
          </section>

          <section class="contribute-section">
            <h2 class="contribute-title">{{ 'community.contribute.title' | translate }}</h2>
            <div class="contribute-content">
              <ul class="contribute-list">
                @for (item of contributeItems(); track $index) {
                  <li class="contribute-item">
                    <span class="contribute-item__icon">{{ item.icon }}</span>
                    <span class="contribute-item__text">{{ item.text | translate }}</span>
                  </li>
                }
              </ul>
              <div class="contribute-cta">
                <app-button [data]="contributeButtonData()" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./community.scss'],
})
export class Community implements OnInit {
  private readonly seoService = inject(SeoService);

  ngOnInit(): void {
    this.seoService.updateSeoFromConfig({
      titleKey: 'seo.community.title',
      descriptionKey: 'seo.community.description',
      keywordsKey: 'seo.community.keywords',
      type: 'website',
    });
  }

  protected benefits = signal<BenefitCardData[]>([
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

  protected contributeItems = signal([
    {
      icon: '💻',
      text: 'community.contribute.codeExample',
    },
    {
      icon: '📚',
      text: 'community.contribute.documentation',
    },
    {
      icon: '🧪',
      text: 'community.contribute.testing',
    },
    {
      icon: '💡',
      text: 'community.contribute.ideas',
    },
  ]);

  protected joinButtonData = signal(
    BUTTON_PRESETS.externalLink('community.hero.joinButton', environment.links.discord, '✌️'),
  );

  protected contributeButtonData = signal(
    BUTTON_PRESETS.externalLink(
      'community.contribute.button',
      environment.links.contributeGuide,
      '👉',
    ),
  );
}
