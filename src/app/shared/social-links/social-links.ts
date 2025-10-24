import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-social-links',
  standalone: true,
  imports: [CommonModule],
  template: `
    <a
      class="social"
      [href]="env.links.instagram"
      target="_blank"
      rel="noopener"
      aria-label="Instagram"
    >
      <span class="social-icon" style="--icon: url(/icons/instagram.svg)"></span>
    </a>
    <a
      class="social"
      [href]="env.links.facebook"
      target="_blank"
      rel="noopener"
      aria-label="Facebook"
    >
      <span class="social-icon" style="--icon: url(/icons/facebook.svg)"></span>
    </a>
    <a
      class="social"
      [href]="env.links.telegram"
      target="_blank"
      rel="noopener"
      aria-label="Telegram"
    >
      <span class="social-icon" style="--icon: url(/icons/telegram.svg)"></span>
    </a>
    <a
      class="social"
      [href]="env.links.discord"
      target="_blank"
      rel="noopener"
      aria-label="Discord"
    >
      <span class="social-icon" style="--icon: url(/icons/discord.svg)"></span>
    </a>
    <a
      class="social"
      [href]="env.links.githubOrg"
      target="_blank"
      rel="noopener"
      aria-label="GitHub"
    >
      <span class="social-icon" style="--icon: url(/icons/github.svg)"></span>
    </a>
  `,
  styles: [
    `
      :host {
        display: flex;
        gap: 10px;
        color: var(--text-secondary);
      }
    `,
    `
      .social {
        color: var(--text-secondary);
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        border-radius: 8px;
        transition: all 0.2s;
      }
    `,
    `
      .social:hover {
        color: var(--text-primary);
        background: color-mix(in oklab, var(--btn-primary-bg) 10%, transparent);
      }
    `,
    `
      .social-icon {
        width: 20px;
        height: 20px;
        display: inline-block;
        background-color: currentColor;
        -webkit-mask: var(--icon) no-repeat center/contain;
        mask: var(--icon) no-repeat center/contain;
      }
    `,
  ],
})
export class SocialLinks {
  protected env = environment;
}
