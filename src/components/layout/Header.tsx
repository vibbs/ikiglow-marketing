"use client";

import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="border-b border-[#E6E6E1]/60 bg-background/95 backdrop-blur-sm sticky top-0 z-50">
      <nav className="mx-auto max-w-5xl px-4 sm:px-6 py-4 sm:py-6">
        <div className="flex items-center justify-between">
          {/* Logo - with accent dot */}
          <Link
            href="/"
            className="flex items-center gap-1.5 text-lg sm:text-xl tracking-wide transition-colors hover:text-[#6F846F]"
            onClick={closeMenu}
          >
            <span className="inline-block h-2 w-2 rounded-full bg-[#6F846F] animate-breath-pulse" />
            IkiGlow
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8">
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
                href="/exercises"
                className="text-sm tracking-wide text-muted-foreground transition-colors duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:text-[#6F846F]"
              >
                Exercises
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

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-muted-foreground hover:text-[#6F846F] transition-colors"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-[#E6E6E1]/60">
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="block py-2 text-base tracking-wide text-muted-foreground transition-colors hover:text-[#6F846F]"
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="block py-2 text-base tracking-wide text-muted-foreground transition-colors hover:text-[#6F846F]"
                  onClick={closeMenu}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/exercises"
                  className="block py-2 text-base tracking-wide text-muted-foreground transition-colors hover:text-[#6F846F]"
                  onClick={closeMenu}
                >
                  Exercises
                </Link>
              </li>
              <li>
                <Link
                  href="/guides"
                  className="block py-2 text-base tracking-wide text-muted-foreground transition-colors hover:text-[#6F846F]"
                  onClick={closeMenu}
                >
                  Guides
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block py-2 text-base tracking-wide text-muted-foreground transition-colors hover:text-[#6F846F]"
                  onClick={closeMenu}
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
