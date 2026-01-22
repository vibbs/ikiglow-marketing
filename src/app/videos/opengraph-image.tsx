import {
  generateOGImageResponse,
  OG_SIZE,
  OG_CONTENT_TYPE,
} from "@/lib/og/generate-og-image";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Videos - IkiGlow";

export default function OGImage() {
  return generateOGImageResponse({
    title: "Videos",
    description:
      "Brief moments of reflection. Short-form videos on mindset, focus, and intentional living.",
  });
}
