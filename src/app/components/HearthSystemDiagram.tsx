import type { CSSProperties, ReactNode } from "react";

// Ported from the Claude Design "Hearth system diagram" project, the same
// modernist spec-sheet system the Aviary diagram uses. The panel keeps that
// system's paper/ink/red palette on purpose — it reads as a printed datasheet
// exhibited on the dark page — so the tokens are scoped here rather than drawn
// from the site theme.
const tokens = {
  "--sd-paper": "#f3f2f2",
  "--sd-ink": "#201e1d",
  "--sd-accent": "#ec3013",
  "--sd-accent-100": "#fff2ef",
  "--sd-accent-700": "#ae1800",
  "--sd-accent-800": "#7c1405",
  "--sd-accent-900": "#4d170e",
  "--sd-neutral-400": "#bab6b6",
  "--sd-neutral-600": "#7d7979",
  "--sd-neutral-700": "#605d5d",
  "--sd-neutral-800": "#444141",
} as CSSProperties;

interface PipelineStage {
  kicker: string;
  title: string;
  detail: ReactNode;
  highlight?: boolean;
}

const pipeline: PipelineStage[] = [
  {
    kicker: "Capture",
    title: "Hash, downscale, dedupe",
    detail:
      "SHA-256 before upload, so a byte-identical re-shoot never makes a row. Receipts up to 5 pages.",
  },
  {
    kicker: "Classify + extract",
    title: "Vision model, swappable",
    detail:
      "Nameplate, equipment photo, or not useful. The model is an env var. The output has to validate against a Zod schema or it is rejected.",
    highlight: true,
  },
  {
    kicker: "Match",
    title: "Already have one?",
    detail: (
      <>
        Alias matcher (fridge &rarr; refrigerator, never washer &rarr;
        dishwasher). Receipts match by serial to the item they service.
      </>
    ),
  },
  {
    kicker: "Decode, in parallel",
    title: "Reasoning model, serials only",
    detail:
      "Fast models invented a date rule per call. The decoder cites the rule, applies it, and persists only at high confidence.",
    highlight: true,
  },
  {
    kicker: "Record",
    title: "Inventory + document",
    detail:
      "User confirms, row lands. A registration card with an expiry seeds a renewal task on the spot, with no model involved.",
  },
];

interface HabitatModule {
  name: string;
  chip: string;
  body: ReactNode;
  note: ReactNode;
  tags: string[];
}

const habitatModules: HabitatModule[] = [
  {
    name: "EPA Superfund proximity",
    chip: "Envirofacts SEMS",
    body: (
      <>
        Every NPL site in the state, haversine distance to each, three rings
        (&frac12; / 2 / 5 mi) crossed with NPL status. A canonical contaminants
        table adds exposure{" "}
        <strong className="font-extrabold">pathways</strong>. A solvent two
        miles out escalates for a house on a well, and vapor intrusion needs a
        basement inside the half-mile.
      </>
    ),
    note: (
      <>
        <strong className="font-extrabold">One model call</strong>{" "}writes a
        four-sentence portfolio summary. Hard rule in the prompt: never assert
        the property is or isn&apos;t contaminated. If the call fails, the
        finding ships without it.
      </>
    ),
    tags: ["State cache · 7 d", "30 s → 8 s warm", "CIC contact scraped"],
  },
  {
    name: "Water quality awareness",
    chip: "SDWIS · CCR",
    body: (
      <>
        Address &rarr; utility polygon &rarr; PWSID, with a 500 m fallback for
        EPA&apos;s map gaps and the owner&apos;s own answer as the primary
        signal. After that, violations and lead/copper samples.{" "}
        <strong className="font-extrabold">Any detected lead is caution</strong>,
        because the action level is a regulatory line, not a health one.
      </>
    ),
    note: (
      <>
        <strong className="font-extrabold">
          Upload the utility&apos;s annual report
        </strong>{" "}
        and a vision model extracts exactly five sections. The schema has no
        field for the marketing. One extraction serves every household on that
        system, and years become trend lines.
      </>
    ),
    tags: ["Per-utility cache", "Filter matrix", "Public SEO pages"],
  },
];

