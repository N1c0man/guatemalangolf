import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const nav = [
  { to: "/", label: "Home" },
  { to: "/videos", label: "Videos" },
  { to: "/merch", label: "Merch" },
  { to: "/about", label: "About" },
];

export default function TopNav() {
  return (
    <header className="sticky top-0 z-50">
      {/* Glass bar */}
      <div className="border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <Logo />

          <nav className="flex items-center gap-2">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  [
                    "px-3 py-2 rounded-full text-sm tracking-[0.12em] transition",
                    "border border-white/10",
                    isActive
                      ? "bg-white/10 text-white shadow-[0_0_24px_rgba(255,80,0,0.18)]"
                      : "bg-white/5 text-white/70 hover:text-white hover:bg-white/10",
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>

      {/* Thin lava accent line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-gg-lava/60 to-transparent" />
    </header>
  );
}