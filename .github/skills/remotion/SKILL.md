---
name: remotion
description: 'Create programmatic videos using React and the Remotion framework. Use when asked to create a video, animate a presentation, produce a product demo video, generate a personalized video update, or render any MP4/WebM/GIF from code. Triggers on keywords: "video", "animate", "render video", "mp4", "remotion", "programmatic video", "product demo video".'
---

# Remotion Skill

Use this skill to build and render programmatic videos with [Remotion](https://www.remotion.dev/) — a framework that lets you create videos using React components.

## When to Use This Skill

- User wants a **video output** (MP4, WebM, GIF) instead of a slide deck
- User asks to "animate" data, metrics, or a competitive brief
- User wants a **personalized or data-driven video** (e.g. weekly update as a video)
- User wants a **product demo video** generated from code
- Phrases like "render a video", "make an animated summary", "create an mp4", "remotion"

## Prerequisites

- **Node.js 18+** and **npm** installed
- **FFmpeg** installed and on `$PATH` (required for rendering)
  - macOS: `brew install ffmpeg`
  - Ubuntu/Debian: `sudo apt-get install ffmpeg`
  - Windows: download from [ffmpeg.org](https://ffmpeg.org/download.html)

## Quickstart — Scaffold a New Remotion Project

```bash
npx create-video@latest
```

Follow the prompts to choose a template (e.g. `Hello World`, `Blank`). This creates a project with:

```
my-video/
├── src/
│   ├── Root.tsx          # Registers all compositions
│   ├── HelloWorld/       # Example composition
│   └── ...
├── package.json
└── remotion.config.ts
```

Install dependencies:

```bash
cd my-video
npm install
```

## Preview in the Browser

```bash
npm run dev
# or
npx remotion studio
```

Opens an interactive preview at `http://localhost:3000` where you can scrub through frames.

## Key Concepts

| Concept | Description |
|---------|-------------|
| **Composition** | A "scene" — defines width, height, fps, duration, and the root component |
| `useCurrentFrame()` | Hook that returns the current frame number for time-based animation |
| `interpolate()` | Maps a frame range to a value range (e.g. opacity 0→1 over frames 0→30) |
| `Sequence` | Offsets when a child component appears in the timeline |
| `AbsoluteFill` | Full-size absolutely-positioned container — use for layering |
| `spring()` | Physics-based animation helper for smooth motion |

### Minimal Composition Example

```tsx
// src/Root.tsx
import { Composition } from "remotion";
import { MyVideo } from "./MyVideo";

export const RemotionRoot: React.FC = () => (
  <Composition
    id="MyVideo"
    component={MyVideo}
    durationInFrames={150}  // 5 seconds at 30fps
    fps={30}
    width={1280}
    height={720}
  />
);
```

```tsx
// src/MyVideo.tsx
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

export const MyVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 30], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: "#fff", justifyContent: "center", alignItems: "center" }}>
      <h1 style={{ opacity, fontSize: 72 }}>Hello from Remotion!</h1>
    </AbsoluteFill>
  );
};
```

## Render to Video File

### Render a single composition

```bash
npx remotion render MyVideo output.mp4
```

### Render as GIF

```bash
npx remotion render MyVideo output.gif
```

### Render as WebM

```bash
npx remotion render MyVideo output.webm
```

### Common render options

```bash
# Specific quality (CRF 0=lossless, 51=worst; default 18)
npx remotion render MyVideo output.mp4 --crf=23

# Custom frame range
npx remotion render MyVideo output.mp4 --frames=0-90

# Pass props (JSON)
npx remotion render MyVideo output.mp4 --props='{"title":"Q2 Update"}'
```

## Step-by-Step Workflow for PMs

### 1. Plan the Video

Decide:
- **Duration**: how many seconds
- **Scenes**: what content appears in each segment (title card, data slide, closing)
- **Data**: what text/numbers/charts to include
- **Output path**: where to save the rendered video

### 2. Scaffold the Project

```bash
npx create-video@latest
cd <project-name>
npm install
```

### 3. Create Compositions

- Edit `src/Root.tsx` to register your composition(s).
- Build scene components in `src/` using `useCurrentFrame`, `interpolate`, and `Sequence`.
- Use `<AbsoluteFill>` for full-canvas layouts.

### 4. Preview

```bash
npm run dev
```

Iterate on the design in the browser preview.

### 5. Render

```bash
npx remotion render <CompositionId> output/video.mp4
```

Output goes to `output/video.mp4` (create the folder first if needed).

## PM Use Cases

| Use Case | What to Build |
|----------|---------------|
| **Weekly stakeholder video update** | Animated text summary of key metrics and wins |
| **Product demo video** | Screen-recording overlay + animated callouts |
| **Competitive brief animation** | Animated comparison table with fade-in rows |
| **Data-driven report video** | Charts that animate in sequence with narration cues |
| **Personalized customer onboarding** | Template video with injected company name / data via props |

## Integration with Other Skills

- **After ppt-creator or pptx**: convert a completed slide outline into an animated video version using Remotion.
- **After web-search**: animate competitive findings into a video brief.
- **With competitive-intel-deck agent**: add a Remotion-based "Video Brief" output step as an alternative to or alongside the PPTX deck.

## Output Convention (for this project)

Save all Remotion project files and rendered output under:

```
docs/Lab4/work/video/
├── src/              # Remotion source components
├── package.json
└── output/
    └── video.mp4     # Rendered output
```

## Troubleshooting

| Issue | Solution |
|-------|----------|
| `ffmpeg not found` | Install FFmpeg and ensure it's on `$PATH` |
| `Cannot find module 'remotion'` | Run `npm install` inside the project directory |
| Blank frames on render | Check that `useCurrentFrame()` drives all animations |
| Render hangs | Reduce `durationInFrames` or check for infinite loops in components |
| Props not applied | Ensure props type matches the `defaultProps` and composition schema |

## References

- [Remotion docs](https://www.remotion.dev/docs)
- [Remotion GitHub](https://github.com/remotion-dev/remotion)
- [Remotion templates](https://www.remotion.dev/templates)
- [API reference — interpolate](https://www.remotion.dev/docs/interpolate)
- [API reference — spring](https://www.remotion.dev/docs/spring)
