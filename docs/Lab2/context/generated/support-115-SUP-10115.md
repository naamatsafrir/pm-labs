# Support Ticket SUP-10115 - Permissions/Auditability

**Product:** Worklane Enterprise
**Customer industry:** FinTech
**Company size:** 50â€“200
**Category:** permissions / audit

## Customer message (summarized)
- Need to limit editing to a subset of users; contractors should not edit.
- They specifically referenced a recent change on: Project
- Asked for: Editor role (edit roadmap + requests only); also mentioned: Separate permission to view audit logs
- Audit expectation: retention 1 year; export preference: downloadable JSON

## Workaround today
- Restrict access by keeping only a few owners and exporting PDFs weekly.
- Use spreadsheets for broad visibility; copy/paste changes into Worklane.

## Notes
Customer context: Healthcare org, ~500â€“1,000 employees, evaluating Worklane for intake + roadmapping. Issue: Need to limit editing to a subset of users; contractors should not edit. Example: A Request was moved and the team asked for proof of actor, timestamp, and previous value. Requested capability: Editor role (edit roadmap + requests only). Also asked about retention (1 year) and downloadable JSON. Impact: blocked rollout to stakeholders; security review raised concerns; internal admin overhead increased.

Customer context: SaaS org, ~1,000â€“5,000 employees, evaluating Worklane for intake + roadmapping. Issue: Need per-workspace roles; some workspaces contain sensitive initiatives. Example: A Tag was permission changed and the team asked for proof of actor, timestamp, and previous value. Requested capability: Admin role (manage members + settings). Also asked about retention (90 days) and CSV export. Impact: blocked rollout to stakeholders; security review raised concerns; internal admin overhead increased.

Customer context: Manufacturing org, ~50â€“200 employees, evaluating Worklane for intake + roadmapping. Issue: Need per-workspace roles; some workspaces contain sensitive initiatives. Example: A Integration setting was exported and the team asked for proof of actor, timestamp, and previous value. Requested capability: Viewer role (no edits). Also asked about retention (90 days) and downloadable JSON. Impact: blocked rollout to stakeholders; security review raised concerns; internal admin overhead increased.

## Severity
- Business impact: deal risk / security review / exec visibility
