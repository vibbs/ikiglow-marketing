import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Clarity Beats Motivation — IkiGlow",
  description: "You don't need more motivation. You need fewer decisions. Most of us wake up believing we lack willpower, when what we actually lack is a clear path forward.",
  keywords: ["clarity", "motivation", "decision fatigue", "mindset", "personal growth"],
};

export default function BlogPost() {
  return (
    <main className="min-h-screen">
      {/* Article Header */}
      <article className="mx-auto max-w-2xl px-6 py-16">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="text-xs text-muted-foreground">Mindset · 5 min read</div>
            <h1 className="text-3xl tracking-wide md:text-4xl">
              Why clarity beats motivation
            </h1>
          </div>

          {/* 1. Empathy Opening - Normalize reader experience */}
          <section className="space-y-4 border-l-2 border-border pl-6">
            <p className="text-base leading-relaxed">
              You don&apos;t need more motivation. You need fewer decisions.
            </p>
            <p className="text-base leading-relaxed">
              Most of us wake up believing we lack willpower, when what we actually lack
              is a clear path forward.
            </p>
          </section>

          {/* 2. Clarity Section - Explain what's happening */}
          <section className="space-y-6 pt-8">
            <h2 className="text-xl tracking-wide">What&apos;s actually happening</h2>
            <div className="space-y-4">
              <p className="text-base leading-relaxed">
                Every day, your brain makes thousands of micro-decisions. By the time you
                sit down to work on what matters, your decision-making capacity is already
                depleted.
              </p>
              <p className="text-base leading-relaxed">
                This is called <em>decision fatigue</em> — a well-documented psychological
                phenomenon where the quality of your decisions deteriorates after making
                many choices, regardless of how important they are.
              </p>
              <p className="text-base leading-relaxed">
                When you feel unmotivated, you&apos;re often experiencing the mental weight
                of unclear priorities. Your brain is stuck in decision-mode, not action-mode.
              </p>
            </div>
          </section>

          {/* 3. Named Framework - Simple, repeatable */}
          <section className="space-y-6 pt-8">
            <h2 className="text-xl tracking-wide">The Clarity Over Motivation principle</h2>
            <div className="space-y-4 rounded-sm border border-border bg-muted/30 p-6">
              <p className="text-base leading-relaxed">
                <strong>Instead of asking:</strong> &quot;How do I get motivated?&quot;
              </p>
              <p className="text-base leading-relaxed">
                <strong>Ask:</strong> &quot;What&apos;s the next clear step?&quot;
              </p>
            </div>
            <p className="text-base leading-relaxed">
              Motivation is an emotion. Clarity is a system. Emotions fluctuate. Systems
              persist.
            </p>
          </section>

          {/* 4. Micro-Action - 2-5 minutes */}
          <section className="space-y-6 pt-8">
            <h2 className="text-xl tracking-wide">A small step that can help</h2>
            <div className="space-y-4 rounded-sm border border-border p-6">
              <p className="text-sm leading-relaxed text-muted-foreground">
                2-minute practice
              </p>
              <ol className="space-y-3 text-base leading-relaxed">
                <li>1. Write down one thing you&apos;ve been avoiding.</li>
                <li>2. Break it into the smallest possible next step.</li>
                <li>3. Do that step now, or schedule it for a specific time today.</li>
              </ol>
            </div>
            <p className="text-base leading-relaxed">
              That&apos;s it. No motivation required. Just one clear action.
            </p>
          </section>

          {/* 5. Soft Internal Links */}
          <section className="space-y-6 border-t border-border pt-8">
            <h3 className="text-lg tracking-wide">Related</h3>
            <div className="space-y-3">
              <Link
                href="/exercises/breathing"
                className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                → Try a breathing exercise to clear mental noise
              </Link>
              <Link
                href="/guides/decision-fatigue"
                className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                → Read the full guide on decision fatigue
              </Link>
            </div>
          </section>

          {/* 6. Boundary Note */}
          <section className="space-y-4 border-t border-border pt-8">
            <p className="text-xs leading-relaxed text-muted-foreground">
              If you&apos;re experiencing persistent lack of motivation alongside other
              symptoms like hopelessness, withdrawal, or difficulty with daily tasks, this
              may be a sign of depression or burnout. Please consider reaching out to a
              mental health professional.
            </p>
          </section>
        </div>
      </article>

      {/* Navigation */}
      <div className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-2xl px-6 py-8">
          <Link
            href="/blog"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            ← Back to all posts
          </Link>
        </div>
      </div>
    </main>
  );
}
