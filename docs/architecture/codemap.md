# Portfolio Architecture Codemap

- Date: 2026-03-25
- Bead: portfolio-v4u.1.1

## 1. Purpose and Runtime

This repository is a Next.js App Router portfolio/resume site with:
- Landing page and section-based portfolio UI
- Resume pages (styled and Harvard variants)
- SEO/metadata route artifacts (sitemap, robots, OG image, manifest)

Primary runtime and framework evidence:
- Next font loading in `app/layout.tsx`.
- Root metadata object in `app/layout.tsx`.
- Root app shell and provider wiring in `app/layout.tsx`.

## 2. Route Map (App Router)

Primary pages:
- `/` -> `app/page.tsx` (client entry for landing experience)
- `/resume` -> `app/resume/page.tsx`
- `/resume/harvard` -> `app/resume/harvard/page.tsx`

Supporting routes/artifacts:
- Loading UI: `app/loading.tsx`
- Not found page: `app/not-found.tsx`
- Sitemap: `app/sitemap.ts`
- Robots: `app/robots.ts`
- Manifest: `app/manifest.ts`
- Open Graph image: `app/opengraph-image.tsx`
- Apple icon image route: `app/apple-icon.tsx`

## 3. Client/Server Boundaries

Client pages/components are explicitly marked with `"use client"`:
- `app/page.tsx`
- `app/resume/page.tsx`
- `app/resume/harvard/page.tsx`
- `components/ThemeProvider.tsx`
- `components/ThemeToggle.tsx`
- `components/Hero.tsx`
- `components/HeroBackground.tsx`

Server-capable framework shell:
- `app/layout.tsx` (metadata and provider composition)

Boundary summary:
- Root layout handles global metadata and wraps all pages with theme context.
- Most interactive UI (theme toggle, hero animation, resume rendering) is client-rendered.

## 4. Dynamic Imports and Split Points

Landing page (`app/page.tsx`) lazy-loads major sections via `next/dynamic`:
- `Skills`
- `Projects`
- `Experience`
- `Contact`

Each has a loading fallback spinner in the dynamic import config.

Hero 3D background (`components/Hero.tsx`):
- Imports `HeroBackground` dynamically.
- Sets `ssr: false` for browser-only rendering.
- Uses a null loading fallback to avoid layout noise.

## 5. Theme Handling

Theme provider lifecycle:
- `app/layout.tsx` wraps children in `ThemeProvider`.
- `components/ThemeProvider.tsx` manages theme state and exposes `useTheme`.
- `components/ThemeToggle.tsx` consumes theme context and renders toggle UI.
- Theme toggles are currently placed in both `app/page.tsx` and `app/resume/page.tsx`.

Flow:
1. Root provider initializes theme state.
2. Toggle components invoke context setter.
3. Theme class/state affects global styles and component appearance.

## 6. Data Ownership and Content Flow

Canonical in-app data object:
- `data/portfolio.ts` exports `portfolioData` and `PortfolioData` type.

Read paths:
- `app/page.tsx` reads personal data for landing and nav contact actions.
- `components/Hero.tsx` reads personal/about data.
- `app/resume/page.tsx` reads full personal/about/skills/experience/education.
- `app/resume/harvard/page.tsx` reads filtered resume-oriented data.

Rendering flow:
1. `portfolioData` is imported directly by pages/components.
2. UI sections render from this object without API/network fetches.
3. Resume routes and landing sections share the same data source, which reduces duplication risk but requires governance for localization.

## 7. Component Topology

Component barrel:
- `components/index.ts` is used by dynamic imports in `app/page.tsx`.

Landing composition in `app/page.tsx`:
- Nav + ThemeToggle
- `Hero`
- Lazy sections (`Skills`, `Projects`, `Experience`, `Contact`)
- Back-to-top button

Resume composition:
- `app/resume/page.tsx` includes print controls and theme toggle.
- `app/resume/harvard/page.tsx` provides a simpler ATS-oriented variant.

## 8. SEO and Metadata Strategy

Global metadata in `app/layout.tsx` includes title/description/OG/Twitter metadata.

Route artifacts:
- `app/sitemap.ts` defines sitemap entries.
- `app/robots.ts` includes sitemap pointer.
- `app/manifest.ts` defines PWA metadata and icons.
- `app/opengraph-image.tsx` and `app/apple-icon.tsx` generate edge-rendered image assets.

## 9. Boundaries Relevant to i18n Work

For upcoming i18n implementation:
- URL and locale behavior will be introduced at App Router/middleware boundaries.
- String extraction will primarily impact client components and page-level text.
- Shared `portfolioData` and `resume/*.md` require explicit governance to avoid content drift.

This codemap is intended to anchor Phase 0 decisions and unblock Phase 1 routing implementation.