import type { Video } from "@/data/portfolio";

// Framed like the hero screenshot: an exhibit on the
// dark page. No autoplay; these run over a minute and should start from the
// title card when the reader chooses, not partway through.
export function ProjectVideo({ video }: { video: Video }) {
  return (
    <div
      className="rounded-2xl overflow-hidden ring-1 ring-white/15 bg-gray-900/40"
      style={{ boxShadow: "0 30px 80px -30px rgba(0,0,0,0.6)" }}
    >
      <video
        src={video.src}
        poster={video.poster}
        width={video.width}
        height={video.height}
        aria-label={video.title}
        controls
        playsInline
        preload="metadata"
        className="block w-full h-auto"
        style={{ aspectRatio: `${video.width} / ${video.height}` }}
      />
    </div>
  );
}
