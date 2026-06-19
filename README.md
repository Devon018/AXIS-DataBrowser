# AXIS Data Browser GitHub Pages

Static GitHub Pages preview for the AXIS Data Browser.

## Files

- `index.html`: redirect entrypoint to the Data Browser.
- `browser.html`: interactive AXIS Data Browser page.
- `assets/css/styles.css`: responsive layout and visual system.
- `assets/css/browser.css`: dark demo explorer, showcase, table, and detail styling.
- `assets/js/browser-data.js`: full task-coverage LeRobot manifest with 200 exported tasks and one real demo per task.
- `assets/js/browser.js`: demo filtering, pagination, table, and detail rendering.
- `assets/js/site.js`: mobile navigation and disabled links.
- `assets/images/`: Data Browser favicon and social preview image.
- `assets/videos/data_lerobot`: symlink mount to the full `axis-training/data_lerobot` corpus.

## Publish

Enable GitHub Pages from the repository root and serve from the `main` branch. The site does not require a build step. Full video playback requires the `assets/videos/data_lerobot` mount to resolve to the LeRobot corpus on the serving machine.

## Demo Data

The current browser covers every exported task with one real demo:

- Source corpus: `/home/shmqd/workspace/dihong/axis-training/data_lerobot`.
- Full clean export: 200 exported tasks, 32,300 clean episodes, 3,866,294 clean frames.
- Browser records: 200 task demos, one per exported task.
- Video source: clean videos are used first; 7 tasks with no clean videos use local LeRobot videos as real fallback demos.
- Video mount: `assets/videos/data_lerobot -> /home/shmqd/workspace/dihong/axis-training/data_lerobot`.
- Source metadata: `clean_export_summary.json` plus `tmp/web2rv_state/collected_tasks.csv` task names.
