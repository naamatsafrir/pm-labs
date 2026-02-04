# Support Ticket SUP-10122 - Permissions/Auditability

**Product:** Worklane Enterprise
**Customer industry:** Education
**Company size:** 500â€“1,000
**Category:** permissions / audit

## Customer message (summarized)
- Need read-only stakeholders; execs keep accidentally editing.
- They specifically referenced a recent change on: Roadmap item
- Asked for: Separate permission to view audit logs; also mentioned: Viewer role (no edits)
- Audit expectation: retention 1 year; export preference: downloadable JSON

## Workaround today
- Restrict access by keeping only a few owners and exporting PDFs weekly.
- Use spreadsheets for broad visibility; copy/paste changes into Worklane.

## Notes
Customer context: Manufacturing org, ~50â€“200 employees, evaluating Worklane for intake + roadmapping. Issue: Need to limit editing to a subset of users; contractors should not edit. Example: A Tag was deleted and the team asked for proof of actor, timestamp, and previous value. Requested capability: Viewer role (no edits). Also asked about retention (180 days) and CSV export. Impact: blocked rollout to stakeholders; security review raised concerns; internal admin overhead increased.

Customer context: SaaS org, ~50â€“200 employees, evaluating Worklane for intake + roadmapping. Issue: Need exportable audit logs for quarterly security review. Example: A Integration setting was updated and the team asked for proof of actor, timestamp, and previous value. Requested capability: Viewer role (no edits). Also asked about retention (30 days) and API access later. Impact: blocked rollout to stakeholders; security review raised concerns; internal admin overhead increased.

Customer context: SaaS org, ~1,000â€“5,000 employees, evaluating Worklane for intake + roadmapping. Issue: Need a way to detect and investigate unauthorized changes. Example: A Workspace settings was permission changed and the team asked for proof of actor, timestamp, and previous value. Requested capability: Separate permission to view audit logs. Also asked about retention (1 year) and API access later. Impact: blocked rollout to stakeholders; security review raised concerns; internal admin overhead increased.

## Severity
- Business impact: deal risk / security review / exec visibility
