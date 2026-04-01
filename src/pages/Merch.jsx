// src/pages/Merch.jsx
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { buildUrl, SITE_URL } from "../utils/seo";

const HAT_IMAGES = [
  {
    src: "/images/merch/hat-1.jpg",
    alt: "Guatemalan Golf hats displayed together outdoors",
    title: "Collection Preview",
  },
  {
    src: "/images/merch/hat-2.jpg",
    alt: "Red Guatemalan Golf hat on colorful Guatemalan textile",
    title: "Red Cap",
  },
  {
    src: "/images/merch/hat-3.jpg",
    alt: "Gray Guatemalan Golf hat with 2026 embroidery detail",
    title: "Gray 2026 Edition",
  },
  {
    src: "/images/merch/hat-4.jpg",
    alt: "Black white and gray Guatemalan Golf hats on display",
    title: "Color Options",
  },
  {
    src: "/images/merch/hat-5.jpg",
    alt: "Close-up of gray Guatemalan Golf hat side detail",
    title: "Detail View",
  },
];

const TIKTOK_VIDEO_URL =
  "https://www.tiktok.com/@guatemalangolf/video/7623198212916137236";

const WHATSAPP_URL = "https://wa.me/50242191025";

function getTikTokVideoId(url) {
  const match = url.match(/\/video\/(\d+)/);
  return match ? match[1] : null;
}

function TikTokEmbed({ url }) {
  const videoId = getTikTokVideoId(url);

  useEffect(() => {
    if (!videoId) return;

    const existingScript = document.querySelector(
      'script[src="https://www.tiktok.com/embed.js"]'
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://www.tiktok.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    } else if (window.tiktokEmbedLoad) {
      window.tiktokEmbedLoad();
    }
  }, [videoId]);

  if (!videoId) {
    return (
      <div className="rounded-2xl border border-dashed border-black/15 bg-white/70 p-6 text-sm text-gg-muted">
        TikTok video could not load. Please double-check the TikTok video URL.
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-black/10 bg-white/80 p-3 shadow-[0_18px_45px_rgba(0,0,0,0.08)]">
      <blockquote
        className="tiktok-embed"
        cite={url}
        data-video-id={videoId}
        style={{ maxWidth: "605px", minWidth: "325px", margin: "0 auto" }}
      >
        <section>
          <a href={url} target="_blank" rel="noreferrer">
            View this video on TikTok
          </a>
        </section>
      </blockquote>
    </div>
  );
}

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
        <meta
          property="og:title"
          content="Guatemalan Golf Merch | Official Apparel"
        />
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

        <p className="mt-2 max-w-2xl text-gg-muted">
          Official Guatemalan Golf merchandise is here — volcano-inspired hats
          designed for golfers who love travel, culture, and paradise vibes.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-[1.25fr_0.75fr]">
          <div className="rounded-2xl border border-black/10 bg-white/70 p-5">
            <p className="text-sm font-semibold text-gg-ink">Now featuring</p>
            <h2 className="mt-1 text-xl font-semibold tracking-tight text-gg-ink">
              Signature Guatemalan Golf Hats
            </h2>
            <p className="mt-2 text-sm leading-6 text-gg-muted">
              Limited-run caps inspired by Guatemala’s volcanic landscape and golf
              lifestyle. Reach out directly for availability, pricing, and shipping.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-gg-lava px-5 py-2.5 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(230,57,46,0.22)] transition hover:bg-gg-ember hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-gg-lava/45"
              >
                Order on WhatsApp
              </a>

              <a
                href="https://www.tiktok.com/@guatemalangolf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-semibold text-gg-ink transition hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black/20"
              >
                Visit TikTok
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-black/10 bg-gradient-to-br from-white to-orange-50/70 p-5">
            <p className="text-sm font-semibold text-gg-ink">How to buy</p>
            <ol className="mt-3 space-y-2 text-sm leading-6 text-gg-muted">
              <li>1. Browse the photos below</li>
              <li>2. Pick your favorite color or style</li>
              <li>3. Message on WhatsApp for details</li>
              <li>4. Check TikTok for more merch drops</li>
            </ol>
          </div>
        </div>
      </header>

      <section className="rounded-3xl bg-white/80 border border-black/10 p-6 sm:p-8 backdrop-blur shadow-[0_22px_70px_rgba(0,0,0,0.08)]">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <p className="text-sm font-semibold text-gg-ink">Photo gallery</p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-gg-ink">
              Hat collection
            </h2>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-gg-ink transition hover:bg-black hover:text-white"
          >
            Ask about availability
          </a>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {HAT_IMAGES.map((image, index) => (
            <figure
              key={index}
              className={`overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_14px_38px_rgba(0,0,0,0.06)] ${
                index === 0 ? "sm:col-span-2 xl:col-span-2" : ""
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <figcaption className="border-t border-black/5 px-4 py-3">
                <p className="text-sm font-semibold text-gg-ink">{image.title}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="rounded-3xl bg-white/80 border border-black/10 p-6 sm:p-8 backdrop-blur shadow-[0_22px_70px_rgba(0,0,0,0.08)]">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold text-gg-ink">Video preview</p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-gg-ink">
              See the hats on TikTok
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-gg-muted">
              See the hats in a more natural lifestyle setting and contact us
              directly for ordering.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="https://www.tiktok.com/@guatemalangolf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white transition hover:scale-[1.02]"
              >
                Follow on TikTok
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-gg-lava px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gg-ember hover:scale-[1.02]"
              >
                Contact on WhatsApp
              </a>
            </div>
          </div>

          <div>
            <TikTokEmbed url={TIKTOK_VIDEO_URL} />
          </div>
        </div>
      </section>
    </div>
  );
}