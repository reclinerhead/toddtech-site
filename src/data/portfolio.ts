export type ProjectStatus =
  | "live"
  | "in-development"
  | "coming-soon"
  | "private";

export interface Screenshot {
  src: string;
  alt: string;
  title?: string;
  caption?: string;
  width: number;
  height: number;
}

export interface AIIntegration {
  name: string;
  provider: string;
  description: string;
}

export interface DesignDecision {
  title: string;
  body: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string[];
  thumbnail: Screenshot;
  heroImage?: Screenshot;
  screenshots: Screenshot[];
  tags: string[];
  techStack: string[];
  aiIntegrations?: AIIntegration[];
  designDecisions?: DesignDecision[];
  liveUrl?: string;
  liveUrlLabel?: string;
  liveUrlNote?: string;
  repoUrl?: string;
  status: ProjectStatus;
  order: number;
}

const toddsGrillThumbnail: Screenshot = {
  src: "/images/portfolio_TT_1.png",
  alt: "Todd's Grill & Bait — public restaurant site",
  width: 1586,
  height: 1120,
};

const lcp2Thumbnail: Screenshot = {
  src: "/images/portfolio_TT_4.png",
  alt: "Little Computer People 2 — pixel dollhouse interior",
  width: 1551,
  height: 1037,
};

const echoesThumbnail: Screenshot = {
  src: "/images/echoes-mainpage.png",
  alt: "Échoes — AI Family Archive home view",
  width: 1534,
  height: 1044,
};

const hearthHero: Screenshot = {
  src: "/images/hearth/hero-dashboard.png",
  alt: "Hearth dashboard showing a property's home facts, generated illustration, and habitat findings",
  width: 1600,
  height: 1000,
};

