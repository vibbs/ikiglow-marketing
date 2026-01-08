import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Videos — IkiGlow",
  description: "Brief moments of reflection. Short-form videos on mindset, focus, and intentional living.",
};

export default function Videos() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <div className="mx-auto max-w-2xl space-y-8 px-6 py-16">
        <h1 className="text-3xl tracking-wide">Videos</h1>
        <p className="text-base text-muted-foreground">
          Brief moments of reflection and guidance
        </p>
      </div>

      {/* Categories */}
      <div className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-2xl px-6 py-8">
          <nav className="flex flex-wrap gap-4">
            <Link
              href="/videos"
              className="text-sm text-foreground transition-colors hover:text-primary"
            >
              All
            </Link>
            <Link
              href="/videos/calm-resets"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Calm Resets
            </Link>
            <Link
              href="/videos/mindset-reframes"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Mindset Reframes
            </Link>
            <Link
              href="/videos/micro-frameworks"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Micro Frameworks
            </Link>
          </nav>
        </div>
      </div>

      {/* Video Grid */}
      <div className="mx-auto max-w-2xl space-y-12 px-6 py-16">
        {/* Video 1 - Placeholder */}
        <article className="space-y-6">
          <div className="aspect-video rounded-sm border border-border bg-muted/30">
            <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
              Video: Why clarity beats motivation
            </div>
          </div>
          <div className="space-y-3">
            <div className="text-xs text-muted-foreground">Mindset Reframes · 3:24</div>
            <h2 className="text-xl tracking-wide">Why clarity beats motivation</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              You don&apos;t need more willpower. You need a clearer path forward.
            </p>
          </div>
          {/* Transcript */}
          <details className="space-y-4 border-t border-border pt-6">
            <summary className="cursor-pointer text-sm text-muted-foreground transition-colors hover:text-foreground">
              View transcript
            </summary>
            <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
              <p>Most of us wake up believing we lack willpower...</p>
              <p>When what we actually lack is a clear path forward.</p>
              <p>
                Every day, your brain makes thousands of micro-decisions. By the time you
                sit down to work on what matters, your decision-making capacity is already
                depleted.
              </p>
            </div>
          </details>
        </article>

        {/* Video 2 - Placeholder */}
        <article className="space-y-6 border-t border-border pt-12">
          <div className="aspect-video rounded-sm border border-border bg-muted/30">
            <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
              Video: 2-minute calm reset
            </div>
          </div>
          <div className="space-y-3">
            <div className="text-xs text-muted-foreground">Calm Resets · 2:15</div>
            <h2 className="text-xl tracking-wide">2-minute calm reset</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              A guided practice to release tension and restore clarity.
            </p>
          </div>
          <details className="space-y-4 border-t border-border pt-6">
            <summary className="cursor-pointer text-sm text-muted-foreground transition-colors hover:text-foreground">
              View transcript
            </summary>
            <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
              <p>Find a comfortable position...</p>
              <p>Notice where you&apos;re holding tension in your body.</p>
            </div>
          </details>
        </article>

        {/* More coming soon */}
        <div className="border-t border-border pt-12">
          <p className="text-sm text-muted-foreground">
            More videos coming soon. Each will include a full transcript for accessibility
            and SEO.
          </p>
        </div>
      </div>
    </main>
  );
}
