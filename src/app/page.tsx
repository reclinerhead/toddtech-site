import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "./contact/ContactForm";
import Portfolio from "./components/Portfolio";
import { SiteNav } from "./components/SiteNav";

const description =
  "Portfolio of Todd Wyatt, an applied AI and systems engineer in Kalamazoo, Michigan. LLM systems, edge ML, and full-stack TypeScript, all running in production. Open to applied AI and forward deployed engineering roles, on contract through ToddTech LLC or full-time. U.S. Navy veteran. CompTIA Security+ certified.";

export const metadata: Metadata = {
  title: {
    absolute: "Todd Wyatt, Applied AI and Systems Engineer | ToddTech LLC",
  },
  description,
};

const capabilities = [
  {
    title: "LLM systems",
    body: "Retrieval-augmented chat with citations, a multi-hop agent that calls tools in a loop under a hard hop cap, structured output bound by schemas, and every model call routed through one gateway so models swap by config.",
    proof: "Échoes, Hearth",
  },
  {
    title: "Edge ML and computer vision",
    body: "A custom-trained YOLO detector with multi-object tracking over live camera streams, 24/7 acoustic species classification with BirdNET, and inference pushed onto the smallest hardware that works: LiteRT on a no-AVX thin client, a Coral TPU in the NVR.",
    proof: "The Aviary",
  },
  {
    title: "Full-stack TypeScript",
    body: "Next.js App Router with React Server Components and server actions, Supabase Postgres with row-level security as the real security boundary, durable background workflows, and realtime UI with a polling fallback.",
    proof: "Hearth, Échoes",
  },
  {
    title: "Enterprise .NET and legacy modernization",
    body: "Ten years as project manager and lead developer, working remotely as a subcontractor to the prime, on the Naval Postgraduate School's Education Management System, a campus-wide application that had run on classic ASP since 1997. Led the team that rebuilt it in C#, ASP.NET MVC, and Entity Framework, launched on schedule in 2018, then built the API integrations that tied it to Active Directory, the campus business and research systems, and Power Automate and SharePoint through the Microsoft 365 transition. C#, ASP.NET MVC, Entity Framework, SQL Server, IIS, Windows Server, Active Directory.",
    proof: "Naval Postgraduate School, remote subcontract, 2015 to 2025",
  },
  {
    title: "Infrastructure and operations",
    body: "Today, a six-machine Linux fleet on an MQTT event bus and a Tailscale mesh, systemd services with journald conventions, Docker, and stations at family homes that deploy themselves from a release branch. Before that, fifty-plus mixed Linux and Windows servers under Puppet configuration management and Nagios monitoring, with DoD-compliant patching and availability.",
    proof: "The Aviary; Naval Postgraduate School, federal IT specialist, 2002 to 2015",
  },
  {
    title: "Security",
    body: "CompTIA Security+ (DoD 8140 IAT Level II), a decade as Information Assurance Officer in a Department of Defense environment, and data layers designed so the database enforces access rather than the UI.",
    proof: "Every project",
  },
];

const howIWork = [
  {
    title: "Issue-driven, docs in the same PR.",
    body: "Every non-trivial change starts as a GitHub issue with an explicit contract and ends with a reviewed pull request that closes it. Each repo carries a living technical guide that is updated in the same commit set as the code. Main is always deployable, and merging is the deploy.",
  },
  {
    title: "AI-assisted development with a system around it.",
    body: "I use AI coding agents every day, and I built the discipline that makes them reliable: truth documents the agent reads before touching code, issue contracts with do-not-change lists, and a human review gate on every PR. Over 650 merged pull requests across three repos since April 2026.",
  },
  {
    title: "Ship it, then keep it running.",
    body: "Systems I build update themselves, fail loudly instead of silently, and run for weeks without a phone call. One monitoring station has run unattended at a relative's house since August 2026 on a fanless mini PC. Before that I ran a campus-wide enterprise application for ten years in a high-security government environment, through a full modernization launched on schedule and a decade of enhancements and integrations, without losing production stability.",
  },
  {
    title: "Security is the starting point, not a feature.",
    body: "Ten years of Information Assurance in a Department of Defense environment and an active Security+ certification. Access control, data privacy, and secure defaults are where the design begins.",
  },
  {
    title: "I say when AI is the wrong tool.",
    body: "Some problems need a spreadsheet, not a model. Where a model does belong, it gets the narrow job it is good at: in the Aviary, Python computes every statistic and the model only narrates them, so the prose can never invent a number.",
  },
  {
    title: "I work next to the people who use it.",
    body: "Ten years embedded with one customer, taking their requirements, building against their systems, deploying into their environment, and training their staff myself. Today the users of my archive are relatives who are not engineers and who tell me the moment something breaks. The language is whichever one the problem needs: I have shipped production systems in Perl, PHP, C#, Python, and TypeScript.",
  },
];

