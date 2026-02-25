# Lab 2 Guide — Prompting + Context Management: Customer Needs Synthesis

## Objectives
- ✅ Write one structured prompt from scratch.
- ✅ Manage extreme context volume with chunking and local saved notes.
- ✅ Produce an evidence-backed **Customer Needs Document** with deterministic quality checks.

## Prerequisites
- Any AI coding agent tool you use.
- Ability to work with local files in your editor/workspace.

## Setup (5 min)
1. Open [README](./README.md).
2. Open [Context Index](./context/00-index.md).
3. Skim all files in [context/seed](./context/seed/).
4. Review expected output shape in [CustomerNeeds-Rubric](./CustomerNeeds-Rubric.md).

## What you are building
Create a **Customer Needs Document** that identifies and ranks customer pain points from one year of artifacts.

The task is intentionally too large for a single context window. If you do not process all artifact batches and preserve notes across steps, your output will miss critical needs.

## Hard constraints
- Use **one prompt only** (single submission).
- Write the prompt **from scratch** (no scaffold/template).
- The prompt must instruct the agent to:
   1. Process artifacts in explicit batches (by folder/type/range).
   2. After each batch, write/update summary notes in a local file.
   3. Keep a running deduplicated list of discovered needs with evidence.
   4. After all batches are processed, synthesize the final document from the saved notes.
   5. Include filename evidence for each final need.

## Required final document format
Your output must include:
1. Ranked customer needs list (distinct, deduplicated).
2. Frequency bucket or estimate for each need.
3. Representative evidence snippets.
4. Affected customer segments.
5. Business impact if unresolved.

Do **not** produce a PRD or implementation design.

## Suggested workflow inside your single prompt
1. Read all `seed/` files first.
2. Enumerate all artifact type folders in `generated/`.
3. Process each folder in numbered chunks.
4. Save notes to disk after every chunk.
5. Re-read the saved notes at the end and generate the final document.

## Evaluation
Use [CustomerNeeds-Rubric](./CustomerNeeds-Rubric.md) to self-check your result.

For comparison only, review [CustomerNeeds-Reference](./CustomerNeeds-Reference.md) after you finish.

## Deliverables
- Your final single prompt.
- Your generated Customer Needs Document.
- Notes files produced during processing.
- 5–10 reflection bullets: what failed initially, what changed, and why.
