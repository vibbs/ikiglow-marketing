import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "./i18n/config";

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale,

  // Don't use locale prefixes for the default locale
  // This keeps URLs clean: /blog instead of /en/blog
  localePrefix: "never",
});

export const config = {
  // Match all pathnames except for API routes, static files, and special Next.js files
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
