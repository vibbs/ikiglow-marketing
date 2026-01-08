import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guides — IkiGlow",
  description: "Comprehensive guides for understanding yourself and navigating life's challenges with clarity.",
};

export default function Guides() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <div className="mx-auto max-w-2xl space-y-8 px-6 py-16">
        <h1 className="text-3xl tracking-wide">Guides</h1>
        <p className="text-base text-muted-foreground">
          Comprehensive resources for understanding yourself and navigating life&apos;s challenges
        </p>
      </div>

      {/* Guides Grid */}
      <div className="mx-auto max-w-2xl space-y-6 px-6 pb-16">
        <Link
          href="/guides/anxiety"
          className="block space-y-4 rounded-sm border border-border p-6 transition-colors hover:border-primary/40"
        >
          <h2 className="text-xl tracking-wide">Understanding Anxiety</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            What anxiety feels like, what it is, and practical ways to work with it
          </p>
        </Link>

        <Link
          href="/guides/decision-fatigue"
          className="block space-y-4 rounded-sm border border-border p-6 transition-colors hover:border-primary/40"
        >
          <h2 className="text-xl tracking-wide">Decision Fatigue</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Why your mental energy depletes and how to preserve it
          </p>
        </Link>

        <Link
          href="/guides/burnout"
          className="block space-y-4 rounded-sm border border-border p-6 transition-colors hover:border-primary/40"
        >
          <h2 className="text-xl tracking-wide">Recognizing Burnout</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Understanding the difference between tiredness and true burnout
          </p>
        </Link>

        <Link
          href="/guides/purpose"
          className="block space-y-4 rounded-sm border border-border p-6 transition-colors hover:border-primary/40"
        >
          <h2 className="text-xl tracking-wide">Finding Purpose</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            A practical approach to discovering what matters to you
          </p>
        </Link>
      </div>
    </main>
  );
}
