"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { ZoomIn } from "lucide-react";
import type { Screenshot } from "@/data/portfolio";

interface ProjectGalleryGridProps {
  screenshots: Screenshot[];
}

export function ProjectGalleryGrid({ screenshots }: ProjectGalleryGridProps) {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  if (screenshots.length === 0) return null;

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {screenshots.map((s, i) => (
          <article
            key={s.src}
            className="group flex flex-col rounded-xl overflow-hidden border border-gray-700/70 bg-gray-900/40 hover:border-cyan-500/40 transition-colors"
          >
            <button
              type="button"
              onClick={() => setLightboxIndex(i)}
              className="relative block w-full overflow-hidden cursor-zoom-in"
              aria-label={`Open ${s.alt} in lightbox`}
            >
              <div className="relative aspect-[16/10] w-full bg-gray-900/60">
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  sizes="(min-width: 768px) 32rem, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-sm border border-white/10 text-xs text-cyan-200 opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-3.5 h-3.5" />
                Zoom
              </div>
            </button>

            {(s.title || s.caption) && (
              <div className="p-5 space-y-2">
                {s.title && (
                  <h3 className="text-white font-semibold text-sm leading-snug">
                    {s.title}
                  </h3>
                )}
                {s.caption && (
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {s.caption}
                  </p>
                )}
              </div>
            )}
          </article>
        ))}
      </div>

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

export default ProjectGalleryGrid;
