import { expect, test } from "@playwright/test";
import { DICT, LANGS, WIDTHS, horizontalOverflow } from "./helpers";

for (const lang of LANGS) {
  test(`/${lang}: no horizontal scroll from 280px to 2560px`, async ({ page }) => {
    await page.goto(`/${lang}`);
    await page.waitForLoadState("networkidle");
    // Open the hidden panels too: the longest FAQ answers and the longest story must fit as well.
    for (const q of await page.locator("#faq button").all()) await q.click();
    for (const code of ["CNY", "EUR", "AED", "USD"]) {
      await page.locator(`#story-tab-${code}`).click();
      for (const width of WIDTHS) {
        await page.setViewportSize({ width, height: 900 });
        expect(await horizontalOverflow(page), `${lang} ${code} tab at ${width}px`).toBeLessThanOrEqual(0);
      }
    }
  });
}

test("404 page has no horizontal scroll either", async ({ page }) => {
  for (const [path, lang] of [["/fr/nope", "fr"], ["/en/nope", "en"]] as const) {
    await page.goto(path);
    for (const width of [280, 360, 768, 1280]) {
      await page.setViewportSize({ width, height: 900 });
      expect(await horizontalOverflow(page), `${lang} 404 at ${width}px`).toBeLessThanOrEqual(0);
    }
  }
});

test("fee table: table from 640px, stacked list below, never a scroll", async ({ page }) => {
  await page.goto("/fr");
  const rows = DICT.fr.pricing.feesRows.length;

  await page.setViewportSize({ width: 1280, height: 900 });
  await expect(page.locator('[role="table"] [role="row"]:visible')).toHaveCount(rows + 1); // + header row
  await expect(page.locator('[role="columnheader"]:visible')).toHaveCount(3);

  await page.setViewportSize({ width: 390, height: 900 });
  await expect(page.locator('[role="table"] [role="row"]:visible')).toHaveCount(rows);
  await expect(page.locator('[role="columnheader"]:visible')).toHaveCount(0);
  expect(await horizontalOverflow(page)).toBeLessThanOrEqual(0);
});

test("the hero card never hides the face on desktop (bottom-anchored)", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto("/fr");
  const photo = await page.locator("#top img").first().boundingBox();
  const card = await page.locator("#top").getByText(DICT.fr.hero.conversionLabel).locator("xpath=..").boundingBox();
  // The face sits in the top half of the photo: the conversion card must start below it.
  expect(card!.y).toBeGreaterThan(photo!.y + photo!.height * 0.3);
});

test("images are served resized, not at their original size", async ({ page }) => {
  const widths: number[] = [];
  page.on("response", (r) => {
    const m = r.url().match(/\/_next\/image\?.*[?&]w=(\d+)/);
    if (m) widths.push(Number(m[1]));
  });
  await page.setViewportSize({ width: 390, height: 900 });
  await page.goto("/fr");
  await page.waitForLoadState("networkidle");
  for (let y = 0; y < 6000; y += 500) {
    await page.evaluate((v) => window.scrollTo(0, v), y);
    await page.waitForTimeout(80);
  }
  await page.waitForLoadState("networkidle");
  expect(widths.length).toBeGreaterThanOrEqual(4);
  for (const w of widths) expect(w, "requested image width").toBeLessThanOrEqual(1080);
});
