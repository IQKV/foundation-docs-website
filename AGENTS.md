# AGENTS.md

Rules and best practices for AI agents working in this repository.

---

## Project Context

VitePress documentation site. Stack: TypeScript, Vue 3, Vite, pnpm.
Package manager: `pnpm` only. Node LTS required.

---

## Mandatory Rules

### General

- Never commit directly to `main` or `dev`. All changes go through PRs.
- All commit messages must follow Conventional Commits enforced by commitlint.
- Allowed commit types: `feat`, `fix`, `rfc`, `docs`, `style`, `improvement`, `enhancement`, `refactor`, `perf`, `test`, `chore`, `build`, `ci`, `revert`.
- PR titles must also follow Conventional Commits format.
- Never modify `pnpm-lock.yaml` manually.
- Never install packages with `npm` or `yarn` — use `pnpm` exclusively.

### Code Style

- TypeScript for all code. No plain `.js` source files.
- Prefer `interface` over `type` for object shapes.
- No `enum` — use `const` maps instead.
- Use functional and declarative patterns. No classes unless required by a framework.
- Use descriptive boolean variable names: `isLoading`, `hasError`, `canSubmit`.
- Named exports only. No default exports for functions or components.
- Directories: lowercase with dashes (`components/auth-wizard`).
- Each file contains only related content — no mixing unrelated exports.

### Vue / VitePress

- Always use Composition API with `<script setup lang="ts">`.
- Never use Options API.
- Wrap async components in `<Suspense>` with a fallback.
- Use dynamic imports for non-critical components.
- Leverage VueUse utilities before writing custom composables.

### Formatting

- Formatter: `oxfmt`. Run `pnpm formatter:write` before committing.
- Indentation: 2 spaces. No tabs.
- Line endings: LF only.
- Trailing commas: ES5 style.
- Semicolons: required.
- Double quotes for strings.
- Final newline required in every file.
- Trailing whitespace must be trimmed (except `.md` files).

### Styling

- CSS linted with stylelint using `stylelint-config-standard-scss`.
- Run `pnpm lint:stylelint` to validate CSS/SCSS.
- Responsive design: mobile-first with Tailwind CSS.

### Performance

- Images: WebP format, explicit dimensions, lazy loading.
- Vite builds: apply code splitting for smaller bundles.
- Optimize Core Web Vitals (LCP, CLS, FID).

---

## Workflow

### Before Committing

```shell
pnpm formatter:write   # format all files
pnpm lint              # verify formatting
pnpm lint:stylelint    # verify CSS/SCSS
```

Pre-commit hooks (Husky + lint-staged) run `pnpm formatter:check` automatically on staged files.

### Development

```shell
pnpm install
pnpm docs:dev
```

### Build & Preview

```shell
pnpm docs:build
pnpm docs:preview
```

### Release

```shell
pnpm release   # runs release-it --ci, generates changelog, tags version
```

---

## Documentation Structure

All docs live under `docs/`. VitePress config is at `docs/.vitepress/config.mts`.

Required pages: `index.md`, `overview.md`, `requirements.md`, `contributing.md`, `support.md`.

When adding new pages:

- Register them in the `sidebar` array in `config.mts`.
- Add frontmatter (`prev`/`next`) where navigation control is needed.
- Keep content factual, concise, and technically accurate.

---

## Execution Discipline

- Root cause first. Fix the real entry point, not a workaround.
- Read the relevant docs and config files before editing. Do not assume current state.
- After two identical failures without new evidence, change approach — do not retry blindly.
- No speculative additions. Add content or config only when directly required by the request.
- Behavior proven and required gates green: finish. No scope growth.

## Security

- Keep credentials and tokens out of commits, logs, and shared text.
- `PUBLIC_*` env vars are embedded in the built static output — never put secrets in them.
- Do not commit `.env` files. Use `.env.example` for documentation.
- Flag unusual package names before installing. Use exact or pinned versions.
- Never bypass `--no-verify` unless explicitly requested.

## Commit Standards

Format: `type(scope): subject`

- Subject: imperative, lowercase, no trailing period, ≤ 72 chars
- Types: `feat`, `fix`, `improvement`, `refactor`, `docs`, `style`, `chore`, `ci`, `perf`, `revert`
- Scope: affected area (e.g., `sidebar`, `config`, `theme`, `deps`, `ci`)
- For `fix`: describe the symptom and trigger, not the code change
  - ✅ `fix(sidebar): active link not highlighted on deep route navigation`
  - ❌ `fix(sidebar): update active class logic`

Examples:

- `feat(sidebar): add collapsible section for API reference`
- `fix(config): build fails when BASE_URL contains trailing slash`
- `chore(deps): update vitepress to 1.6.4`

## AI Agent Behavior

- Use the `docs-architect` agent for generating or restructuring documentation.
- Use the `review-code` command to validate branch changes against the default dev branch before merging.
- Do not auto-merge PRs. Always surface review results to the user.
- Do not modify `.github/` workflow files without explicit user instruction.
- Do not alter `CHANGELOG.md` manually — it is generated by `release-it`.
- Do not add dependencies without confirming with the user first.
- Scope all changes to the task at hand. No speculative refactors.
