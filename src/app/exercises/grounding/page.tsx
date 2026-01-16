"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { GroundingExercise } from "@/components/exercises/GroundingExercise";

type TabType = "exercise" | "how-to-use" | "why-it-helps";

export default function GroundingPage() {
  const [activeTab, setActiveTab] = useState<TabType>("exercise");
  const t = useTranslations("exercises.grounding");
  const tCommon = useTranslations("common");

  return (
    <main className="min-h-screen">
      {/* Header */}
      <div className="mx-auto max-w-2xl space-y-6 sm:space-y-8 px-4 sm:px-6 py-12 sm:py-16">
        <Link
          href="/exercises"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          ← {tCommon("nav.exercises")}
        </Link>

        <div className="space-y-4">
          <h1 className="text-2xl sm:text-3xl tracking-wide">{t("title")}</h1>
          <p className="text-sm sm:text-base leading-relaxed">
            {t("subtitle")}
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-border">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <div className="flex gap-6">
            <button
              onClick={() => setActiveTab("exercise")}
              className={`pb-3 text-sm transition-colors relative ${activeTab === "exercise"
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
                }`}
            >
              {t("tabs.exercise")}
              {activeTab === "exercise" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
              )}
            </button>
            <button
              onClick={() => setActiveTab("how-to-use")}
              className={`pb-3 text-sm transition-colors relative ${activeTab === "how-to-use"
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
                }`}
            >
              {t("tabs.howToUse")}
              {activeTab === "how-to-use" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
              )}
            </button>
            <button
              onClick={() => setActiveTab("why-it-helps")}
              className={`pb-3 text-sm transition-colors relative ${activeTab === "why-it-helps"
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
                }`}
            >
              {t("tabs.whyItHelps")}
              {activeTab === "why-it-helps" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === "exercise" && (
        <div className="border-t border-border bg-muted/30">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 py-12 sm:py-16">
            <GroundingExercise />
          </div>
        </div>
      )}

      {activeTab === "how-to-use" && (
        <div className="mx-auto max-w-2xl space-y-4 sm:space-y-6 px-4 sm:px-6 py-12 sm:py-16">
          <h2 className="text-lg sm:text-xl tracking-wide">{t("howToUse.title")}</h2>
          <div className="space-y-2 sm:space-y-3 text-sm sm:text-base leading-relaxed">
            <p>{t("howToUse.line1")}</p>
            <p>{t("howToUse.line2")}</p>
            <p>{t("howToUse.line3")}</p>
          </div>
        </div>
      )}

      {activeTab === "why-it-helps" && (
        <div className="border-t border-border bg-muted/30">
          <div className="mx-auto max-w-2xl space-y-4 sm:space-y-6 px-4 sm:px-6 py-12 sm:py-16">
            <h2 className="text-lg sm:text-xl tracking-wide">{t("whyItHelps.title")}</h2>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base leading-relaxed">
              <p>{t("whyItHelps.line1")}</p>
              <p>{t("whyItHelps.line2")}</p>
              <p>{t("whyItHelps.line3")}</p>
            </div>
          </div>
        </div>
      )}

      {/* Next Steps - Always Visible */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-2xl space-y-4 sm:space-y-6 px-4 sm:px-6 py-12 sm:py-16">
          <h3 className="text-base sm:text-lg tracking-wide">{t("nextSteps.title")}</h3>
          <div className="space-y-2 sm:space-y-3">
            <Link
              href="/exercises/breathing"
              className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {t("nextSteps.breathing")}
            </Link>
            <Link
              href="/guides/anxiety"
              className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {t("nextSteps.anxietyGuide")}
            </Link>
            <Link
              href="/exercises"
              className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {t("nextSteps.allExercises")}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
