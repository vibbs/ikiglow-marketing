"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

type Phase = "inhale" | "hold" | "exhale" | "rest";

const phasesConfig: {
  phase: Phase;
  duration: number;
  color: string;
  glowColor: string;
}[] = [
  {
    phase: "inhale",
    duration: 4,
    color: "rgba(78, 195, 214, 0.12)", // Teal glow expands
    glowColor: "rgba(78, 195, 214, 0.20)"
  },
  {
    phase: "hold",
    duration: 4,
    color: "rgba(111, 120, 184, 0.10)", // Indigo wash stills
    glowColor: "rgba(111, 120, 184, 0.14)"
  },
  {
    phase: "exhale",
    duration: 6,
    color: "rgba(242, 139, 184, 0.10)", // Rose → Sage dissolves
    glowColor: "rgba(111, 132, 111, 0.12)"
  },
  {
    phase: "rest",
    duration: 2,
    color: "rgba(111, 132, 111, 0.06)", // Sage calm
    glowColor: "rgba(111, 132, 111, 0.08)"
  },
];

export function BreathingExercise() {
  const t = useTranslations("exercises.breathing.phases");
  const [isActive, setIsActive] = useState(false);
  const [currentPhaseIndex, setCurrentPhaseIndex] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(phasesConfig[0].duration);

  const currentPhase = phasesConfig[currentPhaseIndex];
  const instruction = t(currentPhase.phase);

  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          // Move to next phase
          const nextIndex = (currentPhaseIndex + 1) % phasesConfig.length;
          setCurrentPhaseIndex(nextIndex);
          return phasesConfig[nextIndex].duration;
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
    setSecondsLeft(phasesConfig[0].duration);
  };

  // Color-as-instruction: Phase determines color and scale
  const getCircleStyles = () => {
    if (!isActive) {
      return {
        scale: "scale-75",
        opacity: "opacity-60"
      };
    }
    switch (currentPhase.phase) {
      case "inhale":
        return { scale: "scale-100", opacity: "opacity-100" };
      case "hold":
        return { scale: "scale-100", opacity: "opacity-90" };
      case "exhale":
        return { scale: "scale-[0.65]", opacity: "opacity-80" };
      case "rest":
        return { scale: "scale-[0.65]", opacity: "opacity-70" };
      default:
        return { scale: "scale-75", opacity: "opacity-60" };
    }
  };

  const styles = getCircleStyles();

  return (
    <div className="flex flex-col items-center space-y-8 sm:space-y-16 px-4">
      {/* Breathing circle - Color is the instruction */}
      <div className="relative flex h-56 w-56 items-center justify-center sm:h-64 sm:w-64 md:h-80 md:w-80">
        {/* Outer glow ring - color changes per phase */}
        <div
          className={`absolute inset-0 rounded-full transition-all ease-[cubic-bezier(0.2,0.8,0.2,1)] ${styles.scale} ${styles.opacity
            }`}
          style={{
            backgroundColor: isActive ? currentPhase.color : "rgba(111, 132, 111, 0.08)",
            boxShadow: isActive ? `0 0 48px ${currentPhase.glowColor}` : "0 0 32px rgba(111, 132, 111, 0.12)",
            transitionDuration: isActive ? `${currentPhase.duration}s` : "0.3s"
          }}
        />
        {/* Inner circle with dynamic color wash */}
        <div
          className={`absolute inset-6 sm:inset-8 rounded-full border transition-all ease-[cubic-bezier(0.2,0.8,0.2,1)] ${styles.scale
            } ${styles.opacity}`}
          style={{
            backgroundColor: isActive ? currentPhase.color : "rgba(111, 132, 111, 0.04)",
            borderColor: isActive ? currentPhase.glowColor : "rgba(111, 132, 111, 0.20)",
            borderWidth: "1px",
            transitionDuration: isActive ? `${currentPhase.duration}s` : "0.3s"
          }}
        />
        <div className="relative z-10 text-center">
          <p
            className="text-2xl sm:text-3xl font-light tracking-wide transition-opacity duration-[320ms]"
            style={{ opacity: 0.6 }}
          >
            {instruction}
          </p>
          {isActive && (
            <p className="text-4xl sm:text-5xl font-light tracking-wide mt-2 transition-opacity duration-[320ms] text-center">
              {secondsLeft}
            </p>
          )}
        </div>
      </div>

      {/* Controls - Yohaku+ button styling */}
      <div className="flex gap-4">
        {!isActive ? (
          <button
            onClick={handleStart}
            className="rounded-xl bg-primary px-6 sm:px-8 py-2.5 sm:py-3 text-sm font-light tracking-wide text-primary-foreground transition-all duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:opacity-90 active:translate-y-[1px]"
          >
            {t("begin")}
          </button>
        ) : (
          <button
            onClick={handleStop}
            className="rounded-xl border border-border bg-background px-6 sm:px-8 py-2.5 sm:py-3 text-sm font-light tracking-wide transition-all duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:border-primary/40 hover:bg-accent active:translate-y-[1px]"
          >
            {t("stop")}
          </button>
        )}
      </div>
    </div>
  );
}
