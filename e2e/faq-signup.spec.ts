import { expect, test } from "@playwright/test";
import { DICT, LANGS, openPage } from "./helpers";

for (const lang of LANGS) {
  test.describe(`FAQ /${lang}`, () => {
    test("one answer at a time, each question has an answer", async ({ page }) => {
      await openPage(page, lang);
      const faq = DICT[lang].faq;
      expect(faq.answers).toHaveLength(faq.questions.length);

      for (const [i, question] of faq.questions.entries()) {
        const button = page.getByRole("button", { name: question });
        await button.click();
        await expect(button).toHaveAttribute("aria-expanded", "true");
        await expect(page.locator(`#faq-a-${i}`)).toBeVisible();
        await expect(page.locator(`#faq-a-${i}`)).toHaveText(faq.answers[i]);
        // The previous one is closed again.
        if (i > 0) await expect(page.locator(`#faq-a-${i - 1}`)).toBeHidden();
      }
      // Clicking the open question closes it.
      await page.getByRole("button", { name: faq.questions[faq.questions.length - 1] }).click();
      await expect(page.locator(`#faq-a-${faq.questions.length - 1}`)).toBeHidden();
    });
  });

  test.describe(`signup form /${lang}`, () => {
    test("switches list, shows the intent field only for first users", async ({ page }) => {
      await openPage(page, lang);
      const s = DICT[lang].signup;
      const user = page.getByRole("button", { name: s.firstUser, exact: true });
      const amb = page.getByRole("button", { name: s.ambassador, exact: true });

      await expect(user).toHaveAttribute("aria-pressed", "true");
      await expect(page.getByLabel(s.intentLabel)).toBeVisible();
      await amb.click();
      await expect(amb).toHaveAttribute("aria-pressed", "true");
      await expect(page.getByLabel(s.intentLabel)).toHaveCount(0);
      await expect(page.getByRole("button", { name: `${s.submit}${s.submitAmbassadorSuffix}` })).toBeVisible();
    });

    test("requires the first name and the number, then opens the right WhatsApp group", async ({ page }) => {
      // No real window must open during the test: record the call instead.
      await page.addInitScript(() => {
        (window as unknown as { __opened: string[] }).__opened = [];
        window.open = ((url?: string | URL) => {
          (window as unknown as { __opened: string[] }).__opened.push(String(url));
          return null;
        }) as typeof window.open;
      });
      await openPage(page, lang);
      const s = DICT[lang].signup;

      // Empty form: the browser blocks the submission.
      await page.getByRole("button", { name: s.submit }).click();
      expect(await page.evaluate(() => (window as unknown as { __opened: string[] }).__opened)).toEqual([]);

      await page.getByLabel(s.firstName).fill("Aïcha");
      await page.getByLabel(s.whatsapp, { exact: true }).fill("0197000000");
      await page.getByRole("button", { name: s.submit }).click();

      await expect(page.getByRole("status")).toHaveText(s.thanks);
      const opened = await page.evaluate(() => (window as unknown as { __opened: string[] }).__opened);
      expect(opened).toHaveLength(1);
      expect(opened[0]).toMatch(/^https:\/\/chat\.whatsapp\.com\//);

      // The ambassador list opens a different group.
      await page.getByRole("button", { name: s.ambassador, exact: true }).click();
      await page.getByRole("button", { name: new RegExp(`^${s.submit}`) }).click();
      const after = await page.evaluate(() => (window as unknown as { __opened: string[] }).__opened);
      expect(after).toHaveLength(2);
      expect(after[1]).not.toBe(after[0]);
    });
  });
}
