import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo";

const nav = [
  { to: "/", label: "Home" },
  { to: "/videos", label: "Videos" },
  { to: "/merch", label: "Merch" },
  { to: "/about", label: "About" },
];

export default function TopNav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close the menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Close on Escape
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const linkClass = ({ isActive }) =>
    [
      "px-3 py-2 rounded-full text-sm tracking-[0.12em] transition",
      "border border-white/10",
      isActive
        ? "bg-white/10 text-white shadow-[0_0_24px_rgba(255,80,0,0.18)]"
        : "bg-white/5 text-white/70 hover:text-white hover:bg-white/10",
    ].join(" ");

  const mobileLinkClass = ({ isActive }) =>
    [
      "flex items-center justify-between rounded-xl px-4 py-3 text-sm tracking-[0.12em] transition",
      "border border-white/10",
      isActive ? "bg-white/10 text-white" : "bg-white/5 text-white/80 hover:bg-white/10",
    ].join(" ");

  return (
    <header className="sticky top-0 z-50">
      {/* Glass bar */}
      <div className="border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-2">
            {nav.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === "/"} className={linkClass}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-3 py-2 text-white/90 hover:bg-white/10 transition"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {/* Simple hamburger / X */}
            <span className="text-sm tracking-[0.12em]">{open ? "CLOSE" : "MENU"}</span>
          </button>
        </div>
      </div>

      {/* Thin lava accent line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-gg-lava/60 to-transparent" />

      {/* Mobile dropdown panel */}
      {open && (
        <div className="md:hidden border-b border-white/10 bg-black/80 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 py-4">
            <div className="grid gap-2">
              {nav.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  className={mobileLinkClass}
                  onClick={() => setOpen(false)}
                >
                  <span>{item.label}</span>
                  <span className="text-white/40">›</span>
                </NavLink>
              ))}
            </div>

            <div className="mt-4 text-xs text-white/40">
              Guatemala • Golf • Volcano Views
            </div>
          </div>
        </div>
      )}
    </header>
  );
}