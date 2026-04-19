# Projects List Controls Design

**Context**

The `/projects` page currently renders the full project list at once. As the list grows, the page becomes too tall and pushes secondary content too far down.

**Goal**

Reduce the initial page height and make the project list easier to explore by adding progressive disclosure and simple discovery controls.

**Approved UX**

- Show only the first 6 projects on initial render.
- Add a `Load more` button under the grid to reveal 6 more projects at a time.
- Add a search input that filters by `owner/repository`.
- Add a single-value language filter with an `All` option.
- Add a sort control with:
  - `Most stars` as the default
  - `Recently updated`
  - `Name A-Z`
- Reset the visible project count back to the first 6 whenever search, filter, or sort changes.

**Architecture**

The existing client-side `Projects` flow remains intact: projects are still fetched with React Query in `components/organisms/Projects/Projects.tsx`. The grid variant will become responsible for local UI state and list transformation because the marquee variant should stay unchanged.

The list transformation is split into deterministic helper functions so the render path stays readable and filtering/sorting logic is easy to maintain. The controls stay lightweight and use native form elements to match the current codebase without introducing a new component dependency.

**Data Rules**

- Search source: `owner.login`, `name`
- Filter source: `language`
- Sort source:
  - `stargazers_count` for `Most stars`
  - `updated_at` for `Recently updated`
  - `name` for `Name A-Z`
- Missing language is grouped under `Unknown`

**Interaction Notes**

- The `Load more` button is hidden when all matching projects are visible.
- A compact empty state is shown if the active search/filter removes every project from the result set.
- The controls should wrap cleanly on smaller screens and keep the grid layout unchanged.
