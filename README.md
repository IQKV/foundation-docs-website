# Foundation Docs Website

User-facing documentation site for the iQ Key Value platform. VitePress renders the Markdown in `docs/` into a static site.

## About

This repository holds the published user documentation — the platform overview, the tenant app guide, and the operator manual. It is separate from the products it documents: `foundation-ui-app` (tenant app at `app.iqkv.site`), `foundation-ui-platform-admin` (operator console at `admin.iqkv.site`), and `foundation-ui-saas-landing-kit` (marketing site).

Content is plain Markdown under `docs/`; navigation, search and footer come from `docs/.vitepress/config.mts`; the theme is the VitePress default theme plus a local `style.css` override layer. The build output is a static site with no server-side runtime.

### Implemented today

| Area                    | What it does                                                                                                                |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| **Home**                | VitePress home layout — hero, three value cards, and CTAs into the platform overview and the two app guides                  |
| **Platform overview**   | Platform introduction: the two apps and who they are for, tenant app capabilities, admin capabilities, workspace models     |
| **Tenant app guide**    | End-user walkthrough of `app.iqkv.site` — sign-up and email verification, sign-in and workspace selection, password reset, dashboard |
| **Platform admin guide** | Operator manual for `admin.iqkv.site` — operator sign-in and session rules, dashboard stats, user and organization management |
| **Navigation**          | Top nav (Home, Platform Overview, User Guides dropdown, demo site) and a Documentation sidebar, both defined in `config.mts` |
| **Search**              | Built-in VitePress local (offline) search provider — no external service                                              |
| **Edit links**          | "Edit this page" links point at this repository                                                                         |
| **Theme**               | Default theme with a local stylesheet override layer (`docs/.vitepress/theme/`)                                          |
| **Delivery**            | Static output in `docs/.vitepress/dist/`, served by the root `Dockerfile` (nginx)                                       |
| **Tooling**             | Husky + lint-staged pre-commit hooks, commitlint, release-it with conventional changelog                                |

## Pages

| Page               | Source                    | Description                                                             |
| ------------------ | ------------------------- | ----------------------------------------------------------------------- |
| Home               | `docs/index.md`           | VitePress home layout — hero and feature cards                          |
| Platform overview  | `docs/platform-overview.md` | Platform introduction, the two apps, and workspace models            |
| Tenant app         | `docs/tenant-app.md`      | End-user guide for `app.iqkv.site`                                      |
| Platform admin     | `docs/platform-admin.md`  | Operator guide for `admin.iqkv.site`                                    |

Every page is Markdown under `docs/`, and each one is registered in the `sidebar` array in `docs/.vitepress/config.mts`. URLs keep the `.html` suffix (`cleanUrls: false`).

## Feature status

| Feature                          | Status |
| -------------------------------- | ------ |
| Home landing page                | Done   |
| Platform overview                | Done   |
| Tenant app guide                 | Done   |
| Platform admin guide             | Done   |
| Top nav and sidebar              | Done   |
| Local search                     | Done   |
| GitHub edit links                | Done   |
| Custom stylesheet overrides      | Done   |
| Dev container (Node 22)          | Done   |
| Static build + nginx image       | Done   |
| Release automation (`release-it`) | Done   |

## Content authoring

- Add or edit guides as Markdown files in `docs/`.
- Register every new page in the `sidebar` array in `docs/.vitepress/config.mts` — an unregistered page is unreachable from the navigation.
- Use frontmatter (`prev` / `next`) where in-page navigation needs explicit control.
- Theme overrides go in `docs/.vitepress/theme/` (`index.ts` currently re-exports the default theme; `style.css` holds the overrides). CSS is linted with Stylelint.
- Documentation content changes must pass `pnpm docs:build` before they are considered done.

---

## Tech stack

- VitePress 1.6 (static site generator) with Vue 3.5
- TypeScript for the config and theme entry points
- OxFmt for formatting, OxLint, Stylelint (`stylelint-config-standard-scss`) for CSS
- Husky + lint-staged, commitlint (Conventional Commits), release-it with conventional changelog
- Dev container on Node 22 for a reproducible local setup

## Prerequisites

- Node.js LTS (22.x — see `.devcontainer/Dockerfile`)
- pnpm 10.33.2 (`packageManager` in `package.json`)

## Quick start

```bash
git clone https://github.com/IQKV/foundation-docs-website.git
cd foundation-docs-website

pnpm install

pnpm docs:dev
# → http://localhost:5173
```

## Dev container

`.devcontainer/` builds a Node 22 image with git, the GitHub CLI and common shell tools, mounts the repository at `/workspace`, and forwards port 5173, so `pnpm docs:dev` is reachable from the host without extra setup.

## Scripts

```bash
# Development
pnpm docs:dev            # VitePress dev server (http://localhost:5173)
pnpm docs:preview        # Preview the production build

# Build
pnpm docs:build          # Static output to docs/.vitepress/dist/

# Quality
pnpm lint                # oxfmt check (alias of formatter:check)
pnpm formatter:check     # oxfmt check
pnpm formatter:write     # oxfmt write
pnpm lint:stylelint      # Stylelint for CSS/SCSS
pnpm ci                  # lint, then docs:build

# Release
pnpm release             # release-it, conventional changelog
```

## Project structure

```
docs/
├── .vitepress/
│   ├── config.mts       # Site config — title, nav, sidebar, search, footer
│   └── theme/           # Theme entry (default theme) + style.css overrides
├── index.md             # Home page
├── platform-overview.md
├── tenant-app.md
└── platform-admin.md
.devcontainer/           # Node 22 dev container (Dockerfile, compose.yml)
Dockerfile               # nginx image serving docs/.vitepress/dist
```

## Deployment

`pnpm docs:build` writes the static site to `docs/.vitepress/dist/`. The root `Dockerfile` copies that directory into `nginx:1.27-alpine`, so no Node.js runtime is needed in production — build the site first, then build the image.

## Documentation

- [Published site](https://docs.iqkv.site)
- [Site config](./docs/.vitepress/config.mts)
- [Agent guide](./AGENTS.md)
- [Commit convention](./.github/COMMIT_CONVENTION.md)
- [Security policy](./.github/SECURITY.md)

## License

MIT License — see [LICENSE](LICENSE).

## Contributing

See [Contributing Guidelines](.github/CONTRIBUTING.md) and [Code of Conduct](.github/CODE_OF_CONDUCT.md). Never commit directly to `main` or `dev` — all changes go through pull requests.
