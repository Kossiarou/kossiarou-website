import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { OG_IMAGE, SITE_NAME, SITE_URL, IS_INDEXABLE, absoluteUrl } from "./site";

const OG_LOCALE: Record<Locale, string> = { fr: "fr_FR", en: "en_US" };

type PageMeta = {
  lang: Locale;
  /** Path after the language, without leading or trailing slash ("" for the home page). */
  path?: string;
  /** Full <title>, already ending with the brand name. */
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  imageAlt: string;
  /** Pages that exist in both languages declare their alternates (hreflang). */
  bilingual?: boolean;
};

// Canonical, hreflang (absolute URLs, with x-default), Open Graph, Twitter and robots for one page.
export function buildMetadata({
  lang,
  path = "",
  title,
  description,
  ogTitle,
  ogDescription,
  imageAlt,
  bilingual = false,
}: PageMeta): Metadata {
  const url = absoluteUrl(lang, path);
  const image = { ...OG_IMAGE, alt: imageAlt };
  return {
    metadataBase: new URL(SITE_URL),
    title: { absolute: title },
    description,
    alternates: {
      canonical: url,
      ...(bilingual && {
        languages: {
          fr: absoluteUrl("fr", path),
          en: absoluteUrl("en", path),
          "x-default": absoluteUrl("fr", path),
        },
      }),
    },
    robots: IS_INDEXABLE
      ? { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } }
      : { index: false, follow: false },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: OG_LOCALE[lang],
      url,
      title: ogTitle ?? title,
      description: ogDescription ?? description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle ?? title,
      description: ogDescription ?? description,
      images: [image],
    },
  };
}
