# PRD Rubric — Lab 2

Use this to evaluate the PRD your prompt generates.

## 1) Problem clarity
- Clear statement of what’s broken today.
- Identifies impacted user types and why they’re blocked.
- Uses evidence from artifacts (customer quotes, sales notes, support tickets, etc.).

## 2) Scope discipline
- Explicit v1 scope and clear out-of-scope list.
- Separates must-have from nice-to-have.
- Calls out dependencies and constraints.

## 3) Requirements quality
- Functional requirements are specific and unambiguous.
- Includes roles/permissions model and admin workflows.
- Audit log requirements include event taxonomy, retention, export, and access.

## 4) Non-functional requirements
- Security/privacy: least privilege, access to audit logs, tamper evidence.
- Performance: acceptable latency for permission checks and log writes.
- Reliability: failure modes and data integrity.

## 5) Acceptance criteria
- Acceptance criteria are testable and map to requirements.
- Includes negative cases and permission edge cases.

## 6) Metrics & rollout
- Defines measurable outcomes and how they’ll be tracked.
- Rollout plan and risk mitigation.

## Scoring (optional)
0 = missing, 1 = partial, 2 = complete for each section.
