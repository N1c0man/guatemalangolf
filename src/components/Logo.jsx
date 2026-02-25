import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/gg_nav_icon_256.png";

export default function Logo() {
  return (
    <Link to="/" className="inline-flex items-center gap-3 group">
      <img
        src={logo}
        alt="Guatemalan Golf"
        className="h-10 w-10 rounded-xl drop-shadow-[0_0_18px_rgba(255,80,0,0.18)]"
        loading="eager"
      />
      <span className="text-white font-semibold tracking-[0.14em] uppercase">
        Guatemalan
      </span>
    </Link>
  );
}