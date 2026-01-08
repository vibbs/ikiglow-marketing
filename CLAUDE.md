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

## Design Philosophy: 余白 (Yohaku) - Meaningful Emptiness

The entire codebase follows Muji-inspired minimalism. This is not just visual—it influences code architecture, component design, and interaction patterns.

**Key Design Principles:**
- **Generous whitespace**: Components should breathe. Use `space-y-8`, `space-y-12`, `space-y-16` liberally
- **Warm neutral palette**: OKLCH colors with warm undertones (see [globals.css](src/app/globals.css))
- **Minimal borders**: `border-border` with subtle colors (`oklch(0.90 0.005 85)`)
- **Soft gold accents**: Primary color is `oklch(0.72 0.08 75)` - use sparingly for "glow" moments
- **Typography**: Font-light, generous line-height (1.8), letter-spacing (0.01em-0.02em)
- **Subtle interactions**: Hover states use `border-primary/40` or `hover:bg-primary`
- **No hard guidance**: Allow reflection and discovery, don't force users down paths

## Architecture

### App Router Structure

```
src/app/
├── page.tsx              # Homepage: brand story + navigation
├── layout.tsx            # Root layout with fonts (Geist Sans/Mono)
├── globals.css           # Design tokens + Tailwind v4 config
├── blog/                 # Blog/reflections section
├── exercises/
│   ├── breathing/        # 4-4-6-2 breathing pattern exercise
│   └── grounding/        # 5-4-3-2-1 sensory grounding technique
└── videos/               # Short-form video showcase
```

### Component Organization

```
src/components/
├── ui/                   # shadcn/ui components (Button, Card, etc.)
├── exercises/
│   ├── BreathingExercise.tsx  # Client component with timer state
│   └── GroundingExercise.tsx  # Client component with multi-step form
└── shared/               # Reusable components (future)
```

### Path Aliases

TypeScript path aliases are configured in `tsconfig.json`:
- `@/*` → `./src/*`
- Components: `@/components`
- Utils: `@/lib/utils`

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

## Design Tokens & Styling

All colors use **OKLCH color space** for perceptually uniform brightness. Key values:

```css
/* Core palette (light mode) */
--background: oklch(0.98 0.002 85)      /* Warm off-white */
--foreground: oklch(0.25 0.005 85)      /* Deep charcoal */
--primary: oklch(0.72 0.08 75)          /* Soft gold for accents */
--border: oklch(0.90 0.005 85)          /* Subtle borders */
--muted-foreground: oklch(0.45 0.005 85) /* Medium gray text */

/* Spacing */
--radius: 0.25rem                        /* Minimal border radius */
```

When creating new components:
- Use `font-light` for almost all text
- Use `tracking-wide` (letter-spacing) for headings
- Default spacing: `space-y-8` or larger for section separation
- Borders: `border border-border` with `rounded-sm`
- Hover states: `transition-colors hover:border-primary/40`

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

## Git Workflow

- Main branch: `main`
- Commit style: Descriptive, imperative (e.g., "Add breathing exercise timer")
- Current status shows `docs/branding/` untracked (branding assets)
