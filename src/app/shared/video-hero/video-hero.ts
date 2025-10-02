import { Component, Input, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonComponent } from '../ui/button/button';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

export interface VideoHeroButton {
  href: string;
  text: string; // i18n key or plain text
  icon?: string;
  variant?:
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'success'
    | 'warning'
    | 'danger'
    | 'ghost'
    | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  target?: string;
}

@Component({
  selector: 'app-video-hero',
  standalone: true,
  imports: [CommonModule, TranslateModule, ButtonComponent],
  template: `
    <section class="video-hero">
      <div class="video-hero__content">
        <h1 class="video-hero__title">{{ title | translate }}</h1>
        <p class="video-hero__subtitle">{{ subtitle | translate }}</p>
        @if (buttons.length) {
          <div class="video-hero__actions">
            @for (b of buttons; track b) {
              <app-button
                [data]="{
                  text: b.text,
                  icon: b.icon,
                  href: b.href,
                  target: b.target,
                  variant: b.variant || 'primary',
                  size: b.size || 'lg',
                }"
              />
            }
          </div>
        }
      </div>
      <div class="video-hero__media">
        <div class="video-hero__video">
          <iframe
            class="video-hero__iframe"
            [src]="_safeUrl"
            title="Video"
            frameborder="0"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./video-hero.scss'],
})
export class VideoHeroComponent implements OnInit, OnChanges {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() videoUrl: string = '';
  @Input() buttons: ReadonlyArray<VideoHeroButton> = [];

  private readonly _sanitizer = inject(DomSanitizer);
  protected _safeUrl!: SafeResourceUrl;

  ngOnInit(): void {
    this._safeUrl = this.buildSafeUrl(this.videoUrl);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['videoUrl']) {
      this._safeUrl = this.buildSafeUrl(this.videoUrl);
    }
  }

  private buildSafeUrl(raw: string): SafeResourceUrl {
    const base = raw || 'https://www.youtube.com/embed/';
    const hasQuery = base.includes('?');
    const sep = hasQuery ? '&' : '?';
    // Try to extract video id for proper loop
    let vid = '';
    const m = base.match(/\/embed\/([^?&#/]+)/);
    if (m && m[1]) vid = m[1];
    const loopParams = vid ? `&loop=1&playlist=${vid}` : '';
    const full = `${base}${sep}autoplay=1&mute=1&playsinline=1&controls=0&rel=0&modestbranding=1${loopParams}`;
    return this._sanitizer.bypassSecurityTrustResourceUrl(full);
  }
}