interface CompactModule {
  name: string;
  chip: string;
  body: string;
}

const compactModules: CompactModule[] = [
  {
    name: "FEMA flood zones",
    chip: "NFHL",
    body: "Zone + subtype at the point. Retries, a 180-day cache, then stale-but-labeled data before it ever says failed. No coverage reads neutral, never all-clear.",
  },
  {
    name: "EPA radon zone",
    chip: "County map",
    body: "County-level predicted radon, compiled from EPA's dataset at build time. The template for how cheap a new module should be.",
  },
];

interface Pillar {
  kicker: string;
  title: string;
  body: ReactNode;
  wide?: boolean;
}

const pillars: Pillar[] = [
  {
    kicker: "03   Maintenance synthesis, durable workflow",
    title: "Findings become a plan",
    wide: true,
    body: (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div>
          <strong className="font-extrabold">In:</strong>{" "}the item&apos;s
          researched manual, the house&apos;s habitat findings, its receipts,
          its install date.{" "}
          <strong className="font-extrabold">Out:</strong>{" "}4 to 8 recurring
          tasks, each with frozen reasoning (source, cadence basis, anchor,
          modifiers). A durable workflow runs the 50-second reasoning call, so
          the user can close the tab.
        </div>
        <div>
          <strong className="font-extrabold">Habitat modulates cadence:</strong>{" "}
          hard water with iron shortens the anode-rod interval, and the task
          says why, citing the finding.{" "}
          <strong className="font-extrabold">Renewals bypass the model:</strong>{" "}
          an expiry date writes the task directly, and a rebuild supersedes only
          synthesized rows, so it survives.
        </div>
      </div>
    ),
  },
  {
    kicker: "04   Data layer",
    title: "One schema, RLS everywhere",
    body: (
      <>
        Supabase, a dedicated <em>hearth</em> schema, every table scoped to its
        owner. The RLS-bypassing service role is confined to background jobs.
        Shared caches mean the second neighbor on a water system never
        re-fetches EPA. Realtime dashboard with a polling fallback.
      </>
    ),
  },
  {
    kicker: "05   What it actually found",
    title: "The manual the house never had",
    body: (
      <>
        A dryer vent nobody had cleaned in 40 years, nearly closed. Washer and
        garbage-disposal upkeep no one had ever mentioned. And the question it
        asks first:{" "}
        <strong className="font-extrabold">
          where are your water and gas shutoffs?
        </strong>{" "}
        Answered once, as a phone video, filed where anyone in an emergency
        could find it.
      </>
    ),
  },
];

function SectionHeading({
  num,
  title,
  note,
}: {
  num: string;
  title: string;
  note?: string;
}) {
  return (
    <div className="flex flex-wrap items-baseline gap-x-3.5 gap-y-1 mb-3 border-b border-[var(--sd-neutral-400)] pb-2 md:border-b-0 md:pb-0">
      <span className="font-extrabold text-xs text-[var(--sd-accent)]">
        {num}
      </span>
      <span className="text-xs font-extrabold tracking-[0.16em] uppercase">
        {title}
      </span>
      {note && (
        <span className="text-[11.5px] text-[var(--sd-neutral-700)]">
          {note}
        </span>
      )}
    </div>
  );
}

