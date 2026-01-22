import {
  generateOGImageResponse,
  OG_SIZE,
  OG_CONTENT_TYPE,
} from "@/lib/og/generate-og-image";
import { getGuideBySlug, getAllGuides } from "@/lib/mdx/mdx-utils";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const guides = await getAllGuides();
  return guides.map((guide) => ({ slug: guide.slug }));
}

export default async function OGImage({ params }: Props) {
  const { slug } = await params;
  const guide = await getGuideBySlug(slug);

  if (!guide) {
    return generateOGImageResponse({
      title: "Guide",
      description: "Guide not found",
      type: "guide",
    });
  }

  return generateOGImageResponse({
    title: guide.frontmatter.title,
    description: guide.frontmatter.description,
    type: "guide",
  });
}
