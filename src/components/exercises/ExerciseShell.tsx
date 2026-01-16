"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

type TabType = "exercise" | "how" | "why" | "variations";

type ExerciseShellProps = {
  i18nKey: string;
  headerClassName?: string;
  panelClassName?: string;
  backHref?: string;
  showVariations?: boolean;
  nextExercise?: {
    href: string;
    label: string;
  };
  children: ReactNode;
};

export function ExerciseShell({
  i18nKey,
  headerClassName,
  panelClassName,
  backHref = "/exercises",
  showVariations = false,
  nextExercise,
  children,
}: ExerciseShellProps) {
  const [activeTab, setActiveTab] = useState<TabType>("exercise");
  const t = useTranslations(i18nKey);
  const tCommon = useTranslations("common");
  const tShell = useTranslations("exercises.shell");

  const howSteps = t.raw("how.steps");
  const whyPoints = t.raw("why.points");
  const variations = showVariations ? t.raw("variations.options") : [];

  const renderSteps = (content: unknown) =>
    Array.isArray(content)
      ? content.map((item) => (
        <p key={item} className="text-sm sm:text-base leading-relaxed">
          {item}
        </p>
      ))
      : null;

  return (
    <main className="min-h-screen">
      <div className={headerClassName}>
        <div className="mx-auto max-w-2xl space-y-6 sm:space-y-8 px-4 sm:px-6 py-12 sm:py-16 animate-ink-flow-stagger">
          <Link
            href={backHref}
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← {tCommon("nav.exercises")}
          </Link>

          <div className="space-y-4">
            <h1 className="text-2xl sm:text-3xl tracking-wide">
              {t("title")}
            </h1>
            <p className="text-sm sm:text-base leading-relaxed">
              {t("subtitle")}
            </p>
          </div>
        </div>
      </div>

      <div className={headerClassName + " border-b border-border"}>
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <div className="flex gap-6 flex-wrap">
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
              onClick={() => setActiveTab("how")}
              className={`pb-3 text-sm transition-colors relative ${activeTab === "how"
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
                }`}
            >
              {t("tabs.how")}
              {activeTab === "how" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
              )}
            </button>
            <button
              onClick={() => setActiveTab("why")}
              className={`pb-3 text-sm transition-colors relative ${activeTab === "why"
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
                }`}
            >
              {t("tabs.why")}
              {activeTab === "why" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
              )}
            </button>
            {showVariations && (
              <button
                onClick={() => setActiveTab("variations")}
                className={`pb-3 text-sm transition-colors relative ${activeTab === "variations"
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {t("tabs.variations")}
                {activeTab === "variations" && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                )}
              </button>
            )}
          </div>
        </div>
      </div>

      {activeTab === "exercise" && (
        <div className={panelClassName ?? "panel-sage"}>
          <div className="mx-auto max-w-2xl px-4 sm:px-6 py-12 sm:py-16">
            {children}
          </div>
        </div>
      )}

      {activeTab === "how" && (
        <div className="mx-auto max-w-2xl space-y-4 sm:space-y-6 px-4 sm:px-6 py-12 sm:py-16">
          <h2 className="text-lg sm:text-xl tracking-wide">
            {t("how.title")}
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {renderSteps(howSteps)}
          </div>
        </div>
      )}

      {activeTab === "why" && (
        <div className="mx-auto max-w-2xl space-y-4 sm:space-y-6 px-4 sm:px-6 py-12 sm:py-16">
          <h2 className="text-lg sm:text-xl tracking-wide">
            {t("why.title")}
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {renderSteps(whyPoints)}
          </div>
        </div>
      )}

      {showVariations && activeTab === "variations" && (
        <div className="mx-auto max-w-2xl space-y-4 sm:space-y-6 px-4 sm:px-6 py-12 sm:py-16">
          <h2 className="text-lg sm:text-xl tracking-wide">
            {t("variations.title")}
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {renderSteps(variations)}
          </div>
        </div>
      )}

      {nextExercise && (
        <div className="border-t border-border">
          <div className="mx-auto max-w-2xl space-y-3 sm:space-y-4 px-4 sm:px-6 py-12 sm:py-16">
            <h3 className="text-base sm:text-lg tracking-wide">
              {tShell("tryNext")}
            </h3>
            <Link
              href={nextExercise.href}
              className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {nextExercise.label}
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}
