import Link from "next/link";
import { BreathingExercise } from "@/components/exercises/BreathingExercise";

export default function BreathingPage() {
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
            Breathing
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            A simple practice to restore attention and find calm.
            Follow the gentle rhythm.
          </p>
        </div>

        {/* Exercise */}
        <div className="pt-8">
          <BreathingExercise />
        </div>

        {/* Instructions */}
        <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
          <p>
            This exercise uses a 4-4-6-2 pattern: inhale for 4 seconds,
            hold for 4 seconds, exhale for 6 seconds, and rest for 2 seconds.
          </p>
          <p>
            The longer exhale activates your parasympathetic nervous system,
            promoting relaxation. Practice whenever you need to center yourself.
          </p>
        </div>
      </div>
    </main>
  );
}
