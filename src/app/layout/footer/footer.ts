import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SocialLinks } from '../../shared/social-links/social-links.js';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, SocialLinks],
  template: `
    <footer class="footer">
      <div class="footer__inner">
        <div class="footer__left">
          <div class="footer__legal">
            <span>©{{ currentYear }} All rights reserved | БАБАЙ (ByByte.diy)</span>
          </div>
          <nav class="footer__links">
            <a href="/terms" class="footer__link">Terms & Conditions</a>
            <span class="footer__sep">·</span>
            <a href="/privacy" class="footer__link">Privacy Policy</a>
          </nav>
        </div>
        <div class="footer__right">
          <app-social-links />
        </div>
      </div>
    </footer>
  `,
  styleUrls: ['./footer.scss'],
})
export class FooterComponent {
  protected readonly currentYear = new Date().getFullYear();
}
