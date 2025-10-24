import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonComponent, BUTTON_PRESETS } from '../../shared/ui/button';
import type { ButtonData, ButtonVariant } from '../../shared/ui/button';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-cta-section',
  standalone: true,
  imports: [CommonModule, TranslateModule, ButtonComponent],
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
          <app-button [data]="githubButtonData()" />
          <app-button [data]="lessonsButtonData()" />
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

  protected githubButtonData = signal<ButtonData>({
    ...BUTTON_PRESETS.externalLink('cta.buttons.github', environment.links.githubOrg, '🔵'),
    variant: 'primary' as ButtonVariant,
  });

  protected lessonsButtonData = signal<ButtonData>({
    ...BUTTON_PRESETS.link('cta.buttons.lessons', '/learn', '🟠'),
    variant: 'accent' as ButtonVariant,
  });
}
