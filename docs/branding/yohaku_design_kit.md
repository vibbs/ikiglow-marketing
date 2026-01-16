# 🌾 Yohaku UI Kit — Ikiglow (Refined & Logo-Aligned)

> **Yohaku (余白)** is not the absence of design.  
> It is the presence of space, light, and meaning.  
>  
> This UI kit translates Ikiglow’s **overlapping, translucent, multi-tone logo** into a **calm, purpose-driven product system** where color, motion, and emptiness work together.

This is not minimalism.  
This is **intentional restraint with emotional range**.

---

## 1. Core Philosophy (Non-Negotiables)

### 1.1 Emptiness Is Primary
- Space is the main component.
- Color, icons, and motion **enter only when they reduce words or anxiety**.
- A screen must feel complete even if color is removed.

### 1.2 Color Is Atmospheric, Not Semantic
- No “red = error / green = success”.
- Color represents **emotional state, phase, or tone**, not correctness.

### 1.3 The Logo Is the System
- Overlap → meaning
- Transparency → safety
- Empty center → reflection

The product **behaves like the logo**, not the other way around.

---

## 2. Foundation Layer (Always Present)

### 2.1 Neutrals (Structural Backbone)

| Token     | Hex     | Purpose              |
| --------- | ------- | -------------------- |
| `ink.900` | #1C1C1C | Primary text         |
| `ink.700` | #3D3D3D | Secondary text       |
| `ink.500` | #7A7A7A | Metadata             |
| `paper.0` | #FAFAF8 | Primary background   |
| `paper.1` | #F2F1ED | Secondary background |
| `line.0`  | #E6E4DD | Dividers             |

**Usage rules**
- 80–90% of any screen uses these colors.
- Never use pure black or pure white.
- Contrast is gentle, not sharp.

---

## 3. Ikiglow Atmospheric Palette (Derived from Logo)

These colors are **never used at full strength**.  
They appear as **washes, glows, overlaps, and transitions**.

| Tone         | Emotional Role     | Hex     |
| ------------ | ------------------ | ------- |
| Teal / Cyan  | Breath, clarity    | #4EC3D6 |
| Sage Green   | Grounding, calm    | #6F846F |
| Soft Gold    | Awareness, insight | #F4C85B |
| Rose Pink    | Emotional openness | #F28BB8 |
| Indigo Blue  | Depth, stillness   | #6F78B8 |
| Muted Orange | Gentle activation  | #F26C4F |

**Opacity range**
- Background washes: 4–10%
- Focus glows: 8–14%
- Overlaps: 6–12%

---

## 4. Color Usage Modes (Choose One per Screen)

### 4.1 Wash Mode (Most Common)
- A single large background wash.
- Sets emotional temperature.
- No borders, no outlines.

**Use for**
- Journaling
- Reading
- Arrival screens

---

### 4.2 Overlap Mode (Logo-Inspired)
- Two or three translucent color fields overlapping.
- The center remains neutral / empty.

**Use for**
- Breathing exercises
- Transitions between phases
- Reflection completions

---

### 4.3 Accent Mode (Rare)
- A dot, thin underline, or halo.
- Only one accent color per screen.

**Use for**
- Directional guidance
- Primary action focus
- Cursor / active state

---

## 5. Purpose-Driven Flows

### 5.1 Arrival / Entry

**Goal:** Slow the user down.

- Background: `paper.0`
- Optional wash: Teal (very faint)
- Motion: slow fade-in (300–400ms)

No CTA pressure.  
No icons.  
No metrics.

---

### 5.2 Breathing Micro-App

**Color becomes the instruction.**

| Phase  | Color Behavior        |
| ------ | --------------------- |
| Inhale | Teal glow expands     |
| Hold   | Indigo wash stills    |
| Exhale | Rose → Sage dissolves |

- No numbers required.
- No text beyond “Inhale / Hold / Exhale” (optional).
- Motion loops slowly (4–6s).

---

### 5.3 Journaling

**Goal:** Psychological safety.

- Default: neutral paper
- Emotional depth increases → subtle rose or sage wash appears
- Cursor focus → soft halo (not border)

No character limits.  
No progress bars.  
No validation.

---

### 5.4 Guidance & Disclaimers

**Replace verbosity with tone.**

- Use Soft Gold wash (6–8%)
- Minimal copy
- Optional outline icon (neutral ink)

Feels like a margin note, not a warning.

---

### 5.5 Errors & System Feedback

**Principle:** Loss of harmony, not failure.

| Situation              | Visual Treatment     |
| ---------------------- | -------------------- |
| Action didn’t complete | Soft rose wash       |
| Network issue          | Indigo wash          |
| Retry suggestion       | Gentle orange accent |

No red banners.  
No exclamation icons.  
Language is calm and non-judgmental.

---

## 6. Iconography (Functional Whisper)

### Rules
- Outline only
- Single stroke weight
- Neutral ink color
- Rounded geometry
- No metaphorical pressure

