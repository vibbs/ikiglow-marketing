import Link from "next/link";
import type { Metadata } from "next";
import {
  getAllBlogPosts,
  getBlogPostsByCategory,
} from "@/lib/mdx/mdx-utils";
import { Plus, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CategoryFilter } from "@/components/blog/CategoryFilter";
import { getCategoryFromSlug } from "@/types/content";
import type { BlogCategory } from "@/types/content";

export const metadata: Metadata = {
  title: "Manage Blog Posts - CMS",
  description: "Create and manage blog posts",
};

interface PageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function BlogCMS({ searchParams }: PageProps) {
  const { category: categorySlug } = await searchParams;

  // Get filtered or all posts
  const category = categorySlug
    ? getCategoryFromSlug(categorySlug)
    : null;
  const posts = category
    ? await getBlogPostsByCategory(category)
    : await getAllBlogPosts();
  const activeCategory: BlogCategory | "all" = category || "all";

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="space-y-12">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <h1 className="text-3xl tracking-wide">Blog Posts</h1>
              <p className="text-sm text-muted-foreground">
                {posts.length} {posts.length === 1 ? "post" : "posts"}
                {category && ` in ${category}`}
              </p>
            </div>
            <Link href="/protected/cms/blog/new">
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                New Post
              </Button>
            </Link>
          </div>

          {/* Category Filter */}
          <div className="rounded-sm border border-border bg-muted/30 p-6">
            <CategoryFilter
              activeCategory={activeCategory}
              basePath="/protected/cms/blog"
              showAll={true}
            />
          </div>

          {/* Posts List */}
          <div className="space-y-4">
            {posts.length === 0 ? (
              <div className="rounded-sm border border-border p-12 text-center">
                <p className="text-sm text-muted-foreground">
                  No blog posts yet. Create your first post to get started.
                </p>
              </div>
            ) : (
              posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/protected/cms/blog/${post.slug}/edit`}
                  className="block space-y-3 rounded-sm border border-border p-6 transition-colors hover:border-primary/40"
                >
                  <div className="flex items-start justify-between">
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-3">
                        <h2 className="text-lg tracking-wide">
                          {post.frontmatter.title}
                        </h2>
                        <Pencil className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {post.frontmatter.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>{post.frontmatter.category}</span>
                    <span>·</span>
                    <span>{post.frontmatter.readingTime} min read</span>
                    <span>·</span>
                    <span>
                      {new Date(post.frontmatter.publishedAt).toLocaleDateString()}
                    </span>
                  </div>
                </Link>
              ))
            )}
          </div>

          {/* Back Link */}
          <div className="border-t border-border pt-8">
            <Link
              href="/protected/cms"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              ← Back to CMS dashboard
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
