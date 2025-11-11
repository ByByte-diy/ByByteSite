import { Component, OnInit, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { BUTTON_PRESETS } from '../../shared/ui/button';
import { environment } from '../../../environments/environment';
import { VideoHeroButton, VideoHeroComponent } from '../../shared/video-hero/video-hero';
import { InfoCardComponent, InfoCardData } from '../../shared/info-card/info-card';
import { BenefitCardComponent, BenefitCardData } from '../../shared/benefit-card/benefit-card';
import { SeoModule } from '../../modules/seo/seo.module';
import { SeoService } from '../../modules/seo/services/seo.service';

@Component({
  selector: 'app-build',
  standalone: true,
  imports: [
    TranslateModule,
    VideoHeroComponent,
    InfoCardComponent,
    BenefitCardComponent,
    SeoModule,
  ],
  template: `
    <app-video-hero
      [title]="'build.hero.title'"
      [subtitle]="'build.hero.subtitle'"
      [videoUrl]="env.links.youtubeIntroEmbed"
      [buttons]="videoButtons"
    />

    <section class="build-page">
      <div class="build-container">
        <p class="build-description">{{ 'build.description' | translate }}</p>
      </div>
    </section>

    <section class="build-steps">
      <div class="build-container">
        <h2 class="build-steps__title">{{ 'build.steps.title' | translate }}</h2>
        <div class="build-steps__grid">
          @for (step of steps; track $index) {
            <app-info-card [data]="step" />
          }
        </div>
      </div>
    </section>

    <section class="build-docs">
      <div class="build-container">
        <h2 class="build-docs__title">{{ 'build.docs.title' | translate }}</h2>
        <p class="build-docs__description">{{ 'build.docs.description' | translate }}</p>
        <div class="build-docs__grid">
          @for (doc of docs; track $index) {
            <app-benefit-card [data]="doc" />
          }
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./build.scss'],
})
export class BuildPage implements OnInit {
  private readonly seoService = inject(SeoService);
  protected env = environment;

  ngOnInit(): void {
    this.seoService.updateSeoFromConfig({
      titleKey: 'seo.build.title',
      descriptionKey: 'seo.build.description',
      keywordsKey: 'seo.build.keywords',
      type: 'website',
    });
  }
  protected megaBtn = () => BUTTON_PRESETS.cta('build.hero.ctaMega', '🤖');
  protected nanoBtn = () => BUTTON_PRESETS.cta('build.hero.ctaNano', '🔧');
  protected videoButtons: VideoHeroButton[] = [
    {
      text: 'build.hero.ctaMega',
      icon: '🤖',
      href: this.env.links.megaBuild,
      variant: 'primary',
      size: 'lg',
    },
    {
      text: 'build.hero.ctaNano',
      icon: '🔧',
      href: this.env.links.nanoBuild,
      variant: 'accent',
      size: 'lg',
    },
  ];

  protected steps: InfoCardData[] = [
    {
      icon: '🧰',
      title: 'build.steps.items.0.title',
      description: 'build.steps.items.0.description',
      class: 'info-card--point info-card--compact',
    },
    {
      icon: '🔌',
      title: 'build.steps.items.1.title',
      description: 'build.steps.items.1.description',
      class: 'info-card--point info-card--compact',
    },
    {
      icon: '⚙️',
      title: 'build.steps.items.2.title',
      description: 'build.steps.items.2.description',
      class: 'info-card--point info-card--compact',
    },
    {
      icon: '🔋',
      title: 'build.steps.items.3.title',
      description: 'build.steps.items.3.description',
      class: 'info-card--point info-card--compact',
    },
  ];

  protected docs: BenefitCardData[] = [
    {
      icon: '📑',
      title: 'build.docs.items.0.title',
      description: 'build.docs.items.0.description',
      color: 'var(--color-primary)',
      href: this.env.links.buildGuide,
    },
    {
      icon: '💻',
      title: 'build.docs.items.1.title',
      description: 'build.docs.items.1.description',
      color: 'var(--color-success)',
      href: this.env.links.programmingGuide,
    },
    {
      icon: '🧑‍🎓',
      title: 'build.docs.items.2.title',
      description: 'build.docs.items.2.description',
      color: 'var(--color-warning)',
      href: this.env.links.lessons,
    },
  ];
}
