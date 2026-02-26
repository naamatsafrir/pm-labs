# Lab 2 Prompt — Customer Needs Document Synthesis

You are a senior product analyst. Your task is to produce a **Customer Needs Document** for the Worklane B2B product planning platform by systematically processing a large corpus of customer feedback artifacts. The corpus is too large for a single context window, so you must follow a strict chunked-processing workflow.

## Background

Worklane is a B2B product planning platform used by multi-team organizations for roadmap planning, intake management, and portfolio visibility. Customers span enterprise PMO, business unit program managers, IT/identity teams, and executive sponsors. Internal stakeholders include Product Management, Customer Success, Sales, Support, and Security & Compliance.

Feedback was gathered over the last 12 months from interviews, support tickets, sales calls, NPS responses, community posts, QBRs, churn exits, feature requests, internal meetings, and CAB sessions.

## Your deliverable

Produce a single **Customer Needs Document** that contains:
1. A ranked list of **distinct, deduplicated** customer needs (pain points / unmet needs only — no solutions or implementation design).
2. A **frequency bucket** for each need: `High` (appears across many artifact types and high volume), `Medium` (appears in several types or moderate volume), or `Rare` (appears in narrow file ranges or few artifact types).
3. **1–2 representative evidence excerpts** per need, with the **source filename** cited.
4. **Affected customer segments** per need (e.g., Enterprise PMO, IT Teams, Executive Sponsors, etc.).
5. **Business impact if unresolved** — what happens to Worklane if this need stays unaddressed.

Do **NOT** produce a PRD, implementation design, or technical architecture.

## Strict processing workflow (you MUST follow every step)

### Step 0 — Read seed files
Read all files in `docs/Lab2/context/seed/` to understand the company, product, methodology, stakeholders, and deliverable format:
- `01-company-background.md`
- `02-product-overview.md`
- `03-research-methodology.md`
- `04-team-org-chart.md`
- `05-deliverable-format.md`

### Step 1 — Enumerate all artifact folders
List all subdirectories inside `docs/Lab2/context/generated/`. The expected folders and file counts are:
| Folder | Expected files |
|---|---|
| `customer-interviews/` | ~150 |
| `support-tickets/` | ~500 |
| `sales-call-notes/` | ~150 |
| `nps-survey-responses/` | ~400 |
| `feature-requests/` | ~200 |
| `community-forum-posts/` | ~100 |
| `cs-qbr-notes/` | ~80 |
| `churn-exit-interviews/` | ~80 |
| `internal-meeting-notes/` | ~80 |
| `cab-session-transcripts/` | ~40 |

Confirm all 10 folders exist and list the actual file names in each.

### Step 2 — Process each folder in chunks
For **each** folder listed above, process the files in sequential chunks of **20–30 files at a time**. For each chunk:

1. **Read** every file in the chunk.
2. **Extract** every customer pain point, complaint, unmet need, or friction signal mentioned. Record:
   - The need (short label)
   - A verbatim or near-verbatim supporting quote
   - The source filename
   - Which customer segment expressed it
3. **After finishing each chunk**, write/update a local notes file called `lab2-processing-notes.md` with:
   - Which folder and file range you just processed (e.g., `support-tickets/st-001.md` through `support-tickets/st-030.md`)
   - New needs discovered in this chunk
   - Updated tally counts for previously seen needs
   - Any new evidence snippets worth preserving
4. **Do NOT skip any files or any folders.** Every file in every folder must be read.
5. **Do NOT synthesize the final document until ALL folders and ALL chunks are complete.

### Step 3 — Deduplicate and normalize
After processing all chunks across all 10 folders:

1. Re-read your `lab2-processing-notes.md` in full.
2. Merge needs that are semantically equivalent but worded differently (e.g., "need RBAC" and "role permissions are too coarse" → single need about granular role-based access control).
3. Assign each merged need a frequency bucket (`High` / `Medium` / `Rare`) based on how many artifact types and files mentioned it.
4. Rank needs from highest to lowest frequency/impact.

### Step 4 — Write the final Customer Needs Document
Save the final output to `lab2-customer-needs.md` with this structure:

```markdown
# Customer Needs Document — Worklane

## Summary
[2–3 sentence overview of the analysis: how many artifacts processed, how many distinct needs identified, top themes.]

## Ranked Customer Needs

### 1. [Need Title]
- **Frequency:** High | Medium | Rare
- **Affected Segments:** [list]
- **Evidence:**
  - "[quote]" — `filename.md`
  - "[quote]" — `filename.md`
- **Business Impact if Unresolved:** [1–2 sentences]

### 2. [Need Title]
...

[Continue for all identified needs]

## Methodology Notes
- Total artifacts processed: [count]
- Artifact types covered: [list all 10]
- Processing approach: chunked batch processing with running notes
```

### Step 5 — Self-check against rubric
After writing the document, evaluate it against these criteria and note any gaps:
1. **Coverage** — Did you capture both high-frequency AND rare needs? Rare needs may appear only in 1-2 artifact types.
2. **Frequency accuracy** — Are your High/Medium/Rare buckets directionally correct based on actual occurrence counts?
3. **Evidence discipline** — Does every need have file-specific evidence from multiple artifact types where relevant?
4. **Segment clarity** — Have you distinguished enterprise governance needs from convenience asks?
5. **No solution creep** — Is the document focused purely on customer pain, not implementation ideas?

If any gaps are found, revise the document before finalizing.

## Critical reminders
- **Process EVERY file.** Do not sample or skip ranges. Rare needs hide in narrow ranges.
- **Save notes after EVERY chunk.** If you lose context, you lose needs.
- **Deduplicate carefully.** Different stakeholders describe the same need in different language.
- **Do not synthesize early.** Premature synthesis from partial data will miss critical needs.
- **Expect ~20 distinct needs** after deduplication — some high frequency, some rare.
