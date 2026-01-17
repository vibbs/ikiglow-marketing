"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

type ProgressiveMuscleRelaxationExerciseProps = {
  i18nKey: string;
};

export function ProgressiveMuscleRelaxationExercise({
  i18nKey,
}: ProgressiveMuscleRelaxationExerciseProps) {
  const t = useTranslations(i18nKey);
  const tCommon = useTranslations("common.buttons");
  const [currentStep, setCurrentStep] = useState(-1); // -1 = not started
  const [isComplete, setIsComplete] = useState(false);

  // Use t.raw() to get array of body parts
  const bodyParts = t.raw("bodyParts") as Array<{
    name: string;
    instruction: string;
  }>;
  const bodyPartsCount = bodyParts.length;

  const handleStart = () => {
    setCurrentStep(0);
    setIsComplete(false);
  };

  const handleNext = () => {
    if (currentStep < bodyPartsCount - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsComplete(true);
    }
  };

  const handleReset = () => {
    setCurrentStep(-1);
    setIsComplete(false);
  };

  if (isComplete) {
    return (
      <div className="flex flex-col items-center space-y-12 sm:space-y-16 text-center animate-ink-flow px-4">
        <div className="wash-indigo rounded-xl py-12 px-6 sm:px-8 space-y-4 sm:space-y-6 max-w-2xl w-full">
          <p className="text-xl sm:text-2xl font-light tracking-wide">
            {t("completion.title")}
          </p>
          <p className="text-base sm:text-lg text-muted-foreground">
            {t("completion.subtitle")}
          </p>
        </div>

        <button
          onClick={handleReset}
          className="rounded-xl border border-border bg-background px-6 sm:px-8 py-2.5 sm:py-3 text-sm font-light tracking-wide transition-all duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:border-primary/40 hover:bg-accent active:translate-y-[1px]"
        >
          {t("completion.practiceAgain")}
        </button>
      </div>
    );
  }

  if (currentStep === -1) {
    return (
      <div className="flex flex-col items-center space-y-8 sm:space-y-12 px-4">
        <button
          onClick={handleStart}
          className="rounded-xl bg-primary px-6 sm:px-8 py-2.5 sm:py-3 text-sm font-light tracking-wide text-primary-foreground transition-all duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:opacity-90 active:translate-y-[1px]"
        >
          {t("controls.begin")}
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl space-y-8 sm:space-y-12 px-4">
      {/* Progress Indicator */}
      <div className="flex justify-center gap-1">
        {Array.from({ length: bodyPartsCount }).map((_, index) => (
          <div
            key={index}
            className="h-1 w-8 rounded-full transition-all duration-[320ms]"
            style={{
              backgroundColor:
                index === currentStep
                  ? "#6F78B8"
                  : index < currentStep
                    ? "rgba(111, 120, 184, 0.40)"
                    : "rgba(230, 228, 221, 1)",
            }}
          />
        ))}
      </div>

      {/* Current Body Part */}
      <div className="space-y-6 wash-indigo rounded-xl py-12 px-6 sm:px-8">
        <div className="text-center space-y-4">
          <p className="text-sm text-muted-foreground font-light tracking-wide uppercase">
            {bodyParts[currentStep].name}
          </p>
          <p className="text-lg sm:text-xl font-light leading-relaxed">
            {bodyParts[currentStep].instruction}
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-center">
        <button
          onClick={handleNext}
          className="rounded-xl bg-primary px-6 sm:px-8 py-2.5 sm:py-3 text-sm font-light tracking-wide text-primary-foreground transition-all duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:opacity-90 active:translate-y-[1px]"
        >
          {currentStep === bodyPartsCount - 1
            ? t("controls.finish")
            : t("controls.next")}
        </button>
      </div>
    </div>
  );
}
