import { PdfExportSource, PdfSection } from '../models/pdf-export-source.model';
import { PdfSettings } from '../models/pdf-settings.model';
import { PDF_INTRO_SECTION_ID } from '../constants/pdf-defaults.constants';

export function filterPdfSections(source: PdfExportSource, settings: PdfSettings): PdfSection[] {
  const { sections, filterContext } = source;
  const taskSections = sections.filter((section) => section.id !== PDF_INTRO_SECTION_ID);
  const introSection = sections.find((section) => section.id === PDF_INTRO_SECTION_ID);

  let selected: PdfSection[] = [];

  switch (settings.scope) {
    case 'current_step': {
      const currentId = filterContext?.currentStepId;
      if (currentId === PDF_INTRO_SECTION_ID && introSection && settings.includeIntro) {
        selected = [introSection];
      } else if (currentId) {
        const current = taskSections.find((section) => section.id === currentId);
        if (current) {
          selected = [current];
        }
      }
      break;
    }
    case 'completed_steps': {
      const completedIds = new Set(filterContext?.completedStepIds ?? []);
      if (settings.includeIntro && introSection && filterContext?.introCompleted) {
        selected.push(introSection);
      }
      taskSections.forEach((section) => {
        if (completedIds.has(section.id)) {
          selected.push(section);
        }
      });
      break;
    }
    case 'all_steps':
    default: {
      if (settings.includeIntro && introSection) {
        selected.push(introSection);
      }
      selected.push(...taskSections);
      break;
    }
  }

  if (selected.length === 0 && sections.length > 0) {
    return sections;
  }

  return selected;
}
