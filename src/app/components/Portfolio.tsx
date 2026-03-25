"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const slides = [
  { src: "/images/portfolio_TT_1.png", alt: "Restaurant & Bait Shop Website" },
  { src: "/images/portfolio_TT_2.png", alt: "Restaurant Manager Dashboard" },
  {
    src: "/images/portfolio_TT_3.png",
    alt: "AI Tools & Business Intelligence",
  },
  { src: "/images/portfolio_TT_4.png", alt: "Game Dashboard" },
];

export default function Portfolio() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  return (
    <section
      id="portfolio"
      className="py-24 lg:py-32 bg-no-repeat bg-fixed relative overflow-hidden"
    >
      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        slides={slides}
      />
      <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/50 to-black/70"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Portfolio
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Check out some of our recent projects and success stories.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Portfolio Item 1 */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-colors flex flex-col">
            <div className="grow">
              <div
                className="relative w-full h-52 rounded-lg mb-4 overflow-hidden cursor-zoom-in"
                onClick={() => setLightboxIndex(0)}
              >
                <Image
                  src="/images/portfolio_TT_1.png"
                  alt="Restaurant & Bait Shop Website"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-gray-400 mb-4 text-sm">
                Professional, fast websites built with Next.js for small
                restaurants and businesses. Get a modern online presence that
                looks great, loads quickly on phones, and helps attract more
                customers without the technical stress.
              </p>
              <span className="text-cyan-400 text-sm font-medium">
                Features: Dynamic menus, beautiful photo galleries, and easy
                customer review systems.
              </span>
            </div>
            <div className="shrink-0 mt-6">
              <a
                href="https://todds-grill-demo.toddtech.llc"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-800/50 border border-cyan-500/50 rounded-xl hover:border-cyan-400 hover:bg-cyan-500/20 transition-all text-center block font-semibold text-cyan-300 hover:text-cyan-100 text-base"
              >
                View Website
              </a>

              <p className="text-gray-500 text-xs mt-3 text-center italic leading-relaxed">
                Pro-tip: not a real restaurant!
              </p>
            </div>
          </div>

          {/* Portfolio Item 2 */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-colors flex flex-col">
            <div className="grow">
              <div
                className="relative w-full h-52 rounded-lg mb-4 overflow-hidden cursor-zoom-in"
                onClick={() => setLightboxIndex(1)}
              >
                <Image
                  src="/images/portfolio_TT_2.png"
                  alt="Restaurant Manager Dashboard"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-gray-400 mb-4 text-sm">
                Control every part of your restaurant from one secure and simple
                dashboard. Update menus, respond to reviews, manage
                reservations, track performance, and handle daily operations
                with ease.
              </p>
              <span className="text-cyan-400 text-sm font-medium">
                Features: Menu management, review tools, analytics, and staff
                coordination.
              </span>
            </div>
            <div className="shrink-0 mt-6">
              <a
                href="https://todds-grill-demo.toddtech.llc/manager"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-800/50 border border-cyan-500/50 rounded-xl hover:border-cyan-400 hover:bg-cyan-500/20 transition-all text-center block font-semibold text-cyan-300 hover:text-cyan-100 text-base"
              >
                View Live Demo
              </a>
              <p className="text-gray-500 text-xs mt-3 text-center italic leading-relaxed">
                Includes read-only manager dashboard access
              </p>
            </div>
          </div>

          {/* Portfolio Item 3 */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-colors flex flex-col">
            <div className="grow">
              <div
                className="relative w-full h-52 rounded-lg mb-4 overflow-hidden cursor-zoom-in"
                onClick={() => setLightboxIndex(2)}
              >
                <Image
                  src="/images/portfolio_TT_3.png"
                  alt="AI Tools & Business Intelligence"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-gray-400 mb-4 text-sm">
                Helpful AI tools that improve service and give you useful
                business intelligence. Includes a smart customer service chat,
                review sentiment analysis with abuse protection, and actionable
                summaries like the &quot;Top 10 issues to fix right now.&quot;
              </p>
              <span className="text-cyan-400 text-sm font-medium">
                Features: 24/7 AI Chat, Review Analysis, Actionable Insights
              </span>
            </div>
            <div className="shrink-0 mt-6">
              <a
                href="https://todds-grill-demo.toddtech.llc/manager"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-800/50 border border-cyan-500/50 rounded-xl hover:border-cyan-400 hover:bg-cyan-500/20 transition-all text-center block font-semibold text-cyan-300 hover:text-cyan-100 text-base"
              >
                View Live Demo
              </a>
              <p className="text-gray-500 text-xs mt-3 text-center italic leading-relaxed">
                Includes read-only manager dashboard access
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
          {/* Portfolio Item 1 */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-colors flex flex-col">
            <div className="grow">
              <div
                className="relative w-full h-52 rounded-lg mb-4 overflow-hidden cursor-zoom-in"
                onClick={() => setLightboxIndex(3)}
              >
                <Image
                  src="/images/portfolio_TT_4.png"
                  alt="Little Computer People: The House Writes Back"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-gray-400 mb-4 text-sm">
                <strong>Little Computer People: The House Writes Back</strong> -
                A cozy reimagining of the 1985 classic, built with Next.js and
                powered by xAI. Players watch and gently interact with an
                AI-powered resident living inside a charming dollhouse. Using
                AI, the character writes personal diary entries each night,
                sends thoughtful letters, and slowly develops a unique
                personality that reacts to how you treat them. The result is a
                warm, living little world that feels surprisingly real. Playable
                version coming soon!
              </p>
              <span className="text-cyan-400 text-sm font-medium">
                Features: AI-powered interactions, evolving character
                personality, and a cozy virtual home to explore.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
