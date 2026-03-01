# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Environment

The primary IDE is WebStorm with the Claude Code plugin installed.

## Project Overview

MSO Members Site — a private members website for the Manassas Symphony Orchestra. It is a static, no-build-step AngularJS 1.8.2 single-page application served directly from the file system.

## No Build System

There is no package manager, no bundler, and no build tool. Files are served statically. Each JS and JSON file has both a human-readable version and a minified `.min.js` / `.min.json` counterpart. `index.html` loads the `.min.js` versions exclusively.

**JSON minification** is handled by `/Users/jimvillani/PycharmProjects/json_minify/main.py`, which takes an input and output path as arguments. WebStorm is configured to run it automatically whenever a `data/*.json` file changes, producing the corresponding `.min.json`. When editing JSON data files outside WebStorm, run it manually:

```
python3 /Users/jimvillani/PycharmProjects/json_minify/main.py data/schedule.json data/schedule.min.json
```

## Architecture

The app follows a per-feature module pattern using AngularJS:

- **`js/[name].directive.js`** — registers a custom element directive (e.g., `<schedule>`) that points to a template via `templateUrl`
- **`js/[name].controller.js`** — fetches data from `data/[name].min.json` via `$http.get()` and exposes it on `$scope`
- **`template/[name].html`** — the HTML template for that feature; binds controller data via `ng-controller`

The AngularJS module is bootstrapped in `js/app.js` (`angular.module('app', [])`). All other JS files attach to this module using `angular.module('app')` (no dependency array).

### Features / Tabs

| Tab | Directive | Controller | Data file |
|---|---|---|---|
| Schedule | `schedule` | `scheduleCtrl` | `data/schedule.json` |
| Parts | `parts` | `partsCtrl` | `data/parts.json` |
| Photos | `misc` | `miscCtrl` | `data/links.json` (photos) |
| Links | `links` | `linksCtrl` | `data/links.json` |
| Contacts | `contacts` | `contactsCtrl` | `data/contacts.json` |
| Library | `library` | — | — |
| Orchestra Calendar | `calendar` | — | — |
| Board Calendar | `boardcal` | — | — |

Additionally: `seasons` directive (concert dates), `absences` directive (uses `linksCtrl`), `survey` directive (uses `linksCtrl`), `keylinks` partial (renders `linksData.key` links; embedded in schedule template).

Custom filters: `unsafe` (trusts HTML via `$sce`), `trustedUrl` (trusts resource URLs via `$sce` for iframe `ng-src`), `slice` (slices arrays for 3-column layout).

`linksService` is a shared factory that caches the `links.min.json` HTTP request. It is used by `linksCtrl`, `miscCtrl`, and any template needing links data.

## Data Files (`data/`)

Each `.json` is the human-editable source; `.min.json` is what the app reads. Both must be kept in sync.

- **`schedule.json`** — array of rehearsal dates. Each entry has `date`, `time`, optional `location`, optional `scheduleItem[]`. Each `scheduleItem` may have: `time`, `piece`, `composer`, `indent`, `instrumentation`. A canceled rehearsal omits `scheduleItem` and puts the reason in `time` (e.g., `"time": "Canceled - Weather"`). The schedule display splits entries into 3 columns.
- **`roster.json`** — `instruments[]`, each with `instrument` name, `column` (1-4 for display layout), and `section[]` of members (with `first`/`last` name, `active`, optional `principal`).
- **`parts.json`** — `ftp` URL (iframe embed), `links[]` (IMSLP), `audio[]` (local mp3 via `/audio/`), `videos[]`.
- **`links.json`** — `key[]` (shown on schedule page and links tab), `inactive[]`, and `interesting[]` arrays of `{url, linkText}`. Also contains `absenceFormEmbed` (Google Form embed URL), `photos` (slideshow/gallery URLs, title, credit), and `survey` (embed URL, direct link, auditions link).
- **`contacts.json`** — `staff[]` and `officers[]` arrays.
- **`seasons.json`** — `seasons[]` array with `season` label and `dates[]` strings.

## `.gitignore` Notes

`/parts/`, `/files/`, and `*.mp3` are excluded from git. The `parts/` directory contains sheet music PDFs organized by season/concert (e.g., `parts/2025-26/march/grofe/`). The `files/` directory holds vouchers, brochures, etc.
