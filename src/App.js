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
import Merch from "./pages/Merch";      // ✅ NEW
import Contact from "./pages/Contact";  // ✅ NEW

// Simple placeholder pages (only keeping Links now)
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

          <Route path="/" element={<Home />} />
          <Route path="/videos" element={<Videos />} />

          {/* ✅ Real pages */}
          <Route path="/merch" element={<Merch />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />

          {/* Keep links placeholder if needed */}
          <Route
            path="/links"
            element={
              <Placeholder
                title="Links"
                subtitle="TikTok link-in-bio page: videos, merch, Instagram, WhatsApp."
              />
            }
          />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
}