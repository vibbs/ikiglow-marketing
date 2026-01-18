"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { PreStartLayer } from "./PreStartLayer";

type OneMinuteMindfulBreakExerciseProps = {
  i18nKey: string;
};

const preStartColors = {
  ring: "rgba(111, 132, 111, 0.08)",
  inner: "rgba(111, 132, 111, 0.04)",
  border: "rgba(111, 132, 111, 0.20)",
  glow: "0 0 32px rgba(111, 132, 111, 0.12)",
};

export function OneMinuteMindfulBreakExercise({
  i18nKey,
}: OneMinuteMindfulBreakExerciseProps) {
  const t = useTranslations(i18nKey);
  const tCommon = useTranslations("common.buttons");
  const [isPreparing, setIsPreparing] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(60);
  const [isComplete, setIsComplete] = useState(false);
  const [breathPhase, setBreathPhase] = useState<"in" | "out">("in");

  // Countdown timer effect
  useEffect(() => {
    if (!isActive || secondsLeft <= 0) return;

    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          setIsActive(false);
          setIsComplete(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive, secondsLeft]);

  // Breath phase alternation effect (separate from countdown)
  useEffect(() => {
    if (!isActive) return;

    const breathInterval = setInterval(() => {
      setBreathPhase((prev) => (prev === "in" ? "out" : "in"));
    }, 4000);

    return () => clearInterval(breathInterval);
  }, [isActive]);

  const handleStart = () => {
    setIsPreparing(true);
  };

  const handlePreStartComplete = () => {
    setIsPreparing(false);
    setIsActive(true);
    setSecondsLeft(60);
    setIsComplete(false);
    setBreathPhase("in");
  };

  const handleStop = () => {
    setIsActive(false);
    setIsPreparing(false);
    setSecondsLeft(60);
    setIsComplete(false);
    setBreathPhase("in");
  };

  if (isPreparing) {
    return (
      <PreStartLayer
        mode="breath"
        onComplete={handlePreStartComplete}
        i18nKey={i18nKey}
        colors={preStartColors}
      />
    );
  }

  if (isComplete) {
    return (
      <div className="flex flex-col items-center space-y-12 sm:space-y-16 text-center animate-ink-flow px-4">
        <div className="wash-sage rounded-xl py-12 px-6 sm:px-8 space-y-4 sm:space-y-6 max-w-2xl w-full">
          <p className="text-xl sm:text-2xl font-light tracking-wide">
            {t("completion.title")}
          </p>
          <p className="text-base sm:text-lg text-muted-foreground">
            {t("completion.subtitle")}
          </p>
        </div>

        <button
          onClick={handleStart}
          className="rounded-xl border border-border bg-background px-6 sm:px-8 py-2.5 sm:py-3 text-sm font-light tracking-wide transition-all duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:border-primary/40 hover:bg-accent active:translate-y-[1px]"
        >
          {t("completion.practiceAgain")}
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center space-y-8 sm:space-y-12 px-4">
      {/* Timer Circle */}
      <div className="relative flex h-64 w-64 sm:h-80 sm:w-80 md:h-96 md:w-96 items-center justify-center">
        <div
          className={`absolute inset-0 rounded-full transition-all ease-[cubic-bezier(0.2,0.8,0.2,1)]`}
          style={{
            backgroundColor: isActive
              ? "rgba(111, 132, 111, 0.08)"
              : "rgba(111, 132, 111, 0.06)",
            boxShadow: isActive
              ? "0 0 48px rgba(111, 132, 111, 0.14)"
              : "0 0 32px rgba(111, 132, 111, 0.08)",
            transform: isActive
              ? breathPhase === "in"
                ? "scale(1.05)"
                : "scale(0.95)"
              : "scale(0.75)",
            opacity: isActive ? 1 : 0.6,
            transitionDuration: "4s",
          }}
        />
        <div
          className={`absolute inset-8 sm:inset-10 rounded-full border transition-all ease-[cubic-bezier(0.2,0.8,0.2,1)]`}
          style={{
            backgroundColor: isActive
              ? "rgba(111, 132, 111, 0.04)"
              : "rgba(111, 132, 111, 0.02)",
            borderColor: isActive
              ? "rgba(111, 132, 111, 0.20)"
              : "rgba(111, 132, 111, 0.12)",
            borderWidth: "1px",
            transform: isActive
              ? breathPhase === "in"
                ? "scale(1.05)"
                : "scale(0.95)"
              : "scale(0.75)",
            opacity: isActive ? 0.9 : 0.6,
            transitionDuration: "4s",
          }}
        />
        <div className="relative z-10 text-center space-y-2">
          {isActive ? (
            <>
              <p className="text-5xl sm:text-6xl md:text-7xl font-light tracking-wide text-center">
                {secondsLeft}
              </p>
              <p className="text-lg sm:text-xl font-light tracking-wide text-muted-foreground animate-breath-text">
                {t(`timer.breath.${breathPhase}`)}
              </p>
            </>
          ) : (
            <p className="text-2xl sm:text-3xl font-light tracking-wide text-muted-foreground">
              {t("timer.ready")}
            </p>
          )}
        </div>
      </div>

      {/* Instruction Text */}
      <div className="max-w-lg text-center space-y-4">
        {isActive ? (
          <div className="animate-ink-flow">
            <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
              {t("instruction")}
            </p>
          </div>
        ) : (
          <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
            {t("instruction")}
          </p>
        )}
      </div>

      {/* Controls */}
      <div className="flex gap-4">
        {!isActive ? (
          <button
            onClick={handleStart}
            className="rounded-xl bg-primary px-6 sm:px-8 py-2.5 sm:py-3 text-sm font-light tracking-wide text-primary-foreground transition-all duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:opacity-90 active:translate-y-[1px]"
          >
            {t("timer.ready")}
          </button>
        ) : (
          <button
            onClick={handleStop}
            className="rounded-xl border border-border bg-background px-6 sm:px-8 py-2.5 sm:py-3 text-sm font-light tracking-wide transition-all duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:border-primary/40 hover:bg-accent active:translate-y-[1px]"
          >
            {tCommon("stop")}
          </button>
        )}
      </div>
    </div>
  );
}
