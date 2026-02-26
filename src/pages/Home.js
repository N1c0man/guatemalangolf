// src/pages/Home.js
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
    <section className="relative pt-20 sm:pt-24 lg:pt-20 pb-20 sm:pb-24">
      {/* Ambient glows (warm + clean on light background) */}
      <motion.div
        className="pointer-events-none absolute -top-24 -right-10 h-72 w-72 rounded-full bg-gg-ember/16 blur-3xl"
        initial={{ opacity: 0, scale: 0.95, y: -10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-24 -left-16 h-80 w-80 rounded-full bg-gg-lava/10 blur-3xl"
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          className={[
            "relative overflow-hidden rounded-3xl",
            // outer separation on light page
            "border border-black/12",
            // inner rim for premium “framed” feel
            "ring-1 ring-white/10",
            // premium dark surface
            "bg-[#575656]",
            // stronger elevation
            "shadow-[0_40px_110px_rgba(0,0,0,0.26)]",
          ].join(" ")}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          {/* Daylight rim + inner vignette */}
          <div className="pointer-events-none absolute inset-0">
            {/* soft top rim */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/12 via-transparent to-transparent" />
            {/* inner dark vignette (slightly lighter bottom so text stays readable) */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/35 to-black/50" />
          </div>

          {/* ✅ Extra faint inner glow ring (studio lighting feel) */}
          <div className="absolute inset-0 ring-1 ring-white/5 rounded-3xl pointer-events-none" />

          {/* Foreground */}
          <div className="relative p-7 sm:p-10 lg:p-14">
            <div className="mx-auto max-w-4xl text-center space-y-6">
              {/* Micro tag */}
              <motion.div
                variants={fadeUp}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="text-xs tracking-[0.28em] uppercase text-white/70"
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
                  className="mx-auto w-full max-w-3xl drop-shadow-[0_0_60px_rgba(230,57,46,0.22)]"
                  loading="eager"
                />
              </motion.div>

              {/* Tagline (boost contrast) */}
              <motion.p
                variants={fadeUp}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.12 }}
                className="mx-auto max-w-2xl text-base sm:text-lg text-white/85 drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]"
              >
                Discover Guatemala's premier golf getaway - spectacular volcano
                backdrops, hand picked courses, and a travel experience you will
                never forget.
              </motion.p>

              {/* CTAs */}
              <motion.div
                variants={fadeUp}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.18 }}
                className="pt-3 flex flex-wrap justify-center gap-3"
              >
                <Link
                  to="/videos"
                  className={[
                    "inline-flex items-center justify-center rounded-full",
                    "bg-gg-lava px-6 py-3 text-sm font-semibold text-white",
                    "shadow-[0_18px_45px_rgba(230,57,46,0.32)]",
                    "hover:bg-gg-ember hover:shadow-[0_22px_55px_rgba(255,122,26,0.28)]",
                    "hover:scale-[1.03] transition",
                    "focus:outline-none focus:ring-2 focus:ring-gg-lava/45",
                  ].join(" ")}
                >
                  Watch Videos
                </Link>

                <Link
                  to="/merch"
                  className={[
                    "inline-flex items-center justify-center rounded-full",
                    "border border-white/28 bg-white/10 px-6 py-3",
                    "text-sm font-semibold text-white",
                    "hover:bg-white/14 hover:border-white/38 transition",
                    "focus:outline-none focus:ring-2 focus:ring-gg-lava/45",
                  ].join(" ")}
                >
                  Shop Merch
                </Link>

                <Link
                  to="/links"
                  className={[
                    "inline-flex items-center justify-center rounded-full",
                    "border border-white/22 bg-transparent px-6 py-3",
                    "text-sm font-semibold text-white/90",
                    "hover:text-white hover:bg-white/8 hover:border-white/34 transition",
                    "focus:outline-none focus:ring-2 focus:ring-gg-lava/45",
                  ].join(" ")}
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