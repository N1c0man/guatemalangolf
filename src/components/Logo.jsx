import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/gg_nav_icon_256.png";

export default function Logo() {
  return (
    <Link
      to="/"
      aria-label="Guatemalan Golf"
      className={[
        "group inline-flex items-center gap-2 sm:gap-3 min-w-0",
        "relative",
        "transition-transform duration-300 ease-out",
        "hover:scale-[1.02] active:scale-[0.99]",
        // underline accent (appears on hover)
        "after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-1",
        "after:h-px after:rounded-full",
        "after:bg-gradient-to-r after:from-transparent after:via-gg-ember/70 after:to-transparent",
        "after:opacity-0 after:scale-x-75 after:origin-center",
        "after:transition after:duration-300",
        "group-hover:after:opacity-100 group-hover:after:scale-x-100",
      ].join(" ")}
    >
      {/* Icon wrapper for pulse + glow */}
      <span className="relative shrink-0">
        {/* Soft warm halo (lighter + cleaner for daylight theme) */}
        <span
          aria-hidden="true"
          className={[
            "absolute inset-0 rounded-xl",
            "bg-gg-ember/15 blur-md",
            "animate-emberPulse",
          ].join(" ")}
        />

        <img
          src={logo}
          alt=""
          loading="eager"
          className={[
            "relative",
            "h-9 w-9 sm:h-10 sm:w-10 rounded-xl",
            "transition duration-300 ease-out",
            // toned-down glow for light UI
            "drop-shadow-[0_8px_18px_rgba(0,0,0,0.12)]",
            "group-hover:drop-shadow-[0_10px_22px_rgba(230,57,46,0.18)]",
          ].join(" ")}
        />
      </span>

      {/* Text */}
      <span className="min-w-0 leading-tight">
        <span className="block truncate text-gg-ink font-semibold tracking-[0.16em] uppercase text-[13px] sm:text-sm">
          Guatemalan
        </span>
        <span className="hidden sm:block truncate text-gg-lava font-medium tracking-[0.18em] uppercase text-[11px]">
          Golf
        </span>
      </span>
    </Link>
  );
}