### Allowed Meanings
- Continue → arrow
- Pause → dots
- Reflect → circle
- Time → open ring
- Breathe → expanding ring

Icons **never carry emotional meaning** — color does.

---

## 7. Illustrations (Editorial, Not UI)

### When Allowed
- Article entry or exit
- Phase transitions
- Resting moments

### Style
- Abstract
- Translucent
- Overlapping shapes
- No characters
- Empty center

Max **one illustration per context**.

---

## 8. Motion System (Emotional Physics)

| Property    | Rule                                   |
| ----------- | -------------------------------------- |
| Duration    | 220–420ms                              |
| Easing      | ease-out / cubic-bezier(0.2,0.8,0.2,1) |
| Loops       | Slow, breathing-paced                  |
| Transitions | Fade + micro drift                     |

Motion should **lower pulse**, not excite.

---

## 9. Night Space (Dark Mode as Emotional State)

### Philosophy: Not a Theme Toggle

Most apps ask: *"Do users expect dark mode?"*

Ikiglow asks: **"When does darkness serve reflection better than light?"**

---

### When Night Space Makes Sense

#### 🌙 Night & Low-Stimulation Contexts
- Late evening reflection
- Pre-sleep journaling
- Breathing before bed
- Emotional decompression

Light backgrounds can feel **intrusive**, not calming.

#### 🧠 Deep Emotional States
- Grief, anxiety, overwhelm
- Introspection after heavy prompts

Darkness can feel:
- Containing
- Private
- Less exposed

#### 🫁 Breathing & Stillness Micro-Apps
Dark backgrounds:
- Reduce visual noise
- Make glow-based motion feel more natural
- Allow color to *emit* rather than *sit on paper*

---

### Night Space Foundations (Never Pure Black)

| Element    | Day Space   | Night Space         |
| ---------- | ----------- | ------------------- |
| Background | paper.0     | ink.dark.0 #121212  |
| Surface    | paper.1     | ink.dark.1 #1A1A1A  |
| Text       | ink.900     | text.dark #D4D1C8   |
| Secondary  | ink.700     | text.muted #9A9792  |
| Contrast   | Gentle      | Gentle              |

**Never use pure black** (`#000000`).
**Never use pure white** (`#FFFFFF`).

---

### Color Behavior in Night Space

Atmospheric colors should:
- **Glow softly** (radial / halo)
- **Never become flat fills**
- Feel like light *emerging* from darkness

| Color  | Day Behavior | Night Behavior          |
| ------ | ------------ | ----------------------- |
| Teal   | Wash 4-6%    | Soft glow 10-14%        |
| Rose   | Wash 4-6%    | Dim warmth glow 8-12%   |
| Indigo | Wash 6-10%   | Depth field 12-16%      |
| Gold   | Wash 5-8%    | Quiet insight glow 8-12% |

---

### Implementation Strategy

**Phase 1 (Correct):**
- Day Space only
- Design dark-ready tokens quietly

**Phase 2 (Intentional):**
- Enable Night Space for:
  - Breathing exercises
  - Journaling sessions
  - Reflection contexts

**Phase 3 (Optional):**
- Remember preferred space *per activity*, not globally
- Context-aware suggestions: *"Would you like to switch to a quieter space?"*

---

### Purpose-Driven Night Flows

#### 🌙 Night Journaling
- Dark paper background (`ink.dark.0`)
- Rose or sage wash at very low opacity (4-6%)
- Cursor halo instead of underline
- No visible borders

Feels like writing in a quiet room.

#### 🫁 Breathing (Night)
- Indigo background (`#6F78B8` at 8%)
- Breath ring glows softly
- Teal/rose pulses slower than day mode
- Enhanced glow effects (10-14% opacity)

This is where Night Space becomes **objectively better UX**.

#### 😔 Emotional Processing
If a user indicates overwhelm or anxiety:
- Gentle suggestion to switch to Night Space
- Not automatic
- Empathetic, not algorithmic

---

### What Night Space Is NOT

❌ A generic "dark mode" toggle
❌ A system preference mirror
❌ A productivity feature
❌ An inverted color scheme

✅ An emotional state
✅ A contextual choice
✅ A gentler container for certain moments

---

## 10. Accessibility & Emotional Safety

- Color is never the sole indicator.
- Contrast meets readability standards (both Day and Night Space).
- No flashing, bouncing, or urgency cues.
- Works well in low-light, quiet contexts.
- Night Space enhances accessibility for light-sensitive users.

---

## 11. Design Checklist (Use Before Shipping)

- Does this screen work without color?
- Is color reducing words or adding noise?
- Does emptiness feel intentional?
- Is the user free to pause or leave?

If any answer is **no**, remove something.

---

## Closing Ethos

Ikiglow does not tell users what to feel.  
It creates the conditions where feeling becomes safe.

**Color is presence.  
Space is permission.  
Meaning emerges in the overlap.**

