"use client";

import { useState } from "react";
import Link from "next/link";
import { Copy, Check } from "lucide-react";

const journalPrompts = {
    clarity: {
        title: "Finding Clarity",
        description: "When you need to understand what really matters",
        wash: "wash-teal", // Teal - clarity, breath
        prompts: [
            "What would I do today if I knew no one would judge my choices?",
            "What drains my energy, and what restores it?",
            "If I could only focus on three things this month, what would they be?",
            "What am I avoiding that I know I need to address?",
            "What does 'enough' look like for me right now?",
        ],
    },
    stress: {
        title: "Processing Stress",
        description: "When you're feeling overwhelmed or anxious",
        wash: "wash-indigo", // Indigo - depth, stillness
        prompts: [
            "What specifically am I worried about, and what parts can I actually control?",
            "What would I tell a friend who came to me with this same situation?",
            "What's the smallest step I could take right now to feel less stuck?",
            "What physical sensations am I experiencing, and what might they be telling me?",
            "What would it look like to be gentle with myself today?",
        ],
    },
    growth: {
        title: "Personal Growth",
        description: "When you want to evolve and understand yourself better",
        wash: "wash-gold", // Gold - awareness, insight
        prompts: [
            "What pattern keeps showing up in my life, and what might it be teaching me?",
            "What belief about myself no longer serves me?",
            "What would my life look like if I trusted myself completely?",
            "What did I learn about myself this week?",
            "What strength of mine have I been underestimating?",
        ],
    },
    gratitude: {
        title: "Gratitude & Perspective",
        description: "When you need to shift your mindset",
        wash: "wash-rose", // Rose - emotional openness
        prompts: [
            "What small moment today deserves more appreciation?",
            "Who has made my life easier recently, and have I acknowledged them?",
            "What challenge am I grateful for because of what it taught me?",
            "What part of my routine do I take for granted?",
            "What's working well in my life right now?",
        ],
    },
    purpose: {
        title: "Purpose & Direction",
        description: "When you're questioning your path",
        wash: "wash-sage", // Sage - grounding, calm
        prompts: [
            "What activities make me lose track of time?",
            "What would I regret not doing in five years?",
            "What problems do I naturally notice and want to solve?",
            "What do I want to be known for?",
            "If money and status weren't factors, what would I choose to do?",
        ],
    },
    relationships: {
        title: "Connection & Boundaries",
        description: "When you're navigating relationships",
        wash: "wash-orange", // Orange - gentle activation
        prompts: [
            "What do I need more of in my relationships, and what do I need less of?",
            "Where am I giving more than I have capacity for?",
            "What conversation have I been avoiding, and what's it costing me?",
            "Who brings out the best in me, and am I spending enough time with them?",
            "What boundary would improve my wellbeing if I set it?",
        ],
    },
};

type Category = keyof typeof journalPrompts;
type TabType = "exercise" | "how-to-use";

interface CategoryData {
    title: string;
    description: string;
    wash: string;
    prompts: string[];
}

export default function JournalingPage() {
    const [selectedCategory, setSelectedCategory] = useState<Category>("clarity");
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
    const [activeTab, setActiveTab] = useState<TabType>("exercise");

    const copyPrompt = async (prompt: string, index: number) => {
        await navigator.clipboard.writeText(prompt);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    return (
        <main className="min-h-screen">
            {/* Header */}
            <div className="mx-auto max-w-3xl space-y-6 sm:space-y-8 px-4 sm:px-6 py-12 sm:py-16">
                <Link
                    href="/exercises"
                    className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                    ← Back to Exercises
                </Link>

                <div className="space-y-4">
                    <h1 className="text-2xl sm:text-3xl tracking-wide">Journaling Prompts</h1>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        Questions to help you explore what matters. Choose a category that resonates
                        with where you are right now. Pick a prompt that feels right, and write freely.
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
                            Prompts
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
                            How to Use
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
                            {(Object.keys(journalPrompts) as Category[]).map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-4 py-2 rounded-xl text-sm font-light transition-all duration-[220ms] ${selectedCategory === category
                                        ? `${journalPrompts[category].wash} border border-primary/20`
                                        : "bg-muted/30 text-muted-foreground hover:bg-muted/50"
                                        }`}
                                >
                                    {journalPrompts[category].title}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Selected Category Content - Dynamic wash background */}
                    <div className="mx-auto max-w-3xl px-4 sm:px-6 pb-12 sm:pb-16">
                        <div className={`${journalPrompts[selectedCategory].wash} rounded-xl p-6 sm:p-8 space-y-6`}>
                            <div className="space-y-2">
                                <h2 className="text-xl sm:text-2xl tracking-wide">
                                    {journalPrompts[selectedCategory].title}
                                </h2>
                                <p className="text-sm text-muted-foreground">
                                    {journalPrompts[selectedCategory].description}
                                </p>
                            </div>

                            <div className="space-y-10">
                                {journalPrompts[selectedCategory].prompts.map((prompt, index) => (
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
                                ))}
                            </div>
                        </div>
                    </div>
                </>
            )}

            {activeTab === "how-to-use" && (
                <div className="border-t border-border bg-muted/30">
                    <div className="mx-auto max-w-3xl space-y-4 sm:space-y-6 px-4 sm:px-6 py-12 sm:py-16">
                        <h2 className="text-lg sm:text-xl tracking-wide">How to use these prompts</h2>
                        <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                            <p>
                                Pick one prompt that resonates with you. Trust your instinct.
                            </p>
                            <p>
                                You might write for 10-15 minutes without stopping. Let your thoughts flow
                                without judgment or editing.
                            </p>
                            <p>
                                There are no wrong answers. This is for you, not for anyone else.
                                Be honest, be messy, be real.
                            </p>
                            <p>
                                You can copy any prompt by clicking the copy icon, then paste it
                                into your favorite notes app or journal.
                            </p>
                            <p className="text-muted-foreground pt-2">
                                These prompts are here to help you think clearly, not to provide easy answers.
                                The value is in the process, not the outcome.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}
