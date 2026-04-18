"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { ExternalLink, Construction } from "lucide-react";

const slides = [
  {
    src: "/images/portfolio_TT_1.png",
    alt: "Todd's Grill & Bait — Restaurant Website",
  },
  {
    src: "/images/portfolio_TT_2.png",
    alt: "Todd's Grill & Bait — Manager Dashboard",
  },
  {
    src: "/images/portfolio_TT_4.png",
    alt: "Little Computer People: The House Writes Back",
  },
  { src: "/images/echoes-mainpage.png", alt: "Échoes — AI Family Archive" },
];

const tags = {
  grill: ["Next.js", "Supabase", "Vercel AI SDK", "xAI / Grok"],
  lcp2: ["Next.js", "xAI / Grok", "TypeScript"],
  archive: ["Next.js", "Supabase", "xAI / Grok", "OpenAI", "Anthropic"],
};

function Tag({ label }: { label: string }) {
  return (
    <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
      {label}
    </span>
  );
}

function ComingSoonButton({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-800/30 border border-gray-600/50 rounded-xl text-gray-500 text-sm cursor-default select-none">
      <Construction className="w-4 h-4 shrink-0" />
      {label}
    </div>
  );
}

export default function Portfolio() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-gray-900/30">
      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        slides={slides}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Portfolio
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real projects, live demos. Click any screenshot to zoom.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Todd's Grill & Bait */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-colors flex flex-col">
            <div className="grow">
              <div
                className="relative w-full h-52 rounded-lg mb-5 overflow-hidden cursor-zoom-in"
                onClick={() => setLightboxIndex(0)}
              >
                <Image
                  src="/images/portfolio_TT_1.png"
                  alt="Todd's Grill & Bait website"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">
                Todd&apos;s Grill &amp; Bait
              </h3>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                A full-stack restaurant demo with a public site, secure manager
                dashboard, and live AI throughout. The customer chat runs two
                personas — <span className="text-gray-300">Todd</span> (folksy
                storyteller) and <span className="text-gray-300">Karen</span>{" "}
                (efficient manager) — and the model decides for itself which one
                answers, sometimes both. On every review submission, three
                parallel AI calls run simultaneously: sentiment scoring,
                abuse/toxicity detection, and actionable item extraction.
                Managers can then generate a reply in five tones (Friendly,
                Professional, Humorous, and more). The demo bypasses auth
                entirely while keeping all AI features live.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {tags.grill.map((t) => (
                  <Tag key={t} label={t} />
                ))}
              </div>
            </div>
            <div className="shrink-0 mt-6 space-y-2">
              <a
                href="https://todds-grill-demo.toddtech.llc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-800/50 border border-cyan-500/50 rounded-xl hover:border-cyan-400 hover:bg-cyan-500/20 transition-all font-semibold text-cyan-300 hover:text-cyan-100 text-sm"
              >
                <ExternalLink className="w-4 h-4 shrink-0" />
                View Live Demo
              </a>
              <p className="text-gray-600 text-xs text-center italic">
                Not a real restaurant — all AI features are live
              </p>
            </div>
          </div>

          {/* Little Computer People */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-colors flex flex-col">
            <div className="grow">
              <div
                className="relative w-full h-52 rounded-lg mb-5 overflow-hidden cursor-zoom-in"
                onClick={() => setLightboxIndex(2)}
              >
                <Image
                  src="/images/portfolio_TT_4.png"
                  alt="Little Computer People: The House Writes Back"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">
                Little Computer People 2
              </h3>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                A cozy reimagining of the 1985 life-sim classic, powered by AI.
                An AI-driven resident lives inside a charming pixel dollhouse —
                writing diary entries each night, sending letters, and
                developing a personality that evolves based on how you treat
                them. A warm, living little world that feels surprisingly real.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {tags.lcp2.map((t) => (
                  <Tag key={t} label={t} />
                ))}
              </div>
            </div>
            <div className="shrink-0 mt-6">
              <ComingSoonButton label="Playable demo coming soon" />
            </div>
          </div>

          {/* AI Family Archive */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-colors flex flex-col">
            <div className="grow">
              <div
                className="relative w-full h-52 rounded-lg mb-5 overflow-hidden cursor-zoom-in"
                onClick={() => setLightboxIndex(3)}
              >
                <Image
                  src="/images/echoes-mainpage.png"
                  alt="Échoes — AI Family Archive"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-white font-semibold text-lg">Échoes</h3>
                <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0">
                  In Development
                </span>
              </div>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                A private, invite-only family history portal for preserving
                vintage photos and documents. Grok vision analyzes each photo on
                upload — estimating era, setting, and confidence — while vector
                embeddings power AI-assisted people tagging with maiden-name and
                nickname awareness. A RAG-based &ldquo;Family Historian&rdquo;
                chat over the full archive is in progress.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {tags.archive.map((t) => (
                  <Tag key={t} label={t} />
                ))}
              </div>
            </div>
            <div className="shrink-0 mt-6">
              <ComingSoonButton label="Private repo — demo coming soon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
