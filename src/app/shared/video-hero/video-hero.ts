import { Component, Input, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ButtonComponent } from '../ui/button/button';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HttpParams } from '@angular/common/http';

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

type YoutubeEmbedParamsT = {
  autoplay?: boolean;
  mute?: boolean;
  playsinline?: boolean;
  controls?: boolean;
  modestbranding?: boolean;
  iv_load_policy?: number;
  cc_load_policy?: number;
  cc_lang_pref?: string;
  fs?: boolean;
  disablekb?: boolean;
  loop: boolean;
  playlist?: string;
  start?: number; // in seconds
  end?: number; // in seconds
};

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
            loading="lazy"
            (error)="onVideoError($event)"
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
  private readonly _translate = inject(TranslateService);
  protected _safeUrl!: SafeResourceUrl;

  ngOnInit(): void {
    this._safeUrl = this._buildSafeUrl(this.videoUrl);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['videoUrl']) {
      this._safeUrl = this._buildSafeUrl(this.videoUrl);
    }
  }

  private _buildSafeUrl(raw: string): SafeResourceUrl {
    const base = raw || 'https://www.youtube.com/embed/';
    const hasQuery = base.includes('?');
    const sep = hasQuery ? '&' : '?';
    // Try to extract video id for proper loop
    let vid = '';
    const m = base.match(/\/embed\/([^?&#/]+)/);
    if (m && m[1]) vid = m[1];
    const embedParams = {
      autoplay: true,
      mute: true,
      playsinline: true,
      controls: false,
      modestbranding: true,
      iv_load_policy: 3,
      fs: false,
      disablekb: true,
      start: 120,
      cc_load_policy: 0,
    } as YoutubeEmbedParamsT;
    if (vid) {
      embedParams.loop = true;
      embedParams.playlist = vid;
    }
    const lang = this._translate.getCurrentLang();
    if (lang) embedParams.cc_lang_pref = lang;

    const params = new HttpParams({ fromObject: embedParams });
    const full = `${base}${sep}${params.toString()}`;
    return this._sanitizer.bypassSecurityTrustResourceUrl(full);
  }

  protected onVideoError(event: Event): void {
    console.warn('YouTube video failed to load, this is normal when ad blockers are active');
  }
}
