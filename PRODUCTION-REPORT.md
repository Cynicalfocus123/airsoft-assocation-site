# Final Hostinger production report

Verified 2026-09-12. This report concerns the generated Hostinger folder and ZIP, plus the matching GitHub Pages workflow; it is not a claim that the ZIP has been uploaded to a Hostinger account.

## Framework and deployment

| Check | Result |
| --- | --- |
| Framework | Next.js 16.3.4, React 19, TypeScript |
| Build system | Turbopack production static export |
| Routing | App Router; 55 content routes with directory index HTML |
| Production build completed | YES |
| Deployment folder | `airsoft-assocation-site-live/public_html` |
| Deployment ZIP | `airsoft-assocation-site-live/public_html.zip`; packaged only from live `public_html` |
| Folder size | 4,966,659 bytes |
| ZIP size | 2,530,123 bytes |
| Production files | 337 |
| ZIP layout | Files directly at root; extract inside Hostinger `public_html` |
| ZIP integrity | CRC, entry path and runtime-folder checks passed |
| ZIP SHA-256 | `990D45A8D92F77EEC566735EA0CBF2209C1BC22593CDDBC207DFF67EAB228933` |

## Site and language verification

| Check | Result |
| --- | --- |
| Homepage / CSS / JS / fonts | YES |
| Content routes | YES, 55 |
| Referee and member information pages | YES, full approved English/Thai sections |
| Direct URL / refresh | YES, static export |
| 404 handling | YES; unknown routes and missing assets return 404 |
| Desktop dropdown and mobile menu | PASS |
| English default / Thai UTF-8 | YES / YES |
| EN → TH / TH → EN | YES / YES |
| Language persistence after refresh | YES |
| Mobile/tablet event swipe | Native swipe remains available; visual swipe prompt buttons hidden |
| Corrupted visible strings | 0 |
| Missing translation/undefined/null output | 0 |
| Published GitHub Pages workflow | PASS for commit `a2a779e1afeec15af3a71d77fd035904298d1d99` |
| Published route smoke checks | PASS; root, referee and member pages returned 200 |
| Actual Hostinger TLS/modules/Cloudflare | NOT TESTED; requires final upload and domain checks |

## Images and performance

| Check | Result |
| --- | --- |
| AVIF / WebP | 14 / 1 |
| Total image bytes before | 9,031,642 |
| Total image bytes after | 1,502,386 |
| Image reduction | 83.4% |
| Oversized files above 500 KB | 0 |
| CSS/JS minification and tree shaking | YES |
| Source maps and development files in ZIP | NO |
| Self-hosted Thai WOFF2 coverage | YES |

Source images remain intact outside the deployment folder. Runtime raster files are encoded AVIF/WebP with stripped metadata, responsive variants and no upscaling. The custom loader points to prebuilt static assets; no `/_next/image` endpoint is required.

## Validation and source parity

The live source passed `node scripts/verify-live-sync.mjs` with 144 code, asset, data and configuration files matching the canonical Git folder byte for byte. The production audit reports zero errors across UTF-8, references, route files, case-sensitive imports, image formats, local paths and secrets. The content/language regression suite has 31 passing checks; lint, TypeScript and production builds also pass.

The archive extracts directly into Hostinger's existing `public_html` and contains no nested `public_html` directory. Follow `HOSTINGER-DEPLOY.md` for backup, extraction, SSL, cache and final-domain checks.
