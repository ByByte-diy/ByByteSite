export interface PdfSection {
  id: string;
  title?: string;
  markdownContent: string;
}

export interface PdfExportMetadata {
  platform?: string;
  level?: string;
  lang?: string;
  version?: string;
}

export interface PdfFilterContext {
  introCompleted: boolean;
  completedStepIds: string[];
  currentStepId?: string;
}

export interface PdfExportSource {
  title: string;
  fileName: string;
  sections: PdfSection[];
  metadata?: PdfExportMetadata;
  filterContext?: PdfFilterContext;
}
