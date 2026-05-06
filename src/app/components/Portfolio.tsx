import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import { projects, type Project, type ProjectStatus } from "@/data/portfolio";
import { Tag } from "./Tag";

const statusStyles: Record<ProjectStatus, { label: string; className: string } | null> = {
  live: null,
  "in-development": {
    label: "In Development",
    className: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  },
  "coming-soon": {
    label: "Coming Soon",
    className: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
  },
  private: {
    label: "Private",
    className: "bg-gray-500/10 text-gray-300 border-gray-500/20",
  },
};

function ProjectCard({ project }: { project: Project }) {
  const status = statusStyles[project.status];
  const detailHref = `/portfolio/${project.slug}`;

  return (
    <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-colors flex flex-col">
      <div className="grow">
        <Link
          href={detailHref}
          className="block relative w-full h-52 rounded-lg mb-5 overflow-hidden group"
          aria-label={`View details for ${project.title}`}
        >
          <Image
            src={project.thumbnail.src}
            alt={project.thumbnail.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(min-width: 1024px) 28rem, (min-width: 768px) 50vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-sm border border-cyan-400/30 text-xs text-cyan-200 opacity-0 group-hover:opacity-100 transition-opacity">
            View project
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </Link>

        <div className="flex items-center gap-2 mb-2">
          <Link
            href={detailHref}
            className="text-white font-semibold text-lg hover:text-cyan-300 transition-colors"
          >
            {project.title}
          </Link>
          {status && (
            <span
              className={`text-xs px-2 py-0.5 rounded-full border shrink-0 ${status.className}`}
            >
              {status.label}
            </span>
          )}
        </div>

        <p className="text-gray-400 mb-4 text-sm leading-relaxed">
          {project.tagline}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <Tag key={t} label={t} />
          ))}
        </div>
      </div>

      <div className="shrink-0 mt-6 space-y-2">
        {project.liveUrlNote && (
          <p className="text-gray-600 text-xs text-center italic">
            {project.liveUrlNote}
          </p>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-800/50 border border-cyan-500/50 rounded-xl hover:border-cyan-400 hover:bg-cyan-500/20 transition-all font-semibold text-cyan-300 hover:text-cyan-100 text-sm"
          >
            <ExternalLink className="w-4 h-4 shrink-0" />
            {project.liveUrlLabel ?? "View Live Demo"}
          </a>
        )}
        <Link
          href={detailHref}
          className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-800/50 border border-cyan-500/50 rounded-xl hover:border-cyan-400 hover:bg-cyan-500/20 transition-all font-semibold text-cyan-300 hover:text-cyan-100 text-sm"
        >
          View project details
          <ArrowRight className="w-4 h-4 shrink-0" />
        </Link>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const sorted = [...projects].sort((a, b) => a.order - b.order);

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-gray-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Portfolio
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real projects, live demos. Click any card to dig into the AI
            integrations behind it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sorted.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
