"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

type Scene = "beach" | "forest" | "mountain";

type GuidedVisualizationExerciseProps = {
  i18nKey: string;
};

export function GuidedVisualizationExercise({
  i18nKey,
}: GuidedVisualizationExerciseProps) {
  const t = useTranslations(i18nKey);
  const [selectedScene, setSelectedScene] = useState<Scene | null>(null);
  const [currentStep, setCurrentStep] = useState(-1); // -1 = scene selection
  const [isComplete, setIsComplete] = useState(false);

  const scenes: Scene[] = ["beach", "forest", "mountain"];
  const steps = ["intro", "sense1", "sense2", "sense3", "sense4", "closing"];
  const stepsCount = steps.length;

  const handleSceneSelect = (scene: Scene) => {
    setSelectedScene(scene);
    setCurrentStep(0);
    setIsComplete(false);
  };

  const handleNext = () => {
    if (currentStep < stepsCount - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsComplete(true);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleReset = () => {
    setSelectedScene(null);
    setCurrentStep(-1);
    setIsComplete(false);
  };

  if (isComplete) {
    return (
      <div className="flex flex-col items-center space-y-12 sm:space-y-16 text-center animate-ink-flow px-4">
        <div className="wash-sky rounded-xl py-12 px-6 sm:px-8 space-y-4 sm:space-y-6 max-w-2xl w-full">
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

  // Scene selection view
  if (!selectedScene || currentStep === -1) {
    return (
      <div className="flex flex-col items-center space-y-8 sm:space-y-12 px-4">
        <div className="max-w-2xl space-y-6 text-center">
          <p className="text-lg sm:text-xl font-light leading-relaxed text-muted-foreground">
            {t("controls.selectScene")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 w-full max-w-2xl">
          {scenes.map((scene) => (
            <button
              key={scene}
              onClick={() => handleSceneSelect(scene)}
              className="wash-sky rounded-xl border border-border px-6 py-8 text-base font-light tracking-wide transition-all duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:border-primary/40 hover:bg-accent active:translate-y-[1px]"
            >
              {t(`scenes.${scene}`)}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl space-y-8 sm:space-y-12 px-4">
      {/* Progress Indicator */}
      <div className="flex justify-center gap-1">
        {Array.from({ length: stepsCount }).map((_, index) => (
          <div
            key={index}
            className="h-1 w-8 rounded-full transition-all duration-[320ms]"
            style={{
              backgroundColor:
                index === currentStep
                  ? "#4EC3D6"
                  : index < currentStep
                    ? "rgba(78, 195, 214, 0.40)"
                    : "rgba(230, 228, 221, 1)",
            }}
          />
        ))}
      </div>

      {/* Current Step */}
      <div className="space-y-6 wash-sky rounded-xl py-12 px-6 sm:px-8">
        <div className="text-center space-y-4">
          <p className="text-lg sm:text-xl font-light leading-relaxed">
            {t(`prompts.${selectedScene}.${steps[currentStep]}`)}
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
          {currentStep === stepsCount - 1
            ? t("controls.finish")
            : t("controls.next")}
        </button>
      </div>
    </div>
  );
}
