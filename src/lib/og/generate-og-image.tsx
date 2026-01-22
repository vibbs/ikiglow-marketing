import { ImageResponse } from "next/og";

export const OG_SIZE = {
  width: 1200,
  height: 630,
};

export const OG_CONTENT_TYPE = "image/png";

// Design tokens from Yohaku+ system
const colors = {
  paper0: "#FAFAF8",
  paper1: "#F2F1ED",
  ink900: "#1C1C1C",
  ink500: "#7A7A7A",
  sage: "#6F846F",
};

export interface OGImageOptions {
  title: string;
  description?: string;
  type?: "blog" | "guide" | "exercise" | "reflection" | "page";
}

function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - 3).trim() + "...";
}

function getTypeLabel(type?: OGImageOptions["type"]): string | null {
  switch (type) {
    case "blog":
      return "Blog";
    case "guide":
      return "Guide";
    case "exercise":
      return "Exercise";
    case "reflection":
      return "Reflection";
    default:
      return null;
  }
}

export function generateOGImageResponse(options: OGImageOptions): ImageResponse {
  const { title, description, type } = options;
  const typeLabel = getTypeLabel(type);
  const truncatedDescription = description
    ? truncateText(description, 140)
    : null;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "60px",
          background: `linear-gradient(125deg, ${colors.paper0} 0%, ${colors.paper1} 60%, ${colors.sage} 100%)`,
          position: "relative",
        }}
      >
        {/* Subtle radial overlay for depth */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `radial-gradient(circle at 30% 20%, rgba(111, 132, 111, 0.04) 0%, transparent 50%)`,
          }}
        />

        {/* Content container */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Header with branding */}
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "8px",
            }}
          >
            <span
              style={{
                fontSize: "28px",
                fontWeight: 700,
                color: colors.sage,
                letterSpacing: "0.02em",
              }}
            >
              IkiGlow
            </span>
            {typeLabel && (
              <>
                <span
                  style={{
                    fontSize: "28px",
                    fontWeight: 400,
                    color: colors.ink500,
                    letterSpacing: "0.01em"
                  }}
                >
                  - {typeLabel}
                </span>
              </>
            )}
          </div>

          {/* Spacer */}
          <div style={{ display: "flex", flex: 1 }} />

          {/* Main content */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            {/* Title */}
            <h1
              style={{
                fontSize: "56px",
                fontWeight: 300,
                color: colors.ink900,
                letterSpacing: "0.02em",
                lineHeight: 1.2,
                margin: 0,
                maxWidth: "900px",
              }}
            >
              {truncateText(title, 80)}
            </h1>

            {/* Description */}
            {truncatedDescription && (
              <p
                style={{
                  fontSize: "24px",
                  fontWeight: 300,
                  color: colors.ink500,
                  letterSpacing: "0.01em",
                  lineHeight: 1.5,
                  margin: 0,
                  maxWidth: "800px",
                }}
              >
                {truncatedDescription}
              </p>
            )}
          </div>

          {/* Bottom spacer */}
          <div style={{ display: "flex", height: "40px" }} />
        </div>

        {/* Subtle bottom accent line */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: `linear-gradient(90deg, ${colors.sage}40 0%, transparent 100%)`,
          }}
        />
      </div>
    ),
    {
      ...OG_SIZE,
    }
  );
}
