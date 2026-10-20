"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { CONSENT_OPEN_EVENT, GA_ID, GA_INIT, getConsent, setConsent } from "@/lib/analytics";
import Link from "next/link";

function ConsentBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (getConsent() === null) setOpen(true);
    const reopen = () => setOpen(true);
    window.addEventListener(CONSENT_OPEN_EVENT, reopen);
    return () => window.removeEventListener(CONSENT_OPEN_EVENT, reopen);
  }, []);

  if (!open) return null;

  const choose = (value: "granted" | "denied") => {
    setConsent(value);
    setOpen(false);
  };

  return (
    <div role="region" aria-label="Analytics consent" className="fixed inset-x-4 bottom-4 z-50 mx-auto flex max-w-3xl flex-wrap items-center gap-x-6 gap-y-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_18px_40px_rgba(2,20,60,0.25)]">
      <p className="min-w-0 flex-[1_1_320px] text-[15px] leading-normal text-slate-700">
        We use Google Analytics to count visits and downloads. It only runs if you accept.{" "}
        <Link href="/manual#privacy" className="font-semibold">Privacy</Link>
      </p>
      <div className="flex gap-3">
        <button type="button" onClick={() => choose("denied")} className="min-h-11 cursor-pointer rounded-[10px] border border-slate-300 bg-white px-5 text-[15px] font-semibold text-slate-800 hover:bg-slate-50">
          Decline
        </button>
        <button type="button" onClick={() => choose("granted")} className="min-h-11 cursor-pointer rounded-[10px] bg-brand px-5 text-[15px] font-semibold text-white hover:bg-brand-dark">
          Accept
        </button>
      </div>
    </div>
  );
}

export function Analytics() {
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga-init" strategy="afterInteractive">{GA_INIT}</Script>
      <ConsentBanner />
    </>
  );
}
