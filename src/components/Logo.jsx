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
        className="
          h-9 w-9 sm:h-10 sm:w-10
          rounded-xl
          shrink-0
          transition
          drop-shadow-[0_0_16px_rgba(255,59,48,0.35)]
          group-hover:drop-shadow-[0_0_22px_rgba(255,59,48,0.55)]
        "
        loading="eager"
      />

      <span className="min-w-0 leading-tight">
        <span className="
          block truncate
          text-white
          font-semibold
          tracking-[0.16em]
          uppercase
          text-[13px] sm:text-sm
        ">
          Guatemalan
        </span>

        <span className="
          hidden sm:block truncate
          text-gg-lava
          font-medium
          tracking-[0.18em]
          uppercase
          text-[11px]
        ">
          Golf
        </span>
      </span>
    </Link>
  );
}