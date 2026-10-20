"use client";

import { CONSENT_OPEN_EVENT } from "@/lib/analytics";

export function CookieSettings() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(CONSENT_OPEN_EVENT))}
      className="cursor-pointer bg-transparent p-0 text-[15px] text-slate-700 hover:text-brand"
    >
      Cookie settings
    </button>
  );
}
