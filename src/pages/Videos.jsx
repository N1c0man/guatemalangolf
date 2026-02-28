// src/pages/Videos.jsx
import React from "react";
import TikTokEmbed from "../components/TikTokEmbed";

const VIDEOS = [
  { id: "7348675586052721926" },
  { id: "7225341114599935258" },
  { id: "7389668097520585989" },
  { id: "7584129171689917708" },
];

function TikTokIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="currentColor"
    >
      {/* TikTok-like note mark (brand-ish, not exact logo) */}
      <path d="M16.5 3c.6 2.7 2.4 4.9 4.9 5.6v3.2c-2.1 0-4.1-.7-5.8-2v6.4c0 3.2-2.6 5.8-5.8 5.8S4 19.4 4 16.2s2.6-5.8 5.8-5.8c.5 0 1 .1 1.5.2v3.3c-.5-.2-1-.4-1.5-.4-1.4 0-2.6 1.2-2.6 2.6S8.4 18.8 9.8 18.8s2.6-1.2 2.6-2.6V3h4.1z" />
    </svg>
  );
}

export default function Videos() {
  return (
    <div className="space-y-8">
      {/* Header (premium “glass” card) */}
      <header className="rounded-3xl bg-white/80 border border-black/10 p-6 sm:p-8 backdrop-blur shadow-[0_22px_70px_rgba(0,0,0,0.08)]">
        <div className="flex items-start gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gg-sand border border-black/10">
            <TikTokIcon className="h-5 w-5 text-gg-lava" />
          </span>

          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gg-ink">
              Videos
            </h1>
            <p className="mt-2 text-gg-muted max-w-2xl">
              Reels from Guatemala — courses, swings, sunsets, and the vibes.
            </p>

            {/* Branded sub-line */}
            <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-gg-sand/70 border border-black/10 px-3 py-1 text-xs text-gg-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-gg-lava" />
              Curated from{" "}
              <span className="font-semibold text-gg-ink">@guatemalangolf</span>
            </div>
          </div>
        </div>
      </header>

      {/* TikTok grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {VIDEOS.map((v) => (
          <div
            key={v.id}
            className={[
              "rounded-3xl bg-gg-sand p-4 sm:p-6 border border-black/10",
              "shadow-[0_20px_60px_rgba(0,0,0,0.10)]",
              // Hover lift
              "transition-transform duration-300 ease-out",
              "hover:-translate-y-1 hover:shadow-[0_26px_80px_rgba(0,0,0,0.14)]",
            ].join(" ")}
          >
            <TikTokEmbed videoId={v.id} username="guatemalangolf" />
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="rounded-3xl bg-white/80 border border-black/10 p-6 sm:p-8 backdrop-blur shadow-[0_22px_70px_rgba(0,0,0,0.08)]">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-gg-ink">
              Follow @guatemalangolf on TikTok
            </h2>
            <p className="mt-1 text-gg-muted">
              New clips drop regularly — tournaments, course views, and merch
              moments.
            </p>
          </div>

          <a
            href="https://www.tiktok.com/@guatemalangolf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-gg-lava px-6 py-3 text-sm font-semibold text-white
                       shadow-[0_18px_45px_rgba(230,57,46,0.28)]
                       hover:bg-gg-ember hover:shadow-[0_22px_55px_rgba(255,122,26,0.22)]
                       hover:scale-[1.02] transition
                       focus:outline-none focus:ring-2 focus:ring-gg-lava/45"
          >
            Open TikTok Profile
          </a>
        </div>
      </div>
    </div>
  );
}