import type { Metadata } from "next";
import { ContactForm } from "./contact/ContactForm";
import Portfolio from "./components/Portfolio";
import { SiteNav } from "./components/SiteNav";
import Image from "next/image";
import { MessagesSquare, FileSearch, ScanText, Cctv } from "lucide-react";

export const metadata: Metadata = {
  title: "ToddTech LLC - Applied AI Systems for Michigan Businesses",
  description:
    "Practical AI for small and mid-size businesses: document assistants, paperwork automation, and smart monitoring, built and deployed by a Kalamazoo engineer with four AI systems in production. Veteran-owned. Security+ certified.",
};

export default function Home() {
  return (
    <div className="min-h-screen text-white">
      <SiteNav />

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
              Applied AI Engineering · Kalamazoo, Michigan
              <span className="w-7 h-px bg-cyan-400/50" />
            </span>
          </div>

          {/* Headline */}
          <h1
            className="animate-fade-up font-display text-[clamp(2.1rem,5.5vw,3.75rem)] font-bold leading-[1.12] tracking-[-0.025em] mb-6"
            style={{ animationDelay: "0.32s" }}
          >
            Practical AI for your business.
            <br />
            <span className="text-cyan-400">
              Built by someone who actually ships it.
            </span>
          </h1>

          {/* Subhead */}
          <p
            className="animate-fade-up text-lg text-gray-400 leading-relaxed max-w-[560px] mx-auto mb-10"
            style={{ animationDelay: "0.50s" }}
          >
            You keep hearing that AI could help your business, but every path
            forward seems to start with a six-figure consultant or a product
            demo that goes nowhere. I build working AI systems for real
            operations:{" "}
            <span className="text-gray-200 font-medium">
              four are running in production right now
            </span>
            , and one has run unattended at a remote site since August. If you
            want to see what AI can honestly do for your business, without the
            hype, let&apos;s talk.
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
              See Working Systems
            </a>
            <a
              href="#contact"
              className="inline-block text-cyan-400 font-semibold text-base px-9 py-3.5 rounded-lg border border-cyan-400/25 hover:border-cyan-400/50 hover:bg-cyan-400/5 transition-all"
            >
              Start a Conversation
            </a>
          </div>

          {/* Trust line */}
          <div className="animate-fade-up" style={{ animationDelay: "0.90s" }}>
            <div className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-[0.7rem] text-gray-500 tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 animate-pulse-dot" />
              <span>Veteran-owned</span>
              <span className="text-gray-700">·</span>
              <span>CompTIA Security+ (DoD 8140 IAT Level II)</span>
              <span className="text-gray-700">·</span>
              <span>20+ years building for stakeholders who depend on it</span>
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:border-cyan-500/50 transition-colors">
              <MessagesSquare
                className="w-10 h-10 text-cyan-400 mb-4"
                strokeWidth={1.5}
              />
              <h3 className="text-xl font-semibold mb-3">
                Not sure where to start? Start here.
              </h3>
              <p className="text-gray-400 leading-relaxed">
                A free conversation about your business, no slides and no sales
                pitch. You tell me how your operation runs; I tell you honestly
                where AI would help, where it wouldn&apos;t, and what a small
                first project would look like. If the honest answer is
                &ldquo;you don&apos;t need this yet,&rdquo; that&apos;s the
                answer you&apos;ll get.
              </p>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:border-cyan-500/50 transition-colors">
              <FileSearch
                className="w-10 h-10 text-cyan-400 mb-4"
                strokeWidth={1.5}
              />
              <h3 className="text-xl font-semibold mb-3">Document Assistant</h3>
              <p className="text-gray-400 leading-relaxed">
                Your procedures, manuals, contracts, and files, made answerable.
                Staff ask a question in plain English and get a real answer with
                a citation to the exact source document, so nobody spends twenty
                minutes hunting through a shared drive or interrupting the one
                person who knows. Built on the same retrieval system I run in
                production for a live archive with everyday, non-technical
                users.
              </p>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:border-cyan-500/50 transition-colors">
              <ScanText
                className="w-10 h-10 text-cyan-400 mb-4"
                strokeWidth={1.5}
              />
              <h3 className="text-xl font-semibold mb-3">
                Paperwork Automation
              </h3>
              <p className="text-gray-400 leading-relaxed">
                A phone photo of an invoice, a receipt, an equipment nameplate,
                or a delivery ticket becomes a clean, structured record
                automatically. No retyping, no transcription backlog, no
                &ldquo;I&apos;ll enter it later.&rdquo; I run this in production
                today, reading appliance labels, receipts, and serial numbers
                into structured inventory records.
              </p>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:border-cyan-500/50 transition-colors">
              <Cctv
                className="w-10 h-10 text-cyan-400 mb-4"
                strokeWidth={1.5}
              />
              <h3 className="text-xl font-semibold mb-3">Smart Monitoring</h3>
              <p className="text-gray-400 leading-relaxed">
                The cameras and audio you already have, upgraded from dumb
                motion alerts to detection that knows what it&apos;s actually
                seeing and hearing, with hard privacy guarantees written into
                the code, not a settings page. My own monitoring platform runs
                24/7 across six machines, using a custom-trained vision model,
                and one station has run unattended at a family member&apos;s
                house on a $150 mini PC since early August.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Work With Me ── */}
      <section className="py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Why Work <span className="text-cyan-400">With Me</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            <div className="border-l-2 border-cyan-500/40 pl-5">
              <h3 className="text-lg font-semibold text-white mb-2">
                You work with me directly.
              </h3>
              <p className="text-gray-400 leading-relaxed">
                No account managers, no handoffs, no junior staff. The person
                you talk to is the person who builds it, and the person who
                built everything in the portfolio below.
              </p>
            </div>

            <div className="border-l-2 border-cyan-500/40 pl-5">
              <h3 className="text-lg font-semibold text-white mb-2">
                Your data is handled like it matters.
              </h3>
              <p className="text-gray-400 leading-relaxed">
                I spent a decade doing Information Assurance in a Department of
                Defense environment and hold an active CompTIA Security+
                certification. Access control, data privacy, and secure defaults
                aren&apos;t add-ons in my work; they&apos;re the starting point.
              </p>
            </div>

            <div className="border-l-2 border-cyan-500/40 pl-5">
              <h3 className="text-lg font-semibold text-white mb-2">
                What I deploy keeps running.
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Systems I build update themselves, fail loudly instead of
                silently, and run for weeks without a phone call. One of my
                monitoring stations has operated unattended at a relative&apos;s
                house since early August, on the cheapest hardware that works.
              </p>
            </div>

            <div className="border-l-2 border-cyan-500/40 pl-5">
              <h3 className="text-lg font-semibold text-white mb-2">
                I&apos;ll tell you when AI is the wrong answer.
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Some problems need a spreadsheet, not a model. Twenty years of
                stakeholder work taught me that trust comes from the times you
                say &ldquo;you don&apos;t need this,&rdquo; and that&apos;s how
                I intend to earn yours.
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
              Let&apos;s Talk About What AI Can Do
              <br className="hidden sm:block" />
              <span className="text-cyan-400"> For Your Business</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Whether you have a specific problem or just a feeling that
              you&apos;re falling behind on AI, the first conversation is free
              and honest. Based in Kalamazoo, serving southwest Michigan in
              person and the rest of the state remotely.
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
                  What I Can Help With
                </h3>
                <ul className="space-y-2.5">
                  {[
                    "Making your documents, procedures, and institutional knowledge answerable by your whole team",
                    "Automating data entry from paper: invoices, receipts, tickets, labels, and forms",
                    "Smarter monitoring from the cameras and sensors you already own",
                    "An honest assessment of where AI fits your business, and where it doesn't",
                    "Custom web applications when the AI system needs a front door",
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
                Send Me a Message
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
