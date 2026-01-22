import type { Metadata } from "next";
import { Geist, Geist_Mono, Kalam } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const kalam = Kalam({
  variable: "--font-handwritten",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ikiglow.com"),
  title: {
    default: "IkiGlow - A Calm Companion for Personal Growth",
    template: "%s - IkiGlow",
  },
  description:
    "A space for reflection, focus, and intentional action. Discover your purpose through gentle guidance and practical tools.",
  keywords: [
    "ikigai",
    "personal growth",
    "mindfulness",
    "self-awareness",
    "mental wellness",
    "reflection",
    "breathing exercises",
    "grounding techniques",
    "journaling prompts",
  ],
  authors: [{ name: "IkiGlow" }],
  creator: "IkiGlow",
  publisher: "IkiGlow",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "IkiGlow",
    title: "IkiGlow - A Calm Companion for Personal Growth",
    description:
      "A space for reflection, focus, and intentional action. Discover your purpose through gentle guidance and practical tools.",
  },
  twitter: {
    card: "summary_large_image",
    title: "IkiGlow - A Calm Companion for Personal Growth",
    description:
      "A space for reflection, focus, and intentional action. Discover your purpose through gentle guidance and practical tools.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${kalam.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
