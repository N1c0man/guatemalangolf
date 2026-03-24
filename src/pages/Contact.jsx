import React from "react";
import { Helmet } from "react-helmet";
import { buildUrl, SITE_URL } from "../utils/seo";

export default function Contact() {
  const canonicalUrl = buildUrl("/contact");

  return (
    <div className="space-y-8">
      <Helmet>
        <title>Contact Guatemalan Golf | Collaborations & Inquiries</title>
        <meta
          name="description"
          content="Contact Guatemalan Golf for collaborations, travel partnerships, merch inquiries, and golf tourism opportunities in Guatemala."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content="Contact Guatemalan Golf" />
        <meta
          property="og:description"
          content="Collaborations, partnerships, and inquiries."
        />
        <meta property="og:image" content={`${SITE_URL}/og-image.jpg`} />
      </Helmet>

      <header className="rounded-3xl bg-white/80 border border-black/10 p-6 sm:p-8 backdrop-blur shadow-[0_22px_70px_rgba(0,0,0,0.08)]">
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gg-ink">
          Contact
        </h1>

        <p className="mt-3 text-gg-muted max-w-2xl">
          For collaborations, golf tourism partnerships, merch inquiries, or
          media features — reach out below.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">

          {/* WhatsApp */}
          <a
            href="https://wa.me/50242191025?text=Hi%20I%E2%80%99m%20interested%20in%20golf%20in%20Guatemala"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-green-200 bg-green-50 p-5 hover:shadow-md hover:scale-[1.02] transition"
          >
            <p className="font-semibold text-green-700">WhatsApp</p>
            <p className="text-sm text-green-600 mt-1">
              Plan your golf trip directly with us or call for more info
            </p>
          </a>

          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@guatemalangolf"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-black/10 bg-white/70 p-5 hover:shadow-md transition"
          >
            <p className="font-semibold text-gg-ink">TikTok</p>
            <p className="text-sm text-gg-muted mt-1">
              @guatemalangolf
            </p>
          </a>

          {/* Future: Instagram */}
          {/*
          <a
            href="https://instagram.com/yourhandle"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-black/10 bg-white/70 p-5 hover:shadow-md transition"
          >
            <p className="font-semibold text-gg-ink">Instagram</p>
          </a>
          */}

          {/* Future: Email */}
          {/*
          <a
            href="mailto:youremail@example.com"
            className="rounded-2xl border border-black/10 bg-white/70 p-5 hover:shadow-md transition"
          >
            <p className="font-semibold text-gg-ink">Email</p>
          </a>
          */}
        </div>
      </header>
    </div>
  );
}