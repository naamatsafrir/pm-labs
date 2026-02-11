# Lab 4 Guide — Competitive Intelligence Deck Builder (Work IQ + Skills + Skeptic)

## Learning goals

You will:

- Use **tool extensions** (terminal + filesystem) to search the web and persist summaries.
- Use **Microsoft Work IQ (CLI)** to bring in internal Microsoft 365 context.
- **Build a custom skill** (web-search) that teaches the agent a new capability.
- Use a community **ppt-creator skill** to generate a professional slide deck.
- Orchestrate multiple **subagents** (collector → synthesizer → skeptic → builder).
- Understand how the agent's **short-term memory (STM)** connects all of this.

## Concept — Agentic Short-Term Memory (STM)

Before you start building, it helps to understand **why** multi-step agent workflows actually work.

A coding agent has no long-term memory between sessions. Everything it "knows" during a run lives inside its **context window** — the conversation thread plus any files or tool outputs it has pulled in. This context window acts as the agent's **short-term memory (STM)**.

STM explains both the power and the limits of what you'll build in this lab:

| STM concept | How it shows up in this lab |
| --- | --- |
| **Loading** | Each subagent reads files (`fetch_webpage`, `read_file`) or runs tools (`workiq ask`) and the results enter the context window. |
| **Accumulation** | The Collector writes summaries to disk. The Synthesizer reads those summaries — now _both_ sources are in context at once, enabling comparison. |
| **Capacity limit** | If you fetched full web pages instead of summaries, the context window would fill up fast and the agent would lose earlier information. That's why we summarize. |
| **Persistence trick** | The agent writes intermediate results to disk (`competitive-brief.md`, `deck.json`). These files survive beyond any single subagent's context, acting as a hand-off mechanism. |

**Key takeaway:** Your agent instructions are really a plan for _what to load into STM, in what order, and what to persist to disk so later steps can pick it up._

## Prerequisites

- VS Code + GitHub Copilot Chat.
- Copilot Chat **Agent mode** enabled.
- Node.js 18+ (recommended) for Work IQ.

Required (Work IQ is part of this lab):

- A Microsoft 365 tenant with a Copilot license.
- Work IQ admin consent has already been granted in your tenant.

## Setup (15 min)

### 1) Create your custom agent profile

1. Open Copilot Chat.
1. From the agents dropdown, choose **Configure Custom Agents...**
1. Create a new workspace agent named `competitive-intel-deck`.

Copilot will create:

- `.github/agents/competitive-intel-deck.agent.md`

You'll write your orchestration prompt in that file.

### 2) Install and verify Work IQ (required)

Work IQ is used in this lab as a **CLI tool** (not MCP).

1. Install Work IQ globally:
   - `npm install -g @microsoft/workiq`
1. Accept the EULA:
   - `workiq accept-eula`
1. Verify it runs:
   - `workiq version`
1. Verify you can query:
   - `workiq ask -q "Summarize my meetings this week in 5 bullets"`

### 3) Build a web-search skill (the real exercise starts here)

Your agent needs a way to search the public web. No skill for that exists in this repo yet — **you will create one.**

Use the **make-skill-template** skill (already installed at `.github/skills/make-skill-template/`) to help you scaffold it. Here is how:

1. Open Copilot Chat in **Agent mode**.
1. Say something like:

   > "I need a new skill called `web-search` that can search the public web for a query and return summarized results. Use the make-skill-template skill to scaffold it."

1. Copilot will use the make-skill-template to create `.github/skills/web-search/SKILL.md`.
1. Review the generated SKILL.md. It should instruct the agent to:
   - Accept a search query.
   - Use the browser / `fetch_webpage` tool to find and read relevant pages.
   - Return a **summary** of findings (not full page content — remember STM capacity).

> **Why summarize instead of caching full pages?** Full web pages are enormous. If you dump 3 entire pages into the context window, you'll push out earlier context and the agent will "forget" its instructions or prior results. Summaries keep STM lean.

### 4) Deck build skills (ppt-creator + pptx)

This lab includes **two** deck-building skills — your agent can use one or both:

