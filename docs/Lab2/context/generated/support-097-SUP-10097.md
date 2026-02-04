# Support Ticket SUP-10097 - Permissions/Auditability

**Product:** Worklane Cloud
**Customer industry:** Education
**Company size:** 1,000â€“5,000
**Category:** permissions / audit

## Customer message (summarized)
- Need audit logs to prove who changed what and when.
- They specifically referenced a recent change on: Workspace settings
- Asked for: Editor role (edit roadmap + requests only); also mentioned: Separate permission to view audit logs
- Audit expectation: retention 30 days; export preference: CSV export

## Workaround today
- Restrict access by keeping only a few owners and exporting PDFs weekly.
- Use spreadsheets for broad visibility; copy/paste changes into Worklane.

## Notes
Customer context: Education org, ~200â€“500 employees, evaluating Worklane for intake + roadmapping. Issue: Need to limit editing to a subset of users; contractors should not edit. Example: A Project was exported and the team asked for proof of actor, timestamp, and previous value. Requested capability: Admin role (manage members + settings). Also asked about retention (180 days) and API access later. Impact: blocked rollout to stakeholders; security review raised concerns; internal admin overhead increased.

Customer context: SaaS org, ~50â€“200 employees, evaluating Worklane for intake + roadmapping. Issue: Need per-workspace roles; some workspaces contain sensitive initiatives. Example: A Tag was permission changed and the team asked for proof of actor, timestamp, and previous value. Requested capability: Viewer role (no edits). Also asked about retention (180 days) and API access later. Impact: blocked rollout to stakeholders; security review raised concerns; internal admin overhead increased.

Customer context: Manufacturing org, ~1,000â€“5,000 employees, evaluating Worklane for intake + roadmapping. Issue: Need exportable audit logs for quarterly security review. Example: A Integration setting was permission changed and the team asked for proof of actor, timestamp, and previous value. Requested capability: Viewer role (no edits). Also asked about retention (1 year) and CSV export. Impact: blocked rollout to stakeholders; security review raised concerns; internal admin overhead increased.

## Severity
- Business impact: deal risk / security review / exec visibility
