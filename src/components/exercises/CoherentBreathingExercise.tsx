import { TimedBreathingExercise } from "@/components/exercises/BreathingExercise";

const phases = [
  {
    phase: "inhale",
    duration: 6,
    color: "rgba(78, 195, 214, 0.10)",
    glowColor: "rgba(78, 195, 214, 0.18)",
  },
  {
    phase: "exhale",
    duration: 6,
    color: "rgba(111, 132, 111, 0.08)",
    glowColor: "rgba(111, 132, 111, 0.12)",
  },
] as const;

export function CoherentBreathingExercise() {
  return (
    <TimedBreathingExercise
      phases={phases}
      i18nKey="exercises.items.coherent-breathing"
      preStartMode="breath"
    />
  );
}
