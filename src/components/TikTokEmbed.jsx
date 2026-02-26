import React, { useEffect } from "react";

export default function TikTokEmbed({ videoId, username = "guatemalangolf" }) {
  useEffect(() => {
    // Load TikTok embed script once
    if (document.querySelector('script[src="https://www.tiktok.com/embed.js"]')) {
      // Script already exists; ask TikTok to re-scan embeds
      if (window.tiktokEmbedLoad) window.tiktokEmbedLoad();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    script.onload = () => {
      if (window.tiktokEmbedLoad) window.tiktokEmbedLoad();
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className="w-full">
      <blockquote
        className="tiktok-embed"
        cite={`https://www.tiktok.com/@${username}/video/${videoId}`}
        data-video-id={videoId}
        style={{ maxWidth: "100%", minWidth: "100%" }}
      >
        <section>
          <a
            target="_blank"
            rel="noreferrer"
            title={`@${username}`}
            href={`https://www.tiktok.com/@${username}`}
          >
            @{username}
          </a>
        </section>
      </blockquote>
    </div>
  );
}