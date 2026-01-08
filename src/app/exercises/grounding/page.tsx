import Link from "next/link";
import { GroundingExercise } from "@/components/exercises/GroundingExercise";

export default function GroundingPage() {
  return (
    <main className="min-h-screen px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-3xl space-y-16">
        {/* Header */}
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            ← Home
          </Link>
          <h1 className="text-3xl font-light tracking-wide md:text-4xl">
            Grounding
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            The 5-4-3-2-1 technique. A gentle way to return to the present moment
            through your senses.
          </p>
        </div>

        {/* Exercise */}
        <div className="pt-8">
          <GroundingExercise />
        </div>

        {/* Context */}
        <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
          <p>
            This grounding technique helps you reconnect with the present by
            engaging each of your five senses in sequence.
          </p>
          <p>
            When thoughts feel overwhelming or scattered, this practice offers
            a way to anchor yourself in the here and now.
          </p>
        </div>
      </div>
    </main>
  );
}
