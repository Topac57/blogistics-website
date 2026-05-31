# Deployment

This React/Vite app should be deployed from the website app directory, not from the exported pnpm workspace root.

## Vercel Settings

Vercel Root Directory:

```text
artifacts/umzuege-website
```

Framework Preset:

```text
Vite
```

Install Command:

```text
pnpm install
```

Build Command:

```text
pnpm build
```

Output Directory:

```text
dist
```

## Notes

- The app build script is `vite build --config vite.config.ts`.
- Static assets are served from the app's `public` directory.
- The Codion logo used in the footer must exist at `public/images/Logo-Neu.webp` so it is available at `/images/Logo-Neu.webp` after deployment.
- This is a React/Vite app. Do not use Next.js components such as `next/image`.
- Do not use the exported workspace root as the Vercel project root. The workspace root has a pnpm `preinstall` guard and workspace-level package overrides that can block local builds when the root is used directly.

## Local Build Note

Run the build from this app directory:

```sh
pnpm build
```

In this local macOS arm64 workspace export, the app-local build reaches Vite but fails before bundling because the root workspace overrides exclude Rollup's native macOS optional package:

```text
Cannot find module @rollup/rollup-darwin-arm64
```

Use the Vercel settings above so Vercel builds the Vite app directory instead of deploying the workspace root.
