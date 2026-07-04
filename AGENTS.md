## Learned User Preferences

- Uses a plan-then-implement workflow: plan is created in Ask/Plan mode first, then agent is invoked with "Implement the plan as specified" in Agent mode.
- When implementing a plan, todos are pre-created; the agent should not recreate them — just mark them in_progress as work proceeds.
- Provides screenshots to describe UI bugs and reference designs; expects the agent to diagnose from the image.
- When building UI from reference screenshots, apply the site theme (tiger/earth/sand) instead of copying off-brand colors from the reference (e.g. green).
- Uses short imperative follow-up commands ("add it", "align center") to request quick adjustments after an initial implementation.
- After sign-in/sign-up, users should land on the Ranthambhore update submission form (`/highlights/ranthambhore-insights/new`) unless a safe `redirect` search param is provided.
- Submission form CTAs ("Add Your Sightings Update", etc.) should open the respective form directly — not redirect to sign-in first; publishing still requires a signed-in account (enforced server-side on submit).
- Always verifies changes with `bun run check` (Biome) and `bunx tsc --noEmit` after edits; uses `npx biome format --write` or `bun run lint:fix` for auto-fix.
- Expects clean lint and TypeScript output before a task is considered done.
- When writing scripts (e.g. placeholder generation), expects Bun-native APIs: `Bun.file()`, `Bun.Image`, `Bun.Glob`, `Bun.write` — not Node.js equivalents.

## Learned Workspace Facts

- Hero section uses `HeroCarousel` (`src/components/home/HeroCarousel.tsx`) inside `hero-frame-mask` on both mobile (stacked, centered) and desktop (overlay on cream `bg-tiger-50` arch). Slides cycle `/hero/7.webp`–`/hero/10.webp` every 5s. `AnimatePresence` without `mode="wait"` crossfades slides (no blank frame). `HeroScrollIndicator` is centered at the bottom via `left-1/2 -translate-x-1/2`.
- Navbar layout: white background, `grid-cols-3`. Center logo is `/logo.png` with `h-full w-auto object-contain`, `brightness-0` on light header, natural white on hero `navOverlay`. Left cell: Menu button + social icons (`currentColor`, `text-charcoal-700 hover:text-forest-600`). Right cell: "Get Free Quote" CTA — `forest-500`, `rounded-lg`, semibold uppercase. Nav `Stay` links directly to `/stay/hotels`; `/stay` redirects there.
- `QuickLinksHighlightsSection` sits between `HeroSection` and `AboutSection` on the home page: left column is a Safari Highlights carousel plus "Add Your Sightings Update" CTA linking to `/daily-updates/new`; right column is a "What's New" / Ranthambhore Highlights carousel. Safari cards load `daily_update` posts; Ranthambhore cards load `ranthambhore_update` posts.
- Highlight listing pages: `/highlights/safari-insights` (`daily_update` sightings) and `/highlights/ranthambhore-insights` (`ranthambhore_update` park news). Submission forms at `/daily-updates/new` and `/highlights/ranthambhore-insights/new` are publicly accessible (no route-level auth); publish requires sign-in server-side. Post-auth default redirect is `/highlights/ranthambhore-insights/new` via `src/lib/auth-redirect.ts`.
- About navigation has five tabs: National Park, Wildlife (Flora & Fauna), Tigers, Conservation, and Heritage (Fort, Temples & Museums). About page content is centralized in `src/lib/about-ranthambore-pages.ts`; `/about/heritage` renders from that data via `GuidePage`.
- Home `SafariInformationSection` sits after `PopularWildlifeSection` and links image cards to `/safari/jeep` and `/safari/canter`. The safari zone table lives in `src/components/safari/ZoneSection.tsx`, is rendered inline after the intro on `/safari/zones`, and is no longer on the home page.
- Hero trust badges ("Expert Local Guides", "60+ Tigers in the Wild", "Open October to June") appear only on the home `HeroSection`, not on highlights subpages.
- Bottom `CTASection` promo blocks ("Plan Your Visit", "Get Free Quote", etc.) and the `/blog` route were removed; `src/components/cta.tsx` no longer exists.
- `ThingsToDoSection` is the home "Explore Inside the Park" attractions carousel, powered by `ATTRACTIONS` in `src/lib/attractions.ts`. Cards link with `Know More` anchors to `/nearby-places#...`; `/nearby-places` is the "Attractions in Ranthambore" guide with sticky attraction nav and no hero stats banner.
- `Button` component (`src/components/ui/button.tsx`) is themed to brand: base uses `rounded-full font-display text-xs uppercase`. Variants: `default` = `bg-sunset-500 text-sand-50` (terracotta CTA), `secondary` = `bg-forest-500 text-sand-50`, `outline` = transparent with charcoal border pill, `ghost` = sand-100 hover.
- All `<img>` tags replaced with `@unpic/react` `<Image>`. For Motion-wrapped images, use `const MotionImage = motion(Image)` and omit the `layout` prop on `MotionImage` calls to avoid the framer-motion / unpic `layout` prop-name collision.
- `FeaturesSection` ("Why You Should Choose Us" icon grid) was extracted from `ContactSection` as its own standalone section. `ContactSection` is now a booking enquiry form submitted via FormSubmit.co ajax, with warm input colors (`bg-sand-100 border-sand-300`) and `h-full min-h-[460px]` image column.
