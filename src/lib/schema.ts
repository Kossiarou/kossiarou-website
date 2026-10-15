import type { Locale } from "@/i18n/config";
import { CONTACT, LEGAL_NAME, SITE_NAME, SITE_URL, SOCIAL_LINKS } from "./site";

const COUNTRIES = ["BJ", "CI", "BF", "TG", "ML", "SN"];
const ORG_ID = `${SITE_URL}/#org`;

export type SchemaCopy = {
  slogan: string;
  organizationDescription: string;
  serviceName: string;
  serviceType: string;
};

// Organization: on every page (layout). Describes only what the site shows.
export function organizationSchema(copy: SchemaCopy) {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE_NAME,
    legalName: LEGAL_NAME,
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/logo-512.png`,
    slogan: copy.slogan,
    description: copy.organizationDescription,
    foundingLocation: { "@type": "Place", name: "Parakou, Bénin" },
    areaServed: COUNTRIES,
    email: CONTACT.email,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      telephone: CONTACT.whatsappPhone,
      availableLanguage: ["fr", "en"],
    },
    sameAs: SOCIAL_LINKS,
  };
}

export function websiteSchema(lang: Locale) {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#site`,
    url: `${SITE_URL}/`,
    name: SITE_NAME,
    inLanguage: lang,
    publisher: { "@id": ORG_ID },
  };
}

export function serviceSchema(copy: SchemaCopy, serviceUrl: string) {
  return {
    "@type": "Service",
    name: copy.serviceName,
    serviceType: copy.serviceType,
    provider: { "@id": ORG_ID },
    areaServed: COUNTRIES,
    availableChannel: { "@type": "ServiceChannel", serviceUrl },
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function graph(...nodes: unknown[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
