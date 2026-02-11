# Lab 3 Guide — Custom Agent: Weekly Stakeholder Update

## Learning goals

You will:

- Build a reusable **weekly update custom agent** you can run every week.
- Practice writing a **structured, multi-step agent instruction** that asks questions, drafts, and self-checks.
- Experience the **agent harness loop** (questions → draft → verify → save) and why it beats one-shot prompting.

Reminder: apply techniques from Lab 1 and Lab 2:

- Lab 1: be **specific and spec-driven** (clear goal, constraints, output format).
- Lab 2: use **multi-step structure**, clarifying questions, assumptions, and a self-check.

## Prerequisites

- VS Code + GitHub Copilot Chat.
- Copilot Chat **Agent mode** enabled in your environment.

## Setup (5 min)

1. Open this repo in VS Code.
2. Open **GitHub Copilot Chat**.
3. From the **agents dropdown** (bottom of the chat view), click **Configure Custom Agents...**
4. Click **Create new custom agent**.
5. Choose **Workspace** (so the agent is saved in this repo).
6. Enter a filename such as `weekly-stakeholder-update`.

Copilot will create a new agent profile file:

- `.github/agents/weekly-stakeholder-update.agent.md`

Filename rules (from the docs): only use `.`, `-`, `_`, letters, and numbers.

> Note: This lab intentionally uses only Copilot’s built-in tools (no MCP, no Skills).

## Exercise A — Write your agent prompt (15–25 min)

Write your agent instructions **from scratch** (you may use the checklist/template below as a scaffold).

### Prompt requirements (must include)

Your custom agent instructions must:

1. **State the goal**: produce a weekly stakeholder update suitable for leaders and cross-functional partners.
2. **Accept partial input**: explicitly say “If the user provides minimal details, proceed by asking questions and making cautious assumptions.”
3. **Ask follow-up questions first** (before drafting):
   - Ask 6–10 questions max.
   - Questions should be *memory joggers* about a typical PM week (see list below).
   - If the user doesn’t know an answer, the agent should continue with assumptions.
4. **Produce outputs in multiple formats**:
   - Exec summary (5–7 bullets)
   - Detailed update (sections)
   - Slack/Teams version (short)
5. **Self-check**:
   - Verify it didn’t invent facts the user didn’t provide.
   - Call out assumptions clearly.
   - Ensure there is a clear “Risks / Asks / Decisions needed” section.
6. **Save the result to a file** in the workspace (markdown).

### Memory-jogger question categories (pick a subset)

In your prompt, encourage questions like:

- Deliveries: “Did anything ship, launch, or get validated last week?”
- Progress: “What moved forward materially (spec, design, eng, research)?”
- Decisions: “Any decisions made or needed? Any tradeoffs?”
- Customer signal: “Any key feedback, escalations, or support themes?”
- Metrics/health: “Any metric changes, quality issues, incidents, regressions?”
- Cross-team: “Any important partner dependencies or blocks?”
- Demos/meetings: “Any big reviews, QBRs, roadmap reviews, exec updates?”
- Risks: “What’s the top risk and what’s the mitigation?”
- Next week: “Top 3 priorities next week? What help do you need?”

### Suggested prompt structure (scaffold)

Paste and customize this structure in your custom agent definition.


```markdown
---
name: weekly-stakeholder-update
description: Asks memory-jogger questions, then drafts and saves a weekly stakeholder update
target: vscode
---

You help a Product Manager produce a weekly stakeholder update.

Goal: Turn the user’s rough notes (or lack of notes) into a clear weekly update.

**Operating rules**:
- If inputs are missing, ask questions first.
- Do not fabricate facts. Clearly label assumptions.
- Keep tone crisp, neutral, and stakeholder-friendly.

### Step 1 — Collect missing info (questions)
- Ask up to 8 focused questions.
- Prefer memory-jogger questions about a typical PM week.
- If the user answers “not sure”, proceed.

### Step 2 — Draft outputs
Create:
1) Exec summary (5–7 bullets)
2) Detailed update with sections:
   - Highlights
   - Progress by workstream
   - Customer/insights
   - Risks & mitigations
   - Asks / decisions needed
   - Next week
3) Slack/Teams version (≤8 lines)

### Step 3 — Self-check
- List assumptions explicitly.
- Confirm every concrete claim traces to user input.
- Ensure the update includes at least 1 ask or decision (or explicitly state “No asks this week”).

### Step 4 — Save to file
- Create a markdown file named `Weekly-Update-YYYY-MM-DD.md`.
```

## Exercise B — Run the agent (10–15 min)

1. Open Copilot Chat and switch to **Agent mode**.
2. Select your **Weekly Stakeholder Update** custom agent.
3. Provide minimal input (on purpose). Example:
   - “I’m a PM for {{product}}. Last week was busy; I mostly remember a roadmap review and one customer escalation.”
4. Answer the agent’s questions. If you don’t know, respond with “Not sure—assume reasonable defaults.”
5. Confirm the agent created a markdown file with your update.

## Compare & improve (5–10 min)

Refine your prompt once, then rerun:

- Did the agent ask too many questions? Make them fewer and more targeted.
- Did it invent details? Tighten the “no fabrication + assumptions” rules.
- Did it miss an “Asks / Decisions” section? Make it mandatory.

## Deliverables

- Your custom agent profile file in the workspace: `.github/agents/*.agent.md`
- One generated update file: `Weekly-Update-YYYY-MM-DD.md`
- 5 bullets of reflection:
  - What prompt structure helped most?
  - What questions were the best memory joggers?
  - What would you reuse every week?
