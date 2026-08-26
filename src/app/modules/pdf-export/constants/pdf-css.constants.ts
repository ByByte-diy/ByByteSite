import { PdfTheme } from '../models/pdf-settings.model';

/** Flex layout for landscape sections: text left, images right. */
export const PDF_LANDSCAPE_LAYOUT_CSS = `
  .pdf-split-layout {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 28px;
    width: 100%;
  }
  .pdf-split-layout__text {
    flex: 1 1 55%;
    min-width: 0;
  }
  .pdf-split-layout__media {
    flex: 0 0 40%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    justify-content: flex-start;
  }
  .pdf-split-layout__media img {
    max-width: 100%;
    height: auto;
    object-fit: contain;
  }
`;

/** Base pagination rules shared by all themes. */
export const PDF_BLOCK_CSS = `
  .pdf-block {
    break-inside: avoid;
    page-break-inside: avoid;
    padding: 4px 0;
    overflow: visible;
  }
  .pdf-block--no-break {
    break-inside: avoid;
    page-break-inside: avoid;
  }
  .pdf-block h1:first-child,
  .pdf-block h2:first-child,
  .pdf-block h3:first-child {
    margin-top: 0;
  }
  .pdf-block--media img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;

/** Built-in preset themes; custom uploads override via injected CSS. */
export const PDF_THEME_STYLES: Record<Exclude<PdfTheme, 'custom'>, string> = {
  default: `
    .pdf-page {
      font-family: 'Segoe UI', system-ui, sans-serif;
      font-size: 14px;
      line-height: 1.6;
      color: #1a1a1a;
    }
    .pdf-page h1 { font-size: 1.75rem; margin: 0 0 1rem; }
    .pdf-page h2 { font-size: 1.35rem; margin: 1.25rem 0 0.75rem; }
    .pdf-page h3 { font-size: 1.1rem; margin: 1rem 0 0.5rem; }
    .pdf-page p { margin: 0 0 0.75rem; }
    .pdf-page ul, .pdf-page ol { margin: 0 0 0.75rem 1.25rem; padding: 0; }
    .pdf-page pre {
      background: #f4f4f4;
      border-radius: 6px;
      padding: 0.75rem 1rem;
      overflow-x: auto;
      font-size: 12px;
      margin: 0 0 1rem;
    }
    .pdf-page code {
      font-family: 'Consolas', 'Courier New', monospace;
      font-size: 0.9em;
    }
    .pdf-page img {
      max-width: 100%;
      height: auto;
      border-radius: 4px;
      margin: 0.5rem 0;
    }
    .pdf-section-title {
      font-size: 0.85rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #666;
      margin-bottom: 0.75rem;
      padding-bottom: 0.5rem;
      border-bottom: 1px solid #ddd;
    }
  `,
  compact: `
    .pdf-page {
      font-family: 'Segoe UI', system-ui, sans-serif;
      font-size: 12px;
      line-height: 1.45;
      color: #111;
    }
    .pdf-page h1 { font-size: 1.4rem; margin: 0 0 0.5rem; }
    .pdf-page h2 { font-size: 1.15rem; margin: 0.75rem 0 0.4rem; }
    .pdf-page h3 { font-size: 1rem; margin: 0.5rem 0 0.25rem; }
    .pdf-page p { margin: 0 0 0.5rem; }
    .pdf-page ul, .pdf-page ol { margin: 0 0 0.5rem 1rem; padding: 0; }
    .pdf-page pre {
      background: #f0f0f0;
      border-radius: 4px;
      padding: 0.5rem 0.75rem;
      font-size: 10px;
      margin: 0 0 0.5rem;
    }
    .pdf-page code { font-family: monospace; font-size: 0.85em; }
    .pdf-page img { max-width: 100%; height: auto; margin: 0.25rem 0; }
    .pdf-section-title {
      font-size: 0.75rem;
      color: #888;
      margin-bottom: 0.4rem;
    }
  `,
};

/** Extra page-level rules appended after theme CSS in the hidden container. */
export const PDF_PAGE_SPACING_CSS = `
  .pdf-page + .pdf-page { margin-top: 0; }
`;
