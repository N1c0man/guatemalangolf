export const SITE_URL = "https://www.guatemalangolf.com";

export function buildUrl(path = "") {
  if (!path || path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}