# AGENTS.md

## Commands
- `npm run dev` — Vite dev server (HMR)
- `npm run build` — production build to `dist/`
- `npm run lint` — ESLint (no test or typecheck scripts exist)

## Stack
- React 19 + Vite 8 (JavaScript/JSX, NO TypeScript)
- Tailwind CSS v4 configured CSS-first via `@theme` in `src/index.css` — custom tokens like `bg-accent-yellow`, `text-text-secondary`, `font-header`
- framer-motion (animations), lucide-react (icons)

## Architecture
Single-page 3-column layout in `App.jsx`: `Sidebar` (left, profile + live GitHub stats) | `MainContent` (center, hero + project cards) | `RightNav` (right, vertical nav).
- No router, no state library. RightNav tracks active section with local state only.
- GitHub stats are fetched client-side from a third-party API (username hardcoded in `Sidebar.jsx`); it can fail — errors fall back to "ERR" and that's expected.

## Dead code — do not touch
- `Hero.jsx`, `Navbar.jsx`, `Skills.jsx` are orphaned (not imported by App.jsx)
- `App.css` is a Vite template leftover (references undefined CSS vars)
- `src/assets/react.svg`, `src/assets/vite.svg` are unused template assets

## Styling conventions
- Dark theme with custom design tokens in `index.css` `:root` + `@theme` block. Add colors there, not inline hex.
- Utility-first Tailwind in JSX; custom CSS only in `index.css` base layer.
- `no-scrollbar` is used but not defined — known quirk, don't rely on it.

## Notes
- `index.html` title is still generic ("portfolio-suranjit-das").
- MainContent buttons ("Explore Work", "Resume") have no handlers yet; RightNav items for Experience/Tech/Blog/Contact have no sections — likely intended future work.
