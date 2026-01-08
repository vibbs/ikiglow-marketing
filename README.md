# IkiGlow Website

**Illuminate Your Purpose, Radiate Your Potential**

Marketing website and micro-app platform for IkiGlow, featuring blog content, short-form videos, and interactive wellness exercises.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Library**: shadcn/ui
- **Design Philosophy**: Muji-inspired minimalism (余白/Yohaku - meaningful emptiness)

## Design Principles

The design follows Muji's philosophy of **余白 (Yohaku)** — meaningful emptiness:

- Generous whitespace and breathing room
- Warm neutral color palette (off-whites, charcoals, soft gold accents)
- Minimal borders and subtle interactions
- Typography with generous line-height and letter-spacing
- Not guiding harder, but allowing reflection
- Creating space for discovery

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Structure

```
src/
├── app/
│   ├── page.tsx              # Homepage with brand story
│   ├── blog/                 # Blog/reflections section
│   ├── exercises/
│   │   ├── breathing/        # Breathing exercise micro-app
│   │   └── grounding/        # 5-4-3-2-1 grounding technique
│   └── videos/               # Short-form video showcase
├── components/
│   ├── ui/                   # shadcn/ui components
│   ├── exercises/            # Interactive exercise components
│   └── shared/               # Reusable components
└── lib/                      # Utilities
```

## Features

- **Homepage**: Brand story and navigation
- **Breathing Exercise**: 4-4-6-2 breathing pattern with visual guide
- **Grounding Exercise**: Interactive 5-4-3-2-1 sensory technique
- **Blog**: Structure for reflections and articles
- **Videos**: Placeholder for short-form content

## Design Tokens

Key color values (OKLCH):
- Background: `oklch(0.98 0.002 85)` - warm off-white
- Foreground: `oklch(0.25 0.005 85)` - deep charcoal
- Primary: `oklch(0.72 0.08 75)` - soft amber/gold for "glow" moments
- Border radius: `0.25rem` - minimal

See [globals.css](src/app/globals.css) for full design system.

## Development

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run start    # Run production build
npm run lint     # Run ESLint
```

## About IkiGlow

IkiGlow fuses **Ikigai** (Japanese concept of purpose) with **Glow** (radiance from living fully). The platform guides users to discover the intersection of what they love, what they're good at, what the world needs, and what they can be rewarded for.
