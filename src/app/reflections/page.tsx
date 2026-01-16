import Link from "next/link";
import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata.reflections");
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function Reflections() {
  const t = useTranslations("reflections.listing");

  const mindsetItems = t.raw("philosophy.mindsetItems") as string[];
  const characteristicsItems = t.raw("philosophy.characteristicsItems") as string[];
  const examplesItems = t.raw("philosophy.examplesItems") as string[];
  const comingSoonItems = t.raw("comingSoon.items") as Array<{
    title: string;
    description: string;
  }>;

  return (
    <main className="min-h-screen">
      {/* Header */}
      <div className="mx-auto max-w-2xl space-y-6 sm:space-y-8 px-4 sm:px-6 py-12 sm:py-16">
        <h1 className="text-2xl sm:text-3xl tracking-wide">{t("title")}</h1>
        <p className="text-sm sm:text-base text-muted-foreground">
          {t("description")}
        </p>
      </div>

      {/* Reflections Grid */}
      <div className="mx-auto max-w-2xl space-y-4 sm:space-y-6 px-4 sm:px-6 pb-12 sm:pb-16">
        <Link
          href="/reflections/journaling"
          className="block space-y-3 sm:space-y-4 rounded-sm border border-border p-5 sm:p-6 transition-colors hover:border-primary/40"
        >
          <h2 className="text-lg sm:text-xl tracking-wide">{t("journalingPrompts.title")}</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {t("journalingPrompts.description")}
          </p>
        </Link>

        <div className="space-y-3 sm:space-y-4">
          <h2 className="text-sm sm:text-base tracking-wide text-muted-foreground">
            {t("comingSoon.title")}
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {comingSoonItems.map((item) => (
              <div
                key={item.title}
                className="block space-y-3 sm:space-y-4 rounded-sm border border-border bg-muted/30 p-5 sm:p-6 opacity-70"
              >
                <h3 className="text-lg sm:text-xl tracking-wide">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                <div className="text-xs text-muted-foreground">
                  {t("comingSoon.label")}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Philosophy */}
      <div className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-2xl space-y-6 sm:space-y-8 px-4 sm:px-6 py-12 sm:py-16">
          <h2 className="text-lg sm:text-xl tracking-wide">{t("philosophy.title")}</h2>

          <div className="space-y-6 text-sm sm:text-base leading-relaxed">
            <div className="space-y-2">
              <h3 className="text-base sm:text-lg tracking-wide">{t("philosophy.roleTitle")}</h3>
              <p className="text-muted-foreground">{t("philosophy.roleText")}</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-base sm:text-lg tracking-wide">{t("philosophy.mindsetTitle")}</h3>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                {mindsetItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-base sm:text-lg tracking-wide">{t("philosophy.characteristicsTitle")}</h3>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                {characteristicsItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-base sm:text-lg tracking-wide">{t("philosophy.examplesTitle")}</h3>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                {examplesItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}