# GradientForge

Personal portfolio of Sambit Kumar Barik, Machine Learning Engineer. Built with Next.js 14 (static export), Tailwind CSS and Geist.

## Design

A monochrome, grid-first layout: the page sits in a bordered frame on a dot-grid background, every section shares a fixed 180px label column, and cells share 1px borders. There is a single warm accent used only for the status dot, the active nav marker, hover arrows and text selection.

- Tokens live in `src/app/globals.css` (`--bg`, `--fg`, `--line`, `--accent`, …). Change `--accent` to retheme.
- Typography is Geist Sans for copy and Geist Mono for labels, numbers and metadata.
- Motion is a single CSS reveal driven by `IntersectionObserver` (`src/components/Reveal.tsx`) and honours `prefers-reduced-motion`.

## Editing content

All copy is data, not markup:

| File | What it holds |
| --- | --- |
| `src/content/site.ts` | Name, role, location, socials, hero metrics, "Now" list, nav sections |
| `src/content/experience.ts` | Roles and highlights |
| `src/content/projects.ts` | Project cards |
| `src/content/stack.ts` | Stack rows |
| `src/content/writing.ts` | Blog posts |

The resume is served from `public/resume.pdf`.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static export to ./out
```