export const projects: Project[] = [
  {
    slug: "todds-grill",
    title: "Todd's Grill & Bait",
    tagline:
      "A full-stack restaurant demo with live AI throughout — dual-persona chat, real-time review analysis, and tone-based reply generation.",
    description: [
      "A complete restaurant web application built to showcase practical, customer-facing AI integration. The public site handles everything a small restaurant needs — menu, hours, location, reservations, and a review wall — while a separate manager dashboard exposes the operational side: review moderation, reply drafting, and analytics. The demo intentionally bypasses authentication so visitors can explore both sides freely; every AI feature remains fully live and connected to real models.",
      "The customer-facing chat runs two distinct personas. Todd is a folksy storyteller who leans into restaurant lore; Karen is the efficient manager who answers logistical questions cleanly. The model itself decides which persona should respond to a given question — and occasionally both chime in. The personas share context but maintain independent voices, demonstrating how character-driven AI can make a small business feel a lot bigger.",
      "When a customer submits a review, three independent AI calls fire in parallel: sentiment scoring, abuse and toxicity detection, and actionable-item extraction. The manager then sees the review pre-classified and can generate a reply in any of five tones (Friendly, Professional, Humorous, Apologetic, or Promotional). The whole pipeline runs through the Vercel AI SDK against Grok, with results streaming back to the dashboard in seconds.",
    ],
    thumbnail: toddsGrillThumbnail,
    screenshots: [toddsGrillThumbnail],
    tags: ["Next.js", "Supabase", "Vercel AI SDK", "xAI / Grok"],
    techStack: [
      "Next.js 16",
      "TypeScript",
      "Supabase",
      "Vercel AI SDK",
      "xAI / Grok",
      "Tailwind CSS",
      "Vercel",
    ],
    aiIntegrations: [
      {
        name: "Dual-persona AI chat",
        provider: "xAI / Grok",
        description:
          "Two distinct personas — Todd (folksy storyteller) and Karen (efficient manager) — share context but maintain independent voices. The model decides for itself which persona should answer; sometimes both do.",
      },
      {
        name: "Parallel review intelligence",
        provider: "Vercel AI SDK + xAI / Grok",
        description:
          "Every submitted review triggers three simultaneous AI calls — sentiment scoring, abuse/toxicity detection, and actionable-item extraction — so the manager sees pre-classified, ready-to-act feedback the moment it lands.",
      },
      {
        name: "Multi-tone reply generation",
        provider: "xAI / Grok",
        description:
          "Managers generate review replies in five tones (Friendly, Professional, Humorous, Apologetic, Promotional) with one click, then edit and post.",
      },
    ],
    liveUrl: "https://todds-grill-demo.toddtech.llc",
    liveUrlLabel: "View Live Demo",
    liveUrlNote: "Not a real restaurant — all AI features are live",
    status: "live",
    order: 1,
  },
  {
    slug: "lcp2",
    title: "Little Computer People 2",
    tagline:
      "A cozy reimagining of the 1985 life-sim classic — an AI-driven resident lives inside a charming pixel dollhouse.",
    description: [
      "Little Computer People 2: The House Writes Back is a love letter to the 1985 Activision original. A single AI-driven resident lives inside a hand-drawn pixel dollhouse, going about their day, sleeping in their bed, working at their desk, and reacting to the player's small interventions. The goal isn't to play a game so much as to build a relationship with someone who happens to live inside your computer.",
      "Each night the resident writes a diary entry reflecting on the day — what made them happy, what they wished had gone differently, what they hope for tomorrow. They also occasionally send letters: small notes that surface in your inbox between sessions, addressed to you. These artifacts accumulate over time into a record of a life lived alongside yours.",
      "The personality engine is the central trick. The resident's traits drift based on how you treat them — neglect breeds melancholy, attention breeds warmth, surprises breed delight or anxiety depending on context. The same character can become wildly different over weeks of play, and the diary entries reflect that change in tone, vocabulary, and what they choose to write about at all.",
    ],
    thumbnail: lcp2Thumbnail,
    screenshots: [lcp2Thumbnail],
    tags: ["Next.js", "xAI / Grok", "TypeScript"],
    techStack: ["Next.js 16", "TypeScript", "xAI / Grok", "Tailwind CSS"],
    aiIntegrations: [
      {
        name: "AI-driven resident persona",
        provider: "xAI / Grok",
        description:
          "A single coherent character with persistent personality state. Behavior, dialogue, and reactions all flow from one model maintaining the resident's evolving identity across sessions.",
      },
      {
        name: "Generative narrative artifacts",
        provider: "xAI / Grok",
        description:
          "Nightly diary entries and occasional letters from the resident. Both reflect the resident's current emotional state and accumulate into a long-form record of the relationship between player and character.",
      },
    ],
    status: "coming-soon",
    order: 2,
  },
  {
    slug: "echoes",
    title: "Échoes",
    tagline:
      "A private invite-only family archive with conversational AI search across decades of photos, scanned documents, and family history.",
    description: [
      "Échoes is a private, invite-only family history portal built for a single extended family. It combines a long-format vintage photo archive with scanned documents — letters, certificates, news clippings, anything the family has saved — into a single searchable, conversational space. Strong RLS and access controls keep deeply personal material safe; the goal is for grandkids to be able to ask the archive what they would have asked an elder.",
      "Under the hood, Échoes runs a production retrieval stack on Supabase with pgvector. Photos and documents are indexed via hybrid retrieval — pgvector semantic search fused with PostgreSQL full-text search via Reciprocal Rank Fusion. Photo uploads flow through a multi-stage AI pipeline: client-side MediaPipe face detection (478-point mesh per face), then xAI Grok vision for scene description, era estimation, identity cues, and condition. OpenAI embeddings are then computed at the per-person-instance level so a face's similarity ranks against every other appearance of that person in the archive — useful when a relative looks dramatically different across decades. Scanned documents go through a vision-based OCR pipeline with SSN redaction enforcement and chunk-level embeddings.",
      "The headline feature is the Family Historian — a streaming, citation-grounded RAG chat that answers natural-language questions across the entire archive. Queries are first classified for intent and structured filters (people, date range, location, document type), then routed through hybrid retrieval, then synthesized with multi-turn memory and inline citations back to source photos and documents. A document-scoped variant lets you ask questions about an open document with that document's chunks loaded into context.",
    ],
    thumbnail: echoesThumbnail,
    screenshots: [echoesThumbnail],
    tags: ["Next.js", "Supabase", "pgvector", "xAI / Grok", "OpenAI"],
    techStack: [
      "Next.js 16",
      "TypeScript",
      "Supabase",
      "pgvector",
      "Vercel AI SDK",
      "xAI / Grok",
      "OpenAI embeddings",
      "MediaPipe",
      "Tailwind CSS",
    ],
    aiIntegrations: [
      {
        name: "Family Historian RAG chat",
        provider: "xAI / Grok",
        description:
          "Streaming, citation-grounded conversational search across the entire archive. Query intent is classified, hybrid retrieval runs, results are synthesized with multi-turn memory and inline source citations. A document-scoped mode answers questions about an open document with its chunks loaded into context.",
      },
      {
        name: "Photo vision analysis",
        provider: "xAI / Grok",
        description:
          "Each uploaded photo is analyzed for scene description, estimated era, suggested date, setting, condition, mood, visible text, color/BW classification, and per-person identity cues. Returns structured JSON that feeds metadata, search, and the people pipeline.",
      },
      {
        name: "Document OCR pipeline",
        provider: "xAI / Grok (vision)",
        description:
          "Scanned pages and PDFs are OCR'd via vision, chunked, and embedded for retrieval. Includes SSN redaction enforcement that blocks uploads containing detected social security numbers.",
      },
      {
        name: "Hybrid retrieval",
        provider: "pgvector + PostgreSQL FTS",
        description:
          "Semantic vector search fused with full-text search via Reciprocal Rank Fusion (RRF), scoped per asset type (photos, documents, people). Supports filter pushdown for date range, location, and document subtype.",
      },
      {
        name: "Per-instance person embeddings",
        provider: "OpenAI text-embedding-3-small",
        description:
          "Every detected person in every photo gets its own 1536-dim embedding. Similarity is ranked with Bayesian shrinkage and a gender filter so a face can be matched across decades despite appearance changes.",
      },
      {
        name: "Query intent classification",
        provider: "xAI / Grok",
        description:
          "Natural-language queries are classified (asset_lookup / semantic / structured / combined) and parsed for entities — people with alias resolution, dates, locations. The classification gates which retrieval strategy runs, keeping latency low for simple lookups while giving the historian what it needs for synthesis questions.",
      },
    ],
    status: "live",
    order: 3,
  },
  {
    slug: "hearth",
    title: "Hearth",
    tagline:
      "The user manual for your house — an AI-powered platform that turns photos, documents, and public records into the maintenance plan, inventory record, and historical archive your home has never had.",
    description: [
      "Hearth is a personal home-management platform built around a simple thesis: every house comes with thousands of small facts — what year the furnace was installed, when the roof was last replaced, what the radon zone is, where the main water shutoff lives — and none of those facts are anywhere a homeowner can find them when they need to. Hearth pulls them together into one place, ingests new information through photos and document uploads, and synthesizes what the home needs and when.",
      "Under the hood, Hearth runs a multi-pipeline AI architecture on top of a tightly RLS-scoped Supabase backend. A vision pipeline reads appliance nameplates, service receipts, and identifying documents and extracts structured data. A reasoning-model pipeline decodes manufacture dates from serial numbers when no install date is on file. A streaming “Research this model” call produces grounded summaries of service life, maintenance needs, and known issues for individual appliances. A maintenance synthesis workflow takes those summaries plus the home's environmental context and emits a real, scheduled maintenance plan with each task carrying its own reasoning.",
      "The “habitat” surface is where Hearth turns public records into actionable awareness. EPA radon zones, FEMA flood maps, EPA Superfund site proximity, and EPA drinking-water compliance and lead/copper sample data are all queried by the home's coordinates and synthesized into plain-language findings. Severity classifications, recommended actions, and an activity log narrating exactly how each finding was computed are all surfaced in the UI — Hearth's methodology is its own published page in the app, because trust requires showing your work.",
      "Hearth is in active development and currently deployed for real-world use. A public beta and a premium tier are on the near-term roadmap.",
    ],
    thumbnail: hearthHero,
    heroImage: hearthHero,
    screenshots: [
      {
        src: "/images/hearth/01-dashboard.png",
        alt: "Hearth dashboard with AI-generated architectural sketch, home facts, emergency video panel, and habitat findings preview",
        title: "Dashboard",
        caption:
          "The home view: an AI-generated architectural sketch of the property, the home's facts pulled from public records, an emergency video reference panel, and a live habitat findings preview. Everything on this page is rendered from real data, updated in real time via Supabase Realtime as background workflows complete.",
        width: 1600,
        height: 1000,
      },
      {
        src: "/images/hearth/02-onboarding-discovery.png",
        alt: "Hearth onboarding screen narrating live public-records lookups and habitat checks",
        title: "Onboarding discovery",
        caption:
          "The first-run experience narrates exactly what Hearth is doing for the user — looking up public records, checking radon, checking Superfund proximity, checking flood zones, checking water quality. Trust is built by showing the work in real time, not by hiding it.",
        width: 1600,
        height: 1000,
      },
      {
        src: "/images/hearth/03-smart-uploader.png",
        alt: "Hearth Smart Uploader extracting structured fields from an appliance nameplate photo",
        title: "Smart Uploader",
        caption:
          "A photo of an appliance nameplate becomes a structured inventory record. A Grok 4.3 vision pipeline reads manufacturer, model, and serial from the label, extracts structured facts, and routes the result through a review step before saving. The same uploader handles multi-page service receipts.",
        width: 1600,
        height: 1000,
      },
      {
        src: "/images/hearth/04-inventory-detail.png",
        alt: "Hearth inventory detail page with extracted facts, Research this model panel, and decoded manufactured date",
        title: "Inventory detail",
        caption:
          "Each appliance gets its own page with extracted facts, an on-demand “Research this model” panel that streams a grounded summary of service life and maintenance needs, and a manufactured-date tile auto-filled by a reasoning model decoding the serial number.",
        width: 1600,
        height: 1000,
      },
      {
        src: "/images/hearth/05-habitat-superfund.png",
        alt: "Hearth habitat finding for EPA Superfund proximity with tiered distance model and contaminant descriptions",
        title: "Habitat: Superfund proximity",
        caption:
          "EPA Envirofacts SEMS data, queried by coordinates, joined to a tiered proximity model, enriched with EPA's Community Involvement Coordinator contacts, and summarized by an AI portfolio paragraph calibrated to never overstate or understate risk. The contaminants list is enriched with plain-language descriptions from a curated reference table.",
        width: 1600,
        height: 1000,
      },
      {
        src: "/images/hearth/06-water-quality.png",
        alt: "Hearth water quality awareness panel showing utility lookup, SDWIS violations, and lead/copper sample data",
        title: "Habitat: Water quality awareness",
        caption:
          "EPA's CWS service-area layer resolves the home's coordinates to a Public Water System ID, then SDWIS violation history and lead/copper sample data are pulled, parsed, and severity-classified. The page surfaces compliance state, detected contaminants with federal action levels, and recommended actions tuned to the user's actual water source.",
        width: 1600,
        height: 1000,
      },
      {
        src: "/images/hearth/07-maintenance-panel.png",
        alt: "Hearth maintenance panel with tiered tasks, cadences, and per-task reasoning",
        title: "Maintenance panel",
        caption:
          "A real maintenance plan, synthesized by a reasoning-model workflow from the appliance's research summary, the home's habitat findings, and any attached service receipts. Tasks are tiered by urgency, scheduled with cadences (interval, seasonal, one-time, per-use), and each carries its own reasoning.",
        width: 1600,
        height: 1000,
      },
      {
        src: "/images/hearth/08-task-detail.png",
        alt: "Hearth task detail showing source, cadence basis, habitat-driven adjustments, and anchor date",
        title: "Task detail",
        caption:
          "Every task is one tap away from “why this task” — the source of the recommendation, the cadence basis, any habitat-driven adjustments, and the document or installation date the schedule is anchored to. Marking a task complete closes that row and chains a successor with the correct next-due date.",
        width: 1600,
        height: 1000,
      },
    ],
    tags: ["Next.js", "Supabase", "Vercel AI SDK", "Vercel Workflow", "xAI / Grok"],
    techStack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Vercel Workflow SDK",
      "Vercel AI SDK",
      "Vercel AI Gateway",
      "xAI / Grok 4.3",
      "Mapbox",
      "ArcGIS REST",
      "Tailwind CSS",
    ],
    designDecisions: [
      {
        title: "The user's water source declaration trumps EPA's map.",
        body: "EPA's national CWS service-area layer has documented coverage gaps — established city addresses can sit in polygon holes. When a user has told Hearth they're on city water during onboarding, Hearth runs a nearest-polygon fallback against a 500-meter buffer before falling through to “we couldn't pinpoint your utility.” Trusting the user's declared signal over the map produces a more honest result than treating polygon misses as private wells.",
      },
      {
        title: "Serial-number decoding runs on a separate reasoning model.",
        body: "The streaming Research-this-model pipeline uses a fast non-reasoning model for latency. Manufacture-date decoding from serial numbers demands determinism — testing showed non-reasoning models would fabricate a plausible decoding rule per call and apply it confidently to itself. Lifting the decode work into a parallel call on a reasoning model, with a strict “name the rule, apply it, verify internal consistency, return null if any step fails” protocol, eliminated the hallucinated dates without changing the rest of the pipeline's latency.",
      },
      {
        title: "Soft-fail at every level.",
        body: "Every external data source — Mapbox, EPA Envirofacts, FEMA NFHL, EPA's drinking-water APIs, the AI Gateway — can fail. Every Hearth surface is designed so the user-visible result degrades to “we don't know yet” rather than producing a confidently-wrong answer or blocking unrelated features. The activity log on every habitat finding narrates exactly which sources succeeded and which didn't, so the user can see what was actually checked.",
      },
      {
        title: "JSONB columns earn promotion to real columns only when a query pattern demands it.",
        body: "The inventory and document tables both carry a `metadata` JSONB column for subtype-specific fields — vehicle VINs and plate states, pet microchip numbers, receipt vendor and line items — that don't need cross-row queries today. When a query pattern eventually demands one of those fields as a real column (insurance valuation aggregation, for example), the JSONB shape migrates to the column. Until then, JSONB keeps the schema small and the path to new features short.",
      },
    ],
    aiIntegrations: [
      {
        name: "Vision extraction pipeline",
        provider: "xAI / Grok 4.3",
        description:
          "A multi-mode vision pipeline reads appliance nameplates, multi-page service receipts, and identifying documents. Structured output is bound by Zod schemas; prompt-leak prevention is enforced with unit tests that pin the no-leak contract.",
      },
      {
        name: "Research this model",
        provider: "Vercel AI Gateway (BYOK)",
        description:
          "A streaming, grounded summary of service life, maintenance needs, and known issues for an individual appliance. Section-by-section progressive rendering — headline first, then overview, service life, and maintenance — so the user reads content within seconds instead of waiting for a full response.",
      },
      {
        name: "Serial-number decode",
        provider: "Reasoning model (env-driven)",
        description:
          "A parallel call on a reasoning model decodes manufacture dates from serial numbers when no install date is on file. Strict “name-the-rule, apply, verify, return null on uncertainty” protocol prevents hallucinated dates. Only high-confidence decodes are persisted.",
      },
      {
        name: "Maintenance synthesis workflow",
        provider: "Vercel Workflow SDK",
        description:
          "A durable background workflow takes an appliance's research summary, the home's habitat findings, and any attached service receipts and emits a structured maintenance plan with per-task reasoning. Each task carries its own cadence, anchor, and modifiers.",
      },
      {
        name: "Habitat data integration",
        provider: "Mapbox + EPA + FEMA REST APIs",
        description:
          "Address autofill via Mapbox feeds coordinates into multiple public-data lookups — EPA Envirofacts SEMS for Superfund sites, FEMA NFHL for flood zones, EPA's CWS service-area layer for drinking-water utilities, SDWIS for compliance and lead/copper samples. Per-state shared caches amortize slow EPA calls across every user in the same area.",
      },
      {
        name: "Activity logs and methodology transparency",
        provider: "In-house",
        description:
          "Every habitat finding emits a step-by-step activity log narrating what was queried, what came back, what rule was applied, and how severity was decided. Every classification rule is published on an in-app methodology page so users can see how Hearth thinks.",
      },
    ],
    status: "live",
    order: 4,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string): {
  prev: Project | null;
  next: Project | null;
} {
  const sorted = [...projects].sort((a, b) => a.order - b.order);
  const idx = sorted.findIndex((p) => p.slug === slug);
  if (idx === -1) return { prev: null, next: null };
  return {
    prev: idx > 0 ? sorted[idx - 1] : null,
    next: idx < sorted.length - 1 ? sorted[idx + 1] : null,
  };
}
