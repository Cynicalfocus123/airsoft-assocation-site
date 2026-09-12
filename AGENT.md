# Production deployment memory

This documentation was refreshed on 2026-09-12 after the bilingual referee and member information pages were added and the live deployment package was rebuilt.

See `AGENTS.md` for existing project instructions and `HOSTINGER-DEPLOY.md` for the reproducible deployment workflow.

The final package is built from `airsoft-assocation-site-live/public_html` only, into that live folder's `public_html.zip`. Keep Git and live source current while excluding deployment output from source synchronization. Never add files from Git-side deployment folders into the live ZIP.

Future Hostinger releases must use `pnpm build:hostinger`, with all runtime files inside `public_html` and a runtime-only `public_html.zip`. Preserve organized image directories, original editing assets, design, functionality and legitimate English/Thai wording. English remains the fresh-session default; use valid UTF-8 and keep Thai glyph support and language switching. The current release contains 55 content routes, 337 runtime files and a 2,530,123-byte ZIP (12 September 2026).

Generate genuinely encoded WebP/AVIF raster assets before production, preserve transparency and visual quality, use sensible responsive dimensions without upscaling, and strip unnecessary metadata. Keep JS/CSS minified, use self-hosted WOFF2, preserve useful lazy loading and hero priority, exclude source maps and development junk, and keep the ZIP lightweight.

Verify domain-root paths, Linux filename case, exported route refreshes, 404 handling, no white pages, no missing assets, no local absolute paths or exposed secrets. Keep the Hostinger static export independent from the GitHub Pages subfolder build. Verify the actual production output and ZIP, and distinguish local verification from live Hostinger TLS/server checks.

## Navigation and services architecture

The primary navigation is defined once in `data/navigation.ts` and drives the desktop dropdowns, mobile accordions and footer groups. Keep this order for the top-level navigation: `OUR MISSION`, `SERVICES`, then `UPCOMING EVENTS`.

`SERVICES` is a bilingual child-navigation group with this stable order and routes:

```
SERVICES
├── Field Design & Engineering -> /services/field-design-engineering
├── Business Consultant       -> /services/business-consultant
├── Marketing                 -> /services/marketing
├── Permit Approval           -> /services/permit-approval
└── Training                 -> /services/training
```

Navigation labels must provide both English and Thai values, with English as the fresh-session default. The shared navigation data must remain the source of truth so the Services group appears consistently in desktop navigation, mobile navigation and the footer.

The Field Design & Engineering, Business Consultant, Marketing, Permit Approval, and Training routes are approved full bilingual service pages and must retain their supplied English/Thai copy. Each page must preserve its English/Thai rendering through the shared language switcher; Permit Approval must preserve its legal limitation that final approvals remain subject to relevant authorities and applicable laws. The About Association, Why We Were Created, Association Background, Become Our Referee, and Become Our Member pages now also use approved bilingual long-form content through the same language service. Do not invent claims or use filler text.
