export interface SeoMetaData {
  title: string;
  description: string;
  keywords?: string;
  author?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  locale?: string;
  siteName?: string;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterSite?: string;
  twitterCreator?: string;
  openGraph?: {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    type?: string;
    siteName?: string;
    locale?: string;
  };
  structuredData?: any;
}

export interface SeoPageConfig {
  titleKey: string;
  descriptionKey: string;
  keywordsKey?: string;
  imageKey?: string;
  type?: 'website' | 'article' | 'product';
  structuredDataKey?: string;
}

export interface SeoTranslation {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  structuredData?: any;
}
