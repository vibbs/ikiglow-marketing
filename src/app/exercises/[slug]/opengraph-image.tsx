import { getTranslations } from "next-intl/server";
import {
  generateOGImageResponse,
  OG_SIZE,
  OG_CONTENT_TYPE,
} from "@/lib/og/generate-og-image";
import {
  exerciseCategories,
  exerciseRegistry,
  getExerciseBySlug,
  isExerciseCategory,
} from "@/exercises/registry";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return [
    ...exerciseCategories.map((category) => ({ slug: category.slug })),
    ...exerciseRegistry.map((exercise) => ({ slug: exercise.slug })),
  ];
}

export default async function OGImage({ params }: Props) {
  const { slug } = await params;
  const t = await getTranslations("metadata.exercises");

  // Check if this is a category
  if (isExerciseCategory(slug)) {
    return generateOGImageResponse({
      title: t(`categories.${slug}.title`).replace(" - IkiGlow", ""),
      description: t(`categories.${slug}.description`),
      type: "exercise",
    });
  }

  // Check if this is an exercise
  const exercise = getExerciseBySlug(slug);
  if (exercise) {
    return generateOGImageResponse({
      title: t(`items.${exercise.slug}.title`).replace(" - IkiGlow", ""),
      description: t(`items.${exercise.slug}.description`),
      type: "exercise",
    });
  }

  // Fallback
  return generateOGImageResponse({
    title: "Exercises",
    description:
      "Gentle practices for focus, calm, and self-awareness.",
    type: "exercise",
  });
}
