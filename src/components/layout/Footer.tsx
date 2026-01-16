"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("common.footer");
  const tNav = useTranslations("common.nav");
  return (
    <footer className="border-t border-[#E6E6E1]/60 bg-[#F2F4F3]">
      <div className="mx-auto max-w-5xl space-y-8 sm:space-y-12 px-4 sm:px-6 py-12 sm:py-16">
        {/* Navigation */}
        <nav className="grid gap-6 sm:gap-8 grid-cols-2 md:grid-cols-4">
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-sm tracking-wide text-foreground">{t("explore")}</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm text-muted-foreground transition-colors duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:text-[#6F846F]"
                >
                  {tNav("home")}
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-muted-foreground transition-colors duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:text-[#6F846F]"
                >
                  {tNav("blog")}
                </Link>
              </li>
              <li>
                <Link
                  href="/guides"
                  className="text-sm text-muted-foreground transition-colors duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:text-[#6F846F]"
                >
                  {tNav("guides")}
                </Link>
              </li>
              <li>
                <Link
                  href="/videos"
                  className="text-sm text-muted-foreground transition-colors duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:text-[#6F846F]"
                >
                  {tNav("videos")}
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-sm tracking-wide text-foreground">{t("exercisesSection")}</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  href="/exercises"
                  className="text-sm text-muted-foreground transition-colors duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:text-[#6F846F]"
                >
                  {t("allExercises")}
                </Link>
              </li>
              <li>
                <Link
                  href="/exercises/breathing"
                  className="text-sm text-muted-foreground transition-colors duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:text-[#6F846F]"
                >
                  {t("breathing")}
                </Link>
              </li>
              <li>
                <Link
                  href="/exercises/grounding"
                  className="text-sm text-muted-foreground transition-colors duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:text-[#6F846F]"
                >
                  {t("grounding")}
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-sm tracking-wide text-foreground">{t("reflectionsSection")}</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  href="/reflections"
                  className="text-sm text-muted-foreground transition-colors duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:text-[#6F846F]"
                >
                  {t("allReflections")}
                </Link>
              </li>
              <li>
                <Link
                  href="/reflections/journaling"
                  className="text-sm text-muted-foreground transition-colors duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:text-[#6F846F]"
                >
                  {t("journaling")}
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3 sm:space-y-4 col-span-2 md:col-span-1">
            <h3 className="text-sm tracking-wide text-foreground">{t("connect")}</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  href="/newsletter"
                  className="text-sm text-muted-foreground transition-colors duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:text-[#6F846F]"
                >
                  {tNav("newsletter")}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground transition-colors duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:text-[#6F846F]"
                >
                  {tNav("about")}
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Legal + Brand */}
        <div className="space-y-3 sm:space-y-4 border-t border-[#E6E6E1]/60 pt-6 sm:pt-8">
          <p className="text-xs text-muted-foreground">
            {t("disclaimer")}
          </p>
          <p className="text-xs text-muted-foreground">
            {t("copyright", { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  );
}
