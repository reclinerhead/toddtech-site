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
  alt: "Échoes home view of the AI family archive",
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
    order: 3,
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
    order: 4,
  },
  {
    slug: "echoes",
    title: "Échoes",
    tagline:
      "A private invite-only family archive with conversational AI search across decades of photos, scanned documents, and family history.",
    description: [
      "Échoes is a private, invite-only family history portal built for a single extended family. It brings a large vintage photo archive together with the documents a family gathers over the years, from letters and certificates to news clippings, all in one searchable, conversational space. Strong RLS and access controls keep deeply personal material safe, so the grandkids can ask the archive what they would once have asked an elder.",
      "Échoes runs a production retrieval stack on Supabase with pgvector. Photos and documents are indexed for hybrid retrieval, fusing pgvector semantic search with PostgreSQL full-text search through Reciprocal Rank Fusion. Photo uploads move through a multi-stage AI pipeline: InsightFace (SCRFD, ONNX) detects faces server-side, MediaPipe maps a 478-point landmark mesh per face in the browser, and xAI Grok vision then describes the scene, estimates the era, and notes condition and identity cues. OpenAI embeddings are computed at the per-person-instance level, so a face ranks against every other appearance of that same person in the archive. That matters when a relative looks dramatically different from one decade to the next. Scanned documents take a separate path: vision-based OCR, SSN redaction enforcement, and chunk-level embeddings.",
      "Its centerpiece is the Family Historian, a streaming RAG chat that answers natural-language questions across the entire archive and grounds every answer in citations. A query is first classified for intent and structured filters such as people, date range, location, and document type. It then runs through hybrid retrieval and is synthesized with multi-turn memory, with inline citations pointing back to the source photos and documents. A document-scoped variant narrows that same chat to a single open document, loading its chunks into context so you can interrogate just that page.",
    ],
    thumbnail: echoesThumbnail,
    heroImage: echoesThumbnail,
    screenshots: [
      {
        src: "/images/echoes/1-historian-chat.png",
        alt: "Échoes Family Historian answering “Who served in the war?” with a synthesized response, archive reference tiles, and suggested follow-up questions",
        title: "The Family Historian",
        caption:
          "The Historian in action. Asking “Who served in the war?” returns a synthesized answer drawn from several records, a “From the archive” row of deduplicated reference tiles that link back to the exact photos, journals, and research docs behind it, and a set of suggested follow-up questions. Each query is classified for intent and structured filters, run through hybrid retrieval, and synthesized with multi-turn memory and inline citations.",
        width: 997,
        height: 748,
      },
      {
        src: "/images/echoes/2-photos.png",
        alt: "Échoes photo archive, a grid of vintage family photos with era and family filter pills and a search bar",
        title: "The photo archive",
        caption:
          "Every photo in the archive can be filtered by decade and by family branch. On upload, each image runs through a multi-stage pipeline: InsightFace (SCRFD) detects faces, MediaPipe maps a 478-point landmark mesh per face, Grok vision adds a scene description along with era and identity cues, and OpenAI then embeds the result. Those steps make the same photo reachable three ways: by semantic search, by the people detected in it, or by the era and family filters you see here.",
        width: 1396,
        height: 1183,
      },
      {
        src: "/images/echoes/3-people.png",
        alt: "Échoes people directory, a grid of identified family members, each with a portrait cropped from archive photos",
        title: "People",
        caption:
          "Identified family members, each shown with a portrait cropped from a photo they appear in. Every detected person in every photo gets its own per-instance OpenAI embedding, and face geometry is deliberately kept separate from identity so the embeddings never absorb unrelated scene description. That separation is what lets one person's appearances link up across decades, even when they age almost beyond recognition. A banner up top leads straight into the family tree.",
        width: 1372,
        height: 1265,
      },
      {
        src: "/images/echoes/4-person.png",
        alt: "Échoes person profile for Bertha Schillie, with a generated biography, photo appearances, and a relationship sidebar",
        title: "A person's profile",
        caption:
          "A single person's page: a generated biography, every photo they appear in, and a relationship sidebar resolving parents, siblings, and children. Name resolution runs off aliases as the single source of truth (one preferred alias per person, enforced with a partial unique index), so every variant of a name collapses to one identity across the archive and in the Historian's answers.",
        width: 1349,
        height: 1185,
      },
      {
        src: "/images/echoes/5-documents.png",
        alt: "Échoes Stories view, scanned letters and documents grouped into collections and individual documents",
        title: "Stories & documents",
        caption:
          "Scanned letters, journals, certificates, and clippings, sorted into curated collections (here, “Bertha's WW2 Letters” and “Military Stories and Records”) alongside standalone documents. Each page flows through a vision-based OCR pipeline with chunk-level embeddings, behind an SSN-redaction guard that blocks any upload containing a detected social-security number before it is ever stored.",
        width: 1361,
        height: 1233,
      },
      {
        src: "/images/echoes/6-document-detail.png",
        alt: "Échoes document reader showing a 1944 Western Union telegram with a Historian summary and page-image / transcript toggle",
        title: "Document reader",
        caption:
          "A stored document opened in the reader: a 1944 Western Union telegram reporting Pvt. Loren Schillie missing in action. A document-scoped Historian summary sits at the top, with a toggle between the scanned page image and its OCR'd transcript. In this mode the Historian loads the open document's chunks into context, so your questions are answered against exactly what you are reading.",
        width: 1091,
        height: 1184,
      },
      {
        src: "/images/echoes/7-relationship-graph.png",
        alt: "Échoes family relationship graph laid out by generation, from great-grandparents down to the children's generation",
        title: "The family graph",
        caption:
          "The whole family rendered as a generational graph that runs from the great-grandparents down to the children's generation. Each person is a node, linked to the others by parent, sibling, spouse, and step-relationships. This same relationship data feeds the Historian, which is why a question like “who served in the war?” can reason about how people are related rather than only who happens to appear in a photo.",
        width: 910,
        height: 717,
      },
    ],
    tags: ["Next.js", "Supabase", "pgvector", "xAI / Grok", "OpenAI"],
    techStack: [
      "Next.js 16",
      "TypeScript",
      "Supabase",
      "pgvector",
      "Vercel AI SDK",
      "xAI / Grok",
      "OpenAI embeddings",
      "InsightFace (SCRFD)",
      "ONNX Runtime",
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
          "Natural-language queries are classified (asset_lookup / semantic / structured / combined) and parsed for entities: people with alias resolution, dates, and locations. The classification gates which retrieval strategy runs, keeping latency low for simple lookups while giving the Historian what it needs for synthesis questions.",
      },
    ],
    status: "live",
    order: 2,
  },
  {
    slug: "hearth",
    title: "Hearth",
    tagline:
      "The user manual your house never came with. Hearth turns photos, documents, and public records into the maintenance plan, inventory record, and historical archive your home has never had.",
    description: [
      "Hearth is a personal home-management platform built on one observation: every house carries thousands of small facts, and almost none of them are written down anywhere the homeowner can find when it counts. What year was the furnace installed? When was the roof last replaced? What is the radon zone, and where is the main water shutoff? Hearth gathers those answers in one place, takes in new information through photo and document uploads, and works out what the home needs and when.",
      "Behind the dashboard, Hearth runs a multi-pipeline AI architecture on a tightly RLS-scoped Supabase backend. One vision pipeline reads appliance nameplates, service receipts, and identifying documents and pulls out structured data. A separate reasoning-model pipeline decodes manufacture dates from serial numbers when no install date is on file. A streaming “Research this model” call produces grounded summaries of an appliance's service life, maintenance needs, and known issues. Finally, a maintenance-synthesis workflow combines those summaries with the home's environmental context to emit a real, scheduled plan in which every task carries its own reasoning.",
      "The habitat surface is where Hearth turns public records into something a homeowner can act on. Working from the home's coordinates, it queries EPA radon zones, FEMA flood maps, EPA Superfund proximity, and EPA drinking-water compliance and lead/copper sample data, then writes the results up in plain language. Each finding shows its severity, the actions it recommends, and an activity log of exactly how it was computed. Hearth even gives its methodology its own page in the app, on the principle that a homeowner should be able to check the work.",
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
          "The first-run experience narrates what Hearth is doing as it does it: looking up public records, then checking radon, Superfund proximity, flood zones, and water quality. Showing that work as it happens builds more trust than a spinner ever could.",
        width: 1600,
        height: 1000,
      },
      {
        src: "/images/hearth/03-smart-uploader.png",
        alt: "Hearth Smart Uploader extracting structured fields from an appliance nameplate photo",
        title: "Smart Uploader",
        caption:
          "A photo of an appliance nameplate becomes a structured inventory record. A Claude Haiku vision pipeline reads the manufacturer, model, and serial off the label, pulls out the key facts, and routes the result through a review step before saving. The same uploader also handles multi-page service receipts.",
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
          "Hearth queries EPA Envirofacts SEMS data by coordinates, joins it to a tiered proximity model, attaches EPA's Community Involvement Coordinator contacts, and summarizes the result in a single paragraph calibrated to neither overstate nor understate the risk. Each contaminant in the list carries a plain-language description drawn from a curated reference table.",
        width: 1600,
        height: 1000,
      },
      {
        src: "/images/hearth/06-water-quality.png",
        alt: "Hearth water quality awareness panel showing utility lookup, SDWIS violations, and lead/copper sample data",
        title: "Habitat: Water quality awareness",
        caption:
          "EPA's CWS service-area layer resolves the home's coordinates to a Public Water System ID. From there, SDWIS violation history and lead/copper sample data are pulled, parsed, and severity-classified. The page then shows the compliance state, the contaminants detected against their federal action levels, and the actions it recommends for this specific water source.",
        width: 1600,
        height: 1000,
      },
      {
        src: "/images/hearth/06a-water-quality_matrix.png",
        alt: "Hearth remediation matrix mapping the home's detected water contaminants against filter technologies, with a recommended carbon-block plus reverse-osmosis combination",
        title: "Habitat: Remediation matrix",
        caption:
          "The water module's real output is this remediation matrix, personalized from the home's actual 2024 Consumer Confidence Report. Every contaminant detected in the supply (lead, PFAS, trihalomethanes, haloacetic acids, VOCs, arsenic, and nitrate) is mapped against six filter technologies, with cell shading showing how well each one removes it and the detected rows highlighted in amber. Hearth reads that grid into a concrete recommendation: an NSF/ANSI 53 + P473 carbon block covers six of the nine detected contaminants, and an NSF/ANSI 58 reverse-osmosis stage handles the fluoride, arsenic, and nitrate a carbon block can't touch. Each tier comes with real install and annual-cost figures, and the certifications are named so every suggestion points to a product the homeowner can actually buy rather than a generic “consider a filter.”",
        width: 876,
        height: 1097,
      },
      {
        src: "/images/hearth/07-maintenance-panel.png",
        alt: "Hearth maintenance panel with tiered tasks, cadences, and per-task reasoning",
        title: "Maintenance panel",
        caption:
          "A real maintenance plan, assembled by a reasoning-model workflow from the appliance's research summary, the home's habitat findings, and any attached service receipts. Tasks are tiered by urgency and scheduled with cadences (interval, seasonal, one-time, per-use), and every one of them carries its own reasoning.",
        width: 1600,
        height: 1000,
      },
      {
        src: "/images/hearth/08-task-detail.png",
        alt: "Hearth task detail showing a dishwasher cleaning task with hard-water habitat modifier tightening the cadence to monthly",
        title: "Task detail with cross-module reasoning",
        caption:
          "Every task sits one tap away from a “why this task” explanation. Here, a dishwasher-cleaning cadence was tightened from the usual one-to-two months down to monthly because the water-quality module found hard water in the user's county, a finding that flowed into the maintenance pipeline as a habitat modifier. The card spells out the adjustment, where it came from, and the locality in plain language, so the schedule never feels arbitrary.",
        width: 1600,
        height: 1000,
      },
    ],
    tags: [
      "Next.js",
      "Supabase",
      "Vercel AI SDK",
      "Vercel Workflow",
      "xAI / Grok",
    ],
    techStack: [
      "Next.js 15+",
      "React 19",
      "TypeScript",
      "Turbopack",
      "Supabase",
      "PostgreSQL",
      "Vercel Workflow SDK",
      "Vercel AI SDK",
      "Vercel AI Gateway",
      "xAI / Grok 4.2",
      "Anthropic / Claude Haiku",
      "Perplexity / Sonar",
      "Mapbox",
      "ArcGIS REST",
      "Tailwind CSS",
    ],
    designDecisions: [
      {
        title: "The user's water source declaration trumps EPA's map.",
        body: "EPA's national CWS service-area layer has documented coverage gaps, and established city addresses can sit in the holes between polygons. So when a user says during onboarding that they're on city water, Hearth runs a nearest-polygon fallback against a 500-meter buffer before it ever falls through to “we couldn't pinpoint your utility.” Trusting what the user told us over a map with known holes gives a more honest answer than quietly treating a polygon miss as a private well.",
      },
      {
        title: "Serial-number decoding runs on a separate reasoning model.",
        body: "The streaming Research-this-model pipeline uses a fast non-reasoning model to keep latency down. Decoding a manufacture date from a serial number is a different kind of problem, because it demands determinism. In testing, non-reasoning models would invent a plausible-looking decoding rule on each call and then confidently apply it to that same serial. Moving the decode into a parallel call on a reasoning model, under a strict protocol of name the rule, apply it, verify internal consistency, and return null if any step fails, eliminated the hallucinated dates while leaving the rest of the pipeline just as fast.",
      },
      {
        title: "Soft-fail at every level.",
        body: "Every external data source can fail, whether it's Mapbox, EPA Envirofacts, FEMA NFHL, EPA's drinking-water APIs, or the AI Gateway. Hearth is built so that when one does, the user-visible result degrades to “we don't know yet” instead of a confidently wrong answer, and unrelated features keep working. The activity log on each habitat finding records which sources answered and which didn't, so the user can see exactly what was checked.",
      },
      {
        title:
          "JSONB columns earn promotion to real columns only when a query pattern demands it.",
        body: "The inventory and document tables both carry a `metadata` JSONB column for subtype-specific fields that don't need cross-row queries yet, things like vehicle VINs and plate states, pet microchip numbers, or a receipt's vendor and line items. When a query pattern finally needs one of those fields as a real column, say, aggregating values for an insurance valuation, that shape migrates out of JSONB into a column of its own. Until then, JSONB keeps the schema small and the path to a new feature short.",
      },
      {
        title: "Workflow errors are sorted into terminal vs. retryable.",
        body: "Hearth's durable jobs run on Vercel Workflows, where a naive policy retries every failure as if it were transient. Hearth instead marks its orchestrator-internal errors as non-retryable: constraint violations, missing entities, a failed write. Those surface a deterministic bug in about two seconds rather than grinding through roughly thirty seconds of pointless retries, while genuinely transient errors like a flaky EPA call or a gateway hiccup still retry. That one distinction turns the workflow layer into a fast feedback loop during development instead of a latency tax.",
      },
      {
        title: "Data shared across homes is ingested once and cached for everyone.",
        body: "Some facts aren't per-house. A water utility publishes one annual quality report, and it's identical for every home on that system. Rather than ingest and summarize it once per user, Hearth keys the report by utility and year and serves a single cached row to every house the utility covers. The same pattern fits any data shared across entities, and it saves redundant ingestion, duplicate LLM cost, and needless load on slow government APIs.",
      },
      {
        title: "Findings go stale-but-labeled instead of eagerly regenerating.",
        body: "When upstream data changes, Hearth ingests it, works out which homes are affected, and writes a notification, but it stops short of regenerating any findings. The existing finding stays put, clearly labeled as stale, until the user decides to reanalyze. There's a cost asymmetry at play: regenerating findings nobody is looking at is wasted money, and the notification on its own already tells the user the system is watching, without any silent background churn.",
      },
    ],
    aiIntegrations: [
      {
        name: "Vision extraction pipeline",
        provider: "Anthropic / Claude Haiku",
        description:
          "A multi-mode vision pipeline reads appliance nameplates, multi-page service receipts, and identifying documents, with Claude Haiku chosen for fast, low-cost structured extraction. Output is bound by Zod schemas; prompt-leak prevention is enforced with unit tests that pin the no-leak contract.",
      },
      {
        name: "Research this model",
        provider: "Perplexity / Sonar",
        description:
          "A streaming, web-grounded summary of an appliance's service life, maintenance needs, and known issues, researched with Perplexity Sonar and routed through the Vercel AI Gateway. It renders section by section, headline first, then overview, service life, and maintenance, so the reader has real content within seconds instead of waiting on a full response.",
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
          "A durable background workflow pairs a direct-from-documents extraction pipeline with an LLM synthesis pipeline, drawing on the appliance's research summary, the home's habitat findings, and any attached service receipts to emit a structured maintenance plan. Results persist to an append-only event log with per-task reasoning stored as JSONB; each task carries its own cadence, anchor, and modifiers.",
      },
      {
        name: "Habitat data integration",
        provider: "Mapbox + EPA + FEMA + Zillow",
        description:
          "Address autofill via Mapbox feeds coordinates into a set of public-data lookups: EPA Envirofacts SEMS for Superfund sites, FEMA NFHL for flood zones, EPA's CWS service-area layer for drinking-water utilities, and SDWIS for compliance and lead/copper samples. A one-time Zillow fetch at onboarding seeds the home's core facts. Per-state shared caches spread the cost of slow EPA calls across every user in the same area.",
      },
      {
        name: "Activity logs and methodology transparency",
        provider: "In-house",
        description:
          "Every habitat finding emits a step-by-step activity log narrating what was queried, what came back, what rule was applied, and how severity was decided. Every classification rule is published on an in-app methodology page so users can see how Hearth thinks.",
      },
    ],
    status: "live",
    order: 1,
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
