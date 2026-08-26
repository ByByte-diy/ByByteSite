/** Root id of the off-screen DOM container used during export. */
export const PDF_EXPORT_CONTAINER_ID = 'pdf-export-container';

/** CSS class names used in the PDF render tree. */
export const PDF_CSS_CLASS = {
  page: 'pdf-page',
  content: 'pdf-content',
  block: 'pdf-block',
  blockNoBreak: 'pdf-block--no-break',
  blockMedia: 'pdf-block--media',
  sectionTitle: 'pdf-section-title',
  docTitle: 'pdf-doc-title',
  splitLayout: 'pdf-split-layout',
  splitText: 'pdf-split-layout__text',
  splitMedia: 'pdf-split-layout__media',
} as const;

/** Inline styles for the hidden export container. */
export const PDF_CONTAINER_STYLES = {
  position: 'fixed',
  left: '-9999px',
  top: '0',
  background: '#fff',
  zIndex: '-1',
  pointerEvents: 'none',
} as const;

/** Inline styles for the document title block inside the hidden container. */
export const PDF_DOC_TITLE_INLINE_STYLE =
  'font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; padding: 1rem;';

/** Regex: fenced code blocks in lesson markdown. */
export const PDF_CODE_BLOCK_REGEX = /```(\w+)?\s*([\s\S]*?)```/g;

/** Regex: rewrite submodule /content/ image paths to /assets/content/. */
export const PDF_IMAGE_PATH_REGEX =
  /(!\[.*?\]\(|\<img[^>]+src=["'])(\/?content\/)([^"')]+)(["'][^>]*\>|\))/g;

/** Replacement prefix for fixed image paths. */
export const PDF_ASSETS_CONTENT_PREFIX = 'assets/content/';

/** Default language tag when markdown code fence has no language. */
export const PDF_DEFAULT_CODE_LANGUAGE = 'text';

/** html2canvas background passed to avoid transparent PNG artefacts. */
export const PDF_CANVAS_BACKGROUND = '#ffffff';

/** Image format passed to jsPDF addImage. */
export const PDF_IMAGE_FORMAT = 'PNG';
