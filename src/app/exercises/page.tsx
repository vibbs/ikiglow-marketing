import Link from "next/link";
import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Eye, Type, Volume2 } from "lucide-react";
import { exerciseCategories, exerciseRegistry, getExerciseBySlug } from "@/exercises/registry";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata.exercises");
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function Exercises() {
  const t = useTranslations("exercises.hub");
  const tMeta = useTranslations("exercises.meta");
  const tCategories = useTranslations("exercises.categories");
  const tItems = useTranslations("exercises.items");

  const formatIcons = {
    visual: Eye,
    audio: Volume2,
    text: Type,
  } as const;

  const quickPickSlots = [
    { key: "calmIn2", slug: "box-breathing" },
    { key: "groundInPresent", slug: "five-four-three-two-one" },
    { key: "sleepWindDown", slug: "four-seven-eight" },
    { key: "resetFocus", slug: "coherent-breathing" },
    { key: "confidenceBoost" },
  ] as const;

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-3xl space-y-6 sm:space-y-8 px-4 sm:px-6 py-12 sm:py-16">
        <h1 className="text-2xl sm:text-3xl tracking-wide">{t("title")}</h1>
        <p className="text-sm sm:text-base text-muted-foreground">
          {t("subtitle")}
        </p>
      </div>

      <section className="mx-auto max-w-3xl space-y-4 sm:space-y-6 px-4 sm:px-6 pb-12 sm:pb-16">
        <h2 className="text-lg sm:text-xl tracking-wide">
          {t("quickPicks.title")}
        </h2>
        <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
          {quickPickSlots.map((pick) => {
            const exercise = pick.slug ? getExerciseBySlug(pick.slug) : null;
            const duration = exercise
              ? tMeta(`durations.${exercise.durationRange}`)
              : t("quickPicks.durationPlaceholder");

            if (!pick.slug || !exercise) {
              return (
                <div
                  key={pick.key}
                  className="space-y-2 rounded-xl border border-border bg-muted/30 p-4 sm:p-5 text-sm text-muted-foreground"
                >
                  <p className="text-base text-foreground">
                    {t(`quickPicks.items.${pick.key}`)}
                  </p>
                  <p>{duration}</p>
                  <p className="text-xs">{t("quickPicks.comingSoon")}</p>
                </div>
              );
            }

            return (
              <Link
                key={pick.key}
                href={`/exercises/${exercise.slug}`}
                className="space-y-2 rounded-xl border border-border p-4 sm:p-5 transition-colors hover:border-primary/40"
              >
                <p className="text-base tracking-wide">
                  {t(`quickPicks.items.${pick.key}`)}
                </p>
                <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                  <span className="rounded-full border border-border px-3 py-1">
                    {duration}
                  </span>
                  {exercise.formats.map((format) => {
                    const Icon = formatIcons[format];
                    return (
                      <span
                        key={format}
                        className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1"
                      >
                        <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                        {tMeta(`formats.${format}`)}
                      </span>
                    );
                  })}
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-3xl space-y-4 sm:space-y-6 px-4 sm:px-6 pb-12 sm:pb-16">
        <h2 className="text-lg sm:text-xl tracking-wide">
          {t("categories.title")}
        </h2>
        <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
          {exerciseCategories.map((category) => (
            <Link
              key={category.slug}
              href={`/exercises/${category.slug}`}
              className="space-y-2 rounded-xl border border-border p-4 sm:p-5 transition-colors hover:border-primary/40"
            >
              <p className="text-base tracking-wide">
                {tCategories(`${category.slug}.title`)}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {tCategories(`${category.slug}.description`)}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl space-y-4 sm:space-y-6 px-4 sm:px-6 pb-12 sm:pb-16">
        <h2 className="text-lg sm:text-xl tracking-wide">
          All Exercises
        </h2>
        <div className="space-y-3 sm:space-y-4">
          {exerciseRegistry.map((exercise) => (
            <Link
              key={exercise.slug}
              href={`/exercises/${exercise.slug}`}
              className="block space-y-3 sm:space-y-4 rounded-xl border border-border p-5 sm:p-6 transition-colors hover:border-primary/40"
            >
              <div className="space-y-2">
                <h3 className="text-lg sm:text-xl tracking-wide">
                  {tItems(`${exercise.slug}.title`)}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {tItems(`${exercise.slug}.summary`)}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                <span className="rounded-full border border-border px-3 py-1">
                  {tMeta(`durations.${exercise.durationRange}`)}
                </span>
                {exercise.formats.map((format) => {
                  const Icon = formatIcons[format];
                  return (
                    <span
                      key={format}
                      className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1"
                    >
                      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                      {tMeta(`formats.${format}`)}
                    </span>
                  );
                })}
              </div>
            </Link>
          ))}
        </div>
      </section>

    </main>
  );
}
