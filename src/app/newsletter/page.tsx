import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata.newsletter");
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function Newsletter() {
  const t = useTranslations("newsletter");

  return (
    <main className="min-h-screen">
      {/* Header */}
      <div className="mx-auto max-w-2xl space-y-8 px-6 py-16">
        <h1 className="text-3xl tracking-wide">{t("title")}</h1>
        <p className="text-base text-muted-foreground">
          {t("description")}
        </p>
      </div>

      {/* What to expect */}
      <div className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-2xl space-y-8 px-6 py-16">
          <h2 className="text-xl tracking-wide">{t("whatToExpect.title")}</h2>
          <div className="space-y-4 text-base leading-relaxed">
            <p>{t("whatToExpect.intro")}</p>
            <ul className="space-y-3">
              <li>{t("whatToExpect.item1")}</li>
              <li>{t("whatToExpect.item2")}</li>
              <li>{t("whatToExpect.item3")}</li>
            </ul>
            <p className="text-sm text-muted-foreground">
              {t("whatToExpect.outro")}
            </p>
          </div>
        </div>
      </div>

      {/* Signup Form */}
      <div className="mx-auto max-w-2xl px-6 py-16">
        <div className="space-y-8 rounded-sm border border-border p-8">
          <div className="space-y-4">
            <label htmlFor="email" className="block text-sm tracking-wide">
              {t("form.emailLabel")}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder={t("form.emailPlaceholder")}
              className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-sm bg-primary px-6 py-3 text-sm tracking-wide text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t("form.submitButton")}
          </button>
          <p className="text-xs text-muted-foreground">
            {t("form.disclaimer")}
          </p>
        </div>
      </div>

      {/* Sample content */}
      <div className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-2xl space-y-8 px-6 py-16">
          <h2 className="text-xl tracking-wide">{t("recentEditions.title")}</h2>
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="text-xs text-muted-foreground">{t("recentEditions.edition1.date")}</div>
              <h3 className="text-base tracking-wide">
                {t("recentEditions.edition1.title")}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {t("recentEditions.edition1.excerpt")}
              </p>
            </div>
            <div className="space-y-2 border-t border-border pt-6">
              <div className="text-xs text-muted-foreground">{t("recentEditions.edition2.date")}</div>
              <h3 className="text-base tracking-wide">
                {t("recentEditions.edition2.title")}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {t("recentEditions.edition2.excerpt")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
