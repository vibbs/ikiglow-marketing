import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { DailyCheckInReflection } from "@/components/reflections/DailyCheckInReflection";
import { ThoughtReframingReflection } from "@/components/reflections/ThoughtReframingReflection";
import { ExerciseShell } from "@/components/exercises/ExerciseShell";
import {
  reflectionRegistry,
  getReflectionBySlug,
} from "@/reflections/registry";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const t = await getTranslations("metadata.reflections");
  const { slug } = await params;

  const reflection = getReflectionBySlug(slug);
  if (reflection) {
    return {
      title: t(`items.${reflection.slug}.title`),
      description: t(`items.${reflection.slug}.description`),
    };
  }

  return {
    title: t("title"),
    description: t("description"),
  };
}

export function generateStaticParams() {
  return reflectionRegistry.map((reflection) => ({ slug: reflection.slug }));
}

function getReflectionComponent(slug: string) {
  switch (slug) {
    case "daily-check-in":
      return DailyCheckInReflection;
    case "thought-reframing":
      return ThoughtReframingReflection;
    default:
      return null;
  }
}

export default async function ReflectionSlugPage({ params }: PageProps) {
  const { slug } = await params;

  const reflection = getReflectionBySlug(slug);
  if (!reflection) {
    notFound();
  }

  const ReflectionComponent = getReflectionComponent(reflection.slug);
  if (!ReflectionComponent) {
    notFound();
  }

  return (
    <ExerciseShell
      i18nKey={reflection.i18nKey}
      headerClassName={reflection.headerClassName}
      panelClassName={reflection.panelClassName}
    >
      <ReflectionComponent i18nKey={reflection.i18nKey} />
    </ExerciseShell>
  );
}
