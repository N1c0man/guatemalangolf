// src/pages/About.jsx
import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { buildUrl, SITE_URL } from "../utils/seo";

export default function About() {
  const canonicalUrl = buildUrl("/about");
  const ogImage = `${SITE_URL}/og-image.jpg`;

  // ✅ FAQ schema (edit these Q&As anytime)
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Guatemalan Golf?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Guatemalan Golf is a destination golf travel brand focused on showcasing Guatemala’s top courses, volcano-view golf, and curated travel experiences for U.S. golfers."
        }
      },
      {
        "@type": "Question",
        "name": "Is Guatemala a good golf destination?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Guatemala offers comfortable year-round weather, dramatic volcanic scenery, and high-quality courses—often with fewer crowds and strong value compared to many U.S. resort destinations."
        }
      },
      {
        "@type": "Question",
        "name": "What locations can be included beyond golf?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Many trips can include cultural add-ons like Antigua (a UNESCO World Heritage city) and Lake Atitlán for boat tours, artisan villages, and sunset views—making the experience more than just golf."
        }
      },
      {
        "@type": "Question",
        "name": "Do you organize complete golf trips?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We’re building complete destination golf experiences, which can include course access coordination, boutique hotel partnerships, private transportation, optional guided excursions, and concierge-level support."
        }
      },
      {
        "@type": "Question",
        "name": "How can I contact Guatemalan Golf for collaborations or trip inquiries?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Visit the Contact page to reach Guatemalan Golf for collaborations, partnerships, or trip inquiries. You can also follow @guatemalangolf on TikTok for the latest updates."
        }
      }
    ]
  };

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <Helmet>
        <title>About Guatemalan Golf | Destination Golf Travel in Guatemala</title>

        <meta
          name="description"
          content="Guatemalan Golf introduces U.S. golfers to destination golf in Guatemala — volcano views, championship courses, curated travel, and cultural add-ons like Antigua and Lake Atitlán."
        />

        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Guatemalan Golf" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content="About Guatemalan Golf" />
        <meta
          property="og:description"
          content="Destination golf in Guatemala — volcano views, championship courses, and curated travel experiences for U.S. golfers."
        />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Guatemalan Golf" />
        <meta
          name="twitter:description"
          content="Destination golf in Guatemala — volcano views, championship courses, and curated travel experiences for U.S. golfers."
        />
        <meta name="twitter:image" content={ogImage} />

        {/* ✅ FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify(faqJsonLd)}
        </script>
      </Helmet>

      <h1 className="text-4xl font-bold text-gg-ink mb-2">
        About Guatemalan Golf
      </h1>

      <p className="text-lg font-semibold text-gg-ink mb-8">
        Tee off in paradise — volcano views included.
      </p>

      <p className="text-gg-muted mb-6">
        Guatemalan Golf was created to introduce U.S. golfers to one of Central
        America’s best-kept secrets. Imagine teeing off with volcano views,
        year-round spring weather, and championship-level courses — then ending
        the day with world-class cuisine and colonial charm.
      </p>

      <p className="text-gg-muted mb-10">
        We’re building more than golf trips. We’re creating complete destination
        golf experiences — built around great golf, smooth logistics, and the
        kind of moments you remember for life.
      </p>

      <div className="mb-12 rounded-3xl bg-white/80 border border-black/10 p-6 sm:p-8 backdrop-blur shadow-[0_22px_70px_rgba(0,0,0,0.08)]">
        <h2 className="text-xl font-semibold text-gg-ink">What we do</h2>
        <p className="mt-2 text-gg-muted max-w-3xl">
          We share course content, travel inspiration, and curated destination
          golf planning. Want to see the vibe first? Start with{" "}
          <Link to="/videos" className="text-gg-lava font-semibold hover:underline">
            Videos
          </Link>
          , then explore{" "}
          <Link to="/merch" className="text-gg-lava font-semibold hover:underline">
            Merch
          </Link>{" "}
          and reach out on{" "}
          <Link to="/contact" className="text-gg-lava font-semibold hover:underline">
            Contact
          </Link>
          .
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gg-ink mb-3">Why Guatemala?</h2>

      <ul className="space-y-2 text-gg-muted mb-6">
        <li>• Dramatic volcanic landscapes</li>
        <li>• Consistent, comfortable climate</li>
        <li>• Exclusive, uncrowded courses</li>
        <li>• Affordable luxury compared to many U.S. resorts</li>
        <li>• Rich culture within short driving distance</li>
      </ul>

      <p className="text-gg-muted mb-10">
        Here, you can play 18 holes in the morning and explore a UNESCO World
        Heritage city in the afternoon.
      </p>

      <h2 className="text-2xl font-semibold text-gg-ink mb-3">Beyond the Fairway</h2>

      <p className="text-gg-muted mb-4">
        Every Guatemalan Golf experience can include curated cultural add-ons:
      </p>

      <p className="text-gg-muted mb-2">
        <strong>Antigua</strong> – Cobblestone streets, colonial architecture,
        rooftop dining, and boutique shopping.
      </p>

      <p className="text-gg-muted mb-6">
        <strong>Lake Atitlán</strong> – Stunning volcanic lake views, boat tours,
        artisan villages, and unforgettable sunsets.
      </p>

      <p className="text-gg-muted mb-10">
        Your golf trip becomes a once-in-a-lifetime adventure.
      </p>

      <h2 className="text-2xl font-semibold text-gg-ink mb-3">Built for U.S. Golfers</h2>

      <ul className="space-y-2 text-gg-muted mb-10">
        <li>• Course access coordination</li>
        <li>• Boutique hotel partnerships</li>
        <li>• Private transportation</li>
        <li>• Optional guided excursions</li>
        <li>• Concierge-level support</li>
      </ul>

      <p className="text-gg-muted mb-10">
        Our goal is simple: make Guatemala the next must-play destination for
        American golfers.
      </p>

      <h2 className="text-2xl font-semibold text-gg-ink mb-3">Our Mission</h2>

      <p className="text-gg-muted">
        To position Guatemala as a premier golf destination — where championship
        golf meets culture, nature, and unforgettable hospitality.
      </p>

      <div className="mt-12">
        <Link
          to="/contact"
          className="inline-flex items-center justify-center rounded-full bg-gg-lava px-6 py-3 text-sm font-semibold text-white
                     shadow-[0_18px_45px_rgba(230,57,46,0.22)]
                     hover:bg-gg-ember hover:scale-[1.02] transition
                     focus:outline-none focus:ring-2 focus:ring-gg-lava/45"
        >
          Contact Guatemalan Golf
        </Link>
      </div>
    </section>
  );
}