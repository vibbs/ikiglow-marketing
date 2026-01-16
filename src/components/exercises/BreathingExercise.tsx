"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

export type BreathingPhase = "inhale" | "hold" | "exhale" | "rest";

export type BreathingPhaseConfig = {
  phase: BreathingPhase;
  duration: number;
  color: string;
  glowColor: string;
};

const defaultIdleColors = {
  ring: "rgba(111, 132, 111, 0.08)",
  inner: "rgba(111, 132, 111, 0.04)",
  border: "rgba(111, 132, 111, 0.20)",
  glow: "0 0 32px rgba(111, 132, 111, 0.12)",
};

type TimedBreathingExerciseProps = {
  phases: BreathingPhaseConfig[];
  i18nKey: string;
};

export function TimedBreathingExercise({
  phases,
  i18nKey,
}: TimedBreathingExerciseProps) {
  const t = useTranslations(i18nKey);
  const [isActive, setIsActive] = useState(false);
  const [currentPhaseIndex, setCurrentPhaseIndex] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(phases[0].duration);

  const currentPhase = phases[currentPhaseIndex];
  const instruction = t(`phases.${currentPhase.phase}`);

  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          const nextIndex = (currentPhaseIndex + 1) % phases.length;
          setCurrentPhaseIndex(nextIndex);
          return phases[nextIndex].duration;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [currentPhaseIndex, isActive, phases]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handleStop = () => {
    setIsActive(false);
    setCurrentPhaseIndex(0);
    setSecondsLeft(phases[0].duration);
  };

  const getCircleStyles = (phase: BreathingPhase) => {
    switch (phase) {
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

  const styles = isActive
    ? getCircleStyles(currentPhase.phase)
    : { scale: "scale-75", opacity: "opacity-60" };

  return (
    <div className="flex flex-col items-center space-y-8 sm:space-y-16 px-4">
      <div className="relative flex h-56 w-56 items-center justify-center sm:h-64 sm:w-64 md:h-80 md:w-80">
        <div
          className={`absolute inset-0 rounded-full transition-all ease-[cubic-bezier(0.2,0.8,0.2,1)] ${styles.scale} ${styles.opacity}`}
          style={{
            backgroundColor: isActive
              ? currentPhase.color
              : defaultIdleColors.ring,
            boxShadow: isActive
              ? `0 0 48px ${currentPhase.glowColor}`
              : defaultIdleColors.glow,
            transitionDuration: isActive
              ? `${currentPhase.duration}s`
              : "0.3s",
          }}
        />
        <div
          className={`absolute inset-6 sm:inset-8 rounded-full border transition-all ease-[cubic-bezier(0.2,0.8,0.2,1)] ${styles.scale} ${styles.opacity}`}
          style={{
            backgroundColor: isActive
              ? currentPhase.color
              : defaultIdleColors.inner,
            borderColor: isActive
              ? currentPhase.glowColor
              : defaultIdleColors.border,
            borderWidth: "1px",
            transitionDuration: isActive
              ? `${currentPhase.duration}s`
              : "0.3s",
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

      <div className="flex gap-4">
        {!isActive ? (
          <button
            onClick={handleStart}
            className="rounded-xl bg-primary px-6 sm:px-8 py-2.5 sm:py-3 text-sm font-light tracking-wide text-primary-foreground transition-all duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:opacity-90 active:translate-y-[1px]"
          >
            {t("phases.begin")}
          </button>
        ) : (
          <button
            onClick={handleStop}
            className="rounded-xl border border-border bg-background px-6 sm:px-8 py-2.5 sm:py-3 text-sm font-light tracking-wide transition-all duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:border-primary/40 hover:bg-accent active:translate-y-[1px]"
          >
            {t("phases.stop")}
          </button>
        )}
      </div>
    </div>
  );
}
