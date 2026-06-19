# AXIS Data Browser GitHub Pages

Static GitHub Pages preview for the AXIS Data Browser.

## Files

- `index.html`: redirect entrypoint to the Data Browser.
- `browser.html`: interactive AXIS Data Browser page.
- `assets/css/styles.css`: responsive layout and visual system.
- `assets/css/browser.css`: dark demo explorer, showcase, table, and detail styling.
- `assets/js/browser-data.js`: packaged real clean LeRobot manifest with 12 tasks and 36 demo records.
- `assets/js/browser.js`: demo filtering, pagination, table, and detail rendering.
- `assets/js/site.js`: mobile navigation and disabled placeholder links.
- `assets/images/`: Data Browser favicon and social preview image.
- `assets/videos/real/`: real third-person and wrist RGB mp4 clips copied from `axis-training/data_lerobot/clean`.

## Publish

Enable GitHub Pages from the repository root and serve from the `main` branch. The site does not require a build step.

## Demo Data

The current static demo packages a small clean subset so GitHub Pages can serve it directly:

- Source corpus: `/home/shmqd/workspace/dihong/axis-training/data_lerobot/clean`.
- Packaged subset: 12 clean-exported tasks, 3 episodes each, 2 camera views per episode.
- Source metadata: `clean_export_summary.json` plus `tmp/web2rv_state/collected_tasks.csv` task names.
