import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-border">
      <nav className="mx-auto max-w-5xl px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl tracking-wide transition-colors hover:text-primary">
            IkiGlow
          </Link>

          {/* Navigation - Minimal and quiet */}
          <ul className="flex items-center gap-8">
            <li>
              <Link
                href="/"
                className="text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/tools"
                className="text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground"
              >
                Tools
              </Link>
            </li>
            <li>
              <Link
                href="/guides"
                className="text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground"
              >
                Guides
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
