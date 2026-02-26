import React from "react";
import { Outlet } from "react-router-dom";
import TopNav from "../components/TopNav";

export default function MainLayout() {
  return (
    <div className="relative min-h-screen bg-gg-bg text-gg-ink overflow-hidden">
      {/* Warm ambient gradient */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-transparent" />
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-gg-ember/12 blur-[140px]" />
        <div className="absolute bottom-[-200px] right-1/3 h-[620px] w-[620px] rounded-full bg-gg-lava/10 blur-[160px]" />
      </div>

      <div className="relative">
        <TopNav />

        <main className="mx-auto max-w-6xl px-4 py-12">
          <Outlet />
        </main>

        <footer className="border-t border-black/10 bg-gg-sand">
          <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gg-muted">
            © {new Date().getFullYear()} Guatemalan Golf — Where Every Round is
            Paradise.
          </div>
        </footer>
      </div>
    </div>
  );
}