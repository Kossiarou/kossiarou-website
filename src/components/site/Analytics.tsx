"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import Link from "next/link";
import type { Dictionary } from "@/i18n/dictionaries";
import {
  ANALYTICS_ENABLED,
  CONSENT_KEY,
  CONSENT_REOPEN_EVENT,
  GA4_ID,
  GTM_ID,
  META_PIXEL_ID,
  storeUtm,
  trackEvent,
  type ConsentChoice,
} from "@/lib/analytics";

function readConsent(): ConsentChoice | null {
  try {
    const value = window.localStorage.getItem(CONSENT_KEY);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null;
  }
}

const GTM_SNIPPET = `window.dataLayer=window.dataLayer||[];window.dataLayer.push({"gtm.start":new Date().getTime(),event:"gtm.js"});var f=document.getElementsByTagName("script")[0],j=document.createElement("script");j.async=true;j.src="https://www.googletagmanager.com/gtm.js?id=${GTM_ID}";f.parentNode.insertBefore(j,f);`;

const GA4_SNIPPET = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag("js",new Date());gtag("config","${GA4_ID}");`;

const PIXEL_SNIPPET = `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version="2.0";n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","${META_PIXEL_ID}");fbq("track","PageView");`;

// Cookie banner, consent-gated measurement scripts and click events.
export function Analytics({ dict }: { dict: Dictionary["consent"] }) {
  const [consent, setConsent] = useState<ConsentChoice | null>(null);
  const [bannerOpen, setBannerOpen] = useState(false);

  useEffect(() => {
    storeUtm();
    // The saved choice lives in the browser: it can only be read once the page is mounted.
    const saved = readConsent();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setConsent(saved);
    if (ANALYTICS_ENABLED && saved === null) setBannerOpen(true);
    const reopen = () => setBannerOpen(true);
    window.addEventListener(CONSENT_REOPEN_EVENT, reopen);
    return () => window.removeEventListener(CONSENT_REOPEN_EVENT, reopen);
  }, []);

  // Click and scroll events (generate_lead and join_group are sent by the sign-up form).
  useEffect(() => {
    if (!ANALYTICS_ENABLED) return;
    const onClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      if (!target?.closest) return;
      if (target.closest('a[href^="https://wa.me/"]')) trackEvent("click_whatsapp");
      const faq = target.closest("[data-track='faq_open']");
      // Only the opening counts: skip the click that closes the question.
      if (faq && faq.getAttribute("aria-expanded") !== "true" && !faq.closest("details[open]")) {
        trackEvent("faq_open");
      }
    };
    let scrolled = false;
    const onScroll = () => {
      const doc = document.documentElement;
      if (scrolled || doc.scrollHeight <= window.innerHeight) return;
      if ((window.scrollY + window.innerHeight) / doc.scrollHeight >= 0.75) {
        scrolled = true;
        trackEvent("scroll_75");
      }
    };
    document.addEventListener("click", onClick);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  if (!ANALYTICS_ENABLED) return null;

  function choose(choice: ConsentChoice) {
    try {
      window.localStorage.setItem(CONSENT_KEY, choice);
    } catch {
      // The choice then only lasts for this visit.
    }
    setConsent(choice);
    setBannerOpen(false);
  }

  return (
    <>
      {consent === "granted" && GTM_ID && (
        <Script id="gtm" strategy="afterInteractive">
          {GTM_SNIPPET}
        </Script>
      )}
      {consent === "granted" && !GTM_ID && GA4_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4" strategy="afterInteractive">
            {GA4_SNIPPET}
          </Script>
        </>
      )}
      {consent === "granted" && META_PIXEL_ID && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {PIXEL_SNIPPET}
        </Script>
      )}

      {bannerOpen && (
        <div
          role="dialog"
          aria-label={dict.title}
          className="fixed inset-x-3 bottom-3 z-50 mx-auto flex max-w-[720px] flex-col gap-3 rounded-2xl border border-dark-border bg-ink p-5 text-cream shadow-[0_12px_40px_rgba(30,34,51,0.35)] sm:flex-row sm:items-center"
        >
          <div className="flex flex-1 flex-col gap-1">
            <span className="text-base font-bold">{dict.title}</span>
            <p className="text-sm leading-[1.5] text-dark-text-body">
              {dict.text}{" "}
              <Link href={dict.privacyHref} className="underline">
                {dict.privacy}
              </Link>
            </p>
          </div>
          <div className="flex flex-none gap-2">
            <button
              type="button"
              onClick={() => choose("denied")}
              className="min-h-11 cursor-pointer rounded-xl border border-field-border px-4 py-2 text-[15px] font-bold hover:bg-dark-surface"
            >
              {dict.refuse}
            </button>
            <button
              type="button"
              onClick={() => choose("granted")}
              className="min-h-11 cursor-pointer rounded-xl bg-gold px-4 py-2 text-[15px] font-bold text-ink hover:bg-gold-hover"
            >
              {dict.accept}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
