import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const CONTENT_DIR = path.join(process.cwd(), "000-content");

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const filePath = path.join(CONTENT_DIR, "guides", `${slug}.mdx`);
    const rawContent = await fs.readFile(filePath, "utf8");

    return NextResponse.json({ rawContent });
  } catch (error) {
    console.error("Error reading guide:", error);
    return NextResponse.json(
      { error: "Failed to read guide" },
      { status: 500 }
    );
  }
}
