# Support Ticket SUP-10251 - Permissions/Auditability

**Product:** Worklane Enterprise
**Customer industry:** Healthcare
**Company size:** 50â€“200
**Category:** permissions / audit

## Customer message (summarized)
- Need a way to detect and investigate unauthorized changes.
- They specifically referenced a recent change on: Project
- Asked for: Separate permission to view audit logs; also mentioned: Viewer role (no edits)
- Audit expectation: retention 90 days; export preference: API access later

## Workaround today
- Restrict access by keeping only a few owners and exporting PDFs weekly.
- Use spreadsheets for broad visibility; copy/paste changes into Worklane.

## Notes
Customer context: FinTech org, ~500â€“1,000 employees, evaluating Worklane for intake + roadmapping. Issue: Need per-workspace roles; some workspaces contain sensitive initiatives. Example: A Workspace settings was exported and the team asked for proof of actor, timestamp, and previous value. Requested capability: Viewer role (no edits). Also asked about retention (1 year) and downloadable JSON. Impact: blocked rollout to stakeholders; security review raised concerns; internal admin overhead increased.

Customer context: E-commerce org, ~500â€“1,000 employees, evaluating Worklane for intake + roadmapping. Issue: Need read-only stakeholders; execs keep accidentally editing. Example: A Request was exported and the team asked for proof of actor, timestamp, and previous value. Requested capability: Admin role (manage members + settings). Also asked about retention (30 days) and API access later. Impact: blocked rollout to stakeholders; security review raised concerns; internal admin overhead increased.

Customer context: Healthcare org, ~200â€“500 employees, evaluating Worklane for intake + roadmapping. Issue: Need audit logs to prove who changed what and when. Example: A Tag was updated and the team asked for proof of actor, timestamp, and previous value. Requested capability: Viewer role (no edits). Also asked about retention (180 days) and downloadable JSON. Impact: blocked rollout to stakeholders; security review raised concerns; internal admin overhead increased.

## Severity
- Business impact: deal risk / security review / exec visibility
