import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-cta-section',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <section class="cta-section">
      <div class="cta-container">
        <div class="cta-header">
          <h2 class="cta-title">{{ 'cta.title' | translate }}</h2>
        </div>

        <div class="steps-list">
          @for (step of steps(); track $index) {
            <div class="step-item">
              <div class="step-icon">
                <img [src]="step.icon" [alt]="step.title | translate" class="step-icon-img" />
              </div>
              <div class="step-content">
                <p class="step-title">{{ step.title | translate }}</p>
              </div>
            </div>
          }
        </div>

        <div class="cta-buttons">
          <a
            href="https://github.com/ByByte-diy"
            target="_blank"
            rel="noopener"
            class="cta-button cta-button--github"
          >
            {{ 'cta.buttons.github' | translate }}
          </a>
          <a href="/learn" class="cta-button cta-button--lessons">
            {{ 'cta.buttons.lessons' | translate }}
          </a>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./cta-section.scss'],
})
export class CtaSectionComponent {
  protected steps = signal([
    {
      icon: '/icons/download.svg',
      title: 'cta.steps.0.title',
    },
    {
      icon: '/icons/electronics.svg',
      title: 'cta.steps.1.title',
    },
    {
      icon: '/icons/code.svg',
      title: 'cta.steps.2.title',
    },
  ]);
}
