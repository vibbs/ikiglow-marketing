import {
  generateOGImageResponse,
  OG_SIZE,
  OG_CONTENT_TYPE,
} from "@/lib/og/generate-og-image";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Journaling Prompts - IkiGlow";

export default function OGImage() {
  return generateOGImageResponse({
    title: "Journaling Prompts",
    description:
      "Thoughtful prompts across 6 categories to help you explore what matters.",
    type: "reflection",
  });
}
