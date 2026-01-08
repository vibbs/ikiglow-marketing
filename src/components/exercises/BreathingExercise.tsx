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

  // Yohaku+ Breath Pulse - signature animation
  const getCircleStyles = () => {
    if (!isActive) {
      return "scale-75 opacity-60";
    }
    switch (currentPhase.phase) {
      case "inhale":
        return "scale-100 opacity-90";
      case "hold":
        return "scale-100 opacity-80";
      case "exhale":
        return "scale-[0.6] opacity-50";
      case "rest":
        return "scale-[0.6] opacity-40";
      default:
        return "scale-75 opacity-60";
    }
  };

  return (
    <div className="flex flex-col items-center space-y-8 sm:space-y-16 px-4">
      {/* Breathing circle - Yohaku+ Breath Pulse */}
      <div className="relative flex h-56 w-56 items-center justify-center sm:h-64 sm:w-64 md:h-80 md:w-80">
        {/* Outer ambient ring */}
        <div
          className={`absolute inset-0 rounded-full bg-[#6F846F]/10 transition-all duration-[1200ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] ${isActive ? getCircleStyles() : "animate-breath-pulse"
            }`}
        />
        {/* Inner circle with Moss accent */}
        <div
          className={`absolute inset-6 sm:inset-8 rounded-full border-2 border-[#6F846F] bg-[#EEF3EF] transition-all duration-[1200ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] ${getCircleStyles()
            }`}
        />
        <div className="relative z-10 text-center">
          <p className="text-4xl sm:text-5xl font-light tracking-wide text-foreground">
            {secondsLeft}
          </p>
          <p className="mt-2 sm:mt-4 text-base sm:text-lg font-light tracking-wide text-muted-foreground">
            {currentPhase.instruction}
          </p>
        </div>
      </div>

      {/* Controls - Yohaku+ button styling */}
      <div className="flex gap-4">
        {!isActive ? (
          <button
            onClick={handleStart}
            className="rounded-xl bg-[#6F846F] px-6 sm:px-8 py-2.5 sm:py-3 text-sm font-light tracking-wide text-[#FAFAF8] transition-all duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:bg-[#5F7460] active:translate-y-[1px]"
          >
            Begin
          </button>
        ) : (
          <button
            onClick={handleStop}
            className="rounded-xl border border-[#E6E6E1] bg-[#FAFAF8] px-6 sm:px-8 py-2.5 sm:py-3 text-sm font-light tracking-wide transition-all duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:border-[#6F846F]/40 hover:bg-[#EEF3EF] active:translate-y-[1px]"
          >
            Stop
          </button>
        )}
      </div>
    </div>
  );
}
