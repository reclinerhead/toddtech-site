"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { ZoomIn } from "lucide-react";
import type { Screenshot } from "@/data/portfolio";

interface HeroScreenshotProps {
  screenshot: Screenshot;
}

export function HeroScreenshot({ screenshot }: HeroScreenshotProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group relative block w-full overflow-hidden rounded-2xl ring-1 ring-cyan-500/25 hover:ring-cyan-400/60 transition-all bg-gray-900/40 cursor-zoom-in"
        style={{ boxShadow: "0 30px 80px -30px rgba(8,145,178,0.45)" }}
        aria-label={`Open ${screenshot.alt} in lightbox`}
      >
        {/* The frame takes the image's own ratio, so nothing gets cropped —
            hero art is not all 16:10, and object-cover was silently shaving
            the edges off anything wider. */}
        <div
          className="relative w-full"
          style={{
            aspectRatio: `${screenshot.width} / ${screenshot.height}`,
          }}
        >
          <Image
            src={screenshot.src}
            alt={screenshot.alt}
            fill
            sizes="(min-width: 1024px) 64rem, 100vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-sm border border-white/10 text-xs text-cyan-200 opacity-0 group-hover:opacity-100 transition-opacity">
          <ZoomIn className="w-3.5 h-3.5" />
          Click to zoom
        </div>
      </button>

      <Lightbox
        open={open}
        index={0}
        close={() => setOpen(false)}
        slides={[
          {
            src: screenshot.src,
            alt: screenshot.alt,
            width: screenshot.width,
            height: screenshot.height,
          },
        ]}
      />
    </>
  );
}

export default HeroScreenshot;
