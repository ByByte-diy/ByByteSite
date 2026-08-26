import {
  Component,
  HostListener,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MarkdownModule } from 'ngx-markdown';
import { ParsedLesson, StepAction } from '../../models/lesson.model';
import { LessonParserService } from '../../services/lesson-parser.service';
import { LessonStepEngine } from '../../services/lesson-step-engine.service';
import { LessonViewComponent } from '../lesson-view/lesson-view.component';
import { ButtonComponent } from '../../../../shared/ui/button/button';

@Component({
  selector: 'app-lesson-step-flow',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    MarkdownModule,
    LessonViewComponent,
    ButtonComponent,
  ],
  providers: [LessonStepEngine],
  templateUrl: './lesson-step-flow.component.html',
  styleUrls: ['./lesson-step-flow.component.scss'],
})
export class LessonStepFlowComponent implements OnChanges, OnDestroy {
  @Input({ required: true }) parsedLesson!: ParsedLesson;
  @Input({ required: true }) routeParams!: { lang: string; platform: string; level: string };

  protected readonly engine = inject(LessonStepEngine);
  private readonly _parser = inject(LessonParserService);

  protected readonly showFullLesson = signal(false);
  protected readonly isHintModalOpen = signal(false);
  protected readonly hintModalContent = signal('');

  protected readonly fullLessonContent = signal('');

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['parsedLesson'] || changes['routeParams']) {
      if (this.parsedLesson && this.routeParams) {
        this.showFullLesson.set(false);
        this.closeHintModal();
        this.fullLessonContent.set(this._parser.getFullLessonContent(this.parsedLesson));
        this.engine.init(this.parsedLesson, this.routeParams);
      }
    }
  }

  ngOnDestroy(): void {
    this.engine.destroy();
  }

  startLesson(): void {
    this.showFullLesson.set(false);
    this.engine.startLesson();
  }

  onAction(action: StepAction): void {
    if (action.hint) {
      this.hintModalContent.set(action.hint);
      this.isHintModalOpen.set(true);
    }
    this.engine.handleAction(action);
  }

  advanceStep(): void {
    this.engine.advanceStep();
  }

  restartLesson(): void {
    this.showFullLesson.set(false);
    this.closeHintModal();
    this.engine.restart();
  }

  viewFullLesson(): void {
    this.closeHintModal();
    this.showFullLesson.set(true);
  }

  backFromFullLesson(): void {
    this.showFullLesson.set(false);
  }

  closeHintModal(): void {
    this.isHintModalOpen.set(false);
    this.hintModalContent.set('');
  }

  isCustomLabel(action: StepAction): boolean {
    return !!action.label && !action.label.startsWith('lessons.');
  }

  formatTimer(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }

  @HostListener('window:keydown', ['$event'])
  handleKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape' && this.isHintModalOpen()) {
      event.preventDefault();
      this.closeHintModal();
    }
  }
}
