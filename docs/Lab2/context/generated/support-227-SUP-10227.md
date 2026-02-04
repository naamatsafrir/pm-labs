# Support Ticket SUP-10227 - Permissions/Auditability

**Product:** Worklane Cloud
**Customer industry:** Manufacturing
**Company size:** 50â€“200
**Category:** permissions / audit

## Customer message (summarized)
- Need read-only stakeholders; execs keep accidentally editing.
- They specifically referenced a recent change on: Request
- Asked for: Admin role (manage members + settings); also mentioned: Admin role (manage members + settings)
- Audit expectation: retention 1 year; export preference: API access later

## Workaround today
- Restrict access by keeping only a few owners and exporting PDFs weekly.
- Use spreadsheets for broad visibility; copy/paste changes into Worklane.

## Notes
Customer context: FinTech org, ~50â€“200 employees, evaluating Worklane for intake + roadmapping. Issue: Need exportable audit logs for quarterly security review. Example: A Request was created and the team asked for proof of actor, timestamp, and previous value. Requested capability: Editor role (edit roadmap + requests only). Also asked about retention (30 days) and downloadable JSON. Impact: blocked rollout to stakeholders; security review raised concerns; internal admin overhead increased.

Customer context: Education org, ~50â€“200 employees, evaluating Worklane for intake + roadmapping. Issue: Need audit logs to prove who changed what and when. Example: A Workspace settings was exported and the team asked for proof of actor, timestamp, and previous value. Requested capability: Viewer role (no edits). Also asked about retention (30 days) and API access later. Impact: blocked rollout to stakeholders; security review raised concerns; internal admin overhead increased.

Customer context: Education org, ~200â€“500 employees, evaluating Worklane for intake + roadmapping. Issue: Need a way to detect and investigate unauthorized changes. Example: A Integration setting was permission changed and the team asked for proof of actor, timestamp, and previous value. Requested capability: Separate permission to view audit logs. Also asked about retention (30 days) and CSV export. Impact: blocked rollout to stakeholders; security review raised concerns; internal admin overhead increased.

## Severity
- Business impact: deal risk / security review / exec visibility
