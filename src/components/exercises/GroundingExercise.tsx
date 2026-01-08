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
      <div className="flex flex-col items-center space-y-12 text-center">
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
          className="rounded-sm border border-border px-8 py-3 text-sm font-light tracking-wide transition-colors hover:border-foreground"
        >
          Practice Again
        </button>
      </div>
    );
  }

  const step = steps[currentStep];

  return (
    <div className="mx-auto max-w-2xl space-y-12">
      {/* Progress */}
      <div className="flex justify-center gap-2">
        {steps.map((_, index) => (
          <div
            key={index}
            className={`h-1 w-12 rounded-full transition-colors ${
              index === currentStep
                ? "bg-primary"
                : index < currentStep
                  ? "bg-primary/40"
                  : "bg-border"
            }`}
          />
        ))}
      </div>

      {/* Current step */}
      <div className="space-y-8 text-center">
        <div className="space-y-4">
          <p className="text-6xl font-light text-primary">{step.number}</p>
          <h2 className="text-2xl font-light tracking-wide">{step.prompt}</h2>
        </div>

        <textarea
          value={responses[currentStep]}
          onChange={(e) => handleResponseChange(e.target.value)}
          placeholder={step.placeholder}
          className="h-32 w-full resize-none rounded-sm border border-border bg-background px-4 py-3 text-base leading-relaxed outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary"
        />
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <button
          onClick={handlePrevious}
          disabled={currentStep === 0}
          className="rounded-sm border border-border px-6 py-2 text-sm font-light tracking-wide transition-colors hover:border-foreground disabled:opacity-30 disabled:hover:border-border"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="rounded-sm border border-primary px-6 py-2 text-sm font-light tracking-wide transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          {currentStep === steps.length - 1 ? "Complete" : "Next"}
        </button>
      </div>
    </div>
  );
}
