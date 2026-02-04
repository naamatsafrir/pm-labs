# Lab 2 Problem Brief — Enterprise Permissions + Audit Logs

## Product
**Worklane** is a B2B SaaS product used by product and engineering teams to manage:
- product intake (requests),
- roadmap planning,
- release notes,
- and stakeholder visibility.

Worklane is used by both SMB and mid-market customers today. The company wants to move upmarket.

## Problem
As Worklane lands larger customers, the lack of **enterprise-grade access controls** and **auditability** is becoming a consistent blocker:
- Admins can’t define who can view/edit sensitive roadmaps and customer requests.
- Security teams can’t verify who accessed or changed sensitive information.
- Sales loses deals late-stage because the product can’t meet baseline governance expectations.

Right now, Worklane has only two access levels:
- *Owner* (full access)
- *Member* (full access)

This is not sufficient for customers who need:
- read-only stakeholders,
- restricted editors,
- segmented access to certain workspaces/projects,
- and an audit trail for key actions.

## What you must produce
Write a prompt that will generate a **high-quality PRD** for a first release that improves enterprise readiness.

The PRD should be based on the artifact dump in [context/](./context/00-index.md).

## Deliverable scope (for the PRD)
Your PRD should define:
- The user problems and priority use cases.
- A clear first release scope (what’s in / out).
- Roles and permissions (at least v1) that solve the most common needs.
- Audit log requirements (events, retention, export, access controls).
- Non-functional requirements (security, performance, privacy).
- Measurable success metrics.
- Acceptance criteria written to be testable.

## Constraints
- Assume the engineering team can deliver a **v1** in ~6–8 weeks.
- Avoid “enterprise everything” (SSO/SCIM/data residency) unless the artifacts justify it for v1.
- Be explicit about tradeoffs.

## Why the context is hard
The artifacts include:
- conflicting stakeholder input,
- noisy customer feedback,
- partial analytics,
- and incomplete implementation constraints.

The quality of your prompt will be judged by whether the resulting PRD is:
- evidence-based (uses the artifacts),
- coherent (resolves contradictions),
- and testable (clear acceptance criteria).
