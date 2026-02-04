# Lab 1 Guide — Spec vs. Naive Prompting

## Objectives
- ✅ Verify your AI coding agent environment (Copilot IDE, Copilot CLI, Cline).
- ✅ Experience spec-driven development by comparing naive vs. PRD-guided prompts.

## Prerequisites
- Windows machine with Node.js 18+ (recommended) and npm/yarn.
- VS Code + GitHub Copilot extension (or JetBrains with Copilot) **OR** Copilot CLI **OR** Cline.
- Git (optional) to manage two working copies/branches.

## Setup
1. Clone the repo and `cd pm-labs`.
2. Create two separate directories **on your file system**, one per run (keep outputs isolated):
   - `lab1-naive` (e.g., under the repo)
   - `lab1-spec` (e.g., under the repo)
3. Open `docs/Lab1/PRD.md` and `docs/Lab1/prompts/*` in your editor.
4. Prepare two windows/terminals—one per directory.

> Tip: Keep two editor windows/tabs—one per run—to avoid mixing outputs.

## Run in Parallel
- Start with `lab1-naive` using the naive prompt.
- As soon as the agent begins generating code, switch to `lab1-spec` and start the spec prompt (attach the PRD).
- Keep commands/prompts in the correct directory/window.

## Exercise A — Naive Prompt (20–25 min)
1. In `lab1-naive`, invoke your agent with the naive prompt (`docs/Lab1/prompts/naive.md`). As soon as it starts generating, switch to `lab1-spec` (Exercise B).
2. Let the agent generate code; assist only with minimal clarifications.
3. Run the app and note issues.
4. Record time to first working prototype.

## Exercise B — Spec-driven Prompt (20–25 min)
1. In `lab1-spec`, invoke your agent with the spec prompt (`docs/Lab1/prompts/spec.md`) immediately after kicking off the naive run.
2. Provide the PRD (`docs/Lab1/PRD.md`) as context (paste or attach file, depending on tool).
3. Let the agent build, nudging it to cross-check acceptance criteria.
4. Run the app and tests; note differences.

## Comparing Outputs
Use the checklist below. Fill `Naive` vs. `Spec` columns.

| Criteria | Naive Notes | Spec Notes |
| --- | --- | --- |
| Coverage of acceptance criteria (AC1–AC6) | | |
| UX & validation (labels, errors, keyboard) | | |
| Data model (fields, tags, statuses) | | |
| Sorting/filtering/dashboard correctness | | |
| Tests (tag logic, filtering, dashboard) | | |
| README completeness (setup/run/test) | | |
| Robustness (error handling, edge cases) | | |
| Time to working prototype | | |

Optional scoring: 0 = missing, 1 = partial, 2 = complete.

## Demo & Reflection (10 min)
- Demo both apps. Show triage flow and dashboard.
- Discuss: What did the PRD change? Where did the naive prompt fall short?
- Reflect: How did acceptance criteria guide implementation? What would you add to the PRD?

## Deliverables
- Completed comparison notes.
- Running apps (naive vs. spec) or notes on blockers.
- Reflection summary (bullet list).

## Acceptance Criteria (from PRD)
- AC1: Creating a request shows it in the list with all fields.
- AC2: Filtering by status shows only matching requests.
- AC3: Dashboard counts match list data.
- AC4: Tag suggestion works for keywords: analytics, billing, mobile, performance.
- AC5: Updating a request changes status/priority and reflects in dashboard.
- AC6: README documents setup/run/test commands.
