import { Injectable } from '@angular/core';
import {
  Lesson,
  LessonStep,
  LessonStepMode,
  ParsedLesson,
  StepAction,
  StepUnlockMode,
} from '../models/lesson.model';

interface StepMarker {
  id: string;
  metaYaml: string;
  contentStart: number;
}

const STEP_MARKER_REGEX = /<!--\s*step:([\w-]+)(?:\s*\r?\n([\s\S]*?))?\s*-->/g;
const VALID_UNLOCK_MODES: StepUnlockMode[] = ['immediate', 'next', 'timer'];

@Injectable({
  providedIn: 'root',
})
export class LessonParserService {
  parse(lesson: Lesson): ParsedLesson {
    const { frontmatter, body } = this._splitFrontmatter(lesson.content);
    const mode = this._resolveMode(frontmatter);
    const markers = this._findStepMarkers(body);

    if (mode === 'linear' || markers.length === 0) {
      return {
        ...lesson,
        mode: 'linear',
        introStep: null,
        taskSteps: [],
      };
    }

    const steps = this._buildSteps(body, markers);
    const introStep = steps.find((step) => step.id === 'intro') ?? null;
    const taskSteps = steps.filter((step) => step.id !== 'intro');

    if (taskSteps.length === 0) {
      return {
        ...lesson,
        mode: 'linear',
        introStep: null,
        taskSteps: [],
      };
    }

    return {
      ...lesson,
      mode: 'stepped',
      introStep,
      taskSteps,
    };
  }

  getFullLessonContent(lesson: Lesson): string {
    const { body } = this._splitFrontmatter(lesson.content);
    const withoutMarkers = body.replace(/<!--\s*step:[\w-]+(?:[\s\S]*?)-->\s*/g, '');
    return withoutMarkers.trim();
  }

  private _splitFrontmatter(content: string): { frontmatter: string; body: string } {
    if (!content.startsWith('---')) {
      return { frontmatter: '', body: content };
    }

    const endOfFrontmatter = content.indexOf('---', 3);
    if (endOfFrontmatter === -1) {
      return { frontmatter: '', body: content };
    }

    return {
      frontmatter: content.substring(3, endOfFrontmatter).trim(),
      body: content.substring(endOfFrontmatter + 3).trim(),
    };
  }

  private _resolveMode(frontmatter: string): LessonStepMode {
    if (/steps:/.test(frontmatter) && /mode:\s*stepped/.test(frontmatter)) {
      return 'stepped';
    }
    return 'linear';
  }

  private _findStepMarkers(body: string): StepMarker[] {
    const markers: StepMarker[] = [];
    let match: RegExpExecArray | null;

    STEP_MARKER_REGEX.lastIndex = 0;
    while ((match = STEP_MARKER_REGEX.exec(body)) !== null) {
      markers.push({
        id: match[1],
        metaYaml: match[2]?.trim() ?? '',
        contentStart: match.index + match[0].length,
      });
    }

    return markers;
  }

  private _buildSteps(body: string, markers: StepMarker[]): LessonStep[] {
    return markers.map((marker, index) => {
      const nextMarkerStart = markers[index + 1]
        ? body.indexOf('<!--', marker.contentStart)
        : body.length;
      const sliceEnd = nextMarkerStart >= 0 ? nextMarkerStart : body.length;
      const content = body.substring(marker.contentStart, sliceEnd).trim();

      const { timerSeconds, actions } = this._parseStepMeta(marker.id, marker.metaYaml);

      return {
        id: marker.id,
        index,
        content,
        timerSeconds,
        actions,
      };
    });
  }

  private _parseStepMeta(
    stepId: string,
    metaYaml: string,
  ): { timerSeconds?: number; actions: StepAction[] } {
    if (stepId === 'intro' || !metaYaml) {
      return { actions: [] };
    }

    const timerMatch = metaYaml.match(/^timer:\s*(\d+)\s*$/m);
    const timerSeconds = timerMatch ? parseInt(timerMatch[1], 10) : undefined;

    const actions: StepAction[] = [];
    const actionBlocks = metaYaml.split(/^\s*-\s+id:\s*/m).slice(1);

    actionBlocks.forEach((block) => {
      const lines = block.split(/\r?\n/);
      const id = lines[0]?.trim();
      if (!id) return;

      const unlockMatch = block.match(/unlock:\s*(\w+)/);
      const showMatch = block.match(/show:\s*(\S+)/);
      const labelMatch = block.match(/label:\s*["']?([^"'\n]+)["']?/);
      const hint = this._parseHintFromBlock(block);

      const unlockRaw = unlockMatch?.[1] as StepUnlockMode | undefined;
      const unlock = unlockRaw && VALID_UNLOCK_MODES.includes(unlockRaw) ? unlockRaw : 'immediate';

      actions.push({
        id,
        unlock,
        show: showMatch?.[1],
        label: labelMatch?.[1]?.trim(),
        hint,
      });
    });

    return { timerSeconds, actions };
  }

  private _parseHintFromBlock(block: string): string | undefined {
    const pipeMatch = block.match(/hint:\s*\|\s*\r?\n((?:[ \t].+\r?\n?)+)/);
    if (pipeMatch) {
      return pipeMatch[1]
        .split(/\r?\n/)
        .map((line) => line.replace(/^[ \t]+/, ''))
        .join('\n')
        .trim();
    }

    const quotedMatch = block.match(/hint:\s*["']([^"']+)["']/);
    if (quotedMatch) {
      return quotedMatch[1].trim();
    }

    const lineMatch = block.match(/hint:\s*(.+?)(?:\r?\n|$)/);
    if (lineMatch) {
      return lineMatch[1].trim();
    }

    return undefined;
  }
}
