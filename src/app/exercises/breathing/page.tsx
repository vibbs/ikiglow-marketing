"use client";

import { useState } from "react";
import Link from "next/link";
import { BreathingExercise } from "@/components/exercises/BreathingExercise";

type TabType = "exercise" | "how-to-use" | "why-it-helps";

export default function BreathingPage() {
  const [activeTab, setActiveTab] = useState<TabType>("exercise");

  return (
    <main className="min-h-screen">
      {/* Header */}
      <div className="wash-top-sage">
        <div className="mx-auto max-w-2xl space-y-6 sm:space-y-8 px-4 sm:px-6 py-12 sm:py-16 animate-ink-flow-stagger">
          <Link
            href="/exercises"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to Exercises
          </Link>

          <div className="space-y-4">
            <h1 className="text-2xl sm:text-3xl tracking-wide">Breathing exercise</h1>
            <p className="text-sm sm:text-base leading-relaxed">
              When thoughts feel rushed, this can help you slow down.
            </p>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-border">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <div className="flex gap-6">
            <button
              onClick={() => setActiveTab("exercise")}
              className={`pb-3 text-sm transition-colors relative ${activeTab === "exercise"
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
                }`}
            >
              Exercise
              {activeTab === "exercise" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
              )}
            </button>
            <button
              onClick={() => setActiveTab("how-to-use")}
              className={`pb-3 text-sm transition-colors relative ${activeTab === "how-to-use"
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
                }`}
            >
              How to Use
              {activeTab === "how-to-use" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
              )}
            </button>
            <button
              onClick={() => setActiveTab("why-it-helps")}
              className={`pb-3 text-sm transition-colors relative ${activeTab === "why-it-helps"
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
                }`}
            >
              Why It Helps
              {activeTab === "why-it-helps" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === "exercise" && (
        <div className="panel-sage">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 py-12 sm:py-16">
            <BreathingExercise />
          </div>
        </div>
      )}

      {activeTab === "how-to-use" && (
        <div className="mx-auto max-w-2xl space-y-4 sm:space-y-6 px-4 sm:px-6 py-12 sm:py-16">
          <h2 className="text-lg sm:text-xl tracking-wide">How to use</h2>
          <div className="space-y-2 sm:space-y-3 text-sm sm:text-base leading-relaxed">
            <p>Begin when you&apos;re ready.</p>
            <p>Follow the visual rhythm — there&apos;s no need to count.</p>
            <p>You might try a few cycles, or stay as long as feels right.</p>
          </div>
        </div>
      )}

      {activeTab === "why-it-helps" && (
        <div className="panel-mist">
          <div className="mx-auto max-w-2xl space-y-4 sm:space-y-6 px-4 sm:px-6 py-12 sm:py-16">
            <h2 className="text-lg sm:text-xl tracking-wide">Why it helps</h2>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base leading-relaxed">
              <p>
                This uses a 4-4-6-2 pattern: inhale for 4 seconds, hold for
                4 seconds, exhale for 6 seconds, rest for 2 seconds.
              </p>
              <p>
                The longer exhale activates your parasympathetic nervous system — the
                part responsible for rest and calm.
              </p>
              <p>
                When you&apos;re anxious or overwhelmed, breathing often becomes shallow
                and rapid. Slowing it down gently signals safety to your body.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Next Steps - Always Visible */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-2xl space-y-4 sm:space-y-6 px-4 sm:px-6 py-12 sm:py-16">
          <h3 className="text-base sm:text-lg tracking-wide">Next steps</h3>
          <div className="space-y-2 sm:space-y-3">
            <Link
              href="/exercises/grounding"
              className="block text-sm text-muted-foreground transition-colors hover:text-[#6F846F]"
            >
              → Try the grounding exercise
            </Link>
            <Link
              href="/guides/anxiety"
              className="block text-sm text-muted-foreground transition-colors hover:text-[#6F846F]"
            >
              → Read the guide on understanding anxiety
            </Link>
            <Link
              href="/blog/why-clarity-beats-motivation"
              className="block text-sm text-muted-foreground transition-colors hover:text-[#6F846F]"
            >
              → Why clarity beats motivation
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
