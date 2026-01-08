import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Understanding Anxiety — IkiGlow",
  description: "A comprehensive guide to understanding what anxiety feels like, what it is, and practical ways to work with it.",
  keywords: ["anxiety", "mental health", "stress", "coping strategies", "self-help"],
};

export default function AnxietyGuide() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <article className="mx-auto max-w-2xl px-6 py-16">
        <div className="space-y-12">
          <div className="space-y-6">
            <div className="text-xs text-muted-foreground">Guide · 15 min read</div>
            <h1 className="text-3xl tracking-wide md:text-4xl">
              Understanding Anxiety
            </h1>
            <p className="text-base text-muted-foreground">
              A comprehensive guide to understanding what anxiety feels like, what it is,
              and practical ways to work with it
            </p>
          </div>

          {/* 1. What this experience feels like */}
          <section className="space-y-6 border-t border-border pt-12">
            <h2 className="text-2xl tracking-wide">What this experience feels like</h2>
            <div className="space-y-4">
              <p className="text-base leading-relaxed">
                Anxiety can feel like your body is bracing for danger, even when you&apos;re
                sitting still.
              </p>
              <p className="text-base leading-relaxed">
                Your chest might feel tight. Your thoughts might race. Your hands might
                tremble. You might notice your heart beating faster than usual, or a knot
                forming in your stomach.
              </p>
              <p className="text-base leading-relaxed">
                Sometimes anxiety arrives with a specific worry. Other times, it&apos;s
                just a background hum of unease — a sense that something is wrong, even
                when you can&apos;t name what it is.
              </p>
              <p className="text-base leading-relaxed">
                This is common. You&apos;re not broken. Your body is responding to
                perceived threat, even if that threat isn&apos;t immediate or visible.
              </p>
            </div>
          </section>

          {/* 2. What it is (non-clinical) */}
          <section className="space-y-6 border-t border-border pt-12">
            <h2 className="text-2xl tracking-wide">What it is</h2>
            <div className="space-y-4">
              <p className="text-base leading-relaxed">
                Anxiety is your nervous system&apos;s alarm system activating — often in
                response to uncertainty, past experiences, or perceived loss of control.
              </p>
              <p className="text-base leading-relaxed">
                At its core, anxiety is fear of something that hasn&apos;t happened yet.
                Your brain is trying to protect you by scanning for threats, running
                through worst-case scenarios, and preparing your body to react.
              </p>
              <p className="text-base leading-relaxed">
                This response evolved to help us survive immediate danger. But in modern
                life, it often activates in response to abstract concerns — deadlines,
                relationships, financial stress, health worries.
              </p>
            </div>
          </section>

          {/* 3. Common misconceptions */}
          <section className="space-y-6 border-t border-border pt-12">
            <h2 className="text-2xl tracking-wide">Common misconceptions</h2>
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-lg tracking-wide">
                  &quot;Anxiety means I&apos;m weak&quot;
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Anxiety is not a character flaw. It&apos;s a physiological response that
                  happens to sensitive, thoughtful people just as much as anyone else.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg tracking-wide">
                  &quot;I should be able to control this with my mind&quot;
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground">
                  You can&apos;t think your way out of a nervous system response. Working
                  with anxiety requires body-based practices, not just mental effort.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg tracking-wide">
                  &quot;If I just avoid what makes me anxious, it&apos;ll go away&quot;
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Avoidance often reinforces anxiety. Gradual, gentle exposure combined with
                  grounding practices tends to be more effective.
                </p>
              </div>
            </div>
          </section>

          {/* 4. What helps (practical) */}
          <section className="space-y-6 border-t border-border pt-12">
            <h2 className="text-2xl tracking-wide">What helps</h2>
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-lg tracking-wide">Regulate your nervous system</h3>
                <p className="text-base leading-relaxed">
                  Slow breathing, grounding techniques, and body-based practices signal
                  safety to your nervous system.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg tracking-wide">Name what you&apos;re feeling</h3>
                <p className="text-base leading-relaxed">
                  Simply labeling the emotion (&quot;I&apos;m feeling anxious right now&quot;)
                  can reduce its intensity. This is called affect labeling.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg tracking-wide">Move your body</h3>
                <p className="text-base leading-relaxed">
                  Physical movement helps metabolize stress hormones. A short walk, gentle
                  stretching, or shaking out tension can help.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg tracking-wide">Reduce decision load</h3>
                <p className="text-base leading-relaxed">
                  Decision fatigue amplifies anxiety. Simplify your day by reducing choices
                  where possible.
                </p>
              </div>
            </div>
          </section>

          {/* 5. Tools & exercises */}
          <section className="space-y-6 border-t border-border pt-12">
            <h2 className="text-2xl tracking-wide">Tools & exercises</h2>
            <div className="space-y-4">
              <Link
                href="/exercises/breathing"
                className="block space-y-2 rounded-sm border border-border p-6 transition-colors hover:border-primary/40"
              >
                <h3 className="text-base tracking-wide">4-4-6-2 Breathing</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  A simple pattern to activate your parasympathetic nervous system
                </p>
              </Link>
              <Link
                href="/exercises/grounding"
                className="block space-y-2 rounded-sm border border-border p-6 transition-colors hover:border-primary/40"
              >
                <h3 className="text-base tracking-wide">5-4-3-2-1 Grounding</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Bring your awareness back to the present moment through your senses
                </p>
              </Link>
            </div>
          </section>

          {/* 6. Reflection prompts */}
          <section className="space-y-6 border-t border-border pt-12">
            <h2 className="text-2xl tracking-wide">Reflection prompts</h2>
            <div className="space-y-4 rounded-sm border border-border bg-muted/30 p-6">
              <ul className="space-y-3 text-base leading-relaxed">
                <li>• When does my anxiety tend to appear?</li>
                <li>• What does it feel like in my body?</li>
                <li>• What usually helps me feel calmer?</li>
                <li>• What am I trying to control that I can&apos;t?</li>
                <li>• What small step could I take today to feel safer?</li>
              </ul>
            </div>
          </section>

          {/* 7. When to seek professional help */}
          <section className="space-y-6 border-t border-border pt-12">
            <h2 className="text-2xl tracking-wide">When to seek professional help</h2>
            <div className="space-y-4 rounded-sm border border-primary/20 bg-primary/5 p-6">
              <p className="text-sm leading-relaxed">
                If your anxiety is interfering with daily life — work, relationships, sleep,
                or basic functioning — please consider reaching out to a mental health
                professional.
              </p>
              <p className="text-sm leading-relaxed">
                If you&apos;re experiencing panic attacks, persistent physical symptoms,
                or thoughts of self-harm, seek support immediately.
              </p>
              <p className="text-sm leading-relaxed">
                Anxiety disorders are highly treatable. Therapy, medication, or a combination
                of both can be profoundly helpful.
              </p>
            </div>
          </section>

          {/* Related content */}
          <section className="space-y-6 border-t border-border pt-12">
            <h3 className="text-lg tracking-wide">Related</h3>
            <div className="space-y-3">
              <Link
                href="/blog/why-clarity-beats-motivation"
                className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                → Why clarity beats motivation
              </Link>
              <Link
                href="/guides/decision-fatigue"
                className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                → Understanding decision fatigue
              </Link>
            </div>
          </section>
        </div>
      </article>

      {/* Navigation */}
      <div className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-2xl px-6 py-8">
          <Link
            href="/guides"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            ← Back to all guides
          </Link>
        </div>
      </div>
    </main>
  );
}
