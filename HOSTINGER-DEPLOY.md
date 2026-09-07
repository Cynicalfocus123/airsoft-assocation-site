# Hostinger deployment

This is Next.js 16.3.4 / React 19 with App Router, TypeScript and Turbopack. It uses **static export**, not a Node server or a single-page fallback. All 52 content routes have real `index.html` files. Existing English/Thai content, layout, links and motion remain intact.

## Build and files

With Node 24 and the project's pinned pnpm installed:

```sh
pnpm install --frozen-lockfile
pnpm build:hostinger
pnpm lint
pnpm exec tsc --noEmit
node --test scripts/language-toggle.test.cjs scripts/cinematic-scroll.test.cjs scripts/featured-slider.test.cjs
```

The command optimizes original images, runs the Next production export with an empty root base path, assembles and audits `public_html/`, then creates `public_html.zip`. Both artifacts are in this repository beside this document. The original images and development files are retained outside deployment. `out/` is an intermediate, not the upload artifact. Generated images, manifest, reports and deployment files are excluded from Git; rebuild them from the committed source.

`pnpm build` continues to create the GitHub Pages build at `/airsoft-assocation-site`. Do not upload that `out/` to Hostinger. `NEXT_PUBLIC_BASE_PATH` is the only build environment setting; the Hostinger command supplies an empty value. No runtime environment variables, database, API keys, credentials, PHP or Node service are required. Existing unconfirmed programme/registration content stays as supplied; no forms or backend services were invented.

## Exact upload steps

1. In Hostinger File Manager, open the correct domain's existing `public_html` directory.
2. Back up the current live contents before replacing them. Remove obsolete files from the old release after backing up so stale files cannot shadow new routes.
3. Upload **public_html.zip into that directory** and extract it there. The ZIP contains `index.html`, `.htaccess`, `_next/`, `images/` and route directories directly at its root. It does **not** contain another `public_html` directory. Do not extract it into a second nested directory.
4. Confirm that the domain document root now contains `index.html` and `.htaccess` directly, then delete the uploaded ZIP from the server.
5. Enable the domain's SSL certificate through Hostinger. If Cloudflare is used, configure Full (strict) with a valid origin certificate. The supplied `.htaccess` adds no forced-HTTPS rules, so it does not introduce proxy redirect loops. Avoid a Cloudflare rule that caches HTML/RSC text indefinitely; purge existing caches for the release.
6. Open the domain over HTTPS, then `/association/about/`, `/contact/`, `/events/` and `/rules-safety/playing-rules/` directly and refresh. Test EN → TH → EN, desktop dropdowns and the mobile menu. Unknown routes and missing files should return 404.

## Routing, encoding and HTTP behavior

- `.htaccess` is included and should be honored by Hostinger's Apache-compatible hosting. It disables directory listings and MultiViews, sets `DirectoryIndex index.html`, and serves the generated `/404.html` for unknown paths. Apache's normal directory handling adds the trailing slash. There is no blanket rewrite to the homepage and no server image endpoint.
- Keep the generated `index.txt` and `__next.*` files: Next uses them for client navigation. They are runtime data, not development junk.
- The build normalizes a Windows-specific Next 16 export filename issue: nested segment files become the dotted `__next.*.txt` names requested by the browser. This is idempotent on Linux and prevents navigation/prefetch 404s. Do not bypass the packaging/postbuild steps.
- HTML declares UTF-8. Apache also supplies UTF-8 for text resources. English is the clean-session default; the user's choice persists in `taa-language`, including after refresh and navigation. Existing Thai body translations and navigation are preserved. Untranslated content stays English.
- CSS/JS/WOFF2 are fingerprinted and receive one-year immutable caching. HTML and route text/JSON revalidate. Image filenames are stable and receive one-day caching with revalidation; purge image caches if replacing a release immediately.
- Gzip is enabled for text MIME types only when `mod_deflate` exists. Header directives are guarded by `mod_headers`. AVIF/WebP/WOFF2 MIME types are explicit. Already compressed images are not gzip-compressed.
- All required website assets and fonts are local to `public_html`. The existing Mstar event link remains an external HTTPS link.

## Optimization

Eight original raster assets become 14 AVIF files and one lossless WebP logo, with at most two responsive widths per large image. Photos use quality-64 AVIF (4:4:4) when materially smaller than quality-88 WebP. No image is upscaled; the large footer photo is capped at 2048px, and the transparent logo is 384px for its 192px display. Metadata is stripped during conversion. Original editing files remain untouched.

The custom Next image loader selects **prebuilt static files** for `srcset`; it never depends on `/_next/image`. Original image names are represented by extensionless logical identifiers in source. Add originals to `public/images`, rebuild, and use `imageSrc('/images/name-without-extension')`. The hero retains priority loading; noncritical images retain Next's lazy loading. Image folders remain organized under `images/optimized/`.

Next minifies and splits production JS/CSS and applies tree shaking. There are no added frontend libraries, no debug logs in application code and no production source maps. Noto Sans Thai is self-hosted in three WOFF2 Unicode subsets (Thai and Latin coverage, about 74 KB combined), with swap rendering and shared files across the existing weights. English retains its system-font stack. No file exceeds 500 KB.

## Verification and limits

`reports/production-audit.json` records route/file/format/UTF-8/reference/size checks. `scripts/verify-browser.mjs` tests the actual deployment in Chromium via a temporary static test server, including all content routes, refreshes, image decoding, English/Thai and desktop/mobile navigation. Set `PLAYWRIGHT_MODULE` and `BROWSER_EXECUTABLE` if using externally installed Playwright/Chromium. Test tooling and screenshots are excluded from the ZIP. An independent ZIP reader verified CRCs, entry paths and byte-for-byte equality with the production folder.

The browser checks emulate Apache directory routing. The actual Hostinger account, TLS certificate, enabled modules and Cloudflare settings are not accessible in this task, so the final live-origin checks in step 6 remain deployment checks, not claims of testing an unuploaded site.

An unmodified Next legacy URL polyfill contains the literal `localhost` and Unicode replacement sentinels; Turbopack contains an inert `file:///ROOT/` helper. These are framework internals, not local asset URLs or damaged translations. There are zero application localhost/IP/Windows-path dependencies. The two ICO favicon files are framework-generated compatibility assets referenced by metadata; ordinary raster content is entirely AVIF/WebP.
