"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

type FormState = "idle" | "submitting" | "success" | "error";

export function SubscribeForm() {
  const t = useTranslations("newsletter.form");
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorType, setErrorType] = useState<"generic" | "alreadySubscribed">(
    "generic"
  );

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormState("submitting");

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const firstName = formData.get("firstName") as string;

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, firstName }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.error === "alreadySubscribed") {
          setErrorType("alreadySubscribed");
        } else {
          setErrorType("generic");
        }
        setFormState("error");
        return;
      }

      setFormState("success");
    } catch {
      setErrorType("generic");
      setFormState("error");
    }
  }

  if (formState === "success") {
    return (
      <div className="space-y-8 text-center">
        <div className="space-y-4">
          <h3 className="text-xl tracking-wide">{t("success.title")}</h3>
          <p className="text-base text-muted-foreground">
            {t("success.message")}
          </p>
        </div>

        <div className="space-y-2 rounded-sm bg-muted/30 p-6">
          <p className="text-sm font-medium">{t("success.privacyTitle")}</p>
          <p className="text-sm text-muted-foreground">
            {t("success.privacyMessage")}
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            {t("success.exploreTitle")}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/blog"
              className="rounded-sm border border-border px-4 py-2 text-sm transition-colors hover:bg-muted"
            >
              {t("success.exploreBlog")}
            </Link>
            <Link
              href="/exercises"
              className="rounded-sm border border-border px-4 py-2 text-sm transition-colors hover:bg-muted"
            >
              {t("success.exploreExercises")}
            </Link>
            <Link
              href="/guides"
              className="rounded-sm border border-border px-4 py-2 text-sm transition-colors hover:bg-muted"
            >
              {t("success.exploreGuides")}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-6">
        <div className="space-y-4">
          <label htmlFor="firstName" className="block text-sm tracking-wide">
            {t("nameLabel")}
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder={t("namePlaceholder")}
            className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none"
          />
        </div>
        <div className="space-y-4">
          <label htmlFor="email" className="block text-sm tracking-wide">
            {t("emailLabel")}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder={t("emailPlaceholder")}
            className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none"
          />
        </div>
      </div>

      {formState === "error" && (
        <p className="text-sm text-rose-600">{t(`error.${errorType}`)}</p>
      )}

      <button
        type="submit"
        disabled={formState === "submitting"}
        className="w-full rounded-sm bg-primary px-6 py-3 text-sm tracking-wide text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60"
      >
        {formState === "submitting" ? t("submitting") : t("submitButton")}
      </button>

      <p className="text-xs text-muted-foreground">{t("disclaimer")}</p>
    </form>
  );
}
