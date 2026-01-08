"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MDXEditor } from "@/components/cms/MDXEditor";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { saveContent } from "@/app/protected/cms/actions";
import matter from "gray-matter";

export default function EditAboutPage() {
  const [fullContent, setFullContent] = useState("");
  const [frontmatter, setFrontmatter] = useState<Record<string, unknown>>({});
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    async function loadAbout() {
      try {
        const response = await fetch("/api/cms/about");
        if (!response.ok) {
          throw new Error("Failed to load about page");
        }
        const data = await response.json();
        setFullContent(data.rawContent);

        const { data: fm, content: c } = matter(data.rawContent);
        setFrontmatter(fm);
        setContent(c);
      } catch (error) {
        console.error("Error loading about page:", error);
        alert("Failed to load about page");
      } finally {
        setIsLoading(false);
      }
    }

    loadAbout();
  }, []);

  const handleSave = async (newContent: string) => {
    setIsSaving(true);
    try {
      const { data: fm, content: c } = matter(newContent);

      // Update the updatedAt field
      fm.updatedAt = new Date().toISOString().split("T")[0];

      const result = await saveContent({
        type: "about",
        slug: "about",
        frontmatter: fm,
        content: c,
      });

      if (result.success) {
        setFullContent(newContent);
        setFrontmatter(fm);
        setContent(c);
        alert("About page saved successfully!");
      } else {
        alert(`Failed to save: ${result.error}`);
      }
    } catch (error) {
      console.error("Error saving about page:", error);
      alert("Failed to save about page");
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <main className="min-h-screen">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <p className="text-center text-muted-foreground">Loading...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="space-y-8">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Link href="/protected/cms">
                  <Button variant="outline" size="sm">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back
                  </Button>
                </Link>
                <h1 className="text-2xl tracking-wide">Edit About Page</h1>
              </div>
              {frontmatter.updatedAt && (
                <p className="text-sm text-muted-foreground">
                  Last updated: {new Date(frontmatter.updatedAt as string).toLocaleDateString()}
                </p>
              )}
            </div>
          </div>

          {/* Editor */}
          <MDXEditor
            initialContent={fullContent}
            onSave={handleSave}
            isSaving={isSaving}
          />

          {/* Instructions */}
          <div className="space-y-4 rounded-sm border border-border bg-muted/30 p-6">
            <h3 className="text-sm font-medium tracking-wide">Frontmatter Fields</h3>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>• <strong>title</strong>: Page title (required)</li>
              <li>• <strong>description</strong>: Meta description (required)</li>
              <li>• <strong>updatedAt</strong>: Auto-updated on save</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
