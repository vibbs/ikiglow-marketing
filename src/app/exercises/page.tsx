import Link from "next/link";
import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata.exercises");
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function Exercises() {
  const t = useTranslations("exercises.listing");

  return (
    <main className="min-h-screen">
      {/* Header */}
      <div className="mx-auto max-w-2xl space-y-6 sm:space-y-8 px-4 sm:px-6 py-12 sm:py-16">
        <h1 className="text-2xl sm:text-3xl tracking-wide">{t("title")}</h1>
        <p className="text-sm sm:text-base text-muted-foreground">
          {t("description")}
        </p>
      </div>

      {/* Exercises Grid */}
      <div className="mx-auto max-w-2xl space-y-4 sm:space-y-6 px-4 sm:px-6 pb-12 sm:pb-16">
        <Link
          href="/exercises/breathing"
          className="block space-y-3 sm:space-y-4 rounded-sm border border-border p-5 sm:p-6 transition-colors hover:border-primary/40"
        >
          <h2 className="text-lg sm:text-xl tracking-wide">{t("breathingExercise.title")}</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {t("breathingExercise.description")}
          </p>
        </Link>

        <Link
          href="/exercises/grounding"
          className="block space-y-3 sm:space-y-4 rounded-sm border border-border p-5 sm:p-6 transition-colors hover:border-primary/40"
        >
          <h2 className="text-lg sm:text-xl tracking-wide">{t("groundingPractice.title")}</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {t("groundingPractice.description")}
          </p>
        </Link>

        <Link
          href="/exercises/journaling"
          className="block space-y-3 sm:space-y-4 rounded-sm border border-border p-5 sm:p-6 transition-colors hover:border-primary/40"
        >
          <h2 className="text-lg sm:text-xl tracking-wide">{t("journalingPrompts.title")}</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {t("journalingPrompts.description")}
          </p>
        </Link>

        <div className="block space-y-3 sm:space-y-4 rounded-sm border border-border bg-muted/30 p-5 sm:p-6 opacity-60">
          <h2 className="text-lg sm:text-xl tracking-wide">{t("goalSettingFramework.title")}</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {t("goalSettingFramework.description")}
          </p>
          <div className="text-xs text-muted-foreground">{t("goalSettingFramework.comingSoon")}</div>
        </div>

        <div className="block space-y-3 sm:space-y-4 rounded-sm border border-border bg-muted/30 p-5 sm:p-6 opacity-60">
          <h2 className="text-lg sm:text-xl tracking-wide">{t("stressReset.title")}</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {t("stressReset.description")}
          </p>
          <div className="text-xs text-muted-foreground">{t("stressReset.comingSoon")}</div>
        </div>
      </div>

      {/* Philosophy */}
      <div className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-2xl space-y-4 sm:space-y-6 px-4 sm:px-6 py-12 sm:py-16">
          <h2 className="text-lg sm:text-xl tracking-wide">{t("philosophy.title")}</h2>
          <div className="space-y-4 text-sm sm:text-base leading-relaxed">
            <p>{t("philosophy.line1")}</p>
            <p>{t("philosophy.line2")}</p>
            <p>{t("philosophy.line3")}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
