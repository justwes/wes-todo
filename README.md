# Wes To Do

A single‑user, browser‑based **Kanban-style to‑do app**, built incrementally with **Next.js, React, TypeScript, Tailwind CSS**, and **test‑driven development (TDD)**.

This project is intentionally designed to grow over time: starting simple and correct, then layering in persistence, projects, and multi‑user support without rewrites.

---

## ✨ Features (Current)

- Add tasks with a title and priority
- Inline validation with accessible error feedback
- Kanban board with three states:
  - **To do** → **Doing** → **Done**
- Move tasks forward and backward between columns
- In‑memory state management (no backend yet)
- Light & dark mode support via theme tokens (respects OS / browser preference)
- Fully unit‑tested UI and state logic

---

## 🧠 Design Principles

- **Incremental development** — small, testable steps
- **TDD-first** — behavior defined by tests before implementation
- **Single source of truth** — all task state owned by the Board component
- **Separation of concerns** — presentation vs business logic
- **Future-proof** — architecture prepared for persistence and multi-user support

---

## 🧱 Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **UI:** React + Tailwind CSS
- **Testing:** Vitest + Testing Library
- **Styling:** CSS theme tokens + Tailwind utilities

No backend, database, or auth yet — by design.

---

## 🚀 Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm

### Install & Run

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

### Run Tests

```bash
npm test
```

All core behavior is covered by unit tests.

---

## 🧪 Testing Philosophy

This project uses **true TDD**:

- Tests describe _what the user should be able to do_
- UI labels are tested as the user sees them
- State transitions are tested via user interactions
- Refactors are safe because tests protect behavior

Tests are colocated with the components they cover.

---

## 🎨 Theming & Dark Mode

The app supports light and dark mode **without forcing a theme**.

- Uses semantic CSS tokens (`--bg`, `--fg`, `--surface`, etc.)
- Responds to `prefers-color-scheme`
- Compatible with dark‑mode browser extensions
- Tailwind is used for layout and spacing; tokens control color

This avoids reliance on browser defaults and keeps contrast predictable.

---

## 📂 Project Structure (Simplified)

```
src/
  app/              # Next.js app router
  components/       # UI + stateful components
  lib/              # Domain types (Task, Status, Priority)
  components/__tests__/
                    # Unit tests (TDD-driven)
```

Key components:

- `Board` — owns all task state and transitions
- `TaskColumn` — filters tasks by status
- `TaskList` — renders tasks and available actions
- `TaskCard` — presentational task view
- `AddTaskForm` — task creation with validation

---

## 🛣️ Roadmap

Planned next steps (in order):

1. Archive completed tasks
2. Projects / task grouping
3. Persistence layer (Postgres via repository interface)
4. Keyboard navigation improvements
5. Auth + multi‑user support

Each feature will be added incrementally and test‑first.

---

## 📜 License

MIT License — see `LICENSE` for details.

---

## 👋 Contributing

This is currently a personal project, but the repository is public and intentionally readable.

If you open issues or PRs:

- Keep changes small
- Include or update tests
- Preserve the incremental/TDD approach

---

## 📌 Status

**Actively developed.**

The current version is stable, tested, and intentionally minimal.
