import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiteNav } from "@/app/components/SiteNav";

export default function NotFound() {
  return (
    <div className="min-h-screen text-white">
      <SiteNav />
      <section className="relative pt-40 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-cyan-400 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            404
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-5">
            Project not found
          </h1>
          <p className="text-gray-400 mb-10 leading-relaxed">
            There&apos;s no portfolio project at this URL. It may have been
            moved or renamed.
          </p>
          <Link
            href="/#portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 rounded-xl font-semibold text-white text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to portfolio
          </Link>
        </div>
      </section>
    </div>
  );
}
