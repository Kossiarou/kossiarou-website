import type { MetadataRoute } from "next";
import { IS_INDEXABLE, SITE_URL } from "@/lib/site";

// Search engines and AI assistants are welcome on the production site, so that Kossiarou can
// be found and quoted. Previews and local builds stay closed to avoid duplicate content.
const AI_AND_SEARCH_BOTS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "PerplexityBot",
  "ClaudeBot",
  "Claude-SearchBot",
  "Google-Extended",
  "Bingbot",
];

export default function robots(): MetadataRoute.Robots {
  if (!IS_INDEXABLE) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/", "/_next/data/"] },
      ...AI_AND_SEARCH_BOTS.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
