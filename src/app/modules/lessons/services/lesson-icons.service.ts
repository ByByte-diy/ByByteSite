import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LessonIconsService {
  private readonly platformIconMap: Record<string, string> = {
    arduino: 'assets/icons/platforms/arduino.svg',
    bybyte_mega: 'assets/icons/platforms/bybyte.svg',
    bybyte_nano: 'assets/icons/platforms/bybyte.svg',
    default: 'assets/icons/platforms/default.svg',
  };

  private readonly levelIconMap: Record<string, string> = {
    starter: 'assets/icons/levels/starter.svg',
    beginner: 'assets/icons/levels/beginner.svg',
    middle: 'assets/icons/levels/middle.svg',
    advanced: 'assets/icons/levels/advanced.svg',
    expert: 'assets/icons/levels/expert.svg',
    default: 'assets/icons/levels/default.svg',
  };

  getPlatformIcon(platform: string | null | undefined): string {
    if (!platform) {
      return this.platformIconMap['default'];
    }

    const normalized = platform.toLowerCase();
    return this.platformIconMap[normalized] ?? this.platformIconMap['default'];
  }

  getLevelIcon(level: string | null | undefined): string {
    if (!level) {
      return this.levelIconMap['default'];
    }

    const normalized = level.toLowerCase();
    return this.levelIconMap[normalized] ?? this.levelIconMap['default'];
  }
}
