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
      "Private, invite-only family history portal — AI-augmented vintage photo and document archive.",
    description: [
      "Échoes is a private, invite-only family history portal designed to preserve and explore vintage photos, scanned documents, and family records. It is not a public product — it is built for a single extended family, with strict access controls and a focus on keeping deeply personal material safe while making it actually useful.",
      "Every uploaded photo is analyzed by Grok vision on arrival: the model estimates the era, describes the setting, identifies likely subjects and visual cues, and reports a confidence score. Those signals power filtering, search, and the visual timeline. People-tagging is augmented by vector embeddings so a search for a relative's nickname, maiden name, or family pet name still surfaces the right photos.",
      "A RAG-based Family Historian chat is in active development. It draws on the entire archive — photos, captions, documents, and tagged metadata — to answer questions in natural language: who is in this picture, when was this taken, what was happening in the family that year. The goal is for grandkids to be able to ask the archive questions the way they would ask an elder.",
    ],
    thumbnail: echoesThumbnail,
    screenshots: [echoesThumbnail],
    tags: ["Next.js", "Supabase", "xAI / Grok", "OpenAI", "Anthropic"],
    techStack: [
      "Next.js 16",
      "TypeScript",
      "Supabase",
      "xAI / Grok (vision)",
      "OpenAI (embeddings)",
      "Anthropic (Claude)",
      "Tailwind CSS",
    ],
    aiIntegrations: [
      {
        name: "Photo vision analysis",
        provider: "xAI / Grok",
        description:
          "Each uploaded photo is analyzed on arrival — era estimation, scene description, identifiable subjects, and a per-field confidence score that drives filtering and search.",
      },
      {
        name: "Vector embeddings for people tagging",
        provider: "OpenAI",
        description:
          "Embeddings make people search robust to maiden names, nicknames, and informal family references. A search for one form of a name surfaces photos tagged with any of them.",
      },
      {
        name: "RAG-based Family Historian chat",
        provider: "Anthropic",
        description:
          "In development. A chat over the entire archive — photos, captions, documents, metadata — that answers questions in natural language. Built so a grandchild can ask the archive what they would have asked an elder.",
      },
    ],
    status: "in-development",
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
