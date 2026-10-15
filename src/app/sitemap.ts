import type { MetadataRoute } from "next";
import { LANDING_PAGES } from "@/content/landing-fr";
import { CONTENT_UPDATED, absoluteUrl } from "@/lib/site";

type Entry = MetadataRoute.Sitemap[number];

const PRIORITY: Record<string, number> = {
  "payer-fournisseur-chine": 0.9,
  "payer-scolarite-france": 0.9,
  "payer-a-dubai": 0.8,
  "payer-aux-etats-unis": 0.8,
  faq: 0.7,
  guides: 0.6,
  ambassadeurs: 0.6,
  securite: 0.6,
  "mentions-legales": 0.2,
  confidentialite: 0.2,
  conditions: 0.2,
};

// The 19 French URLs and the English home page. Only the home page exists in both languages,
// so it is the only one that declares hreflang alternates (absolute URLs, with x-default).
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(CONTENT_UPDATED);
  const languages = {
    fr: absoluteUrl("fr"),
    en: absoluteUrl("en"),
    "x-default": absoluteUrl("fr"),
  };

  const home: Entry[] = [
    {
      url: absoluteUrl("fr"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      alternates: { languages },
    },
    {
      url: absoluteUrl("en"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: { languages },
    },
  ];

  const pages: Entry[] = LANDING_PAGES.map((page) => ({
    url: absoluteUrl("fr", page.slug),
    lastModified,
    changeFrequency: page.kind === "legal" ? "yearly" : page.slug === "guides" ? "weekly" : "monthly",
    priority: PRIORITY[page.slug] ?? 0.7,
  }));

  return [...home, ...pages];
}
