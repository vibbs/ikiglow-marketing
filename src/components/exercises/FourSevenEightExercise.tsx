import { TimedBreathingExercise } from "@/components/exercises/BreathingExercise";

const phases = [
  {
    phase: "inhale",
    duration: 4,
    color: "rgba(78, 195, 214, 0.12)",
    glowColor: "rgba(78, 195, 214, 0.20)",
  },
  {
    phase: "hold",
    duration: 7,
    color: "rgba(111, 120, 184, 0.10)",
    glowColor: "rgba(111, 120, 184, 0.14)",
  },
  {
    phase: "exhale",
    duration: 8,
    color: "rgba(242, 139, 184, 0.08)",
    glowColor: "rgba(111, 132, 111, 0.12)",
  },
] as const;

export function FourSevenEightExercise() {
  return (
    <TimedBreathingExercise
      phases={phases}
      i18nKey="exercises.items.four-seven-eight"
    />
  );
}
