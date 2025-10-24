import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  /**
   * Get site name from environment
   */
  get siteName(): string {
    return environment.siteName;
  }

  /**
   * Get site URL from environment
   */
  get siteUrl(): string {
    return environment.siteUrl;
  }

  /**
   * Get site description from environment
   */
  get siteDescription(): string {
    return environment.siteDescription;
  }

  /**
   * Generate lesson URL
   */
  generateLessonUrl(platform: string, level: string, slug: string): string {
    return `${this.siteUrl}/learn/${platform}/${level}/${slug}`;
  }

  /**
   * Generate lesson title
   */
  generateLessonTitle(lessonTitle: string): string {
    return `${lessonTitle} - ${this.siteName}`;
  }

  /**
   * Generate lesson description
   */
  generateLessonDescription(lessonTitle: string, level: string, platforms: string[]): string {
    const platformList = platforms.length > 0 ? platforms.join(', ') : 'Arduino';
    return `Learn ${lessonTitle} with ${this.siteName}. ${level} level lesson for ${platformList}.`;
  }
}
