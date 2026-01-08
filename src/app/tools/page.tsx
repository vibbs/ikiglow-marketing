import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tools — IkiGlow",
  description: "Simple exercises for focus, calm, and self-awareness. No login required.",
};

export default function Tools() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <div className="mx-auto max-w-2xl space-y-8 px-6 py-16">
        <h1 className="text-3xl tracking-wide">Tools</h1>
        <p className="text-base text-muted-foreground">
          Simple exercises for focus, calm, and self-awareness
        </p>
      </div>

      {/* Tools Grid */}
      <div className="mx-auto max-w-2xl space-y-6 px-6 pb-16">
        <Link
          href="/exercises/breathing"
          className="block space-y-4 rounded-sm border border-border p-6 transition-colors hover:border-primary/40"
        >
          <h2 className="text-xl tracking-wide">Breathing exercise</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            A simple way to slow your thoughts. Follow the 4-4-6-2 breathing pattern to
            activate your parasympathetic nervous system.
          </p>
          <div className="text-xs text-muted-foreground">2-5 minutes</div>
        </Link>

        <Link
          href="/exercises/grounding"
          className="block space-y-4 rounded-sm border border-border p-6 transition-colors hover:border-primary/40"
        >
          <h2 className="text-xl tracking-wide">Grounding practice</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Return to the present moment using the 5-4-3-2-1 sensory awareness technique.
          </p>
          <div className="text-xs text-muted-foreground">3-5 minutes</div>
        </Link>

        <div className="block space-y-4 rounded-sm border border-border bg-muted/30 p-6 opacity-60">
          <h2 className="text-xl tracking-wide">Journaling prompts</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Guided reflection questions to explore what matters to you.
          </p>
          <div className="text-xs text-muted-foreground">Coming soon</div>
        </div>

        <div className="block space-y-4 rounded-sm border border-border bg-muted/30 p-6 opacity-60">
          <h2 className="text-xl tracking-wide">Goal-setting framework</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            A calm approach to setting intentions without pressure.
          </p>
          <div className="text-xs text-muted-foreground">Coming soon</div>
        </div>

        <div className="block space-y-4 rounded-sm border border-border bg-muted/30 p-6 opacity-60">
          <h2 className="text-xl tracking-wide">Stress reset</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Quick physical practices to release tension and restore energy.
          </p>
          <div className="text-xs text-muted-foreground">Coming soon</div>
        </div>
      </div>

      {/* Philosophy */}
      <div className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-2xl space-y-6 px-6 py-16">
          <h2 className="text-xl tracking-wide">How these tools work</h2>
          <div className="space-y-4 text-base leading-relaxed">
            <p>
              These exercises are designed to give you immediate value, without requiring
              signup, tracking, or gamification.
            </p>
            <p>
              They&apos;re grounded in psychological research and nervous system regulation,
              but explained in plain language.
            </p>
            <p>
              Use them when you need them. Leave them when you don&apos;t.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
