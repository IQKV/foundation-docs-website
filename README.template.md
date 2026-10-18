# Project Name

<!-- TEMPLATE: Replace the title above. Remove this comment block when done. -->

<details>
  <summary><strong>How to use this template (click to expand)</strong></summary>

1. Replace the title with your site name.
2. Update the short description below.
3. Add CI/license badges after the title.
4. Fill in each section with real content; remove placeholder text.
5. Delete this guidance block when finished.

</details>

Short description of what this site documents and who it is for.

<!-- Badge examples (optional):
![CI](https://img.shields.io/github/actions/workflow/status/ORG/REPO/build-nodejs-project.yml?label=CI)
![License](https://img.shields.io/github/license/ORG/REPO)
-->

## About

Describe the purpose of the site, the products it documents, and how nav and sidebar are structured.

## Feature Status

| Feature | Status | Notes |
| ------- | ------ | ----- |
|         |        |       |

## Tech Stack

- VitePress 1.6 (static output) · Vue 3.5
- TypeScript for config and theme entry points
- OxFmt · OxLint · Stylelint
- Husky · lint-staged · commitlint · release-it

Markdown content lives in `docs/`; navigation is declared in `docs/.vitepress/config.mts`. See [AGENTS.md](AGENTS.md).

## Prerequisites

- Node.js LTS (22.x)
- pnpm `10.33.2`

## Quick Start

```bash
git clone https://github.com/IQKV/<repo>.git
cd <repo>

pnpm install

pnpm docs:dev
# → http://localhost:5173
```

## Scripts

```bash
pnpm docs:dev            # VitePress dev server (http://localhost:5173)
pnpm docs:build          # Static output to docs/.vitepress/dist/
pnpm docs:preview        # Preview the production build
pnpm lint                # oxfmt check
pnpm formatter:write     # oxfmt write
pnpm lint:stylelint      # Stylelint for CSS/SCSS
```

## Project Structure

```
docs/
├── .vitepress/
│   ├── config.mts       # Site config — title, nav, sidebar, search, footer
│   └── theme/           # Theme entry + style.css overrides
├── index.md             # Home page
└── <guide>.md           # Guides, registered in the sidebar
.devcontainer/           # Node 22 dev container
Dockerfile               # nginx image serving docs/.vitepress/dist
```

## Deployment

`pnpm docs:build` writes a static site to `docs/.vitepress/dist/`. Serve it from any static host, or from the provided `Dockerfile` (nginx), which copies that directory into the image and needs no Node.js runtime.

## Documentation

- [Site config](./docs/.vitepress/config.mts)
- [Agent guide](./AGENTS.md)
- [Commit convention](./.github/COMMIT_CONVENTION.md)
- [Security policy](./.github/SECURITY.md)

## License

See [LICENSE](LICENSE).

## Contributing

See [Contributing Guidelines](.github/CONTRIBUTING.md) and [Code of Conduct](.github/CODE_OF_CONDUCT.md).

---

<details>
  <summary><strong>Pre-publish checklist (remove before merging)</strong></summary>

- [ ] Title and description updated
- [ ] Badges added
- [ ] Feature Status table populated
- [ ] New pages registered in the `sidebar` array in `docs/.vitepress/config.mts`
- [ ] Project structure reflects the actual pages
- [ ] Links verified

</details>
