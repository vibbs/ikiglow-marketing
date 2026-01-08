import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — IkiGlow",
  description: "Reflections on purpose, attention, and living intentionally.",
};

export default function Blog() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <div className="mx-auto max-w-2xl space-y-8 px-6 py-16">
        <h1 className="text-3xl tracking-wide">Reflections</h1>
        <p className="text-base text-muted-foreground">
          Thoughts on purpose, attention, and living intentionally
        </p>
      </div>

      {/* Categories */}
      <div className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-2xl px-6 py-8">
          <nav className="flex flex-wrap gap-4">
            <Link
              href="/blog"
              className="text-sm text-foreground transition-colors hover:text-primary"
            >
              All
            </Link>
            <Link
              href="/blog/mindset"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Mindset
            </Link>
            <Link
              href="/blog/mental-health"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Mental Health
            </Link>
            <Link
              href="/blog/habits"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Habits
            </Link>
            <Link
              href="/blog/focus-productivity"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Focus & Productivity
            </Link>
            <Link
              href="/blog/self-awareness"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Self-Awareness
            </Link>
            <Link
              href="/blog/life-goals"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Life Goals
            </Link>
          </nav>
        </div>
      </div>

      {/* Blog posts */}
      <div className="mx-auto max-w-2xl space-y-12 px-6 py-16">
        <article className="space-y-4 border-b border-border pb-12">
          <Link href="/blog/why-clarity-beats-motivation" className="block space-y-3">
            <div className="text-xs text-muted-foreground">Mindset · 5 min read</div>
            <h2 className="text-xl tracking-wide transition-colors hover:text-primary">
              Why clarity beats motivation
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              You don&apos;t need more motivation. You need fewer decisions. Most of us
              wake up believing we lack willpower, when what we actually lack is a clear
              path forward.
            </p>
          </Link>
        </article>

        <article className="space-y-4 border-b border-border pb-12">
          <Link href="/blog/the-problem-with-productivity" className="block space-y-3">
            <div className="text-xs text-muted-foreground">Focus & Productivity · 4 min read</div>
            <h2 className="text-xl tracking-wide transition-colors hover:text-primary">
              The problem with productivity
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Being busy is not the same as moving forward. When productivity becomes
              performance, we lose sight of what we&apos;re actually trying to build.
            </p>
          </Link>
        </article>

        <article className="space-y-4 border-b border-border pb-12">
          <Link href="/blog/small-steps-big-shifts" className="block space-y-3">
            <div className="text-xs text-muted-foreground">Habits · 6 min read</div>
            <h2 className="text-xl tracking-wide transition-colors hover:text-primary">
              Small steps, big shifts
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Change doesn&apos;t happen in a moment of inspiration. It happens in the
              space between intention and action, practiced daily.
            </p>
          </Link>
        </article>
      </div>
    </main>
  );
}
