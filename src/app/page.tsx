import type { Metadata } from "next";
import { ContactForm } from "./contact/ContactForm";
import Portfolio from "./components/Portfolio";
import Image from "next/image";
import { Code2, AppWindow, CloudUpload, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "ToddTech LLC - Modern Web Solutions for Small Businesses",
  description:
    "Custom, mobile-friendly websites and web applications with a focus on security, performance, and reliability. Based in Michigan, serving businesses across the state.",
};

export default function Home() {
  return (
    <div className="min-h-screen text-white">
      {/* ── Navigation ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#030712]/75 backdrop-blur-[14px] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex flex-col leading-tight gap-px">
              <div className="font-display text-[1.2rem] font-bold tracking-[-0.01em]">
                <span className="text-cyan-400">ToddTech</span>
                <span className="text-white"> LLC</span>
              </div>
              <span className="text-[0.6rem] text-gray-500 tracking-[0.18em] uppercase">
                Todd Wyatt · Kalamazoo, MI
              </span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Home
              </a>
              <a
                href="#portfolio"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Portfolio
              </a>
              <a
                href="#contact"
                className="bg-cyan-600 text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-cyan-700 transition-colors"
              >
                Contact
              </a>
            </div>

            <div className="md:hidden">
              <button className="text-gray-400 hover:text-white">
                <span className="sr-only">Open menu</span>☰
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden px-4 pt-16">
        {/* Radial vignette to ground the content */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 50% 50%, transparent 40%, rgba(3,7,18,0.65) 100%)",
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto py-24">
          {/* Eyebrow */}
          <div className="animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <span className="inline-flex items-center gap-3 font-display text-[0.7rem] tracking-[0.2em] uppercase text-cyan-400 mb-7">
              <span className="w-7 h-px bg-cyan-400/50" />
              Full-Stack Web Development · Kalamazoo, Michigan
              <span className="w-7 h-px bg-cyan-400/50" />
            </span>
          </div>

          {/* Headline */}
          <h1
            className="animate-fade-up font-display text-[clamp(2.1rem,5.5vw,3.75rem)] font-bold leading-[1.12] tracking-[-0.025em] mb-6"
            style={{ animationDelay: "0.32s" }}
          >
            AI-Powered Web.
            <br />
            <span className="text-cyan-400">Built in Michigan.</span>
          </h1>

          {/* Subhead */}
          <p
            className="animate-fade-up text-lg text-gray-400 leading-relaxed max-w-[560px] mx-auto mb-10"
            style={{ animationDelay: "0.50s" }}
          >
            A lot of great Michigan businesses don&apos;t have a website yet.
            Let&apos;s build yours —{" "}
            <span className="text-gray-200 font-medium">
              fast, secure, mobile-friendly, and built to grow
            </span>{" "}
            with the kind of AI features your customers will start expecting
            soon.
          </p>

          {/* CTAs */}
          <div
            className="animate-fade-up flex flex-wrap items-center justify-center gap-4 mb-14"
            style={{ animationDelay: "0.68s" }}
          >
            <a
              href="#portfolio"
              className="inline-block bg-cyan-600 text-white font-semibold text-base px-9 py-3.5 rounded-lg transition-all hover:bg-cyan-700"
              style={{ boxShadow: "0 0 32px rgba(8,145,178,0.35)" }}
            >
              See the Work
            </a>
            <a
              href="#contact"
              className="inline-block text-cyan-400 font-semibold text-base px-9 py-3.5 rounded-lg border border-cyan-400/25 hover:border-cyan-400/50 hover:bg-cyan-400/5 transition-all"
            >
              Get in Touch
            </a>
          </div>

          {/* Cert badge */}
          <div className="animate-fade-up" style={{ animationDelay: "0.90s" }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/12 bg-cyan-400/[0.04] text-[0.7rem] text-gray-500 tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 animate-pulse-dot" />
              CompTIA Security+ Certified · DoD 8140 IAT Level II
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div
          className="animate-fade-up absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-600 text-[0.65rem] tracking-[0.15em] uppercase"
          style={{ animationDelay: "1.4s" }}
        >
          <span>Scroll</span>
          <div className="w-px h-7 bg-gradient-to-b from-transparent to-cyan-400 animate-scroll-line" />
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="py-16 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 text-center hover:border-cyan-500/50 transition-colors">
              <div className="flex justify-center mb-4">
                <Code2 className="w-10 h-10 text-cyan-400" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Website Development
              </h3>
              <p className="text-gray-400">
                Custom, mobile-friendly websites built with Next.js, TypeScript,
                and modern best practices.
              </p>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 text-center hover:border-cyan-500/50 transition-colors">
              <div className="flex justify-center mb-4">
                <AppWindow
                  className="w-10 h-10 text-cyan-400"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">Web Applications</h3>
              <p className="text-gray-400">
                Data-driven web apps and backend APIs with AI integration —
                chat, sentiment analysis, and more.
              </p>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 text-center hover:border-cyan-500/50 transition-colors">
              <div className="flex justify-center mb-4">
                <CloudUpload
                  className="w-10 h-10 text-cyan-400"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cloud Migration</h3>
              <p className="text-gray-400">
                Move email, storage, and backups to the cloud safely — deployed
                on Vercel and Supabase infrastructure.
              </p>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 text-center hover:border-cyan-500/50 transition-colors">
              <div className="flex justify-center mb-4">
                <ShieldCheck
                  className="w-10 h-10 text-cyan-400"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cybersecurity</h3>
              <p className="text-gray-400">
                Security audits, secure-by-default development, and compliance
                guidance from a CompTIA Security+ certified engineer.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Portfolio />

      {/* ── Contact ── */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4">
              Get in Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Let&apos;s Talk About Your
              <br className="hidden sm:block" />
              <span className="text-cyan-400"> IT Needs</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Whether you need a quick answer or a full consultation, we&apos;re
              here to help Michigan businesses thrive.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-gray-800/40 border border-gray-700 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-5">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.75}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                      />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-500 mb-0.5">Name</p>
                      <p className="text-gray-300">Todd Wyatt</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.75}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-500 mb-0.5">Location</p>
                      <p className="text-gray-300">Michigan, USA</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.75}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-500 mb-0.5">
                        Response Time
                      </p>
                      <p className="text-gray-300">Within 1 business day</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/40 border border-gray-700 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">
                  What We Can Help With
                </h3>
                <ul className="space-y-2.5">
                  {[
                    "Modern, fast-loading and mobile-friendly websites for small businesses",
                    "Security-minded IT solutions to protect your data and customers",
                    "Database, Storage and Backup solutions",
                    "Web Analytics setup and reporting",
                    "General IT Support",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-gray-400 text-sm"
                    >
                      <span className="text-cyan-500 mt-0.5">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div>
                  <Image
                    src="/images/comptia-security-ce-certification.png"
                    alt="CompTIA Security+ Certified"
                    width={150}
                    height={150}
                    className="mt-4"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 bg-gray-800/40 border border-gray-700 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-white mb-6">
                Send Us a Message
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <div className="h-16" />
    </div>
  );
}
