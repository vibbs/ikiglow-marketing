# Ikiglow Website - Implementation Plan

**Purpose:** Apply the Yohaku-based Brand Style Guide consistently across the marketing + content ecosystem site
**Scope:** Branding, IA, layout rules, content patterns, SEO, micro-tools

---

## 1. Guiding Implementation Principle

> **Yohaku is enforced through constraints, not taste.**

To preserve meaningful emptiness at scale:

* We reduce degrees of freedom
* We standardize patterns
* We limit components
* We prioritize content over UI

Every decision below exists to **prevent clutter from creeping in**.

---

## 2. Sitemap → Page Types Mapping

We translate your sitemap into **page archetypes**.
Each archetype has strict layout + content rules.

### Sitemap (recap)

```
/
├── /about
├── /how-it-works
├── /blog/*
├── /guides/*
├── /tools/*
├── /videos
├── /newsletter
└── /waitlist
```

### Page Archetypes

| Archetype        | Pages                          |
| ---------------- | ------------------------------ |
| Landing Pages    | `/`, `/about`, `/how-it-works` |
| Content Pages    | `/blog/*`                      |
| Pillar Pages     | `/guides/*`                    |
| Utility Pages    | `/tools/*`                     |
| Media Pages      | `/videos`                      |
| Conversion Pages | `/newsletter`, `/waitlist`     |

Each archetype is implemented once and reused.

---

## 3. Global Layout System (Non-negotiable)

### 3.1 Global Constraints

Apply to **every page**.

* Max content width: `640–720px`
* Generous vertical spacing between sections
* One primary action per page (or none)
* No sticky popups
* No autoplay media

### 3.2 Navigation

* Minimal top nav:

  * Home
  * Blog
  * Tools
  * Guides
  * About
* No mega-menus
* Footer duplicates nav + legal + newsletter

Navigation should feel **quiet and predictable**.

---

## 4. Homepage Implementation

### Goal

First contact with Ikiglow should feel like **entering a calm room**, not a funnel.

### Sections (in order)

1. **Hero**

   * Single headline
   * One-sentence subtext
   * No background noise
   * No hero illustration required

2. **What Ikiglow Is**

   * 3–4 short statements
   * No icons unless necessary

3. **Start Small**

   * Links to 2–3 micro-tools
   * Tools are the “entry point”, not signup

4. **Popular Reads**

   * 3 blog posts
   * Manual curation (not algorithmic)

5. **Video Section**

   * Embedded, muted by default
   * Optional interaction

6. **Newsletter CTA**

   * One sentence
   * No urgency
   * No form overwhelm

### Enforced Yohaku Rules

* No testimonials (early stage)
* No metrics
* No badges
* No “Join now” language

---

## 5. Blog Implementation (SEO + Yohaku Balance)

### Blog Architecture

```
/blog
/blog/mindset
/blog/mental-health
/blog/habits
/blog/focus-productivity
/blog/self-awareness
/blog/life-goals
```

### Blog Page Template

Each blog post **must follow this structure**:

1. **Empathy Opening**

   * Normalize reader experience

2. **Clarity Section**

   * Explain what’s happening (psychology/behavior)

3. **Named Framework**

   * Simple, repeatable
   * Ikiglow-styled naming

4. **Micro-Action**

   * 2–5 minutes
   * No dependency on tools

5. **Soft Internal Links**

   * Related tool
   * Related guide

6. **Boundary Note**

   * Gentle disclaimer where needed

### SEO Rules

* Titles are calm, not clickbait
* Meta descriptions are factual
* No keyword stuffing
* One search intent per post

---

## 6. Guides (Pillar Pages) Implementation

### Purpose

Guides are **trust anchors** and **SEO authority pages**.

### Structure (example: `/guides/anxiety`)

1. What this experience feels like
2. What it is (non-clinical)
3. Common misconceptions
4. What helps (practical)
5. Tools & exercises
6. Reflection prompts
7. When to seek professional help

### Design Rules

* Long-form but breathable
* Clear section breaks
* Minimal visuals
* Tools embedded inline

---

## 7. Tools / Micro-Apps Implementation

### Tools Index

```
/tools
/tools/breathing
/tools/grounding
/tools/journaling-prompts
/tools/goal-setting
/tools/stress-reset
```

### Tool Page Template

Each tool page contains:

1. **Purpose (1–2 lines)**
2. **The Tool Itself**

   * Visual calm
   * Immediate interaction
3. **How to Use**

   * 3 short steps
4. **Why It Helps**

   * Plain explanation
5. **Optional Next Step**

   * Blog / Guide / Newsletter

### Tool Design Constraints

* No login
* No gamification
* No timers with urgency sounds
* Neutral colors only

---

## 8. Videos Page Implementation

### Purpose

Video is **supporting content**, not primary.

### Structure

* Categorized playlists:

  * Calm resets
  * Mindset reframes
  * Micro frameworks
* Each video:

  * Embedded
  * Transcript below (SEO)
  * Related links

### Rules

* No autoplay with sound
* No forced engagement
* No aggressive thumbnails

---

## 9. Newsletter & Waitlist Pages

### Newsletter

* Weekly cadence
* One insight, one framework, one reflection
* No “growth hacks” language

### Waitlist

* Framed as *early access*, not FOMO
* Clear expectations
* No timeline pressure

---

## 10. Content Governance (Prevents Drift)

### Before publishing anything, validate:

* Does this respect Yohaku?
* Is this calm, not persuasive?
* Is this useful without selling?
* Is this one clear idea?

### Internal Checklist

* One idea per page
* One accent color max
* One CTA max
* Adequate white space

---

## 11. SEO Without Breaking Yohaku

### What You Optimize

* Intent clarity
* Depth
* Internal linking
* Consistency

### What You Avoid

* Clickbait
* Thin content
* Trend chasing
* AI filler text

SEO is a *byproduct of clarity*, not force.

---

## 12. Suggested Build Order (Very Important)

### Phase 1 (Foundation)

1. Global layout + typography
2. Homepage
3. Blog template
4. One guide
5. One micro-tool

### Phase 2 (Expansion)

6. Blog categories
7. Tools index
8. Videos page
9. Newsletter

### Phase 3 (Authority)

10. Pillar guides
11. Internal linking
12. Content refresh loop

---

## 13. Final Internal Rule

> **If something feels impressive, it’s probably wrong.
> If it feels calm and obvious, it’s probably right.**
