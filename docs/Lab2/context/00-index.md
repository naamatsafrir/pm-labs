# Context Index — Lab 2

This lab contains a deliberately massive artifact corpus (1M+ tokens).

## Outcome target
You must generate a **Customer Needs Document** that captures the full set of recurring customer pain signals.

## Critical usage guidance
You cannot reliably complete this lab by sampling a subset.

The corpus includes:
- High-frequency needs spread across many artifact types.
- Rare needs that appear only in narrow file ranges/types.
- Noise-only files that can distract low-discipline prompting.

If you skip folders or ranges, you are likely to miss needs.

## Folder guide
- `seed/` — orientation and framing documents (read all first).
- `generated/` — large evidence corpus grouped by artifact type:
   - `customer-interviews/` (150)
   - `support-tickets/` (500)
   - `sales-call-notes/` (150)
   - `nps-survey-responses/` (400)
   - `feature-requests/` (200)
   - `community-forum-posts/` (100)
   - `cs-qbr-notes/` (80)
   - `churn-exit-interviews/` (80)
   - `internal-meeting-notes/` (80)
   - `cab-session-transcripts/` (40)

## Required process pattern
Your single prompt should instruct the agent to:
1. Process each folder in chunks.
2. Save chunk summaries to a local notes file.
3. Keep a deduplicated running list of needs and evidence.
4. Synthesize final output only after all chunks are complete.
