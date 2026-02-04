# PRD: Customer Feature Request Triage (Lab 1)

## Overview
Build a lightweight web application that PMs can use to intake customer feature requests, triage them with priority/status, and view summary insights. The app should be simple to run locally and suitable for a 45–60 minute lab comparing naive vs. spec-driven development.

## Problem
PMs and support teams receive many feature requests across channels. They need a simple way to capture requests, tag them, prioritize, and track status without complex tooling.

## Goals
**Must**
- Intake form capturing: title, description, customer segment, impact (Low/Med/High), priority (P0/P1/P2), status (New/Triaged/In Progress/Closed), tags (free text), optional owner
- Auto-tag suggestion based on simple keyword mapping (e.g., "analytics" → Analytics, "billing" → Billing, "mobile" → Mobile, "performance" → Performance)
- List view with sorting (priority, status) and filtering (status, priority, tag)
- Triage action to update priority, status, owner
- Dashboard summary: counts by status and priority

**Should**
- Inline validation and helpful error messages
- Persist data locally (in-memory acceptable for lab; file/JSON persistence preferred if feasible)

**Won’t (for lab)**
- Authentication/authorization
- External database

## Users
- Product Manager (primary)
- Support/Customer Success (submits requests)
- Engineering (views prioritized list)

## User Scenarios
1. Support logs a new feature request via form; required fields validated.
2. PM reviews the queue, filters by status=P0, updates priority and status to Triaged, assigns owner.
3. PM views dashboard to see counts by status and priority to report in standup.

## Functional Requirements
- FR1: Create Request — Form captures required fields and adds to list.
- FR2: Auto Tag Suggestion — Simple keyword mapping; suggested tags shown/editable.
- FR3: List View — Display table/cards with sorting and filtering by status/priority/tag.
- FR4: Triage Update — Edit priority, status, owner inline or via detail view.
- FR5: Dashboard — Aggregate counts by status and priority.
- FR6: Persistence — In-memory is acceptable; file persistence (JSON) if easy.

## Non-functional Requirements
- NFR1: Local setup: `npm install` + `npm start` (or equivalent) with documented commands.
- NFR2: Accessibility: labeled inputs, keyboard navigation for form actions.
- NFR3: Performance: Handles at least 200 items in-memory.
- NFR4: Tests: At least one unit test for tag suggestion logic and one for filtering/dashboard aggregation.

## Acceptance Criteria
- AC1: Creating a request shows it in the list with all fields.
- AC2: Filtering by status shows only matching requests.
- AC3: Dashboard counts match list data.
- AC4: Tag suggestion adds correct tags for keywords: analytics, billing, mobile, performance.
- AC5: Updating a request changes status/priority and reflects in dashboard.
- AC6: README documents setup/run/test commands.

## Constraints
- Stack: Simple web stack (e.g., React + Node/Express, Vite/React, Next.js) with minimal dependencies.
- No external DB; prefer in-memory or file-based store.
- Timebox: Aim for <60 minutes to build.

## Metrics & Success
- Checklist coverage of acceptance criteria.
- Time to first working prototype.
- Completeness and clarity of README and tests.
