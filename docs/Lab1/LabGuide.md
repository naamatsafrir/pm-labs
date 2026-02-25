# Lab 1 Guide — Git Fundamentals: Fork, Clone, Change, Push, PR

## Learning goals

You will:

- Get comfortable using **Git from the terminal** (the commands you'll use every day).
- Understand the **standard GitHub flow**: fork → clone → branch → commit → push → pull request.
- Open a repository in **VS Code**, make a change with **GitHub Copilot**, and push it upstream.
- Create your first **pull request** on GitHub.

## Prerequisites

- A **GitHub account** (free tier is fine).
- **Git** installed and available in your terminal. Verify with:
  ```
  git --version
  ```
  If not installed, download from [git-scm.com](https://git-scm.com/).
- **VS Code** installed with the **GitHub Copilot** extension enabled.
- A terminal you are comfortable typing in (Terminal in VS Code works great).

> **New to the terminal?** Don't worry — every command you need is written out below. Copy-paste is encouraged.

## Setup (5 min)

### 1) Configure Git (one-time)

If you have never used Git on this machine, set your name and email. Open a terminal and run:

```
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

These appear on your commits so collaborators know who made each change.

### 2) Fork the repository

A **fork** is your personal copy of a repository on GitHub. You can change anything in your fork without affecting the original.

1. In your browser, navigate to the lab repository on GitHub.
2. Click the **Fork** button (top-right corner).
3. Keep the default settings and click **Create fork**.

You now have a copy under `https://github.com/<your-username>/pm-labs`.

### 3) Clone your fork to your machine

**Cloning** downloads the repository so you can work on it locally.

1. On your fork's GitHub page, click the green **<> Code** button.
2. Copy the **HTTPS** URL (it looks like `https://github.com/<your-username>/pm-labs.git`).
3. In your terminal, navigate to where you want to store the project and run:

```
git clone https://github.com/<your-username>/pm-labs.git
```

4. Move into the cloned directory:

```
cd pm-labs
```

> **What just happened?** Git downloaded every file and the full history of the project onto your machine. You now have a local copy linked to your fork on GitHub.

## Exercise A — Make a change with Copilot and push it (20–25 min)

### Step 1 — Open the project in VS Code

From the terminal, inside the `pm-labs` folder, run:

```
code .
```

This opens the current folder in VS Code.

### Step 2 — Create a new branch

A **branch** lets you make changes without affecting the main codebase. Think of it as a safe workspace.

In the terminal (VS Code's integrated terminal works great — open it with `` Ctrl+` ``):

```
git checkout -b my-first-change
```

This creates a new branch called `my-first-change` and switches to it.

> **Why branch?** It keeps your work separate from `main` so you (and your team) can review changes before merging.

### Step 3 — Make a change using GitHub Copilot

1. In VS Code, open the file `README.md` at the root of the project.
2. Open **GitHub Copilot Chat** (click the Copilot icon in the sidebar or press `Ctrl+Shift+I`).
3. Ask Copilot to help you add something to the README. For example:

   > "Add a 'Contributors' section at the bottom of this README with my name and today's date."

4. Review Copilot's suggestion and **apply** it to the file.
5. Save the file (`Ctrl+S`).

You've now made your first code change assisted by an AI coding agent.

### Step 4 — Check what changed

In the terminal, run:

```
git status
```

You should see `README.md` listed under **Changes not staged for commit** (shown in red). This means Git noticed you edited the file but hasn't recorded the change yet.

To see exactly what changed, run:

```
git diff
```

Lines prefixed with `+` are additions; `-` are deletions.

### Step 5 — Stage your change

**Staging** tells Git which changes you want to include in your next commit.

```
git add README.md
```

Run `git status` again — the file should now appear under **Changes to be committed** (shown in green).

> **Tip:** To stage all changed files at once, use `git add .` (the dot means "everything in the current directory").

### Step 6 — Commit your change

A **commit** is a snapshot of your changes with a message describing what you did.

```
git commit -m "Add contributors section to README"
```

Your change is now saved in your local Git history.

### Step 7 — Push to GitHub

**Pushing** uploads your local commits to your fork on GitHub.

```
git push origin my-first-change
```

- `origin` refers to your fork on GitHub (the remote you cloned from).
- `my-first-change` is the branch you are pushing.

> **First push?** Git may ask you to authenticate. Follow the prompts to log in via browser or use a personal access token.

### Step 8 — Create a pull request

A **pull request (PR)** is how you propose changes to a repository. It lets others review your work before it gets merged.

1. After pushing, open your fork on GitHub in your browser.
2. You should see a banner: **"my-first-change had recent pushes — Compare & pull request"**. Click it.
   - If you don't see the banner, go to the **Pull requests** tab and click **New pull request**.
3. Make sure the base repository is the **original** repo (not your fork) and the base branch is `main`.
4. Add a title and a short description of your change.
5. Click **Create pull request**.

🎉 **Congratulations!** You've completed the full GitHub flow: fork → clone → branch → edit → stage → commit → push → PR.

## Bonus Phase — Edit, diff, and commit from VS Code (10–15 min)

If time allows, make a second change — but this time use **VS Code's built-in Git features** to see how they complement the CLI.

### Step 1 — Make another change

Open any file (for example, `README.md` again) and make a small edit — add a line, fix a typo, or ask Copilot for another improvement.

Save the file.

### Step 2 — View the diff in VS Code

1. Click the **Source Control** icon in the left sidebar (or press `Ctrl+Shift+G`).
2. You'll see your changed file listed under **Changes**.
3. Click the filename to open a **side-by-side diff view** — red highlights removals, green highlights additions.

> **Why look at diffs?** Reviewing your own changes before committing is a good habit. It helps you catch mistakes and keep commits clean.

### Step 3 — Stage and commit from VS Code

1. In the Source Control panel, hover over the changed file and click the **+** icon to **stage** it.
2. Type a commit message in the text box at the top (e.g., "Improve README formatting").
3. Click the **✓ Commit** button (or press `Ctrl+Enter`).

### Step 4 — Push from VS Code

Click the **⋯** menu in the Source Control panel and choose **Push**, or click the sync/upload icon in the status bar.

### Step 5 — Check your PR on GitHub

Go back to your pull request on GitHub. **Refresh the page.** You should see your second commit appear automatically — the PR updates with every push to the same branch.

> **Key insight:** A pull request tracks a branch, not a single commit. Every time you push new commits to that branch, the PR updates automatically.

## Deliverables

- A **forked repository** under your GitHub account.
- A **pull request** from your fork to the original repo containing at least one commit.
- (Bonus) A second commit visible in the same PR, made and pushed using VS Code's Source Control view.

## Quick reference — Git commands used in this lab

| Command | What it does |
| --- | --- |
| `git config --global user.name "…"` | Set your name for commits |
| `git config --global user.email "…"` | Set your email for commits |
| `git clone <url>` | Download a repository to your machine |
| `git checkout -b <branch>` | Create and switch to a new branch |
| `git status` | Show which files have changed |
| `git diff` | Show exactly what changed (line by line) |
| `git add <file>` | Stage a file for the next commit |
| `git commit -m "message"` | Save staged changes with a description |
| `git push origin <branch>` | Upload your branch to GitHub |
