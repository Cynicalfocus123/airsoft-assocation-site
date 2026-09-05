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
- Every completed change must: validate; sync the local live mirror; update documentation; commit; push to `main`; wait for the GitHub Pages deployment workflow; verify its result; and report both source and deployed site links.
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
- Keep client code limited to navigation and carousel state. No unnecessary animation or UI packages.
- Prefer compact repository inspection (`git status --short`, `git diff --stat`, targeted `rg`) and capped command output.

## Architecture
- `app/`: homepage, event index/detail routes, catch-all editorial route shells.
- `components/layout/`: sticky desktop/mega/mobile navigation and footer-only association mark.
- `components/events/`: data-driven feature hero and native-scroll event rail.
- `components/sections/`: reusable `CinematicSection` foundation for scroll-scrubbed homepage storytelling.
- `data/events.ts`: event data model and published list.
- `data/navigation.ts`: authoritative internal navigation links.
- `public/images/`: supplied association marks plus generated tournament artwork.

## Current implementation
- Responsive sticky header, desktop mega menus and mobile off-canvas accordion navigation.
- Featured event hero, responsive event carousel, real event detail routes and editorial content routes.
- Footer with functioning internal links, accessible controls and reduced-motion behavior.
- Supplied association logo is used only in the global footer across every route; header association-name text and logo are intentionally absent.
- “PLAY WITH PURPOSE” is a separate banner above the footer and must contain no logo. The logo belongs below the divider in the actual footer with navigation links; it is static and must not share the banner animation.
- Association logo scale is prominent in the shared footer (192px desktop and 136px mobile).
- Responsive navigation has a reliable accessible toggle, dimmed click-to-close backdrop, smooth 320ms right-side drawer and nested mobile menu accordions.
- In the homepage mission section, the literal words “OUR MISSION” are the large h2 (40–64px). “Building the future of airsoft & paintball in Thailand.” is a medium supporting paragraph (20–28px), with normal tracking and natural wrapping; it must never become the oversized heading again. Supporting body copy is 16px. Preserve this hierarchy when changing motion or reusing the component.
- Homepage Mission, Standards and Sport Tourism use the shared three-layer `CinematicSection`: media, readability overlay and foreground content move at different CSS view-timeline rates and reverse naturally on upward scroll. Footer identity uses the same scrubbed floating layer treatment.
- Event rail uses reusable `components/hooks/useDragScroll.ts`: desktop mouse drag with grab/grabbing cursor states, six-pixel click protection and pointer capture; `touch-action: auto` for browser-native mobile/tablet swipe; compact mobile `SWIPE` prompts; edge arrows; keyboard arrows; and a scrollbar.

## Pending / limitations
- Official event registrations, formal policy content, verified contact channels and full long-form association material need approved source content.
- GitHub Pages must remain configured to use GitHub Actions. The workflow publishes `out/` after each push to `main`.

## Latest task summary
Corrected the mission hierarchy: “OUR MISSION” is the large heading and the sentence below is a medium paragraph. Moved the logo out of the “PLAY WITH PURPOSE” banner into the actual footer beside its navigation links. Validate, sync the live mirror, commit, push and verify GitHub Pages.
