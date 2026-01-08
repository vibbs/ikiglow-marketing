import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-24 md:px-12 lg:px-24">
      {/* Hero Section - Muji-inspired minimalism */}
      <section className="mx-auto max-w-4xl space-y-16">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-light tracking-wide md:text-5xl lg:text-6xl">
              IkiGlow
            </h1>
            <p className="text-xl font-light text-muted-foreground md:text-2xl">
              Illuminate Your Purpose, Radiate Your Potential
            </p>
          </div>
        </div>

        {/* Brand Story - 余白 (Yohaku) spacing */}
        <div className="space-y-12 pt-16">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-foreground/80">
              Born from the fusion of two powerful concepts: <span className="text-primary">Ikigai</span>,
              the Japanese idea of finding one's purpose or reason for being, and <span className="text-primary">Glow</span>,
              representing the radiance that comes from living a fulfilled life.
            </p>
            <p className="text-lg leading-relaxed text-foreground/80">
              Our app guides you on a journey of self-discovery, helping you uncover your unique
              Ikigai—the intersection of what you love, what you're good at, what the world needs,
              and what you can be rewarded for.
            </p>
            <p className="text-lg leading-relaxed text-foreground/80">
              As you progress on this path, you begin to glow from within, illuminating not just
              your own life but also positively impacting those around you.
            </p>
          </div>
        </div>

        {/* Navigation - Minimal */}
        <nav className="space-y-8 pt-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/exercises/breathing"
              className="group space-y-3 rounded-sm border border-border p-8 transition-colors hover:border-primary/40"
            >
              <h3 className="text-lg font-light tracking-wide">Breathing</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Simple exercises to restore attention and find calm
              </p>
            </Link>

            <Link
              href="/exercises/grounding"
              className="group space-y-3 rounded-sm border border-border p-8 transition-colors hover:border-primary/40"
            >
              <h3 className="text-lg font-light tracking-wide">Grounding</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Connect with the present moment through gentle awareness
              </p>
            </Link>

            <Link
              href="/blog"
              className="group space-y-3 rounded-sm border border-border p-8 transition-colors hover:border-primary/40"
            >
              <h3 className="text-lg font-light tracking-wide">Reflections</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Thoughts on purpose, attention, and living intentionally
              </p>
            </Link>

            <Link
              href="/videos"
              className="group space-y-3 rounded-sm border border-border p-8 transition-colors hover:border-primary/40"
            >
              <h3 className="text-lg font-light tracking-wide">Videos</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Brief moments of inspiration and guidance
              </p>
            </Link>
          </div>
        </nav>
      </section>
    </main>
  );
}
