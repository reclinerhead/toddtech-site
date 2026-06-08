import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink, GitBranch } from "lucide-react";
import {
  projects,
  getProject,
  getAdjacentProjects,
  type ProjectStatus,
} from "@/data/portfolio";
import { SiteNav } from "@/app/components/SiteNav";
import { Tag } from "@/app/components/Tag";
import { ProjectGallery } from "@/app/components/ProjectGallery";
import { ProjectGalleryGrid } from "@/app/components/ProjectGalleryGrid";
import { HeroScreenshot } from "@/app/components/HeroScreenshot";

interface RouteParams {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: RouteParams): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) {
    return { title: "Project not found" };
  }
  return {
    title: project.title,
    description: project.tagline,
    openGraph: {
      title: project.title,
      description: project.tagline,
      images: [
        {
          url: project.thumbnail.src,
          width: project.thumbnail.width,
          height: project.thumbnail.height,
          alt: project.thumbnail.alt,
        },
      ],
    },
  };
}

const statusStyles: Record<ProjectStatus, { label: string; className: string }> = {
  live: {
    label: "Live",
    className: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
  },
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

export default async function PortfolioDetailPage({ params }: RouteParams) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(slug);
  const status = statusStyles[project.status];

  return (
    <div className="min-h-screen text-white">
      <SiteNav />

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div
          className="absolute inset-x-0 top-0 h-72 pointer-events-none"
          aria-hidden
          style={{
            background:
              "radial-gradient(ellipse 60% 100% at 50% 0%, rgba(8,145,178,0.18) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/#portfolio"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-300 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to portfolio
          </Link>

          <div className="flex items-center gap-3 mb-5">
            <span className="text-cyan-400 text-xs font-semibold tracking-[0.2em] uppercase">
              Project
            </span>
            <span
              className={`text-xs px-2 py-0.5 rounded-full border ${status.className}`}
            >
              {status.label}
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white">
            {project.title}
          </h1>

          {project.heroImage ? (
            <>
              <div className="mb-10">
                <HeroScreenshot screenshot={project.heroImage} />
              </div>
              <p className="text-2xl md:text-3xl text-gray-200 leading-relaxed max-w-3xl mb-10 font-light">
                {project.tagline}
              </p>
            </>
          ) : (
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mb-10">
              {project.tagline}
            </p>
          )}

          {(project.liveUrl || project.repoUrl) && (
            <div className="flex flex-wrap gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 rounded-xl font-semibold text-white text-sm transition-colors"
                  style={{ boxShadow: "0 0 24px rgba(8,145,178,0.30)" }}
                >
                  <ExternalLink className="w-4 h-4 shrink-0" />
                  {project.liveUrlLabel ?? "View Live Demo"}
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-gray-700 hover:border-cyan-500/60 hover:bg-cyan-500/5 rounded-xl font-semibold text-gray-200 text-sm transition-all"
                >
                  <GitBranch className="w-4 h-4 shrink-0" />
                  Source on GitHub
                </a>
              )}
            </div>
          )}

          {project.liveUrlNote && (
            <p className="mt-4 text-xs text-gray-500 italic">
              {project.liveUrlNote}
            </p>
          )}
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      </div>

      {/* ── Gallery (strip layout — only when no hero image) ── */}
      {!project.heroImage && (
        <section className="py-16 lg:py-20">
          <ProjectGallery screenshots={project.screenshots} />
        </section>
      )}

      {/* ── Tech Stack ── */}
      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-6 text-white">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((t) => (
              <Tag key={t} label={t} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Overview ── */}
      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-8 text-white">
            Overview
          </h2>
          <div className="space-y-5 text-gray-300 leading-relaxed">
            {project.description.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery (captioned grid — only when hero image is present) ── */}
      {project.heroImage && project.screenshots.length > 0 && (
        <section className="py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
            <span className="inline-block text-cyan-400 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              Inside the app
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-white">
              Screenshot gallery
            </h2>
          </div>
          <ProjectGalleryGrid screenshots={project.screenshots} />
        </section>
      )}

      {/* ── Selected Design Decisions ── */}
      {project.designDecisions && project.designDecisions.length > 0 && (
        <section className="py-16 lg:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="inline-block text-cyan-400 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              How it was built
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-8 text-white">
              Selected Design Decisions
            </h2>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              {project.designDecisions.map((dd, i) => (
                <p key={i}>
                  <strong className="text-white font-semibold">
                    {dd.title}
                  </strong>{" "}
                  {dd.body}
                </p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── AI Integrations ── */}
      {project.aiIntegrations && project.aiIntegrations.length > 0 && (
        <section className="py-16 lg:py-20 bg-gray-900/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <span className="inline-block text-cyan-400 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
                Under the Hood
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-white">
                AI Integrations
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {project.aiIntegrations.map((ai) => (
                <div
                  key={ai.name}
                  className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-cyan-500/40 transition-colors"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-white font-semibold text-lg leading-tight">
                      {ai.name}
                    </h3>
                  </div>
                  <div className="mb-4">
                    <Tag label={ai.provider} />
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {ai.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Prev / Next nav ── */}
      <section className="py-12 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
            <Link
              href="/#portfolio"
              className="flex items-center justify-center gap-2 px-5 py-4 rounded-xl border border-gray-700 hover:border-cyan-500/50 hover:bg-cyan-500/5 text-gray-300 text-sm font-medium transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              All projects
            </Link>

            {prev ? (
              <Link
                href={`/portfolio/${prev.slug}`}
                className="flex flex-col items-start gap-1 px-5 py-4 rounded-xl border border-gray-700 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all"
              >
                <span className="inline-flex items-center gap-1.5 text-[0.65rem] tracking-[0.18em] uppercase text-gray-500">
                  <ArrowLeft className="w-3 h-3" />
                  Previous
                </span>
                <span className="text-cyan-300 font-semibold text-sm">
                  {prev.title}
                </span>
              </Link>
            ) : (
              <div aria-hidden className="hidden md:block" />
            )}

            {next ? (
              <Link
                href={`/portfolio/${next.slug}`}
                className="flex flex-col items-end gap-1 px-5 py-4 rounded-xl border border-gray-700 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all text-right"
              >
                <span className="inline-flex items-center gap-1.5 text-[0.65rem] tracking-[0.18em] uppercase text-gray-500">
                  Next
                  <ArrowRight className="w-3 h-3" />
                </span>
                <span className="text-cyan-300 font-semibold text-sm">
                  {next.title}
                </span>
              </Link>
            ) : (
              <div aria-hidden className="hidden md:block" />
            )}
          </div>
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-4">
            Have a project in mind?
          </h2>
          <p className="text-gray-400 mb-8">
            Let&apos;s talk about what AI-powered web tools could do for your
            business.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-cyan-600 hover:bg-cyan-700 rounded-xl font-semibold text-white text-sm transition-colors"
            style={{ boxShadow: "0 0 24px rgba(8,145,178,0.30)" }}
          >
            Get in touch
          </Link>
        </div>
      </section>

      <div className="h-16" />
    </div>
  );
}
