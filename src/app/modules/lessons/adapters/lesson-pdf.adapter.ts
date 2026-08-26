import {
  ParsedLesson,
  LessonProgress,
} from '../models/lesson.model';
import { LessonParserService } from '../services/lesson-parser.service';
import { PdfExportSource, PdfSection } from '../../pdf-export/models/pdf-export-source.model';

export interface LessonPdfContext {
  lang: string;
  platform: string;
  level: string;
  progress: LessonProgress | null;
}

export function toPdfExportSource(
  parsedLesson: ParsedLesson,
  parser: LessonParserService,
  context: LessonPdfContext,
): PdfExportSource {
  const sections = buildSections(parsedLesson, parser);
  const fileName = sanitizeFileName(`${parsedLesson.slug}-${context.platform}-${context.level}.pdf`);

  return {
    title: parsedLesson.title,
    fileName,
    sections,
    metadata: {
      platform: context.platform,
      level: context.level,
      lang: context.lang,
      version: parsedLesson.version,
    },
    filterContext: buildFilterContext(parsedLesson, context.progress),
  };
}

function buildSections(parsedLesson: ParsedLesson, parser: LessonParserService): PdfSection[] {
  if (parsedLesson.mode === 'stepped') {
    const sections: PdfSection[] = [];

    if (parsedLesson.introStep) {
      sections.push({
        id: 'intro',
        markdownContent: parsedLesson.introStep.content,
      });
    }

    parsedLesson.taskSteps.forEach((step) => {
      sections.push({
        id: step.id,
        title: `Step ${step.id}`,
        markdownContent: step.content,
      });
    });

    return sections;
  }

  return [
    {
      id: 'full',
      markdownContent: parser.getFullLessonContent(parsedLesson),
    },
  ];
}

function buildFilterContext(
  parsedLesson: ParsedLesson,
  progress: LessonProgress | null,
) {
  if (!progress || parsedLesson.mode !== 'stepped') {
    return undefined;
  }

  const completedStepIds = new Set(Object.keys(progress.stepStates));

  parsedLesson.taskSteps.forEach((step, index) => {
    if (index < progress.currentStepIndex) {
      completedStepIds.add(step.id);
    }
  });

  if (progress.phase === 'completed') {
    parsedLesson.taskSteps.forEach((step) => completedStepIds.add(step.id));
  }

  let currentStepId: string | undefined;
  if (progress.phase === 'intro') {
    currentStepId = 'intro';
  } else if (progress.phase === 'step') {
    currentStepId = parsedLesson.taskSteps[progress.currentStepIndex]?.id;
  } else if (progress.phase === 'completed') {
    currentStepId = parsedLesson.taskSteps[parsedLesson.taskSteps.length - 1]?.id;
  }

  return {
    introCompleted: progress.introCompleted,
    completedStepIds: Array.from(completedStepIds),
    currentStepId,
  };
}

function sanitizeFileName(name: string): string {
  return name.replace(/[^a-zA-Z0-9._-]+/g, '-').replace(/-+/g, '-');
}
