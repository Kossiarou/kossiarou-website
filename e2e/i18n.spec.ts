import { expect, test } from "@playwright/test";
import { DICT, LANGS, openPage } from "./helpers";

test.describe("language redirect", () => {
  const cases: { header?: string; cookie?: string; path: string; to: string }[] = [
    { path: "/", to: "/fr" },
    { path: "/", header: "en-US,en;q=0.9", to: "/en" },
    { path: "/", header: "de,fr;q=0.5", to: "/fr" },
    { path: "/", header: "de-DE", to: "/fr" },
    { path: "/", header: "fr-FR", cookie: "locale=en", to: "/en" },
    { path: "/pricing", header: "en-GB", to: "/en/pricing" },
    { path: "/some/deep/path", header: "fr", to: "/fr/some/deep/path" },
  ];

  for (const c of cases) {
    test(`${c.path} (${c.header ?? "no header"}${c.cookie ? ", " + c.cookie : ""}) -> ${c.to}`, async ({
      request,
    }) => {
      const headers: Record<string, string> = {};
      if (c.header) headers["Accept-Language"] = c.header;
      if (c.cookie) headers["Cookie"] = c.cookie;
      const res = await request.get(c.path, { headers, maxRedirects: 0 });
      expect(res.status()).toBe(307);
      expect(new URL(res.headers()["location"], "http://localhost").pathname).toBe(c.to);
    });
  }

  test("files with an extension are not redirected", async ({ request }) => {
    for (const path of ["/icon.svg", "/assets/hero.png", "/assets/og-image.png"]) {
      const res = await request.get(path, { maxRedirects: 0 });
      expect(res.status(), path).toBe(200);
    }
  });
});

test.describe("each language", () => {
  for (const lang of LANGS) {
    test(`/${lang} has the right html lang, title and heading`, async ({ page }) => {
      await openPage(page, lang);
      await expect(page.locator("html")).toHaveAttribute("lang", lang);
      await expect(page).toHaveTitle(DICT[lang].meta.title);
      const h1 = DICT[lang].hero;
      await expect(page.locator("h1")).toHaveText(`${h1.titleBefore}${h1.titleHighlight}${h1.titleAfter}`);
    });
  }

  test("share tags: absolute og:image, size and card type", async ({ page }) => {
    for (const lang of LANGS) {
      await openPage(page, lang);
      const meta = (sel: string) => page.locator(sel).getAttribute("content");
      expect(await meta('meta[property="og:image"]')).toMatch(/^https?:\/\/.+\/assets\/og-image\.png$/);
      expect(await meta('meta[property="og:image:width"]')).toBe("1200");
      expect(await meta('meta[property="og:image:height"]')).toBe("630");
      expect(await meta('meta[property="og:image:alt"]')).toBe(DICT[lang].meta.ogImageAlt);
      expect(await meta('meta[name="twitter:card"]')).toBe("summary_large_image");
      expect(await meta('meta[property="og:description"]')).toBe(DICT[lang].meta.ogDescription);
    }
  });

  test("no French UI text on /en and no English UI text on /fr", async ({ page }) => {
    const frOnly = [DICT.fr.header.nav[3].label, DICT.fr.story.scenarios[0].label, DICT.fr.signup.submit];
    const enOnly = [DICT.en.header.nav[3].label, DICT.en.story.scenarios[0].label, DICT.en.signup.submit];

    await openPage(page, "en");
    const enText = await page.locator("body").innerText();
    for (const t of frOnly) expect(enText, `"${t}" must not appear on /en`).not.toContain(t);
    for (const t of enOnly) expect(enText, `"${t}" must appear on /en`).toContain(t);

    await openPage(page, "fr");
    const frText = await page.locator("body").innerText();
    for (const t of enOnly) expect(frText, `"${t}" must not appear on /fr`).not.toContain(t);
    for (const t of frOnly) expect(frText, `"${t}" must appear on /fr`).toContain(t);
  });
});

test.describe("FR / EN toggle", () => {
  test("switches language, keeps the section, remembers the choice", async ({ page, context }) => {
    await page.goto("/fr#tarifs");
    await page.waitForLoadState("networkidle");
    await page.getByRole("link", { name: "EN", exact: true }).click();
    await page.waitForURL("**/en#tarifs");
    await expect(page.locator("html")).toHaveAttribute("lang", "en");

    const cookie = (await context.cookies()).find((c) => c.name === "locale");
    expect(cookie?.value).toBe("en");

    // A later visit to "/" opens in the remembered language, even with a French browser.
    await page.goto("/");
    await expect(page).toHaveURL(/\/en$/);

    await page.getByRole("link", { name: "FR", exact: true }).click();
    await page.waitForURL("**/fr");
    await expect(page.locator("html")).toHaveAttribute("lang", "fr");
  });

  test("marks the current language", async ({ page }) => {
    await openPage(page, "en");
    await expect(page.getByRole("link", { name: "EN", exact: true })).toHaveAttribute("aria-current", "true");
    await expect(page.getByRole("link", { name: "FR", exact: true })).not.toHaveAttribute("aria-current", "true");
  });
});
