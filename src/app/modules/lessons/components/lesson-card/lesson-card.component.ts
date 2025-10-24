import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LessonMeta } from '../../../../models/lesson.model';
import { LessonIconsService } from '../../../../services/lesson-icons.service';

@Component({
  selector: 'app-lesson-card',
  templateUrl: './lesson-card.component.html',
  styleUrls: ['./lesson-card.component.scss'],
  standalone: true,
  imports: [CommonModule, TranslateModule],
})
export class LessonCardComponent {
  @Input() lesson!: LessonMeta;

  constructor(
    private router: Router,
    public iconsService: LessonIconsService,
  ) {}

  /**
   * Move to lesson page
   */
  navigateToLesson(): void {
    this.router.navigate(['/learn', this.lesson.platforms[0], this.lesson.level, this.lesson.slug]);
  }
}
