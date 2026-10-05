# Jalal Haidar — Portfolio

[![CI](https://github.com/jalal-haidar/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/jalal-haidar/portfolio/actions/workflows/ci.yml)

Personal portfolio of **Jalal Haidar**, a full-stack TypeScript engineer who ships AI-powered products end to end.

**Live:** https://jalal-haidar.vercel.app

## Stack

- **Next.js 16** (App Router) and **React 19**, TypeScript in strict mode
- **Tailwind CSS v4**, `next-themes` for light and dark mode, `lucide-react` icons
- **MDX** case studies via `@next/mdx`, loaded with dynamic imports
- **Playwright** smoke tests and a GitHub Actions workflow
- Hosted on **Vercel**; privacy-friendly analytics and Speed Insights (no cookies)

The site is fully static: no database, no API routes and no contact form. Pages are generated at build time, and project routes use `generateStaticParams` with `dynamicParams = false`.

## Scripts

| Command                     | What it does                                        |
| --------------------------- | --------------------------------------------------- |
| `pnpm dev`                  | Start the dev server on http://localhost:3000       |
| `pnpm build` / `pnpm start` | Production build and server                         |
| `pnpm lint`                 | ESLint                                              |
| `pnpm typecheck`            | `tsc --noEmit`                                      |
| `pnpm format`               | Prettier (with the Tailwind class-sorting plugin)   |
| `pnpm test:e2e`             | Playwright smoke tests (needs a prior `pnpm build`) |

First-time setup:

```bash
pnpm install
pnpm exec playwright install chromium
```

## Editing content

All copy lives in `src/content/`:

| File                  | Content                                      |
| --------------------- | -------------------------------------------- |
| `profile.ts`          | Name, tagline, bio, links, skills, education |
| `experience.ts`       | Jobs and their bullets                       |
| `projects.ts`         | The project index (typed)                    |
| `projects/<slug>.mdx` | One case study per project                   |
| `writing.ts`          | Articles                                     |

To add a project: add an entry to `projects.ts`, create `src/content/projects/<slug>.mdx` using the same sections as the others (Overview, The problem, What I built, Architecture, Key decisions, Results), and optionally add a cover image at `public/projects/<slug>/cover.webp`. Without a cover, a generated tile is shown.

Every claim in a case study should be traceable to the project's own repository (README, docs, manifests, tests or git history).

## Layout

```
src/
  app/            routes: home, /projects, /projects/[slug], /resume, SEO files
  components/     Header, Footer, ProjectCard, ThemeToggle, ...
  content/        typed data and MDX case studies
  lib/site.ts     SITE_URL and project helpers
tests/            Playwright smoke tests
```

## License

Code is released under the [MIT License](LICENSE). The written content, case studies and images are © Jalal Haidar and are not covered by that license.
