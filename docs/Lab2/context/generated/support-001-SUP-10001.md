# Support Ticket SUP-10001 - Permissions/Auditability

**Product:** Worklane
**Customer industry:** Healthcare
**Company size:** 500â€“1,000
**Category:** permissions / audit

## Customer message (summarized)
- Need per-workspace roles; some workspaces contain sensitive initiatives.
- They specifically referenced a recent change on: Tag
- Asked for: Viewer role (no edits); also mentioned: Viewer role (no edits)
- Audit expectation: retention 90 days; export preference: downloadable JSON

## Workaround today
- Restrict access by keeping only a few owners and exporting PDFs weekly.
- Use spreadsheets for broad visibility; copy/paste changes into Worklane.

## Notes
Customer context: Education org, ~500â€“1,000 employees, evaluating Worklane for intake + roadmapping. Issue: Need audit logs to prove who changed what and when. Example: A Tag was updated and the team asked for proof of actor, timestamp, and previous value. Requested capability: Admin role (manage members + settings). Also asked about retention (1 year) and downloadable JSON. Impact: blocked rollout to stakeholders; security review raised concerns; internal admin overhead increased.

Customer context: E-commerce org, ~500â€“1,000 employees, evaluating Worklane for intake + roadmapping. Issue: Need to limit editing to a subset of users; contractors should not edit. Example: A Tag was moved and the team asked for proof of actor, timestamp, and previous value. Requested capability: Admin role (manage members + settings). Also asked about retention (180 days) and downloadable JSON. Impact: blocked rollout to stakeholders; security review raised concerns; internal admin overhead increased.

Customer context: Healthcare org, ~500â€“1,000 employees, evaluating Worklane for intake + roadmapping. Issue: Need exportable audit logs for quarterly security review. Example: A Integration setting was exported and the team asked for proof of actor, timestamp, and previous value. Requested capability: Separate permission to view audit logs. Also asked about retention (1 year) and API access later. Impact: blocked rollout to stakeholders; security review raised concerns; internal admin overhead increased.

## Severity
- Business impact: deal risk / security review / exec visibility
