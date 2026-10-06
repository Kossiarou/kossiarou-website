import AxeBuilder from "@axe-core/playwright";
import { expect, test, type Page } from "@playwright/test";
import { DICT, LANGS, focusIndicatorVisible, openPage } from "./helpers";

const TAGS = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa", "best-practice"];

async function violations(page: Page) {
  const results = await new AxeBuilder({ page }).withTags(TAGS).analyze();
  return results.violations.map(
    (v) => `${v.id} (${v.impact}): ${v.nodes.map((n) => n.target.join(" ")).slice(0, 4).join(" | ")}`,
  );
}

test.describe("axe-core (WCAG 2.2 AA + best practices)", () => {
  for (const lang of LANGS) {
    test(`/${lang} desktop, panels closed`, async ({ page }) => {
      await openPage(page, lang);
      expect(await violations(page)).toEqual([]);
    });

    test(`/${lang} desktop, FAQ open, EUR tab, ambassador form`, async ({ page }) => {
      await openPage(page, lang);
      for (const q of await page.locator("#faq button").all()) await q.click();
      await page.locator("#story-tab-EUR").click();
      await page.locator("#inscription button[aria-pressed]").nth(1).click();
      expect(await violations(page)).toEqual([]);
    });

    test(`/${lang} mobile with the menu open`, async ({ page }) => {
      await openPage(page, lang, 390);
      await page.getByRole("button", { name: DICT[lang].header.menu }).click();
      expect(await violations(page)).toEqual([]);
    });

    test(`/${lang} 404 page`, async ({ page }) => {
      await page.goto(`/${lang}/nope`);
      expect(await violations(page)).toEqual([]);
    });
  }
});

test.describe("keyboard", () => {
  test("first Tab stop is the skip link, and it lands on <main>", async ({ page }) => {
    for (const lang of LANGS) {
      await openPage(page, lang);
      await page.keyboard.press("Tab");
      const skip = page.getByRole("link", { name: DICT[lang].header.skip });
      await expect(skip).toBeFocused();
      await expect(skip).toBeVisible();
      await page.keyboard.press("Enter");
      await expect(page).toHaveURL(/#contenu$/);
      await expect(page.locator("main#contenu")).toBeFocused();
    }
  });

  for (const width of [1280, 390]) {
    test(`every Tab stop is named, visible and shows a focus ring (${width}px)`, async ({ page }) => {
      await openPage(page, "fr", width);
      const problems: string[] = [];
      const seen = new Set<string>();
      for (let i = 0; i < 120; i++) {
        await page.keyboard.press("Tab");
        const info = await page.evaluate(() => {
          const el = document.activeElement as HTMLElement | null;
          if (!el || el === document.body) return null;
          const r = el.getBoundingClientRect();
          const name = (el.getAttribute("aria-label") || el.textContent || el.getAttribute("placeholder") || "").trim().slice(0, 40);
          return { id: `${el.tagName}|${name}|${Math.round(r.x)}|${Math.round(r.y + window.scrollY)}`, name, tag: el.tagName.toLowerCase(), visible: r.width > 0 && r.height > 0 };
        });
        if (!info || seen.has(info.id)) break;
        seen.add(info.id);
        if (!info.name) problems.push(`${info.tag} has no accessible name`);
        if (!info.visible) problems.push(`${info.tag} "${info.name}" is not visible`);
        if (!(await focusIndicatorVisible(page))) problems.push(`${info.tag} "${info.name}" shows no focus ring`);
      }
      expect(seen.size).toBeGreaterThan(25);
      expect(problems).toEqual([]);
    });
  }

  test("anchor links are not hidden under the sticky header", async ({ page }) => {
    await openPage(page, "fr");
    for (const id of ["histoires", "tarifs", "faq", "inscription"]) {
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.locator(`a[href="#${id}"]`).first().evaluate((el) => (el as HTMLElement).click());
      await page.waitForTimeout(400);
      const { top, header } = await page.evaluate((i) => ({
        top: document.getElementById(i)!.getBoundingClientRect().top,
        header: document.querySelector("header")!.getBoundingClientRect().height,
      }), id);
      expect(top, `#${id}`).toBeGreaterThanOrEqual(header - 1);
    }
  });
});

test.describe("structure", () => {
  for (const lang of LANGS) {
    test(`/${lang}: landmarks, headings, accordion, form fields`, async ({ page }) => {
      await openPage(page, lang);
      await expect(page.locator("main")).toHaveCount(1);
      await expect(page.locator("h1")).toHaveCount(1);
      await expect(page.getByRole("navigation", { name: DICT[lang].header.navLabel })).toBeVisible();
      await expect(page.getByRole("navigation", { name: DICT[lang].header.languageLabel })).toBeVisible();

      const levels = await page.$$eval("h1,h2,h3,h4,h5,h6", (hs) => hs.map((h) => Number(h.tagName[1])));
      for (let i = 1; i < levels.length; i++) expect(levels[i] - levels[i - 1], `heading jump at #${i}`).toBeLessThanOrEqual(1);

      for (const q of await page.locator("#faq button").all()) {
        await expect(q).toHaveAttribute("aria-expanded", "false");
        await expect(q).toHaveAttribute("aria-controls", /faq-a-\d/);
      }

      const s = DICT[lang].signup;
      await expect(page.getByLabel(s.firstName)).toHaveAttribute("autocomplete", "given-name");
      await expect(page.getByLabel(s.countryCode)).toBeVisible();
      await expect(page.getByLabel(s.whatsapp, { exact: true })).toHaveAttribute("type", "tel");
    });

    test(`/${lang}: decorative content is hidden from screen readers`, async ({ page }) => {
      await openPage(page, lang);
      await expect(page.locator("#app [aria-hidden='true']")).toHaveCount(4); // the four phone mock-ups
      await expect(page.locator("#fonctionnalites [aria-hidden='true']")).toHaveCount(6); // feature icons
    });
  }
});

test.describe("preferences", () => {
  test.use({ reducedMotion: "reduce" });
  test("reduced motion switches the transitions off", async ({ page }) => {
    await openPage(page, "fr", 390);
    const duration = await page
      .locator("button[aria-controls='mobile-menu'] span")
      .first()
      .evaluate((el) => parseFloat(getComputedStyle(el).transitionDuration));
    expect(duration).toBeLessThan(0.001);
  });
});
