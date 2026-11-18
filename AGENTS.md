# AGENTS.md

Guidance for AI coding agents working in this repository.

## Project

Personal portfolio for Ulises Apaza (fullstack developer). Single-page site rendered per locale.

- **Stack:** Next.js 16 (App Router, Turbopack, React Compiler enabled) · React 19 · Tailwind CSS 4 · next-intl 4 · framer-motion 14 · next-themes · Biome 2 (lint + format) · TypeScript 7
- **Package manager:** pnpm

## Commands

```bash
pnpm dev      # dev server (http://localhost:3000)
pnpm build    # production build — MUST pass before finishing work
pnpm lint     # biome check (also enforces formatting)
pnpm format   # biome format --write
```

## Structure

```
src/app/[locale]/        # layout + home page (per-locale routing)
src/components/          # navbar, hero, about, projects, skills, contact, footer…
src/components/icons.tsx # brand SVGs (GitHub, LinkedIn) — lucide no longer ships brand icons
src/data/profile.ts      # social links (single source of truth)
src/i18n/                # next-intl routing / navigation / request config
src/proxy.ts             # locale detection + redirect (Next 16 "middleware" convention)
messages/en.json         # ALL English strings and content
messages/es.json         # ALL Spanish strings and content
```

## Conventions & gotchas

### i18n (next-intl)

- Every user-facing string must live in `messages/en.json` + `messages/es.json`. **No hardcoded text in components.**
- Components use `useTranslations("<Namespace>")`; server code uses `getTranslations` / `setRequestLocale`.
- Rich text uses inline tags rendered via `t.rich`, e.g. `"title": "Building <gradient>scalable</gradient> software"` → `t.rich("title", { gradient: (chunks) => <span className="text-gradient">{chunks}</span> })`.
- Adding a locale: register it in `src/i18n/routing.ts`, create `messages/<locale>.json`, add its label to `LOCALE_LABELS` in `locale-switcher.tsx`, and update `alternates.languages` in `src/app/[locale]/layout.tsx`.
- Internal navigation uses `Link` from `@/i18n/navigation` (locale-aware). In-page anchors use plain `<a href="/#section">`.

### Styling (Tailwind CSS 4)

- **`container` does not auto-center in v4.** Pair it with `mx-auto` in the markup (e.g. `container mx-auto px-6`). Do not rely on a `@utility container` override alone — it compiles in production builds but is not emitted by the dev server. Use `scroll-mt-20` on anchored sections.
- Themes are CSS variables in `src/app/globals.css` (`:root` = light, `.dark` = dark) in oklch. Both themes must be updated together when changing colors.
- Reusable visual classes: `.text-gradient`, `.glass-card`, `.glow-effect`, `.floating`, `.pulse-glow`.
- Framer Motion is already loaded — prefer its `motion.*` components for animations; all decorative animation must respect `prefers-reduced-motion` (globals.css handles the CSS side).

### Dependencies

- **Lucide 1.x removed brand icons** (`Github`, `Linkedin`, …). Use the inline SVGs in `src/components/icons.tsx` for brand logos; lucide is fine for everything else.
- Keep dependencies minimal: this repo deliberately pruned shadcn/ui components and heavy deps (recharts, day-picker, vaul, cmdk…). Don't re-add them without asking.
- pnpm blocks build scripts not listed in `pnpm-workspace.yaml` → `allowBuilds`. Add entries there (not `--ignore-scripts` workarounds) when a new package needs postinstall.
- TypeScript 7: no `baseUrl` in tsconfig; path aliases work via `paths` alone.

### Lint (Biome)

- `pnpm lint` must be clean. Suppression comments: `// biome-ignore lint/<rule>: <reason>` placed **immediately above the flagged line**; in JSX use `{/* biome-ignore … */}` blocks.
- Config lives in `biome.json` (includes `css.parser.tailwindDirectives` for `@apply`/`@theme`/`@utility`).

## Definition of done

1. `pnpm build` passes (type check included).
2. `pnpm lint` exits clean.
3. Both locales build and show translated content (spot-check `/en` and `/es`).
4. Light and dark themes both look correct.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
