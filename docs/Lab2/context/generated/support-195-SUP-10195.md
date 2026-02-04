# Support Ticket SUP-10195 - Permissions/Auditability

**Product:** Worklane
**Customer industry:** SaaS
**Company size:** 200â€“500
**Category:** permissions / audit

## Customer message (summarized)
- Need per-workspace roles; some workspaces contain sensitive initiatives.
- They specifically referenced a recent change on: Request
- Asked for: Admin role (manage members + settings); also mentioned: Viewer role (no edits)
- Audit expectation: retention 1 year; export preference: CSV export

## Workaround today
- Restrict access by keeping only a few owners and exporting PDFs weekly.
- Use spreadsheets for broad visibility; copy/paste changes into Worklane.

## Notes
Customer context: Healthcare org, ~200â€“500 employees, evaluating Worklane for intake + roadmapping. Issue: Need exportable audit logs for quarterly security review. Example: A Workspace settings was deleted and the team asked for proof of actor, timestamp, and previous value. Requested capability: Admin role (manage members + settings). Also asked about retention (90 days) and API access later. Impact: blocked rollout to stakeholders; security review raised concerns; internal admin overhead increased.

Customer context: Education org, ~1,000â€“5,000 employees, evaluating Worklane for intake + roadmapping. Issue: Need a way to detect and investigate unauthorized changes. Example: A Workspace settings was moved and the team asked for proof of actor, timestamp, and previous value. Requested capability: Viewer role (no edits). Also asked about retention (90 days) and API access later. Impact: blocked rollout to stakeholders; security review raised concerns; internal admin overhead increased.

Customer context: FinTech org, ~200â€“500 employees, evaluating Worklane for intake + roadmapping. Issue: Need a way to detect and investigate unauthorized changes. Example: A Project was moved and the team asked for proof of actor, timestamp, and previous value. Requested capability: Viewer role (no edits). Also asked about retention (180 days) and CSV export. Impact: blocked rollout to stakeholders; security review raised concerns; internal admin overhead increased.

## Severity
- Business impact: deal risk / security review / exec visibility
