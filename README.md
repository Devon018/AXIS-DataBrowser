# AXIS Data Browser GitHub Pages

Static GitHub Pages preview for the AXIS Data Browser.

## Files

- `index.html`: redirect entrypoint to the Data Browser.
- `browser.html`: interactive AXIS Data Browser page.
- `assets/css/styles.css`: responsive layout and visual system.
- `assets/css/browser.css`: dark demo explorer, showcase, table, and detail styling.
- `assets/js/browser-data.js`: deterministic preview manifest with 207 tasks and representative records.
- `assets/js/browser.js`: demo filtering, pagination, table, and detail rendering.
- `assets/js/site.js`: mobile navigation and disabled placeholder links.
- `assets/images/`: Data Browser favicon and demo poster assets.
- `assets/videos/demo-placeholder.mp4`: temporary demo video slot.

## Publish

Enable GitHub Pages from the repository root and serve from the `main` branch. The site does not require a build step.

## Replace Before Release

- Replace `assets/js/browser-data.js` with the real task manifest export.
- Replace `assets/videos/demo-placeholder.mp4` and placeholder demo cards with final AXIS demo videos.
