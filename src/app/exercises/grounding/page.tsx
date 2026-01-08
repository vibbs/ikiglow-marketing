import Link from "next/link";
import { GroundingExercise } from "@/components/exercises/GroundingExercise";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grounding Exercise — IkiGlow",
  description: "Return to the present moment. The 5-4-3-2-1 technique uses your senses to anchor you in the here and now.",
};

export default function GroundingPage() {
  return (
    <main className="min-h-screen">
      {/* 1. Purpose */}
      <div className="mx-auto max-w-2xl space-y-8 px-6 py-16">
        <h1 className="text-3xl tracking-wide">Grounding practice</h1>
        <p className="text-base leading-relaxed">
          Return to the present moment.
        </p>
      </div>

      {/* 2. The Tool Itself */}
      <div className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-2xl px-6 py-16">
          <GroundingExercise />
        </div>
      </div>

      {/* 3. How to Use */}
      <div className="mx-auto max-w-2xl space-y-6 px-6 py-16">
        <h2 className="text-xl tracking-wide">How to use</h2>
        <ol className="space-y-3 text-base leading-relaxed">
          <li>1. Begin when you&apos;re ready.</li>
          <li>2. Notice what each sense brings to your awareness.</li>
          <li>3. Take your time with each step.</li>
        </ol>
      </div>

      {/* 4. Why It Helps */}
      <div className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-2xl space-y-6 px-6 py-16">
          <h2 className="text-xl tracking-wide">Why it helps</h2>
          <div className="space-y-4 text-base leading-relaxed">
            <p>
              The 5-4-3-2-1 technique anchors you in the present by engaging each of
              your five senses in sequence.
            </p>
            <p>
              When your mind is racing or you feel disconnected from your body, sensory
              awareness brings you back to what&apos;s real and immediate.
            </p>
            <p>
              This practice doesn&apos;t require you to change anything. It simply asks
              you to notice what&apos;s already here.
            </p>
          </div>
        </div>
      </div>

      {/* 5. Optional Next Step */}
      <div className="mx-auto max-w-2xl space-y-6 px-6 py-16">
        <h3 className="text-lg tracking-wide">Next steps</h3>
        <div className="space-y-3">
          <Link
            href="/exercises/breathing"
            className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            → Try the breathing exercise
          </Link>
          <Link
            href="/guides/anxiety"
            className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            → Read the guide on understanding anxiety
          </Link>
          <Link
            href="/tools"
            className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            → View all tools
          </Link>
        </div>
      </div>
    </main>
  );
}
