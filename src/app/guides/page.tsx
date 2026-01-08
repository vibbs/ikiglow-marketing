import Link from "next/link";
import type { Metadata } from "next";
import { getAllGuides } from "@/lib/mdx/mdx-utils";

export const metadata: Metadata = {
  title: "Guides — IkiGlow",
  description: "Comprehensive guides for understanding yourself and navigating life's challenges with clarity.",
};

export default async function Guides() {
  const guides = await getAllGuides();
  return (
    <main className="min-h-screen">
      {/* Header */}
      <div className="mx-auto max-w-2xl space-y-8 px-6 py-16">
        <h1 className="text-3xl tracking-wide">Guides</h1>
        <p className="text-base text-muted-foreground">
          Comprehensive resources for understanding yourself and navigating life&apos;s challenges
        </p>
      </div>

      {/* Guides Grid */}
      <div className="mx-auto max-w-2xl space-y-6 px-6 pb-16">
        {guides.map((guide) => (
          <Link
            key={guide.slug}
            href={`/guides/${guide.slug}`}
            className="block space-y-4 rounded-sm border border-border p-6 transition-colors hover:border-primary/40"
          >
            <h2 className="text-xl tracking-wide">{guide.frontmatter.title}</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {guide.frontmatter.description}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
