# 🌾 Yohaku+ UI Kit (Color + Motion)

## 1) 🎨 Color System - “Quiet Fields”

### Rule

> Color is **atmosphere**, not emphasis.

So we’ll introduce **tinted surfaces** (very low saturation) and keep “accent” usage disciplined.

### Updated Palette

**Ink**

* Ink 900: `#1C1C1C`
* Ink 700: `#3E3E3E`
* Ink 500: `#7A7A7A`

**Paper & Fields**

* Paper: `#FAFAF8`
* Mist: `#F2F4F3` (cool neutral)
* Sand: `#F4F1EA` (warm neutral)

**Soft Tints (Background Washes)**

* Sage Wash: `#EEF3EF`
* Sky Wash: `#EEF4F8`
* Blush Wash: `#F6EEF0`

**Accents (Small, Intentional)**

* Moss: `#6F846F` (primary accent)
* River: `#5F7C8B` (secondary)
* Clay: `#9A6B5A` (rare)

### Usage rules (keeps it Yohaku)

* **60–80%** = Paper / Mist / Sand
* **15–30%** = one Wash (Sage *or* Sky *or* Blush) per screen
* **<5%** = Accent (Moss/River/Clay)
* Never use more than **1 accent** on a screen.
* Prefer **tinted containers** over colored buttons.

---

## 2) 🌈 “Color Placement Patterns” (Practical)

Pick one per screen:

### Pattern A - Top Wash

A very light gradient wash in the top 20–30% (rest stays Paper).
Feels like morning light.

### Pattern B - Breathing Panel

A single large rounded panel (tint) behind the main prompt/journal area.
The emptiness remains, but now it has a “field.”

### Pattern C - Accent Dot System

Use a tiny dot (•) / thin underline / cursor highlight in accent color.
Your UI stays quiet but feels alive.

---

## 3) ✨ Motion System - “Slow, Soft, Meaningful”

### Rule

> Motion should **lower pulse**, not raise attention.

### Motion Defaults

* Duration: **220–420ms**
* Easing: **ease-out / cubic-bezier(0.2, 0.8, 0.2, 1)**
* Use **fade + 2–6px drift** (micro-movement)
* Avoid bounce/spring by default (unless tuned very gently)

### Recommended Animations (Yohaku-friendly)

#### A) “Breath Pulse” (Signature)

* Dot or ring expands 6–10% and returns
* 3.8–5.5 seconds per loop
* Opacity shifts subtly (no scaling jumps)

Use on:

* Arrival screen
* Breathing micro-app entry
* Idle moments

#### B) “Ink Flow” (Text Reveal)

* Prompt text fades in with slight upward drift (4px)
* Stagger by phrase, not by word (avoid “typewriter”)

#### C) “Ambient Wash Drift”

* The background wash slowly shifts position (like light moving)
* Extremely subtle; users shouldn’t *notice* it, only *feel* it

#### D) “Focus Halo” (Journaling)

* When cursor enters input: a soft halo appears around the writing area
* Accent at **10–14% opacity** (very faint)

#### E) “Soft Sheet” (Modals/Bottom Sheets)

* Bottom sheet slides up **8–12%** distance + fade
* Backdrop is not dark; it’s a **mist blur** or light overlay

---

## 4) 🧩 Component Updates (With Color + Motion)

### Buttons (now allowed to feel nicer)

* Primary action can be **filled**, but only using muted accent:

  * Background: Moss at ~85–90% tone (still muted)
  * Text: Paper
  * Radius: 14–18px
  * No shadow; use subtle border or slight tint difference

Micro-interactions:

* Hover/press: **1–2% darken** + 1px downward (mobile) + subtle haptic (if available)

### Cards / Panels

* Use **wash tints** instead of elevation
* Separation via padding + rounding + whitespace

### Dividers

* Replace lines with:

  * extra spacing, or
  * a faint 1px line with `#E6E6E1` at 60–70% opacity

---

## 5) Typography rule tweak (to match motion/color)

Still book-like, but add **one expressive layer**:

* Prompts can be Serif (warm, reflective)
* UI chrome stays Sans
* Allow **one** italic usage per screen (for gentle emphasis)

---

## 6) “Do / Don’t” so we don’t break Yohaku

✅ Do

* Add **ambient tints** (background washes)
* Use **slow loops** (breath, light drift)
* Use color to create **emotional temperature**
* Keep CTAs calm

❌ Don’t

* Add bright gradients, neon, saturated primaries
* Use busy Lottie animations everywhere
* Animate lists/cards on scroll aggressively
* Turn motion into reward mechanics

---

## 7) Suggested “Ikiglow Signature Look”

If you want a distinct identity:

* Default wash = **Sage Wash**
* Signature motion = **Breath Pulse**
* Accent color = **Moss**
* Secondary wash rotated per category:

  * Purpose → Sand + Clay hint
  * Mindset → Sky Wash + River hint
  * Balance → Sage Wash + Moss

