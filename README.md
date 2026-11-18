# Portfolio — Ulises Apaza

Personal portfolio built with **Next.js 16**, **React 19**, **Tailwind CSS 4** and **next-intl**.

## Features

- 🌐 **i18n** — English (`/en`) and Spanish (`/es`) with automatic browser language detection and cookie persistence. All content lives in `messages/en.json` and `messages/es.json`.
- 🌓 **Dark / light theme** — `next-themes` with system preference detection.
- ✨ **Animations** — framer-motion with `prefers-reduced-motion` support.
- 🖼️ **Optimized images** — `next/image` for all project screenshots.
- ⚡ **Static rendering** — both locales are prerendered at build time (SSG).
- 🧹 **Linting** — Biome 2.

## Getting started

```bash
pnpm install
pnpm dev      # start dev server
pnpm build    # production build
pnpm lint     # biome check
```

## Project structure

```
src/
├── app/[locale]/     # pages (layout + home), per-locale routing
├── components/       # navbar, hero, about, projects, skills, contact, footer…
├── data/profile.ts   # social links
├── i18n/             # next-intl routing / navigation / request config
├── assets/           # project screenshots
messages/             # en.json / es.json — all UI strings & content
```

## i18n conventions

- Default locale is `en`; visiting `/` redirects based on the `Accept-Language` header.
- To add a locale: register it in `src/i18n/routing.ts`, add `messages/<locale>.json`, and update `LocaleSwitcher` labels.
- Translated text uses ICU/rich-text tags (`<gradient>`, `<strong>`, …) rendered via `t.rich`.

## Deploy

Any Node host or Vercel works out of the box. The proxy (`src/proxy.ts`, Next.js 16's middleware) handles locale detection at the edge.
