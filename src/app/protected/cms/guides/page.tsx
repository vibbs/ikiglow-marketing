import Link from "next/link";
import type { Metadata } from "next";
import { getAllGuides } from "@/lib/mdx/mdx-utils";
import { Plus, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Manage Guides — CMS",
  description: "Create and manage guides",
};

export default async function GuidesCMS() {
  const guides = await getAllGuides();

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="space-y-12">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <h1 className="text-3xl tracking-wide">Guides</h1>
              <p className="text-sm text-muted-foreground">
                {guides.length} {guides.length === 1 ? "guide" : "guides"}
              </p>
            </div>
            <Link href="/protected/cms/guides/new">
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                New Guide
              </Button>
            </Link>
          </div>

          {/* Guides List */}
          <div className="space-y-4">
            {guides.length === 0 ? (
              <div className="rounded-sm border border-border p-12 text-center">
                <p className="text-sm text-muted-foreground">
                  No guides yet. Create your first guide to get started.
                </p>
              </div>
            ) : (
              guides.map((guide) => (
                <Link
                  key={guide.slug}
                  href={`/protected/cms/guides/${guide.slug}/edit`}
                  className="block space-y-3 rounded-sm border border-border p-6 transition-colors hover:border-primary/40"
                >
                  <div className="flex items-start justify-between">
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-3">
                        <h2 className="text-lg tracking-wide">
                          {guide.frontmatter.title}
                        </h2>
                        <Pencil className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {guide.frontmatter.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>{guide.frontmatter.readingTime} min read</span>
                    <span>·</span>
                    <span>
                      {new Date(guide.frontmatter.publishedAt).toLocaleDateString()}
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
