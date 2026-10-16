import { expect, test } from "@playwright/test";
import { DICT, LANGS, STORY_CODES, openPage } from "./helpers";

for (const lang of LANGS) {
  test.describe(`story tabs /${lang}`, () => {
    test("each tab changes the title, the receipt and the photo", async ({ page }) => {
      await openPage(page, lang);
      const scenarios = DICT[lang].story.scenarios;

      for (const [i, code] of STORY_CODES.entries()) {
        const tab = page.locator(`#story-tab-${code}`);
        await tab.click();
        await expect(tab).toHaveAttribute("aria-selected", "true");
        const panel = page.locator("#story-panel");
        await expect(panel.locator("h3").first()).toHaveText(scenarios[i].title);
        await expect(panel.getByText(scenarios[i].receipt.amount, { exact: true })).toBeVisible();
        const img = panel.locator("img").first();
        await expect(img).toHaveAttribute("alt", scenarios[i].imageAlt);
        expect(scenarios[i].imageAlt.length).toBeGreaterThan(10);
      }
    });

    test("ARIA structure: one tablist, four tabs, one tab stop", async ({ page }) => {
      await openPage(page, lang);
      await expect(page.getByRole("tablist")).toHaveCount(1);
      await expect(page.getByRole("tab")).toHaveCount(4);
      await expect(page.getByRole("tabpanel")).toHaveCount(1);
      await expect(page.locator('[role="tab"][tabindex="0"]')).toHaveCount(1);
      await expect(page.locator('[role="tab"][tabindex="-1"]')).toHaveCount(3);
    });

    test("keyboard: arrows move and wrap, Home and End jump", async ({ page }) => {
      await openPage(page, lang);
      await page.locator("#story-tab-CNY").focus();

      await page.keyboard.press("ArrowRight");
      await expect(page.locator("#story-tab-EUR")).toBeFocused();
      await expect(page.locator("#story-tab-EUR")).toHaveAttribute("aria-selected", "true");

      await page.keyboard.press("End");
      await expect(page.locator("#story-tab-USD")).toBeFocused();
      await page.keyboard.press("ArrowRight");
      await expect(page.locator("#story-tab-CNY")).toBeFocused();

      await page.keyboard.press("ArrowLeft");
      await expect(page.locator("#story-tab-USD")).toBeFocused();
      await page.keyboard.press("Home");
      await expect(page.locator("#story-tab-CNY")).toBeFocused();
      await expect(page.locator("#story-tab-CNY")).toHaveAttribute("aria-selected", "true");
    });
  });
}

test("story photos are real photos, not placeholders", async ({ page }) => {
  await openPage(page, "fr");
  for (const code of ["eur", "aed", "usd", "cny"]) {
    // The original files: placeholders were small flat images, real photos are 1200x900 or more.
    const res = await page.request.get(`/assets/story-${code}.png`);
    expect(res.status()).toBe(200);
    const size = (await res.body()).length;
    expect(size, `story-${code}.png is ${size} bytes`).toBeGreaterThan(300_000);
  }
});
