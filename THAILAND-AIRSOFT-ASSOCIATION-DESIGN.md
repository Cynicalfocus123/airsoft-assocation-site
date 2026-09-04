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
- Mission is the single largest editorial statement. Event, programme, tourism and footer headings use a restrained medium display scale; labels, metadata, body copy and event-card titles stay markedly smaller to preserve a clear editorial hierarchy.
- `--ink: #101714`, `--paper: #f4f2ec`, `--lime: #d6f046`, dark panels `#111a16`.
- Body text stays at 16px or larger; labels are 12px or larger.

## Navigation
- Light sticky header without an association mark or association-name text, desktop hover/click mega menus and a right-side mobile drawer.
- The supplied association mark appears only in the global footer, which wraps every site route.
- The association mark is prominent at 192px desktop and 136px mobile in the footer.
- Tablet and mobile navigation opens as a dark right-side drawer with a dimmed backdrop, a 320ms ease-out transition, a clear close action and nested route accordions.
- Real routes only. Header and footer contain no hash links.

## Motion and responsive behaviour
- Native page scroll. Homepage cinematic sections use three independent layers—media, dark readability overlay and text—with CSS `animation-timeline: view()` scrubbed from the section entering to leaving the viewport. Media drifts around -4% to +4% while foreground text floats from +40px to -30px, and both directions reverse naturally when the user scrolls back. The footer identity follows the same scroll-linked editorial language.
- Hero image enters from 1.05 scale to 1.025 and copy rises 28px.
- All decorative movement switches off under `prefers-reduced-motion`.
- The event rail uses native horizontal scrolling with `scroll-snap-type: proximity`. On desktop, the artwork row is directly mouse-draggable: `grab` becomes `grabbing` while held, a 6px threshold protects normal event links, and pointer capture keeps a drag stable outside the rail. On mobile/tablet, `touch-action: auto` preserves browser-native horizontal swipe, momentum and vertical page scrolling. Edge arrows remain as supplementary controls, and mobile retains compact swipe prompts.
