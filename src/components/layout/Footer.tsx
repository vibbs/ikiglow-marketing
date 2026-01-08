import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[#E6E6E1]/60 bg-[#F2F4F3]">
      <div className="mx-auto max-w-5xl space-y-8 sm:space-y-12 px-4 sm:px-6 py-12 sm:py-16">
        {/* Navigation */}
        <nav className="grid gap-6 sm:gap-8 grid-cols-2 md:grid-cols-3">
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-sm tracking-wide text-foreground">Explore</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm text-muted-foreground transition-colors duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:text-[#6F846F]"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-muted-foreground transition-colors duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:text-[#6F846F]"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/guides"
                  className="text-sm text-muted-foreground transition-colors duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:text-[#6F846F]"
                >
                  Guides
                </Link>
              </li>
              <li>
                <Link
                  href="/videos"
                  className="text-sm text-muted-foreground transition-colors duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:text-[#6F846F]"
                >
                  Videos
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-sm tracking-wide text-foreground">Tools</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  href="/tools"
                  className="text-sm text-muted-foreground transition-colors duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:text-[#6F846F]"
                >
                  All Tools
                </Link>
              </li>
              <li>
                <Link
                  href="/exercises/breathing"
                  className="text-sm text-muted-foreground transition-colors duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:text-[#6F846F]"
                >
                  Breathing
                </Link>
              </li>
              <li>
                <Link
                  href="/exercises/grounding"
                  className="text-sm text-muted-foreground transition-colors duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:text-[#6F846F]"
                >
                  Grounding
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3 sm:space-y-4 col-span-2 md:col-span-1">
            <h3 className="text-sm tracking-wide text-foreground">Connect</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  href="/newsletter"
                  className="text-sm text-muted-foreground transition-colors duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:text-[#6F846F]"
                >
                  Newsletter
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground transition-colors duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:text-[#6F846F]"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Legal + Brand */}
        <div className="space-y-3 sm:space-y-4 border-t border-[#E6E6E1]/60 pt-6 sm:pt-8">
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
