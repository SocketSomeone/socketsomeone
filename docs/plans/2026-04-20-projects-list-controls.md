# Projects List Controls Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add search, language filtering, sorting, and progressive loading to the projects grid so the page stays compact and easier to browse.

**Architecture:** Keep data fetching in `components/organisms/Projects/Projects.tsx` and move grid-specific interaction state into `components/organisms/Projects/GridProjects.tsx`. Use small pure helper functions for filtering, sorting, and language option generation so UI code stays readable.

**Tech Stack:** Next.js, React client components, TypeScript, Tailwind CSS, React Query

---

### Task 1: Prepare grid-specific types and list helpers

**Files:**
- Modify: `components/organisms/Projects/GridProjects.tsx`

**Step 1: Extract a local project type**

Define the minimal shape used by the grid: `id`, `name`, `description`, `language`, `stargazers_count`, `updated_at`, `created_at`, `html_url`, `homepage`, `license`, and `owner`.

**Step 2: Add pure helper functions**

Add small functions for:
- normalizing language labels
- matching search text
- sorting by selected mode
- building language options

**Step 3: Keep badge calculations intact**

Preserve the current `HOT` and `NEW` card markers after introducing the helper layer.

### Task 2: Add controls and progressive loading

**Files:**
- Modify: `components/organisms/Projects/GridProjects.tsx`

**Step 1: Add client state**

Track:
- search query
- selected language
- selected sort
- visible item count

**Step 2: Derive the displayed list**

Compute:
- filtered projects
- sorted projects
- visible slice
- `hasMore` state

**Step 3: Render controls**

Add:
- search input for `owner/repository`
- language `<select>`
- sort `<select>`
- result count text

**Step 4: Render `Load more`**

Show a button only when additional matching items remain and append the next 6 entries on click.

### Task 3: Verify integration and page behavior

**Files:**
- Modify: `components/organisms/Projects/GridProjects.tsx`
- Verify: `app/[locale]/projects/page.tsx`

**Step 1: Check empty states**

Ensure both cases work:
- no projects returned at all
- no projects match active controls

**Step 2: Run verification**

Run:
- `npm test`
- `npm run lint`
- `npm run build`

Expected:
- `npm test` remains a placeholder command in this repository
- lint passes
- production build succeeds

**Step 3: Review visual behavior**

Confirm the controls wrap cleanly on mobile widths and the list resets to the first 6 items after any search/filter/sort change.
