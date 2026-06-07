# Project Instructions

This repository is a static personal website built with Astro.

## Structure

- `src/content/profile/index.md` contains the main hero/profile content.
- `src/content/sections/*.md` contains the editable Markdown sections rendered below the hero.
- `src/pages/index.astro` renders the homepage from the Astro content collections.
- `src/styles/site.css` contains the site styling.
- `public/` contains static files copied directly into the production build.
- `public/CNAME` contains the GitHub Pages custom domain.

## Commands

- Install dependencies with `npm ci`.
- Run a local dev server with `npm run dev`.
- Build the static site with `npm run build`.
- Preview the production build with `npm run preview`.

## Deployment

GitHub Pages deployment is handled by `.github/workflows/deploy.yml`.
The workflow builds Astro and uploads the `dist/` directory to GitHub Pages.

In GitHub repository settings, Pages should use **GitHub Actions** as the build and deployment source.

## Editing Rules

- Edit Markdown content in `src/content/`, not generated HTML.
- Do not commit `node_modules/`, `.astro/`, or `dist/`.
- Do not edit generated build output directly.
- Keep the site static; do not add server-only features unless the deployment target changes.
