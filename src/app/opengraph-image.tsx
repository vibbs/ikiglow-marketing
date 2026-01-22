import {
  generateOGImageResponse,
  OG_SIZE,
  OG_CONTENT_TYPE,
} from "@/lib/og/generate-og-image";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "IkiGlow - A Calm Companion for Personal Growth";

export default function OGImage() {
  return generateOGImageResponse({
    title: "A Calm Companion for Personal Growth",
    description:
      "A space for reflection, focus, and intentional action. Discover your purpose through gentle guidance and practical tools.",
  });
}
