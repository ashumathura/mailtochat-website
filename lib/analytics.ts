// Google Analytics 4. The measurement ID is public by design.
export const GA_ID = "G-PCDL2NFJPL";
export const CONSENT_KEY = "mc_analytics_consent";
export const CONSENT_OPEN_EVENT = "mc:consent-open";

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

// gtag.js expects the arguments object itself on the dataLayer, not an array.
function gtag(..._args: unknown[]) {
  window.dataLayer = window.dataLayer || [];
  // eslint-disable-next-line prefer-rest-params
  window.dataLayer.push(arguments);
}

export type Consent = "granted" | "denied";

export function getConsent(): Consent | null {
  try {
    const v = localStorage.getItem(CONSENT_KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

export function setConsent(value: Consent) {
  try {
    localStorage.setItem(CONSENT_KEY, value);
  } catch {}
  gtag("consent", "update", { analytics_storage: value });
}

export function track(event: string, params: Record<string, unknown> = {}) {
  gtag("event", event, { transport_type: "beacon", ...params });
}

// Inline snippet that runs before the first config call: everything starts denied,
// then a stored "granted" choice is applied before the first page view is sent.
export const GA_INIT = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',wait_for_update:500});
try{if(localStorage.getItem('${CONSENT_KEY}')==='granted'){gtag('consent','update',{analytics_storage:'granted'});}}catch(e){}
gtag('js',new Date());
gtag('config','${GA_ID}');
`;
