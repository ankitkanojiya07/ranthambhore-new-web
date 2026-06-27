## Learned User Preferences

- Uses a plan-then-implement workflow: plan is created in Ask/Plan mode first, then agent is invoked with "Implement the plan as specified" in Agent mode.
- When implementing a plan, todos are pre-created; the agent should not recreate them — just mark them in_progress as work proceeds.
- Provides screenshots to describe UI bugs and reference designs; expects the agent to diagnose from the image.
- Uses short imperative follow-up commands ("add it", "align center") to request quick adjustments after an initial implementation.
- Always verifies changes with `bun run check` (Biome) and `bunx tsc --noEmit` after edits; uses `npx biome format --write` or `bun run lint:fix` for auto-fix.
- Expects clean lint and TypeScript output before a task is considered done.
- When writing scripts (e.g. placeholder generation), expects Bun-native APIs: `Bun.file()`, `Bun.Image`, `Bun.Glob`, `Bun.write` — not Node.js equivalents.

## Learned Workspace Facts

- Hero section uses `HeroCarousel` (`src/components/home/HeroCarousel.tsx`) inside `hero-frame-mask` on both mobile (stacked, centered) and desktop (overlay on cream `bg-tiger-50` arch). Slides cycle `/hero/7.webp`–`/hero/10.webp` every 5s. `AnimatePresence` without `mode="wait"` crossfades slides (no blank frame).
- `HeroScrollIndicator` component sits at the bottom of the hero section, centered across the full width via `left-1/2 -translate-x-1/2`. It shows "Your Journey / Starts Below" in `font-display` uppercase white, a rotated diamond, and a vertical line. Uses Motion fade-in.
- Navbar layout: white background, `grid-cols-3`. Left cell: Menu button + social icons (Facebook, Instagram, X) using `currentColor` mono icons with `text-charcoal-700 hover:text-forest-600`. Center cell: logo. Right cell: "Get Free Quote" CTA — `forest-500`, `rounded-lg`, semibold uppercase. Search icon has been removed.
- `ThingsToDoSection` uses a bento layout: featured card on the left with `lg:h-[440px]` to cap height, and an activity grid on the right with `grid-rows-2`. Inner activity cards use `h-full` (not `aspect-4/3`) so they fill the grid row height cleanly.
- `HeroDecorations.tsx` (leaf/tire decorations) has been deleted; it is no longer part of the project.
- `Button` component (`src/components/ui/button.tsx`) is themed to brand: base uses `rounded-full font-display text-xs uppercase`. Variants: `default` = `bg-sunset-500 text-sand-50` (terracotta CTA), `secondary` = `bg-forest-500 text-sand-50`, `outline` = transparent with charcoal border pill, `ghost` = sand-100 hover.
- All `<img>` tags replaced with `@unpic/react` `<Image>`. For Motion-wrapped images, use `const MotionImage = motion(Image)` and omit the `layout` prop on `MotionImage` calls to avoid the framer-motion / unpic `layout` prop-name collision.
- `FeaturesSection` ("Why You Should Choose Us" icon grid) was extracted from `ContactSection` as its own standalone section. `ContactSection` is now purely a contact form with warm input colors (`bg-sand-100 border-sand-300`) and `h-full min-h-[460px]` image column.
- Social icons (`facebook.icon.tsx`, `instagram.icon.tsx`, `x.icon.tsx`) all use `currentColor` monochrome SVG — no hardcoded brand colors. They inherit text color from their parent element.
