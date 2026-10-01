# Rye & Rise design system

## Overview

Rye & Rise is a neighborhood bakery page for visitors choosing what to eat, when to arrive, and how to get there. The design is warm, editorial, and compact: a large serif welcome leads to a practical menu, then a dark visit panel gathers the address, hours, and phone number. The page uses generous open space between sections and quiet filled surfaces for menu items so the food remains the focus.

The shared rules are in `src/styles.css`; page composition and the menu data live in `src/App.tsx`.

## Colors

- `--cream: #f8f3e9` is the page background and `--paper: #fffcf5` is the menu-card and light-button surface.
- `--ink: #25241f` is primary text, the dark header call-to-action, and the visit panel background.
- `--muted: #6f6b60` is supporting text on cream and paper surfaces.
- `--line: #ded8ca` is the quiet divider and unselected filter border.
- `--saffron: #d98b3d` is the small accent dot, decorative star, and focus-ring source.
- `--saffron-dark: #9e5d22` is the readable accent for prices, eyebrows, and emphasized serif text.
- `--sage`, `--blue`, `--rose`, and `--cocoa` are the six menu-art background variants.

All tokens are defined at the top of `src/styles.css`. The browser review measured representative rendered pairs; see `artifacts/validation.md` for the ratios and limitations.

## Typography

The body uses `ui-sans-serif, system-ui, -apple-system, sans-serif` at a comfortable line-height. Headings and prices use `Georgia, 'Times New Roman', serif`, with `font-weight: 500` for `h1`/`h2` and `600` for menu titles. Eyebrows and labels are small uppercase sans text with `0.13em` tracking. The hero heading is fluid with `clamp(3.45rem, 7.2vw, 6.5rem)` and the section heading with `clamp(2.5rem, 5vw, 4.3rem)`; both use tight `0.91–0.98` line-heights. Supporting copy stays around `0.78–1rem` with a `1.55–1.7` line-height. Prices use tabular numerals.

No external font files are required. The first family in each stack is therefore the browser/system family shown above, with Georgia as the local serif fallback.

## Layout

The page uses one `1160px` content rail with `1.5rem` side margins on wider screens. The hero is a two-column grid, with the illustration on the trailing side and the copy on the leading side. The menu is a three-column grid with `1rem` gaps. The visit panel is a two-column grid inside a dark rounded surface.

At `max-width: 800px`, the hero and visit panel stack and the menu becomes two columns. Header links collapse to the call action. At `max-width: 500px`, the rail becomes `calc(100% - 2rem)`, the menu cards become compact two-column rows, the visit details stack, and footer content becomes a vertical flow. The 320px browser check had equal `scrollWidth` and `clientWidth`, with no horizontal overflow.

Sections and anchored headings use `scroll-margin-top`; reading order follows the DOM from hero to menu to visit. Decorative artwork is CSS-only and carries an accessible `role="img"` label for the hero illustration.

## Elevation & Depth

The page is mostly flat. Menu cards use `box-shadow: 0 1px 0 rgba(37, 36, 31, 0.05)` for a slight lift, while borders are reserved for the marquee, footer, filter states, and focus. The hero artwork uses layered CSS shapes and a soft loaf shadow. No overlay or z-index convention is needed beyond the artwork's isolated decorative layer.

## Shapes

The shared button radius is `0.65rem`; menu cards use `1.25rem`, the visit panel `1.5rem`, and filter pills use a `2rem` radius. The hero artwork has a deliberately organic `48% 48% 1.5rem 1.5rem / 39% 39% 1.5rem 1.5rem` top shape. Nested visual layers do not add independent clipping.

## Components

- **Header and wordmark** (`src/App.tsx`, `.site-header`, `.wordmark`): a text link to `#top`, primary navigation, and a prominent `tel:` call link. The first focusable element is the skip link. On small widths only the call action remains visible.
- **Action links** (`src/App.tsx`, `.button`, `.text-link`): native anchors with visible focus, a dark primary variant, and a light-on-dark visit variant. Hover transitions are limited to color/transform and press feedback is `scale(0.96)`.
- **Menu filter** (`src/App.tsx`, `.filter-row`, `.filter-button`): native buttons with `aria-pressed` and a polite status region. `All`, `Bread`, `Pastry`, and `Drinks` filter the six data-backed cards; the active state is shown by both fill and text.
- **Menu cards** (`src/App.tsx`, `.menu-card`): each item has a category, description, price, and a CSS line-art accent. Desktop cards use a visual header and body; at 500px they become compact rows.
- **Visit panel** (`src/App.tsx`, `.visit-panel`): address uses a native `address` element, directions is a Google Maps link with an explicit destination label, hours are plain text, and the phone number is a tappable `tel:` link.

## Do's and Don'ts

- Start a new page with the `site-header`, content rail, eyebrow, serif heading, and `visit-panel` patterns already in `src/App.tsx` and `src/styles.css`.
- Use `--ink`, `--muted`, `--cream`, `--paper`, and `--saffron-dark` for text and actions before introducing a new color.
- Keep primary actions as native anchors or buttons with a visible shape, focus ring, and a verb-first label.
- Let content wrap and use the existing `800px` and `500px` breakpoints when the current two-column composition stops fitting.
- Preserve the clear hierarchy of open space, filled cards, and one dark visit panel; avoid adding gradients, dense separators, or a second unrelated accent system.
