# Support Ticket SUP-10034 - Permissions/Auditability

**Product:** Worklane Enterprise
**Customer industry:** E-commerce
**Company size:** 200â€“500
**Category:** permissions / audit

## Customer message (summarized)
- Need exportable audit logs for quarterly security review.
- They specifically referenced a recent change on: Request
- Asked for: Editor role (edit roadmap + requests only); also mentioned: Admin role (manage members + settings)
- Audit expectation: retention 1 year; export preference: downloadable JSON

## Workaround today
- Restrict access by keeping only a few owners and exporting PDFs weekly.
- Use spreadsheets for broad visibility; copy/paste changes into Worklane.

## Notes
Customer context: Healthcare org, ~50â€“200 employees, evaluating Worklane for intake + roadmapping. Issue: Need a way to detect and investigate unauthorized changes. Example: A Roadmap item was exported and the team asked for proof of actor, timestamp, and previous value. Requested capability: Editor role (edit roadmap + requests only). Also asked about retention (90 days) and API access later. Impact: blocked rollout to stakeholders; security review raised concerns; internal admin overhead increased.

Customer context: Healthcare org, ~1,000â€“5,000 employees, evaluating Worklane for intake + roadmapping. Issue: Need to limit editing to a subset of users; contractors should not edit. Example: A Project was deleted and the team asked for proof of actor, timestamp, and previous value. Requested capability: Admin role (manage members + settings). Also asked about retention (180 days) and CSV export. Impact: blocked rollout to stakeholders; security review raised concerns; internal admin overhead increased.

Customer context: Manufacturing org, ~500â€“1,000 employees, evaluating Worklane for intake + roadmapping. Issue: Need read-only stakeholders; execs keep accidentally editing. Example: A Project was moved and the team asked for proof of actor, timestamp, and previous value. Requested capability: Admin role (manage members + settings). Also asked about retention (90 days) and CSV export. Impact: blocked rollout to stakeholders; security review raised concerns; internal admin overhead increased.

## Severity
- Business impact: deal risk / security review / exec visibility
