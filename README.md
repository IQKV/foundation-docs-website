# iQKV Foundation Documentation

Documentation site for the IQKV multi-tenant SaaS platform.

---

## About

This repository contains the user-facing documentation for IQKV, built with VitePress.

## Documentation structure

- **Home** - Landing page with quick links
- **Platform Overview** - High-level introduction to the platform
- **Tenant App Guide** - User guide for the tenant-facing app (app.iqkv.site)
- **Platform Admin Guide** - Operator guide for the admin app (admin.iqkv.site)

## Getting started

### Prerequisites

- [Node LTS version](https://nodejs.org/)
- [pnpm](https://pnpm.io/installation)
- [Git](https://git-scm.com/)

### Installation

```bash
# Clone the repository
git clone https://github.com/IQKV/foundation-docs-website.git
cd foundation-docs-website

# Install dependencies
pnpm install
```

### Development

```bash
# Start development server
pnpm docs:dev
# → http://localhost:5173
```

### Build for production

```bash
# Build static site
pnpm docs:build

# Preview production build
pnpm docs:preview
```

## Available scripts

| Command                | Description                    |
| ---------------------- | ------------------------------ |
| `pnpm docs:dev`        | Start development server       |
| `pnpm docs:build`      | Build for production           |
| `pnpm docs:preview`    | Preview production build       |
| `pnpm formatter:write` | Format code with oxfmt         |
| `pnpm lint`            | Lint code                      |
| `pnpm release`         | Create release with release-it |

## Tech stack

- **VitePress** - Static site generator for documentation
- **Vue** - Frontend framework
- **pnpm** - Package manager
- **oxfmt** - Code formatter
- **Husky** - Git hooks
- **Commitlint** - Conventional commits

## Contributing

Please follow the [Contributing Guidelines](.github/CONTRIBUTING.md) and [Code of Conduct](.github/CODE_OF_CONDUCT.md).

## License

MIT License - see [LICENSE](LICENSE) for details.
