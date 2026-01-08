// MDX utility functions for content parsing and rendering

import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type {
  BlogPost,
  BlogPostFrontmatter,
  Guide,
  GuideFrontmatter,
  AboutPage,
  AboutPageFrontmatter,
} from "@/types/content";

const CONTENT_DIR = path.join(process.cwd(), "000-content");

// Calculate reading time from content
export function calculateReadingTime(content: string): number {
  const stats = readingTime(content);
  return Math.ceil(stats.minutes);
}

// Blog utilities
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const blogDir = path.join(CONTENT_DIR, "blog");

  try {
    const files = await fs.readdir(blogDir);
    const mdxFiles = files.filter((file) => file.endsWith(".mdx"));

    const posts = await Promise.all(
      mdxFiles.map(async (file) => {
        const slug = file.replace(/\.mdx$/, "");
        return getBlogPostBySlug(slug);
      })
    );

    // Sort by publishedAt date, newest first
    return posts.sort((a, b) => {
      return (
        new Date(b.frontmatter.publishedAt).getTime() -
        new Date(a.frontmatter.publishedAt).getTime()
      );
    });
  } catch (error) {
    console.error("Error reading blog posts:", error);
    return [];
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost> {
  const filePath = path.join(CONTENT_DIR, "blog", `${slug}.mdx`);
  const fileContent = await fs.readFile(filePath, "utf8");
  const { data, content } = matter(fileContent);

  const frontmatter = data as BlogPostFrontmatter;

  // Auto-calculate reading time if not set
  if (!frontmatter.readingTime) {
    frontmatter.readingTime = calculateReadingTime(content);
  }

  return {
    frontmatter,
    content,
    slug,
  };
}

export async function getBlogPostsByCategory(category: string): Promise<BlogPost[]> {
  const allPosts = await getAllBlogPosts();
  return allPosts.filter((post) =>
    post.frontmatter.category.toLowerCase() === category.toLowerCase()
  );
}

// Guide utilities
export async function getAllGuides(): Promise<Guide[]> {
  const guidesDir = path.join(CONTENT_DIR, "guides");

  try {
    const files = await fs.readdir(guidesDir);
    const mdxFiles = files.filter((file) => file.endsWith(".mdx"));

    const guides = await Promise.all(
      mdxFiles.map(async (file) => {
        const slug = file.replace(/\.mdx$/, "");
        return getGuideBySlug(slug);
      })
    );

    // Sort by publishedAt date, newest first
    return guides.sort((a, b) => {
      return (
        new Date(b.frontmatter.publishedAt).getTime() -
        new Date(a.frontmatter.publishedAt).getTime()
      );
    });
  } catch (error) {
    console.error("Error reading guides:", error);
    return [];
  }
}

export async function getGuideBySlug(slug: string): Promise<Guide> {
  const filePath = path.join(CONTENT_DIR, "guides", `${slug}.mdx`);
  const fileContent = await fs.readFile(filePath, "utf8");
  const { data, content } = matter(fileContent);

  const frontmatter = data as GuideFrontmatter;

  // Auto-calculate reading time if not set
  if (!frontmatter.readingTime) {
    frontmatter.readingTime = calculateReadingTime(content);
  }

  return {
    frontmatter,
    content,
    slug,
  };
}

// About page utilities
export async function getAboutPage(): Promise<AboutPage> {
  const filePath = path.join(CONTENT_DIR, "about", "about.mdx");
  const fileContent = await fs.readFile(filePath, "utf8");
  const { data, content } = matter(fileContent);

  return {
    frontmatter: data as AboutPageFrontmatter,
    content,
  };
}

// Generic content writer (for CMS)
export async function writeContent(
  type: "blog" | "guides" | "about",
  slug: string,
  frontmatter: Record<string, unknown>,
  content: string
): Promise<void> {
  const filename = type === "about" ? "about.mdx" : `${slug}.mdx`;
  const filePath = path.join(CONTENT_DIR, type, filename);

  // Auto-calculate reading time before saving
  if (type === "blog" || type === "guides") {
    frontmatter.readingTime = calculateReadingTime(content);
  }

  const fileContent = matter.stringify(content, frontmatter);
  await fs.writeFile(filePath, fileContent, "utf8");
}

// Delete content (for CMS)
export async function deleteContent(
  type: "blog" | "guides",
  slug: string
): Promise<void> {
  const filePath = path.join(CONTENT_DIR, type, `${slug}.mdx`);
  await fs.unlink(filePath);
}

// Check if content exists
export async function contentExists(
  type: "blog" | "guides" | "about",
  slug: string
): Promise<boolean> {
  const filename = type === "about" ? "about.mdx" : `${slug}.mdx`;
  const filePath = path.join(CONTENT_DIR, type, filename);

  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}
