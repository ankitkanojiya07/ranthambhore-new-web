# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Hotel website for Ranthambhore (com.ranthambhor) built with TanStack Start — a full-stack React framework with SSR, powered by Nitro as the server adapter.

## Commands

```bash
bun install              # Install dependencies
bun --bun run dev        # Dev server on port 3000
bun --bun run build      # Production build
bun --bun run test       # Run tests (vitest)
bun --bun run check      # Biome lint + format check
bun --bun run lint       # Lint only
bun --bun run format     # Format only
bun run generate-routes  # Regenerate route tree
```

Production: `node dist/server/index.mjs` after build.

## Architecture

- **Framework**: TanStack Start (React 19 + TanStack Router + Nitro SSR)
- **Routing**: File-based via TanStack Router. Routes live in `src/routes/`. The route tree is auto-generated into `src/routeTree.gen.ts` — never edit this file manually.
- **Root layout**: `src/routes/__root.tsx` — wraps all routes, includes `<head>`, global CSS, and TanStack devtools.
- **Router config**: `src/router.tsx` — creates the router instance with scroll restoration and intent-based preloading.
- **Components**: Base UI (`@base-ui-components/react`) — unstyled, accessible primitives. Style them with Tailwind classes.
- **Styling**: Tailwind CSS v4 via `@tailwindcss/vite` plugin. Global styles in `src/styles.css`.
- **Build**: Vite 8 with plugins: TanStack Start, React, Tailwind, Nitro, TanStack Devtools.
- **Package manager**: Bun (use `bun --bun run` prefix for scripts).

## Code Style

- **Formatter/Linter**: Biome with tab indentation and double quotes for JS/TS.
- **Biome scope**: Only `src/`, `.vscode/`, `index.html`, `vite.config.ts`. Excludes `routeTree.gen.ts` and `styles.css`.
- **TypeScript**: Strict mode, no unused locals/parameters, `ES2022` target, bundler module resolution.
- **Path aliases**: `#/*` and `@/*` both map to `./src/*`.

## Design System

All tokens defined in `src/styles.css` via Tailwind v4 `@theme` block.

**Colors** (nature-inspired palette): `forest` (green, primary), `earth` (brown), `sand` (beige, backgrounds), `sunset` (orange, CTAs), `golden` (yellow, accents), `charcoal` (dark text/backgrounds), `muted` (gray, borders). Each has 50–950 shades. Use the brand hex at: forest-500, earth-500, sand-300, sunset-500, golden-300, charcoal-800, muted-300.

**Fonts**: `font-display` (EB Garamond) for headings/nav/labels — always uppercase with `tracking-display`. `font-body` (Crimson Pro) for body text, quotes, descriptions. Both loaded from Google Fonts.

**Typography plugin**: `@tailwindcss/typography` is active — use `prose` class for long-form content. Prose colors and fonts are pre-configured to use brand tokens.

**Heading convention**: Headings use `font-display` (EB Garamond) by default via base styles. Uppercase + tracking is NOT applied by default — only use `uppercase tracking-display` on small eyebrow labels and section markers, not on main display headings. Main headings stay mixed-case.

## Adding Routes

Create a new `.tsx` file in `src/routes/`. TanStack Router auto-generates the route tree. Use `createFileRoute` for page routes. Use `createServerFn` from `@tanstack/react-start` for server functions.
