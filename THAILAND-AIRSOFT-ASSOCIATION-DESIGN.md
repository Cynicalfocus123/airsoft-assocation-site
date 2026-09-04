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
- Real routes only. Header and footer contain no hash links.

## Motion and responsive behaviour
- Native page scroll. Panels use view-timeline image drift around -3% to +3% and text rise/fade.
- Hero image enters from 1.05 scale to 1.025 and copy rises 28px.
- All decorative movement switches off under `prefers-reduced-motion`.
- The event rail works on every device through native touch swipe, direct pointer drag, keyboard left/right arrows and an available scrollbar. On desktop, edge arrows and the central circular `DRAG ↔` handle appear only when the rail is hovered; the rail itself is mouse-draggable. On mobile, compact `SWIPE ←` and `→ SWIPE` prompts remain visible at the card edges. Desktop exposes neighboring artwork; mobile retains a dominant 84vw event frame.
