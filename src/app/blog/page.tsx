import Link from "next/link";

export default function Blog() {
  return (
    <main className="min-h-screen px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-3xl space-y-16">
        {/* Header */}
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            ← Home
          </Link>
          <h1 className="text-3xl font-light tracking-wide md:text-4xl">
            Reflections
          </h1>
          <p className="text-lg text-muted-foreground">
            Thoughts on purpose, attention, and living intentionally
          </p>
        </div>

        {/* Blog posts placeholder - structure for future content */}
        <div className="space-y-12 pt-8">
          <p className="text-base leading-relaxed text-muted-foreground">
            More reflections coming soon. This space will hold thoughts and
            insights on discovering your Ikigai and cultivating inner radiance.
          </p>
        </div>
      </div>
    </main>
  );
}
