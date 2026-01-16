"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

type DailyCheckInExerciseProps = {
  i18nKey: string;
};

export function DailyCheckInExercise({ i18nKey }: DailyCheckInExerciseProps) {
  const t = useTranslations(i18nKey);
  const [mood, setMood] = useState(2); // 0-4 scale (Struggling to Great)
  const [intention, setIntention] = useState("");
  const [action, setAction] = useState("");
  const [isSaved, setIsSaved] = useState(false);

  const moodLabels = [
    t("prompts.moodScale.0"),
    t("prompts.moodScale.1"),
    t("prompts.moodScale.2"),
    t("prompts.moodScale.3"),
    t("prompts.moodScale.4"),
  ];

  const intentionOptions = [
    "Presence",
    "Calm",
    "Clarity",
    "Growth",
    "Gratitude",
    "Rest",
    "Connection",
  ];

  const handleSave = () => {
    if (intention && action.trim()) {
      setIsSaved(true);
    }
  };

  const handleReset = () => {
    setMood(2);
    setIntention("");
    setAction("");
    setIsSaved(false);
  };

  if (isSaved) {
    return (
      <div className="flex flex-col items-center space-y-12 sm:space-y-16 text-center animate-ink-flow px-4">
        <div className="wash-teal rounded-xl py-12 px-6 sm:px-8 space-y-4 sm:space-y-6 max-w-2xl w-full">
          <p className="text-xl sm:text-2xl font-light tracking-wide">
            {t("completion.title")}
          </p>
          <p className="text-base sm:text-lg text-muted-foreground">
            {t("completion.subtitle")}
          </p>
        </div>

        <div className="space-y-4 max-w-2xl w-full">
          <p className="text-sm text-muted-foreground">
            {t("completion.saved")}
          </p>
          <div className="rounded-xl border border-border p-6 bg-background text-left space-y-3">
            <div>
              <span className="text-xs text-muted-foreground">
                {t("prompts.intention")}
              </span>
              <p className="text-lg font-light text-primary mt-1">
                {intention}
              </p>
            </div>
            <div className="pt-3 border-t border-border">
              <span className="text-xs text-muted-foreground">
                {t("prompts.action")}
              </span>
              <p className="text-sm leading-relaxed mt-1">{action}</p>
            </div>
          </div>
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

  return (
    <div className="mx-auto max-w-2xl space-y-8 sm:space-y-12 px-4">
      {/* Mood Check */}
      <div className="space-y-6 wash-teal rounded-xl py-8 px-6">
        <label className="block text-sm font-light tracking-wide text-center">
          {t("prompts.mood")}
        </label>

        <div className="space-y-4">
          <input
            type="range"
            min="0"
            max="4"
            value={mood}
            onChange={(e) => setMood(parseInt(e.target.value))}
            className="w-full h-2 rounded-full appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #6F846F 0%, #6F846F ${
                (mood / 4) * 100
              }%, #E6E4DD ${(mood / 4) * 100}%, #E6E4DD 100%)`,
            }}
          />
          <p className="text-center text-base font-light">{moodLabels[mood]}</p>
        </div>
      </div>

      {/* Intention Selection */}
      <div className="space-y-4">
        <label className="block text-sm font-light tracking-wide">
          {t("prompts.intention")}
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {intentionOptions.map((option) => {
            const translatedOption = t(`prompts.intentionOptions.${intentionOptions.indexOf(option)}`);
            return (
              <button
                key={option}
                onClick={() => setIntention(translatedOption)}
                className={`rounded-xl border px-4 py-2.5 text-sm font-light tracking-wide transition-all duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:border-primary/40 active:translate-y-[1px] ${
                  intention === translatedOption
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background hover:bg-accent"
                }`}
              >
                {translatedOption}
              </button>
            );
          })}
        </div>
      </div>

      {/* Action Input */}
      {intention && (
        <div className="space-y-4 animate-ink-flow">
          <label className="block text-sm font-light tracking-wide">
            {t("prompts.action")}
          </label>
          <textarea
            value={action}
            onChange={(e) => setAction(e.target.value)}
            placeholder={t("prompts.actionPlaceholder")}
            className="h-24 w-full resize-none rounded-xl border border-border bg-background px-5 py-4 text-sm leading-relaxed outline-none transition-all duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] placeholder:text-muted-foreground/50 focus:border-primary focus:ring-4 focus:ring-primary/12"
          />
        </div>
      )}

      {/* Controls */}
      <div className="flex justify-center gap-3 sm:gap-4">
        <button
          onClick={handleReset}
          className="rounded-xl border border-border bg-background px-6 sm:px-8 py-2.5 sm:py-3 text-sm font-light tracking-wide transition-all duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:border-primary/40 hover:bg-accent active:translate-y-[1px]"
        >
          {t("controls.skip")}
        </button>
        <button
          onClick={handleSave}
          disabled={!intention || !action.trim()}
          className="rounded-xl bg-primary px-6 sm:px-8 py-2.5 sm:py-3 text-sm font-light tracking-wide text-primary-foreground transition-all duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed active:translate-y-[1px]"
        >
          {t("controls.save")}
        </button>
      </div>
    </div>
  );
}
