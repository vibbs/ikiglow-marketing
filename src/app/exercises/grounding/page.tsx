"use client";

import { useState } from "react";
import Link from "next/link";
import { GroundingExercise } from "@/components/exercises/GroundingExercise";

type TabType = "exercise" | "how-to-use" | "why-it-helps";

export default function GroundingPage() {
  const [activeTab, setActiveTab] = useState<TabType>("exercise");

  return (
    <main className="min-h-screen">
      {/* Header */}
      <div className="mx-auto max-w-2xl space-y-6 sm:space-y-8 px-4 sm:px-6 py-12 sm:py-16">
        <Link
          href="/exercises"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Back to Exercises
        </Link>

        <div className="space-y-4">
          <h1 className="text-2xl sm:text-3xl tracking-wide">Grounding practice</h1>
          <p className="text-sm sm:text-base leading-relaxed">
            When your mind feels scattered, this can help you come back to now.
          </p>
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
        <div className="border-t border-border bg-muted/30">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 py-12 sm:py-16">
            <GroundingExercise />
          </div>
        </div>
      )}

      {activeTab === "how-to-use" && (
        <div className="mx-auto max-w-2xl space-y-4 sm:space-y-6 px-4 sm:px-6 py-12 sm:py-16">
          <h2 className="text-lg sm:text-xl tracking-wide">How to use</h2>
          <div className="space-y-2 sm:space-y-3 text-sm sm:text-base leading-relaxed">
            <p>Start when you&apos;re ready.</p>
            <p>Notice what each sense brings to your awareness, without judgment.</p>
            <p>Move through the steps at your own pace.</p>
          </div>
        </div>
      )}

      {activeTab === "why-it-helps" && (
        <div className="border-t border-border bg-muted/30">
          <div className="mx-auto max-w-2xl space-y-4 sm:space-y-6 px-4 sm:px-6 py-12 sm:py-16">
            <h2 className="text-lg sm:text-xl tracking-wide">Why it helps</h2>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base leading-relaxed">
              <p>
                The 5-4-3-2-1 technique anchors you in the present by engaging each of
                your senses, one at a time.
              </p>
              <p>
                When your mind is racing or you feel disconnected, sensory
                awareness brings you back to what&apos;s real and immediate.
              </p>
              <p>
                This doesn&apos;t require you to change anything. It simply invites
                you to notice what&apos;s already here.
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
              href="/exercises"
              className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              → View all exercises
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
