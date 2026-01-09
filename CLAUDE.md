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

## Interactive Exercise Architecture

Both breathing and grounding exercises follow this pattern:

1. **Client components** (`"use client"` directive) - require state management
2. **Self-contained state** - useState/useEffect, no external state management
3. **Minimal UI** - Following Yohaku principles, focus on the practice itself
4. **Gentle guidance** - Instructions are prompts, not commands

**Breathing Exercise:**
- 4-phase cycle: inhale (4s) → hold (4s) → exhale (6s) → rest (2s)
- Visual feedback via animated circle with scale/opacity transitions
- Single interval timer managing phase transitions

**Grounding Exercise:**
- 5-step sensory awareness (5-4-3-2-1 technique)
- Progress indicator (horizontal bars)
- Textarea for reflection at each step
- State persists across steps, can navigate back/forward

## Design Tokens & Styling (Yohaku+ Color System)

The design system uses the "Quiet Fields" palette with HEX colors for consistency:

```css
/* Ink (Text) */
--color-ink-900: #1C1C1C;     /* Primary text */
--color-ink-700: #3E3E3E;     /* Secondary text */
--color-ink-500: #7A7A7A;     /* Muted text */

/* Paper & Fields (Backgrounds) */
--color-paper: #FAFAF8;       /* Primary background */
--color-mist: #F2F4F3;        /* Cool neutral surface */
--color-sand: #F4F1EA;        /* Warm neutral surface */

/* Soft Tints (Background Washes) - 15-30% of screen */
--color-sage-wash: #EEF3EF;   /* Default wash (Balance) */
--color-sky-wash: #EEF4F8;    /* Mindset category */
--color-blush-wash: #F6EEF0;  /* Warmth/Purpose category */

/* Accents (<5% of screen) */
--color-moss: #6F846F;        /* Primary accent (signature) */
--color-river: #5F7C8B;       /* Secondary accent */
--color-clay: #9A6B5A;        /* Rare/Purpose accent */

/* Dividers */
--color-divider: #E6E6E1;     /* Soft borders at 60-70% opacity */

/* Motion */
--ease-yohaku: cubic-bezier(0.2, 0.8, 0.2, 1);
--duration-slow: 320ms;
--duration-medium: 220ms;
--duration-breath: 4200ms;    /* Signature breath pulse */
```

### Color Usage Rules

- **60-80%** = Paper / Mist / Sand
- **15-30%** = One Wash (Sage OR Sky OR Blush) per screen
- **<5%** = Accent (Moss/River/Clay)
- Never use more than **1 accent** on a screen
- Prefer **tinted containers** over colored buttons

### Wash Patterns (CSS Classes)

```css
/* Pattern A - Top Wash (morning light gradient) */
.wash-top-sage    /* Sage gradient fading to Paper */
.wash-top-sky     /* Sky gradient fading to Paper */
.wash-top-blush   /* Blush gradient fading to Paper */

/* Pattern B - Breathing Panel (solid tint) */
.panel-sage       /* Sage Wash background */
.panel-sky        /* Sky Wash background */
.panel-blush      /* Blush Wash background */
.panel-sand       /* Sand background */
.panel-mist       /* Mist background */
```

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
- Borders: Use `border-[#E6E6E1]/60` with `rounded-xl`
- Buttons: `rounded-xl` with Moss accent `bg-[#6F846F]`
- Hover states: `hover:border-[#6F846F]/40` or `hover:bg-[#EEF3EF]`
- Transitions: `duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)]`
- Active states: `active:translate-y-[1px]` for subtle press feedback

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
