# Virag Tripathi — portfolio

My portfolio, selected project stories, and two-page resume.

**Live site:** https://viragtripathi.github.io/

The site uses static HTML, CSS, and JavaScript. Python scripts generate the main pages, resume, and social preview image. Generated files are committed so GitHub Pages can serve the site directly from `main`.

## Work on the site

```sh
git clone https://github.com/viragtripathi/viragtripathi.github.io.git
cd viragtripathi.github.io
python3 -m venv .venv
.venv/bin/pip install -r scripts/requirements.txt
```

| File | Purpose |
| --- | --- |
| `scripts/build_site.py` | Homepage, case studies, and shared layout |
| `content/portfolio.json` | Project and writing links |
| `content/resume.json` | Resume content shared by the HTML and PDF |
| `assets/site.css` and `assets/site.js` | Site styling and interactions |
| `assets/resume.css` | Browser and print styling for the resume |
| `work/debezium-explainer.html`, `assets/debezium-explainer.css`, `assets/debezium-explainer.js` | Interactive CDC walkthrough |
| `terminal.html` | Optional terminal interface |

Edit the source files, then rebuild the outputs you changed:

```sh
.venv/bin/python scripts/build_site.py
.venv/bin/python scripts/build_resume.py
.venv/bin/python scripts/build_social.py
.venv/bin/python scripts/check_site.py
node --check assets/site.js
```

The social image builder uses system fonts. Set `PORTFOLIO_FONT_DIR` to a directory containing `Arial.ttf` and `Arial Bold.ttf` if needed. On Linux it also checks for DejaVu Sans.

## Preview

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

Open http://127.0.0.1:8765/. The site needs no runtime server beyond static file hosting.

## Publish

Commit the source changes and regenerated files, then push to `main`. GitHub Pages publishes from the repository root; `.nojekyll` keeps the files served as built.

For a standalone site bundle, run `python3 scripts/export_public.py /path/to/empty-output-directory`. This optional exporter copies only the rendered pages and assets.

Keep credentials, local planning documents, and working notes out of commits. The `docs/` and `notes/` folders are reserved for ignored local notes.
