import {
  generateOGImageResponse,
  OG_SIZE,
  OG_CONTENT_TYPE,
} from "@/lib/og/generate-og-image";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Early Access - IkiGlow";

export default function OGImage() {
  return generateOGImageResponse({
    title: "Early Access",
    description:
      "Join the waitlist for early access to IkiGlow's full platform. No timeline pressure, just a gentle heads-up when we're ready.",
  });
}
