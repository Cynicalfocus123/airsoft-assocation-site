# Thailand Airsoft Association

Current release documentation: 2026-09-12.

Local source website for the Thailand Airsoft Association.

## Commands

- `pnpm lint`
- `pnpm exec tsc --noEmit`
- `pnpm build`
- `pnpm build:hostinger` (run from the synchronized live folder for the deployment ZIP)
- `powershell -ExecutionPolicy Bypass -File scripts\sync-live.ps1`
- `node --test scripts/language-toggle.test.cjs scripts/cinematic-scroll.test.cjs scripts/featured-slider.test.cjs`

The `airsoft-assocation-site-live` folder is a synchronized local source mirror. A GitHub Actions workflow deploys the current static build to GitHub Pages after each push to `main`.

The site has 55 content routes. Approved bilingual content is shared by the navigation, footer, service pages, association pages, and the Become Our Referee and Become Our Member information pages. English is the clean-session default; the TH/EN choice persists locally without locale-prefixed routes.

Every build or change must complete the full delivery cycle in the same task: validate, synchronize the live mirror, commit, push to `main`, wait for the matching Pages workflow, and verify the published site. Local-only work is unfinished unless the user explicitly stops publication.

## Deployment / Git demo

[GitHub source](https://github.com/Cynicalfocus123/airsoft-assocation-site)

[Published GitHub Pages site](https://cynicalfocus123.github.io/airsoft-assocation-site/)

The published site is deployed automatically from `main` through GitHub Actions.

For Hostinger, the current runtime package is `airsoft-assocation-site-live/public_html.zip`. It contains 337 runtime files at the archive root and is rebuilt only after `node scripts/verify-live-sync.mjs` passes. Upload and extraction instructions are in `HOSTINGER-DEPLOY.md`.

## Homepage motion

The reusable `CinematicSection` uses `useCinematicScroll` to measure section viewport progress and write CSS variables through requestAnimationFrame. IntersectionObserver limits work to nearby sections. Scroll reversal updates both layers immediately on the next frame; reduced motion keeps content static. No animation packages or full-page snapping. Run `node --test scripts/cinematic-scroll.test.cjs` to check progress, reversal, breakpoints, reduced motion and cleanup.
