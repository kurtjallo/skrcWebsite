# Summary: 16-01 CI Pipeline

## What Was Done

1. **ESLint flat config** (`eslint.config.mjs`): Created using native `eslint-config-next` flat config export (no FlatCompat shim needed). Lint passes with zero errors/warnings.

2. **Comprehensive .gitignore**: Replaced single-line `.gitignore` (only `node_modules`) with full coverage: `.next/`, env files, OS files (.DS_Store), editor configs, build artifacts, Vercel output, coverage reports.

3. **Package.json scripts**: Added `typecheck` script (`tsc --noEmit`), updated `lint` to target `src/` directory.

4. **GitHub Actions CI workflow** (`.github/workflows/ci.yml`): Three parallel jobs (lint, typecheck, build) on push to main and PR to main. Node 22, npm cache, concurrency group with cancel-in-progress.

5. **Lint fix**: Replaced `<a>` with `<Link>` in `who-we-serve/page.tsx` to resolve ESLint `no-html-link-for-pages` warning.

## Verification

All three CI steps pass locally:
- `npm run lint` — 0 errors, 0 warnings
- `npm run typecheck` — clean
- `npm run build` — all pages build successfully

## Files Changed

- `eslint.config.mjs` (new)
- `.gitignore` (rewritten)
- `.github/workflows/ci.yml` (new)
- `package.json` (updated scripts)
- `src/app/who-we-serve/page.tsx` (lint fix: `<a>` → `<Link>`)
