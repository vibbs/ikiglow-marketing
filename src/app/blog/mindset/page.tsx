import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mindset — Blog — IkiGlow",
  description: "Reflections on mental patterns, perspective shifts, and clarity.",
};

export default function MindsetCategory() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <div className="mx-auto max-w-2xl space-y-8 px-6 py-16">
        <div className="space-y-2">
          <Link
            href="/blog"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            ← All posts
          </Link>
        </div>
        <h1 className="text-3xl tracking-wide">Mindset</h1>
        <p className="text-base text-muted-foreground">
          Reflections on mental patterns, perspective shifts, and clarity
        </p>
      </div>

      {/* Posts */}
      <div className="mx-auto max-w-2xl space-y-12 px-6 pb-16">
        <article className="space-y-4 border-b border-border pb-12">
          <Link href="/blog/why-clarity-beats-motivation" className="block space-y-3">
            <div className="text-xs text-muted-foreground">5 min read</div>
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
      </div>
    </main>
  );
}
