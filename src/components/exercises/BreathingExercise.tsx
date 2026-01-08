"use client";

import { useState, useEffect } from "react";

type Phase = "inhale" | "hold" | "exhale" | "rest";

const phases: { phase: Phase; duration: number; instruction: string }[] = [
  { phase: "inhale", duration: 4, instruction: "Breathe in" },
  { phase: "hold", duration: 4, instruction: "Hold" },
  { phase: "exhale", duration: 6, instruction: "Breathe out" },
  { phase: "rest", duration: 2, instruction: "Rest" },
];

export function BreathingExercise() {
  const [isActive, setIsActive] = useState(false);
  const [currentPhaseIndex, setCurrentPhaseIndex] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(phases[0].duration);

  const currentPhase = phases[currentPhaseIndex];

  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          // Move to next phase
          const nextIndex = (currentPhaseIndex + 1) % phases.length;
          setCurrentPhaseIndex(nextIndex);
          return phases[nextIndex].duration;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive, currentPhaseIndex]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handleStop = () => {
    setIsActive(false);
    setCurrentPhaseIndex(0);
    setSecondsLeft(phases[0].duration);
  };

  return (
    <div className="flex flex-col items-center space-y-16">
      {/* Breathing circle */}
      <div className="relative flex h-64 w-64 items-center justify-center md:h-80 md:w-80">
        <div
          className={`absolute inset-0 rounded-full border-2 border-primary transition-all duration-1000 ease-in-out ${
            isActive && currentPhase.phase === "inhale"
              ? "scale-100 opacity-40"
              : isActive && currentPhase.phase === "exhale"
                ? "scale-50 opacity-20"
                : "scale-75 opacity-30"
          }`}
        />
        <div className="relative z-10 text-center">
          <p className="text-5xl font-light tracking-wide text-foreground">
            {secondsLeft}
          </p>
          <p className="mt-4 text-lg font-light tracking-wide text-muted-foreground">
            {currentPhase.instruction}
          </p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex gap-4">
        {!isActive ? (
          <button
            onClick={handleStart}
            className="rounded-sm border border-primary px-8 py-3 text-sm font-light tracking-wide transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Begin
          </button>
        ) : (
          <button
            onClick={handleStop}
            className="rounded-sm border border-border px-8 py-3 text-sm font-light tracking-wide transition-colors hover:border-foreground"
          >
            Stop
          </button>
        )}
      </div>
    </div>
  );
}
