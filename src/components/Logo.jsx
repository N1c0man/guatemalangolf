import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/gg_nav_icon_256.png";

export default function Logo() {
  return (
    <Link
      to="/"
      className="inline-flex items-center gap-2 sm:gap-3 group min-w-0"
      aria-label="Guatemalan Golf"
    >
      <img
        src={logo}
        alt=""
        className="h-9 w-9 sm:h-10 sm:w-10 rounded-xl drop-shadow-[0_0_18px_rgba(255,80,0,0.18)] shrink-0"
        loading="eager"
      />

      {/* Text */}
      <span className="min-w-0 leading-none">
        <span className="block truncate text-white font-semibold tracking-[0.14em] uppercase text-[13px] sm:text-sm">
          Guatemalan
        </span>

        {/* On very small screens, keep this hidden to avoid wrapping.
            Shows starting at sm (640px). */}
        <span className="hidden sm:block truncate text-white/80 font-medium tracking-[0.18em] uppercase text-[11px]">
          Golf
        </span>
      </span>
    </Link>
  );
}