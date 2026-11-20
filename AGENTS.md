# Working on this portfolio

This repository is the source of truth for https://viragtripathi.github.io/.

- Update `scripts/build_site.py` and rebuild for homepage and case-study changes. Do not edit only the generated HTML.
- Update `content/resume.json` and run `scripts/build_resume.py` when changing resume content; it produces both HTML and PDF.
- Preserve the official Principal title and the customer-facing sales engineering, applied AI, and delivery positioning.
- Keep the saffron palette, keyboard accessibility, reduced-motion support, and mobile layout intact.
- Keep planning sessions, credentials, and internal working notes out of the repository. `docs/`, `notes/`, and `VERIFICATION.md` are ignored.
- Run `python3 scripts/check_site.py`, `node --check assets/site.js`, and `git diff --check` before publishing. Check affected layouts in a browser for visual changes.
- Commit source changes with their generated outputs. GitHub Pages serves the root of `main` directly.
