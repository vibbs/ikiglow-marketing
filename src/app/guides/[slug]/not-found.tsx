import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-2xl px-6 py-16">
        <div className="space-y-12 text-center">
          <div className="space-y-6">
            <h1 className="text-3xl tracking-wide md:text-4xl">
              Guide Not Found
            </h1>
            <p className="text-base text-muted-foreground">
              The guide you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
          </div>

          <div className="flex justify-center gap-4">
            <Link
              href="/guides"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              ← Browse all guides
            </Link>
            <span className="text-muted-foreground">·</span>
            <Link
              href="/"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Return home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
