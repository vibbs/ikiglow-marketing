import { getTranslations } from "next-intl/server";
import {
  generateOGImageResponse,
  OG_SIZE,
  OG_CONTENT_TYPE,
} from "@/lib/og/generate-og-image";
import {
  reflectionRegistry,
  getReflectionBySlug,
} from "@/reflections/registry";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return reflectionRegistry.map((reflection) => ({ slug: reflection.slug }));
}

export default async function OGImage({ params }: Props) {
  const { slug } = await params;
  const t = await getTranslations("metadata.reflections");

  const reflection = getReflectionBySlug(slug);
  if (reflection) {
    return generateOGImageResponse({
      title: t(`items.${reflection.slug}.title`).replace(" - IkiGlow", ""),
      description: t(`items.${reflection.slug}.description`),
      type: "reflection",
    });
  }

  // Fallback
  return generateOGImageResponse({
    title: "Reflections",
    description:
      "Open-ended prompts for clarity, insight, and self-understanding.",
    type: "reflection",
  });
}