export function HearthSystemDiagram() {
  return (
    <div
      className="rounded-2xl overflow-hidden ring-1 ring-white/15"
      style={{ boxShadow: "0 30px 80px -30px rgba(0,0,0,0.6)" }}
    >
      <div
        style={tokens}
        className="font-spec bg-[var(--sd-paper)] text-[var(--sd-ink)] p-5 sm:p-8 lg:p-10 flex flex-col gap-7 text-[13.5px] leading-[1.45]"
      >
        {/* ── Masthead ── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b-2 border-[var(--sd-ink)] pb-4">
          <div>
            <div className="text-[11px] font-extrabold tracking-[0.18em] uppercase text-[var(--sd-accent-700)]">
              ToddTech LLC &middot; System architecture
            </div>
            <div className="font-extrabold text-4xl md:text-[44px] leading-none tracking-[-0.025em] mt-2 mb-1.5">
              Hearth
            </div>
            <div className="text-[14px]">
              The user manual your house never came with. A phone photo becomes
              a record, public data becomes a finding, and both become a
              maintenance plan.
            </div>
          </div>
          <div className="hidden md:grid grid-cols-[auto_auto] gap-x-4.5 gap-y-1.5 pb-1 shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-5 h-[11px] border-2 border-[var(--sd-ink)] shrink-0" />
              <span className="text-[11.5px]">Deterministic code</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-5 h-[11px] border-l-2 border-[var(--sd-accent)] bg-[var(--sd-accent-100)] shrink-0" />
              <span className="text-[11.5px]">Model call, schema-bound</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-5 h-[11px] bg-[var(--sd-accent)] shrink-0" />
              <span className="text-[11.5px]">The rule the models obey</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-5 text-center text-[var(--sd-accent)] font-extrabold shrink-0">
                &rarr;
              </span>
              <span className="text-[11.5px]">Data, one direction</span>
            </div>
          </div>
        </div>

        {/* ── 01 · Smart Uploader ── */}
        <div>
          <SectionHeading
            num="01"
            title="Smart Uploader — the paper trail, in"
            note="Tap + Add, point the phone at a nameplate or a receipt. Every action is RLS-scoped, and nothing in the request path bypasses the owner check."
          />
          <div className="flex flex-col md:flex-row md:items-stretch border-y-2 border-[var(--sd-ink)] md:py-2.5">
            {pipeline.map((stage, i) => (
              <div key={stage.kicker} className="contents">
                {i > 0 && (
                  <div className="text-[var(--sd-accent)] font-extrabold text-lg leading-none px-3.5 py-1.5 md:py-0 md:px-0 md:w-8 md:flex md:items-center md:justify-center md:text-xl">
                    <span className="md:hidden">&darr;</span>
                    <span className="hidden md:inline">&rarr;</span>
                  </div>
                )}
                <div
                  className={`flex-1 px-3.5 py-3 md:py-0 md:px-4 ${
                    stage.highlight
                      ? "border-l-2 border-[var(--sd-accent)] bg-[var(--sd-accent-100)]"
                      : i > 0
                        ? "md:border-l md:border-[var(--sd-neutral-400)]"
                        : ""
                  }`}
                >
                  <div
                    className={`text-[10px] font-extrabold tracking-[0.1em] uppercase ${
                      stage.highlight
                        ? "text-[var(--sd-accent-800)]"
                        : "text-[var(--sd-neutral-600)]"
                    }`}
                  >
                    {stage.kicker}
                  </div>
                  <div className="font-extrabold text-[16px] mt-1">
                    {stage.title}
                  </div>
                  <div
                    className={`text-xs mt-0.5 ${
                      stage.highlight
                        ? "text-[var(--sd-accent-900)]"
                        : "text-[var(--sd-neutral-800)]"
                    }`}
                  >
                    {stage.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 02 · Habitat modules ── */}
        <div>
          <SectionHeading
            num="02"
            title="Habitat modules — what the owner didn't know to ask"
            note="Pluggable: one contract, one orchestrator. Each check narrates its own activity log in plain English, and the methodology is public at /how-it-works."
          />
          <div className="grid grid-cols-1 md:grid-cols-[1.35fr_1.35fr_1fr] gap-3.5 md:gap-5">
            {habitatModules.map((m) => (
              <div
                key={m.name}
                className="border-2 border-[var(--sd-ink)] p-4 flex flex-col gap-2"
              >
                <div className="flex items-baseline justify-between gap-2.5">
                  <span className="font-extrabold text-xl leading-none">
                    {m.name}
                  </span>
                  <span className="text-[9.5px] font-extrabold tracking-[0.1em] uppercase bg-[var(--sd-ink)] text-[var(--sd-paper)] px-1.5 py-1 shrink-0 whitespace-nowrap">
                    {m.chip}
                  </span>
                </div>
                <div className="text-[12.5px] leading-[1.4]">{m.body}</div>
                <div className="text-[12.5px] leading-[1.4] border-l-2 border-[var(--sd-accent)] bg-[var(--sd-accent-100)] text-[var(--sd-accent-900)] px-2.5 py-1.5">
                  {m.note}
                </div>
                <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
                  {m.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-extrabold tracking-[0.08em] uppercase border border-[var(--sd-neutral-400)] px-1.5 py-1 whitespace-nowrap"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 md:grid-rows-2 gap-3.5 md:gap-3">
              {compactModules.map((m) => (
                <div
                  key={m.name}
                  className="border-2 border-[var(--sd-ink)] p-3.5 flex flex-col gap-1.5"
                >
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="font-extrabold text-base leading-none">
                      {m.name}
                    </span>
                    <span className="text-[9px] font-extrabold tracking-[0.12em] uppercase border border-[var(--sd-neutral-400)] px-1.5 py-0.5 shrink-0 whitespace-nowrap">
                      {m.chip}
                    </span>
                  </div>
                  <div className="text-xs leading-[1.4] text-[var(--sd-neutral-800)]">
                    {m.body}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── The governing rule ── */}
        <div className="bg-[var(--sd-accent)] text-white p-4 md:px-5 flex flex-col md:flex-row md:items-baseline gap-2 md:gap-5">
          <div className="font-extrabold text-2xl leading-[1.05] tracking-[-0.015em] shrink-0">
            The model never gets the last word.
          </div>
          <div className="text-[13px]">
            Every AI output is bound to a Zod schema or discarded. Reasoning
            models only where determinism pays for itself. Regeneration is lazy:
            on click or a key-field edit, never on every write. Every call
            soft-fails, so the record ships even when the paragraph does not.
          </div>
        </div>

        {/* ── 03–05 ── */}
        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr_1fr] gap-3.5 md:gap-5">
          {pillars.map((p) => (
            <div key={p.title} className="border-2 border-[var(--sd-ink)] p-4">
              <div className="text-[10px] font-extrabold tracking-[0.12em] uppercase text-[var(--sd-accent-700)]">
                {p.kicker}
              </div>
              <div className="font-extrabold text-xl mt-1.5 mb-1.5">
                {p.title}
              </div>
              <div className="text-[12.5px] leading-[1.4]">{p.body}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2.5 md:gap-5 border-t-2 border-[var(--sd-ink)] pt-3.5">
          <div className="text-xs text-[var(--sd-neutral-700)]">
            <strong className="font-extrabold text-[var(--sd-ink)]">
              Stack:
            </strong>{" "}
            TypeScript &middot; Next.js App Router &middot; Supabase (Postgres,
            RLS, Storage, Realtime) &middot; Vercel AI SDK + Gateway (Anthropic,
            OpenAI, xAI) &middot; Vercel Workflow &middot; Mapbox &middot; EPA +
            FEMA data &middot; ~320 issues merged since May 2026, solo
          </div>
          <div className="shrink-0 text-[11.5px] text-[var(--sd-neutral-600)] md:text-right">
            toddtech.llc/portfolio/hearth
            <br className="hidden md:inline" />
            <span className="md:hidden"> &middot; </span>
            Kalamazoo, MI
          </div>
        </div>
      </div>
    </div>
  );
}

export default HearthSystemDiagram;
