# Thailand Airsoft Association project memory

## Purpose
Official local-first website for the Thailand Airsoft Association: standards, safety, events, association information and sport tourism.

## Working system
- GitHub repository: `https://github.com/Cynicalfocus123/airsoft-assocation-site`
- Branch: `main`
- Canonical Git folder: `D:\mstar companies\Mstar Airsoft Association\airsoft-assocation-site-git`
- Local live mirror: `D:\mstar companies\Mstar Airsoft Association\airsoft-assocation-site-live`
- “Live” means the latest synchronized local source mirror. The public GitHub Pages deployment is a separate published build and must also be current.
- Synchronise after validated changes with `powershell -ExecutionPolicy Bypass -File scripts\sync-live.ps1` from the Git folder. It mirrors source and excludes `.git`, `node_modules`, `.next`, caches and coverage.
- **Hard completion rule:** every local build, source edit, asset addition, documentation edit, configuration change or other workspace change must be followed in the same task by validation, synchronization to the local live mirror, a Git commit, a push to `main`, completion of the matching GitHub Pages workflow, and verification of the published site. A change is not complete while it exists only locally, only in the live mirror, only in Git history, or only in an unfinished deployment.
- Do not end a change task after a successful local build. Continue through `scripts/sync-live.ps1`, `git commit`, `git push`, GitHub Pages success and published-site verification unless the user explicitly tells you to stop before publication.
- Before reporting completion, confirm the canonical Git working tree is clean and the deployed workflow head SHA matches the commit just pushed.
- Every future Git-push completion report must include a **Deployment / Git demo** section linking to the source and deployed site. GitHub source: `https://github.com/Cynicalfocus123/airsoft-assocation-site`; GitHub Pages: `https://cynicalfocus123.github.io/airsoft-assocation-site/`.

## Stack and validation
- Next.js 16, React 19, TypeScript, App Router, CSS Modules and modern CSS.
- `pnpm lint`, `pnpm exec tsc --noEmit`, `pnpm build`.
- Do not use or report localhost as the user workflow. Use static validation, production builds and the GitHub Pages deployment.

## Permanent implementation rules
- Internal navigation uses real Next.js routes; never use `#`, hash navigation, fake URLs or unfinished links.
- Use open editorial composition: full-bleed imagery, oversized condensed-feeling uppercase type, whitespace, dividers and asymmetric layouts. Do not default to rounded cards, shadows or generic feature grids.
- Event artwork is the card; details overlay the artwork.
- Native scroll only. Motion is restrained transform/opacity and disabled for `prefers-reduced-motion`.
- Client code covers navigation, carousel state and the small section-scroll controller. The controller writes CSS variables through requestAnimationFrame without React state or per-frame rerenders. No animation packages.
- Prefer compact repository inspection (`git status --short`, `git diff --stat`, targeted `rg`) and capped command output.

## Architecture
- `app/`: homepage, event index/detail routes, catch-all editorial route shells.
- `components/layout/`: sticky desktop/mega/mobile navigation with matching header and footer association marks.
- `components/events/`: data-driven feature hero and native-scroll event rail.
- `components/sections/`: reusable `CinematicSection` foundation for scroll-scrubbed homepage storytelling.
- `data/events.ts`: event data model and published list.
- `data/navigation.ts`: authoritative internal navigation links.
- `public/images/`: supplied association marks plus generated tournament artwork.

## Current implementation
- Responsive sticky header, desktop mega menus and mobile off-canvas accordion navigation.
- Featured event hero, responsive event carousel, real event detail routes and editorial content routes.
- Footer with functioning internal links, accessible controls and reduced-motion behavior.
- Supplied association logo appears in header and actual footer. Header logo is 40% smaller than footer: 7.2rem above 480px, 5.1rem at or below 480px. Footer stays 12rem / 8.5rem. No visible association-name text.
- “PLAY WITH PURPOSE” is a separate banner above the footer and must contain no logo. The logo belongs below the divider in the actual footer with navigation links; it is static and must not share the banner animation.
- Association logo scale is prominent in the shared footer (192px desktop and 136px mobile).
- Footer copyright reads “© 2026 Thailand Airsoft and Paintball Association”; omit the footer Thai/English text.
- Mobile/tablet navigation is a viewport-fixed right-side drawer from the top of the screen, `min(76vw, 460px)` wide with at least 72px of the dimmed page visible on the left. The drawer scrolls independently and slides horizontally. No backdrop-filter/transform on its header ancestor: those trap fixed positioning. Escape, backdrop, close button and links close it; desktop resize releases the page scroll lock.
- Sport Tourism uses photo-1730233024781-27672ab1674e.avif on all devices; Play with Purpose uses michal-franczak-1ZElf0bUFWc-unsplash.jpg as a clipped background layer. Preserve section dimensions, bleed, spacing and typography.
- In the homepage mission section, the literal words “OUR MISSION” are the large h2 (40–64px). “Building the future of airsoft & paintball in Thailand.” is a medium supporting paragraph (20–28px), with normal tracking and natural wrapping; it must never become the oversized heading again. Supporting body copy is 16px. Preserve this hierarchy when changing motion or reusing the component.
- Homepage cinematic layers use `useCinematicScroll`: IntersectionObserver activates nearby sections, passive scroll events schedule at most one requestAnimationFrame, and the untransformed section rectangle determines CSS variables. Media and text move independently and reverse on the next frame when scrolling upward. Respect live reduced-motion changes; clean up listeners, observers and pending frames. The Play with Purpose banner shares this hook. Never alter text, sizes, spacing, banner heights, colors, focal points or alignment as part of a motion fix.
- Event rail uses reusable `components/hooks/useDragScroll.ts`: desktop mouse drag with grab/grabbing cursor states, six-pixel click protection and pointer capture; `touch-action: auto` for browser-native mobile/tablet swipe; compact mobile `SWIPE` prompts; edge arrows; keyboard arrows; and a scrollbar.
- The first featured/published event is Force of Conquest, January 8–10, 2027 in Saraburi. Its supplied artwork, open-registration label, location, EUR 120 presale entry fee and 2,000-player attendance are data-driven across the homepage and event detail route. The homepage hero presents the date/registration row above the title and labelled facts below it.

## Pending / limitations
- Official event registrations, formal policy content, verified contact channels and full long-form association material need approved source content.
- GitHub Pages must remain configured to use GitHub Actions. The workflow publishes `out/` after each push to `main`.

## Latest task summary
Changed the mobile/tablet navigation to a right-side drawer and replaced the first featured event with Force of Conquest using supplied artwork and event details. Validate, sync, commit, push and verify Pages.
