# i18n Migration Runbook

## Purpose
This runbook documents the production migration approach for locale-prefixed routing (`/en`, `/vi`), operational checks, and rollback steps for the portfolio app.

## Rationale
- Introduce multilingual UX with stable URL semantics for SEO and sharing.
- Keep content governance auditable via scriptable checks.
- Reduce launch risk using staged rollout and canary checkpoints.
- Preserve fast rollback paths for routing and metadata regressions.

## Scope
- Locale routing policy and middleware behavior.
- Landing and resume localized surfaces.
- SEO artifacts (`sitemap`, `robots`, metadata, Open Graph, manifest).
- Validation gates and release criteria.

## Prerequisites
- Node dependencies installed (`npm install`).
- Working tree is clean or intentionally tracked.
- `messages/en.json` and `messages/vi.json` are present.

## Release Validation Gates
Run all commands before rollout:

```bash
npm run lint
npm run test:e2e
npm run check:translation-integrity
npm run check:content-sync
npm run build
```

Acceptance guidance:
- `lint`, `test:e2e`, `check:translation-integrity`, and `build` must pass.
- `check:content-sync` may contain only explicitly accepted non-blocking drift; resolve blocking mismatches before release.

## Staged Rollout Plan
1. Stage 0: Internal verification
   - Validate all release gates in CI and local reproducibility.
   - Confirm locale routes render for `/en`, `/vi`, `/en/resume`, `/vi/resume`, `/en/resume/harvard`, `/vi/resume/harvard`.
2. Stage 1: Canary exposure (5-10% traffic or time-boxed cohort)
   - Observe redirects from unprefixed routes to locale-prefixed routes.
   - Monitor page errors, hydration warnings, and route-level anomalies.
3. Stage 2: Expanded exposure (50%)
   - Re-check route parity and metadata parity across locales.
   - Confirm no regressions in E2E journeys and print controls.
4. Stage 3: Full rollout (100%)
   - Keep enhanced monitoring window for 24-48 hours.
   - Lock baseline artifacts and document final state.

## Canary Checklist
- Locale negotiation works in priority order: query override -> locale cookie -> `Accept-Language` -> default locale.
- Unprefixed route redirects are deterministic and do not loop.
- Locale switch persists preference across sessions.
- Theme toggle works after locale transitions.
- Resume print controls stay hidden in print media on localized resume routes.
- `sitemap.xml` and `robots.txt` are reachable and valid.
- Open Graph and canonical/hreflang metadata remain locale-consistent.
- No spike in 4xx/5xx for localized route families.

## Stop/Go Criteria
Go if:
- All release gates pass.
- No P0/P1 routing, hydration, or metadata regressions in canary.

Stop if:
- Redirect loops, locale misrouting, or persistent hydration mismatch is detected.
- SEO artifacts become invalid/missing for localized routes.
- E2E critical journeys fail in canary.

## Rollback Decision Tree
1. Severe user impact (routing loops, broken navigation, blank pages)
   - Immediately disable locale routing behavior in middleware and restore prior redirect behavior.
   - Redeploy hotfix.
2. SEO artifact regression (broken canonical/hreflang/sitemap/robots)
   - Revert metadata and SEO artifact changes to previous stable commit.
   - Redeploy and revalidate crawl endpoints.
3. Content drift or translation fault
   - Revert message/content changes for affected locale.
   - Keep locale routing if route stability is intact.

## Rollback Procedure
1. Revert offending commit(s) or toggle middleware logic to previous stable policy.
2. Re-run release gates:

```bash
npm run lint
npm run test:e2e
npm run check:translation-integrity
npm run check:content-sync
npm run build
```

3. Redeploy reverted version.
4. Verify smoke routes and SEO artifacts.
5. Log incident summary and follow-up fixes.

## Post-Rollout Handoff
- Record final command outputs from release gates.
- Document accepted non-blocking content-sync drift (if any) and owner for remediation.
- Link this runbook in project onboarding docs.
