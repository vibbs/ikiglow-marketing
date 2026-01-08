"use client";

import { use, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { MDXEditor } from "@/components/cms/MDXEditor";
import { Button } from "@/components/ui/button";
import { Trash2, ArrowLeft } from "lucide-react";
import { saveContent, removeContent } from "@/app/protected/cms/actions";
import matter from "gray-matter";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function EditBlogPost({ params }: PageProps) {
  const { slug } = use(params);
  const router = useRouter();
  const [fullContent, setFullContent] = useState("");
  const [frontmatter, setFrontmatter] = useState<Record<string, unknown>>({});
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    async function loadPost() {
      try {
        const response = await fetch(`/api/cms/blog/${slug}`);
        if (!response.ok) {
          throw new Error("Failed to load post");
        }
        const data = await response.json();
        setFullContent(data.rawContent);

        const { data: fm, content: c } = matter(data.rawContent);
        setFrontmatter(fm);
        setContent(c);
      } catch (error) {
        console.error("Error loading post:", error);
        alert("Failed to load post");
      } finally {
        setIsLoading(false);
      }
    }

    loadPost();
  }, [slug]);

  const handleSave = async (newContent: string) => {
    setIsSaving(true);
    try {
      const { data: fm, content: c } = matter(newContent);

      // Ensure slug matches
      fm.slug = slug;

      const result = await saveContent({
        type: "blog",
        slug,
        frontmatter: fm,
        content: c,
      });

      if (result.success) {
        setFullContent(newContent);
        setFrontmatter(fm);
        setContent(c);
        alert("Post saved successfully!");
      } else {
        alert(`Failed to save: ${result.error}`);
      }
    } catch (error) {
      console.error("Error saving post:", error);
      alert("Failed to save post");
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this post? This action cannot be undone.")) {
      return;
    }

    setIsDeleting(true);
    try {
      const result = await removeContent({ type: "blog", slug });

      if (result.success) {
        alert("Post deleted successfully!");
        router.push("/protected/cms/blog");
      } else {
        alert(`Failed to delete: ${result.error}`);
      }
    } catch (error) {
      console.error("Error deleting post:", error);
      alert("Failed to delete post");
    } finally {
      setIsDeleting(false);
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
                <Link href="/protected/cms/blog">
                  <Button variant="outline" size="sm">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back
                  </Button>
                </Link>
                <h1 className="text-2xl tracking-wide">Edit Post</h1>
              </div>
              <p className="text-sm text-muted-foreground">Slug: {slug}</p>
            </div>
            <Button
              onClick={handleDelete}
              disabled={isDeleting}
              variant="outline"
              size="sm"
            >
              <Trash2 className="mr-2 h-4 w-4" />
              {isDeleting ? "Deleting..." : "Delete"}
            </Button>
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
              <li>• <strong>title</strong>: Post title (required)</li>
              <li>• <strong>description</strong>: Brief summary (required)</li>
              <li>• <strong>category</strong>: Category name (required)</li>
              <li>• <strong>publishedAt</strong>: Date in YYYY-MM-DD format (required)</li>
              <li>• <strong>slug</strong>: URL slug (auto-set to match filename)</li>
              <li>• <strong>keywords</strong>: Array of keywords (optional)</li>
              <li>• <strong>relatedLinks</strong>: Array of {`{href, text}`} objects (optional)</li>
              <li>• <strong>boundaryNote</strong>: Mental health boundary note (optional)</li>
              <li>• <strong>readingTime</strong>: Auto-calculated on save</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
