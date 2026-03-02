// src/pages/Merch.jsx
import React from "react";
import { Helmet } from "react-helmet";
import { buildUrl, SITE_URL } from "../utils/seo";

export default function Merch() {
  const canonicalUrl = buildUrl("/merch");
  const ogImage = `${SITE_URL}/og-image.jpg`;

  return (
    <div className="space-y-8">
      <Helmet>
        <title>Guatemalan Golf Merch | Hats, Shirts & Golf Apparel</title>
        <meta
          name="description"
          content="Official Guatemalan Golf merch — volcano-inspired hats, shirts, and limited drops. Apparel built for golf, travel, and paradise vibes."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content="Guatemalan Golf Merch | Official Apparel" />
        <meta
          property="og:description"
          content="Volcano-inspired hats, shirts, and limited drops from Guatemalan Golf."
        />
        <meta property="og:image" content={ogImage} />
      </Helmet>

      <header className="rounded-3xl bg-white/80 border border-black/10 p-6 sm:p-8 backdrop-blur shadow-[0_22px_70px_rgba(0,0,0,0.08)]">
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gg-ink">
          Merch
        </h1>
        <p className="mt-2 text-gg-muted max-w-2xl">
          Official Guatemalan Golf merchandise is coming soon — volcano-inspired hats,
          premium shirts, and limited drops designed for golfers who travel for the vibe.
        </p>

        <div className="mt-6 rounded-2xl border border-black/10 bg-white/60 p-5">
          <p className="text-sm text-gg-ink font-semibold">Early access</p>
          <p className="mt-2 text-sm text-gg-muted">
            For early drops or custom inquiries, reach out on TikTok or Instagram.
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="https://www.tiktok.com/@guatemalangolf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-gg-lava px-5 py-2.5 text-sm font-semibold text-white
                         shadow-[0_18px_45px_rgba(230,57,46,0.22)]
                         hover:bg-gg-ember hover:scale-[1.02] transition
                         focus:outline-none focus:ring-2 focus:ring-gg-lava/45"
            >
              TikTok
            </a>

            {/* Optional: add your IG/WhatsApp once you’re ready */}
            {/* <a href="https://instagram.com/yourhandle" target="_blank" rel="noreferrer" className="...">Instagram</a> */}
            {/* <a href="https://wa.me/502XXXXXXXX" target="_blank" rel="noreferrer" className="...">WhatsApp</a> */}
          </div>
        </div>
      </header>
    </div>
  );
}