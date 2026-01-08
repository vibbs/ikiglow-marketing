import Link from "next/link";
import { BreathingExercise } from "@/components/exercises/BreathingExercise";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Breathing Exercise — IkiGlow",
  description: "A simple way to slow your thoughts. Follow the gentle 4-4-6-2 breathing pattern to restore calm.",
};

export default function BreathingPage() {
  return (
    <main className="min-h-screen">
      {/* 1. Purpose */}
      <div className="mx-auto max-w-2xl space-y-8 px-6 py-16">
        <h1 className="text-3xl tracking-wide">Breathing exercise</h1>
        <p className="text-base leading-relaxed">
          A simple way to slow your thoughts.
        </p>
      </div>

      {/* 2. The Tool Itself */}
      <div className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-2xl px-6 py-16">
          <BreathingExercise />
        </div>
      </div>

      {/* 3. How to Use */}
      <div className="mx-auto max-w-2xl space-y-6 px-6 py-16">
        <h2 className="text-xl tracking-wide">How to use</h2>
        <ol className="space-y-3 text-base leading-relaxed">
          <li>1. Press start when you&apos;re ready.</li>
          <li>2. Follow the visual guide and breath with the rhythm.</li>
          <li>3. Complete as many cycles as you need.</li>
        </ol>
      </div>

      {/* 4. Why It Helps */}
      <div className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-2xl space-y-6 px-6 py-16">
          <h2 className="text-xl tracking-wide">Why it helps</h2>
          <div className="space-y-4 text-base leading-relaxed">
            <p>
              This exercise uses a 4-4-6-2 pattern: inhale for 4 seconds, hold for
              4 seconds, exhale for 6 seconds, rest for 2 seconds.
            </p>
            <p>
              The longer exhale activates your parasympathetic nervous system — the
              part of your nervous system responsible for rest and calm.
            </p>
            <p>
              When you&apos;re anxious or overwhelmed, your breathing becomes shallow
              and rapid. Slowing it down signals safety to your body.
            </p>
          </div>
        </div>
      </div>

      {/* 5. Optional Next Step */}
      <div className="mx-auto max-w-2xl space-y-6 px-6 py-16">
        <h3 className="text-lg tracking-wide">Next steps</h3>
        <div className="space-y-3">
          <Link
            href="/exercises/grounding"
            className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            → Try the grounding exercise
          </Link>
          <Link
            href="/guides/anxiety"
            className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            → Read the guide on understanding anxiety
          </Link>
          <Link
            href="/blog/why-clarity-beats-motivation"
            className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            → Why clarity beats motivation
          </Link>
        </div>
      </div>
    </main>
  );
}
