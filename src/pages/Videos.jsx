// src/pages/Videos.jsx
import React from "react";
import TikTokEmbed from "../components/TikTokEmbed";

const VIDEOS = [
  { id: "7600564842461793556" },
  { id: "7610641142526283028" },
  { id: "7593014706122575116" },
  { id: "7601152638805232917" },
];

export default function Videos() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <header className="rounded-3xl bg-white/70 border border-black/10 p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gg-ink">
          Videos
        </h1>
        <p className="mt-2 text-gg-muted max-w-2xl">
          Reels from Guatemala — courses, swings, sunsets, and the vibes.
        </p>
      </header>

      {/* TikTok grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {VIDEOS.map((v) => (
          <div
            key={v.id}
            className="rounded-3xl bg-gg-sand p-4 sm:p-6 border border-black/10 shadow-[0_20px_60px_rgba(0,0,0,0.10)]"
          >
            <TikTokEmbed videoId={v.id} username="guatemalangolf" />
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="rounded-3xl bg-white/70 border border-black/10 p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-gg-ink">
              Follow @guatemalangolf on TikTok
            </h2>
            <p className="mt-1 text-gg-muted">
              New clips drop regularly — tournaments, course views, and merch moments.
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