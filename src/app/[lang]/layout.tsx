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
  const image = {
    url: "/assets/og-image.png",
    width: 1200,
    height: 630,
    alt: dict.meta.ogImageAlt,
  };
  return {
    // Absolute base so og:image becomes an absolute URL. Set NEXT_PUBLIC_SITE_URL in production.
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://kossiarou.com"),
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: { languages: { fr: "/fr", en: "/en" } },
    openGraph: {
      type: "website",
      title: dict.meta.ogTitle,
      description: dict.meta.ogDescription,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.ogTitle,
      description: dict.meta.ogDescription,
      images: [image],
    },
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
