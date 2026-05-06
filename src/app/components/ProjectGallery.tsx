"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { ZoomIn } from "lucide-react";
import type { Screenshot } from "@/data/portfolio";

interface ProjectGalleryProps {
  screenshots: Screenshot[];
}

export function ProjectGallery({ screenshots }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  if (screenshots.length === 0) return null;

  const active = screenshots[activeIndex];
  const showStrip = screenshots.length > 1;

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <button
        type="button"
        onClick={() => setLightboxIndex(activeIndex)}
        className="group relative block w-full overflow-hidden rounded-xl ring-1 ring-cyan-500/20 hover:ring-cyan-400/50 transition-all bg-gray-900/40 cursor-zoom-in"
        aria-label={`Open ${active.alt} in lightbox`}
      >
        <div className="relative aspect-[16/10] w-full">
          <Image
            src={active.src}
            alt={active.alt}
            fill
            sizes="(min-width: 1024px) 64rem, 100vw"
            className="object-contain"
            priority
          />
        </div>
        <div className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-sm border border-white/10 text-xs text-cyan-200 opacity-0 group-hover:opacity-100 transition-opacity">
          <ZoomIn className="w-3.5 h-3.5" />
          Click to zoom
        </div>
      </button>

      {active.caption && (
        <p className="mt-3 text-sm text-gray-500 text-center italic">
          {active.caption}
        </p>
      )}

      {showStrip && (
        <div className="mt-5 flex flex-wrap gap-3 justify-center">
          {screenshots.map((s, i) => {
            const isActive = i === activeIndex;
            return (
              <button
                key={s.src}
                type="button"
                onClick={() => setActiveIndex(i)}
                onDoubleClick={() => setLightboxIndex(i)}
                className={`relative w-28 h-20 sm:w-32 sm:h-24 overflow-hidden rounded-lg border transition-all ${
                  isActive
                    ? "border-cyan-400 ring-2 ring-cyan-400/40"
                    : "border-gray-700 hover:border-cyan-500/60 opacity-70 hover:opacity-100"
                }`}
                aria-label={`Show screenshot ${i + 1}: ${s.alt}`}
                aria-pressed={isActive}
              >
                <Image
                  src={s.src}
                  alt=""
                  fill
                  sizes="128px"
                  className="object-cover"
                />
              </button>
            );
          })}
        </div>
      )}

      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        slides={screenshots.map((s) => ({
          src: s.src,
          alt: s.alt,
          width: s.width,
          height: s.height,
        }))}
      />
    </section>
  );
}

export default ProjectGallery;
