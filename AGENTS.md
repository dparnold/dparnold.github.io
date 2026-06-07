# Project Instructions

This repository is a static personal website built with Jekyll for GitHub Pages.

## Structure

- `index.md` contains the main hero/profile content.
- `_sections/*.md` contains the editable Markdown sections rendered below the hero.
- `_layouts/default.html` renders the homepage layout.
- `assets/css/site.css` contains the site styling.
- `assets/img/` contains static image assets.
- `CNAME` contains the GitHub Pages custom domain.

## Commands

- Build locally with `jekyll build`.
- Run a local preview with `jekyll serve`.

## Deployment

GitHub Pages deployment is handled by `.github/workflows/deploy.yml`.
The workflow builds Jekyll and uploads the `_site/` directory to GitHub Pages.

In GitHub repository settings, Pages should use **GitHub Actions** as the build and deployment source.

## Editing Rules

- Edit Markdown content in `index.md` and `_sections/`, not generated HTML.
- Do not commit `_site/`, `.sass-cache/`, `.jekyll-cache/`, `.jekyll-metadata`, `node_modules/`, `dist/`, or `.astro/`.
- Do not edit generated build output directly.
- Keep the site static; do not add server-only features unless the deployment target changes.
