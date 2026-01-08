import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllGuides, getGuideBySlug } from "@/lib/mdx/mdx-utils";
import { mdxComponents } from "@/lib/mdx/mdx-components";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const guides = await getAllGuides();
  return guides.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = await getGuideBySlug(slug);

  if (!guide) {
    return {
      title: "Guide Not Found — IkiGlow",
    };
  }

  return {
    title: `${guide.frontmatter.title} — IkiGlow`,
    description: guide.frontmatter.description,
    keywords: guide.frontmatter.keywords,
  };
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = await getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      {/* Header */}
      <article className="mx-auto max-w-2xl px-6 py-16">
        <div className="space-y-12">
          <div className="space-y-6">
            <div className="text-xs text-muted-foreground">
              Guide · {guide.frontmatter.readingTime} min read
            </div>
            <h1 className="text-3xl tracking-wide md:text-4xl">
              {guide.frontmatter.title}
            </h1>
            <p className="text-base text-muted-foreground">
              {guide.frontmatter.description}
            </p>
          </div>

          {/* MDX Content */}
          <div className="prose prose-neutral space-y-6">
            <MDXRemote
              source={guide.content}
              components={mdxComponents}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
                },
              }}
            />
          </div>
        </div>
      </article>

      {/* Navigation */}
      <div className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-2xl px-6 py-8">
          <Link
            href="/guides"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            ← Back to all guides
          </Link>
        </div>
      </div>
    </main>
  );
}
