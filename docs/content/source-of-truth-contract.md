# Content Source-of-Truth Contract

- Date: 2026-03-25
- Bead: portfolio-v4u.1.2
- Scope: `resume/vi-raw.md` -> `resume/vi.md` -> `resume/en.md` -> `data/portfolio.ts`

## 1. Goal

Define one deterministic content governance contract for resume and portfolio data so EN/VI versions remain consistent while preserving technical accuracy.

## 2. Artifact Roles and Owners

| Artifact | Purpose | Owner | Allowed content |
|---|---|---|---|
| `resume/vi-raw.md` | Internal canonical source with full notes and editorial guidance | Content owner (primary maintainer) | Full detail, internal notes, sync instructions |
| `resume/vi.md` | Shareable clean Vietnamese resume | Content owner + reviewer | Public-safe, concise Vietnamese version |
| `resume/en.md` | Shareable clean English resume | Content owner + reviewer | Public-safe English translation aligned to VI clean |
| `data/portfolio.ts` | Runtime portfolio content for UI and resume pages | Engineering owner | Structured app data matching approved clean resumes |

Authority order:
1. `resume/vi-raw.md` (authoritative source)
2. `resume/vi.md`
3. `resume/en.md`
4. `data/portfolio.ts`

## 3. Mandatory Sync Sequence

Always apply updates in this order:
1. Update `resume/vi-raw.md`
2. Propagate approved changes to `resume/vi.md`
3. Translate/adapt into `resume/en.md`
4. Reflect runtime-safe structured content into `data/portfolio.ts`

No reverse sync is allowed from `data/portfolio.ts` back to markdown sources except as temporary draft notes.

## 4. Acceptable Divergence Policy

Allowed divergence:
- `data/portfolio.ts` may be shorter than clean resumes for layout constraints.
- `resume/en.md` may use idiomatic phrasing that is not word-for-word with Vietnamese.
- UI copy can be condensed compared to resume bullet wording.

Not allowed:
- Contradictory dates, role levels, project ownership, or stack facts across artifacts.
- Using terms banned by project conventions (for example replacing `Event-Driven Architecture` with `Event Sourcing`).
- Including projects marked as excluded for clean CV output.

## 5. Update Protocol

For each content change request:
1. Record/edit in `resume/vi-raw.md` first.
2. Mark whether change is `public-safe` or `internal-only`.
3. Update `resume/vi.md` with only `public-safe` approved content.
4. Update `resume/en.md` preserving claim strength and chronology.
5. Update `data/portfolio.ts` for runtime views (`/`, `/resume`, `/resume/harvard`).
6. Run a consistency review against glossary/tone guide and canonical facts.

## 6. Conflict Resolution Rules

When sources differ:
1. Treat `resume/vi-raw.md` as default winner.
2. If `vi-raw` is ambiguous, resolve with maintainer decision and update `vi-raw` first.
3. If runtime constraints require shorter content in `data/portfolio.ts`, preserve meaning and keep chronology/facts unchanged.
4. If translation ambiguity exists, prefer glossary canonical term from `docs/content/glossary-tone-guide.md`.

Resolution actions must include:
- Update conflicting artifacts in sequence.
- Add a short note in commit or bead reason referencing resolved mismatch.

## 7. Invariant Fact Checklist

The following must stay aligned across all artifacts:
- Onschool start date: `11/2022`
- Tech Lead scope: `SLC = current`, `SRM = later phase`
- Architecture term: `Event-Driven Architecture` (not `Event Sourcing`)
- Project inclusion/exclusion constraints from raw notes

## 8. Validation Cadence

- Required before closing any content-related bead:
  - Cross-check `vi-raw`, `vi`, `en`, and `data/portfolio.ts` for factual parity.
  - Validate terminology with glossary/tone guide.
- Required before release:
  - Ensure `/resume` and `/resume/harvard` render with approved runtime content.

## 9. Future Automation Hooks

This contract is the baseline for future automation beads:
- `portfolio-v4u.4.1` data model normalization boundaries.
- `portfolio-v4u.4.2` sync-check script for drift detection.

Automation should report drift as:
- `factual-conflict` (blocking)
- `style-divergence` (non-blocking warning)
- `length-adaptation` (accepted divergence)