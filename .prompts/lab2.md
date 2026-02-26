# Lab 2 Solution Prompt: Customer Needs Document Synthesis

You are a Product Manager analyzing one year of customer artifacts to create a comprehensive Customer Needs Document. This corpus is intentionally larger than a single context window (1M+ tokens), so you MUST process it in batches and maintain persistent notes.

## Your Task

Synthesize a ranked, evidence-backed Customer Needs Document from all artifacts in `docs/Lab2/context/`.

## Processing Instructions

### Phase 1: Initialize
1. Create a working directory for notes: `docs/Lab2/working-notes/`
2. Create an empty file: `docs/Lab2/working-notes/running-needs.md` with structure:
   ```
   # Running Customer Needs Discovery
   
   ## Discovered Needs
   [Will be populated as we process batches]
   
   ## Processing Log
   [Track which batches have been processed]
   ```

### Phase 2: Process Seed Artifacts
1. Read ALL files in `docs/Lab2/context/seed/`
2. Extract customer pain points, requests, and needs
3. Write your findings to `docs/Lab2/working-notes/batch-01-seed.md` with:
   - List of needs discovered
   - Evidence (file names and relevant quotes)
   - Initial frequency estimates
4. Update `running-needs.md` with deduplicated needs

### Phase 3: Process Generated Artifacts in Batches
1. Read `docs/Lab2/context/00-index.md` to understand the structure
2. Process each artifact type folder in `generated/` separately:
   - **Batch 02**: Customer interviews (all interview files)
   - **Batch 03**: Support tickets (all ticket files)
   - **Batch 04**: Sales call notes (all sales files)
   - **Batch 05**: Product feedback (all feedback files)
   - **Batch 06**: User research (all research files)
   - **Batch 07**: Bug reports (all bug files)
   - **Batch 08**: Feature requests (all feature request files)

3. For EACH batch:
   - Read all files in that artifact type
   - Create `docs/Lab2/working-notes/batch-[##]-[type].md`
   - Extract customer needs with evidence
   - Update `running-needs.md` by:
     * Adding new needs
     * Incrementing frequency counts for existing needs
     * Adding new evidence sources
     * Deduplicating similar needs

### Phase 4: Synthesize Final Document
1. Re-read `docs/Lab2/working-notes/running-needs.md`
2. Re-read all batch notes files
3. Create `docs/Lab2/CustomerNeeds-Output.md` with the following structure:

```markdown
# Customer Needs Document
[Product Name] — [Date Range]

## Executive Summary
[2-3 paragraphs: key themes, most critical needs, business implications]

## Ranked Customer Needs

### Priority 1: Critical Needs (High Frequency, High Impact)

#### Need #1: [Clear, specific need statement]
- **Frequency**: [High/Medium/Low] ([X mentions across Y artifact types])
- **Affected Segments**: [Enterprise/SMB/Individual users/specific roles]
- **Business Impact**: [What happens if unresolved]
- **Evidence**:
  - `[filename]`: "[Representative quote or summary]"
  - `[filename]`: "[Representative quote or summary]"
  - [Include 3-5 pieces of evidence from different artifact types]

[Repeat for each Priority 1 need]

### Priority 2: Important Needs (Medium Frequency/Impact)

[Same structure as Priority 1]

### Priority 3: Emerging Needs (Lower Frequency, but Notable)

[Same structure as Priority 1]

## Customer Segment Analysis
[Summary of which segments experience which needs]

## Appendix: Processing Methodology
- Total artifacts processed: [X]
- Artifact types analyzed: [List]
- Date range: [Range]
- Processing approach: [Brief description of batching strategy]
```

## Critical Requirements

✅ **Process ALL batches** — Do not synthesize until you've processed every artifact folder
✅ **Save notes after EACH batch** — Write/update files persistently
✅ **Deduplicate needs** — Merge equivalent pain points (e.g., "slow performance" = "system latency")
✅ **Track evidence sources** — Include specific filenames for each need
✅ **Rank by frequency AND impact** — Not just occurrence count
✅ **Focus on PAIN, not solutions** — Describe what customers struggle with, not what to build
✅ **Cross-reference artifact types** — Note when a need appears in interviews AND tickets AND sales calls
✅ **Identify ALL 20 distinct needs** — The corpus contains exactly 20 themes (per reference doc)

## Deduplication Rules
- "Performance issues" = "Slow loading times" = "System latency"
- "Cannot find X" = "Search doesn't work for X" = "Discoverability problems"
- "Manual process is tedious" = "Too many clicks" = "Workflow inefficiency"
- Keep the most precise phrasing and merge evidence

## Output Quality Checklist
Before finalizing, verify:
- [ ] All batch notes files exist (01-08+)
- [ ] running-needs.md is comprehensive
- [ ] Final document has 15-20 distinct needs
- [ ] Each need has 3+ evidence sources
- [ ] Each need has segment + impact analysis
- [ ] Frequency ranking makes logical sense
- [ ] No needs are solution-focused (no "add dark mode" — instead "eye strain from bright UI")

## Do NOT:
❌ Skip batches or folders
❌ Synthesize from partial context
❌ Write solution designs or PRDs
❌ Lose evidence attribution
❌ Process everything in one pass without saving notes

## Start Processing Now
Begin with Phase 1 initialization, then proceed through all phases systematically.