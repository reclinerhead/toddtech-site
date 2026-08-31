# TechnicalGuide.md

The living technical guide for the ToddTech LLC public site. It describes what is built and why, as it exists today. Workflow rules live in the global CLAUDE.md; resume-facing project context lives in `ProjectExperience.md` (governed by `AGENTS.md`); change history lives in git log and PR descriptions.

## What this site is

The public marketing and portfolio site for ToddTech LLC (toddtech.llc), positioning the company as an Applied AI engineering practice in Kalamazoo, Michigan. It is a small, fully static site with one interactive feature: a spam-protected contact form. There is no database, no auth, and no user-generated content. Everything renders at build time except the contact form's server action.

## Stack

- Next.js 16 (App Router, Turbopack builds) on Vercel, with Vercel Analytics.
- React 19 with the React Compiler enabled (`reactCompiler: true` in `next.config.ts`).
- TypeScript, strict. Path alias `@/*` maps to `src/*`.
- Tailwind CSS v4 via `@tailwindcss/postcss`. Theme extensions live in `src/app/globals.css` under `@theme inline`; there is no tailwind.config file.
- pnpm only. The lockfile is `pnpm-lock.yaml`; never run npm or yarn here.
- Fonts via `next/font/google`, self-hosted at build time: Geist (body, `--font-geist-sans`), Geist Mono, Space Mono (`--font-display`, used for nav brand and eyebrow labels), Archivo (`--font-spec`, used only by the Aviary system diagram).

## Route map

Three routes, all prerendered:

- `/` (`src/app/page.tsx`): the entire marketing page in one file. Sections in order: fixed `SiteNav`, full-viewport hero with staggered `animate-fade-up` entrances, four service cards, "Why Work With Me", `Portfolio` (the project card grid, `id="portfolio"`), and the contact section (`id="contact"`) with info cards beside `ContactForm`. In-page nav links use `/#portfolio` and `/#contact` anchors.
- `/portfolio/[slug]` (`src/app/portfolio/[slug]/page.tsx`): one shared detail template for every project, statically generated via `generateStaticParams` over the data module. Unknown slugs hit `notFound()` and the custom `not-found.tsx`.
- Everything else falls through to the root `not-found` handling.

## Data-driven portfolio

`src/data/portfolio.ts` is the single source of truth for project content. The `Project` interface drives both the homepage card grid (`Portfolio.tsx`) and the detail template. Adding or editing a project is a data edit plus images in `public/images/`; no new pages.

Behavior encoded in the template, worth knowing before editing:

- `heroImage` is a switch. When present, the hero shows a large zoomable screenshot (`HeroScreenshot`, lightbox on click) and the gallery renders as a captioned grid (`ProjectGalleryGrid`). When absent, the gallery renders as a strip (`ProjectGallery`) below the hero instead.
- `designDecisions` and `aiIntegrations` are optional; their sections render only when present and non-empty.
- `order` controls grid ordering, and prev/next navigation on detail pages follows the same ordering via `getAdjacentProjects`.
- `status` maps to a badge; `live` shows no badge on the homepage cards but does show one on detail pages.
- Screenshot dimensions in the data are real pixel dimensions; the lightbox uses them for zoom quality.

Portfolio prose is Todd's voice and is treated as copy, not filler. Trim or rewrite only with explicit direction, and keep facts verifiable against the source project repos (the Aviary platform lives in `C:\WEBDEV\project-squirrel-grok`; check its TechnicalGuide.md and Servers/ runbooks before making claims about station status or hardware).

## The Aviary system diagram

`src/app/components/AviarySystemDiagram.tsx` is a deliberate one-off: a responsive port of a Claude Design spec-sheet infographic (project "Aviary system diagram"), mounted directly beneath the hero for the aviary slug only. It replaces what was previously several paragraphs of architecture prose and the AI Integrations card grid on that page.

Its design intentionally does not use the site palette. It keeps the source design system's look (Archivo, paper `#f3f2f2`, ink `#201e1d`, red accent `#ec3013`, square corners) with all color tokens scoped inside the component, framed like the screenshots (rounded corners, ring, deep shadow) so it reads as a printed datasheet exhibited on the dark page. At `md` and up it mirrors the 1600px desktop artboard (three station cards, horizontal pipeline); below `md` it follows the 430px mobile artboard (stacked, vertical arrows). Content edits (station status, pipeline stages) are data edits in the arrays at the top of the file. Facts must match the platform repo's runbooks.

## Contact pipeline

The one dynamic path on the site. `ContactForm.tsx` (client) posts to `submitContact` in `src/app/contact/actions.ts` (server action) via `useActionState`. The action, in order: requires name, email, and message; enforces length caps; validates email shape; requires and verifies a Cloudflare Turnstile token against `siteverify`; HTML-escapes every field; sends one email through Resend with `replyTo` set to the visitor. The submit button stays disabled until Turnstile issues a token. The destination address never appears in markup; that is the point of the design.

Environment variables (set in Vercel, mirrored in `.env.local`):

- `RESEND_API_KEY`: Resend credential.
- `CONTACT_EMAIL`: destination inbox. The action fails soft with a user-facing error if unset.
- `RESEND_FROM_EMAIL`: optional; defaults to `ToddTech LLC <noreply@toddtech.llc>`.
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY` / `TURNSTILE_SECRET_KEY`: Turnstile pair; the public key is client-visible by design.

## Design language

Dark, technical, cyan-accented. The ground is `#030712` with two fixed radial cyan glows and a masked dot-grid overlay, all defined on `body` in `globals.css`; page components sit on transparent backgrounds and inherit it. Recurring vocabulary: `bg-gray-800/50 border border-gray-700 rounded-xl` cards with `hover:border-cyan-500/50`, uppercase letter-spaced cyan kickers above section headings, gradient hairline dividers, and cyan glow shadows on primary CTAs. Keyframe animations (`fade-up`, `pulse-dot`, `scroll-line`) live in `globals.css` and are used on the homepage hero only. Styling is Tailwind utilities plus the occasional inline style for one-off gradients and shadows; no CSS modules, no styled-components. Images go through `next/image` with explicit `sizes`.

Security headers (nosniff, frame deny, referrer policy, permissions policy) are set globally in `next.config.ts`.

## Testing and CI state

There is currently no test suite and no `test` script; nothing in the codebase meets the bar for unit coverage (no pure logic beyond trivial formatting). If ranking, parsing, or other pure logic ever lands, add Vitest per the standard workflow at that point. Quality gates today are `pnpm build`, `pnpm lint`, and the Vercel preview deployment on every PR. Merges to main deploy production automatically via Vercel.
