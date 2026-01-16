# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**IkiGlow Website** - Marketing website and micro-app platform for IkiGlow, featuring blog content, short-form videos, and interactive wellness exercises.

IkiGlow fuses **Ikigai** (Japanese concept of purpose) with **Glow** (radiance from living fully). The platform guides users to discover the intersection of what they love, what they're good at, what the world needs, and what they can be rewarded for.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4 with OKLCH color space
- **UI Components**: shadcn/ui (New York style)
- **Icons**: lucide-react
- **Utilities**: clsx + tailwind-merge via `cn()` helper
- **Content**: MDX-based content system with gray-matter frontmatter parsing
- **CMS**: File-based content management at `/protected/cms`
- **Internationalization**: next-intl for localization support

## Development Commands

```bash
# Development
npm run dev          # Start development server at http://localhost:3000

# Production
npm run build        # Build for production
npm run start        # Run production build

# Code quality
npm run lint         # Run ESLint
```

## Design Philosophy: Yohaku+ (余白) - Meaningful Emptiness with Atmosphere

The entire codebase follows a Yohaku+ design system-an evolution of Muji-inspired minimalism that adds subtle color atmosphere and slow, meaningful motion while maintaining the core philosophy of intentional space.

**Rule: Color is atmosphere, not emphasis. Motion should lower pulse, not raise attention.**

**Key Design Principles:**
- **Generous whitespace**: Components should breathe. Use `space-y-8`, `space-y-12`, `space-y-16` liberally
- **Tinted surfaces over borders**: Use Wash backgrounds (Sage, Sky, Blush) to define sections
- **Moss accent**: Primary accent `#6F846F` - use sparingly (<5% of screen)
- **Soft rounded corners**: `rounded-xl` (14-18px) for interactive elements
- **Typography**: Font-light, generous line-height (1.8), letter-spacing (0.01em-0.02em)
- **Slow transitions**: Use `ease-[cubic-bezier(0.2,0.8,0.2,1)]` with 220-420ms duration
- **No hard guidance**: Allow reflection and discovery, don't force users down paths

## Architecture

### App Router Structure

```
src/app/
├── page.tsx              # Homepage: brand story + navigation
├── layout.tsx            # Root layout with fonts (Geist Sans/Mono)
├── globals.css           # Design tokens + Tailwind v4 config
├── blog/
│   ├── page.tsx          # Blog listing (pulls from MDX)
│   └── [slug]/           # Dynamic blog post route
├── guides/
│   ├── page.tsx          # Guides listing (pulls from MDX)
│   └── [slug]/           # Dynamic guide route
├── about/
│   └── page.tsx          # About page (renders from MDX)
├── exercises/
│   ├── breathing/        # 4-4-6-2 breathing pattern exercise
│   └── grounding/        # 5-4-3-2-1 sensory grounding technique
├── protected/
│   └── cms/              # CMS admin interface (future auth)
│       ├── blog/         # Blog manager
│       ├── guides/       # Guides manager
│       └── about/        # About page editor
└── api/
    └── cms/              # API routes for fetching raw MDX content
```

### Content Structure

```
000-content/              # MDX content files (git-tracked)
├── blog/
│   └── *.mdx             # Blog posts with frontmatter
├── guides/
│   └── *.mdx             # Guides with frontmatter
└── about/
    └── about.mdx         # About page content
```

### Component Organization

```
src/components/
├── ui/                   # shadcn/ui components (Button, Card, etc.)
├── cms/
│   └── MDXEditor.tsx     # Reusable MDX editor with preview
└── exercises/
    ├── BreathingExercise.tsx  # Client component with timer state
    └── GroundingExercise.tsx  # Client component with multi-step form
```

### Library Organization

```
src/lib/
└── mdx/
    ├── mdx-utils.ts          # Content utilities (getAll, getBySlug, etc.)
    └── mdx-components.tsx    # Custom MDX components with IkiGlow styling
```

### Type Definitions

```
src/types/
└── content.ts            # TypeScript types for content (BlogPost, Guide, etc.)
```

### Path Aliases

TypeScript path aliases are configured in `tsconfig.json`:
- `@/*` → `./src/*`
- Components: `@/components`
- Utils: `@/lib/utils`
- Types: `@/types`

## Internationalization (i18n)

The project uses **next-intl** for internationalization support. All user-facing text is stored in translation files for future localization.

### Translation System

