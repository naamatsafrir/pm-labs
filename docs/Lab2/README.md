# Lab 2 — Prompting + Context Management: Build a Customer Needs Document

**Goal:** Practice structured prompting and context management by synthesizing a deterministic **Customer Needs Document** from a very large artifact corpus.

## Files
- [Lab Guide](./LabGuide.md)
- [Customer Needs Rubric](./CustomerNeeds-Rubric.md)
- [Customer Needs Reference](./CustomerNeeds-Reference.md)
- Context artifact dump
  - [Context Index](./context/00-index.md)
  - [Seed artifacts](./context/seed/)
  - [Generated artifacts](./context/generated/)

## Summary
This lab is intentionally larger than a single context window (1M+ tokens). To succeed, students must write one prompt that tells the agent to process context in batches, save running summaries to local files, and synthesize the final output from those saved notes.

The outcome is deterministic: the corpus contains 20 distinct customer needs with known frequency patterns. You are graded on coverage, evidence quality, and synthesis discipline.
