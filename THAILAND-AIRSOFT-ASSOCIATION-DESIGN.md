# Thailand Airsoft Association design system

## Visual thesis
An open, cinematic sports editorial: charcoal forest shadows, warm light, sharp high-contrast typography and a lime safety accent. The interface lets photography and oversized type carry the hierarchy.

## Permanent rules
- No generic AI card grids, glass panels, soft rounded containers or decorative dashboard boxes.
- Use full-bleed art, editorial columns, thin dividers, deliberate negative space and image/text overlap.
- Square or near-square actions only; no pill CTAs.
- Event metadata is overlaid on event artwork.

## Type and colour
- Uppercase, heavy, tightly tracked display type; neutral readable body type.
- Mission hierarchy: the literal heading “OUR MISSION” is large (40–64px); the sentence “Building the future of airsoft & paintball in Thailand.” beneath it is medium (20–28px), sentence case, normal tracking and natural wrapping. Body copy stays at 16px. Do not use the supporting sentence as a giant display heading. This rule also applies when adding cinematic motion.
- `--ink: #101714`, `--paper: #f4f2ec`, `--lime: #d6f046`, dark panels `#111a16`.
- Body text stays at 16px or larger; labels are 12px or larger.

## Navigation
- Light sticky header with the association mark, desktop hover/click mega menus and a right-side mobile drawer; no association-name text.
- Header mark is 40% smaller than the footer: 7.2rem desktop/tablet and 5.1rem at or below 480px; footer remains 12rem / 8.5rem.
- The “PLAY WITH PURPOSE” banner is a separate section above the footer and has no logo. Place the static logo below the divider alongside footer navigation, outside the animated banner content.
- Sport Tourism displays the title without the “THAILAND, IN PLAY” eyebrow; preserve the rest of that banner unchanged.
- The association mark is prominent at 192px desktop and 136px mobile in the footer.
- Tablet and mobile navigation opens below the header as a dark right-side drawer, `min(78vw, 460px)` wide, leaving the dimmed page visible at the left. It has its own vertical scrolling, a horizontal slide transition, a clear close action and nested route accordions. Keep fixed-position ancestors free of backdrop-filter and transforms.
- Real routes only. Header and footer contain no hash links.

## Motion and responsive behaviour
- Native page scroll. The section-based `useCinematicScroll` controller drives media and foreground CSS transforms with IntersectionObserver and requestAnimationFrame. At default strength, media travels -56px to +56px and text +34px to -34px on desktop/tablet; up to 700px wide, media travels -28px to +28px and text +18px to -18px. The overlay stays stationary. Text opacity stays between .92 and 1. Motion reverses with viewport progress; no one-time states, animation packages or per-frame React rerenders. Existing overscan clips the image edges. Keep all existing banner typography, dimensions, spacing, colors, focal points and content unchanged during motion fixes.
- Hero image enters from 1.05 scale to 1.025 and copy rises 28px.
- All decorative movement switches off under `prefers-reduced-motion`.
- The event rail uses native horizontal scrolling with `scroll-snap-type: proximity`. On desktop, the artwork row is directly mouse-draggable: `grab` becomes `grabbing` while held, a 6px threshold protects normal event links, and pointer capture keeps a drag stable outside the rail. On mobile/tablet, `touch-action: auto` preserves browser-native horizontal swipe, momentum and vertical page scrolling. Edge arrows remain as supplementary controls, and mobile retains compact swipe prompts.
