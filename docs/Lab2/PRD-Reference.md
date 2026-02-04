# PRD (Reference) — Enterprise Permissions + Audit Logs v1

## Overview
Worklane needs baseline enterprise governance to unblock procurement and expand adoption among large stakeholder audiences.

This PRD defines a v1 release of:
- Role-based access control (RBAC) with a small set of roles
- A secure, exportable audit log for key actions

## Problem
Worklane’s current access model (Owner vs Member, both effectively full access) creates two recurring failures:
1. Customers can’t safely invite stakeholders (execs, PMO, reviewers) because those users can edit.
2. Customers can’t answer “who changed what and when” for sensitive roadmap and request changes.

Evidence:
- Mid-market customer requires read-only plus auditability to purchase: [docs/Lab2/context/seed/01-customer-call-notes-midmarket.md](docs/Lab2/context/seed/01-customer-call-notes-midmarket.md)
- Support themes show repeated incidents of accidental edits and lack of traceability: [docs/Lab2/context/seed/02-support-theme-summary.md](docs/Lab2/context/seed/02-support-theme-summary.md)
- Stakeholder transcript ties permissions/audit logs directly to deals: [docs/Lab2/context/seed/06-stakeholder-meeting-transcript-excerpt.md](docs/Lab2/context/seed/06-stakeholder-meeting-transcript-excerpt.md)
- Generated corpus reinforces frequency/patterns across support and sales: [docs/Lab2/context/generated](docs/Lab2/context/generated)

## Goals
### Must-have (v1)
- Provide a safe way to invite stakeholders with **read-only** access.
- Restrict editing/admin actions to appropriate users via a simple RBAC model.
- Provide an **append-only audit log** covering key mutations across the most sensitive objects.
- Make audit logs **accessible to authorized admins** and **exportable (CSV)** for reviews.
- Keep implementation feasible within ~6–8 weeks by scoping checks to high-impact endpoints.

### Should-have (v1 if feasible)
- Basic filtering in audit log (date range, actor, event type).
- Audit events include actor, timestamp, target object, and before/after for key fields.

### Non-goals (explicitly out of scope for v1)
- SSO/SCIM provisioning
- Per-field permissions
- Configurable retention by customer
- Real-time alerts/webhooks for audit events
- “Project-level” segmentation inside a workspace (unless re-scoped later)

Rationale: engineering constraints advise a limited first cut; avoid authorization checks “everywhere” in v1. [docs/Lab2/context/seed/04-eng-constraints-notes.md](docs/Lab2/context/seed/04-eng-constraints-notes.md)

## Target users
- **Account Owner**: ultimate authority; can recover access.
- **Workspace Admin**: manages members/roles and can access audit logs.
- **Editor**: creates/edits roadmap items and requests.
- **Viewer**: read-only stakeholder.

Customer archetypes:
- IT/Security admins needing quarterly review exports. [docs/Lab2/context/seed/01-customer-call-notes-midmarket.md](docs/Lab2/context/seed/01-customer-call-notes-midmarket.md)
- PMO/executive stakeholders needing safe visibility.

## Key use cases
1. Invite 40+ stakeholders as viewers without risk of edits.
2. Limit editing of roadmap/requests to a defined set of editors.
3. Investigate a sensitive roadmap change and identify actor/time/previous value.
4. Export audit logs for security review.

## Proposed solution (v1)
### A) RBAC v1 (scoped to Workspace)
Introduce workspace-scoped roles:
- **Owner** (account-level; implicit admin on all workspaces)
- **Workspace Admin**
- **Editor**
- **Viewer**

Permissions summary (v1):
- Viewer: can view workspaces, projects, roadmap, requests; cannot create/update/delete.
- Editor: can create/update roadmap items and requests; cannot manage members/roles; cannot edit workspace settings.
- Workspace Admin: can manage members + roles; can change workspace settings; can view/export audit logs.
- Owner: all permissions, including recovery.

Notes:
- Scope roles at the **workspace** level for v1, consistent with stakeholder discussion and feasibility. [docs/Lab2/context/seed/06-stakeholder-meeting-transcript-excerpt.md](docs/Lab2/context/seed/06-stakeholder-meeting-transcript-excerpt.md)
- Consider a follow-up PRD for project-level permissions if future evidence requires it.

### B) Audit log v1
Create an **Audit Log** view (admin-only) that lists key security- and governance-relevant events.

Audit events must be **append-only** and written on mutation (no async-only best-effort). [docs/Lab2/context/seed/04-eng-constraints-notes.md](docs/Lab2/context/seed/04-eng-constraints-notes.md)

Event schema (minimum):
- `event_id` (unique)
- `timestamp`
- `actor_user_id`, `actor_email`
- `actor_ip` (if available; if not, record as unknown)
- `account_id`, `workspace_id`
- `event_type`
- `target_type` (roadmap_item, request, workspace, member_role)
- `target_id`
- `change_summary` (human-readable)
- `before` / `after` (structured JSON for key fields)

