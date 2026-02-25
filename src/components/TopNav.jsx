import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo";

const nav = [
  { to: "/", label: "Home" },
  { to: "/videos", label: "Videos" },
  { to: "/merch", label: "Merch" },
  { to: "/about", label: "About" },
];

function IconHamburger({ className = "" }) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconX({ className = "" }) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

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
      isActive
        ? "bg-white/10 text-white shadow-[0_0_18px_rgba(255,80,0,0.12)]"
        : "bg-white/5 text-white/80 hover:bg-white/10",
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
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={linkClass}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            className={[
              "md:hidden inline-flex items-center justify-center",
              "h-10 w-10 rounded-full",
              "border border-white/10 bg-white/5",
              "text-white/90 hover:text-white",
              "hover:bg-white/10 transition",
              // subtle lava glow to match your theme
              "shadow-[0_0_0_0_rgba(255,80,0,0)] hover:shadow-[0_0_24px_rgba(255,80,0,0.18)]",
              "focus:outline-none focus:ring-2 focus:ring-gg-lava/40 focus:ring-offset-0",
            ].join(" ")}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <IconX className="text-white" /> : <IconHamburger className="text-white" />}
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
                  <span className="text-gg-lava/70">›</span>
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