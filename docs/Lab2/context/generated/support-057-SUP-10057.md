# Support Ticket SUP-10057 - Permissions/Auditability

**Product:** Worklane Cloud
**Customer industry:** E-commerce
**Company size:** 200â€“500
**Category:** permissions / audit

## Customer message (summarized)
- Need a way to detect and investigate unauthorized changes.
- They specifically referenced a recent change on: Request
- Asked for: Separate permission to view audit logs; also mentioned: Admin role (manage members + settings)
- Audit expectation: retention 90 days; export preference: API access later

## Workaround today
- Restrict access by keeping only a few owners and exporting PDFs weekly.
- Use spreadsheets for broad visibility; copy/paste changes into Worklane.

## Notes
Customer context: Education org, ~500â€“1,000 employees, evaluating Worklane for intake + roadmapping. Issue: Need per-workspace roles; some workspaces contain sensitive initiatives. Example: A Workspace settings was permission changed and the team asked for proof of actor, timestamp, and previous value. Requested capability: Viewer role (no edits). Also asked about retention (30 days) and downloadable JSON. Impact: blocked rollout to stakeholders; security review raised concerns; internal admin overhead increased.

Customer context: FinTech org, ~1,000â€“5,000 employees, evaluating Worklane for intake + roadmapping. Issue: Need per-workspace roles; some workspaces contain sensitive initiatives. Example: A Workspace settings was updated and the team asked for proof of actor, timestamp, and previous value. Requested capability: Separate permission to view audit logs. Also asked about retention (1 year) and downloadable JSON. Impact: blocked rollout to stakeholders; security review raised concerns; internal admin overhead increased.

Customer context: Education org, ~200â€“500 employees, evaluating Worklane for intake + roadmapping. Issue: Need per-workspace roles; some workspaces contain sensitive initiatives. Example: A Workspace settings was created and the team asked for proof of actor, timestamp, and previous value. Requested capability: Admin role (manage members + settings). Also asked about retention (90 days) and CSV export. Impact: blocked rollout to stakeholders; security review raised concerns; internal admin overhead increased.

## Severity
- Business impact: deal risk / security review / exec visibility
