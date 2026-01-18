"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import type { PreStartMode } from "@/exercises/registry";

type PreStartLayerProps = {
  mode: PreStartMode;
  onComplete: () => void;
  i18nKey: string;
  colors?: {
    ring: string;
    inner: string;
    border: string;
    glow: string;
  };
};

const defaultColors = {
  ring: "rgba(111, 132, 111, 0.08)",
  inner: "rgba(111, 132, 111, 0.04)",
  border: "rgba(111, 132, 111, 0.20)",
  glow: "0 0 32px rgba(111, 132, 111, 0.12)",
};

export function PreStartLayer({
  mode,
  onComplete,
  i18nKey,
  colors = defaultColors,
}: PreStartLayerProps) {
  const t = useTranslations(i18nKey);
  const [breathPhase, setBreathPhase] = useState<"inhale" | "exhale">("inhale");
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    // Fade in text immediately
    setOpacity(1);

    if (mode === "breath") {
      // One slow inhale → exhale cycle (8 seconds total)
      const inhaleTimer = setTimeout(() => {
        setBreathPhase("exhale");
      }, 4000);

      const completeTimer = setTimeout(() => {
        onComplete();
      }, 8000);

      return () => {
        clearTimeout(inhaleTimer);
        clearTimeout(completeTimer);
      };
    } else if (mode === "pause") {
      // 2 seconds of stillness
      const timer = setTimeout(() => {
        onComplete();
      }, 2000);

      return () => clearTimeout(timer);
    } else if (mode === "affirmation") {
      // 1.5 seconds fade
      const timer = setTimeout(() => {
        setOpacity(0);
      }, 1200);

      const completeTimer = setTimeout(() => {
        onComplete();
      }, 1700);

      return () => {
        clearTimeout(timer);
        clearTimeout(completeTimer);
      };
    } else {
      // mode === "none" - complete immediately
      onComplete();
    }
  }, [mode, onComplete]);

  if (mode === "none") {
    return null;
  }

  if (mode === "affirmation") {
    return (
      <div className="flex flex-col items-center justify-center space-y-8 sm:space-y-16 px-4 min-h-[400px]">
        <div
          className="text-center max-w-lg transition-opacity duration-[420ms] ease-[cubic-bezier(0.2,0.8,0.2,1)]"
          style={{ opacity }}
        >
          <p className="text-2xl sm:text-3xl font-light tracking-wide leading-relaxed text-center">
            {t("preStart.affirmation")}
          </p>
        </div>
      </div>
    );
  }

  if (mode === "pause") {
    return (
      <div className="flex flex-col items-center justify-center space-y-8 sm:space-y-16 px-4 min-h-[400px]">
        <div
          className="text-center max-w-lg transition-opacity duration-[320ms] ease-[cubic-bezier(0.2,0.8,0.2,1)]"
          style={{ opacity }}
        >
          <p className="text-2xl sm:text-3xl font-light tracking-wide">
            {t("preStart.pause")}
          </p>
        </div>
      </div>
    );
  }

  // mode === "breath" - visual breath cycle
  return (
    <div className="flex flex-col items-center justify-center space-y-8 sm:space-y-12 px-4">
      <div className="relative flex h-56 w-56 items-center justify-center sm:h-64 sm:w-64 md:h-80 md:w-80">
        <div
          className="absolute inset-0 rounded-full transition-all ease-[cubic-bezier(0.2,0.8,0.2,1)]"
          style={{
            backgroundColor: colors.ring,
            boxShadow: colors.glow,
            transform: breathPhase === "inhale" ? "scale(1)" : "scale(0.65)",
            opacity: breathPhase === "inhale" ? 1 : 0.8,
            transitionDuration: "4s",
          }}
        />
        <div
          className="absolute inset-6 sm:inset-8 rounded-full border transition-all ease-[cubic-bezier(0.2,0.8,0.2,1)]"
          style={{
            backgroundColor: colors.inner,
            borderColor: colors.border,
            borderWidth: "1px",
            transform: breathPhase === "inhale" ? "scale(1)" : "scale(0.65)",
            opacity: breathPhase === "inhale" ? 0.9 : 0.7,
            transitionDuration: "4s",
          }}
        />
      </div>
      <div
        className="text-center max-w-lg transition-opacity duration-[320ms]"
        style={{ opacity }}
      >
        <p className="text-2xl sm:text-3xl font-light tracking-wide">
          {t("preStart.breath")}
        </p>
      </div>
    </div>
  );
}
