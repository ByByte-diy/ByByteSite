import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'success'
  | 'warning'
  | 'danger'
  | 'ghost'
  | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

export interface ButtonData {
  text: string;
  icon?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  href?: string;
  target?: string;
  type?: 'button' | 'submit' | 'reset';
}

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    @if (data.href) {
      <a
        class="btn"
        [ngClass]="getButtonClasses()"
        [href]="data.href"
        [target]="data.target"
        [attr.rel]="data.target === '_blank' ? 'noopener' : null"
      >
        @if (data.icon && !data.loading) {
          <span class="btn__icon">{{ data.icon }}</span>
        }
        @if (data.loading) {
          <span class="btn__spinner">⟳</span>
        }
        <span class="btn__text">{{ data.text | translate }}</span>
      </a>
    } @else {
      <button
        class="btn"
        [ngClass]="getButtonClasses()"
        [type]="data.type || 'button'"
        [disabled]="data.disabled || data.loading"
      >
        @if (data.icon && !data.loading) {
          <span class="btn__icon">{{ data.icon }}</span>
        }
        @if (data.loading) {
          <span class="btn__spinner">⟳</span>
        }
        <span class="btn__text">{{ data.text | translate }}</span>
      </button>
    }
  `,
  styleUrls: ['./button.scss'],
})
export class ButtonComponent {
  @Input({ required: true }) data!: ButtonData;

  getButtonClasses(): string {
    const classes = [];

    // Variant
    classes.push(`btn--${this.data.variant || 'primary'}`);

    // Size
    classes.push(`btn--${this.data.size || 'md'}`);

    // States
    if (this.data.disabled) classes.push('btn--disabled');
    if (this.data.loading) classes.push('btn--loading');

    return classes.join(' ');
  }
}
