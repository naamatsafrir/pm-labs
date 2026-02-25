# Customer Needs Rubric — Lab 2

Score each category from 0 to 4.

- **4 = Excellent**
- **3 = Good**
- **2 = Partial**
- **1 = Weak**
- **0 = Missing**

## 1) Coverage of Distinct Needs
- Captures the full set of major need themes.
- Includes rare signals, not just frequent ones.
- Deduplicates equivalent wording correctly.

## 2) Frequency Quality
- Frequency ranking broadly matches corpus reality.
- Common vs medium vs rare bands are directionally correct.
- No severe over/under-weighting from sample bias.

## 3) Evidence Discipline
- Each need includes specific file-based evidence.
- Evidence reflects multiple artifact types where relevant.
- Quotes/snippets are representative and not cherry-picked.

## 4) Segment and Impact Clarity
- Identifies which segments are affected.
- Explains business impact if unresolved.
- Distinguishes enterprise governance needs from convenience asks.

## 5) Prompt Process Design (single prompt requirement)
- Prompt is written from scratch.
- Prompt enforces chunk-by-chunk processing.
- Prompt instructs agent to keep local notes files and synthesize from them.

## 6) Completeness of Context Handling
- Student workflow demonstrates full corpus traversal.
- Includes all folder types and relevant ranges.
- Avoids premature synthesis from partial context.

## 7) Final Document Quality
- Output is concise and structured.
- Ranked needs are clear and non-overlapping.
- Focus stays on customer pain (not solution design).

## Scoring guidance

- **24–28**: Strong pass. Reliable coverage and disciplined context handling.
- **18–23**: Pass with gaps. Some missed signal or evidence weaknesses.
- **12–17**: Needs revision. Significant misses or weak synthesis process.
- **0–11**: Incomplete. Did not demonstrate core learning goals.

## Deterministic checks (instructor)

Use `docs/Lab2/CustomerNeeds-Reference.md` plus `docs/Lab2/context/generation-stats.json` for objective comparison of need coverage and relative frequency patterns.
