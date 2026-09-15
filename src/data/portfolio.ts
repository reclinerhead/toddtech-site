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

/** One page of a project that anonymous visitors can open, no account needed. */
export interface PublicPage {
  /** Short line above the title, e.g. the utility or organization the page covers. */
  eyebrow: string;
  title: string;
  description: string;
  url: string;
}

export interface PublicPages {
  heading: string;
  intro: string;
  pages: PublicPage[];
  /** Small print naming the records behind every finding on the pages. */
  sourcesNote?: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  /** Overview paragraphs. Omitted on projects whose system diagram tells the story. */
  description?: string[];
  thumbnail: Screenshot;
  heroImage?: Screenshot;
  screenshots: Screenshot[];
  tags: string[];
  techStack: string[];
  aiIntegrations?: AIIntegration[];
  designDecisions?: DesignDecision[];
  /** Live pages open to anonymous visitors. Renders a section under the system diagram when present. */
  publicPages?: PublicPages;
  liveUrl?: string;
  liveUrlLabel?: string;
  liveUrlNote?: string;
  repoUrl?: string;
  status: ProjectStatus;
  order: number;
}

const aviaryHero: Screenshot = {
  src: "/images/aviary/0-hero.png",
  alt: "The Aviary dashboard: life list, live arrivals ticker, and new-arrival cards",
  width: 1507,
  height: 973,
};

const echoesThumbnail: Screenshot = {
  src: "/images/echoes-mainpage.png",
  alt: "Échoes home view: the ask-me-anything box with suggested prompts, and the recently added photos, stories, and people",
  width: 1673,
  height: 1272,
};

const hearthHero: Screenshot = {
  src: "/images/hearth/hero-home.jpg",
  alt: "An illustrated house overlaid with Hearth callout cards: home facts, air and water quality, ground risk, and the furnace, water heater, washer, and dishwasher with model, age, and next maintenance",
  width: 1872,
  height: 1056,
};

