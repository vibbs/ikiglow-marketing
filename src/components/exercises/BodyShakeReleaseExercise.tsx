"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { PreStartLayer } from "./PreStartLayer";

type BodyShakeReleaseExerciseProps = {
  i18nKey: string;
};

const instructionKeys = ["start", "hands", "arms", "body", "release"] as const;

const preStartColors = {
  ring: "rgba(242, 108, 79, 0.08)",
  inner: "rgba(242, 108, 79, 0.04)",
  border: "rgba(242, 108, 79, 0.20)",
  glow: "0 0 32px rgba(242, 108, 79, 0.12)",
};

export function BodyShakeReleaseExercise({
  i18nKey,
}: BodyShakeReleaseExerciseProps) {
  const t = useTranslations(i18nKey);
  const tCommon = useTranslations("common.buttons");
  const [isPreparing, setIsPreparing] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(60);
  const [currentInstruction, setCurrentInstruction] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!isActive) return;

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

    // Cycle through instructions every 12 seconds
    const instructionInterval = setInterval(() => {
      setCurrentInstruction(
        (prev) => (prev + 1) % instructionKeys.length
      );
    }, 12000);

    return () => {
      clearInterval(interval);
      clearInterval(instructionInterval);
    };
  }, [isActive]);

  const handleStart = () => {
    setIsPreparing(true);
  };

  const handlePreStartComplete = () => {
    setIsPreparing(false);
    setIsActive(true);
    setSecondsLeft(60);
    setCurrentInstruction(0);
    setIsComplete(false);
  };

  const handleStop = () => {
    setIsActive(false);
    setIsPreparing(false);
    setSecondsLeft(60);
    setCurrentInstruction(0);
    setIsComplete(false);
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
        <div className="wash-orange rounded-xl py-12 px-6 sm:px-8 space-y-4 sm:space-y-6 max-w-2xl w-full">
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
      {/* Visual Indicator */}
      <div className="relative flex h-64 w-64 sm:h-80 sm:w-80 items-center justify-center">
        <div
          className={`absolute inset-0 rounded-full transition-all ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
            isActive
              ? "scale-110 opacity-100 animate-pulse"
              : "scale-75 opacity-60"
          }`}
          style={{
            backgroundColor: isActive
              ? "rgba(242, 108, 79, 0.10)"
              : "rgba(242, 108, 79, 0.06)",
            boxShadow: isActive
              ? "0 0 48px rgba(242, 108, 79, 0.20)"
              : "0 0 32px rgba(242, 108, 79, 0.08)",
            transitionDuration: "0.6s",
          }}
        />
        <div className="relative z-10 text-center space-y-3">
          {isActive ? (
            <>
              <p className="text-5xl sm:text-6xl font-light tracking-wide">
                {secondsLeft}
              </p>
              <p className="text-xs text-muted-foreground">
                {t("timer.countdown")}
              </p>
            </>
          ) : (
            <p className="text-2xl sm:text-3xl font-light tracking-wide text-muted-foreground">
              {t("controls.begin")}
            </p>
          )}
        </div>
      </div>

      {/* Instruction Text */}
      <div className="max-w-lg text-center">
        {isActive ? (
          <div className="animate-ink-flow">
            <p className="text-lg sm:text-xl font-light leading-relaxed">
              {t(`instructions.${instructionKeys[currentInstruction]}`)}
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {instructionKeys.map((key) => (
              <p
                key={key}
                className="text-sm leading-relaxed text-muted-foreground"
              >
                • {t(`instructions.${key}`)}
              </p>
            ))}
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="flex gap-4">
        {!isActive ? (
          <button
            onClick={handleStart}
            className="rounded-xl bg-primary px-6 sm:px-8 py-2.5 sm:py-3 text-sm font-light tracking-wide text-primary-foreground transition-all duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:opacity-90 active:translate-y-[1px]"
          >
            {t("controls.begin")}
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
