# TechnicalGuide.md

The living technical guide for the ToddTech LLC public site. It describes what is built and why, as it exists today. Workflow rules live in the global CLAUDE.md; resume-facing project context lives in `ProjectExperience.md` (governed by `AGENTS.md`); change history lives in git log and PR descriptions.

## What this site is

The hiring portfolio of Todd Wyatt at toddtech.llc. It is not a services marketing site: its audience is hiring managers, CTOs, and recruiters, and its job is to show what Todd builds, that it runs in production, how he thinks, and how to reach him. ToddTech LLC is the wordmark (the domain matches) and the contracting vehicle for subcontract and corp-to-corp work, so it stays visible but secondary to Todd's name and role. Target roles, in preference order: applied AI and forward deployed engineering first, .NET and modernization work second; copy that lists roles keeps that order and uses the phrase "forward deployed engineer" verbatim because recruiters search for it. Every claim on the site is interview-defensible and sourced from the sibling repos' `ProjectExperience.md` files or Todd's resume.

It is a small, fully static site with one interactive feature: a spam-protected contact form. There is no database, no auth, and no user-generated content. Everything renders at build time except the contact form's server action.

## Stack

- Next.js 16 (App Router, Turbopack builds) on Vercel, with Vercel Analytics.
- React 19 with the React Compiler enabled (`reactCompiler: true` in `next.config.ts`).
- TypeScript, strict. Path alias `@/*` maps to `src/*`.
- Tailwind CSS v4 via `@tailwindcss/postcss`. Theme extensions live in `src/app/globals.css` under `@theme inline`; there is no tailwind.config file.
- pnpm only. The lockfile is `pnpm-lock.yaml`; never run npm or yarn here.
- Fonts via `next/font/google`, self-hosted at build time: Geist (body, `--font-geist-sans`), Geist Mono, Space Mono (`--font-display`, used for nav brand and eyebrow labels), Archivo (`--font-spec`, used only by the system diagrams).

## Route map

Three routes, all prerendered:

- `/` (`src/app/page.tsx`): the entire homepage in one file. Sections in order: fixed `SiteNav`, full-viewport hero with staggered `animate-fade-up` entrances (name and role, production subhead, availability line, CTAs to the work and GitHub, trust line), `Portfolio` (the project card grid, `id="portfolio"`) directly under the hero because it is the strongest content, a six-tile Capabilities grid (each tile ends with a "Proof" line naming the project or employer that demonstrates it), "How I work" (six border-left points), About (`id="about"`, one paragraph), and the contact section (`id="contact"`) with a contact-info card and a "Roles I'm targeting" card beside `ContactForm`. Section copy lives in typed arrays at the top of the file; the sections are plain JSX over them. In-page nav links use `/#portfolio`, `/#about`, and `/#contact` anchors; anchored sections carry `scroll-mt-16` to clear the fixed nav. A resume link and a LinkedIn link are intentionally absent until the PDF and URL exist.
- `/portfolio/[slug]` (`src/app/portfolio/[slug]/page.tsx`): one shared detail template for every project, statically generated via `generateStaticParams` over the data module. Unknown slugs hit `notFound()` and the custom `not-found.tsx`.
- Everything else falls through to the root `not-found` handling.

## Data-driven portfolio

`src/data/portfolio.ts` is the single source of truth for project content. The `Project` interface drives both the homepage card grid (`Portfolio.tsx`) and the detail template. Adding or editing a project is a data edit plus images in `public/images/`; no new pages.

Behavior encoded in the template, worth knowing before editing:

- `heroImage` is a switch. When present, the hero shows a large zoomable screenshot (`HeroScreenshot`, lightbox on click) and the gallery renders as a captioned grid (`ProjectGalleryGrid`). When absent, the gallery renders as a strip (`ProjectGallery`) below the hero instead.
- `description`, `designDecisions`, and `aiIntegrations` are all optional; their sections render only when present and non-empty. `description` is optional because a project fronted by a system diagram does not need an Overview section repeating it in prose; Hearth omits it entirely.
- `order` controls grid ordering, and prev/next navigation on detail pages follows the same ordering via `getAdjacentProjects`.
- `status` maps to a badge; `live` shows no badge on the homepage cards but does show one on detail pages.
- Screenshot dimensions in the data are real pixel dimensions; the lightbox uses them for zoom quality.

Portfolio prose is Todd's voice and is treated as copy, not filler. Trim or rewrite only with explicit direction, and keep facts verifiable against the source project repos (the Aviary platform lives in `C:\WEBDEV\project-squirrel-grok`; check its TechnicalGuide.md and Servers/ runbooks before making claims about station status or hardware).

