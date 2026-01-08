import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: "IkiGlow — A Calm Companion for Personal Growth",
  description: "A space for reflection, focus, and intentional action. Discover your purpose through gentle guidance and practical tools.",
  keywords: ["ikigai", "personal growth", "mindfulness", "self-awareness", "mental wellness", "reflection"],
  authors: [{ name: "IkiGlow" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "IkiGlow",
    title: "IkiGlow — A Calm Companion for Personal Growth",
    description: "A space for reflection, focus, and intentional action.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
