/**
 * First-party attribution capture. On landing anywhere on the site we read the
 * ad/UTM params from the URL and keep them in first-party storage so the demo
 * form can populate HubSpot hidden fields later, even across page views.
 *
 * Storage: sessionStorage for the whole set, plus a 90-day first-party cookie
 * for gclid (so a click that converts on a later visit is still attributable).
 * Every storage access is wrapped so a blocked/again-private browser never
 * throws.
 */

export const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

export type UtmKey = (typeof UTM_KEYS)[number];

export interface Attribution {
  gclid?: string;
  industry_interest?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
}

const STORE_KEY = "dozer_attribution";
const GCLID_COOKIE = "dozer_gclid";

function setCookie(name: string, value: string, days: number): void {
  try {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
  } catch {
    /* cookies blocked: ignore */
  }
}

function getCookie(name: string): string | undefined {
  try {
    const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
    return match ? decodeURIComponent(match[1]) : undefined;
  } catch {
    return undefined;
  }
}

/** Read the stored attribution set, merging in the gclid cookie if present. */
export function getStoredAttribution(): Attribution {
  let stored: Attribution = {};
  try {
    const raw = window.sessionStorage.getItem(STORE_KEY);
    if (raw) stored = JSON.parse(raw) as Attribution;
  } catch {
    stored = {};
  }
  const gclid = stored.gclid ?? getCookie(GCLID_COOKIE);
  return gclid ? { ...stored, gclid } : stored;
}

/**
 * Capture params from the current URL into storage. Call on every route change.
 * New values overwrite older ones; params that are absent leave stored values
 * untouched, so a deep link keeps the original UTM set.
 */
export function captureAttribution(): void {
  try {
    const params = new URLSearchParams(window.location.search);
    const next: Attribution = { ...getStoredAttribution() };

    const gclid = params.get("gclid");
    if (gclid) {
      next.gclid = gclid;
      setCookie(GCLID_COOKIE, gclid, 90);
    }

    for (const key of UTM_KEYS) {
      const value = params.get(key);
      if (value) next[key] = value;
    }

    const industry = params.get("industry");
    if (industry) next.industry_interest = industry;

    window.sessionStorage.setItem(STORE_KEY, JSON.stringify(next));
  } catch {
    /* storage blocked: attribution is best-effort, never fatal */
  }
}
