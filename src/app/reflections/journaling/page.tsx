"use client";

import { useState } from "react";
import Link from "next/link";
import { Copy, Check } from "lucide-react";
import { useTranslations } from "next-intl";

type Category = "clarity" | "stress" | "growth" | "gratitude" | "purpose" | "relationships";
type TabType = "exercise" | "how-to-use";

const categoryWashMap: Record<Category, string> = {
    clarity: "wash-teal",
    stress: "wash-indigo",
    growth: "wash-gold",
    gratitude: "wash-rose",
    purpose: "wash-sage",
    relationships: "wash-orange",
};

export default function JournalingPage() {
    const [selectedCategory, setSelectedCategory] = useState<Category>("clarity");
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
    const [activeTab, setActiveTab] = useState<TabType>("exercise");

    const t = useTranslations("reflections.journaling");
    const tCommon = useTranslations("common");

    const copyPrompt = async (prompt: string, index: number) => {
        await navigator.clipboard.writeText(prompt);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    const categories: Category[] = [
        "clarity",
        "stress",
        "growth",
        "gratitude",
        "purpose",
        "relationships",
    ];

    return (
        <main className="min-h-screen">
            {/* Header */}
            <div className="mx-auto max-w-3xl space-y-6 sm:space-y-8 px-4 sm:px-6 py-12 sm:py-16">
                <Link
                    href="/reflections"
                    className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                    ← {tCommon("nav.reflections")}
                </Link>

                <div className="space-y-4">
                    <h1 className="text-2xl sm:text-3xl tracking-wide">{t("title")}</h1>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {t("subtitle")}
                    </p>
                </div>
            </div>

            {/* Tab Navigation */}
            <div className="border-b border-border">
                <div className="mx-auto max-w-3xl px-4 sm:px-6">
                    <div className="flex gap-6">
                        <button
                            onClick={() => setActiveTab("exercise")}
                            className={`pb-3 text-sm transition-colors relative ${activeTab === "exercise"
                                    ? "text-foreground"
                                    : "text-muted-foreground hover:text-foreground"
                                }`}
                        >
                            {t("tabs.prompts")}
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
                    </div>
                </div>
            </div>

            {/* Tab Content */}
            {activeTab === "exercise" && (
                <>
                    {/* Category Pills - Wash-based backgrounds */}
                    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-8">
                        <div className="flex flex-wrap gap-2">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-4 py-2 rounded-xl text-sm font-light transition-all duration-[220ms] ${selectedCategory === category
                                            ? `${categoryWashMap[category]} border border-primary/20`
                                            : "bg-muted/30 text-muted-foreground hover:bg-muted/50"
                                        }`}
                                >
                                    {t(`categories.${category}.title`)}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Selected Category Content - Dynamic wash background */}
                    <div className="mx-auto max-w-3xl px-4 sm:px-6 pb-12 sm:pb-16">
                        <div className={`${categoryWashMap[selectedCategory]} rounded-xl p-6 sm:p-8 space-y-6`}>
                            <div className="space-y-2">
                                <h2 className="text-xl sm:text-2xl tracking-wide">
                                    {t(`categories.${selectedCategory}.title`)}
                                </h2>
                                <p className="text-sm text-muted-foreground">
                                    {t(`categories.${selectedCategory}.description`)}
                                </p>
                            </div>

                            <div className="space-y-10">
                                {(t.raw(`categories.${selectedCategory}.prompts`) as string[]).map(
                                    (prompt, index) => (
                                        <div
                                            key={index}
                                            className="group bg-background/50 rounded-xl p-5 border border-border/50 hover:border-primary/30 transition-all duration-[220ms]"
                                        >
                                            <div className="flex items-start justify-between gap-4">
                                                <p className="text-base sm:text-lg leading-relaxed font-handwritten">
                                                    {prompt}
                                                </p>
                                                <button
                                                    onClick={() => copyPrompt(prompt, index)}
                                                    className="flex-shrink-0 p-2 rounded-xl hover:bg-muted/50 transition-all duration-[220ms] opacity-100 md:opacity-0 md:group-hover:opacity-100"
                                                    title="Copy prompt"
                                                >
                                                    {copiedIndex === index ? (
                                                        <Check className="w-4 h-4 text-primary" />
                                                    ) : (
                                                        <Copy className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                                                    )}
                                                </button>
                                            </div>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </>
            )}

            {activeTab === "how-to-use" && (
                <div className="border-t border-border bg-muted/30">
                    <div className="mx-auto max-w-3xl space-y-4 sm:space-y-6 px-4 sm:px-6 py-12 sm:py-16">
                        <h2 className="text-lg sm:text-xl tracking-wide">{t("howToUse.title")}</h2>
                        <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                            <p>{t("howToUse.line1")}</p>
                            <p>{t("howToUse.line2")}</p>
                            <p>{t("howToUse.line3")}</p>
                            <p>{t("howToUse.line4")}</p>
                            <p className="text-muted-foreground pt-2">{t("howToUse.line5")}</p>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}