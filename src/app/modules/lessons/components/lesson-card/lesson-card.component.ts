import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LessonMeta } from '../../../../models/lesson.model';
import { LessonIconsService } from '../../../../services/lesson-icons.service';
import { RouterService } from '../../../../services/router.service';

@Component({
  selector: 'app-lesson-card',
  templateUrl: './lesson-card.component.html',
  styleUrls: ['./lesson-card.component.scss'],
  standalone: true,
  imports: [CommonModule, TranslateModule],
})
export class LessonCardComponent {
  @Input() lesson!: LessonMeta;
  private readonly routerService = inject(RouterService);
  public readonly iconsService = inject(LessonIconsService);

  /**
   * Move to lesson page with language prefix
   */
  navigateToLesson(): void {
    const lessonPath = `/learn/${this.lesson.platforms[0]}/${this.lesson.level}/${this.lesson.slug}`;
    this.routerService.navigateTo(lessonPath);
  }
}
