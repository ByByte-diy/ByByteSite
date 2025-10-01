import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <section class="about-section">
      <div class="about-container">
        <div class="about-header">
          <h2 class="about-title">{{ 'about.title' | translate }}</h2>
          <p class="about-description">{{ 'about.description' | translate }}</p>
        </div>

        <div class="robots-grid">
          @for (robot of robots(); track robot.key) {
            <div [ngClass]="['robot-card', robot.class]">
              <div class="robot-card__image">
                <div class="image-placeholder">
                  <span class="placeholder-icon">{{ robot.icon }}</span>
                </div>
              </div>
              <div class="robot-card__content">
                <h3 class="robot-card__title">{{ 'about.' + robot.key + '.title' | translate }}</h3>
                <p class="robot-card__subtitle">
                  {{ 'about.' + robot.key + '.subtitle' | translate }}
                </p>
                <ul class="robot-card__features">
                  @for (i of featureIndexes(); track i) {
                    <li class="feature-item">
                      <span class="feature-icon">✓</span>
                      <span class="feature-text">{{
                        'about.' + robot.key + '.features.' + i | translate
                      }}</span>
                    </li>
                  }
                </ul>
              </div>
            </div>
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
  protected robots = signal([
    { key: 'mega', icon: '🤖', class: 'robot-card--mega' },
    { key: 'nano', icon: '🔧', class: 'robot-card--nano' },
  ]);

  protected featureIndexes = signal([0, 1, 2, 3]);
}