**IMPORTANT: Never hardcode user-facing text. Always use translations.**

**Translation Files:**
```
locales/en/
├── common.json        # Nav, footer, buttons, shared UI
├── home.json          # Homepage content
├── blog.json          # Blog listings
├── exercises.json     # All exercises (breathing, grounding, journaling)
├── guides.json        # Guides listing
├── newsletter.json    # Newsletter page
├── waitlist.json      # Waitlist page
├── videos.json        # Videos page
└── metadata.json      # SEO metadata
```

### Usage Patterns

**Server Components:**
```tsx
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("namespace"); // e.g., "home", "blog"
  const tCommon = useTranslations("common"); // for shared strings

  return (
    <div>
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
      <button>{tCommon("buttons.submit")}</button>
    </div>
  );
}
```

**Client Components:**
```tsx
"use client";
import { useTranslations } from "next-intl";

export function Component() {
  const t = useTranslations("namespace");
  return <button>{t("key")}</button>;
}
```

**With Variables:**
```tsx
{t("footer.copyright", { year: new Date().getFullYear() })}
```

**Metadata:**
```tsx
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata.blog");
  return {
    title: t("title"),
    description: t("description"),
  };
}
```

### Translation Namespaces

- `common`: Navigation, footer, buttons, links
  - `common.nav.*` - Navigation links
  - `common.footer.*` - Footer sections
  - `common.buttons.*` - Reusable buttons
  - `common.links.*` - Reusable link text

- `home`: Homepage content
  - `home.hero.*` - Hero section
  - `home.values.*` - Value propositions
  - `home.startSmall.*` - Exercise cards

- `exercises`: All exercise content
  - `exercises.listing.*` - Exercise listing page
  - `exercises.breathing.*` - Breathing exercise
  - `exercises.grounding.*` - Grounding exercise
  - `exercises.journaling.*` - Journaling prompts

- `blog`, `guides`, `newsletter`, `waitlist`, `videos`: Page-specific content

### Adding New Translations

1. Add key to appropriate JSON file in `locales/en/`
2. Use in component: `{t("newKey")}`
3. TypeScript will autocomplete available keys

### Localization Best Practices & Rules

**CRITICAL: This is non-negotiable for all code you write.**

1. **Never hardcode user-facing text**
   - ❌ BAD: `<button>Begin</button>`
   - ✅ GOOD: `<button>{t("phases.begin")}</button>`

2. **All product copy belongs in locales/**
   - Button labels → `locales/en/common.json` or page-specific JSON
   - Placeholders → Translation files
   - Instructions → Translation files
   - Error messages → Translation files
   - Aria labels → Translation files
   - Alt text → Translation files
   - Success/confirmation messages → Translation files

3. **Component structure for client components**
   ```tsx
   "use client";
   import { useTranslations } from "next-intl";

   export function MyComponent() {
     const t = useTranslations("namespace");
     const tCommon = useTranslations("common"); // for shared strings

     return (
       <div>
         <h1>{t("title")}</h1>
         <button>{tCommon("buttons.save")}</button>
       </div>
     );
   }
   ```

4. **Component structure for server components**
   ```tsx
   import { useTranslations } from "next-intl";

   export default function Page() {
     const t = useTranslations("namespace");
     return <h1>{t("title")}</h1>;
   }
   ```

5. **Before creating any new component:**
   - First, add all necessary strings to the appropriate `locales/en/*.json` file
   - Then import and use `useTranslations()` in the component
   - Never write the component with hardcoded strings "to be replaced later"

6. **When reviewing existing code:**
   - If you see ANY hardcoded user-facing text, fix it immediately
   - Add the strings to the appropriate locale file
   - Update the component to use translations

7. **Exceptions (the ONLY acceptable hardcoded strings):**
   - Developer console.log messages
   - Code comments
   - Technical constants not shown to users
   - Environment variable names
   - File paths

8. **Choosing the right namespace:**
   - Page-specific content → Use page namespace (e.g., `home`, `blog`, `exercises`)
   - Shared UI elements → `common`
   - Shared buttons → `common.buttons.*`
   - Shared navigation → `common.nav.*`
   - Shared footer → `common.footer.*`

9. **Adding new locale files:**
   - If you need a new namespace, create the file in `locales/en/`
   - Export it from `locales/en/index.ts`
   - Add it to the messages type in i18n config

**Remember: Future internationalization depends on this. Every hardcoded string is technical debt.**

### Future Localization

To add a new language (e.g., Spanish):
1. Copy `locales/en/` to `locales/es/`
2. Translate all JSON files
3. Update `src/i18n/config.ts`:
   ```ts
   export const locales = ["en", "es"] as const;
   ```
4. No code changes needed!

**See `docs/I18N_MIGRATION_GUIDE.md` for complete documentation.**

## Interactive Exercise Architecture

Both breathing and grounding exercises follow this pattern:

1. **Client components** (`"use client"` directive) - require state management
2. **Self-contained state** - useState/useEffect, no external state management
3. **Minimal UI** - Following Yohaku principles, focus on the practice itself
4. **Gentle guidance** - Instructions are prompts, not commands

**Breathing Exercise:**
- 4-phase cycle: inhale (4s) → hold (4s) → exhale (6s) → rest (2s)
- **Color-as-instruction**: Teal glow (inhale) → Indigo wash (hold) → Rose→Sage dissolve (exhale) → Sage calm (rest)
- Visual feedback via animated circle with scale/opacity/color transitions
- Single interval timer managing phase transitions
- Glows enhanced in Night Space (10-14% opacity vs 6-8% day)

**Grounding Exercise:**
- 5-step sensory awareness (5-4-3-2-1 technique)
- **Sage wash background** (grounding, calm)
- Progress indicator with Sage glow on active step
- Textarea for reflection at each step
- Completion state uses **Gold wash** (awareness, insight)
- State persists across steps, can navigate back/forward

## Design Tokens & Styling (Logo-Aligned Atmospheric Palette)

The design system uses logo-derived atmospheric colors. **Color is atmospheric, not semantic** (no red=error).

### Neutrals (Structural Backbone) - 80-90% of screen

```css
/* Ink (Text) */
--color-ink-900: #1C1C1C;     /* Primary text */
--color-ink-700: #3D3D3D;     /* Secondary text */
--color-ink-500: #7A7A7A;     /* Metadata */

