import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Sora, IBM_Plex_Mono } from "next/font/google";
import { getDictionary } from "@/i18n/dictionaries";
import { hasLocale, locales } from "@/i18n/config";
import "../globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: { languages: { fr: "/fr", en: "/en" } },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <html lang={lang} className={`${sora.variable} ${plexMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