Event coverage (v1):
- Member added/removed
- Role changes
- Roadmap item: create/update/delete
- Request: create/update/delete
- Settings changes that impact access (e.g., workspace visibility if applicable)

Retention (v1):
- Default: **90 days**
- Rationale: matches common competitor defaults and meets many “quarterly review” needs; keep configurable retention out of scope for v1. [docs/Lab2/context/seed/05-competitor-teardown.md](docs/Lab2/context/seed/05-competitor-teardown.md)

Export (v1):
- CSV export from audit log page
- Exports respect current filters (date range, event type) if filters shipped

Access controls:
- Only Owner and Workspace Admin can view and export audit logs.
- Editors/Viewers cannot access audit logs.

## Requirements
### 1) Roles & permissions
- R1: System supports workspace-scoped assignment of roles (Admin/Editor/Viewer) for each user.
- R2: Viewer has no write access to roadmap items, requests, settings.
- R3: Editor can write roadmap items and requests but cannot manage members/roles or workspace settings.
- R4: Workspace Admin can manage members/roles, view/export audit logs, and change workspace settings.
- R5: Account Owner always retains full access and recovery.

### 2) Admin UX
- R6: Add a “Members” admin page per workspace:
  - list members, email, role
  - change role
  - remove member
  - invite new member with selected role
- R7: Role changes are captured in the audit log.

### 3) Authorization enforcement (scoped)
- R8: Enforce permissions on the highest-risk endpoints first:
  - roadmap item create/update/delete
  - request create/update/delete
  - member/role management
  - workspace settings changes

Constraint rationale: avoid touching every endpoint in v1. [docs/Lab2/context/seed/04-eng-constraints-notes.md](docs/Lab2/context/seed/04-eng-constraints-notes.md)

### 4) Audit log UX
- R9: Add an “Audit Log” page per workspace (Admin/Owner only).
- R10: Page supports viewing events with pagination.
- R11: Provide CSV export.
- R12: Include sufficient detail to answer “who changed what and when” (actor, time, target, before/after for key fields).

### 5) Non-functional requirements
Security & privacy:
- NFR1: Permission checks must be server-side and enforced consistently.
- NFR2: Audit log is append-only; prohibit updates/deletes through app APIs.
- NFR3: Audit log access is restricted to Admin/Owner.

Performance:
- NFR4: Permission checks add minimal overhead; p95 request latency increase ≤ 30ms on protected endpoints.
- NFR5: Audit log writes do not materially impact write operations (p95 write latency increase ≤ 50ms).

Reliability:
- NFR6: If audit log write fails, the system must either (a) fail the mutation or (b) record a compensating “audit_write_failed” event in a durable system log. Choose one policy and apply consistently.

## Success metrics
- M1: Reduce “accidental edit” support tickets among accounts with >20 viewers by 50% within 60 days.
- M2: Increase number of accounts with ≥10 view-only users by 30% (proxy for safe stakeholder adoption).
- M3: Unblock at least 3 late-stage deals citing governance requirements within one quarter.

Evidence of stakeholder viewer needs and ticket volume: [docs/Lab2/context/seed/03-analytics-snapshot.md](docs/Lab2/context/seed/03-analytics-snapshot.md), [docs/Lab2/context/seed/02-support-theme-summary.md](docs/Lab2/context/seed/02-support-theme-summary.md)

## Risks & mitigations
- Risk: Over-scoping (SSO/SCIM/project-level permissions) delays core value.
  - Mitigation: keep v1 to workspace roles + audit logs; document explicit non-goals.
- Risk: Under-scoping audit events makes audit log unusable.
  - Mitigation: focus on key objects/actions and include before/after for critical fields.
- Risk: Authorization inconsistencies.
  - Mitigation: define a single authorization layer and apply to prioritized endpoints first.

## Rollout plan
1. Internal dogfood with employee accounts.
2. Beta with 3–5 target customers (including at least one procurement-blocked prospect).
3. GA after:
   - no critical authorization bugs for 2 weeks,
   - audit log export validated,
   - support and sales enablement materials ready.

## Acceptance criteria (testable)
- AC1: A user with Viewer role cannot create/update/delete roadmap items or requests; UI controls are hidden/disabled and server rejects attempts.
- AC2: A user with Editor role can create/update/delete roadmap items and requests but cannot manage members/roles or access audit logs.
- AC3: A user with Workspace Admin role can invite members, change roles, and remove members; each change appears in audit log.
- AC4: Audit log includes events for create/update/delete on roadmap items and requests, and for role changes.
- AC5: Audit log events include actor identity, timestamp, target object, and before/after for key fields (status, priority, title).
- AC6: Audit log page is accessible only to Workspace Admin and Owner.
- AC7: Admin can export audit log to CSV for a selected date range (or last 90 days if no filters shipped).
- AC8: Default retention is 90 days; events older than 90 days are not shown/exported.
