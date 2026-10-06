import { expect, test } from "@playwright/test";
import { DICT, LANGS } from "./helpers";

for (const lang of LANGS) {
  test.describe(`404 /${lang}`, () => {
    const dict = DICT[lang].notFound;

    test("returns HTTP 404, noindex, and the page in the right language", async ({ page }) => {
      const res = await page.goto(`/${lang}/page-inexistante`);
      expect(res!.status()).toBe(404);
      await expect(page.locator("html")).toHaveAttribute("lang", lang);
      await expect(page.locator("h1")).toHaveText(dict.title);
      await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
      expect(await page.title()).toBe(dict.metaTitle);
    });

    test("links back to the home page and to the waitlists", async ({ page }) => {
      await page.goto(`/${lang}/a/b/c/d`);
      await expect(page.getByRole("link", { name: dict.home })).toHaveAttribute("href", `/${lang}`);
      await expect(page.getByRole("link", { name: dict.waitlist })).toHaveAttribute("href", `/${lang}#listes`);
      await page.getByRole("link", { name: dict.home }).click();
      await expect(page).toHaveURL(new RegExp(`/${lang}$`));
    });
  });
}

test("an address without a language is redirected, then shows the 404 in the browser's language", async ({
  browser,
}) => {
  for (const [acceptLanguage, lang] of [["en-US", "en"], ["fr-FR", "fr"]] as const) {
    const context = await browser.newContext({ locale: acceptLanguage, extraHTTPHeaders: { "Accept-Language": acceptLanguage } });
    const page = await context.newPage();
    const res = await page.goto("/zzz-unknown");
    expect(res!.status()).toBe(404);
    await expect(page).toHaveURL(new RegExp(`/${lang}/zzz-unknown$`));
    await expect(page.locator("h1")).toHaveText(DICT[lang].notFound.title);
    await context.close();
  }
});

test("real pages are not affected", async ({ request }) => {
  for (const lang of LANGS) expect((await request.get(`/${lang}`)).status()).toBe(200);
});
