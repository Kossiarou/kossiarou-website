// Measurement configuration and events. Everything is optional: with no ID set in the
// environment, no script is loaded and no cookie banner is shown.
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
export const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID;
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

export const ANALYTICS_ENABLED = Boolean(GTM_ID || GA4_ID || META_PIXEL_ID);

export const CONSENT_KEY = "kossiarou-consent";
export const CONSENT_REOPEN_EVENT = "kossiarou:consent-reopen";
export const UTM_KEY = "kossiarou-utm";

export type ConsentChoice = "granted" | "denied";

type Params = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    fbq?: (...args: unknown[]) => void;
  }
}

// Sends an event to Google Tag Manager / GA4 (dataLayer) and, for leads, to the Meta pixel.
// Calling it before consent is harmless: the scripts that read these calls are not loaded yet.
export function trackEvent(name: string, params: Params = {}, eventId?: string) {
  if (typeof window === "undefined" || !ANALYTICS_ENABLED) return;
  try {
    window.dataLayer = window.dataLayer ?? [];
    window.dataLayer.push({ event: name, ...params, ...(eventId && { event_id: eventId }) });
    if (name === "generate_lead") {
      window.fbq?.("track", "Lead", params, eventId ? { eventID: eventId } : undefined);
    }
  } catch {
    // Measurement must never break the page.
  }
}

// UTM parameters of the visit, kept for the whole session and sent with the sign-up.
export function readUtm(): Record<string, string> {
  try {
    return JSON.parse(window.sessionStorage.getItem(UTM_KEY) ?? "{}");
  } catch {
    return {};
  }
}

export function storeUtm() {
  try {
    const found: Record<string, string> = {};
    new URLSearchParams(window.location.search).forEach((value, key) => {
      if (key.startsWith("utm_")) found[key] = value.slice(0, 100);
    });
    if (Object.keys(found).length > 0) {
      window.sessionStorage.setItem(UTM_KEY, JSON.stringify(found));
    }
  } catch {
    // Storage can be blocked (private window): the UTM are then simply not kept.
  }
}
