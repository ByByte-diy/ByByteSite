import { Injectable } from '@angular/core';

/**
 * Сервіс для отримання іконок платформ та рівнів складності уроків
 */
@Injectable({
  providedIn: 'root',
})
export class LessonIconsService {
  /**
   * Повертає іконку для платформи
   */
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

  /**
   * Повертає іконку для рівня складності
   */
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
