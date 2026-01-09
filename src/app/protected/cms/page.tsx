import Link from "next/link";
import type { Metadata } from "next";
import { FileText, BookOpen, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "CMS Dashboard - IkiGlow",
  description: "Content management system for IkiGlow website",
};

export default function CMSDashboard() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-3xl tracking-wide">Content Management</h1>
            <p className="text-base text-muted-foreground">
              Manage blog posts, guides, and pages
            </p>
          </div>

          {/* Navigation Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Blog */}
            <Link
              href="/protected/cms/blog"
              className="group space-y-4 rounded-sm border border-border p-8 transition-colors hover:border-primary/40"
            >
              <FileText className="h-8 w-8 text-primary" />
              <div className="space-y-2">
                <h2 className="text-xl tracking-wide">Blog Posts</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Create and manage blog reflections
                </p>
              </div>
            </Link>

            {/* Guides */}
            <Link
              href="/protected/cms/guides"
              className="group space-y-4 rounded-sm border border-border p-8 transition-colors hover:border-primary/40"
            >
              <BookOpen className="h-8 w-8 text-primary" />
              <div className="space-y-2">
                <h2 className="text-xl tracking-wide">Guides</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Create and manage comprehensive guides
                </p>
              </div>
            </Link>

            {/* About */}
            <Link
              href="/protected/cms/about"
              className="group space-y-4 rounded-sm border border-border p-8 transition-colors hover:border-primary/40"
            >
              <Info className="h-8 w-8 text-primary" />
              <div className="space-y-2">
                <h2 className="text-xl tracking-wide">About Page</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Edit the about page content
                </p>
              </div>
            </Link>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 border-t border-border pt-12">
            <h3 className="text-lg tracking-wide">Quick Actions</h3>
            <div className="space-y-3">
              <Link
                href="/blog"
                className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                → View published blog posts
              </Link>
              <Link
                href="/guides"
                className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                → View published guides
              </Link>
              <Link
                href="/"
                className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                → Back to homepage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
