# Support Ticket SUP-10109 - Permissions/Auditability

**Product:** Worklane Cloud
**Customer industry:** Healthcare
**Company size:** 200â€“500
**Category:** permissions / audit

## Customer message (summarized)
- Need a way to detect and investigate unauthorized changes.
- They specifically referenced a recent change on: Tag
- Asked for: Separate permission to view audit logs; also mentioned: Viewer role (no edits)
- Audit expectation: retention 90 days; export preference: API access later

## Workaround today
- Restrict access by keeping only a few owners and exporting PDFs weekly.
- Use spreadsheets for broad visibility; copy/paste changes into Worklane.

## Notes
Customer context: SaaS org, ~500â€“1,000 employees, evaluating Worklane for intake + roadmapping. Issue: Need audit logs to prove who changed what and when. Example: A Integration setting was moved and the team asked for proof of actor, timestamp, and previous value. Requested capability: Separate permission to view audit logs. Also asked about retention (180 days) and downloadable JSON. Impact: blocked rollout to stakeholders; security review raised concerns; internal admin overhead increased.

Customer context: SaaS org, ~1,000â€“5,000 employees, evaluating Worklane for intake + roadmapping. Issue: Need a way to detect and investigate unauthorized changes. Example: A Roadmap item was deleted and the team asked for proof of actor, timestamp, and previous value. Requested capability: Admin role (manage members + settings). Also asked about retention (1 year) and API access later. Impact: blocked rollout to stakeholders; security review raised concerns; internal admin overhead increased.

Customer context: Healthcare org, ~500â€“1,000 employees, evaluating Worklane for intake + roadmapping. Issue: Need a way to detect and investigate unauthorized changes. Example: A Request was deleted and the team asked for proof of actor, timestamp, and previous value. Requested capability: Admin role (manage members + settings). Also asked about retention (180 days) and CSV export. Impact: blocked rollout to stakeholders; security review raised concerns; internal admin overhead increased.

## Severity
- Business impact: deal risk / security review / exec visibility
