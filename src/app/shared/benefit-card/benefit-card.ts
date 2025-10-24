import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

export interface BenefitCardData {
  icon: string;
  title: string;
  description: string;
  color: string;
  href?: string;
}

@Component({
  selector: 'app-benefit-card',
  standalone: true,
  imports: [TranslateModule],
  template: `
    @if (data.href) {
      <a
        class="benefit-card benefit-card--link"
        [style.background-color]="data.color"
        [href]="data.href"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div class="benefit-card__icon">
          <span class="benefit-icon">{{ data.icon }}</span>
        </div>
        <div class="benefit-card__content">
          <h3 class="benefit-card__title">{{ data.title | translate }}</h3>
          <p class="benefit-card__description">{{ data.description | translate }}</p>
        </div>
      </a>
    } @else {
      <div class="benefit-card" [style.background-color]="data.color">
        <div class="benefit-card__icon">
          <span class="benefit-icon">{{ data.icon }}</span>
        </div>
        <div class="benefit-card__content">
          <h3 class="benefit-card__title">{{ data.title | translate }}</h3>
          <p class="benefit-card__description">{{ data.description | translate }}</p>
        </div>
      </div>
    }
  `,
  styleUrls: ['./benefit-card.scss'],
})
export class BenefitCardComponent {
  @Input({ required: true }) data!: BenefitCardData;
}
