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

const aviaryHero: Screenshot = {
  src: "/images/aviary/0-hero.png",
  alt: "The Aviary dashboard: life list, live arrivals ticker, and new-arrival cards",
  width: 1507,
  height: 973,
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
      "A private invite-only family archive with conversational AI search across decades of photos and documents, plus a multi-hop Family Researcher agent that follows the trail from one record to the next.",
    description: [
      "Échoes is a private, invite-only family history portal built for a single extended family. It brings a large vintage photo archive together with the documents a family gathers over the years, from letters and certificates to news clippings, all in one searchable, conversational space. Strong RLS and access controls keep deeply personal material safe, so the grandkids can ask the archive what they would once have asked an elder.",
      "Échoes runs a production retrieval stack on Supabase with pgvector. Photos and documents are indexed for hybrid retrieval, fusing pgvector semantic search with PostgreSQL full-text search through Reciprocal Rank Fusion. Photo uploads move through a multi-stage AI pipeline: InsightFace (SCRFD, ONNX) detects faces server-side, MediaPipe maps a 478-point landmark mesh per face in the browser, and xAI Grok vision then describes the scene, estimates the era, and notes condition and identity cues. OpenAI embeddings are computed at the per-person-instance level, so a face ranks against every other appearance of that same person in the archive. That matters when a relative looks dramatically different from one decade to the next. Scanned documents take a separate path: vision-based OCR, SSN redaction enforcement, and chunk-level embeddings.",
      "The everyday interface is the Family Historian, a streaming RAG chat that answers natural-language questions across the entire archive and grounds every answer in citations. A query is first classified for intent and structured filters such as people, date range, location, and document type. It then runs through hybrid retrieval and is synthesized with multi-turn memory, with inline citations pointing back to the source photos and documents. A document-scoped variant narrows that same chat to a single open document, loading its chunks into context so you can interrogate just that page.",
      "Beside it sits the Family Researcher, built for the questions a single search cannot answer. The Historian retrieves once against the question you typed. The Researcher is a bounded multi-hop agent: it plans, searches the archive, looks people up, walks the family graph, and searches again from what it just learned, streaming a live “Following the trail” narration so you can watch it work. A question like “who does Bertha’s obituary mention that we don’t have on record?” is the kind of thing it exists for. The evidence lives across letters, obituaries, and the relationship graph, and no one document matches the question on its own.",
      "The agent is deliberately read-only. Four tools do the hunting: the same hybrid corpus search the Historian uses, person lookup with fuzzy and batched name matching, a one-hop relatives query, and a graph-computed kinship path so “great-great-grandfather” is a fact from the tree rather than a count the model might get wrong. After it answers, a separate reconciliation pass compares what the documents named against what the graph already records and proposes the missing people and relationships. A family member reviews, edits, and confirms each row; only then does a deterministic write path commit anything. Agent proposes, human approves, code writes. When the first pass is not enough, a “Think harder” button re-runs the same question on a deeper reasoning model (Claude Opus) instead of padding the prompt.",
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
          "The whole family rendered as a generational graph that runs from the great-grandparents down to the children's generation. Each person is a node, linked to the others by parent, sibling, spouse, and step-relationships. This same graph is what the Family Researcher reads, and what it can write after a family member reviews the proposal. Kinship questions return a computed degree and an ordered chain. People a document names who are not on the tree yet surface as additions to confirm, rather than as a silent gap.",
        width: 910,
        height: 717,
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
        title: "The agent never writes the family tree.",
        body: "The Researcher loop is read-only by construction. Anything that would change the graph goes through a deterministic reconciliation pass after the answer, then a review modal where a family member confirms, edits, or rejects each proposed person and relationship, with duplicates defaulting to “link to existing.” A fifth “propose additions” tool was tried first. The model reliably skipped it, because writing the answer is the turn that ends the loop, and it would even claim in prose that it had prepared a card it never produced. So proposing is no longer the model's to decide. Agent proposes, human approves, code writes.",
      },
      {
        title: "The Historian retrieves once. The Researcher loops.",
        body: "Same hybrid retrieval stack, different intelligence. The Historian classifies intent and searches once. The Researcher is a bounded, handwritten agent loop (not the SDK's auto-stepper) so every turn is observable: it streams a live “Following the trail” narration, persists the full trace with hop and token metrics, and stops at a hard hop cap rather than wandering. The corpus-search tool reuses the existing retriever unchanged and bypasses the intent classifier; the agent is the intelligence that classifier approximated, and it composes the next query from what the last hop found.",
      },
      {
        title: "Kinship is computed from the graph, not counted by the model.",
        body: "“How is X related to Y?” used to burn hops walking relatives generation by generation, and the model would miscount the “greats.” A dedicated tool runs a two-person BFS over confirmed edges and returns the degree plus the ordered chain of people that links them. The prompt tells the model to state that degree verbatim. A disconnected result is an honest “no recorded link,” not a cue to invent one.",
      },
      {
        title: "A tagged name is an ID, not a spelling.",
        body: "Typing @ in the ask box opens the family roster. Selecting a person inserts a pill bound to their id, so “which Loren?” is resolved before the first hop. The model receives those ids on the seeded question and skips name lookup for tagged people; a hop saved, and no disambiguation lottery. Untagged questions behave exactly as they did before.",
      },
      {
        title: "Think harder is a second model, not a longer prompt.",
        body: "After a standard run on Grok, a family member can re-run the exact same question through Claude Opus. The button is hidden unless a distinct advanced model is configured, so it never silently re-runs the same model and pretends to be deeper. Model identity is env-driven through the Vercel AI Gateway; swapping the pairing is a config change, never a code change.",
      },
    ],
    aiIntegrations: [
      {
        name: "Family Historian RAG chat",
        provider: "xAI / Grok",
        description:
          "Streaming, citation-grounded conversational search across the entire archive. Query intent is classified, hybrid retrieval runs, results are synthesized with multi-turn memory and inline source citations. A document-scoped mode answers questions about an open document with its chunks loaded into context.",
      },
      {
        name: "Family Researcher agent",
        provider: "xAI / Grok + Anthropic / Claude Opus",
        description:
          "A handwritten multi-hop agent loop with four read tools: hybrid corpus search, person lookup (fuzzy, batched, nickname-aware), immediate relatives, and graph-computed kinship. It streams a live trail of each hop, persists the full trace, and can re-run the same question on Claude Opus via “Think harder.” The loop never writes; a hard hop cap forces a conclusion from whatever it found.",
      },
      {
        name: "Graph reconciliation",
        provider: "In-house (structured output)",
        description:
          "After a graph-touching run, a deterministic generateObject pass names people and relationships the documents support that the tree is missing. Candidates are deduped against existing people, sibling intents auto-wire into primitive edges, and already-recorded links are dropped. A family member reviews the proposal row by row; only confirmed rows commit, stamped researcher-origin.",
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
    order: 3,
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
        title:
          "Data shared across homes is ingested once and cached for everyone.",
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
        provider: "Mapbox + EPA + FEMA",
        description:
          "Address autofill via Mapbox feeds coordinates into a set of public-data lookups: EPA Envirofacts SEMS for Superfund sites, FEMA NFHL for flood zones, EPA's CWS service-area layer for drinking-water utilities, and SDWIS for compliance and lead/copper samples. Per-state shared caches spread the cost of slow EPA calls across every user in the same area.",
      },
      {
        name: "Activity logs and methodology transparency",
        provider: "In-house",
        description:
          "Every habitat finding emits a step-by-step activity log narrating what was queried, what came back, what rule was applied, and how severity was decided. Every classification rule is published on an in-app methodology page so users can see how Hearth thinks.",
      },
    ],
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
