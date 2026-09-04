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
