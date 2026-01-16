"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

type SelfCompassionBreakExerciseProps = {
  i18nKey: string;
};

const stepKeys = ["step1", "step2", "step3"] as const;

export function SelfCompassionBreakExercise({
  i18nKey,
}: SelfCompassionBreakExerciseProps) {
  const t = useTranslations(i18nKey);
  const tCommon = useTranslations("common.buttons");
  const [currentStep, setCurrentStep] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const handleNext = () => {
    if (currentStep < stepKeys.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsComplete(true);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setIsComplete(false);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setIsComplete(false);
  };

  if (isComplete) {
    return (
      <div className="flex flex-col items-center space-y-12 sm:space-y-16 text-center animate-ink-flow px-4">
        <div className="wash-rose rounded-xl py-12 px-6 sm:px-8 space-y-4 sm:space-y-6 max-w-2xl w-full">
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

  const stepKey = stepKeys[currentStep];

  return (
    <div className="mx-auto max-w-2xl space-y-8 sm:space-y-12 px-4">
      {/* Progress Indicator */}
      <div className="flex justify-center gap-2">
        {stepKeys.map((_, index) => (
          <div
            key={index}
            className="h-1.5 w-12 rounded-full transition-all duration-[320ms]"
            style={{
              backgroundColor:
                index === currentStep
                  ? "#F28BB8"
                  : index < currentStep
                    ? "rgba(242, 139, 184, 0.40)"
                    : "rgba(230, 228, 221, 1)",
              boxShadow:
                index === currentStep
                  ? "0 0 8px rgba(242, 139, 184, 0.30)"
                  : "none",
            }}
          />
        ))}
      </div>

      {/* Current Step */}
      <div className="space-y-6 text-center wash-rose rounded-xl py-12 px-6 sm:px-8">
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground font-light tracking-wide uppercase">
            {t(`steps.${stepKey}.title`)}
          </p>
          <p className="text-2xl sm:text-3xl font-light tracking-wide leading-relaxed">
            {t(`steps.${stepKey}.prompt`)}
          </p>
        </div>

        <div className="pt-4 border-t border-primary/10">
          <p className="text-sm leading-relaxed text-muted-foreground">
            {t(`steps.${stepKey}.instruction`)}
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between gap-4">
        <button
          onClick={handlePrevious}
          disabled={currentStep === 0}
          className="rounded-xl border border-border bg-background px-4 sm:px-6 py-2 text-sm font-light tracking-wide transition-all duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:border-primary/40 hover:bg-accent disabled:opacity-30 disabled:hover:border-border disabled:hover:bg-background active:translate-y-[1px]"
        >
          {t("controls.previous")}
        </button>
        <button
          onClick={handleNext}
          className="rounded-xl bg-primary px-4 sm:px-6 py-2 text-sm font-light tracking-wide text-primary-foreground transition-all duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:opacity-90 active:translate-y-[1px]"
        >
          {currentStep === stepKeys.length - 1
            ? t("controls.finish")
            : t("controls.next")}
        </button>
      </div>
    </div>
  );
}
