# Thailand Airsoft Association

Local source website for the Thailand Airsoft Association.

## Commands

- `pnpm lint`
- `pnpm exec tsc --noEmit`
- `pnpm build`
- `powershell -ExecutionPolicy Bypass -File scripts\sync-live.ps1`

The `airsoft-assocation-site-live` folder is a synchronized local source mirror. A GitHub Actions workflow deploys the current static build to GitHub Pages after each push to `main`.

## Deployment / Git demo

[GitHub source](https://github.com/Cynicalfocus123/airsoft-assocation-site)

[Published GitHub Pages site](https://cynicalfocus123.github.io/airsoft-assocation-site/)

The published site is deployed automatically from `main` through GitHub Actions.

## Homepage motion

The reusable `CinematicSection` uses `useCinematicScroll` to measure section viewport progress and write CSS variables through requestAnimationFrame. IntersectionObserver limits work to nearby sections. Scroll reversal updates both layers immediately on the next frame; reduced motion keeps content static. No animation packages or full-page snapping. Run `node --test scripts/cinematic-scroll.test.cjs` to check progress, reversal, breakpoints, reduced motion and cleanup.
