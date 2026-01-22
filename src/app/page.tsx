import Link from "next/link";
import { useTranslations } from "next-intl";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  const t = useTranslations("home");
  const tCommon = useTranslations("common");
  return (
    <main className="min-h-screen">
      {/* First Viewport: Hero + Logo + Core Values */}
      <div className="min-h-screen flex flex-col justify-center px-4 sm:px-6 pb-12">
        {/* Hero Section */}
        <section className="flex-shrink-0">
          <div className="mx-auto max-w-2xl space-y-6 sm:space-y-8 py-8 sm:py-12 animate-ink-flow-stagger text-center">
            <h1 className="text-3xl sm:text-4xl tracking-wide md:text-5xl">
              {t("hero.title")}
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-center">
              {t("hero.subtitle")}
            </p>
          </div>
        </section>

        {/* Subtle Logo Divider */}
        <div className="mx-auto max-w-2xl py-6 sm:py-8 flex justify-center flex-shrink-0">
          <img
            src="/ikiglow-logo.svg"
            alt=""
            className="h-16 sm:h-20 w-auto opacity-40"
            aria-hidden="true"
          />
        </div>

        {/* What Ikiglow Is */}
        <section className="mx-auto max-w-2xl py-6 sm:py-8 flex-shrink-0">
          <div className="space-y-6 sm:space-y-8 animate-ink-flow-stagger">
            <p className="text-sm sm:text-base leading-relaxed text-center">
              {t("values.line1")}
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-center">
              {t("values.line2")}
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-center">
              {t("values.line3")}
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-center">
              {t("values.line4")}
            </p>
          </div>
        </section>

        {/* Scroll Indicator */}
        {/* <div className="flex justify-center pt-8 sm:pt-12 flex-shrink-0">
          <div className="opacity-20 animate-breath-pulse">
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div> */}
      </div>

      {/* Start Small - Pattern B: Breathing Panel */}
      <section className="panel-sage">
        <div className="mx-auto max-w-2xl space-y-8 sm:space-y-12 px-4 sm:px-6 py-12 sm:py-16">
          <h2 className="text-xl sm:text-2xl tracking-wide">{t("startSmall.title")}</h2>
          <div className="space-y-4 sm:space-y-6">
            <Link
              href="/exercises/box-breathing"
              className="block space-y-2 sm:space-y-3 rounded-xl border border-border/60 bg-background p-5 sm:p-6 transition-all duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:border-[#6F846F]/40 hover:-translate-y-[1px]"
            >
              <h3 className="text-base sm:text-lg tracking-wide">{t("startSmall.breathingExercise.title")}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {t("startSmall.breathingExercise.description")}
              </p>
            </Link>

            <Link
              href="/exercises/five-four-three-two-one"
              className="block space-y-2 sm:space-y-3 rounded-xl border border-border/60 bg-background p-5 sm:p-6 transition-all duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:border-[#6F846F]/40 hover:-translate-y-[1px]"
            >
              <h3 className="text-base sm:text-lg tracking-wide">{t("startSmall.groundingPractice.title")}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {t("startSmall.groundingPractice.description")}
              </p>
            </Link>

            <Link
              href="/exercises"
              className="block space-y-2 sm:space-y-3 rounded-xl border border-border/60 bg-background p-5 sm:p-6 transition-all duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:border-[#6F846F]/40 hover:-translate-y-[1px]"
            >
              <h3 className="text-base sm:text-lg tracking-wide">{t("startSmall.moreExercises.title")}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {t("startSmall.moreExercises.description")}
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Reads */}
      <section className="mx-auto max-w-2xl space-y-8 sm:space-y-12 px-4 sm:px-6 py-12 sm:py-16">
        <h2 className="text-xl sm:text-2xl tracking-wide">{t("recentReflections.title")}</h2>
        <div className="space-y-6 sm:space-y-8">
          <Link
            href="/blog/why-clarity-beats-motivation"
            className="block space-y-2 sm:space-y-3 border-b border-border/60 pb-6 sm:pb-8 transition-all duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:border-[#6F846F]/40"
          >
            <h3 className="text-base sm:text-lg tracking-wide">{t("recentReflections.clarityPost.title")}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {t("recentReflections.clarityPost.description")}
            </p>
          </Link>

          <Link
            href="/blog/the-problem-with-productivity"
            className="block space-y-2 sm:space-y-3 border-b border-border/60 pb-6 sm:pb-8 transition-all duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:border-[#6F846F]/40"
          >
            <h3 className="text-base sm:text-lg tracking-wide">{t("recentReflections.productivityPost.title")}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {t("recentReflections.productivityPost.description")}
            </p>
          </Link>

          <Link
            href="/blog"
            className="text-sm text-muted-foreground transition-colors hover:text-[#6F846F]"
          >
            {tCommon("links.viewAllPosts")}
          </Link>
        </div>
      </section>

      {/* Video Section - Sky Wash for Mindset category */}
      {/* <section className="panel-sky">
        <div className="mx-auto max-w-2xl space-y-8 sm:space-y-12 px-4 sm:px-6 py-12 sm:py-16">
          <h2 className="text-xl sm:text-2xl tracking-wide">{t("videos.title")}</h2>
          <div className="space-y-4 sm:space-y-6">
            <div className="aspect-video rounded-xl border border-border/60 bg-background">
              <div className="flex h-full items-center justify-center text-xs sm:text-sm text-muted-foreground px-4 text-center">
                {t("videos.placeholder")}
              </div>
            </div>
            <Link
              href="/videos"
              className="block text-sm text-muted-foreground transition-colors hover:text-[#6F846F]"
            >
              {tCommon("links.viewAllVideos")}
            </Link>
          </div>
        </div>
      </section> */}


      <Separator className="my-12 md:my-16" />


      {/* Newsletter CTA - Gentle, tinted container style */}
      <section className="mx-auto max-w-2xl space-y-4 sm:space-y-6 px-4 sm:px-6 py-12 sm:py-16">
        <div className="space-y-4 sm:space-y-6 rounded-xl panel-sand p-6 sm:p-8">
          <h2 className="text-lg sm:text-xl tracking-wide">{t("newsletter.title")}</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {t("newsletter.description")}
          </p>
          <Link
            href="/newsletter"
            className="inline-block rounded-xl bg-[#6F846F] px-5 sm:px-6 py-2.5 sm:py-3 text-sm tracking-wide text-[#FAFAF8] transition-all duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:bg-[#5F7460] active:translate-y-[1px]"
          >
            {tCommon("buttons.subscribe")}
          </Link>
        </div>
      </section>
    </main>
  );
}
