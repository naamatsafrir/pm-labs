# Stakeholder Meeting Transcript (Excerpt) — Enterprise Readiness

**Date:** 2025-12-12
**Attendees:** PM, Head of Sales, Head of CS, Security Lead, Eng Lead

## Excerpt
**Sales:** We’re losing deals in procurement. The question is always permissions and audit logs. Without a credible answer, we get pushed out.

**CS:** Existing customers keep asking for read-only stakeholders. They invite execs and then panic because execs can edit.

**Security:** Audit logs are required, but we also need to ensure only authorized users can view them. Also, logs need retention and export.

**Eng:** We can do a first cut, but we must avoid sprinkling custom checks everywhere. We need a clean model.

**PM:** If we do v1, what’s the minimum viable set of roles?

**Eng:** Start with Viewer + Editor + Admin, but make sure Owner can always recover.

**Sales:** If we ship Viewer + basic audit export, I can re-open at least 3 stuck deals.

## Decisions (tentative)
- Target v1: Viewer role + audit log of key changes.
- Keep roles limited; avoid per-field permissions.
- Scope to workspaces (not per project) unless evidence strongly demands it.

## Risks
- Over-scoping (e.g., SSO/SCIM) delays core governance needs.
- Under-scoping makes it unsellable.
