import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

export interface InfoCardData {
  icon: string;
  title: string;
  subtitle?: string;
  description?: string;
  features?: string[];
  color?: string;
  class?: string;
}

@Component({
  selector: 'app-info-card',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <div class="info-card" [ngClass]="data.class" [style.background-color]="data.color">
      <div class="info-card__image">
        <div class="image-placeholder">
          <span class="placeholder-icon">{{ data.icon }}</span>
        </div>
      </div>
      <div class="info-card__content">
        <h3 class="info-card__title">{{ data.title | translate }}</h3>
        @if (data.subtitle) {
          <p class="info-card__subtitle">{{ data.subtitle | translate }}</p>
        }
        @if (data.description) {
          <p class="info-card__description">{{ data.description | translate }}</p>
        }
        @if (data.features && data.features.length > 0) {
          <ul class="info-card__features">
            @for (feature of data.features; track $index) {
              <li class="feature-item">
                <span class="feature-icon">✓</span>
                <span class="feature-text">{{ feature | translate }}</span>
              </li>
            }
          </ul>
        }
      </div>
    </div>
  `,
  styleUrls: ['./info-card.scss'],
})
export class InfoCardComponent {
  @Input({ required: true }) data!: InfoCardData;
}
