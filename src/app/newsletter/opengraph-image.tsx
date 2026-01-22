import {
  generateOGImageResponse,
  OG_SIZE,
  OG_CONTENT_TYPE,
} from "@/lib/og/generate-og-image";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Newsletter - IkiGlow";

export default function OGImage() {
  return generateOGImageResponse({
    title: "Newsletter",
    description:
      "Weekly reflections on purpose, clarity, and intentional living. One insight, one framework, one reflection.",
  });
}
