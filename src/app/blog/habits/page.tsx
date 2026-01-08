import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Habits — Blog — IkiGlow",
  description: "Reflections on building sustainable routines and gentle behavior change.",
};

export default function HabitsCategory() {
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
        <h1 className="text-3xl tracking-wide">Habits</h1>
        <p className="text-base text-muted-foreground">
          Building sustainable routines and gentle behavior change
        </p>
      </div>

      {/* Posts */}
      <div className="mx-auto max-w-2xl space-y-12 px-6 pb-16">
        <p className="text-sm text-muted-foreground">
          Posts in this category coming soon.
        </p>
      </div>
    </main>
  );
}
