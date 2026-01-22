import {
  generateOGImageResponse,
  OG_SIZE,
  OG_CONTENT_TYPE,
} from "@/lib/og/generate-og-image";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Exercises - IkiGlow";

export default function OGImage() {
  return generateOGImageResponse({
    title: "Exercises",
    description:
      "Gentle practices for focus, calm, and self-awareness. Use them when you need them.",
    type: "exercise",
  });
}
