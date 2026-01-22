import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { SubscribeForm } from "@/components/SubscribeForm";

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
        <p className="text-base text-muted-foreground">{t("description")}</p>
      </div>

      {/* Signup Form */}
      <div className="mx-auto max-w-2xl px-6 pb-16">
        <div className="rounded-sm border border-border p-8">
          <SubscribeForm />
        </div>
      </div>

      {/* What to expect */}
      <div className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-2xl space-y-8 px-6 py-16">
          <h2 className="text-xl tracking-wide">{t("whatToExpect.title")}</h2>
          <div className="space-y-4 text-base leading-relaxed">
            <p>{t("whatToExpect.intro")}</p>
            <ul className="space-y-3 text-muted-foreground">
              <li>• {t("whatToExpect.item1")}</li>
              <li>• {t("whatToExpect.item2")}</li>
              <li>• {t("whatToExpect.item3")}</li>
            </ul>
            <p className="text-sm text-muted-foreground">
              {t("whatToExpect.outro")}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
