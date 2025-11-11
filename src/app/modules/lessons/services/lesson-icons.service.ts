import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LessonIconsService {
  getPlatformIcon(platform: string): string {
    const icons: Record<string, string> = {
      arduino: '🔌',
      raspberry: '🍓',
      esp8266: '📡',
      esp32: '📡',
      default: '🤖',
    };

    return icons[platform] || icons['default'];
  }

  getLevelIcon(level: string): string {
    const icons: Record<string, string> = {
      beginner: '🟢',
      intermediate: '🟡',
      advanced: '🔴',
      default: '⚪',
    };

    return icons[level] || icons['default'];
  }
}
