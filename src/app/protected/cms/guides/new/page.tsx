"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { MDXEditor } from "@/components/cms/MDXEditor";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { saveContent } from "@/app/protected/cms/actions";
import matter from "gray-matter";

const GUIDE_TEMPLATE = `---
title: "Your Guide Title"
description: "Brief summary of what this guide covers"
publishedAt: "${new Date().toISOString().split('T')[0]}"
slug: "your-guide-slug"
keywords:
  - keyword1
  - keyword2
---

Start writing your guide content here...

## Introduction

Your introduction goes here.

## Main Content

Your main content sections go here.
`;

export default function NewGuide() {
  const router = useRouter();
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async (newContent: string) => {
    setIsSaving(true);
    try {
      const { data: fm, content: c } = matter(newContent);

      // Validate required fields
      if (!fm.slug) {
        alert("Please provide a slug in the frontmatter");
        setIsSaving(false);
        return;
      }

      if (!fm.title || !fm.description) {
        alert("Please provide all required fields: title, description");
        setIsSaving(false);
        return;
      }

      const result = await saveContent({
        type: "guides",
        slug: fm.slug as string,
        frontmatter: fm,
        content: c,
      });

      if (result.success) {
        alert("Guide created successfully!");
        router.push(`/protected/cms/guides/${fm.slug}/edit`);
      } else {
        alert(`Failed to save: ${result.error}`);
      }
    } catch (error) {
      console.error("Error saving guide:", error);
      alert("Failed to save guide");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="space-y-8">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link href="/protected/cms/guides">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
              </Link>
              <h1 className="text-2xl tracking-wide">New Guide</h1>
            </div>
          </div>

          {/* Editor */}
          <MDXEditor
            initialContent={GUIDE_TEMPLATE}
            onSave={handleSave}
            isSaving={isSaving}
          />

          {/* Instructions */}
          <div className="space-y-4 rounded-sm border border-border bg-muted/30 p-6">
            <h3 className="text-sm font-medium tracking-wide">Frontmatter Fields</h3>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>• <strong>title</strong>: Guide title (required)</li>
              <li>• <strong>description</strong>: Brief summary (required)</li>
              <li>• <strong>publishedAt</strong>: Date in YYYY-MM-DD format (required)</li>
              <li>• <strong>slug</strong>: URL slug - must be unique (required)</li>
              <li>• <strong>keywords</strong>: Array of keywords (optional)</li>
              <li>• <strong>readingTime</strong>: Auto-calculated on save</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
