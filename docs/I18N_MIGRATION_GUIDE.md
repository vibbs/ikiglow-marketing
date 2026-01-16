# I18N Migration Guide

## Overview
This document outlines the internationalization (i18n) implementation for the IkiGlow website using `next-intl`.

## Architecture

### Setup Files
1. **`/locales/en/`** - English translations (JSON files organized by feature)
2. **`/src/i18n/config.ts`** - Locale configuration
3. **`/src/i18n/request.ts`** - Server-side i18n setup
4. **`/src/middleware.ts`** - Next.js middleware for locale handling
5. **`next.config.ts`** - Next-intl plugin configuration

### Translation Files Structure
```
locales/en/
├── common.json       # Nav, footer, buttons, links
├── home.json         # Homepage content
├── blog.json         # Blog listing
├── exercises.json    # All exercises (breathing, grounding, journaling)
├── guides.json       # Guides listing
├── newsletter.json   # Newsletter page
├── waitlist.json     # Waitlist page
├── videos.json       # Videos page
├── metadata.json     # SEO metadata for all pages
└── index.ts          # Exports all translations
```

## Usage Patterns

### Server Components
```tsx
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("namespace");
  return <h1>{t("key")}</h1>;
}
```

### Client Components
```tsx
"use client";

import { useTranslations } from "next-intl";

export function Component() {
  const t = useTranslations("namespace");
  return <button>{t("key")}</button>;
}
```

### With Variables
```tsx
{t("footer.copyright", { year: new Date().getFullYear() })}
```

### Multiple Namespaces
```tsx
const t = useTranslations("home");
const tCommon = useTranslations("common");

return (
  <>
    <h1>{t("hero.title")}</h1>
    <button>{tCommon("buttons.subscribe")}</button>
  </>
);
```

## Migration Status

### ✅ Completed
- [x] next-intl package installed
- [x] i18n configuration files created
- [x] Middleware configured
- [x] Translation JSON files created (10 files)
- [x] Root layout updated with NextIntlClientProvider
- [x] Header component migrated
- [x] Footer component migrated
- [x] Homepage migrated

### 🔄 In Progress
- [ ] Blog pages (listing, category filter, post pages)
- [ ] Exercises pages (breathing, grounding, journaling)
- [ ] Guides, Newsletter, Waitlist, Videos pages
- [ ] Exercise components (BreathingExercise, GroundingExercise)
- [ ] Metadata updates for all pages

### 📋 Remaining Pages to Migrate

#### Blog Section
- `/src/app/blog/page.tsx` - Blog listing
- `/src/components/blog/CategoryFilter.tsx` - Category filter component

#### Exercises
- `/src/app/exercises/page.tsx` - Exercises listing
- `/src/app/exercises/breathing/page.tsx` - Breathing exercise page
- `/src/app/exercises/grounding/page.tsx` - Grounding exercise page
- `/src/app/exercises/journaling/page.tsx` - Journaling page
- `/src/components/exercises/BreathingExercise.tsx` - Breathing component
- `/src/components/exercises/GroundingExercise.tsx` - Grounding component

#### Other Pages
- `/src/app/guides/page.tsx` - Guides listing
- `/src/app/newsletter/page.tsx` - Newsletter page
- `/src/app/waitlist/page.tsx` - Waitlist page
- `/src/app/videos/page.tsx` - Videos page

## Adding New Locales (Future)

### Step 1: Create Translation Files
```bash
# Copy English files as template
cp -r locales/en locales/es
```

### Step 2: Translate JSON Files
Update all JSON files in `locales/es/` with Spanish translations.

### Step 3: Update Configuration
```ts
// src/i18n/config.ts
export const locales = ["en", "es"] as const;
```

### Step 4: Update Middleware (Optional)
If you want locale prefixes in URLs:
```ts
// src/middleware.ts
export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: "as-needed", // Use /es/... for Spanish, / for English
});
```

## Key Benefits

1. **Type Safety**: TypeScript autocomplete for all translation keys
2. **Zero Breaking Changes**: All existing English text remains unchanged
3. **SEO Ready**: Metadata translations included
4. **Scalable**: Add new languages without code changes
5. **Developer Experience**: Clear namespace organization
6. **Performance**: Server-side rendering with minimal bundle size

## Common Patterns

### Nested Keys
```json
{
  "hero": {
    "title": "A calm companion",
    "subtitle": "For personal growth"
  }
}
```
Usage: `t("hero.title")`

### Arrays of Strings
```json
{
  "prompts": [
    "Question 1",
    "Question 2"
  ]
}
```
Usage: `t("prompts.0")` or map over array in translation file

### Pluralization
```json
{
  "posts": "{count} {count, plural, one {post} other {posts}}"
}
```
Usage: `t("posts", { count: 5 })`

## Testing Checklist

- [ ] All pages load without errors
- [ ] All text renders correctly
- [ ] No hardcoded strings remain
- [ ] Build completes successfully
- [ ] Type errors are resolved
- [ ] Metadata is properly localized

## Resources

- [next-intl Documentation](https://next-intl-docs.vercel.app/)
- [ICU Message Format](https://formatjs.io/docs/core-concepts/icu-syntax/)
- [Next.js i18n Routing](https://nextjs.org/docs/app/building-your-application/routing/internationalization)
