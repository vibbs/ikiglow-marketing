import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — IkiGlow",
  description: "IkiGlow is a calm companion for personal growth. Learn about our philosophy and approach.",
};

export default function About() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <div className="mx-auto max-w-2xl space-y-8 px-6 py-16">
        <h1 className="text-3xl tracking-wide">About IkiGlow</h1>
      </div>

      {/* Philosophy */}
      <div className="mx-auto max-w-2xl space-y-12 px-6 pb-16">
        <section className="space-y-6">
          <h2 className="text-xl tracking-wide">余白 (Yohaku) — Meaningful Emptiness</h2>
          <div className="space-y-4 text-base leading-relaxed">
            <p>
              IkiGlow is built on the idea that growth does not come from adding more,
              but from creating space for clarity.
            </p>
            <p>
              Yohaku is not absence. It is intentional space that allows meaning to
              emerge.
            </p>
            <p>We exist to:</p>
            <ul className="space-y-2">
              <li>• Reduce noise</li>
              <li>• Slow decisions</li>
              <li>• Create room for reflection</li>
              <li>• Support steady, humane progress</li>
            </ul>
          </div>
        </section>

        <section className="space-y-6 border-t border-border pt-12">
          <h2 className="text-xl tracking-wide">What IkiGlow is</h2>
          <div className="space-y-3 text-base leading-relaxed">
            <p>• A calm companion for personal growth</p>
            <p>• A space for reflection, focus, and intentional action</p>
            <p>• Practical, grounded, and emotionally intelligent</p>
            <p>• Respectful of mental health boundaries</p>
          </div>
        </section>

        <section className="space-y-6 border-t border-border pt-12">
          <h2 className="text-xl tracking-wide">What IkiGlow is not</h2>
          <div className="space-y-3 text-base leading-relaxed">
            <p>• Therapy or medical advice</p>
            <p>• Crisis intervention</p>
            <p>• Hustle culture or productivity-at-all-costs</p>
            <p>• Loud motivation or inspirational hype</p>
          </div>
          <p className="text-sm text-muted-foreground">
            IkiGlow helps you think clearly — it does not tell you who to be.
          </p>
        </section>

        <section className="space-y-6 border-t border-border pt-12">
          <h2 className="text-xl tracking-wide">Our approach</h2>
          <div className="space-y-4 text-base leading-relaxed">
            <p>
              We combine psychological research, nervous system regulation, and
              contemplative practices — but explain everything in plain language.
            </p>
            <p>
              We design tools that give immediate value, with no login walls,
              gamification, or tracking.
            </p>
            <p>
              We write content that respects your intelligence and emotional capacity.
            </p>
          </div>
        </section>

        <section className="space-y-6 border-t border-border pt-12">
          <h2 className="text-xl tracking-wide">Brand boundaries</h2>
          <div className="space-y-4 rounded-sm border border-primary/20 bg-primary/5 p-6 text-sm leading-relaxed">
            <p>Every IkiGlow experience must:</p>
            <ul className="space-y-2">
              <li>• Respect emotional limits</li>
              <li>• Avoid clinical claims</li>
              <li>• Encourage seeking professional help when appropriate</li>
              <li>• Never shame or pressure the user</li>
            </ul>
          </div>
        </section>

        <section className="space-y-6 border-t border-border pt-12">
          <h2 className="text-xl tracking-wide">Start exploring</h2>
          <div className="space-y-3">
            <Link
              href="/tools"
              className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              → Try a micro-tool
            </Link>
            <Link
              href="/blog"
              className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              → Read the blog
            </Link>
            <Link
              href="/guides"
              className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              → Explore the guides
            </Link>
            <Link
              href="/newsletter"
              className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              → Subscribe to weekly reflections
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
