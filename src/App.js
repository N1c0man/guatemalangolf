import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Components
import ScrollToTop from "./components/ScrollToTop";

// Layout
import MainLayout from "./layouts/MainLayout";

// Pages
import Videos from "./pages/Videos";
import Home from "./pages/Home";
import About from "./pages/About";

// Simple placeholder pages so the build never fails while we rebuild
function Placeholder({ title, subtitle }) {
  return (
    <div className="min-h-[60vh] px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        <p className="mt-3 text-base text-gray-300">{subtitle}</p>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm text-gray-200">
            This page is coming next. ✅
          </p>
          <p className="mt-2 text-sm text-gray-400">
            We’ll wire this up to TikTok + merch once the core theme is in.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route element={<MainLayout />}>
          {/* Core */}
          <Route path="/" element={<Home />} />

          {/* ✅ REAL Videos page */}
          <Route path="/videos" element={<Videos />} />

          {/* Placeholder pages */}
          <Route
            path="/merch"
            element={
              <Placeholder
                title="Merch"
                subtitle="Hats, shirts, and drops — link out to WhatsApp/IG for ordering (for now)."
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/contact"
            element={
              <Placeholder
                title="Contact"
                subtitle="Add WhatsApp, Instagram, and email here."
              />
            }
          />
          <Route
            path="/links"
            element={
              <Placeholder
                title="Links"
                subtitle="TikTok link-in-bio page: videos, merch, Instagram, WhatsApp."
              />
            }
          />

          {/* Safety */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
}