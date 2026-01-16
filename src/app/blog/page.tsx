import Link from "next/link";
import type { Metadata } from "next";
import { getAllBlogPosts, getBlogPostsByCategory } from "@/lib/mdx/mdx-utils";
import { CategoryFilter } from "@/components/blog/CategoryFilter";
import { getCategoryFromSlug } from "@/types/content";
import type { BlogCategory } from "@/types/content";
import { getTranslations } from "next-intl/server";

interface PageProps {
  searchParams: Promise<{ category?: string }>;
}

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const params = await searchParams;
  const categorySlug = params.category;
  const t = await getTranslations("metadata.blog");

  if (categorySlug) {
    const category = getCategoryFromSlug(categorySlug);
    if (category) {
      return {
        title: t("categoryTitle", { category }),
        description: t("categoryDescription", { category: category.toLowerCase() }),
      };
    }
  }

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function Blog({ searchParams }: PageProps) {
  const t = await getTranslations("blog");

  const params = await searchParams;
  const categorySlug = params.category;
  let category: BlogCategory | "all" = "all";

  // Validate and convert category slug to category name
  if (categorySlug) {
    const validCategory = getCategoryFromSlug(categorySlug);
    if (validCategory) {
      category = validCategory;
    }
  }

  // Fetch posts based on category
  const posts = category === "all"
    ? await getAllBlogPosts()
    : await getBlogPostsByCategory(category);

  return (
    <main className="min-h-screen">
      {/* Header */}
      <div className="mx-auto max-w-2xl space-y-6 sm:space-y-8 px-4 sm:px-6 py-12 sm:py-16">
        <h1 className="text-2xl sm:text-3xl tracking-wide">
          {category === "all" ? t("title") : category}
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground">
          {category === "all"
            ? t("description")
            : t("categoryDescription", { count: posts.length })
          }
        </p>
      </div>

      {/* Categories */}
      <div className="panel-sage">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 py-6 sm:py-8">
          <CategoryFilter activeCategory={category} />
        </div>
      </div>

      {/* Blog posts */}
      <div className="mx-auto max-w-2xl space-y-8 sm:space-y-12 px-4 sm:px-6 py-12 sm:py-16">
        {posts.length === 0 ? (
          <div className="rounded-xl border border-[#E6E6E1]/60 bg-[#EEF3EF] p-8 sm:p-12 text-center">
            <p className="text-sm text-muted-foreground">
              {t("emptyState.message")}
            </p>
            <Link
              href="/blog"
              className="mt-4 inline-block text-sm text-[#6F846F] transition-colors hover:text-[#5F7460]"
            >
              {t("emptyState.action")}
            </Link>
          </div>
        ) : (
          posts.map((post) => (
            <article key={post.slug} className="space-y-3 sm:space-y-4 border-b border-[#E6E6E1]/60 pb-8 sm:pb-12">
              <Link href={`/blog/${post.slug}`} className="block space-y-2 sm:space-y-3">
                <div className="text-xs text-muted-foreground">
                  {post.frontmatter.category} · {post.frontmatter.readingTime} {t("readingTime")}
                </div>
                <h2 className="text-lg sm:text-xl tracking-wide transition-colors hover:text-[#6F846F]">
                  {post.frontmatter.title}
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {post.frontmatter.description}
                </p>
              </Link>
            </article>
          ))
        )}
      </div>
    </main>
  );
}
