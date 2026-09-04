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
- `--ink: #101714`, `--paper: #f4f2ec`, `--lime: #d6f046`, dark panels `#111a16`.
- Body text stays at 16px or larger; labels are 12px or larger.

## Navigation
- Light sticky header with association mark, desktop hover/click mega menus and a right-side mobile drawer.
- The supplied association mark appears in the global header and footer, which wrap every site route.
- Real routes only. Header and footer contain no hash links.

## Motion and responsive behaviour
- Native page scroll. Panels use view-timeline image drift around -3% to +3% and text rise/fade.
- Hero image enters from 1.05 scale to 1.025 and copy rises 28px.
- All decorative movement switches off under `prefers-reduced-motion`.
- The event rail uses native horizontal scrolling with `scroll-snap-type: proximity`. On desktop, the artwork row is directly mouse-draggable: `grab` becomes `grabbing` while held, a 6px threshold protects normal event links, and pointer capture keeps a drag stable outside the rail. On mobile/tablet, native swipe and momentum remain available while vertical page scrolling is preserved. Edge arrows remain as supplementary controls, and mobile retains compact swipe prompts.
