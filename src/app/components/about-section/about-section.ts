import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { InfoCardComponent, InfoCardData } from '../../shared/info-card/info-card';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule, TranslateModule, InfoCardComponent],
  template: `
    <section class="about-section">
      <div class="about-container">
        <div class="about-header">
          <h2 class="about-title">{{ 'about.title' | translate }}</h2>
          <p class="about-description">{{ 'about.description' | translate }}</p>
        </div>

        <div class="robots-grid">
          @for (robot of robots(); track robot.title) {
            <app-info-card [data]="robot" />
          }
        </div>

        <div class="compatibility-info">
          <p class="compatibility-text">{{ 'about.compatibility' | translate }}</p>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./about-section.scss'],
})
export class AboutSectionComponent {
  protected robots = signal<InfoCardData[]>([
    {
      icon: '🤖',
      title: 'about.mega.title',
      subtitle: 'about.mega.subtitle',
      features: [
        'about.mega.features.0',
        'about.mega.features.1',
        'about.mega.features.2',
        'about.mega.features.3',
      ],
      class: 'info-card--mega',
    },
    {
      icon: '🔧',
      title: 'about.nano.title',
      subtitle: 'about.nano.subtitle',
      features: [
        'about.nano.features.0',
        'about.nano.features.1',
        'about.nano.features.2',
        'about.nano.features.3',
      ],
      class: 'info-card--nano',
    },
  ]);
}
