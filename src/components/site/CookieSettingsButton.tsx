"use client";

import { ANALYTICS_ENABLED, CONSENT_REOPEN_EVENT } from "@/lib/analytics";

// Lets the visitor change their mind about cookies. Hidden when no measurement tool is set up.
export function CookieSettingsButton({ label }: { label: string }) {
  if (!ANALYTICS_ENABLED) return null;
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(CONSENT_REOPEN_EVENT))}
      className="relative cursor-pointer text-xs text-ink-soft underline before:absolute before:inset-x-0 before:-inset-y-3"
    >
      {label}
    </button>
  );
}
