# Thailand Airsoft Association project memory

Documentation status: refreshed 2026-09-12 after the bilingual referee/member release and live deployment package rebuild.

## Purpose
Official local-first website for the Thailand Airsoft Association: standards, safety, events, association information and sport tourism.

## Working system
- GitHub repository: `https://github.com/Cynicalfocus123/airsoft-assocation-site`
- Branch: `main`
- Canonical Git folder: `D:\mstar companies\Mstar Airsoft Association\airsoft-assocation-site-git`
- Local live mirror: `D:\mstar companies\Mstar Airsoft Association\airsoft-assocation-site-live`
- “Live” means the latest synchronized local source mirror. The public GitHub Pages deployment is a separate published build and must also be current.
- Synchronise after validated changes with `powershell -ExecutionPolicy Bypass -File scripts\sync-live.ps1` from the Git folder. It mirrors source and excludes `.git`, `node_modules`, `.next`, caches and coverage.
- **Hard completion rule:** every local build, source edit, asset addition, documentation edit, configuration change or other workspace change must be followed in the same task by validation, synchronization to the local live mirror, a Git commit, a push to `main`, completion of the matching GitHub Pages workflow, and verification of the published site. A change is not complete while it exists only locally, only in the live mirror, only in Git history, or only in an unfinished deployment.
- Do not end a change task after a successful local build. Continue through `scripts/sync-live.ps1`, `git commit`, `git push`, GitHub Pages success and published-site verification unless the user explicitly tells you to stop before publication.
- Before reporting completion, confirm the canonical Git working tree is clean and the deployed workflow head SHA matches the commit just pushed.
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
- Client code covers navigation, carousel state and the small section-scroll controller. The controller writes CSS variables through requestAnimationFrame without React state or per-frame rerenders. No animation packages.
- Prefer compact repository inspection (`git status --short`, `git diff --stat`, targeted `rg`) and capped command output.

## Architecture
- `app/`: homepage, event index/detail routes, catch-all editorial route shells.
- `components/layout/`: sticky desktop/mega/mobile navigation with matching header and footer association marks.
- `components/events/`: data-driven feature hero and native-scroll event rail.
- `components/sections/`: reusable `CinematicSection` foundation for scroll-scrubbed homepage storytelling.
- `data/events.ts`: event data model and published list.
- `data/navigation.ts`: authoritative internal navigation links.
- `public/images/`: supplied association marks plus generated tournament artwork.

## Current implementation
- Responsive sticky header, desktop mega menus and mobile off-canvas accordion navigation.
- Featured event hero, responsive event carousel, real event detail routes and editorial content routes.
- The Upcoming Events calendar uses `calendarEvents`: Force of Conquest is the first listed event, followed by two non-clickable TBA entries. Thailand National Airsoft 2026 remains exclusive to the homepage featured hero and is excluded from the calendar.
- `/contact` is the canonical Contact Us route. It directs general inquiries, complaints, partnerships, sponsorships, and other requests to `info@thaiairsoft.org`; header, footer Contact, and footer Complaint links resolve to `/contact`.
- Footer with functioning internal links, accessible controls and reduced-motion behavior.
- Supplied association logo appears in header and actual footer. Header logo is 40% smaller than footer: 7.2rem above 480px, 5.1rem at or below 480px. Footer stays 12rem / 8.5rem. No visible association-name text.
- “PLAY WITH PURPOSE” is a separate banner above the footer and must contain no logo. The logo belongs below the divider in the actual footer with navigation links; it is static and must not share the banner animation.
- Association logo scale is prominent in the shared footer (192px desktop and 136px mobile).
- Footer copyright reads “© 2026 Thailand Airsoft and Paintball Association”; omit the footer Thai/English text.
- Mobile/tablet navigation is a viewport-fixed right-side drawer from the top of the screen, `min(76vw, 460px)` wide with at least 72px of the dimmed page visible on the left. The drawer scrolls independently and slides horizontally. No backdrop-filter/transform on its header ancestor: those trap fixed positioning. Escape, backdrop, close button and links close it; desktop resize releases the page scroll lock.
- Sport Tourism uses photo-1730233024781-27672ab1674e.avif on all devices; Play with Purpose uses michal-franczak-1ZElf0bUFWc-unsplash.jpg as a clipped background layer. Preserve section dimensions, bleed, spacing and typography.
- In the homepage mission section, the literal words “OUR MISSION” are the large h2 (40–64px). “Building the future of airsoft & paintball in Thailand.” is a medium supporting paragraph (20–28px), with normal tracking and natural wrapping; it must never become the oversized heading again. Supporting body copy is 16px. Preserve this hierarchy when changing motion or reusing the component.
- Homepage editorial composition alternates left → right → left → right. The Our Mission content aligns right; Establish National Standards aligns left; Sport Tourism aligns right. Preserve this sequence when editing or extending the homepage.
- Every editorial page follows the same hierarchy: its concise page title uses the shared 40–64px `--editorial-title-size`; a longer mission statement or supporting headline uses the shared 20–28px `--editorial-lead-size`; body copy remains 16px or smaller. Never promote a long sentence into a display heading. Do not place decorative horizontal rules above or between editorial text, closing statements or related-page links; use whitespace instead. Apply these shared tokens to all future pages.
- Homepage cinematic layers use `useCinematicScroll`: IntersectionObserver activates nearby sections, passive scroll events schedule at most one requestAnimationFrame, and the untransformed section rectangle determines CSS variables. Media and text move independently and reverse on the next frame when scrolling upward. Motion profiles are desktop ≥1200px (media 56px/text 34px, preserved), tablet 768–1199px (media 64px/text 38px), and mobile ≤767px (media 48px/text 28px). Tablet/mobile opacity stays at or above .945. Motion remains reversible, scrubbed and native-scroll-driven; never intercept touch, wheel or page scrolling. Respect live reduced-motion changes; clean up listeners, observers and pending frames. The Play with Purpose banner shares this hook. Never alter text, sizes, spacing, banner heights, colors, focal points or alignment as part of a motion fix.
- Event rail uses reusable `components/hooks/useDragScroll.ts`: desktop mouse drag with grab/grabbing cursor states, six-pixel click protection and pointer capture; `touch-action: auto` for browser-native mobile/tablet swipe; edge arrows; and keyboard arrows. Keep its native scrolling accessible, hide its visual scrollbar on every device, and keep mobile/tablet swiping without showing the removed visual `SWIPE` prompt buttons.
- Keep the homepage main slider on the original Thailand National Airsoft 2026 content and forest artwork. Force of Conquest is the first card in the separate Upcoming Events rail only; its supplied artwork, open-registration label, location, EUR 120 presale entry fee and 2,000-player attendance are data-driven across the card and event detail route. Its card alone uses the stronger dark overlay for text legibility.
- The homepage featured-event slider uses the same native horizontal scroll-snap, touch swipe, mouse drag and keyboard-arrow pattern as the event rail. Keep the current Thailand National Airsoft 2026 content as its sole slide until additional events are explicitly marked featured. Its registration and details affordances are clean inline text, without bordered button treatments.
- Our Mission uses the supplied `our-mission-airsoft.avif` background with the same shared responsive cinematic motion as the other homepage image sections. Establish National Standards uses the supplied `national-standards-training.jpg` background.
- `LanguageProvider` is a root-level service for the entire site: its English-default TH/EN choice persists in `taa-language`, restores after refresh and route navigation, updates `html[lang]`, and is available to every current and future page through `useLanguage`. Header, mobile navigation, footer and approved editorial/service/information pages use shared bilingual data. The language setting never changes routes. Thai navigation and body copy use Noto Sans Thai with real UTF-8 labels; content without approved translations remains English.
- The Become Our Referee and Become Our Member routes use `components/information/InformationPageContent.tsx` and `data/information-pages.ts`. They render the supplied English and Thai qualifications, membership levels, incentives, rewards, comparison table and closing copy with responsive editorial typography.

