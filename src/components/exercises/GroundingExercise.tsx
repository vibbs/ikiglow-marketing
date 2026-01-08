"use client";

import { useState } from "react";

const steps = [
  {
    number: 5,
    sense: "See",
    prompt: "Name 5 things you can see around you",
    placeholder: "The light on the wall, a book, my hands...",
  },
  {
    number: 4,
    sense: "Touch",
    prompt: "Name 4 things you can touch",
    placeholder: "The chair beneath me, my breath, the floor...",
  },
  {
    number: 3,
    sense: "Hear",
    prompt: "Name 3 things you can hear",
    placeholder: "Birds outside, my breathing, distant traffic...",
  },
  {
    number: 2,
    sense: "Smell",
    prompt: "Name 2 things you can smell",
    placeholder: "Fresh air, coffee...",
  },
  {
    number: 1,
    sense: "Taste",
    prompt: "Name 1 thing you can taste",
    placeholder: "The lingering taste of tea...",
  },
];

export function GroundingExercise() {
  const [currentStep, setCurrentStep] = useState(0);
  const [responses, setResponses] = useState<string[]>(Array(5).fill(""));
  const [isComplete, setIsComplete] = useState(false);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
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
      <div className="flex flex-col items-center space-y-12 text-center animate-ink-flow">
        <div className="space-y-6">
          <p className="text-2xl font-light tracking-wide">
            You are here. You are present.
          </p>
          <p className="text-lg text-muted-foreground">
            Take a moment to notice how you feel now.
          </p>
        </div>
        <button
          onClick={handleReset}
          className="rounded-xl border border-[#E6E6E1] bg-[#FAFAF8] px-8 py-3 text-sm font-light tracking-wide transition-all duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:border-[#6F846F]/40 hover:bg-[#EEF3EF] active:translate-y-[1px]"
        >
          Practice Again
        </button>
      </div>
    );
  }

  const step = steps[currentStep];

  return (
    <div className="mx-auto max-w-2xl space-y-12">
      {/* Progress - Yohaku+ accent bars */}
      <div className="flex justify-center gap-2">
        {steps.map((_, index) => (
          <div
            key={index}
            className={`h-1 w-12 rounded-full transition-all duration-[320ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] ${index === currentStep
                ? "bg-[#6F846F]"
                : index < currentStep
                  ? "bg-[#6F846F]/40"
                  : "bg-[#E6E6E1]"
              }`}
          />
        ))}
      </div>

      {/* Current step */}
      <div className="space-y-8 text-center">
        <div className="space-y-4">
          <p className="text-6xl font-light text-[#6F846F]">{step.number}</p>
          <h2 className="text-2xl font-light tracking-wide">{step.prompt}</h2>
        </div>

        <textarea
          value={responses[currentStep]}
          onChange={(e) => handleResponseChange(e.target.value)}
          placeholder={step.placeholder}
          className="h-32 w-full resize-none rounded-xl border border-[#E6E6E1] bg-background px-4 py-3 text-base leading-relaxed outline-none transition-all duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] placeholder:text-muted-foreground/50 focus:border-[#6F846F] focus:ring-4 focus:ring-[#6F846F]/12"
        />
      </div>

      {/* Navigation - Yohaku+ button styling */}
      <div className="flex justify-between">
        <button
          onClick={handlePrevious}
          disabled={currentStep === 0}
          className="rounded-xl border border-[#E6E6E1] bg-[#FAFAF8] px-6 py-2 text-sm font-light tracking-wide transition-all duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:border-[#6F846F]/40 hover:bg-[#EEF3EF] disabled:opacity-30 disabled:hover:border-[#E6E6E1] disabled:hover:bg-[#FAFAF8] active:translate-y-[1px]"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="rounded-xl bg-[#6F846F] px-6 py-2 text-sm font-light tracking-wide text-[#FAFAF8] transition-all duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:bg-[#5F7460] active:translate-y-[1px]"
        >
          {currentStep === steps.length - 1 ? "Complete" : "Next"}
        </button>
      </div>
    </div>
  );
}
