import type { CSSProperties, ReactNode } from "react";

// Ported from the Claude Design "Aviary system diagram" project (modernist
// spec-sheet system). The panel keeps that system's paper/ink/red palette on
// purpose — it reads as a printed datasheet exhibited on the dark page, so the
// tokens are scoped here rather than drawn from the site theme.
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

interface Station {
  name: string;
  chip: string;
  body: ReactNode;
  tags: string[];
}

const stations: Station[] = [
  {
    name: "Home",
    chip: "Live · hub",
    body: (
      <>
        <strong className="font-extrabold">Two ears:</strong> front and rear
        security-camera audio over RTSP &mdash; zero new hardware, and the two
        yards hear different birds. Into a Lenovo M920x bought cheap on eBay,
        minimal Ubuntu.
      </>
    ),
    tags: ["Full TensorFlow", "Ecowitt on site", "Ollama host"],
  },
  {
    name: "Birdhouse",
    chip: "Live · since 8/6",
    body: (
      <>
        <strong className="font-extrabold">One ear:</strong> a clip-on lavalier
        mic in a window. Into a Dell Wyse 5070 thin client on minimal Ubuntu
        &mdash; no AVX, so LiteRT at 27&times; real time.
      </>
    ),
    tags: ["Mom's station", "LiteRT", "OpenWeatherMap"],
  },
  {
    name: "Kestrel",
    chip: "Live · since 8/29",
    body: (
      <>
        <strong className="font-extrabold">One ear so far:</strong> a
        USB-soundcard lavalier under the front eave, into a Dell Wyse 5070 thin
        client on minimal Ubuntu. A warbler32 Wi-Fi listener for the rear of
        the yard is next.
      </>
    ),
    tags: ["Aunt's station", "LiteRT", "warbler32 next"],
  },
];

interface PipelineStage {
  kicker: string;
  title: string;
  detail: ReactNode;
  highlight?: boolean;
}

const pipeline: PipelineStage[] = [
  {
    kicker: "Capture",
    title: "3-second windows",
    detail: "48 kHz, per mic, around the clock",
  },
  {
    kicker: "Screen",
    title: "YAMNet",
    detail: (
      <>
        Speech &rarr; dropped. Dog, siren, thunder &rarr; ticker.
      </>
    ),
    highlight: true,
  },
  {
    kicker: "Identify",
    title: "BirdNET",
    detail: "Geo + week mask; wind raises the threshold",
  },
  {
    kicker: "Collapse",
    title: "Visit debounce",
    detail: "One singing cardinal is one visit, clip upgrades in place",
  },
  {
    kicker: "Record",
    title: "SQLite + clips",
    detail: "Append-only, published on MQTT",
  },
];

interface Pillar {
  kicker: string;
  title: string;
  body: ReactNode;
}

