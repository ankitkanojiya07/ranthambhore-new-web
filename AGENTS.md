## Learned User Preferences

- Uses a plan-then-implement workflow: plan is created in Ask/Plan mode first, then agent is invoked with "Implement the plan as specified" in Agent mode.
- When implementing a plan, todos are pre-created; the agent should not recreate them — just mark them in_progress as work proceeds.
- Provides screenshots to describe UI bugs and reference designs; expects the agent to diagnose from the image.
- Uses short imperative follow-up commands ("add it", "align center") to request quick adjustments after an initial implementation.
- Always verifies changes with `bun run check` (Biome) and `bunx tsc --noEmit` after edits; uses `npx biome format --write` or `bun run lint:fix` for auto-fix.
- Expects clean lint and TypeScript output before a task is considered done.

## Learned Workspace Facts

- Hero section is a two-column layout: text/content on the left, carousel on the right. Carousel uses `AnimatePresence` without `mode="wait"` so images crossfade simultaneously (no blank frame between slides).
- `HeroScrollIndicator` component sits at the bottom of the hero section, centered across the full width via `left-1/2 -translate-x-1/2`. It shows "Your Journey / Starts Below" in `font-display` uppercase white, a rotated diamond, and a vertical line. Uses Motion fade-in.
- Navbar layout: white background, logo left, nav links centered, "Get Free Quote" CTA right. CTA is forest-green (`forest-500`), `rounded-lg`, wide padding, semibold uppercase. Social links and search icon have been removed from both desktop and mobile.
- `ThingsToDoSection` uses a bento layout: featured card on the left with `lg:h-[440px]` to cap height, and an activity grid on the right with `grid-rows-2`. Inner activity cards use `h-full` (not `aspect-4/3`) so they fill the grid row height cleanly.
- `HeroDecorations.tsx` (leaf/tire decorations) has been deleted; it is no longer part of the project.
