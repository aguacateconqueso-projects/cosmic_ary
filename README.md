# CosmicAry — Ariana Del Rosario

Landing page for **CosmicAry / Awakening Academy** — a transformation & manifestation school.
Single-page scroll experience with a seeded starfield, a scroll-driven background
transition (cosmos → cream), and reveal-on-scroll sections.

Built as a zero-dependency static site (HTML + CSS + vanilla JS), ready to deploy on Vercel.

## Structure

```
index.html          Markup for all sections (hero, academy, stories, free door, footer)
styles.css          Design system: palette, type (Fraunces + Inter), layout
main.js             Starfield canvas, scroll color transition, smooth-scroll, reveals
vercel.json         Static hosting config (clean URLs, headers, caching)
design/             Original Claude Design source (.dc.html) for reference
```

## Develop locally

No build step. Serve the folder with any static server:

```bash
npx serve .
# or
python3 -m http.server 3000
```

Then open http://localhost:3000

## Deploy to Vercel

This is a pure static site — no framework preset needed.

- **Via dashboard:** import the repo at [vercel.com/new](https://vercel.com/new). Framework preset: **Other**. No build command, output directory `.`
- **Via CLI:**

  ```bash
  npm i -g vercel
  vercel        # preview
  vercel --prod # production
  ```

## Adding Ariana's photo

The hero portrait is a styled placeholder (`.image-slot` in `index.html`).
Drop the real image in by replacing the slot contents with:

```html
<img src="./ariana.jpg" alt="Ariana Del Rosario" style="width:100%;height:100%;object-fit:cover;">
```

## Design source

Generated from the Claude Design project **CosmicAry demo**
(`CosmicAry Demo.dc.html`). The original component format uses the Claude Design
runtime; this repo is the portable, framework-free implementation of it.
