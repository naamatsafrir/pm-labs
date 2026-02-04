# Context Index — Lab 2

This lab includes a deliberately large artifact dump.

## How to use this context
You are not expected to load all files at once.

Instead:
1. Skim the seed artifacts in `seed/` to understand the problem space.
2. Use the generated artifacts in `generated/` to pull in *evidence* (patterns, frequency, customer language).
3. In your prompt, require the agent to:
   - inventory what it received,
   - explain what it used and why,
   - call out conflicts,
   - and make assumptions explicit.

## Folder guide
- `seed/` — high-signal, human-curated artifacts (start here)
- `generated/` — high-volume artifacts (support tickets, sales notes, meeting snippets)

## What “good” looks like
A good PRD does not quote every artifact. It uses artifacts to:
- justify scope and tradeoffs,
- define requirements that match real pain,
- and create testable acceptance criteria.
