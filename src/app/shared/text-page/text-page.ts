import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-text-page',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <div class="text-page">
      <div class="text-page__container">
        <header class="text-page__header">
          <h1 class="text-page__title">
            @if (titleKey) {
              {{ titleKey | translate }}
            }
          </h1>
        </header>

        <div class="text-page__content">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./text-page.scss'],
})
export class TextPageComponent {
  @Input() titleKey = '';
}
