# Hero Redesign Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace the compact intro hero with a professional split-layout hero that supports longer positioning copy, highlights, and motion.

**Architecture:** Keep the existing `Intro` organism as the entry point for the homepage hero, but restructure it into a responsive two-column layout. Store all new copy in `next-intl` locale files so the component remains presentation-focused and can render highlight cards from translation data.

**Tech Stack:** Next.js App Router, React 19, `next-intl`, Tailwind CSS v4, existing `BlurFade`, `Avatar`, and `SocialLinks` components.

---

### Task 1: Document the hero content contract

**Files:**
- Modify: `messages/ru/home.json`
- Modify: `messages/en/home.json`

**Step 1:** Add dedicated intro fields for eyebrow, title, lead, and highlight list.

**Step 2:** Keep text concise enough for desktop and mobile line lengths.

**Step 3:** Preserve the existing print-only fallback copy unless the new structure makes it obsolete.

### Task 2: Rebuild the Intro layout

**Files:**
- Modify: `components/organisms/Intro.tsx`

**Step 1:** Replace the centered single-column layout with a responsive split layout.

**Step 2:** Render eyebrow, title, lead paragraph, and highlight cards from translations.

**Step 3:** Reuse existing animation primitives with staggered entrance timing.

**Step 4:** Keep the avatar visually prominent with a professional presentation and motion-safe styling.

### Task 3: Verify the page still compiles cleanly

**Files:**
- Verify only

**Step 1:** Run `yarn lint`.

**Step 2:** Run `yarn build`.

**Step 3:** Fix any issues before closing the task.
