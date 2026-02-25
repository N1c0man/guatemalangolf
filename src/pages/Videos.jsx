import React, { useEffect } from "react";

const TIKTOKS = [
  // Replace these with your real TikTok URLs
  "https://www.tiktok.com/@scout2015/video/6718335390845095173",
  "https://www.tiktok.com/@scout2015/video/6717542635443204358",
  "https://www.tiktok.com/@scout2015/video/6718335390845095173",
];

function TikTokEmbed({ url }) {
  useEffect(() => {
    // ensure script exists once
    if (!document.querySelector('script[src="https://www.tiktok.com/embed.js"]')) {
      const s = document.createElement("script");
      s.src = "https://www.tiktok.com/embed.js";
      s.async = true;
      document.body.appendChild(s);
    } else {
      // re-process embeds on route change
      // TikTok script scans DOM; a small delay helps after render
      setTimeout(() => {
        // no official global API; re-adding script is the reliable approach if needed
      }, 50);
    }
  }, []);

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-glow">
      <blockquote
        className="tiktok-embed"
        cite={url}
        data-video-id={url.split("/video/")[1]?.split("?")[0]}
        style={{ maxWidth: 605, minWidth: 325, margin: "0 auto" }}
      >
        <section>
          <a target="_blank" rel="noreferrer" href={url}>
            Watch on TikTok
          </a>
        </section>
      </blockquote>
    </div>
  );
}

export default function Videos() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Videos
        </h1>
        <p className="text-white/70 max-w-2xl">
          Reels from Guatemala — courses, swings, sunsets, and the vibes.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {TIKTOKS.map((url) => (
          <TikTokEmbed key={url} url={url} />
        ))}
      </div>
    </div>
  );
}