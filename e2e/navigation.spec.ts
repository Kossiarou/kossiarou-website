import { expect, test } from "@playwright/test";
import { DICT, LANGS, openPage } from "./helpers";

test.describe("header and burger menu", () => {
  for (const lang of LANGS) {
    test(`/${lang}: burger under 800px, full navigation from 800px`, async ({ page }) => {
      await openPage(page, lang, 390);
      const burger = page.getByRole("button", { name: DICT[lang].header.menu });
      await expect(burger).toBeVisible();
      await expect(page.getByRole("navigation", { name: DICT[lang].header.navLabel })).toBeHidden();
      expect(await burger.boundingBox()).toMatchObject({ width: 42, height: 44 });

      await openPage(page, lang, 800);
      await expect(page.getByRole("button", { name: DICT[lang].header.menu })).toBeHidden();
      await expect(page.getByRole("navigation", { name: DICT[lang].header.navLabel })).toBeVisible();
    });

    test(`/${lang}: burger opens, closes on a link, and resets when the screen widens`, async ({ page }) => {
      await openPage(page, lang, 390);
      const burger = page.getByRole("button", { name: DICT[lang].header.menu });
      const menu = page.locator("#mobile-menu");

      await expect(burger).toHaveAttribute("aria-expanded", "false");
      await burger.click();
      await expect(burger).toHaveAttribute("aria-expanded", "true");
      await expect(menu).toBeVisible();
      for (const link of DICT[lang].header.nav) await expect(menu.getByRole("link", { name: link.label })).toBeVisible();

      await menu.getByRole("link", { name: DICT[lang].header.nav[2].label }).click();
      await expect(menu).toHaveCount(0);
      await expect(burger).toHaveAttribute("aria-expanded", "false");

      await burger.click();
      await expect(menu).toBeVisible();
      await page.setViewportSize({ width: 900, height: 900 });
      await expect(menu).toHaveCount(0);
    });
  }

  test("the header stays on one line at every width", async ({ page }) => {
    await page.goto("/fr");
    for (const width of [320, 360, 390, 640, 700, 768, 799, 800, 900, 1024, 1280]) {
      await page.setViewportSize({ width, height: 900 });
      const height = await page.locator("header").evaluate((el) => el.getBoundingClientRect().height);
      expect(height, `header height at ${width}px`).toBeLessThan(80);
    }
  });

  test("under 360px the sign-up button moves into the menu", async ({ page }) => {
    await openPage(page, "fr", 320);
    const signup = DICT.fr.header.signup;
    await expect(page.locator("header > div").getByRole("link", { name: signup })).toBeHidden();
    await page.getByRole("button", { name: DICT.fr.header.menu }).click();
    await expect(page.locator("#mobile-menu").getByRole("link", { name: signup })).toBeVisible();
    // The burger itself must still be fully on screen.
    const box = await page.getByRole("button", { name: DICT.fr.header.menu }).boundingBox();
    expect(box!.x + box!.width).toBeLessThanOrEqual(320);
  });
});
