# Support Ticket SUP-10069 - Permissions/Auditability

**Product:** Worklane Cloud
**Customer industry:** FinTech
**Company size:** 50â€“200
**Category:** permissions / audit

## Customer message (summarized)
- Need read-only stakeholders; execs keep accidentally editing.
- They specifically referenced a recent change on: Tag
- Asked for: Viewer role (no edits); also mentioned: Separate permission to view audit logs
- Audit expectation: retention 30 days; export preference: downloadable JSON

## Workaround today
- Restrict access by keeping only a few owners and exporting PDFs weekly.
- Use spreadsheets for broad visibility; copy/paste changes into Worklane.

## Notes
Customer context: SaaS org, ~200â€“500 employees, evaluating Worklane for intake + roadmapping. Issue: Need to limit editing to a subset of users; contractors should not edit. Example: A Tag was permission changed and the team asked for proof of actor, timestamp, and previous value. Requested capability: Separate permission to view audit logs. Also asked about retention (30 days) and downloadable JSON. Impact: blocked rollout to stakeholders; security review raised concerns; internal admin overhead increased.

Customer context: Manufacturing org, ~200â€“500 employees, evaluating Worklane for intake + roadmapping. Issue: Need to limit editing to a subset of users; contractors should not edit. Example: A Roadmap item was created and the team asked for proof of actor, timestamp, and previous value. Requested capability: Viewer role (no edits). Also asked about retention (30 days) and CSV export. Impact: blocked rollout to stakeholders; security review raised concerns; internal admin overhead increased.

Customer context: E-commerce org, ~1,000â€“5,000 employees, evaluating Worklane for intake + roadmapping. Issue: Need exportable audit logs for quarterly security review. Example: A Request was deleted and the team asked for proof of actor, timestamp, and previous value. Requested capability: Admin role (manage members + settings). Also asked about retention (30 days) and downloadable JSON. Impact: blocked rollout to stakeholders; security review raised concerns; internal admin overhead increased.

## Severity
- Business impact: deal risk / security review / exec visibility
