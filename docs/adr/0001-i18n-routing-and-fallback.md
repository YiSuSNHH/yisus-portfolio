# ADR 0001: i18n Library, URL Routing, and Fallback Policy

- Status: Accepted
- Date: 2026-03-25
- Bead: portfolio-v4u.1.3
- Related Beads: portfolio-v4u.2.1, portfolio-v4u.2.4, portfolio-v4u.3.1

## Context

The portfolio needs bilingual support (English and Vietnamese) across landing pages, resume pages, metadata, and print flows.

Current state:
- App Router pages are currently single-locale and mostly hard-coded.
- There is no locale routing middleware.
- Translatable content exists in both markdown files (`resume/`) and in `data/portfolio.ts`.

We need stable architecture decisions before implementing locale routing and string extraction.

## Decision 1: i18n Package Choice

Use `next-intl` as the i18n library for App Router.

Rationale:
- Native support for Next.js App Router and route segment locales.
- Clear server/client APIs for translation boundaries.
- Good fit for static content pages plus localized metadata.
- Minimal custom infrastructure compared to manual dictionary wiring.

## Decision 2: Locale URL Prefix Policy

Adopt explicit locale-prefixed URLs for all public pages.

Examples:
- `/en`
- `/vi`
- `/en/resume`
- `/vi/resume/harvard`

Rules:
- Supported locales: `en`, `vi`.
- Default locale: `en`.
- Unprefixed public routes are transitional and must redirect (see Decision 3).

## Decision 3: Default-Locale Redirect Behavior

Redirect all unprefixed public routes to the default locale (`en`) during migration.

Examples:
- `/` -> `/en`
- `/resume` -> `/en/resume`

Unknown locale segments should rewrite/redirect to default locale equivalents where possible.

Notes:
- Use temporary redirects during rollout to reduce SEO disruption.
- Move to permanent redirects after localized routes are stable.

## Decision 4: Missing-Key and Fallback Strategy

Fallback chain for translation lookup:
1. Requested locale key
2. Default locale (`en`) key
3. Render key path token in non-production only

Production behavior:
- Never crash page render due to missing key.
- Render default locale fallback value.
- Emit structured warning logs for observability and follow-up.

Development behavior:
- Show key path token (for fast author feedback).
- Also log missing key with namespace and locale.

## Decision 5: Client/Server Translation Boundaries

Server-first translation policy:
- Server Components are the default place for string resolution.
- Metadata generation (title/description/OG) resolves on the server.

Client Components:
- Receive translated strings through props when practical.
- Use client translation hooks only for interactive UI that cannot be pre-resolved.

This boundary keeps hydration payloads predictable and avoids unnecessary client i18n wiring.

## Decision 6: Migration Fallback Mode

Use a staged migration mode to avoid breaking existing routes while work is in progress.

Phase behavior:
- Phase 0/1: Locale routes and middleware added; unprefixed routes redirected.
- Phase 2: Existing UI/resume copy incrementally extracted to namespaces.
- Phase 3: Add sync checks to detect content drift between markdown and data layers.

Rollback behavior:
- Keep redirect mapping centralized in middleware to allow quick rollback of locale routing decisions.

## Constraints

- Preserve existing path semantics as much as possible (`/resume`, `/resume/harvard` mapped to locale-prefixed equivalents).
- Do not block deployment on incomplete localization; fallback must keep pages functional.
- Keep implementation compatible with App Router and static optimization where possible.

## Non-Goals

- No machine translation workflow in this phase.
- No CMS integration in this phase.
- No runtime locale addition beyond `en` and `vi`.
- No locale-specific domain strategy (single domain only).

## Consequences

Positive:
- Clear route conventions for all downstream i18n tasks.
- Predictable fallback behavior and fewer runtime failures.
- Explicit client/server translation ownership.

Trade-offs:
- Temporary redirect overhead during migration.
- Initial namespace extraction work across UI and resume pages.

## Implementation Notes for Next Beads

- `portfolio-v4u.2.1`: add locale route scaffold and middleware using this URL policy.
- `portfolio-v4u.2.4`: implement negotiation only as input to redirect target; URL remains source of truth.
- `portfolio-v4u.3.1`: extract strings into namespaces aligned with server-first translation usage.