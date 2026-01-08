"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, Save } from "lucide-react";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { mdxComponents } from "@/lib/mdx/mdx-components";
import remarkGfm from "remark-gfm";

interface MDXEditorProps {
  initialContent: string;
  onSave: (content: string) => Promise<void>;
  isSaving?: boolean;
}

export function MDXEditor({ initialContent, onSave, isSaving = false }: MDXEditorProps) {
  const [content, setContent] = useState(initialContent);
  const [showPreview, setShowPreview] = useState(false);
  const [mdxSource, setMdxSource] = useState<any>(null);
  const [isLoadingPreview, setIsLoadingPreview] = useState(false);

  const handlePreviewToggle = async () => {
    if (!showPreview) {
      setIsLoadingPreview(true);
      try {
        const source = await serialize(content, {
          mdxOptions: {
            remarkPlugins: [remarkGfm],
          },
        });
        setMdxSource(source);
        setShowPreview(true);
      } catch (error) {
        console.error("Error parsing MDX:", error);
        alert("Error parsing MDX. Please check your syntax.");
      } finally {
        setIsLoadingPreview(false);
      }
    } else {
      setShowPreview(false);
    }
  };

  const handleSave = async () => {
    await onSave(content);
  };

  return (
    <div className="space-y-4">
      {/* Toolbar */}
      <div className="flex items-center justify-between rounded-sm border border-border bg-muted/30 p-4">
        <div className="flex items-center gap-4">
          <Button
            onClick={handlePreviewToggle}
            disabled={isLoadingPreview}
            variant="outline"
            size="sm"
          >
            {showPreview ? (
              <>
                <EyeOff className="mr-2 h-4 w-4" />
                Edit
              </>
            ) : (
              <>
                <Eye className="mr-2 h-4 w-4" />
                Preview
              </>
            )}
          </Button>
          {isLoadingPreview && (
            <span className="text-sm text-muted-foreground">Loading preview...</span>
          )}
        </div>
        <Button onClick={handleSave} disabled={isSaving} size="sm">
          <Save className="mr-2 h-4 w-4" />
          {isSaving ? "Saving..." : "Save"}
        </Button>
      </div>

      {/* Editor/Preview */}
      {showPreview ? (
        <div className="min-h-[500px] space-y-6 rounded-sm border border-border p-8">
          {mdxSource && (
            <div className="prose prose-neutral">
              <MDXRemote {...mdxSource} components={mdxComponents} />
            </div>
          )}
        </div>
      ) : (
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="min-h-[500px] w-full rounded-sm border border-border bg-background p-4 font-mono text-sm leading-relaxed focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          placeholder="Write your MDX content here..."
        />
      )}

      {/* Helper text */}
      <p className="text-xs text-muted-foreground">
        Use MDX syntax. Supports Markdown formatting, frontmatter, and custom components.
      </p>
    </div>
  );
}
