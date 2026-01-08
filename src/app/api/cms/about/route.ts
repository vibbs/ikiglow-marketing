import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const CONTENT_DIR = path.join(process.cwd(), "000-content");

export async function GET() {
  try {
    const filePath = path.join(CONTENT_DIR, "about", "about.mdx");
    const rawContent = await fs.readFile(filePath, "utf8");

    return NextResponse.json({ rawContent });
  } catch (error) {
    console.error("Error reading about page:", error);
    return NextResponse.json(
      { error: "Failed to read about page" },
      { status: 500 }
    );
  }
}
