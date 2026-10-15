import type { Locale } from "@/i18n/config";

// One canonical form of the URL: https + www (see the SEO brief). Override with
// NEXT_PUBLIC_SITE_URL only for another production domain.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kossiarou.com").replace(
  /\/$/,
  "",
);

export const SITE_NAME = "Kossiarou";
export const LEGAL_NAME = "Kossiarou Technology SARL";

export const CONTACT = {
  email: "contact@kossiarou.com",
  whatsappUrl: "https://wa.me/33745543736",
  whatsappPhone: "+33745543736",
  whatsappDisplay: "+33 7 45 54 37 36",
};

export const SOCIAL_LINKS = [
  "https://www.facebook.com/kossiarou",
  "https://www.tiktok.com/@kossiarou1",
  "https://www.instagram.com/kossiarou",
  "https://www.linkedin.com/company/kossiarou/",
];

// Absolute URL of the page `path` ("" for the home page) in the language `lang`.
export function absoluteUrl(lang: Locale, path = "") {
  return `${SITE_URL}/${lang}${path ? `/${path}` : ""}`;
}

// Search engines should only index the real production site (previews would duplicate it).
export const IS_INDEXABLE =
  process.env.VERCEL_ENV === undefined
    ? process.env.NODE_ENV === "production"
    : process.env.VERCEL_ENV === "production";

export const OG_IMAGE = {
  url: "/og/kossiarou-og-1200x630.png",
  width: 1200,
  height: 630,
};

// Date shown on the content pages ("Mis à jour le …") and used as <lastmod> in the sitemap.
export const CONTENT_UPDATED = "2026-10-15";