export const projects: Project[] = [
  {
    slug: "aviary",
    title: "The Aviary",
    tagline:
      "Always-on acoustic bird identification at the edge: three family monitoring stations, one riding security-camera audio and two on budget lavalier mics, each feeding a living life list with AI-written field notes.",
    description: [
      "The Aviary is the public face of a wildlife-monitoring platform that listens to the yard around the clock. An always-on listener service pulls live audio from outdoor microphones, runs Cornell's BirdNET classifier on every 3-second window, and files each accepted detection into an append-only bird record: a life list of every species ever heard (its first-heard moment and first recording preserved forever), one curated audio clip per visit, and the visit history behind them. The Aviary web app presents that record as something a family actually wants to open: a life-list grid of species tiles, a live ticker of arrivals with inline clip playback, and per-species profile pages with portraits, visit-rhythm charts, and AI-written field notes.",
      "The field notes are the feature I'm proudest of. Each species gets two short essays, one on its daily rhythm and one on how weather moves its odds, built by joining every detection against time of day and the yard's own weather record. At home that record comes from an Ecowitt weather station on the property, logging wind, temperature, and rainfall every five minutes; stations without weather hardware read OpenWeatherMap instead. Hyperlocal truth where it exists, a clean fallback where it doesn't. The statistics keep themselves honest: every claim is an exposure-normalized rate ('shows up more in rain' only counts against how many rainy hours there actually were), computed inside each species' own active hours so a dawn effect can't masquerade as a weather effect, and the on-site rain sensor outranks the weather API when the two disagree about whether it's raining.",
    ],
    thumbnail: aviaryHero,
    heroImage: aviaryHero,
    screenshots: [
      {
        src: "/images/aviary/01-life-list.png",
        alt: "The Aviary life list: a grid of species tiles with portraits and visit counts",
        title: "The life list",
        caption:
          "Every species the yard has ever announced, one tile each, with portraits, visit counts, search, and sort. Counts tick live as detections arrive over MQTT, and new lifers append without reshuffling the grid, because the UI's standing rule is that nothing on the page ever moves under the reader's eyes.",
        width: 1124,
        height: 778,
      },
      {
        src: "/images/aviary/02-live-ticker.png",
        alt: "The live arrivals ticker with inline audio clip playback",
        title: "Latest events",
        caption:
          "The live arrivals ticker: each row is a visit opening, with species, confidence, source microphone, and an inline player for the ~9-second clip. Playback routes through a WebAudio gain-and-limiter graph because real yard birds are often faint, and the clip server speaks RFC 7233 byte ranges because without them iOS Safari refuses to play audio at all, a lesson learned the hard way on a real phone.",
        width: 357,
        height: 414,
      },
      {
        src: "/images/aviary/03-species-profile.png",
        alt: "A species profile page with portrait, standings, and a pannable visits chart",
        title: "A species profile",
        caption:
          "Each species gets a magazine-style page: Wikipedia portrait and description, standings against the rest of the yard, and a visits chart that pans back through the whole record, with daily bars for how often and an hourly curve for when in the day. The curve is a monotone (Fritsch–Carlson) spline so sparse counts can never draw an impossible −2 visits at 3 a.m.",
        width: 1497,
        height: 973,
      },
      {
        src: "/images/aviary/04-field-notes.png",
        alt: "The field journal spread: AI-written notes with margin figures drawn from stored statistics",
        title: "The field journal",
        caption:
          "Two pages of AI-written field notes per species, one on the bird's daily rhythm and one on how weather moves its odds, rendered as a journal spread with margin figures drawn from the stored statistics: a 24-hour activity strip and weather-effect pills. The numbers come from joining detections against the yard's own weather record (an on-site Ecowitt station at home, OpenWeatherMap at stations without one), and the locally hosted LLM only narrates the precomputed figures, so the figures and the prose can never disagree.",
        width: 1499,
        height: 888,
      },
      {
        src: "/images/aviary/05-events-archive.png",
        alt: "The full detection record with sticky day headers and species filter pills",
        title: "The full record",
        caption:
          "The browsable archive: infinite scroll under sticky day headers, combinable species filter pills, jump-to-date, and shareable filtered URLs. All of it reads from the same append-only SQLite store the listener writes; the web tier never writes the bird record.",
        width: 1511,
        height: 1060,
      },
      {
        src: "/images/aviary/06-station-birdhouse.png",
        alt: "A family station: a stylized card for the station at my mom's house, whose dashboard matches the life list above",
        title: "A family station",
        caption:
          "The same codebase in its station role at my mom's house: one env file of local facts, its own broker, database, and dashboard, and a masthead that says whose yard it is. It updates itself from a stable release branch promoted nightly (a systemd watcher pulls and restarts), and it has run unattended on a fanless mini PC and a clip-on mic since early August.",
        width: 1600,
        height: 1000,
      },
    ],
    tags: ["Edge ML", "BirdNET", "Python", "Next.js", "MQTT"],
    techStack: [
      "Python",
      "BirdNET (Cornell Lab)",
      "YAMNet",
      "LiteRT",
      "NumPy DSP",
      "FFmpeg",
      "MQTT (Mosquitto)",
      "SQLite",
      "Ecowitt weather station",
      "OpenWeatherMap API",
      "Next.js (App Router)",
      "TypeScript",
      "Tailwind CSS",
      "Ollama (local LLM)",
      "systemd / Ubuntu",
      "Tailscale",
      "pytest / Vitest",
    ],
    designDecisions: [
      {
        title:
          "The statistics are computed in Python; the LLM only narrates them.",
        body: "Hand any model raw event rows and ask for the pattern, and it invents percentages, invisibly. So every figure the field notes may speak is computed first (exposure-normalized visit rates against the species' own baseline, with confound controls for dawn hours and wind), stored as JSON beside the generated prose, and the model's only job is turning audited facts into two charming paragraphs. Auditing output against the stored stats caught the model inverting a direction and hedging from boilerplate; both were fixed in the prompt rather than by reaching for a bigger model.",
      },
      {
        title: "The best sensor is the one already installed.",
        body: "The home station pulls the audio track alone off the property's security cameras over RTSP; the cameras were already aimed at the yard, already powered, already networked. The station at my mom's proves the opposite end: a budget lavalier mic and the smallest PC that works. Audio sources live in a config registry keyed by kind, not by name, so adding a camera or retiring a mic is a data edit rather than a code change.",
      },
    ],
    liveUrlNote: "Runs privately on the family's own network; no public demo",
    status: "live",
    order: 1,
  },
  {
    slug: "echoes",
    title: "Échoes",
    tagline:
      "A private family archive you can talk to. Ask it about decades of photos and letters, and let the Family Researcher follow the trail from one record to the next.",
    // Written for a hiring audience, not an engineer about to deploy it: three
    // short paragraphs, the Family Researcher in the middle, no acronyms.
    description: [
      "Échoes is a private, invite-only archive built for one extended family. It gathers decades of vintage photos together with the letters, certificates, and clippings a family collects over the years, all in one place you can search and talk to. Only invited family members can get in, so the grandkids can ask the archive what they would once have asked an elder.",
      "Some questions cannot be answered by one search. Ask “who does Bertha's obituary mention that we don't have on record?” and the evidence is spread across letters, an obituary, and the family tree, with no single document matching the question. The Family Researcher handles those. It searches, looks people up, checks how they are related, and searches again from what it just found, narrating each step on screen. When it spots people or relationships the tree is missing, it proposes them, and a family member confirms each one before anything is saved.",
      "Underneath, every photo and document is read by AI when it is uploaded. Photos get a description and an estimated era, faces are matched across decades, and scanned pages become readable text. That is what lets the archive answer a question asked in plain English, even when the words do not match what is written on the page.",
    ],
    thumbnail: echoesThumbnail,
    heroImage: echoesThumbnail,
    screenshots: [
      {
        src: "/images/echoes/1-historian-chat.png",
        alt: "Échoes Family Historian answering “Who served in the war?” with a synthesized response, archive reference tiles, and suggested follow-up questions",
        title: "The Family Historian",
        caption:
          "Asking “Who served in the war?” returns an answer drawn from several records, a row of reference tiles linking to the exact photos and documents behind it, and suggested follow-up questions.",
        width: 997,
        height: 748,
      },
      {
        src: "/images/echoes/1b-researcher.png",
        alt: "Échoes Family Researcher following the trail on a multi-step question, narrating each search and lookup as it works",
        title: "The Family Researcher",
        caption:
          "The Historian's more capable sibling: given a question no single search can answer, it uses tools to search the archive, look people up, and check the family tree, then searches again from what it found, narrating every step. I have used it for real research on my own family history, and it works.",
        width: 1165,
        height: 1140,
      },
      {
        src: "/images/echoes/2-photos.png",
        alt: "Échoes photo archive filtered to the Schillie family, with family, era, and theme filter pills, a search box, and sort controls",
        title: "The photo archive",
        caption:
          "Every photo, filtered by family branch, decade, or theme, from gatherings and portraits to keepsakes and everyday moments. Each one is also searchable by what is in it and who is in it.",
        width: 1503,
        height: 1139,
      },
      {
        src: "/images/echoes/3-people.png",
        alt: "Échoes people directory, a grid of identified family members, each with a portrait cropped from archive photos",
        title: "People",
        caption:
          "Identified family members, each with a portrait cropped from a photo they appear in. The same person is matched across decades, even when they age almost beyond recognition.",
        width: 1372,
        height: 1265,
      },
      {
        src: "/images/echoes/4-person.png",
        alt: "Échoes person profile for Bertha Schillie, with a generated biography, photo and story counts, her photos, and relationships grouped by generation",
        title: "A person's profile",
        caption:
          "A single person's page: a generated biography, every photo and story they appear in, and their relationships grouped by generation, from grandparents through siblings and children. Every spelling and nickname resolves to one person.",
        width: 1480,
        height: 1152,
      },
      {
        src: "/images/echoes/4b-life-story.png",
        alt: "Échoes Create Biography dialog for Bertha Schillie, explaining how the printable Life Story is composed, with Download and Generate fresh buttons",
        title: "A person's life story",
        caption:
          "One click turns everything the archive knows about a person, their photos, documents, key dates, and family connections, into a typeset, printable life story, with every fact footnoted to the letter, clipping, or record it came from. It is the keepsake families spend weeks assembling by hand, or pay someone to produce, ready to share in a couple of minutes.",
        width: 882,
        height: 805,
      },
      {
        src: "/images/echoes/5-documents.png",
        alt: "Échoes Stories view, scanned letters and documents grouped into collections and individual documents",
        title: "Stories & documents",
        caption:
          "Scanned letters, journals, certificates, and clippings, sorted into collections like “Bertha's WW2 Letters” alongside standalone documents. Any upload containing a social security number is blocked before it is stored.",
        width: 1361,
        height: 1233,
      },
      {
        src: "/images/echoes/6-document-detail.png",
        alt: "Échoes document reader showing a 1944 Western Union telegram with a Historian summary and page-image / transcript toggle",
        title: "Document reader",
        caption:
          "A 1944 Western Union telegram reporting Pvt. Loren Schillie missing in action, with a summary up top and a toggle between the scanned page and its transcript. Questions asked here are answered from this document alone.",
        width: 1091,
        height: 1184,
      },
    ],
    tags: ["Next.js", "Supabase", "pgvector", "Agents", "xAI / Grok"],
    techStack: [
      "Next.js 16",
      "TypeScript",
      "Supabase",
      "pgvector",
      "Vercel AI SDK",
      "Vercel AI Gateway",
      "xAI / Grok",
      "Anthropic / Claude Opus",
      "OpenAI embeddings",
      "InsightFace (SCRFD)",
      "ONNX Runtime",
      "MediaPipe",
      "Tiptap",
      "Tailwind CSS",
    ],
    designDecisions: [
      {
        title: "Agent proposes, human approves, code writes.",
        body: "The Researcher never edits the family tree itself. After it answers, a separate pass compares the people the documents named against the tree and proposes what is missing, and a family member confirms, edits, or rejects each row before anything is written. An earlier version gave the model a tool to propose additions directly; it reliably skipped that step and sometimes claimed in prose to have done it. So proposing is no longer the model's to decide.",
      },
      {
        title: "The Historian answers once. The Researcher follows the trail.",
        body: "Both run on the same search underneath. The Historian searches once and answers. The Researcher loops, and every step of that loop is visible on screen and saved afterward, with a fixed limit on how many steps it may take before it has to conclude from what it found. Relationships like “great-great-grandfather” come from the family tree, not from the model counting generations.",
      },
      {
        title: "Think harder is a second model, not a longer prompt.",
        body: "After a standard run, a family member can send the exact same question to a stronger reasoning model. The button only appears when a different model is actually configured, so it never re-runs the same one and pretends to be deeper.",
      },
    ],
    // Deliberately terse, matching the Hearth grid: each card names one
    // capability and one constraint. Provider tags carry the vendor names.
    aiIntegrations: [
      {
        name: "Family Researcher agent",
        provider: "xAI / Grok + Anthropic / Claude Opus",
        description:
          "Multi-step search that plans, searches, checks the family tree, and searches again, showing each step live. Read-only: any proposed change to the tree goes to a person for review.",
      },
      {
        name: "Family Historian chat",
        provider: "xAI / Grok",
        description:
          "Conversational search across the whole archive, every answer linked to its source photos and documents. A document-scoped mode answers questions about only the page you are reading.",
      },
      {
        name: "Photo understanding",
        provider: "xAI / Grok + OpenAI embeddings",
        description:
          "Each photo gets a description, an estimated era, and a per-person signature so the same face can be found across decades of appearance changes.",
      },
      {
        name: "Document reading",
        provider: "xAI / Grok (vision)",
        description:
          "Scanned letters and records become searchable text. Uploads containing a social security number are blocked before they are stored.",
      },
      {
        name: "Search that understands meaning",
        provider: "Supabase pgvector + full-text search",
        description:
          "Meaning-based and keyword search combined, so a question in plain English finds the right records even when the words do not match.",
      },
    ],
    status: "live",
    order: 3,
  },
  {
    slug: "hearth",
    title: "Hearth",
    tagline:
      "The user manual your house never came with. Hearth turns photos, documents, and public records into the maintenance plan, inventory record, and historical archive your home has never had.",
    // No Overview section: the system diagram under the hero carries the
    // architecture, and the screenshots below carry the rest.
    thumbnail: hearthHero,
    heroImage: hearthHero,
    screenshots: [
      {
        src: "/images/hearth/01-dashboard.png",
        alt: "Hearth dashboard with AI-generated architectural sketch, home facts, emergency video panel, and habitat findings preview",
        title: "Dashboard",
        caption:
          "The home view: an AI-generated architectural sketch of the property, the facts pulled from public records, an emergency video reference panel, and a live preview of the habitat findings. Every tile is real data, updating as background workflows finish.",
        width: 1600,
        height: 1000,
      },
      {
        src: "/images/hearth/02-onboarding-discovery.png",
        alt: "Hearth onboarding screen narrating live public-records lookups and habitat checks",
        title: "Onboarding discovery",
        caption:
          "The first run narrates its own work as it happens: public records first, then radon, Superfund proximity, flood zones, and water quality. Showing the work builds more trust than a spinner ever could.",
        width: 1600,
        height: 1000,
      },
      {
        src: "/images/hearth/03-smart-uploader.png",
        alt: "Hearth Smart Uploader extracting structured fields from an appliance nameplate photo",
        title: "Smart Uploader",
        caption:
          "A photo of an appliance nameplate becomes a structured inventory record, with a review step between the extraction and the save. The same uploader takes multi-page service receipts.",
        width: 1600,
        height: 1000,
      },
      {
        src: "/images/hearth/04-inventory-detail.png",
        alt: "Hearth inventory detail page with extracted facts, Research this model panel, and decoded manufactured date",
        title: "Inventory detail",
        caption:
          "Each appliance gets its own page: the extracted facts, an on-demand “Research this model” panel that streams a grounded summary of service life and maintenance, and a manufactured-date tile decoded from the serial number.",
        width: 1600,
        height: 1000,
      },
      {
        src: "/images/hearth/05-habitat-superfund.png",
        alt: "Hearth habitat finding for EPA Superfund proximity with tiered distance model and contaminant descriptions",
        title: "Habitat: Superfund proximity",
        caption:
          "The finding for a nearby Superfund site: distance tier, NPL status, and EPA's Community Involvement Coordinator for the site. Every contaminant listed carries a plain-language description of what it actually is.",
        width: 1600,
        height: 1000,
      },
      {
        src: "/images/hearth/06-water-quality.png",
        alt: "Hearth water quality awareness panel showing utility lookup, SDWIS violations, and lead/copper sample data",
        title: "Habitat: Water quality awareness",
        caption:
          "The compliance picture for the home's own water system: violation history, the contaminants detected against their federal action levels, and the actions Hearth recommends for this specific source.",
        width: 1600,
        height: 1000,
      },
      {
        src: "/images/hearth/06a-water-quality_matrix.png",
        alt: "Hearth remediation matrix mapping the home's detected water contaminants against filter technologies, with a recommended carbon-block plus reverse-osmosis combination",
        title: "Habitat: Remediation matrix",
        caption:
          "The water module's real output, built from the home's own 2024 Consumer Confidence Report: every contaminant actually detected in the supply, mapped against six filter technologies, detected rows highlighted. Hearth reads that grid into one specific recommendation, with certifications named and install and annual costs attached, so it points at a product the homeowner can buy rather than a generic “consider a filter.”",
        width: 876,
        height: 1097,
      },
      {
        src: "/images/hearth/07-maintenance-panel.png",
        alt: "Hearth maintenance panel with tiered tasks, cadences, and per-task reasoning",
        title: "Maintenance panel",
        caption:
          "A real maintenance plan for one appliance, tiered by urgency and scheduled by cadence: interval, seasonal, one-time, per-use. Every task carries its own reasoning.",
        width: 1600,
        height: 1000,
      },
      {
        src: "/images/hearth/08-task-detail.png",
        alt: "Hearth task detail showing a dishwasher cleaning task with hard-water habitat modifier tightening the cadence to monthly",
        title: "Task detail with cross-module reasoning",
        caption:
          "Every task is one tap from a “why this task” card. Here a dishwasher-cleaning cadence tightened from the usual one to two months down to monthly, because the water-quality module found hard water in the county, and the card says exactly that.",
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
        title:
          "JSONB columns earn promotion to real columns only when a query pattern demands it.",
        body: "The inventory and document tables both carry a `metadata` JSONB column for subtype-specific fields that don't need cross-row queries yet, things like vehicle VINs and plate states, pet microchip numbers, or a receipt's vendor and line items. When a query pattern finally needs one of those fields as a real column, say, aggregating values for an insurance valuation, that shape migrates out of JSONB into a column of its own. Until then, JSONB keeps the schema small and the path to a new feature short.",
      },
      {
        title: "Workflow errors are sorted into terminal vs. retryable.",
        body: "Hearth's durable jobs run on Vercel Workflows, where a naive policy retries every failure as if it were transient. Hearth instead marks its orchestrator-internal errors as non-retryable: constraint violations, missing entities, a failed write. Those surface a deterministic bug in about two seconds rather than grinding through roughly thirty seconds of pointless retries, while genuinely transient errors like a flaky EPA call or a gateway hiccup still retry. That one distinction turns the workflow layer into a fast feedback loop during development instead of a latency tax.",
      },
    ],
    // Deliberately terse: the diagram above already explains how these fit
    // together, so each card only has to name the call and its one constraint.
    aiIntegrations: [
      {
        name: "Vision extraction pipeline",
        provider: "Anthropic / Claude Haiku",
        description:
          "Reads appliance nameplates, multi-page service receipts, and identifying documents. Haiku for fast, cheap structured extraction; every output is bound by a Zod schema, with unit tests pinning the no-prompt-leak contract.",
      },
      {
        name: "Research this model",
        provider: "Perplexity / Sonar",
        description:
          "A web-grounded summary of an appliance's service life, maintenance needs, and known issues, routed through the Vercel AI Gateway. It streams section by section, so there is real content on screen within seconds.",
      },
      {
        name: "Serial-number decode",
        provider: "Reasoning model (env-driven)",
        description:
          "Decodes a manufacture date from the serial number when no install date is on file. The model has to name its rule, apply it, and return null rather than guess; only high-confidence decodes persist.",
      },
      {
        name: "Maintenance synthesis workflow",
        provider: "Vercel Workflow SDK",
        description:
          "A durable background job turns the appliance's research summary, the home's habitat findings, and its receipts into a scheduled plan. Each task is stored with its own cadence, anchor, modifiers, and reasoning.",
      },
      {
        name: "Habitat data integration",
        provider: "Mapbox + EPA + FEMA",
        description:
          "Mapbox address autofill feeds coordinates into EPA Envirofacts, FEMA NFHL, EPA's water-utility layer, and SDWIS. Shared per-state caches spread the cost of slow federal APIs across everyone in the same area.",
      },
      {
        name: "Activity logs and methodology transparency",
        provider: "In-house",
        description:
          "Every habitat finding emits a step-by-step log of what was queried, what came back, and how severity was decided. The classification rules themselves are published on an in-app methodology page.",
      },
    ],
    // The only pages on any project that an anonymous visitor can open, so
    // they get their own section right under the diagram.
    publicPages: {
      heading: "Public water quality findings",
      intro:
        "Hearth publishes a water quality profile for each city it serves, and these two are open to anyone, no account needed. Every number on them comes from EPA's Safe Drinking Water records and the utility's own published annual water quality report. Hearth reads those records the same way it does for the households it watches over, and shows its work. The tone is awareness, not alarm: it is the same report the utility already mails out, made easier to understand.",
      pages: [
        {
          eyebrow: "Kalamazoo Public Water Supply",
          title: "Kalamazoo, Michigan",
          description:
            "A groundwater system serving about 190,000 people. Five years of EPA violation history, the most recent lead and copper sampling, forever chemicals (PFAS) monitoring, and every contaminant the utility's annual reports list as detected, with the trend across the reports on file.",
          url: "https://hearth.toddtech.llc/water/kalamazoo-mi",
        },
        {
          eyebrow: "Portage Public Water Supply",
          title: "Portage, Michigan",
          description:
            "The neighboring city, on its own groundwater system. The same picture: EPA compliance record, lead and copper sampling, forever chemicals (PFAS) monitoring, and each detected contaminant shown against the limit its report measures it by.",
          url: "https://hearth.toddtech.llc/water/portage-mi",
        },
      ],
      sourcesNote:
        "Sources on every page: EPA's Safe Drinking Water Information System for violations and lead and copper sampling, and each utility's published annual water quality report, the Consumer Confidence Report it sends to customers, for everything detected in the supply. Hearth adds the plain-English reading and nothing else.",
    },
    status: "live",
    order: 2,
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
