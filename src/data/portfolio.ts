export type ProjectStatus =
  | "live"
  | "in-development"
  | "coming-soon"
  | "private";

export interface Screenshot {
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
}

export interface AIIntegration {
  name: string;
  provider: string;
  description: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string[];
  thumbnail: Screenshot;
  screenshots: Screenshot[];
  tags: string[];
  techStack: string[];
  aiIntegrations?: AIIntegration[];
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
