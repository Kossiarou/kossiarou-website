import type { Page } from "@playwright/test";
import { fr } from "../src/i18n/dictionaries/fr";
import { en } from "../src/i18n/dictionaries/en";

export const LANGS = ["fr", "en"] as const;
export type Lang = (typeof LANGS)[number];

/** Texts come from the dictionaries, so tests keep passing when the copy changes. */
export const DICT = { fr, en } as const;

/** Currency codes of the story tabs, in display order (see StorySection.tsx). */
export const STORY_CODES = ["CNY", "EUR", "AED", "USD"] as const;

/** Widths from small phones to large desktops, around every breakpoint of the site. */
export const WIDTHS = [280, 320, 360, 390, 430, 639, 640, 768, 799, 800, 1024, 1280, 1920, 2560];

export async function openPage(page: Page, lang: Lang, width = 1280) {
  await page.setViewportSize({ width, height: 900 });
  await page.goto(`/${lang}`);
  await page.waitForLoadState("networkidle");
}

/** Extra pixels of horizontal scroll (0 means the page fits the screen). */
export function horizontalOverflow(page: Page) {
  return page.evaluate(
    () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
  );
}

/** True when the focused element, or the group that contains it, shows an outline. */
export function focusIndicatorVisible(page: Page) {
  return page.evaluate(() => {
    const hasOutline = (el: Element) => {
      const cs = getComputedStyle(el);
      return cs.outlineStyle !== "none" && parseFloat(cs.outlineWidth) > 0;
    };
    let el: Element | null = document.activeElement;
    if (!el || el === document.body) return false;
    if (hasOutline(el)) return true;
    for (el = el.parentElement; el && el !== document.body; el = el.parentElement) {
      if (el.matches(":focus-within") && hasOutline(el)) return true;
    }
    return false;
  });
}
