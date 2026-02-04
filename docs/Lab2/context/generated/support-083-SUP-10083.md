# Support Ticket SUP-10083 - Permissions/Auditability

**Product:** Worklane
**Customer industry:** Manufacturing
**Company size:** 500â€“1,000
**Category:** permissions / audit

## Customer message (summarized)
- Need read-only stakeholders; execs keep accidentally editing.
- They specifically referenced a recent change on: Workspace settings
- Asked for: Admin role (manage members + settings); also mentioned: Separate permission to view audit logs
- Audit expectation: retention 30 days; export preference: downloadable JSON

## Workaround today
- Restrict access by keeping only a few owners and exporting PDFs weekly.
- Use spreadsheets for broad visibility; copy/paste changes into Worklane.

## Notes
Customer context: FinTech org, ~500â€“1,000 employees, evaluating Worklane for intake + roadmapping. Issue: Need per-workspace roles; some workspaces contain sensitive initiatives. Example: A Roadmap item was deleted and the team asked for proof of actor, timestamp, and previous value. Requested capability: Admin role (manage members + settings). Also asked about retention (30 days) and API access later. Impact: blocked rollout to stakeholders; security review raised concerns; internal admin overhead increased.

Customer context: SaaS org, ~200â€“500 employees, evaluating Worklane for intake + roadmapping. Issue: Need per-workspace roles; some workspaces contain sensitive initiatives. Example: A Workspace settings was permission changed and the team asked for proof of actor, timestamp, and previous value. Requested capability: Separate permission to view audit logs. Also asked about retention (30 days) and downloadable JSON. Impact: blocked rollout to stakeholders; security review raised concerns; internal admin overhead increased.

Customer context: Manufacturing org, ~500â€“1,000 employees, evaluating Worklane for intake + roadmapping. Issue: Need to limit editing to a subset of users; contractors should not edit. Example: A Workspace settings was deleted and the team asked for proof of actor, timestamp, and previous value. Requested capability: Admin role (manage members + settings). Also asked about retention (90 days) and CSV export. Impact: blocked rollout to stakeholders; security review raised concerns; internal admin overhead increased.

## Severity
- Business impact: deal risk / security review / exec visibility
