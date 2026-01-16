# Copilot Instructions for Portfolio Project

## Project Overview
This is a **Next.js 16 portfolio application** using the App Router with TypeScript, Tailwind CSS v4, and React 19. The project is a bootstrap template with minimal customization currently—edit [app/page.tsx](app/page.tsx) and [app/layout.tsx](app/layout.tsx) to build the actual portfolio.

## Architecture & Key Files

### Core Structure
- **App Router**: Pages and layouts live in the `app/` directory; default route is `app/page.tsx`
- **Layout hierarchy**: [app/layout.tsx](app/layout.tsx) wraps all pages, defines metadata, and includes custom fonts (Geist Sans/Mono from Google Fonts)
- **Styling**: Tailwind CSS v4 configured via [postcss.config.mjs](postcss.config.mjs); CSS variables in [app/globals.css](app/globals.css) support light/dark theming
- **Config**: [tsconfig.json](tsconfig.json) includes `@/*` path alias for root imports; [eslint.config.mjs](eslint.config.mjs) extends Next.js core web vitals + TypeScript rules

### Key Dependencies
- **next** (16.1.2): Framework with built-in image optimization, font loading
- **react** (19.2.3), **react-dom** (19.2.3): UI library with latest features
- **tailwindcss** (4): Utility-first CSS; uses `@import "tailwindcss"` directive in globals.css
- **typescript** (5): Full type safety required

## Development Workflows

### Run Development Server
```bash
pnpm dev
```
Starts hot-reload dev server on http://localhost:3000. Edit [app/page.tsx](app/page.tsx) to see changes immediately.

### Build for Production
```bash
pnpm build && pnpm start
```

### Linting
```bash
pnpm lint
```
Enforces Next.js core web vitals + TypeScript rules. Fix automatically when possible.

### Package Manager
Project uses **pnpm** (see `pnpm-lock.yaml` and `pnpm-workspace.yaml`). Always run `pnpm install` and `pnpm add` instead of npm/yarn.

## Patterns & Conventions

### Component Structure
- All pages are Server Components by default (RSC pattern)
- Use `"use client"` directive at the top of files only when client-side features (state, events) are needed
- Export default component function from pages/layouts

### CSS & Theming
- **Tailwind classes**: Use utility classes directly (e.g., `bg-zinc-50 dark:bg-black`)
- **CSS Variables**: Custom colors/fonts defined in `:root` of [app/globals.css](app/globals.css); respect dark mode with `@media (prefers-color-scheme: dark)`
- **Font variables**: `--font-geist-sans` and `--font-geist-mono` injected via `layout.tsx` and applied to body

### TypeScript
- Use `Readonly<{}>` for layout children props (see [app/layout.tsx](app/layout.tsx) pattern)
- Strict mode enabled; all implicit `any` types forbidden
- Path imports use `@/` prefix (e.g., `@/app/components/Button`)

### Images
- Use `next/image` `Image` component for optimization (responsive, lazy-loading); set `priority` for above-fold images
- Store images in `public/` directory

## Integration Points & External Dependencies

### External Services
- **Vercel Platform**: Default deployment target; templates/docs linked in boilerplate suggest Vercel as primary hosting
- **Google Fonts**: Fonts loaded via `next/font/google` in layout (Geist family)

### Build & Deploy
- **Next.js Deployment**: Use `next build` output (`out/` or `.next/`); `.next/` excluded from linting
- Next.js handles automatic static/dynamic rendering—no manual cache configuration needed unless custom route handlers added

## Notes for Contributors
- This is a fresh scaffold; meaningful portfolio content should be added to [app/page.tsx](app/page.tsx)
- Dark mode support is baked in via CSS variables; test with `prefers-color-scheme` browser setting
- All dependencies are pinned to specific versions in `pnpm-lock.yaml` for consistency
- ESLint checks TypeScript + Next.js best practices; run `pnpm lint` before commits
