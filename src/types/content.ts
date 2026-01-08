// Content type definitions for MDX-based content system

export interface BlogPostFrontmatter {
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  updatedAt?: string;
  readingTime?: number; // Auto-calculated, in minutes
  slug: string;
  keywords?: string[];
  relatedLinks?: Array<{
    href: string;
    text: string;
  }>;
  boundaryNote?: string; // Mental health boundary note
}

export interface GuideFrontmatter {
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  readingTime?: number; // Auto-calculated, in minutes
  slug: string;
  keywords?: string[];
}

export interface AboutPageFrontmatter {
  title: string;
  description: string;
  updatedAt?: string;
}

export interface BlogPost {
  frontmatter: BlogPostFrontmatter;
  content: string;
  slug: string;
}

export interface Guide {
  frontmatter: GuideFrontmatter;
  content: string;
  slug: string;
}

export interface AboutPage {
  frontmatter: AboutPageFrontmatter;
  content: string;
}

export type ContentType = "blog" | "guides" | "about";

export interface CMSFormData {
  frontmatter: Record<string, unknown>;
  content: string;
}
