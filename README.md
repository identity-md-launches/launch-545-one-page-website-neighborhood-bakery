# Rye & Rise

Rye & Rise is a one-page neighborhood bakery site for people looking for the menu, opening hours, directions, or a quick way to call. The page is built with Vite, React, TypeScript, and plain CSS. It is a static export with relative asset paths, so the committed `dist/` folder can be served from a subpath.

## Install

```bash
npm install
```

## Develop and preview

Start the Vite development server with:

```bash
npm run dev
```

To preview the production export locally:

```bash
npm run build
npm run preview
```

## Rebuild

`npm run typecheck` runs TypeScript without emitting files. `npm run build` typechecks the project and writes the production export to `dist/`.

## Publish

Publish the contents of `dist/` to any static host. Keep the folder structure intact: `dist/index.html` loads `./assets/...` and `./favicon.svg` with relative URLs so the site works at a gateway subpath as well as at the domain root. No server-side routing is required.

## Validation

The final worker checks are recorded in [artifacts/validation.md](artifacts/validation.md). The production build and TypeScript check passed. A Playwright browser session checked the rendered export at 1280px, 768px, and 320px widths, exercised the menu filter with a click and keyboard activation, checked the tappable `tel:` links and map link in the accessibility tree, measured representative rendered contrast pairs, and confirmed no horizontal overflow at the tested widths. Screen-reader hardware/software testing, native-device testing, RTL mirroring, and 200% browser zoom were not available in this run.
