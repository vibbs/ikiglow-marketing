import Link from "next/link";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/mdx/mdx-utils";
import { mdxComponents } from "@/lib/mdx/mdx-components";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  return {
    title: `${post.frontmatter.title} — IkiGlow`,
    description: post.frontmatter.description,
    keywords: post.frontmatter.keywords,
  };
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  return (
    <main className="min-h-screen">
      {/* Article Header */}
      <article className="mx-auto max-w-2xl px-6 py-16">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="text-xs text-muted-foreground">
              {post.frontmatter.category} · {post.frontmatter.readingTime} min read
            </div>
            <h1 className="text-3xl tracking-wide md:text-4xl">
              {post.frontmatter.title}
            </h1>
          </div>

          {/* MDX Content */}
          <div className="prose prose-neutral space-y-6">
            <MDXRemote
              source={post.content}
              components={mdxComponents}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
                },
              }}
            />
          </div>

          {/* Related Links */}
          {post.frontmatter.relatedLinks && post.frontmatter.relatedLinks.length > 0 && (
            <section className="space-y-6 border-t border-border pt-8">
              <h3 className="text-lg tracking-wide">Related</h3>
              <div className="space-y-3">
                {post.frontmatter.relatedLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    → {link.text}
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Boundary Note */}
          {post.frontmatter.boundaryNote && (
            <section className="space-y-4 border-t border-border pt-8">
              <p className="text-xs leading-relaxed text-muted-foreground">
                {post.frontmatter.boundaryNote}
              </p>
            </section>
          )}
        </div>
      </article>

      {/* Navigation */}
      <div className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-2xl px-6 py-8">
          <Link
            href="/blog"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            ← Back to all posts
          </Link>
        </div>
      </div>
    </main>
  );
}
