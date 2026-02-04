# Lab 2 — Prompting + Context Management: Write a PRD from an Artifact Dump

**Goal:** Practice advanced prompting and context management by writing a prompt that generates a high-quality PRD from a large, messy set of PM artifacts.

## Files
- [Problem Brief](./ProblemBrief.md)
- [Lab Guide](./LabGuide.md)
- [PRD Rubric](./PRD-Rubric.md)
- [Prompt Template (optional scaffold)](./prompts/prompt-template.md)
- Context artifact dump
  - [Context Index](./context/00-index.md)
  - [Seed artifacts (high-signal)](./context/seed/)
  - [Generated artifacts (high-volume)](./context/generated/)
- [Reference PRD (comparison)](./PRD-Reference.md)

## Summary
You’ll be given a realistic PM “artifact dump” that is intentionally too large to load all at once.

Your job is to write a **multi-step prompt** that instructs an AI coding agent to:
1. Inventory the context, highlight conflicts/gaps, and propose assumptions.
2. Produce a complete PRD with clear requirements, non-functional requirements, and acceptance criteria.
3. Self-check the PRD against a rubric before finalizing.

Then you’ll compare your PRD against the reference PRD.
