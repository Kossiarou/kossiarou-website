import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Sora, IBM_Plex_Mono } from "next/font/google";
import { getDictionary } from "@/i18n/dictionaries";
import { hasLocale, locales } from "@/i18n/config";
import { IS_INDEXABLE, SITE_NAME, SITE_URL } from "@/lib/site";
import { graph, organizationSchema } from "@/lib/schema";
import { JsonLd } from "@/components/site/JsonLd";
import { Analytics } from "@/components/site/Analytics";
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

// Metadata shared by every page. Title, description, canonical and Open Graph are set by
// each page (see lib/seo.ts), because a canonical set here would be inherited by all of them.
export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL(SITE_URL),
    applicationName: SITE_NAME,
    manifest: "/site.webmanifest",
    icons: { apple: "/apple-touch-icon.png" },
    robots: IS_INDEXABLE ? undefined : { index: false, follow: false },
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
      other: process.env.BING_SITE_VERIFICATION
        ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION }
        : undefined,
    },
  };
}

export const viewport: Viewport = { themeColor: "#1C2030" };

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <html lang={lang} className={`${sora.variable} ${plexMono.variable}`}>
      <body className="antialiased">
        <JsonLd data={graph(organizationSchema(dict.meta.schema))} />
        {children}
        <Analytics dict={dict.consent} />
      </body>
    </html>
  );
}
