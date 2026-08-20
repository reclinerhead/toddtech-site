# Project Experience — TODDTECH Site

**What:** the public marketing and portfolio website for TODDTECH LLC, the author's own company
**Active:** March 2026 – present · live in production on Vercel
**Last updated:** 2026-08-20 · updated after milestones, not every change (see AGENTS.md)

> **Purpose of this file.** A self-contained, factual summary of this project and the skills it demonstrates, written to be pasted into an AI session for resume building, cover letters, or interview prep. This is deliberately the smallest project in the portfolio — a focused public site, represented at its honest scale.

## The project in one paragraph

The public web presence for TODDTECH LLC: a portfolio site presenting project work with per-project detail pages and image galleries, plus a spam-protected contact pipeline. Its job is to be fast, clean, and professional — and to demonstrate that the author ships and operates public production websites end to end, from code through DNS, deployment, analytics, and inbound email, for a real business entity he owns.

## Skills demonstrated

- Shipped and operates a public production website end to end: Next.js App Router (React Server Components) on Vercel, with web analytics wired in.
- Data-driven portfolio architecture: all project entries live in one typed data module that renders the portfolio list, gallery grid, and dynamic per-project routes (`/portfolio/[slug]`) with proper not-found handling — adding a project is a data edit, not new pages.
- Built a production contact pipeline without exposing an email address: a server action delivers transactional email via Resend, gated by Cloudflare Turnstile bot protection — a working example of the modern replacement for the perpetually-spammed contact form.
- Publishes the work of an actual company: the site fronts TODDTECH LLC, the author's own business.

## Skills in development

- **Portfolio as a living surface** — the `ProjectExperience.md` documents maintained across all of the author's repos (this file's siblings) are the upstream content source; keeping the public portfolio synchronized with them is the intended evolution.

## Technology inventory

Next.js App Router / React / TypeScript · Tailwind CSS · Vercel (hosting, analytics) · Resend (transactional email) · Cloudflare Turnstile (bot protection) · yet-another-react-lightbox · pnpm
