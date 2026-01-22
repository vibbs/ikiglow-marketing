import Link from "next/link";
import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata.videos");
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function Videos() {
  const t = useTranslations("videos");

  return (
    <main className="min-h-screen">
      {/* Coming Soon Message */}
      <div className="mx-auto max-w-2xl flex flex-col items-center justify-center min-h-[60vh] space-y-6 px-6 py-16 text-center">
        <h1 className="text-3xl tracking-wide">Video Guides</h1>
        <p className="text-base text-muted-foreground">
          Coming soon
        </p>
      </div>

      {/* Original content commented out */}
      {/* <div className="mx-auto max-w-2xl space-y-8 px-6 py-16">
        <h1 className="text-3xl tracking-wide">{t("title")}</h1>
        <p className="text-base text-muted-foreground">
          {t("description")}
        </p>
      </div>

      <div className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-2xl px-6 py-8">
          <nav className="flex flex-wrap gap-4">
            <Link
              href="/videos"
              className="text-sm text-foreground transition-colors hover:text-primary"
            >
              {t("categories.all")}
            </Link>
            <Link
              href="/videos/calm-resets"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {t("categories.calmResets")}
            </Link>
            <Link
              href="/videos/mindset-reframes"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {t("categories.mindsetReframes")}
            </Link>
            <Link
              href="/videos/micro-frameworks"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {t("categories.microFrameworks")}
            </Link>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-2xl space-y-12 px-6 py-16">
        <article className="space-y-6">
          <div className="aspect-video rounded-sm border border-border bg-muted/30">
            <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
              {t("video1.placeholder")}
            </div>
          </div>
          <div className="space-y-3">
            <div className="text-xs text-muted-foreground">{t("video1.category")} · {t("video1.duration")}</div>
            <h2 className="text-xl tracking-wide">{t("video1.title")}</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {t("video1.description")}
            </p>
          </div>
          <details className="space-y-4 border-t border-border pt-6">
            <summary className="cursor-pointer text-sm text-muted-foreground transition-colors hover:text-foreground">
              View transcript
            </summary>
            <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
              <p>{t("video1.transcript.line1")}</p>
              <p>{t("video1.transcript.line2")}</p>
              <p>{t("video1.transcript.line3")}</p>
            </div>
          </details>
        </article>

        <article className="space-y-6 border-t border-border pt-12">
          <div className="aspect-video rounded-sm border border-border bg-muted/30">
            <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
              {t("video2.placeholder")}
            </div>
          </div>
          <div className="space-y-3">
            <div className="text-xs text-muted-foreground">{t("video2.category")} · {t("video2.duration")}</div>
            <h2 className="text-xl tracking-wide">{t("video2.title")}</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {t("video2.description")}
            </p>
          </div>
          <details className="space-y-4 border-t border-border pt-6">
            <summary className="cursor-pointer text-sm text-muted-foreground transition-colors hover:text-foreground">
              View transcript
            </summary>
            <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
              <p>{t("video2.transcript.line1")}</p>
              <p>{t("video2.transcript.line2")}</p>
            </div>
          </details>
        </article>

        <div className="border-t border-border pt-12">
          <p className="text-sm text-muted-foreground">
            {t("comingSoon")}
          </p>
        </div>
      </div> */}
    </main>
  );
}
