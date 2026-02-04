# Analytics Snapshot — Collaboration & Change Events

**Period:** last 90 days ending 2025-12-20

## Usage distribution (accounts)
- 63%: 1–3 active editors
- 27%: 4–10 active editors
- 10%: 11+ active editors

## Stakeholder viewers (estimated)
Based on users who *only view* (no create/update actions) in the last 30 days:
- Median per account: 7
- 90th percentile: 42

## High-risk actions (count / month)
- Roadmap item status change: ~48k
- Priority change: ~31k
- Moving item between roadmap columns: ~22k
- Editing item title/summary: ~65k
- Deleting item: ~1.2k

## Notable pattern
Accounts with >20 viewers have a higher rate of:
- “accidental change” support tickets,
- and lower adoption of roadmap sharing (they export screenshots/PDF instead).

## Data gaps
- We cannot currently attribute changes to a “permission denied” (no event exists).
- We have no concept of “viewer” permissions; view-only users still have edit capabilities.