## Pending / limitations
- Official event registrations, formal policy content and any additional verified contact channels still need approved source content. Existing supplied association, service, referee and member copy must be preserved.
- GitHub Pages must remain configured to use GitHub Actions. The workflow publishes `out/` after each push to `main`.

## Latest task summary
Added bilingual long-form Become Our Referee and Become Our Member pages, including responsive sections, qualification lists, membership tiers, incentives, loyalty/referral rewards and comparison tables. The pages share the persistent English-default TH/EN service and preserve route URLs.

## Hostinger production releases
- The authoritative delivery is built and zipped inside `airsoft-assocation-site-live` only. Keep live and Git source synchronized, but exclude `out`, `public_html` and `public_html.zip` from Git-to-live synchronization. Never add Git-side output, source, documentation or metadata to the live ZIP; package only the live folder's `public_html` runtime contents.
- Synchronize every latest code change, original asset, data file and configuration into live before building. `verify-live-sync.mjs` must pass byte-for-byte source parity before build/ZIP creation; a stale or incomplete live source blocks packaging.
- Use `pnpm build:hostinger` for the domain-root static export in `public_html/` and runtime-only `public_html.zip`; keep the separate GitHub Pages base path for `pnpm build`.
- Follow `HOSTINGER-DEPLOY.md`, `AGENT.md` and `DESIGNER.md`. Preserve existing layout, functionality and all supplied English/Thai text, including the approved association, service, referee and member translations. English remains the clean-session default.
- Source image references now use extensionless logical identifiers through `imageSrc`; generated WebP/AVIF assets and responsive variants live in `public/images/optimized`. Original images remain untouched for editing. This supersedes old implementation notes that name JPG/PNG as runtime files.
- Keep production raster images genuinely encoded AVIF/WebP, correctly sized, metadata-stripped, visually clean and logically organized. Retain transparency and Thai-capable WOFF2 fonts.
- All live runtime files must be inside `public_html`. Keep production minification/tree shaking, lazy loading, critical-image priority, safe caching/compression, and a small ZIP without source maps, unused assets or development files.
- Audit Linux filename case, correct root URLs, UTF-8, EN/TH switching, static-route refresh/404 handling, blank pages, missing assets, local paths and exposed secrets. Never replace unknown routes or missing assets with homepage HTML. The current package audit reports 337 files, 4,966,659 bytes in `public_html`, 1,502,386 optimized image bytes and zero errors.
- ZIP entries extract directly into Hostinger's existing `public_html`, without another nested `public_html`. Verify the actual folder and ZIP; distinguish browser/static verification from live Hostinger TLS/Cloudflare checks.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
