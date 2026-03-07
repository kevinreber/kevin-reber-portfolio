# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**kevin-reber-portfolio** is Kevin Reber's personal portfolio website, built with React 17 and TypeScript using Create React App. It showcases projects, skills, and professional experience.

Live site: [kevinreber.dev](https://www.kevinreber.dev/)
Hosted on: Netlify

## Tech Stack

- **React 17** with **TypeScript**
- **Create React App** (react-scripts 5) — no eject
- **Material-UI v4** — component library
- **CSS** — global styles in `App.css`
- **Testing Library** — unit tests

## Project Structure

```
kevin-reber-portfolio/
├── src/
│   ├── App.tsx               # Root component
│   ├── App.css               # Global styles
│   ├── data.ts               # Portfolio content data
│   ├── index.tsx             # App entry point
│   ├── components/           # React components
│   ├── hero/                 # Hero section assets
│   ├── demos/                # Project demo images/videos
│   ├── icons/                # Custom SVG icons
│   └── resume/               # Resume files
├── public/                   # Static assets
│   ├── index.html
│   └── *.js                  # Legacy JS (navbar, layout)
├── archives/                 # Previous portfolio versions
├── package.json
└── tsconfig.json
```

## Development Commands

```bash
npm start      # Start development server (http://localhost:3000)
npm run build  # Production build to build/
npm test       # Run tests in watch mode
```

## Code Conventions

### TypeScript

- Strict mode enabled (see `tsconfig.json`)
- Use functional components with hooks
- Define interfaces for component props

### Styling

- Global styles in `src/App.css`
- Material-UI `makeStyles` or `sx` prop for component-level styles
- Dark/light mode color palette documented in README.md

### Content Updates

Portfolio content (projects, skills, experience) lives in `src/data.ts` — update here for most content changes.

## Deployment

Deployed automatically to Netlify on push to `master` branch.

Build command: `npm run build`
Publish directory: `build/`

[![Netlify Status](https://api.netlify.com/api/v1/badges/51f71093-4bbf-49b3-a911-3b7da58df2ea/deploy-status)](https://app.netlify.com/sites/sharp-booth-38c30b/deploys)

## Adding New Content

1. **New project**: Add to `src/data.ts` projects array
2. **New demo image**: Add to `src/demos/` and reference in `data.ts`
3. **Resume update**: Replace file in `src/resume/`

## Pull Request Workflow

Before pushing, run:

```bash
npm run build   # Ensure production build succeeds
npm test -- --watchAll=false  # Run tests once (non-watch)
```

### Automated Hooks

Claude Code hooks (`.claude/settings.json`) automatically:
- Run `npm run build` to catch build errors before committing
- Run TypeScript type checking after editing `.tsx/.ts` files
