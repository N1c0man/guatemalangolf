import React from "react";
import { Outlet } from "react-router-dom";
import TopNav from "../components/TopNav";

export default function MainLayout() {
  return (
    <div className="relative min-h-screen bg-gg-bg text-gg-ink overflow-hidden">
      
      {/* Visible Grain Texture */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.25] mix-blend-multiply"
        style={{
          backgroundImage: `
            url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")
          `,
          backgroundSize: "300px 300px",
        }}
      />

      {/* Warm ambient gradient */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-transparent" />
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-gg-ember/12 blur-[140px]" />
        <div className="absolute bottom-[-200px] right-1/3 h-[620px] w-[620px] rounded-full bg-gg-lava/10 blur-[160px]" />
      </div>

      <div className="relative z-10">
        <TopNav />

        <main className="mx-auto max-w-6xl px-4 py-12">
          <Outlet />
        </main>

        <footer className="border-t border-black/10 bg-gg-sand">
          <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gg-muted">
            © {new Date().getFullYear()} Guatemalan Golf — Where Every Round is Paradise.
          </div>
        </footer>
      </div>
    </div>
  );
}