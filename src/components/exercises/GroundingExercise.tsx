"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

const stepKeys = ["step1", "step2", "step3", "step4", "step5"] as const;
type GroundingExerciseProps = {
  i18nKey: string;
};

export function GroundingExercise({ i18nKey }: GroundingExerciseProps) {
  const t = useTranslations(i18nKey);
  const [currentStep, setCurrentStep] = useState(0);
  const [responses, setResponses] = useState<string[]>(Array(5).fill(""));
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
    setResponses(Array(5).fill(""));
    setIsComplete(false);
  };

  const handleResponseChange = (value: string) => {
    const newResponses = [...responses];
    newResponses[currentStep] = value;
    setResponses(newResponses);
  };

  if (isComplete) {
    return (
      <div className="flex flex-col items-center space-y-12 sm:space-y-16 text-center animate-ink-flow px-4">
        {/* Completion message */}
        <div className="wash-gold rounded-xl py-12 px-6 sm:px-8 space-y-4 sm:space-y-6 max-w-2xl w-full">
          <p className="text-xl sm:text-2xl font-light tracking-wide">
            {t("completion.title")}
          </p>
          <p className="text-base sm:text-lg text-muted-foreground">
            {t("completion.subtitle")}
          </p>
        </div>

        {/* User's responses - gentle reflection */}
        <div className="space-y-6 sm:space-y-8 max-w-2xl w-full">
          <p className="text-sm text-muted-foreground font-light tracking-wide">
            {t("completion.yourReflections")}
          </p>

          {stepKeys.map((stepKey, index) => {
            const response = responses[index];
            if (!response.trim()) return null;

            return (
              <div key={stepKey} className="space-y-2 text-left">
                <p className="text-sm text-muted-foreground">
                  {t(`steps.${stepKey}.prompt`)}
                </p>
                <p className="text-base leading-relaxed pl-4 border-l-2 border-primary/20">
                  {response}
                </p>
              </div>
            );
          })}
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
  const currentResponse = responses[currentStep].trim();
  const canProceed = currentResponse.length > 0;

  return (
    <div className="mx-auto max-w-2xl space-y-8 sm:space-y-12 px-4">
      {/* Progress - Sage glow accent bars */}
      <div className="flex justify-center gap-1.5 sm:gap-2">
        {stepKeys.map((_, index) => (
          <div
            key={index}
            className={`h-1 w-8 sm:w-12 rounded-full transition-all duration-[320ms] ease-[cubic-bezier(0.2,0.8,0.2,1)]`}
            style={{
              backgroundColor:
                index === currentStep
                  ? "#6F846F" // Sage - active
                  : index < currentStep
                    ? "rgba(111, 132, 111, 0.40)" // Sage 40% - completed
                    : "rgba(230, 228, 221, 1)", // line.0 - pending
              boxShadow:
                index === currentStep
                  ? "0 0 8px rgba(111, 132, 111, 0.30)"
                  : "none"
            }}
          />
        ))}
      </div>

      {/* Current step - Sage wash background */}
      <div className="space-y-6 sm:space-y-8 text-center wash-sage rounded-xl py-12 px-6 sm:px-8">
        <div className="space-y-4 sm:space-y-6">
          <h2 className="text-xl sm:text-2xl font-light tracking-wide">
            {t(`steps.${stepKey}.prompt`)}
          </h2>
        </div>

        <textarea
          value={responses[currentStep]}
          onChange={(e) => handleResponseChange(e.target.value)}
          placeholder={t(`steps.${stepKey}.placeholder`)}
          className="h-40 sm:h-44 w-full resize-none rounded-xl border border-border bg-background px-5 py-4 text-sm sm:text-base leading-relaxed outline-none transition-all duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] placeholder:text-muted-foreground/50 focus:border-primary focus:ring-4 focus:ring-primary/12"
        />
      </div>

      {/* Navigation - Yohaku+ button styling */}
      <div className="flex justify-between gap-4">
        <button
          onClick={handlePrevious}
          disabled={currentStep === 0}
          className="rounded-xl border border-border bg-background px-4 sm:px-6 py-2 text-sm font-light tracking-wide transition-all duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:border-primary/40 hover:bg-accent disabled:opacity-30 disabled:hover:border-border disabled:hover:bg-background active:translate-y-[1px]"
        >
          {t("navigation.previous")}
        </button>
        <button
          onClick={handleNext}
          disabled={!canProceed}
          className="rounded-xl bg-primary px-4 sm:px-6 py-2 text-sm font-light tracking-wide text-primary-foreground transition-all duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed active:translate-y-[1px]"
        >
          {currentStep === stepKeys.length - 1 ? t("navigation.complete") : t("navigation.next")}
        </button>
      </div>
    </div>
  );
}
