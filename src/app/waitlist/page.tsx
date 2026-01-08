import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Early Access — IkiGlow",
  description: "Join the waitlist for early access to IkiGlow's full platform. No timeline pressure, just a gentle heads-up when we're ready.",
};

export default function Waitlist() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <div className="mx-auto max-w-2xl space-y-8 px-6 py-16">
        <h1 className="text-3xl tracking-wide">Early access</h1>
        <p className="text-base text-muted-foreground">
          Get early access to new tools, guides, and features as we build them.
        </p>
      </div>

      {/* What's coming */}
      <div className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-2xl space-y-8 px-6 py-16">
          <h2 className="text-xl tracking-wide">What we&apos;re building</h2>
          <div className="space-y-4 text-base leading-relaxed">
            <p>
              We&apos;re slowly expanding IkiGlow with more resources for self-awareness,
              focus, and intentional living.
            </p>
            <p>Future additions include:</p>
            <ul className="space-y-3">
              <li>• Personalized journaling prompts</li>
              <li>• Interactive goal-setting frameworks</li>
              <li>• More micro-tools for calm and focus</li>
              <li>• Deeper guides on mental patterns and growth</li>
            </ul>
            <p className="text-sm text-muted-foreground">
              No timelines. No pressure. Just quiet, steady progress.
            </p>
          </div>
        </div>
      </div>

      {/* Signup Form */}
      <div className="mx-auto max-w-2xl px-6 py-16">
        <div className="space-y-8 rounded-sm border border-border p-8">
          <div className="space-y-6">
            <div className="space-y-4">
              <label htmlFor="name" className="block text-sm tracking-wide">
                First name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none"
              />
            </div>
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
          </div>
          <button
            type="submit"
            className="w-full rounded-sm bg-primary px-6 py-3 text-sm tracking-wide text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Join waitlist
          </button>
          <p className="text-xs text-muted-foreground">
            We&apos;ll email you when something new is ready. No spam. You can opt out
            anytime.
          </p>
        </div>
      </div>

      {/* Expectations */}
      <div className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-2xl space-y-6 px-6 py-16">
          <h2 className="text-xl tracking-wide">What to expect</h2>
          <div className="space-y-4 text-base leading-relaxed">
            <p>
              You&apos;ll receive an email when we release something meaningful — not
              every small update.
            </p>
            <p>
              You&apos;ll get early access to test new features and share feedback if you
              want to.
            </p>
            <p>
              You won&apos;t receive marketing emails, growth hacks, or urgency-driven
              messages. Just calm updates.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
