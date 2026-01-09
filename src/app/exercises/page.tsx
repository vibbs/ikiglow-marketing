import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exercises — IkiGlow",
  description: "Gentle practices for focus, calm, and self-awareness. Use them when you need them.",
};

export default function Exercises() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <div className="mx-auto max-w-2xl space-y-6 sm:space-y-8 px-4 sm:px-6 py-12 sm:py-16">
        <h1 className="text-2xl sm:text-3xl tracking-wide">Exercises</h1>
        <p className="text-sm sm:text-base text-muted-foreground">
          Gentle practices for when you need to pause, reflect, or reconnect
        </p>
      </div>

      {/* Exercises Grid */}
      <div className="mx-auto max-w-2xl space-y-4 sm:space-y-6 px-4 sm:px-6 pb-12 sm:pb-16">
        <Link
          href="/exercises/breathing"
          className="block space-y-3 sm:space-y-4 rounded-sm border border-border p-5 sm:p-6 transition-colors hover:border-primary/40"
        >
          <h2 className="text-lg sm:text-xl tracking-wide">Breathing exercise</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            When thoughts feel rushed, this can help you slow down. Follow a gentle 4-4-6-2 breathing rhythm.
          </p>
        </Link>

        <Link
          href="/exercises/grounding"
          className="block space-y-3 sm:space-y-4 rounded-sm border border-border p-5 sm:p-6 transition-colors hover:border-primary/40"
        >
          <h2 className="text-lg sm:text-xl tracking-wide">Grounding practice</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            When your mind feels scattered, this invites you back to the present using the 5-4-3-2-1 technique.
          </p>
        </Link>

        <Link
          href="/exercises/journaling"
          className="block space-y-3 sm:space-y-4 rounded-sm border border-border p-5 sm:p-6 transition-colors hover:border-primary/40"
        >
          <h2 className="text-lg sm:text-xl tracking-wide">Journaling prompts</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Questions to help you explore what matters. Pick what resonates, and write freely.
          </p>
        </Link>

        <div className="block space-y-3 sm:space-y-4 rounded-sm border border-border bg-muted/30 p-5 sm:p-6 opacity-60">
          <h2 className="text-lg sm:text-xl tracking-wide">Goal-setting framework</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            A calm approach to setting intentions without pressure.
          </p>
          <div className="text-xs text-muted-foreground">Coming soon</div>
        </div>

        <div className="block space-y-3 sm:space-y-4 rounded-sm border border-border bg-muted/30 p-5 sm:p-6 opacity-60">
          <h2 className="text-lg sm:text-xl tracking-wide">Stress reset</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Quick physical practices to release tension and restore energy.
          </p>
          <div className="text-xs text-muted-foreground">Coming soon</div>
        </div>
      </div>

      {/* Philosophy */}
      <div className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-2xl space-y-4 sm:space-y-6 px-4 sm:px-6 py-12 sm:py-16">
          <h2 className="text-lg sm:text-xl tracking-wide">How these work</h2>
          <div className="space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              These exercises are here when you need them — no signup, no tracking, no pressure.
            </p>
            <p>
              They&apos;re grounded in research on nervous system regulation and self-awareness,
              but explained in plain language.
            </p>
            <p>
              Use them when they feel right. Leave them when they don&apos;t.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
