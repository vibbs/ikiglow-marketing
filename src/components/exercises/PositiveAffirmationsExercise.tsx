"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

type AffirmationCategory = "confidence" | "calm" | "growth" | "gratitude";

type PositiveAffirmationsExerciseProps = {
  i18nKey: string;
};

export function PositiveAffirmationsExercise({
  i18nKey,
}: PositiveAffirmationsExerciseProps) {
  const t = useTranslations(i18nKey);
  const [selectedCategory, setSelectedCategory] =
    useState<AffirmationCategory>("confidence");
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories: AffirmationCategory[] = [
    "confidence",
    "calm",
    "growth",
    "gratitude",
  ];

  // Get affirmations array for current category
  const affirmationsCount = 5; // Each category has 5 affirmations
  const currentAffirmation = t(
    `affirmations.${selectedCategory}.${currentIndex}`
  );

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % affirmationsCount);
  };

  const handleShuffle = () => {
    const randomIndex = Math.floor(Math.random() * affirmationsCount);
    setCurrentIndex(randomIndex);
  };

  const handleCategoryChange = (category: AffirmationCategory) => {
    setSelectedCategory(category);
    setCurrentIndex(0);
  };

  const getCategoryColor = (category: AffirmationCategory) => {
    switch (category) {
      case "confidence":
        return "wash-rose";
      case "calm":
        return "wash-sage";
      case "growth":
        return "wash-gold";
      case "gratitude":
        return "wash-teal";
      default:
        return "wash-sage";
    }
  };

  return (
    <div className="mx-auto max-w-3xl space-y-8 sm:space-y-12 px-4">
      {/* Category Selection */}
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground text-center">
          {t("controls.selectCategory")}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`rounded-xl border px-4 py-2.5 text-sm font-light tracking-wide transition-all duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:border-primary/40 active:translate-y-[1px] ${
                selectedCategory === category
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background hover:bg-accent"
              }`}
            >
              {t(`categories.${category}`)}
            </button>
          ))}
        </div>
      </div>

      {/* Affirmation Card */}
      <div
        className={`${getCategoryColor(
          selectedCategory
        )} rounded-xl py-16 sm:py-20 px-6 sm:px-8 space-y-8 text-center animate-ink-flow`}
      >
        <p className="text-2xl sm:text-3xl md:text-4xl font-light tracking-wide leading-relaxed">
          {currentAffirmation}
        </p>

        <p className="text-sm text-muted-foreground italic">
          {t("instruction")}
        </p>
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-3 sm:gap-4">
        <button
          onClick={handleShuffle}
          className="rounded-xl border border-border bg-background px-6 sm:px-8 py-2.5 sm:py-3 text-sm font-light tracking-wide transition-all duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:border-primary/40 hover:bg-accent active:translate-y-[1px]"
        >
          {t("controls.shuffle")}
        </button>
        <button
          onClick={handleNext}
          className="rounded-xl bg-primary px-6 sm:px-8 py-2.5 sm:py-3 text-sm font-light tracking-wide text-primary-foreground transition-all duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:opacity-90 active:translate-y-[1px]"
        >
          {t("controls.next")}
        </button>
      </div>

      {/* Progress Indicator */}
      <div className="flex justify-center gap-1.5">
        {Array.from({ length: affirmationsCount }).map((_, index) => (
          <div
            key={index}
            className="h-1.5 w-1.5 rounded-full transition-all duration-[220ms]"
            style={{
              backgroundColor:
                index === currentIndex
                  ? "#6F846F"
                  : "rgba(111, 132, 111, 0.20)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
