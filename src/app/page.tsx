import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Entering a calm room */}
      <section className="mx-auto max-w-2xl space-y-8 px-6 py-24">
        <h1 className="text-4xl tracking-wide md:text-5xl">
          A calm companion for personal growth
        </h1>
        <p className="text-lg text-muted-foreground">
          A space for reflection, focus, and intentional action.
        </p>
      </section>

      {/* What Ikiglow Is */}
      <section className="mx-auto max-w-2xl space-y-12 px-6 py-16">
        <div className="space-y-8">
          <p className="text-base leading-relaxed">
            Ikiglow helps you think clearly about what matters.
          </p>
          <p className="text-base leading-relaxed">
            We create space for reflection, not noise.
          </p>
          <p className="text-base leading-relaxed">
            We offer practical tools, not pressure.
          </p>
          <p className="text-base leading-relaxed">
            We respect your pace, not force urgency.
          </p>
        </div>
      </section>

      {/* Start Small - Tools as entry point */}
      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-2xl space-y-12 px-6 py-16">
          <h2 className="text-2xl tracking-wide">Start small</h2>
          <div className="space-y-6">
            <Link
              href="/exercises/breathing"
              className="block space-y-3 rounded-sm border border-border bg-background p-6 transition-colors hover:border-primary/40"
            >
              <h3 className="text-lg tracking-wide">Breathing exercise</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                A simple way to slow your thoughts
              </p>
            </Link>

            <Link
              href="/exercises/grounding"
              className="block space-y-3 rounded-sm border border-border bg-background p-6 transition-colors hover:border-primary/40"
            >
              <h3 className="text-lg tracking-wide">Grounding practice</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Return to the present moment
              </p>
            </Link>

            <Link
              href="/tools"
              className="block space-y-3 rounded-sm border border-border bg-background p-6 transition-colors hover:border-primary/40"
            >
              <h3 className="text-lg tracking-wide">More tools</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Simple exercises for focus and calm
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Reads - Manual curation */}
      <section className="mx-auto max-w-2xl space-y-12 px-6 py-16">
        <h2 className="text-2xl tracking-wide">Recent reflections</h2>
        <div className="space-y-8">
          <Link
            href="/blog/why-clarity-beats-motivation"
            className="block space-y-3 border-b border-border pb-8 transition-colors hover:border-primary/40"
          >
            <h3 className="text-lg tracking-wide">Why clarity beats motivation</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              You don&apos;t need more motivation. You need fewer decisions.
            </p>
          </Link>

          <Link
            href="/blog/the-problem-with-productivity"
            className="block space-y-3 border-b border-border pb-8 transition-colors hover:border-primary/40"
          >
            <h3 className="text-lg tracking-wide">The problem with productivity</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Being busy is not the same as moving forward.
            </p>
          </Link>

          <Link
            href="/blog"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            View all posts →
          </Link>
        </div>
      </section>

      {/* Video Section - Optional layer */}
      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-2xl space-y-12 px-6 py-16">
          <h2 className="text-2xl tracking-wide">Brief moments of reflection</h2>
          <div className="space-y-6">
            <div className="aspect-video rounded-sm border border-border bg-background">
              {/* Video embed placeholder - muted by default */}
              <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
                Video content (muted by default)
              </div>
            </div>
            <Link
              href="/videos"
              className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              View all videos →
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter CTA - Gentle, no urgency */}
      <section className="mx-auto max-w-2xl space-y-8 px-6 py-16">
        <div className="space-y-6 rounded-sm border border-border p-8">
          <h2 className="text-xl tracking-wide">Weekly reflections</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            One insight, one framework, one reflection. Delivered weekly.
          </p>
          <Link
            href="/newsletter"
            className="inline-block rounded-sm bg-primary px-6 py-3 text-sm tracking-wide text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Subscribe
          </Link>
        </div>
      </section>
    </main>
  );
}
