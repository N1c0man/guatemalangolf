import React from "react";
import { Outlet } from "react-router-dom";
import TopNav from "../components/TopNav";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-gg-ink text-white">
      {/* Lava glow backdrop */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-gg-lava/25 blur-[90px]" />
        <div className="absolute top-40 -right-40 h-[520px] w-[520px] rounded-full bg-gg-lava/20 blur-[100px]" />
        <div className="absolute bottom-[-200px] left-1/3 h-[620px] w-[620px] rounded-full bg-white/5 blur-[120px]" />
      </div>

      <TopNav />

      <main className="relative mx-auto max-w-6xl px-4 py-10">
        <Outlet />
      </main>

      <footer className="relative border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-white/60">
          © {new Date().getFullYear()} Guatemalan Golf — Built on lava & fairways.
        </div>
      </footer>
    </div>
  );
}