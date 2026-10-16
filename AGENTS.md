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

## Minimal Change Discipline

Solve the whole problem with the least new code. The best code is the code never written.

### Scope before you write

Read the task and the code it touches. List every place the change must reach: callers, tests, fixtures, config, exports. Check what it could break for users: data it would destroy or expose, callers that stop working. That is scope. Extra features are not.

### Pick the smallest complete change

Take the first option that fully works:

1. Does it need to exist? Drop features, options and flexibility nobody asked for — name them in one line so the user can decide.
2. Already in this codebase (helper, component, service, pattern)? Use it the way the surrounding code does.
3. Standard library or platform feature? Use it, unless the project has its own.
4. An installed dependency? Use it. Never add a dependency for a few lines.
5. Can it be one line a reader gets at a glance? One line.
6. Otherwise: the minimum code that works.

Be lazy about the solution, never about the change itself:

- Finish every part the task needs, including the callers, tests and fixtures the change breaks.
- No abstraction, wrapper, option, config, boilerplate or "for later" code nobody asked for. Keep values in the form the platform already gives you. Deletion beats addition. Keep the layers, interfaces and conventions the codebase already has.
- The shortest working diff wins, once you know everything it must touch. A one-liner that needs decoding is not short.
- Comment only the why the code cannot show, in one line.
- Bug fix: grep every caller of the function you touch, then fix the root cause once in the shared code.
- Code you move or merge keeps its error handling and validation.
- Between options of equal size, take the one that is correct on edge cases.
- New non-trivial logic (a branch, a loop, a parser, money or security, or a whole new script) leaves one small test or an assert-based self-check. Trivial changes need none.
- A shortcut with a known limit gets a one-line comment: `shortcut: <the limit>, <when to upgrade>`.
- Push back when the need does not justify a part: state the smaller option in one line instead of building the bigger one silently.

Never cut: validation at trust boundaries, error handling that prevents data loss, security, accessibility, the calibration real hardware needs, anything the user explicitly asked for.

### Token discipline

- Locate with Grep/Glob, then read only the ranges you need — not whole trees or whole files.
- Prefer editing existing files to creating new ones; reuse code that is already there before writing.
- Never paste file contents back in a reply. Cite the path and lines.
- Keep replies to the outcome: what changed, what passed, any risk (see AI Communication Standards).

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

## Evaluation

How we judge whether an agent task in this repository is actually done. Evaluation is evidence-based — a claim without the command and its observed result is not a pass.

> This section starts minimal and grows with the repository. Add a gate only when a change type repeatedly slips through without it.

### Definition of done

A task is evaluated as done only when all of the following hold:

- Every gate required by the change type below has run and passed.
- The final report names the exact command(s) run and the observed result (pass/fail) — per AI Agent Behavior.
- No required gate was skipped silently. A gate that could not run is reported as a gap, never as a pass.

### Required gates by change type

| Change type | Required gates |
| --- | --- |
| Any change | `pnpm formatter:check` |
| Documentation content (`docs/**/*.md`) | `pnpm docs:build` must succeed |
| New page added | Registered in the `sidebar` array in `docs/.vitepress/config.mts`, then `pnpm docs:build` |
| Vue component, theme or CSS change | `pnpm docs:build`, then `pnpm lint:stylelint` |
| Config or dependency change | Confirm the dependency with the user first, then `pnpm docs:build` |
| Wording-only edit | `pnpm formatter:check` |

### Ordering

Run the narrowest relevant gate first, then the full set for the change type. On the first failure, stop and report it — do not continue on an unproven base (see Execution Discipline).

## AI Agent Behavior

- Use the `docs-architect` agent for generating or restructuring documentation.
- Use the `review-code` command to validate branch changes against the default dev branch before merging.
- Do not auto-merge PRs. Always surface review results to the user.
- Do not modify `.github/` workflow files without explicit user instruction.
- Do not alter `CHANGELOG.md` manually — it is generated by `release-it`.
- Do not add dependencies without confirming with the user first.
- Scope all changes to the task at hand. No speculative refactors.
