import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-why-important',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <section class="why-important-section">
      <div class="why-important-container">
        <div class="why-important-header">
          <h2 class="why-important-title">{{ 'whyImportant.title' | translate }}</h2>
        </div>

        <div class="points-grid">
          @for (point of points(); track $index) {
            <div class="point-card">
              <div class="point-card__image">
                <div class="image-placeholder">
                  <span class="placeholder-icon">{{ point.icon }}</span>
                </div>
              </div>
              <div class="point-card__content">
                <h3 class="point-card__title">{{ point.title | translate }}</h3>
                <p class="point-card__description">{{ point.description | translate }}</p>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./why-important.scss'],
})
export class WhyImportantComponent {
  protected points = signal([
    {
      icon: '📚',
      title: 'whyImportant.points.0.title',
      description: 'whyImportant.points.0.description',
    },
    {
      icon: '🛠️',
      title: 'whyImportant.points.1.title',
      description: 'whyImportant.points.1.description',
    },
    {
      icon: '🌍',
      title: 'whyImportant.points.2.title',
      description: 'whyImportant.points.2.description',
    },
    {
      icon: '🚀',
      title: 'whyImportant.points.3.title',
      description: 'whyImportant.points.3.description',
    },
  ]);
}
