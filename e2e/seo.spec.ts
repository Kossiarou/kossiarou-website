import { expect, test } from "@playwright/test";
import { LANDING_PAGES } from "../src/content/landing-fr";
import { DICT } from "./helpers";

const SITE = "https://www.kossiarou.com";

test.describe("robots.txt and sitemap.xml", () => {
  test("robots.txt lets search and AI crawlers in and points to the sitemap", async ({ request }) => {
    const res = await request.get("/robots.txt");
    expect(res.status()).toBe(200);
    const text = await res.text();
    for (const bot of ["GPTBot", "OAI-SearchBot", "PerplexityBot", "ClaudeBot", "Google-Extended", "Bingbot"]) {
      expect(text, bot).toContain(`User-Agent: ${bot}`);
    }
    expect(text).toContain("Disallow: /api/");
    expect(text).toContain(`Sitemap: ${SITE}/sitemap.xml`);
  });

  test("sitemap.xml lists the 19 French pages and the English home page, with absolute hreflang", async ({
    request,
  }) => {
    const xml = await (await request.get("/sitemap.xml")).text();
    const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
    expect(urls).toHaveLength(LANDING_PAGES.length + 2);
    expect(LANDING_PAGES).toHaveLength(17);
    expect(urls).toContain(`${SITE}/fr`);
    expect(urls).toContain(`${SITE}/en`);
    for (const page of LANDING_PAGES) expect(urls).toContain(`${SITE}/fr/${page.slug}`);
    expect(xml).toContain(`hreflang="x-default" href="${SITE}/fr"`);
  });
});

test.describe("home page tags", () => {
  for (const lang of ["fr", "en"] as const) {
    test(`/${lang}: canonical, hreflang, Open Graph and structured data`, async ({ page }) => {
      await page.goto(`/${lang}`);
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", `${SITE}/${lang}`);
      for (const [hreflang, path] of [["fr", "fr"], ["en", "en"], ["x-default", "fr"]]) {
        await expect(page.locator(`link[rel="alternate"][hreflang="${hreflang}"]`)).toHaveAttribute(
          "href",
          `${SITE}/${path}`,
        );
      }
      await expect(page.locator('meta[property="og:locale"]')).toHaveAttribute(
        "content",
        lang === "fr" ? "fr_FR" : "en_US",
      );
      await expect(page.locator('meta[property="og:url"]')).toHaveAttribute("content", `${SITE}/${lang}`);
      await expect(page.locator('meta[name="description"]')).toHaveAttribute(
        "content",
        DICT[lang].meta.description,
      );

      const blocks = await page.locator('script[type="application/ld+json"]').allTextContents();
      const types = blocks.flatMap((b) => JSON.parse(b)["@graph"].map((n: { "@type": string }) => n["@type"]));
      expect(types).toEqual(expect.arrayContaining(["Organization", "WebSite", "Service", "FAQPage"]));
    });
  }

  test("the home FAQ markup repeats the visible questions word for word", async ({ page }) => {
    await page.goto("/fr");
    const blocks = await page.locator('script[type="application/ld+json"]').allTextContents();
    const faq = blocks.flatMap((b) => JSON.parse(b)["@graph"]).find((n) => n["@type"] === "FAQPage");
    expect(faq.mainEntity.map((q: { name: string }) => q.name)).toEqual(DICT.fr.faq.questions);
  });

  test("no placeholder or former-owner wording is left on the pages", async ({ page }) => {
    for (const lang of ["fr", "en"]) {
      await page.goto(`/${lang}`);
      const text = await page.locator("body").innerText();
      for (const banned of ["[FRAIS]", "[FEES]", "[AVANTAGE]", "[COMMISSION]", "[BANQUES]", "KryptaPay"]) {
        expect(text, `${banned} on /${lang}`).not.toContain(banned);
      }
    }
  });
});

test.describe("landing, information and legal pages", () => {
  for (const content of LANDING_PAGES) {
    test(`/fr/${content.slug}: title, one H1, canonical, breadcrumb`, async ({ page }) => {
      const res = await page.goto(`/fr/${content.slug}`);
      expect(res!.status()).toBe(200);
      await expect(page).toHaveTitle(content.title);
      expect(content.title.length, "title length").toBeLessThanOrEqual(60);
      expect(content.description.length, "description length").toBeLessThanOrEqual(155);
      await expect(page.locator("h1")).toHaveCount(1);
      await expect(page.locator("h1")).toHaveText(content.h1);
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
        "href",
        `${SITE}/fr/${content.slug}`,
      );
      const blocks = await page.locator('script[type="application/ld+json"]').allTextContents();
      const types = blocks.flatMap((b) => JSON.parse(b)["@graph"].map((n: { "@type": string }) => n["@type"]));
      expect(types).toContain("BreadcrumbList");
      if (content.faq.length > 0) expect(types).toContain("FAQPage");
    });
  }

  test("the answer paragraph of each usage and country page is 40 to 80 words", async () => {
    for (const content of LANDING_PAGES.filter((p) => p.kind === "usage" || p.kind === "country")) {
      const words = content.answer.split(/\s+/).length;
      expect(words, content.slug).toBeGreaterThanOrEqual(40);
      expect(words, content.slug).toBeLessThanOrEqual(80);
    }
  });

  test("a landing page in English is a real 404", async ({ page }) => {
    const res = await page.goto("/en/payer-a-dubai");
    expect(res!.status()).toBe(404);
  });

  test("the footer links lead to existing pages", async ({ page, request }) => {
    await page.goto("/fr");
    const hrefs = await page.locator("footer a[href^='/fr/']").evaluateAll((links) =>
      links.map((a) => a.getAttribute("href")),
    );
    expect(hrefs.length).toBeGreaterThanOrEqual(11);
    for (const href of hrefs) expect((await request.get(href!)).status(), href!).toBe(200);
  });
});

test.describe("sign-up API", () => {
  test("accepts a valid sign-up, rejects an invalid one, ignores robots", async ({ request }) => {
    const valid = { list: "user", firstName: "Aïcha", country: "BJ +229", whatsapp: "01 97 00 00 00" };
    expect((await request.post("/api/waitlist", { data: valid })).status()).toBe(202);
    expect((await request.post("/api/waitlist", { data: { ...valid, whatsapp: "12" } })).status()).toBe(422);
    expect((await request.post("/api/waitlist", { data: { ...valid, list: "x" } })).status()).toBe(422);
    expect((await request.post("/api/waitlist", { data: { ...valid, website: "spam" } })).status()).toBe(202);
  });
});
