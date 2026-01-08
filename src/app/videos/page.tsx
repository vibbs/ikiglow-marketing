import Link from "next/link";

export default function Videos() {
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
            Videos
          </h1>
          <p className="text-lg text-muted-foreground">
            Brief moments of inspiration and guidance
          </p>
        </div>

        {/* Videos placeholder - structure for future content */}
        <div className="space-y-12 pt-8">
          <p className="text-base leading-relaxed text-muted-foreground">
            Video content coming soon. This space will hold short-form videos
            exploring purpose, mindfulness, and intentional living.
          </p>
        </div>
      </div>
    </main>
  );
}