const about =
  "I'm Todd Wyatt, an applied AI and systems engineer in Kalamazoo, Michigan, and a U.S. Navy veteran. I spent twenty-two years building for the Naval Postgraduate School: thirteen as a federal IT specialist, automating and securing a fleet of fifty-plus Linux and Windows servers, serving as Information Assurance Officer, and architecting ASP.NET applications; then, after moving home to Michigan in 2015, ten years as a remote subcontractor leading the team that rebuilt the campus-wide Education Management System, a classic ASP application dating to 1997, in C# and Entity Framework, and building the API integrations that connected it to Active Directory, Power Automate, and the rest of campus. Before that I was CTO of a small web firm in Carmel, building some of the first custom e-commerce platforms in the late nineties. In 2026 I started building AI systems end to end, from edge inference on thin clients to an agentic research assistant over a family archive, and running them in production for real people. CompTIA Security+ certified, and looking for the next team to build with.";

const contactIntro =
  "I'm open to contract and subcontract engagements through ToddTech LLC and to full-time roles, remote or in southwest Michigan. I've worked this way before: ten years as a remote subcontractor delivering and maintaining a federal enterprise system. Send a note about the role or the problem and I'll reply within one business day.";

const roles = [
  "Forward deployed engineer / applied AI engineer",
  "ML engineer: edge inference, vision, audio",
  "Full-stack engineer: TypeScript, Next.js, Postgres",
  "Platform and infrastructure engineer",
  ".NET modernization and enterprise integration: C#, ASP.NET MVC, SQL Server, Active Directory, Power Automate",
  "Contract or subcontract engagements through ToddTech LLC",
];

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
              Todd Wyatt · Kalamazoo, Michigan
              <span className="w-7 h-px bg-cyan-400/50" />
            </span>
          </div>

          {/* Headline */}
          <h1
            className="animate-fade-up font-display text-[clamp(2.1rem,5.5vw,3.75rem)] font-bold leading-[1.12] tracking-[-0.025em] mb-6"
            style={{ animationDelay: "0.32s" }}
          >
            Applied AI and systems engineer.
            <br />
            <span className="text-cyan-400">
              I build AI systems and run them in production.
            </span>
          </h1>

          {/* Subhead */}
          <p
            className="animate-fade-up text-lg text-gray-400 leading-relaxed max-w-[600px] mx-auto mb-6"
            style={{ animationDelay: "0.50s" }}
          >
            Every system on this page is running in production: acoustic bird
            identification on edge hardware at three family homes, a
            home-records app with durable AI workflows, and a private family
            archive with a multi-hop research agent, used by relatives who are
            not engineers.{" "}
            <span className="text-gray-200 font-medium">
              I designed, built, and operate each one solo
            </span>
            , and every project page explains the decisions behind it.
          </p>

          {/* Availability */}
          <p
            className="animate-fade-up text-sm text-gray-300 leading-relaxed max-w-[560px] mx-auto mb-10"
            style={{ animationDelay: "0.60s" }}
          >
            Looking for applied AI or forward deployed engineering work, on
            contract through ToddTech LLC or full-time. Remote, or on site in
            southwest Michigan.
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
              See the work
            </a>
            <a
              href="https://github.com/reclinerhead"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-cyan-400 font-semibold text-base px-9 py-3.5 rounded-lg border border-cyan-400/25 hover:border-cyan-400/50 hover:bg-cyan-400/5 transition-all"
            >
              GitHub
            </a>
          </div>

          {/* Trust line */}
          <div className="animate-fade-up" style={{ animationDelay: "0.90s" }}>
            <div className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-[0.7rem] text-gray-500 tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 animate-pulse-dot" />
              <span>U.S. Navy veteran</span>
              <span className="text-gray-700">·</span>
              <span>CompTIA Security+ (DoD 8140 IAT Level II)</span>
              <span className="text-gray-700">·</span>
              <span>Building for stakeholders who depend on it since 1995</span>
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

      <Portfolio />

      {/* ── Capabilities ── */}
      <section className="py-20 lg:py-24 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4">
              What I build
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-7 hover:border-cyan-500/50 transition-colors flex flex-col"
              >
                <h3 className="text-lg font-semibold text-white mb-3">
                  {cap.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed grow">
                  {cap.body}
                </p>
                <p className="mt-5 pt-4 border-t border-white/5 text-xs text-gray-400 leading-relaxed">
                  <span className="text-cyan-400 font-semibold uppercase tracking-[0.15em] text-[0.65rem]">
                    Proof
                  </span>{" "}
                  {cap.proof}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How I work ── */}
      <section className="py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              How I <span className="text-cyan-400">work</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {howIWork.map((point) => (
              <div
                key={point.title}
                className="border-l-2 border-cyan-500/40 pl-5"
              >
                <h3 className="text-lg font-semibold text-white mb-2">
                  {point.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{point.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="py-20 lg:py-24 scroll-mt-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mb-14" />
          <span className="inline-block text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4">
            About
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
            Todd Wyatt
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">{about}</p>
          <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mt-14" />
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="py-20 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4">
              Get in Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Hiring or contracting?
              <br className="hidden sm:block" />
              <span className="text-cyan-400"> Let&apos;s talk.</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {contactIntro}
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
                      <p className="text-gray-300">Kalamazoo, Michigan</p>
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
                  Roles I&apos;m targeting
                </h3>
                <ul className="space-y-2.5">
                  {roles.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-gray-400 text-sm"
                    >
                      <span className="text-cyan-500 mt-0.5">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 pt-4 border-t border-white/5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
                  <a
                    href="https://github.com/reclinerhead"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                  >
                    GitHub
                  </a>
                </div>
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