| Skill | Location | What it does |
| --- | --- | --- |
| **ppt-creator** | `.github/skills/ppt-creator/` | Community skill from [daymade/claude-code-skills](https://github.com/daymade/claude-code-skills). Transforms structured content into a slide deck using the Pyramid Principle, assertion-evidence headings, and a built-in quality rubric. |
| **pptx** | `.github/skills/pptx/` | Community skill from [Anthropic's agentskills.so](https://agentskills.so/agent-skills/document-file-processing/pptx-presentation-handler-agent-skill?utm_source=chatgpt.com). Handles reading, creating, and editing `.pptx` files directly using PptxGenJS (Node) or python-pptx (Python). |

You do **not** need to manually install or modify either skill. Your agent instructions should tell the Deck Builder subagent which skill(s) to use.

> **Tip — Install required packages explicitly.** These skills depend on external packages (e.g. `pptxgenjs`, `python-pptx`, `markitdown`). In your agent instructions, **explicitly tell the agent to install any Python or Node packages required by the skills before using them.** For example, add a line like:
>
> ```
> Before running any skill, install its required packages
> (e.g. `npm install pptxgenjs` or `pip install python-pptx markitdown`).
> ```
>
> Without this, the agent may fail silently or skip deck generation.

## Exercise A — Write your custom agent instructions (20–30 min)

Write your **custom agent profile** instructions (in `.github/agents/competitive-intel-deck.agent.md`).

This is not a one-off prompt: you are defining a reusable agent.

Your prompt must:

### 1) Create subagents

- **Collectors** (parallel) — search the web and summarize findings.
- **Synthesizer** — combine summaries + Work IQ context into a competitive brief.
- **Skeptic / Reviewer** — remove or soften unsupported claims.
- **Deck Builder** — produce a slide deck using the ppt-creator skill.

### Parallel subagents (how to make collection faster)

When you have multiple competitors to research, explicitly instruct the agent to:

- Spawn **multiple Collector subagents** (for example `Collector-A`, `Collector-B`, `Collector-C`).
- Assign each subagent a disjoint competitor or topic.
- Run them **at the same time**, then wait for all results before proceeding.

In your agent instructions, say this plainly (example snippet):

```markdown
Run collection in parallel:
- Create one Collector subagent per competitor.
- Start all Collectors at the same time.
- Each Collector uses the web-search skill to find pricing, features, and positioning.
- Each Collector writes a summary to docs/Lab4/work/sources/<competitor-name>.md.
- Continue only after all Collectors have finished.
```

### 2) Summarize sources to disk

- Each Collector should write a **summary file** (not a full page dump) to `docs/Lab4/work/sources/`.
- Summaries should include: key claims, pricing (if found), feature highlights, and source URLs.
- Create `docs/Lab4/work/sources/index.md` listing each competitor and its summary file.

### 3) Evidence discipline

- Competitive claims must be backed by **quotes or data** pulled from the summaries.
- Every claim needs a source URL.
- The skeptic must remove or soften unsupported claims.

### 4) Work IQ integration

- Use Work IQ CLI (`workiq ask`). Do not use MCP mode.
- Example queries: "What have we discussed internally about [competitor]?", "What are our differentiation points for [product]?"
- Treat Work IQ output as **internal context**; do not present it as public fact.
- Write Work IQ findings to a separate file: `docs/Lab4/work/internal-context.md`.

### 5) Deck output via ppt-creator and/or pptx skill

- The Deck Builder subagent should use the **ppt-creator** skill, the **pptx** skill, or both.
- Feed it the competitive brief as input.
- Output goes to `docs/Lab4/work/output/` (the skill's default output directory).
- **Remind the agent to install any required packages** before the skill runs (see the tip in Section 4 above).

### Minimal agent profile sample (keep yours short)

Use a small structure like this (customize heavily):

```markdown
---
name: competitive-intel-deck
description: Builds a cited competitive brief + slide deck using Work IQ + web search + ppt-creator
---

Goal: Produce a competitive intelligence brief and a presentation deck under docs/Lab4/work/.

Rules:
- Do not fabricate facts. Every concrete public claim needs a source URL.
- Summarize web sources; never dump full page content into context.
- Separate "Internal context (Work IQ)" from "Public sources".

Subagents:
1) Collectors (parallel): use the web-search skill to research each competitor.
   Write a summary per competitor to docs/Lab4/work/sources/<name>.md.
2) Synthesizer: read all summaries + internal-context.md.
   Write docs/Lab4/work/competitive-brief.md with a comparison table.
3) Skeptic: review the brief. Remove or soften anything without a source URL.
   Add skepticNotes where evidence is thin.
4) Deck Builder: use the ppt-creator and/or pptx skill to build the final slide deck
   from the competitive brief. Output to docs/Lab4/work/output/.
   Before running any skill, install its required packages.
```

## Exercise B — Run the agent (20–30 min)

1. Switch Copilot Chat to **Agent mode**.
1. Select your `competitive-intel-deck` agent.
1. Provide inputs:
   - Your product name and target buyer.
   - 2–3 competitor names to research.
   - (Optional) specific angles: pricing, feature comparison, positioning.
1. Let it run end-to-end:
   - Web search + summarize → Work IQ internal context → brief draft → skeptic revise → build deck.

Watch the STM in action: notice how each subagent reads disk files written by the previous step, rather than trying to hold everything in context at once.

## Exercise C — Review and iterate (10–15 min)

Open the outputs under `docs/Lab4/work/`.

Quality checklist:

- Does every specific pricing/feature claim have a source URL?
- Did the skeptic remove speculative language?
- Is the comparison table readable?
- Does the deck use assertion-style headings (complete sentences, not topic labels)?
- Are summaries in `sources/` concise (not full page dumps)?

If something is weak:

- Refine your web-search skill to return better summaries.
- Add more specific Work IQ queries.
- Ask the agent to rerun only the Synthesizer + Skeptic + Deck Builder steps.

## Deliverables

- `.github/agents/competitive-intel-deck.agent.md` — your custom agent
- `.github/skills/web-search/SKILL.md` — the skill you built
- `docs/Lab4/work/sources/*.md` — competitor summaries
- `docs/Lab4/work/internal-context.md` — Work IQ findings
- `docs/Lab4/work/competitive-brief.md` — final brief
- `docs/Lab4/work/output/` — slide deck artifacts from ppt-creator

Reflection (5 bullets):

- What tool gave the biggest quality boost?
- What did the skeptic catch?
- How did Work IQ help (or what would it have helped with)?
- Where did you hit STM limits (context getting too large)?
- How did building your own skill differ from using the pre-installed one?
