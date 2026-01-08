import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Newsletter — IkiGlow",
  description: "Weekly reflections on purpose, clarity, and intentional living. One insight, one framework, one reflection.",
};

export default function Newsletter() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <div className="mx-auto max-w-2xl space-y-8 px-6 py-16">
        <h1 className="text-3xl tracking-wide">Weekly reflections</h1>
        <p className="text-base text-muted-foreground">
          One insight, one framework, one reflection. Delivered weekly.
        </p>
      </div>

      {/* What to expect */}
      <div className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-2xl space-y-8 px-6 py-16">
          <h2 className="text-xl tracking-wide">What to expect</h2>
          <div className="space-y-4 text-base leading-relaxed">
            <p>Every Sunday morning, you&apos;ll receive a calm email with:</p>
            <ul className="space-y-3">
              <li>• One psychological insight, explained plainly</li>
              <li>• One practical framework you can use immediately</li>
              <li>• One reflection prompt for the week ahead</li>
            </ul>
            <p className="text-sm text-muted-foreground">
              No sales pitches. No urgency. No overwhelm. Just clarity.
            </p>
          </div>
        </div>
      </div>

      {/* Signup Form */}
      <div className="mx-auto max-w-2xl px-6 py-16">
        <div className="space-y-8 rounded-sm border border-border p-8">
          <div className="space-y-4">
            <label htmlFor="email" className="block text-sm tracking-wide">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your@email.com"
              className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-sm bg-primary px-6 py-3 text-sm tracking-wide text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Subscribe
          </button>
          <p className="text-xs text-muted-foreground">
            Unsubscribe anytime. No spam. Your email stays private.
          </p>
        </div>
      </div>

      {/* Sample content */}
      <div className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-2xl space-y-8 px-6 py-16">
          <h2 className="text-xl tracking-wide">Recent editions</h2>
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="text-xs text-muted-foreground">January 5, 2026</div>
              <h3 className="text-base tracking-wide">
                Why clarity beats motivation
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                You don&apos;t need more willpower. You need fewer decisions...
              </p>
            </div>
            <div className="space-y-2 border-t border-border pt-6">
              <div className="text-xs text-muted-foreground">December 29, 2025</div>
              <h3 className="text-base tracking-wide">
                The problem with productivity
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Being busy is not the same as moving forward...
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
