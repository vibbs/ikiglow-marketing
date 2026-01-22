import {
  generateOGImageResponse,
  OG_SIZE,
  OG_CONTENT_TYPE,
} from "@/lib/og/generate-og-image";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Blog - IkiGlow";

export default function OGImage() {
  return generateOGImageResponse({
    title: "Blog",
    description:
      "Reflections on purpose, attention, and living intentionally.",
    type: "blog",
  });
}
