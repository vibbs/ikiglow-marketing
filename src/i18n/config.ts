export const locales = ["en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

// Future locales can be added here:
// export const locales = ["en", "es", "fr", "ja"] as const;
