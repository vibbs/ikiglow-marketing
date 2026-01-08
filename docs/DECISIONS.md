# Design & Technical Decisions

Decision log for IkiGlow website architecture and design choices.

---

## Tech Stack

**Decision**: Next.js 15 + TypeScript + Tailwind CSS v4 + shadcn/ui

**Rationale**:
- Next.js App Router for modern React patterns and excellent performance
- TypeScript for type safety and better developer experience
- Tailwind v4 for utility-first styling with modern CSS features
- shadcn/ui for accessible, customizable components that can be styled to match Muji aesthetic

---

## Design Philosophy: Muji-Inspired (余白/Yohaku)

**Decision**: Follow Muji's principle of "meaningful emptiness" rather than conventional web design patterns

**Rationale**:
- Aligns with IkiGlow's purpose of creating space for reflection, not optimization
- Generous whitespace reduces cognitive load
- Warm, neutral palette feels natural and calming
- Minimal borders and subtle interactions avoid unnecessary visual noise
- High line-height (1.8) and letter-spacing create breathing room in text

**Key Design Tokens**:
- Color palette: Warm neutrals (off-white background, charcoal text) with soft gold accent
- Border radius: `0.25rem` (minimal)
- Typography: Light font weights, generous spacing
- Interactions: Subtle hover states, no aggressive animations

---

## Color Choices

**Decision**: OKLCH color space with warm neutral palette

**Rationale**:
- OKLCH provides perceptually uniform colors
- Warm undertones (hue ~85°) feel natural, like cotton and wood
- Soft gold primary (`oklch(0.72 0.08 75)`) represents "glow" without being loud
- Very low chroma values maintain subtlety

---

## Micro-Apps Architecture

**Decision**: Standalone interactive exercises within Next.js routes

**Rationale**:
- Breathing and grounding exercises are self-contained features
- Client-side interactivity using React hooks
- Each exercise lives at its own route for deep linking
- Minimal external dependencies keep bundle size small

**Breathing Exercise**:
- 4-4-6-2 pattern (scientifically-backed for relaxation)
- Visual breathing circle scales with phases
- Simple start/stop controls

**Grounding Exercise**:
- 5-4-3-2-1 sensory technique
- Interactive step-through with text inputs
- Progress indicators for clarity

---

## Content Structure

**Decision**: Placeholder pages for blog and videos with full structure

**Rationale**:
- Establish routing and navigation patterns now
- Content can be added progressively
- Maintains consistent navigation experience
- Room to grow without architectural changes

---

## Typography

**Decision**: System font stack (Geist Sans from Next.js) with generous spacing

**Rationale**:
- Geist Sans is clean and modern
- Avoids additional font loading for performance
- `line-height: 1.8` and `letter-spacing: 0.01-0.02em` create breathing room
- Light font weights (300-400) maintain Muji aesthetic

---

## Navigation Pattern

**Decision**: Minimal navigation via homepage cards, no persistent header

**Rationale**:
- Reduces visual clutter
- Homepage acts as intentional entry point
- Each page has clear back link
- Encourages mindful navigation rather than rapid browsing

---

## Component Strategy

**Decision**: Custom exercise components in `components/exercises/`, shadcn/ui in `components/ui/`

**Rationale**:
- Clear separation between third-party and custom code
- Exercise components are client-side interactive
- Can extend shadcn/ui components as needed
- Maintainable structure as site grows

---

## Git Strategy

**Decision**: Logical commits at feature milestones

**Rationale**:
- Initial setup commit
- Design system commit
- Feature commits (exercises, pages)
- Documentation commit
- Keeps history readable and meaningful
