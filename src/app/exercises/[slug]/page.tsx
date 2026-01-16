import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { Eye, Type, Volume2 } from "lucide-react";
import { BodyShakeReleaseExercise } from "@/components/exercises/BodyShakeReleaseExercise";
import { BoxBreathingExercise } from "@/components/exercises/BoxBreathingExercise";
import { CoherentBreathingExercise } from "@/components/exercises/CoherentBreathingExercise";
import { DailyCheckInExercise } from "@/components/exercises/DailyCheckInExercise";
import { ExerciseShell } from "@/components/exercises/ExerciseShell";
import { FiveFourThreeTwoOneExercise } from "@/components/exercises/FiveFourThreeTwoOneExercise";
import { FourSevenEightExercise } from "@/components/exercises/FourSevenEightExercise";
import { GuidedVisualizationExercise } from "@/components/exercises/GuidedVisualizationExercise";
import { OneMinuteMindfulBreakExercise } from "@/components/exercises/OneMinuteMindfulBreakExercise";
import { PositiveAffirmationsExercise } from "@/components/exercises/PositiveAffirmationsExercise";
import { ProgressiveMuscleRelaxationExercise } from "@/components/exercises/ProgressiveMuscleRelaxationExercise";
import { SelfCompassionBreakExercise } from "@/components/exercises/SelfCompassionBreakExercise";
import { ThoughtReframingExercise } from "@/components/exercises/ThoughtReframingExercise";
import {
  exerciseCategories,
  exerciseRegistry,
  getExerciseBySlug,
  getExercisesByCategory,
  isExerciseCategory,
} from "@/exercises/registry";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const formatIcons = {
  visual: Eye,
  audio: Volume2,
  text: Type,
} as const;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const t = await getTranslations("metadata.exercises");
  const { slug } = await params;

  if (isExerciseCategory(slug)) {
    return {
      title: t(`categories.${slug}.title`),
      description: t(`categories.${slug}.description`),
    };
  }

  const exercise = getExerciseBySlug(slug);
  if (exercise) {
    return {
      title: t(`items.${exercise.slug}.title`),
      description: t(`items.${exercise.slug}.description`),
    };
  }

  return {
    title: t("title"),
    description: t("description"),
  };
}

export function generateStaticParams() {
  return [
    ...exerciseCategories.map((category) => ({ slug: category.slug })),
    ...exerciseRegistry.map((exercise) => ({ slug: exercise.slug })),
  ];
}

function getExerciseComponent(slug: string) {
  switch (slug) {
    case "box-breathing":
      return BoxBreathingExercise;
    case "four-seven-eight":
      return FourSevenEightExercise;
    case "coherent-breathing":
      return CoherentBreathingExercise;
    case "five-four-three-two-one":
      return FiveFourThreeTwoOneExercise;
    case "one-minute-mindful-break":
      return OneMinuteMindfulBreakExercise;
    case "positive-affirmations":
      return PositiveAffirmationsExercise;
    case "thought-reframing":
      return ThoughtReframingExercise;
    case "self-compassion-break":
      return SelfCompassionBreakExercise;
    case "daily-check-in":
      return DailyCheckInExercise;
    case "body-shake-release":
      return BodyShakeReleaseExercise;
    case "progressive-muscle-relaxation":
      return ProgressiveMuscleRelaxationExercise;
    case "guided-visualization":
      return GuidedVisualizationExercise;
    default:
      return null;
  }
}

export default async function ExerciseSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const tItems = await getTranslations("exercises.items");
  const tMeta = await getTranslations("exercises.meta");
  const tCategory = await getTranslations("exercises.categories");

  if (isExerciseCategory(slug)) {
    const category = exerciseCategories.find(
      (item) => item.slug === slug
    );
    if (!category) {
      notFound();
    }

    const exercises = getExercisesByCategory(category.slug);

    return (
      <main className="min-h-screen">
        <div className={category.washClassName}>
          <div className="mx-auto max-w-2xl space-y-6 sm:space-y-8 px-4 sm:px-6 pt-12 sm:pt-16 pb-6 sm:pb-8">
            <Link
              href="/exercises"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              ← {tCategory("backToExercises")}
            </Link>

            <div className="space-y-4">
              <h1 className="text-2xl sm:text-3xl tracking-wide">
                {tCategory(`${category.slug}.title`)}
              </h1>
              <p className="text-sm sm:text-base leading-relaxed">
                {tCategory(`${category.slug}.description`)}
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-3xl space-y-4 sm:space-y-6 px-4 sm:px-6 pt-6 sm:pt-8 pb-12 sm:pb-16">
          {exercises.length === 0 && (
            <div className="rounded-xl border border-border bg-background p-6 text-sm text-muted-foreground">
              {tCategory("comingSoon")}
            </div>
          )}

          {exercises.map((exercise) => (
            <Link
              key={exercise.slug}
              href={`/exercises/${exercise.slug}`}
              className="block space-y-3 sm:space-y-4 rounded-xl border border-border p-5 sm:p-6 transition-colors hover:border-primary/40"
            >
              <div className="space-y-2">
                <h2 className="text-lg sm:text-xl tracking-wide">
                  {tItems(`${exercise.slug}.title`)}
                </h2>
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
      </main>
    );
  }

  const exercise = getExerciseBySlug(slug);
  if (!exercise) {
    notFound();
  }

  const nextExercise = exercise.nextSlug
    ? getExerciseBySlug(exercise.nextSlug)
    : null;

  const nextLabel = nextExercise
    ? tItems(`${nextExercise.slug}.title`)
    : "";

  const ExerciseComponent = getExerciseComponent(exercise.slug);
  if (!ExerciseComponent) {
    notFound();
  }

  return (
    <ExerciseShell
      i18nKey={exercise.i18nKey}
      headerClassName={exercise.headerClassName}
      panelClassName={exercise.panelClassName}
      nextExercise={
        nextExercise
          ? {
              href: `/exercises/${nextExercise.slug}`,
              label: nextLabel,
            }
          : undefined
      }
    >
      <ExerciseComponent />
    </ExerciseShell>
  );
}