## System diagrams

Two projects lead with a spec-sheet infographic instead of architecture prose: `AviarySystemDiagram.tsx` and `HearthSystemDiagram.tsx`, both in `src/app/components/`. Each is a hand-built responsive port of a Claude Design artboard, so the detail template picks one by slug through the `systemDiagrams` lookup at the top of `src/app/portfolio/[slug]/page.tsx` and renders it between the hero divider and Tech Stack. A slug with no entry simply gets no diagram; adding a third means writing the component and adding one line to that map.

Their design intentionally does not use the site palette. Both keep the source design system's look (Archivo, paper `#f3f2f2`, ink `#201e1d`, red accent `#ec3013`, square corners) with an identical set of color tokens scoped inside each component, framed like the screenshots (rounded corners, ring, deep shadow) so they read as printed datasheets exhibited on the dark page. At `md` and up each mirrors its desktop artboard; below `md` it stacks and the horizontal arrows become vertical ones. Content edits are data edits in the typed arrays at the top of each file.

Because the diagram carries the architecture, the page around it is deliberately thin. The Aviary diagram replaced several paragraphs of prose and that page's AI Integrations grid. The Hearth diagram replaced the whole Overview section, cut its screenshot captions to a sentence or two apiece, and cut Selected Design Decisions to the only two the diagram does not already carry (terminal-vs-retryable workflow errors, and JSONB promotion). Keep that discipline when editing: if the diagram says it, the prose should not repeat it.

Facts in both must match the source project repos (the Aviary platform lives in `C:\WEBDEV\project-squirrel-grok`; check its TechnicalGuide.md and `Servers/` runbooks before making claims about station status or hardware).

## Contact pipeline

The one dynamic path on the site. `ContactForm.tsx` (client) posts to `submitContact` in `src/app/contact/actions.ts` (server action) via `useActionState`. The action, in order: requires name, email, and message; enforces length caps; validates email shape; requires and verifies a Cloudflare Turnstile token against `siteverify`; HTML-escapes every field; sends one email through Resend with `replyTo` set to the visitor. The submit button stays disabled until Turnstile issues a token. The destination address never appears in markup; that is the point of the design.

Environment variables (set in Vercel, mirrored in `.env.local`):

- `RESEND_API_KEY`: Resend credential.
- `CONTACT_EMAIL`: destination inbox. The action fails soft with a user-facing error if unset.
- `RESEND_FROM_EMAIL`: optional; defaults to `ToddTech LLC <noreply@toddtech.llc>`.
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY` / `TURNSTILE_SECRET_KEY`: Turnstile pair; the public key is client-visible by design.

## Design language

Dark, technical, cyan-accented. The ground is `#030712` with two fixed radial cyan glows and a masked dot-grid overlay, all defined on `body` in `globals.css`; page components sit on transparent backgrounds and inherit it. Recurring vocabulary: `bg-gray-800/50 border border-gray-700 rounded-xl` cards with `hover:border-cyan-500/50`, uppercase letter-spaced cyan kickers above section headings, gradient hairline dividers, and cyan glow shadows on primary CTAs. Keyframe animations (`fade-up`, `pulse-dot`, `scroll-line`) live in `globals.css` and are used on the homepage hero only. Styling is Tailwind utilities plus the occasional inline style for one-off gradients and shadows; no CSS modules, no styled-components. Images go through `next/image` with explicit `sizes`.

`SiteNav` is a client component so the mobile menu can hold state. Desktop shows Work, About, GitHub (external, new tab), and the Contact button; below `md` a single button toggles a panel under the bar with the same links stacked. The button carries `aria-expanded` and `aria-controls`, its accessible label flips between "Open menu" and "Close menu", and the panel closes on link tap and on Escape. No dependency beyond the two lucide glyphs; the panel reuses the nav's glass treatment.

Site metadata (title, description, Open Graph) is defined once in `src/app/layout.tsx`; the homepage overrides only the title with an `absolute` value so the `%s | ToddTech LLC` template does not double the suffix. Project pages set their own Open Graph block from the portfolio data.

Security headers (nosniff, frame deny, referrer policy, permissions policy) are set globally in `next.config.ts`.

## Testing and CI state

There is currently no test suite and no `test` script; nothing in the codebase meets the bar for unit coverage (no pure logic beyond trivial formatting). If ranking, parsing, or other pure logic ever lands, add Vitest per the standard workflow at that point. Quality gates today are `pnpm build`, `pnpm lint`, and the Vercel preview deployment on every PR. Merges to main deploy production automatically via Vercel.
