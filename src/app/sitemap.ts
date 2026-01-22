import type { MetadataRoute } from "next";
import { getAllBlogPosts, getAllGuides } from "@/lib/mdx/mdx-utils";
import { exerciseCategories, exerciseRegistry } from "@/exercises/registry";
import { reflectionRegistry } from "@/reflections/registry";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://ikiglow.com";

function url(path: string): string {
  return `${BASE_URL}${path}`;
}

function parseDate(dateString: string | undefined): Date {
  if (!dateString) return new Date();
  const parsed = new Date(dateString);
  return isNaN(parsed.getTime()) ? new Date() : parsed;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [blogPosts, guides] = await Promise.all([
    getAllBlogPosts(),
    getAllGuides(),
  ]);

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: url("/"),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: url("/about"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: url("/blog"),
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: url("/guides"),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: url("/exercises"),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: url("/exercises/journaling"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: url("/reflections"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: url("/reflections/journaling"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: url("/newsletter"),
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: url("/waitlist"),
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: url("/videos"),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];

  // Dynamic blog routes
  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: url(`/blog/${post.slug}`),
    lastModified: parseDate(
      post.frontmatter.updatedAt || post.frontmatter.publishedAt
    ),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Dynamic guide routes
  const guideRoutes: MetadataRoute.Sitemap = guides.map((guide) => ({
    url: url(`/guides/${guide.slug}`),
    lastModified: parseDate(
      guide.frontmatter.updatedAt || guide.frontmatter.publishedAt
    ),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Exercise category routes
  const exerciseCategoryRoutes: MetadataRoute.Sitemap = exerciseCategories.map(
    (category) => ({
      url: url(`/exercises/${category.slug}`),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    })
  );

  // Individual exercise routes
  const exerciseRoutes: MetadataRoute.Sitemap = exerciseRegistry.map(
    (exercise) => ({
      url: url(`/exercises/${exercise.slug}`),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    })
  );

  // Reflection routes
  const reflectionRoutes: MetadataRoute.Sitemap = reflectionRegistry.map(
    (reflection) => ({
      url: url(`/reflections/${reflection.slug}`),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    })
  );

  return [
    ...staticRoutes,
    ...blogRoutes,
    ...guideRoutes,
    ...exerciseCategoryRoutes,
    ...exerciseRoutes,
    ...reflectionRoutes,
  ];
}
