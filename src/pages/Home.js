// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroLogo from "../assets/gg_hero_logo_transparent.png";

const fadeUp = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="relative bg-gg-ink pt-20 sm:pt-24 lg:pt-10 pb-10 sm:pb-12">
      {/* Lava glow blobs */}
      <motion.div
        className="pointer-events-none absolute -top-24 -right-10 h-72 w-72 rounded-full bg-gg-lava/25 blur-3xl"
        initial={{ opacity: 0, scale: 0.95, y: -10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-24 -left-16 h-80 w-80 rounded-full bg-white/10 blur-3xl"
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/55 backdrop-blur shadow-[0_18px_50px_-25px_rgba(0,0,0,0.75)]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          {/* Subtle dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/55 to-black/70" />

          {/* Foreground */}
          <div className="relative p-6 sm:p-8 lg:p-12">
            <div className="mx-auto max-w-4xl text-center space-y-6">
              {/* Micro tag */}
              <motion.div
                variants={fadeUp}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="text-xs tracking-[0.28em] uppercase text-white/55"
              >
                Guatemala • Golf • Volcano Views • Travel
              </motion.div>

              {/* Full Premium Logo */}
              <motion.div
                variants={fadeUp}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
              >
                <img
                  src={heroLogo}
                  alt="Guatemalan Golf"
                  className="mx-auto w-full max-w-3xl drop-shadow-[0_0_60px_rgba(255,80,0,0.30)]"
                  loading="eager"
                />
              </motion.div>

              {/* Tagline */}
              <motion.p
                variants={fadeUp}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.12 }}
                className="mx-auto max-w-2xl text-base sm:text-lg text-white/75"
              >
                Premium golf experiences in Guatemala — volcano views, curated
                courses, and unforgettable travel.
              </motion.p>

              {/* CTAs */}
              <motion.div
                variants={fadeUp}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.18 }}
                className="pt-2 flex flex-wrap justify-center gap-3"
              >
                <Link
                  to="/videos"
                  className="inline-flex items-center justify-center rounded-full bg-gg-lava px-6 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(255,80,0,0.35)] hover:scale-[1.03] transition"
                >
                  Watch Videos
                </Link>

                <Link
                  to="/merch"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
                >
                  Shop Merch
                </Link>

                <Link
                  to="/links"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-transparent px-6 py-3 text-sm font-semibold text-white/80 hover:text-white hover:bg-white/5 transition"
                >
                  Link in Bio
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}