/* Paper & Fields (Backgrounds) */
--color-paper-0: #FAFAF8;     /* Primary background */
--color-paper-1: #F2F1ED;     /* Secondary background */
--color-line-0: #E6E4DD;      /* Dividers */
```

### Atmospheric Palette (Logo-Aligned) - Use at 4-14% opacity

These colors are **never used at full strength**. They appear as washes, glows, and overlaps.

```css
--color-teal: #4EC3D6;        /* Breath, clarity */
--color-sage: #6F846F;        /* Grounding, calm */
--color-gold: #F4C85B;        /* Awareness, insight */
--color-rose: #F28BB8;        /* Emotional openness */
--color-indigo: #6F78B8;      /* Depth, stillness */
--color-orange: #F26C4F;      /* Gentle activation */
```

**Opacity ranges:**
- Background washes: 4–10%
- Focus glows: 8–14%
- Overlaps: 6–12%
- Night Space glows: 10–20%

### Night Space (Dark Mode as Emotional State)

Night Space is **not a theme toggle** — it's an emotional state for low-light contexts.

```css
--color-ink-dark-0: #121212;  /* Never pure black */
--color-ink-dark-1: #1A1A1A;  /* Surface */
--color-text-dark: #D4D1C8;   /* Soft warm gray */
--color-text-muted-dark: #9A9792;
```

**When to use Night Space:**
- Late evening reflection
- Pre-sleep journaling
- Breathing exercises in low light
- Deep emotional processing states

### Color Usage Rules

- **80–90%** = Neutrals (paper-0, paper-1, ink-900)
- **10–15%** = One atmospheric wash per screen
- **<5%** = Accent (glow or subtle border)
- Never use more than **1 atmospheric color** per screen
- Colors represent emotional tone, not correctness

### Wash & Glow Patterns (CSS Classes)

```css
/* Wash Mode - Background washes (4-10% opacity) */
.wash-teal       /* Teal 6% - Breath, clarity */
.wash-sage       /* Sage 6% - Grounding, calm */
.wash-gold       /* Gold 6% - Awareness, insight */
.wash-rose       /* Rose 6% - Emotional openness */
.wash-indigo     /* Indigo 8% - Depth, stillness */
.wash-orange     /* Orange 5% - Gentle activation */

