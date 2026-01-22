"use server";

import { revalidatePath } from "next/cache";
import {
  writeContent,
  deleteContent,
  contentExists,
} from "@/lib/mdx/mdx-utils";
import type { ContentType } from "@/types/content";

/**
 * Defense-in-depth: Ensure CMS actions cannot be invoked in production.
 * The middleware already blocks these routes, but this provides an extra layer.
 */
function assertDevelopment() {
  if (process.env.NODE_ENV === "production") {
    throw new Error("CMS actions are not available in production");
  }
}

interface SaveContentParams {
  type: ContentType;
  slug: string;
  frontmatter: Record<string, unknown>;
  content: string;
}

interface DeleteContentParams {
  type: "blog" | "guides";
  slug: string;
}

export async function saveContent(params: SaveContentParams) {
  assertDevelopment();

  try {
    const { type, slug, frontmatter, content } = params;

    // Validate required fields based on content type
    if (type === "blog") {
      if (!frontmatter.title || !frontmatter.description || !frontmatter.category) {
        return { success: false, error: "Missing required fields" };
      }
    } else if (type === "guides") {
      if (!frontmatter.title || !frontmatter.description) {
        return { success: false, error: "Missing required fields" };
      }
    }

    await writeContent(type, slug, frontmatter, content);

    // Revalidate relevant paths
    if (type === "blog") {
      revalidatePath("/blog");
      revalidatePath(`/blog/${slug}`);
    } else if (type === "guides") {
      revalidatePath("/guides");
      revalidatePath(`/guides/${slug}`);
    } else if (type === "about") {
      revalidatePath("/about");
    }

    return { success: true };
  } catch (error) {
    console.error("Error saving content:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to save content",
    };
  }
}

export async function removeContent(params: DeleteContentParams) {
  assertDevelopment();

  try {
    const { type, slug } = params;

    // Check if content exists
    const exists = await contentExists(type, slug);
    if (!exists) {
      return { success: false, error: "Content not found" };
    }

    await deleteContent(type, slug);

    // Revalidate relevant paths
    if (type === "blog") {
      revalidatePath("/blog");
    } else if (type === "guides") {
      revalidatePath("/guides");
    }

    return { success: true };
  } catch (error) {
    console.error("Error deleting content:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to delete content",
    };
  }
}
