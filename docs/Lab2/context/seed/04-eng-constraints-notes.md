# Engineering Constraints Notes — Permissions & Audit Logs

**Date:** 2025-12-05
**Attendees:** EM, Staff Eng, PM

## Current architecture (high level)
- Multi-tenant app with `Account` → `Workspace` → `Project`
- Permissions are currently binary:
  - `owner` (account-level)
  - `member` (account-level)
- Most write endpoints only check “is authenticated and belongs to account”.

## Constraints
- Adding fine-grained authorization checks everywhere is risky within 6–8 weeks.
- A first version should focus on the highest-impact objects and actions.
- Audit logs should be append-only.

## Suggestions
- Ship **RBAC v1** with a small number of roles.
- Apply RBAC to a subset of entities first (roadmap items + requests + settings).
- Add audit log events for key mutations.

## Open questions
- Retention period expectations by target customers.
- Whether we need export in v1 (CSV is easiest).
- Who can view audit logs (owners only vs. delegated admins).
