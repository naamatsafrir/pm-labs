# Lab 2 Guide — Prompting + Context Management: Write a PRD

## Objectives
- ✅ Practice multi-step prompting to drive a structured deliverable (PRD).
- ✅ Practice context management: selecting, summarizing, and citing evidence from large artifact sets.
- ✅ Produce a PRD with testable acceptance criteria and explicit tradeoffs.

## Prerequisites
- Any AI coding agent tool you use (Copilot in VS Code/JetBrains, Copilot CLI, Cline, etc.).
- Ability to attach or paste files into your agent.

## Setup (5 min)
1. Open the Lab 2 entrypoint: `docs/Lab2/README.md`.
2. Read the problem brief: `docs/Lab2/ProblemBrief.md`.
3. Open the context index: `docs/Lab2/context/00-index.md`.
4. Skim the seed artifacts in `docs/Lab2/context/seed/`.

## Exercise A — Write your prompt (20–30 min)
Write a prompt that will generate a PRD from the artifacts.

Constraints:
- You must write the prompt **from scratch**.
- Your prompt must explicitly address **context volume** (it should instruct the agent how to inventory and use what it’s given).

Your prompt must instruct the agent to do **all** of the following:
1. **Inventory**: list the files it received + brief summary of each.
2. **Conflict & gaps**: identify contradictions, missing details, and what assumptions it will make.
3. **Questions**: ask clarifying questions (limit to ~8), but continue with explicit assumptions.
4. **PRD output**: produce a complete PRD with roles/permissions, audit log requirements, NFRs, metrics, and testable AC.
5. **Self-check**: validate the PRD against `docs/Lab2/PRD-Rubric.md` and revise.
6. **Evidence discipline**: cite artifact filenames for key decisions.

> Tip: Don’t attach everything. Select a reasonable subset of artifacts and make the agent explain its evidence.

## Exercise B — Run the prompt (20–30 min)
1. Choose a set of artifacts to attach:
   - Start with 4–8 seed artifacts from `seed/`.
   - Add 10–30 generated artifacts from `generated/` that represent customer and sales patterns.
2. Run your prompt.
3. If the agent asks clarifying questions, answer only what you reasonably know. If you don’t know, tell it to proceed with assumptions.
4. Capture the PRD output (save it in your own notes or a new file).

## Compare (10–15 min)
Compare your PRD to the reference PRD: `docs/Lab2/PRD-Reference.md`.

Use the rubric as a checklist.

| Rubric Area | Your PRD Notes | Reference Notes |
| --- | --- | --- |
| Problem clarity | | |
| Scope discipline | | |
| Requirements quality | | |
| Non-functional requirements | | |
| Acceptance criteria | | |
| Metrics & rollout | | |

## Deliverables
- Your final prompt (text).
- Your generated PRD.
- 5–10 bullets: what context you used, what you ignored, and why.
- 3 improvements you would make if you had more time.
