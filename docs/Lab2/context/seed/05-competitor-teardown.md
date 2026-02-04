# Competitor Teardown — Permissions & Audit Logs

**Competitors reviewed:** AsterRoad, BoardForge, PlanStack
**Date:** 2025-11-28

## Findings
### AsterRoad
- Roles: Owner, Admin, Editor, Viewer
- Audit log: available on "Business" tier and above
- Audit events: login, permission changes, create/update/delete on key objects
- Export: CSV download, last 90 days by default

### BoardForge
- Roles: Owner, Editor, Viewer
- Permissions can be scoped per workspace
- Audit log limited to admin actions and settings changes

### PlanStack
- Roles: Owner, Admin, Editor, Viewer, Guest
- Has an “Activity” feed and a separate “Audit Log”
- Audit log includes IP address and actor
- Retention configurable on enterprise

## Implications for Worklane
- Prospects expect at least: Viewer role + basic audit log.
- Export is frequently present (CSV), even if advanced filtering is enterprise-only.
- Competitors gate some features by tier; Worklane needs a clear packaging story.
