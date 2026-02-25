// src/utils/seo.js

export const SITE_URL =
  process.env.NODE_ENV === "production"
    ? "https://guatemalangolf.com"
    : "http://localhost:3000";

// Simple DOM helper: NO React hooks here
export function setCanonical(pathOrUrl = "/") {
  if (typeof document === "undefined") return;

  let href = pathOrUrl;

  // If it's not a full URL, build one from SITE_URL
  if (!href.startsWith("http://") && !href.startsWith("https://")) {
    const base = SITE_URL.replace(/\/$/, "");
    href = base + (href.startsWith("/") ? href : "/" + href);
  }

  // Strip query params and hashes
  href = href.split(/[?#]/)[0];

  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }

  link.setAttribute("href", href);
}