const pillars: Pillar[] = [
  {
    kicker: "03   Per station, self-contained",
    title: "Broker, database, dashboard",
    body: (
      <>
        Each yard runs its own Mosquitto, SQLite and masthead. The web tier
        never writes the record.
      </>
    ),
  },
  {
    kicker: "04   The Aviary app",
    title: "Next.js over SQLite",
    body: (
      <>
        Read-only routes hydrate, MQTT merges live: life list, ticker, species
        profiles, field journal. Each species page leads with that bird&apos;s
        finest recording to date.
      </>
    ),
  },
  {
    kicker: "05   Enrichment, worklist-driven",
    title: "Best clip, then field notes",
    body: (
      <>
        <p>
          <strong className="font-extrabold">Curation</strong> keeps one clip
          per species, re-ranked on vocal richness rather than confidence
          alone, after a NumPy DSP pass makes faint birds audible.
        </p>
        <p className="mt-2">
          <strong className="font-extrabold">Ollama</strong>, self-hosted,
          writes two notes per bird &mdash; daily rhythm, and how weather moves
          its odds &mdash; narrating exposure-normalized figures Python already
          computed. It never sees a raw row, so it cannot invent a statistic.
        </p>
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

export function AviarySystemDiagram() {
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
              The Aviary
            </div>
            <div className="text-[14px]">
              Always-on acoustic bird ID at the edge &mdash; three yards, one
              record, nothing in the listening path leaves the house.
            </div>
          </div>
          <div className="hidden md:grid grid-cols-[auto_auto] gap-x-4.5 gap-y-1.5 pb-1 shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-5 h-[11px] border-2 border-[var(--sd-ink)] shrink-0" />
              <span className="text-[11.5px]">In production</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-5 h-[11px] border-2 border-dashed border-[var(--sd-accent)] bg-[var(--sd-accent-100)] shrink-0" />
              <span className="text-[11.5px]">Roadmap</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-5 h-[11px] bg-[var(--sd-accent)] shrink-0" />
              <span className="text-[11.5px]">Privacy gate</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-5 text-center text-[var(--sd-accent)] font-extrabold shrink-0">
                &rarr;
              </span>
              <span className="text-[11.5px]">Audio, then events</span>
            </div>
          </div>
        </div>

        {/* ── 01 · Field stations ── */}
        <div>
          <SectionHeading
            num="01"
            title="Field stations"
            note="Same codebase, one env file of local facts per yard — a new microphone is a registry entry, not a code change"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 md:gap-5">
            {stations.map((s) => (
              <div
                key={s.name}
                className="border-2 border-[var(--sd-ink)] p-4 flex flex-col gap-2.5"
              >
                <div className="flex items-baseline justify-between gap-2.5">
                  <span className="font-extrabold text-2xl leading-none">
                    {s.name}
                  </span>
                  <span className="text-[9.5px] font-extrabold tracking-[0.1em] uppercase bg-[var(--sd-ink)] text-[var(--sd-paper)] px-1.5 py-1 shrink-0">
                    {s.chip}
                  </span>
                </div>
                <div className="text-[13px]">{s.body}</div>
                <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-extrabold tracking-[0.08em] uppercase border border-[var(--sd-neutral-400)] px-1.5 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 02 · earl, the listener ── */}
        <div>
          <SectionHeading
            num="02"
            title="earl — the listener service"
            note="Runs on every station. All inference on the box, none in a cloud."
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

        {/* ── Privacy invariant ── */}
        <div className="bg-[var(--sd-accent)] text-white p-4 md:px-5 flex flex-col md:flex-row md:items-baseline gap-2 md:gap-5">
          <div className="font-extrabold text-2xl leading-[1.05] tracking-[-0.015em] shrink-0">
            Speech is never recorded.
          </div>
          <div className="text-[13px]">
            A model enforces it, not a policy: a window whose top label is
            human speech produces no event and no clip &mdash; in code, under
            test, never a setting.
          </div>
        </div>

        {/* ── 03–05 ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 md:gap-5">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="border-2 border-[var(--sd-ink)] p-4"
            >
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

        {/* ── 06 · Operations + roadmap ── */}
        <div className="flex flex-col md:flex-row md:items-stretch gap-3.5 md:gap-5 border-t-2 border-[var(--sd-ink)] pt-4">
          <div className="flex-1">
            <div className="text-[10px] font-extrabold tracking-[0.12em] uppercase text-[var(--sd-neutral-600)]">
              06 &nbsp; Operations
            </div>
            <div className="text-[13.5px] mt-1.5">
              <strong className="font-extrabold">
                Merging to main is the deploy.
              </strong>{" "}
              A systemd watcher on every box fast-forward pulls and restarts; a
              dirty checkout is skipped loudly.{" "}
              <strong className="font-extrabold">Tailscale</strong> ties the
              three yards into one private mesh &mdash; how a station in
              someone else&apos;s house gets maintained, with no ports opened
              and no visit.
            </div>
          </div>
          <div className="flex-1 border-2 border-dashed border-[var(--sd-accent)] bg-[var(--sd-accent-100)] p-3">
            <div className="text-[10px] font-extrabold tracking-[0.12em] uppercase text-[var(--sd-accent-800)]">
              Roadmap
            </div>
            <div className="text-[13.5px] mt-1.5 text-[var(--sd-accent-900)]">
              <strong className="font-extrabold">The community layer.</strong>{" "}
              All three stations are reporting, so the fleet becomes a friendly
              competition &mdash; widest roster, best eagle recording, first
              hummingbird of spring.
            </div>
          </div>
        </div>

        <div className="flex items-baseline justify-between gap-3 border-t border-[var(--sd-neutral-400)] pt-2.5 -mt-3 text-[11.5px] text-[var(--sd-neutral-600)]">
          <span>toddtech.llc/portfolio/aviary</span>
          <span>Kalamazoo, MI</span>
        </div>
      </div>
    </div>
  );
}

export default AviarySystemDiagram;
