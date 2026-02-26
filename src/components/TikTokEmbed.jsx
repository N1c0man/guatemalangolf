import React, { useEffect, useRef } from "react";

export default function TikTokEmbed({ videoId, username = "guatemalangolf" }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const loadScript = () => {
      return new Promise((resolve) => {
        if (document.querySelector('script[src="https://www.tiktok.com/embed.js"]')) {
          resolve();
          return;
        }

        const script = document.createElement("script");
        script.src = "https://www.tiktok.com/embed.js";
        script.async = true;
        script.onload = resolve;
        document.body.appendChild(script);
      });
    };

    loadScript().then(() => {
      // Force TikTok to re-scan this blockquote
      if (containerRef.current) {
        const blockquote = containerRef.current.querySelector(".tiktok-embed");
        if (blockquote && window?.tiktokEmbedLoad) {
          window.tiktokEmbedLoad();
        } else {
          // fallback: re-insert script to force scan
          const script = document.createElement("script");
          script.src = "https://www.tiktok.com/embed.js";
          script.async = true;
          document.body.appendChild(script);
        }
      }
    });
  }, [videoId]);

  return (
    <div ref={containerRef} className="w-full">
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