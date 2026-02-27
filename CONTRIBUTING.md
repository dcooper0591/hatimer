# Contributing to HA Timer Card

Thank you for your interest in contributing! This document covers how to set up a local development environment, build the project, test changes, and submit pull requests.

---

## Prerequisites

- **Node.js** 20 or later
- **npm** 10 or later (bundled with Node 20)
- A working Home Assistant instance (for manual testing)
- Git

---

## Getting Started

```bash
git clone https://github.com/<your-username>/hatimer.git
cd hatimer
npm install
```

---

## Development Build

Produces an unminified bundle with source maps — ideal for debugging.

```bash
npm run build
```

Output: `dist/hatimer.js` (unminified, with inline source map)

### Watch Mode

Automatically rebuilds on every source change:

```bash
npm run dev
```

---

## Production Build

Produces a minified bundle with no source maps — this is what gets released:

```bash
npm run release
```

Output: `dist/hatimer.js` (minified, no source map)

---

## Type Checking

Validate TypeScript types without producing output:

```bash
npm run type-check
```

All PRs must pass type-checking with zero errors.

---

## Testing Locally in Home Assistant

1. Run `npm run build` to produce `dist/hatimer.js`.
2. Copy `dist/hatimer.js` to your HA config folder at `www/hatimer/hatimer.js`.
3. In HA, go to **Settings → Dashboards → Resources** and add:
   - URL: `/local/hatimer/hatimer.js`
   - Type: `JavaScript module`
4. Hard-refresh the browser (Ctrl+Shift+R).
5. Add a `custom:hatimer-card` to any dashboard pointing to a `timer.*` entity.

When you change source files, repeat steps 1–2 and hard-refresh to pick up changes.

---

## Release Process

Releases are automated via GitHub Actions. To publish a new version:

1. Update the version in `package.json`.
2. Commit the change: `git commit -am "chore: bump version to 1.2.3"`.
3. Tag the commit: `git tag v1.2.3`.
4. Push: `git push && git push --tags`.

GitHub Actions will:
- Run a clean `npm ci`
- Build the production bundle (`npm run release`)
- Create a GitHub Release for the tag
- Upload `dist/hatimer.js` as the release asset

HACS users will then see the new version available.

---

## Code Conventions

- **Language**: TypeScript with strict mode (`"strict": true` in tsconfig.json)
- **Framework**: [Lit](https://lit.dev/) — use `LitElement`, `html`, `css` from `lit`
- **Decorators**: Only `@customElement` and `@property` from `lit/decorators.js`
- **`hass` updates**: Use a property setter (`set hass(...)`) and call `this.requestUpdate()` manually — do not rely on Lit's reactive property system for `hass` to avoid unnecessary re-renders
- **Services**: Call `this.hass.callService(domain, service, data)` — never use the WebSocket API directly
- **Styling**: Use HA CSS custom properties (`--primary-color`, `--card-background-color`, etc.) to respect theming
- **No framework dependencies**: Keep the bundle lean — no React, Vue, or other heavy libraries

---

## Pull Request Guidelines

- One feature or fix per PR
- Include a clear description of what changed and why
- Run `npm run type-check` before submitting — PRs with type errors will not be merged
- Update `README.md` if you're adding or changing configuration options
- Keep commits focused and use conventional commit messages:
  - `feat: add X` for new features
  - `fix: correct Y` for bug fixes
  - `chore: bump version` for housekeeping
  - `docs: update README` for documentation-only changes
