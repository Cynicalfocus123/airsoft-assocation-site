# Final Hostinger production report

Verified 2026-09-08. This report concerns the generated Hostinger folder and ZIP, not an upload to a Hostinger account.

## Framework and deployment

| Check | Result |
| --- | --- |
| Framework | Next.js 16.3.4, React 19, TypeScript |
| Build system | Turbopack production static export |
| Routing | App Router; 52 content routes with directory index HTML |
| Production build completed | YES |
| Deployment folder | airsoft-assocation-site-live/public_html |
| Deployment ZIP | airsoft-assocation-site-live/public_html.zip; packaged only from live public_html |
| Folder size | 4.66 MB (4,657,996 bytes) |
| ZIP size | 2.45 MB (2,453,956 bytes) |
| Production files | 315 |
| ZIP layout | Files directly at root; extract inside Hostinger public_html |
| ZIP integrity | Independent ZIP reader: CRCs and byte equality passed |
| SHA-256 | 3a7f4fbe54aea580ce5108c18e15ab0be5eccb826124c3d20b2aa62298bcc763 |

## Site and language verification

| Check | Result |
| --- | --- |
| Homepage / CSS / JS / fonts | YES |
| Internal routes | YES, 52 |
| Direct URL / refresh | YES, static-server browser verification |
| 404 handling | YES, unknown route and missing asset return 404; no SPA blanket fallback |
| White-page check | PASS |
| Desktop dropdown and mobile menu | PASS |
| English default / Thai UTF-8 | YES / YES |
| EN → TH / TH → EN | YES / YES |
| Language persistence after refresh | YES |
| Corrupted visible strings | 0 |
| Missing translation/undefined/null output | 0 |
| Mobile layout / logo transparency | PASS |
| HTTPS-safe asset references | YES |
| Cloudflare-safe redirect configuration | YES, no added HTTPS redirects |
| Actual Hostinger TLS/modules/Cloudflare | NOT TESTED; requires final upload and domain checks |

## Images

| Check | Result |
| --- | --- |
| Decoding and image references | VERIFIED |
| AVIF / WebP | 14 / 1 |
| JPG/JPEG / PNG / GIF / BMP/TIFF | 0 / 0 / 0 / 0 |
| Missing images / broken image references | 0 / 0 |
| Duplicate unused content images removed | 0 duplicate originals; 8 original production copies replaced |
| Unused starter SVG assets excluded | 5 |
| Total before | 9.03 MB (9,031,642 bytes) |
| Total after, including responsive variants | 1.50 MB (1,502,386 bytes) |
| Reduction | 83.4% |
| Oversized files above 500 KB | 0 |

The original development images are retained unchanged. AVIF/WebP outputs are genuinely encoded and decoded during audit; metadata is stripped and aspect ratios are preserved. Two framework-generated ICO compatibility favicon files remain because generated metadata references them. No ordinary content raster uses a legacy format.

## Performance

CSS minified: YES. JavaScript minified: YES. Production tree shaking/code splitting: YES. Source maps excluded: YES. Noncritical lazy loading retained: YES. Critical hero priority and responsive optimization: YES. Fonts optimized: YES, three self-hosted WOFF2 subsets totaling 73,600 bytes with Thai/Latin coverage; English uses system fonts. Browser caching configured: YES. Safe server compression configured: YES, conditional gzip for text resources. No additional frontend library was introduced.

## Paths and errors

| Check | Result |
| --- | --- |
| Application localhost references | 0 |
| Raw framework localhost token | 1, URL-parser comparison only |
| 127.0.0.1 production references | 0 |
| C:\ / D:\ production references | 0 / 0 |
| Case-sensitive filename problems | 0, including source imports |
| Missing static assets | 0 |
| Critical build errors | 0 |
| Critical browser/runtime errors | 0 |
| Browser failed resource requests | 0 |
| Broken internal links | 0 found |
| Insecure HTTP application resource URLs | 0 |
| Redirect loops in tested routing | 0 |
| Runtime secrets/environment files | 0 |

The stock Next URL polyfill includes Unicode replacement sentinels for invalid input; Turbopack includes an inert file:///ROOT/ source-URL helper. These are not damaged content or local runtime dependencies and were not patched. Browser-visible text and real asset requests pass. The Windows export's 52 navigation-data filename mismatches were normalized to the dotted names Next requests; the completed browser run contains zero resulting 404s.

Lint, TypeScript and all 38 existing navigation/language/motion regression tests passed. Desktop/mobile screenshots were compared with the previous export without changing the layout. Detailed local evidence is in reports/production-audit.json and reports/browser-verification.json; screenshots and tooling are excluded from the deployment ZIP.

## Documentation and directory structure

.htaccess created: YES. HOSTINGER-DEPLOY.md created: YES. AGENT.md created: YES. Existing AGENTS.md updated: YES. DESIGNER.md created: YES. Original design documentation preserved: YES.

```text
public_html/
  .htaccess
  index.html
  index.txt
  __next.*.txt
  404.html
  favicon.ico
  _next/static/
    chunks/          minified JS/CSS
    media/           local WOFF2 and metadata favicon
    [build-id]/      framework manifests
  images/optimized/  14 AVIF + 1 WebP
  association/       about, background, leadership, why-created
  events/            index and four event routes
  rules-safety/      index and 12 detail routes
  sport-tourism/     index and four detail routes
  what-we-do/        index and programme routes
  our-mission/
  play-with-purpose/
  contact/
  become-a-member/
  become-a-referee/
  complaint/
  privacy-policy/
  terms-of-use/
  404/ and _not-found/  framework error documents
```

Route directories contain their HTML and required Next navigation text payloads. Follow HOSTINGER-DEPLOY.md for exact upload/extraction and live-domain checks.
