export interface LessonMeta {
  title: string;
  slug: string;
  lang: string;
  platforms: string[];
  level: 'beginner' | 'intermediate' | 'advanced';
  tags: string[];
  published: boolean;
  version: string;
  description?: string;
  author?: string;
  updatedAt?: string;
  createdAt?: string;
}

export interface Lesson extends LessonMeta {
  content: string;
  contentPath: string;
}

export interface LessonIndex {
  lessons: LessonMeta[];
  platforms: string[];
  levels: string[];
  tags: string[];
  languages: string[];
}
