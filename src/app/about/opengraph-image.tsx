import {
  generateOGImageResponse,
  OG_SIZE,
  OG_CONTENT_TYPE,
} from "@/lib/og/generate-og-image";
import { getAboutPage } from "@/lib/mdx/mdx-utils";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "About - IkiGlow";

export default async function OGImage() {
  const about = await getAboutPage();

  return generateOGImageResponse({
    title: about.frontmatter.title,
    description: about.frontmatter.description,
    type: "page",
  });
}
