import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(_request: NextRequest) {
  // Block CMS routes in production
  // CMS routes should only be accessible during local development
  if (process.env.NODE_ENV === "production") {
    return new NextResponse(null, { status: 404 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/cms/:path*", "/api/cms/:path*"],
};
