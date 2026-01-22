import {
  generateOGImageResponse,
  OG_SIZE,
  OG_CONTENT_TYPE,
} from "@/lib/og/generate-og-image";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Guides - IkiGlow";

export default function OGImage() {
  return generateOGImageResponse({
    title: "Guides",
    description:
      "Comprehensive guides for understanding yourself and navigating life's challenges with clarity.",
    type: "guide",
  });
}
