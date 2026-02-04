# Support Ticket SUP-10209 - Permissions/Auditability

**Product:** Worklane
**Customer industry:** Healthcare
**Company size:** 200â€“500
**Category:** permissions / audit

## Customer message (summarized)
- Need audit logs to prove who changed what and when.
- They specifically referenced a recent change on: Workspace settings
- Asked for: Separate permission to view audit logs; also mentioned: Editor role (edit roadmap + requests only)
- Audit expectation: retention 1 year; export preference: API access later

## Workaround today
- Restrict access by keeping only a few owners and exporting PDFs weekly.
- Use spreadsheets for broad visibility; copy/paste changes into Worklane.

## Notes
Customer context: FinTech org, ~500â€“1,000 employees, evaluating Worklane for intake + roadmapping. Issue: Need to limit editing to a subset of users; contractors should not edit. Example: A Tag was created and the team asked for proof of actor, timestamp, and previous value. Requested capability: Editor role (edit roadmap + requests only). Also asked about retention (180 days) and CSV export. Impact: blocked rollout to stakeholders; security review raised concerns; internal admin overhead increased.

Customer context: Healthcare org, ~500â€“1,000 employees, evaluating Worklane for intake + roadmapping. Issue: Need read-only stakeholders; execs keep accidentally editing. Example: A Project was updated and the team asked for proof of actor, timestamp, and previous value. Requested capability: Editor role (edit roadmap + requests only). Also asked about retention (180 days) and downloadable JSON. Impact: blocked rollout to stakeholders; security review raised concerns; internal admin overhead increased.

Customer context: E-commerce org, ~500â€“1,000 employees, evaluating Worklane for intake + roadmapping. Issue: Need audit logs to prove who changed what and when. Example: A Project was deleted and the team asked for proof of actor, timestamp, and previous value. Requested capability: Separate permission to view audit logs. Also asked about retention (1 year) and API access later. Impact: blocked rollout to stakeholders; security review raised concerns; internal admin overhead increased.

## Severity
- Business impact: deal risk / security review / exec visibility
