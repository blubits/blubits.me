# GitHub Copilot Instructions for blubits.me

## Project Overview
This is a personal website built with [Astro](https://astro.build/), Tailwind CSS, and modern web technologies. It features content pages, tutoring info, and project showcases.

## Tech Stack
- Astro (see `astro.config.mjs`)
- Tailwind CSS (see `tailwind.config.mjs`)
- TypeScript
- Custom Astro components (see `src/components/`)

## Development
- **Dev server:** [http://localhost:4321](http://localhost:4321)
- To start the dev server, run:
  ```sh
  npm run dev-host
  ```
- Main entry: `src/pages/`
- Content: `content/` (editorials, modules, projects)
- Assets: `src/assets/`, `public/`

## Conventions
- Use `.astro` for pages and layouts.
- Use React/TSX only for interactive UI (see `src/components/ui/ThemeToggle.tsx`).
- Prefer Astro partial hydration (`client:*` directives) for interactivity.
- Use Tailwind utility classes for styling.
- Organize content by topic in `content/`.

## Best Practices
- Keep components small and focused.
- Use props for data passing.
- Write clear, descriptive commit messages.
- Document new components and utilities.
- Test changes by running the dev server and checking affected pages.

## How to Use Copilot
- Suggest code for `.astro`, `.ts`, and `.css` files.
- Follow project conventions and folder structure.
- When adding new features, update relevant documentation and content files.
- For content, use Markdown in `content/`.

## Example Tasks
- Add a new tutoring subject: update `src/pages/tutoring.astro` and relevant card data.
- Add a new editorial: create a Markdown file in `content/editorials/`.
- Add a new project: create a folder in `content/projects/` and update `src/pages/projects/[slug].astro`.

---
For questions, see `README.md` or ask the project owner.
