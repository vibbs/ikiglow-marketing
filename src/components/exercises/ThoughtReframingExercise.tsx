"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

type ThoughtReframingExerciseProps = {
  i18nKey: string;
};

export function ThoughtReframingExercise({
  i18nKey,
}: ThoughtReframingExerciseProps) {
  const t = useTranslations(i18nKey);
  const [unhelpfulThought, setUnhelpfulThought] = useState("");
  const [reframedThought, setReframedThought] = useState("");
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    if (unhelpfulThought.trim() && reframedThought.trim()) {
      setIsSaved(true);
    }
  };

  const handleClear = () => {
    setUnhelpfulThought("");
    setReframedThought("");
    setIsSaved(false);
  };

  if (isSaved) {
    return (
      <div className="flex flex-col items-center space-y-12 sm:space-y-16 text-center animate-ink-flow px-4">
        <div className="wash-gold rounded-xl py-12 px-6 sm:px-8 space-y-4 sm:space-y-6 max-w-2xl w-full">
          <p className="text-xl sm:text-2xl font-light tracking-wide">
            {t("completion.title")}
          </p>
          <p className="text-base sm:text-lg text-muted-foreground">
            {t("completion.subtitle")}
          </p>
        </div>

        <div className="space-y-6 max-w-2xl w-full text-left">
          <p className="text-sm text-muted-foreground text-center">
            {t("completion.saved")}
          </p>
          <div className="space-y-4 rounded-xl border border-border p-6 bg-background">
            <div>
              <p className="text-xs text-muted-foreground mb-2">
                {t("labels.unhelpfulThought")}
              </p>
              <p className="text-sm leading-relaxed">{unhelpfulThought}</p>
            </div>
            <div className="border-t border-border pt-4">
              <p className="text-xs text-muted-foreground mb-2">
                {t("labels.reframe")}
              </p>
              <p className="text-sm leading-relaxed text-primary">
                {reframedThought}
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={handleClear}
          className="rounded-xl border border-border bg-background px-6 sm:px-8 py-2.5 sm:py-3 text-sm font-light tracking-wide transition-all duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:border-primary/40 hover:bg-accent active:translate-y-[1px]"
        >
          {t("completion.practiceAgain")}
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl space-y-8 sm:space-y-12 px-4">
      {/* Unhelpful Thought Input */}
      <div className="space-y-4">
        <label className="block text-sm font-light tracking-wide">
          {t("labels.unhelpfulThought")}
        </label>
        <textarea
          value={unhelpfulThought}
          onChange={(e) => setUnhelpfulThought(e.target.value)}
          placeholder={t("labels.unhelpfulPlaceholder")}
          className="h-32 w-full resize-none rounded-xl border border-border bg-background px-5 py-4 text-sm leading-relaxed outline-none transition-all duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] placeholder:text-muted-foreground/50 focus:border-primary focus:ring-4 focus:ring-primary/12"
        />
      </div>

      {/* Guiding Question */}
      <div className="wash-gold rounded-xl py-6 px-6 text-center">
        <p className="text-sm italic text-muted-foreground">
          {t("labels.guidingQuestion")}
        </p>
      </div>

      {/* Reframed Thought Input */}
      <div className="space-y-4">
        <label className="block text-sm font-light tracking-wide">
          {t("labels.reframe")}
        </label>
        <textarea
          value={reframedThought}
          onChange={(e) => setReframedThought(e.target.value)}
          placeholder={t("labels.reframePlaceholder")}
          className="h-32 w-full resize-none rounded-xl border border-border bg-background px-5 py-4 text-sm leading-relaxed outline-none transition-all duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] placeholder:text-muted-foreground/50 focus:border-primary focus:ring-4 focus:ring-primary/12"
        />
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-3 sm:gap-4">
        <button
          onClick={handleClear}
          disabled={!unhelpfulThought && !reframedThought}
          className="rounded-xl border border-border bg-background px-6 sm:px-8 py-2.5 sm:py-3 text-sm font-light tracking-wide transition-all duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:border-primary/40 hover:bg-accent disabled:opacity-40 disabled:cursor-not-allowed active:translate-y-[1px]"
        >
          {t("controls.clear")}
        </button>
        <button
          onClick={handleSave}
          disabled={!unhelpfulThought.trim() || !reframedThought.trim()}
          className="rounded-xl bg-primary px-6 sm:px-8 py-2.5 sm:py-3 text-sm font-light tracking-wide text-primary-foreground transition-all duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed active:translate-y-[1px]"
        >
          {t("controls.save")}
        </button>
      </div>
    </div>
  );
}
