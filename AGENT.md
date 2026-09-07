# Production deployment memory

See `AGENTS.md` for existing project instructions and `HOSTINGER-DEPLOY.md` for the reproducible deployment workflow.

Future Hostinger releases must use `pnpm build:hostinger`, with all runtime files inside `public_html` and a runtime-only `public_html.zip`. Preserve organized image directories, original editing assets, design, functionality and legitimate English/Thai wording. English remains the fresh-session default; use valid UTF-8 and keep Thai glyph support and language switching.

Generate genuinely encoded WebP/AVIF raster assets before production, preserve transparency and visual quality, use sensible responsive dimensions without upscaling, and strip unnecessary metadata. Keep JS/CSS minified, use self-hosted WOFF2, preserve useful lazy loading and hero priority, exclude source maps and development junk, and keep the ZIP lightweight.

Verify domain-root paths, Linux filename case, exported route refreshes, 404 handling, no white pages, no missing assets, no local absolute paths or exposed secrets. Keep the Hostinger static export independent from the GitHub Pages subfolder build. Verify the actual production output and ZIP, and distinguish local verification from live Hostinger TLS/server checks.