/* Glow Mode - Focus halos (8-14% opacity) */
.glow-teal       /* 0 0 32px rgba(teal, 0.12) */
.glow-sage       /* 0 0 32px rgba(sage, 0.12) */
.glow-gold       /* 0 0 32px rgba(gold, 0.10) */
.glow-rose       /* 0 0 32px rgba(rose, 0.10) */
.glow-indigo     /* 0 0 32px rgba(indigo, 0.14) */

/* Panel Mode - Glassmorphic containers */
.panel-teal      /* Teal 4% + blur(12px) */
.panel-sage      /* Sage 4% + blur(12px) */
.panel-gold      /* Gold 4% + blur(12px) */
.panel-rose      /* Rose 4% + blur(12px) */
.panel-indigo    /* Indigo 6% + blur(12px) */
```

### Emotional Tone Mapping (Journaling Example)

- **Clarity** → Teal wash (breath, understanding)
- **Stress** → Indigo wash (depth, stillness)
- **Growth** → Gold wash (awareness, insight)
- **Gratitude** → Rose wash (emotional openness)
- **Purpose** → Sage wash (grounding, calm)
- **Relationships** → Orange wash (gentle activation)

### Motion System

```css
--ease-yohaku: cubic-bezier(0.2, 0.8, 0.2, 1);
--duration-slow: 320ms;
--duration-medium: 220ms;
--duration-breath: 4200ms;
```

**Rule:** Motion should **lower pulse**, not raise attention.

### Animation Classes

```css
.animate-breath-pulse     /* Signature 4.2s breathing animation */
.animate-ink-flow         /* Text reveal with upward drift */
.animate-ink-flow-stagger /* Staggered children reveal */
.animate-wash-drift       /* Subtle background movement */
.animate-soft-sheet       /* Modal/sheet entrance */
```

### Component Styling Guidelines

When creating new components:
- Use `font-light` for almost all text
- Use `tracking-wide` (letter-spacing) for headings
- Default spacing: `space-y-8` or larger for section separation
- Borders: Use `border-border` (mapped to line.0) with `rounded-xl`
- Buttons: `rounded-xl` with `bg-primary` (Sage) or atmospheric wash
- Hover states: `hover:border-primary/40` or `hover:bg-accent`
- Transitions: `duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)]`
- Active states: `active:translate-y-[1px]` for subtle press feedback
- **Use CSS variables** (`bg-primary`, `text-foreground`) instead of hardcoded colors
- Choose **one atmospheric wash per screen** to set emotional tone
- **Color-as-instruction**: In exercises, let color guide the user (e.g., Teal glow = inhale)

## shadcn/ui Configuration

Components are configured via `components.json`:
- Style: `new-york` (cleaner, more minimal than default)
- CSS variables: enabled for theming
- Base color: `neutral`
- Icon library: `lucide-react`

To add new shadcn components:
```bash
npx shadcn@latest add [component-name]
```

Components will be added to `src/components/ui/`.

## Code Conventions

- **Naming**: Descriptive, semantic names (e.g., `BreathingExercise`, not `Exercise1`)
- **Types**: Define inline types for component-specific state (e.g., `type Phase = "inhale" | "hold" | "exhale" | "rest"`)
- **Utility function**: Use `cn()` from `@/lib/utils` to merge Tailwind classes
- **Client vs Server**: Default to Server Components. Only add `"use client"` when state/effects needed
- **Exports**: Use named exports for components (e.g., `export function BreathingExercise()`)
- **Internationalization**: **CRITICAL - NEVER hardcode user-facing text**. Always use `useTranslations()` from next-intl
  - Import: `import { useTranslations } from "next-intl";`
  - Usage: `const t = useTranslations("namespace"); return <h1>{t("key")}</h1>;`
  - For metadata: Use `getTranslations` from `"next-intl/server"`
  - **ALL product copy must be placed in `locales/en/*.json` files**
  - This includes: button labels, instructions, placeholders, error messages, tooltips, aria-labels, etc.
  - The only exceptions are: developer comments, console logs, and non-user-facing technical strings

## MDX Content Management

### Content Structure

All content is stored as MDX files in `000-content/` with YAML frontmatter. Content is rendered server-side using `next-mdx-remote/rsc`.

### Frontmatter Conventions

**Blog Posts** (`000-content/blog/*.mdx`):
```yaml
---
title: "Post Title"
description: "Brief summary for SEO and listings"
category: "Mindset" | "Mental Health" | "Habits" | etc.
publishedAt: "YYYY-MM-DD"
slug: "url-slug"
keywords: ["keyword1", "keyword2"]  # Optional
relatedLinks:  # Optional
  - href: "/path/to/link"
    text: "Link description"
boundaryNote: "Mental health boundary note"  # Optional
readingTime: 5  # Auto-calculated on save
---
```

**Guides** (`000-content/guides/*.mdx`):
```yaml
---
title: "Guide Title"
description: "Brief summary"
publishedAt: "YYYY-MM-DD"
slug: "url-slug"
keywords: ["keyword1", "keyword2"]  # Optional
readingTime: 15  # Auto-calculated on save
---
```

**About Page** (`000-content/about/about.mdx`):
```yaml
---
title: "About IkiGlow"
description: "Meta description"
updatedAt: "YYYY-MM-DD"  # Auto-updated on save
---
```

### MDX Syntax

MDX files support standard Markdown plus:
- **Frontmatter**: YAML metadata at the top
- **GitHub Flavored Markdown**: Tables, task lists, strikethrough
- **Custom components**: Use styled components from `mdx-components.tsx`
- **React components**: Can import and use React components (if needed)

### Auto-Calculated Fields

- `readingTime`: Calculated automatically on save using `reading-time` package
- `updatedAt` (about page): Auto-set to current date on save

### Content Utilities

Located at `src/lib/mdx/mdx-utils.ts`:

- `getAllBlogPosts()` - Get all blog posts, sorted by date
- `getBlogPostBySlug(slug)` - Get single blog post
- `getBlogPostsByCategory(category)` - Filter by category
- `getAllGuides()` - Get all guides
- `getGuideBySlug(slug)` - Get single guide
- `getAboutPage()` - Get about page content
- `writeContent()` - Save content (CMS only)
- `deleteContent()` - Delete content (CMS only)

### CMS Workflow

1. **Accessing CMS**: Navigate to `/protected/cms` (will require auth in future)
2. **Editing content**: Click on content to edit, toggle preview, save
3. **Creating content**: Use "New Post" or "New Guide" buttons (future implementation)
4. **Deleting content**: Use delete button with confirmation

### Best Practices

- **Slug naming**: Use kebab-case, descriptive slugs (e.g., `why-clarity-beats-motivation`)
- **Frontmatter**: Always include required fields, validate before saving
- **Line length**: Keep MDX content lines under 100 characters for readability
- **Headings**: Use semantic heading hierarchy (h1 → h2 → h3)
- **Internal links**: Use relative paths (e.g., `/blog/post-slug`)
- **Images**: Store in `public/` and reference via `/images/filename.jpg`

## Git Workflow

**IMPORTANT**: After completing any development work, always create a git commit following these conventions:

### Commit Message Format

Use **semantic commit messages** following conventional commits:

```
<type>: <subject>

<optional body>
```

**Types:**
- `feat`: New feature (e.g., "feat: Add CMS content creation pages")
- `fix`: Bug fix (e.g., "fix: Handle missing content with 404 pages")
- `refactor`: Code refactoring (e.g., "refactor: Remove static pages in favor of MDX")
- `docs`: Documentation changes (e.g., "docs: Update CLAUDE.md with git workflow")
- `style`: Code style/formatting (e.g., "style: Fix linting issues")
- `test`: Add or update tests
- `chore`: Maintenance tasks (e.g., "chore: Update dependencies")

**Subject line rules:**
- Use imperative mood ("Add feature" not "Added feature")
- Don't capitalize first letter
- No period at the end
- Keep under 72 characters

### Workflow

1. **Review changes**: Always run `git status` and `git diff` before committing
2. **Stage files**: Use `git add` to stage relevant files
3. **Write commit**: Use descriptive commit message following format above
4. **Group related changes**: Commit logically related changes together

### Examples

```bash
# Good commits
git commit -m "feat: Add new post and guide creation pages"
git commit -m "fix: Handle missing MDX content with custom 404 pages"
git commit -m "refactor: Remove static blog/guide pages in favor of dynamic MDX routes"

# Avoid
git commit -m "updates"
git commit -m "Fixed stuff"
git commit -m "WIP"
```

### Branch Strategy

- Main branch: `main`
- Feature branches: Use descriptive names (e.g., `feature/cms-creation-pages`)
- Always commit to main unless working on experimental features

### Content Commits

- **MDX content changes**: Commit with `content:` prefix (e.g., "content: Add decision fatigue guide")
- **CMS changes**: CMS writes directly to filesystem, commit changes separately from code changes
