import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-5xl space-y-12 px-6 py-16">
        {/* Navigation */}
        <nav className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-sm tracking-wide text-foreground">Explore</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/guides"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Guides
                </Link>
              </li>
              <li>
                <Link
                  href="/videos"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Videos
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm tracking-wide text-foreground">Tools</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/tools"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  All Tools
                </Link>
              </li>
              <li>
                <Link
                  href="/exercises/breathing"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Breathing
                </Link>
              </li>
              <li>
                <Link
                  href="/exercises/grounding"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Grounding
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm tracking-wide text-foreground">Connect</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/newsletter"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Newsletter
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Legal + Brand */}
        <div className="space-y-4 border-t border-border pt-8">
          <p className="text-xs text-muted-foreground">
            IkiGlow is not therapy or medical advice. If you&apos;re experiencing a mental health crisis, please seek professional help.
          </p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} IkiGlow. A space for reflection and growth.
          </p>
        </div>
      </div>
    </footer>
  );
}
