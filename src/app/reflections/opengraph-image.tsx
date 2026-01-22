import {
  generateOGImageResponse,
  OG_SIZE,
  OG_CONTENT_TYPE,
} from "@/lib/og/generate-og-image";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Reflections - IkiGlow";

export default function OGImage() {
  return generateOGImageResponse({
    title: "Reflections",
    description:
      "Open-ended prompts for clarity, insight, and self-understanding.",
    type: "reflection",
  });
}
