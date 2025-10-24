import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { InfoCardComponent, InfoCardData } from '../../shared/info-card/info-card';

@Component({
  selector: 'app-why-important',
  standalone: true,
  imports: [CommonModule, TranslateModule, InfoCardComponent],
  template: `
    <section class="why-important-section">
      <div class="why-important-container">
        <div class="why-important-header">
          <h2 class="why-important-title">{{ 'whyImportant.title' | translate }}</h2>
        </div>

        <div class="points-grid">
          @for (point of points(); track $index) {
            <app-info-card [data]="point" />
          }
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./why-important.scss'],
})
export class WhyImportantComponent {
  protected points = signal<InfoCardData[]>([
    {
      icon: '📚',
      title: 'whyImportant.points.0.title',
      description: 'whyImportant.points.0.description',
      class: 'info-card--point info-card--compact',
    },
    {
      icon: '🛠️',
      title: 'whyImportant.points.1.title',
      description: 'whyImportant.points.1.description',
      class: 'info-card--point info-card--compact',
    },
    {
      icon: '🌍',
      title: 'whyImportant.points.2.title',
      description: 'whyImportant.points.2.description',
      class: 'info-card--point info-card--compact',
    },
    {
      icon: '🚀',
      title: 'whyImportant.points.3.title',
      description: 'whyImportant.points.3.description',
      class: 'info-card--point info-card--compact',
    },
  ]);
}
