# Production visual preservation

The established design reference remains `THAILAND-AIRSOFT-ASSOCIATION-DESIGN.md`; this file supplements it.

Deployment work must not redesign or change layout, typography, image composition, animation, routes, working controls or legitimate English/Thai wording. Preserve English as the default and valid Thai UTF-8/glyph coverage. Compare desktop/mobile screenshots against the previous build.

Keep source images intact. Generate production AVIF/WebP in organized directories, using sensible dimensions, restrained responsive variants, metadata removal and quality that retains clear artwork and transparent logos. Do not upscale, warp, blur or noticeably degrade images for ZIP savings. Keep minified production CSS/JS, local WOFF2 fonts, lazy loading and critical-image priority without altering the experience.

All Hostinger runtime assets belong inside `public_html`; `public_html.zip` contains runtime files only. Preserve static-route refreshes, root paths, case-sensitive filenames, HTTPS-safe URLs and error handling. Prevent blank pages, broken assets, corrupted Thai, local paths, secrets and source maps. Follow `HOSTINGER-DEPLOY.md` and `AGENT.md` for future release audits.
