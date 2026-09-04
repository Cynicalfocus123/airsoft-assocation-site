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
- `components/layout/`: sticky desktop/mega/mobile navigation and footer.
- `components/events/`: data-driven feature hero and native-scroll event rail.
- `components/sections/`: reusable cinematic `ScrollPanel` foundation.
- `data/events.ts`: event data model and published list.
- `data/navigation.ts`: authoritative internal navigation links.
- `public/images/`: supplied association marks plus generated tournament artwork.

## Current implementation
- Responsive sticky header, desktop mega menus and mobile off-canvas accordion navigation.
- Featured event hero, responsive event carousel, real event detail routes and editorial content routes.
- Footer with functioning internal links, accessible controls and reduced-motion behavior.

## Pending / limitations
- Official event registrations, formal policy content, verified contact channels and full long-form association material need approved source content.
- GitHub Pages must remain configured to use GitHub Actions. The workflow publishes `out/` after each push to `main`.

## Latest task summary
GitHub Pages deployment workflow added; static export and Pages deployment are now required after each push.
