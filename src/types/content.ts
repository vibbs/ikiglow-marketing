// Content type definitions for MDX-based content system

// Blog category definitions from Implementation Plan
export const BLOG_CATEGORIES = [
  "Mindset",
  "Mental Health",
  "Habits",
  "Focus & Productivity",
  "Self-Awareness",
  "Life Goals",
] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

// Map display names to URL slugs
export const CATEGORY_SLUGS: Record<BlogCategory, string> = {
  "Mindset": "mindset",
  "Mental Health": "mental-health",
  "Habits": "habits",
  "Focus & Productivity": "focus-productivity",
  "Self-Awareness": "self-awareness",
  "Life Goals": "life-goals",
} as const;

// Reverse mapping: slug to display name
export const SLUG_TO_CATEGORY: Record<string, BlogCategory> = Object.entries(
  CATEGORY_SLUGS
).reduce(
  (acc, [category, slug]) => {
    acc[slug] = category as BlogCategory;
    return acc;
  },
  {} as Record<string, BlogCategory>
);

// Helper functions
export function getAllBlogCategories(): BlogCategory[] {
  return [...BLOG_CATEGORIES];
}

export function getCategorySlug(category: BlogCategory): string {
  return CATEGORY_SLUGS[category];
}

export function getCategoryFromSlug(slug: string): BlogCategory | null {
  return SLUG_TO_CATEGORY[slug] || null;
}

export function isValidCategory(category: string): category is BlogCategory {
  return BLOG_CATEGORIES.includes(category as BlogCategory);
}

export interface BlogPostFrontmatter {
  title: string;
  description: string;
  category: BlogCategory;
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
