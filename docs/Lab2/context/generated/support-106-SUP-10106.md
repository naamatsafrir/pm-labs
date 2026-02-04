# Support Ticket SUP-10106 - Permissions/Auditability

**Product:** Worklane Enterprise
**Customer industry:** Healthcare
**Company size:** 200â€“500
**Category:** permissions / audit

## Customer message (summarized)
- Need a way to detect and investigate unauthorized changes.
- They specifically referenced a recent change on: Project
- Asked for: Editor role (edit roadmap + requests only); also mentioned: Admin role (manage members + settings)
- Audit expectation: retention 30 days; export preference: CSV export

## Workaround today
- Restrict access by keeping only a few owners and exporting PDFs weekly.
- Use spreadsheets for broad visibility; copy/paste changes into Worklane.

## Notes
Customer context: Manufacturing org, ~200â€“500 employees, evaluating Worklane for intake + roadmapping. Issue: Need read-only stakeholders; execs keep accidentally editing. Example: A Tag was updated and the team asked for proof of actor, timestamp, and previous value. Requested capability: Admin role (manage members + settings). Also asked about retention (90 days) and API access later. Impact: blocked rollout to stakeholders; security review raised concerns; internal admin overhead increased.

Customer context: Education org, ~500â€“1,000 employees, evaluating Worklane for intake + roadmapping. Issue: Need a way to detect and investigate unauthorized changes. Example: A Request was moved and the team asked for proof of actor, timestamp, and previous value. Requested capability: Editor role (edit roadmap + requests only). Also asked about retention (1 year) and downloadable JSON. Impact: blocked rollout to stakeholders; security review raised concerns; internal admin overhead increased.

Customer context: SaaS org, ~50â€“200 employees, evaluating Worklane for intake + roadmapping. Issue: Need exportable audit logs for quarterly security review. Example: A Tag was exported and the team asked for proof of actor, timestamp, and previous value. Requested capability: Viewer role (no edits). Also asked about retention (90 days) and downloadable JSON. Impact: blocked rollout to stakeholders; security review raised concerns; internal admin overhead increased.

## Severity
- Business impact: deal risk / security review / exec visibility
