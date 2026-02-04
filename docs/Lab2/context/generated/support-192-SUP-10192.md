# Support Ticket SUP-10192 - Permissions/Auditability

**Product:** Worklane Enterprise
**Customer industry:** E-commerce
**Company size:** 200â€“500
**Category:** permissions / audit

## Customer message (summarized)
- Need exportable audit logs for quarterly security review.
- They specifically referenced a recent change on: Tag
- Asked for: Viewer role (no edits); also mentioned: Admin role (manage members + settings)
- Audit expectation: retention 90 days; export preference: API access later

## Workaround today
- Restrict access by keeping only a few owners and exporting PDFs weekly.
- Use spreadsheets for broad visibility; copy/paste changes into Worklane.

## Notes
Customer context: SaaS org, ~200â€“500 employees, evaluating Worklane for intake + roadmapping. Issue: Need a way to detect and investigate unauthorized changes. Example: A Integration setting was deleted and the team asked for proof of actor, timestamp, and previous value. Requested capability: Separate permission to view audit logs. Also asked about retention (180 days) and CSV export. Impact: blocked rollout to stakeholders; security review raised concerns; internal admin overhead increased.

Customer context: E-commerce org, ~1,000â€“5,000 employees, evaluating Worklane for intake + roadmapping. Issue: Need exportable audit logs for quarterly security review. Example: A Request was permission changed and the team asked for proof of actor, timestamp, and previous value. Requested capability: Editor role (edit roadmap + requests only). Also asked about retention (30 days) and downloadable JSON. Impact: blocked rollout to stakeholders; security review raised concerns; internal admin overhead increased.

Customer context: FinTech org, ~200â€“500 employees, evaluating Worklane for intake + roadmapping. Issue: Need read-only stakeholders; execs keep accidentally editing. Example: A Project was exported and the team asked for proof of actor, timestamp, and previous value. Requested capability: Viewer role (no edits). Also asked about retention (90 days) and downloadable JSON. Impact: blocked rollout to stakeholders; security review raised concerns; internal admin overhead increased.

## Severity
- Business impact: deal risk / security review / exec visibility
