import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-[#E6E6E1]/60">
      <nav className="mx-auto max-w-5xl px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo - with accent dot */}
          <Link href="/" className="flex items-center gap-1.5 text-xl tracking-wide transition-colors hover:text-[#6F846F]">
            <span className="inline-block h-2 w-2 rounded-full bg-[#6F846F] animate-breath-pulse" />
            IkiGlow
          </Link>

          {/* Navigation - Minimal and quiet */}
          <ul className="flex items-center gap-8">
            <li>
              <Link
                href="/"
                className="text-sm tracking-wide text-muted-foreground transition-colors duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:text-[#6F846F]"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-sm tracking-wide text-muted-foreground transition-colors duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:text-[#6F846F]"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/tools"
                className="text-sm tracking-wide text-muted-foreground transition-colors duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:text-[#6F846F]"
              >
                Tools
              </Link>
            </li>
            <li>
              <Link
                href="/guides"
                className="text-sm tracking-wide text-muted-foreground transition-colors duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:text-[#6F846F]"
              >
                Guides
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-sm tracking-wide text-muted-foreground transition-colors duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:text-[#6F846F]"
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
