import Link from "next/link";
import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { getAllGuides } from "@/lib/mdx/mdx-utils";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata.guides");
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function Guides() {
  const guides = await getAllGuides();
  const t = await getTranslations("guides");

  return (
    <main className="min-h-screen">
      {/* Header */}
      <div className="mx-auto max-w-2xl space-y-6 sm:space-y-8 px-4 sm:px-6 py-12 sm:py-16">
        <h1 className="text-2xl sm:text-3xl tracking-wide">{t("title")}</h1>
        <p className="text-sm sm:text-base text-muted-foreground">
          {t("description")}
        </p>
      </div>

      {/* Guides Grid */}
      <div className="mx-auto max-w-2xl space-y-4 sm:space-y-6 px-4 sm:px-6 pb-12 sm:pb-16">
        {guides.map((guide) => (
          <Link
            key={guide.slug}
            href={`/guides/${guide.slug}`}
            className="block space-y-3 sm:space-y-4 rounded-sm border border-border p-5 sm:p-6 transition-colors hover:border-primary/40"
          >
            <h2 className="text-lg sm:text-xl tracking-wide">{guide.frontmatter.title}</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {guide.frontmatter.description}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
