# Aegisfront

Single-page marketing site for a long-endurance hybrid-electric defense multicopter. The layout is a pixel-faithful recreation of the design in `image.png`: pill nav, oversized headline, drone sitting on a landscape photo, technology stats, and the Perimeter 8 feature field.

## Stack

- [Vite](https://vitejs.dev/) 5
- React 18
- Plain CSS (no UI library, no animation library)
- [Outfit](https://fonts.google.com/specimen/Outfit) from Google Fonts
- pnpm

Copy lives in `src/data/content.js`. Components only render it.

## How it was built

### 1. Match the comp with one scale unit

The reference screenshot is treated as a 736px-wide design. Every size in `src/styles/global.css` is written in those design pixels and multiplied by `--u`:

```css
--u: clamp(0.6px, 0.1359vw, 2.6px);
```

`0.1359vw` is `100 / 736`, so at a 736px viewport one unit is 1px and the page lines up with the comp. The clamp stops type from collapsing on small screens and from blowing up on ultrawide monitors. Below 760px, `--u` switches to `100vw / 400` and the layout stacks.

### 2. Split the page into three sections

`src/App.jsx` renders only:

| Section | File | What it does |
|---|---|---|
| Nav | `src/components/Navbar.jsx` | Brand, links, yellow “Request a call” |
| Hero | `src/components/Hero.jsx` | Headline, watch-video, about copy, drone stage, reviews card |
| Technology | `src/components/Technology.jsx` | Hybrid power copy and four stat cards |
| Perimeter | `src/components/Perimeter.jsx` | Front-view drone over the split ground, with five feature chips |

Icons are inline SVGs in `src/components/Icon.jsx`. There is no router. Nav links are in-page anchors (`#technology`, `#perimeter`).

### 3. Lock the drone to the photo with aspect ratio

The hard part of the comp is the drone straddling the top edge of the photo. Both stages use a fixed `aspect-ratio` so that relationship holds at any width:

- **Hero** (`aspect-ratio: 2.89`). The landscape fills the bottom 75%. The drone is 58% wide and pinned to the top of the stage, so its vertical middle lands on the photo edge. Yellow arcs sit behind the drone as an SVG.
- **Perimeter** (`aspect-ratio: 2.42`). Same idea: ground is the bottom 75%, drone is 64% wide and pinned to the top, so the legs sit inside the photo.

Feature chips are absolutely positioned with `--x` and `--y` percentages from `content.js`, so they stay on the same spots as the art scales. On small screens the field drops the aspect ratio and the chips become a normal stack.

### 4. Motion without a library

- **Reveal.** `useReveal` watches an element with `IntersectionObserver` and adds `.in` once. `Reveal.jsx` applies that plus a `--d` delay so cards stagger.
- **Parallax.** `useScrollVar` writes `window.scrollY` to `--sy` on `<html>` (throttled with `requestAnimationFrame`). The hero drone moves with `translate3d(0, calc(var(--sy) * 0.06px), 0)`. The perimeter drone moves the other way, slower.
- **Loops.** CSS keyframes: Ken Burns on the hero photo, a slow drift on the ground photo, a hover bob on both drones, and a sun glow. `prefers-reduced-motion: reduce` turns all of that off.

### 5. Assets

Photos and cut-out drones live in `public/assets` and are referenced by URL (`/assets/hero-drone.png`, and so on). Missing reviewer avatars fall back to a grey circle via an `onerror` class. Exact filenames, sizes, and the optional video / OG image are listed in `ASSETS.md`.

`image.png` in the repo root is the design the page was built against. It is not served by the site.

## Project layout

```
index.html              Vite entry, font, meta
vite.config.js          React plugin, dev server on port 3000
image.png               Design reference
ASSETS.md               Asset spec
public/assets/          Logo, hero, perimeter art
src/main.jsx            React mount
src/App.jsx             Page composition
src/data/content.js     All copy and chip positions
src/components/         Navbar, Hero, Technology, Perimeter, cards, icons
src/hooks/              Scroll variable and reveal observer
src/styles/global.css   Tokens, layout, motion
```

## Run

```bash
pnpm install
pnpm dev
```

Dev server is `http://localhost:3000` (`host: true`, so it is also reachable on the LAN). Port is strict: if 3000 is taken, Vite exits instead of picking another port.

```bash
pnpm build      # output in dist/
pnpm preview    # serve the production build on port 3000
```

## Edit the site

- Copy, stats, chip text, and chip positions: `src/data/content.js`
- Colors, type scale, spacing, stage geometry: `src/styles/global.css` (`--yellow`, `--u`, the `.hero-stage` / `.field` blocks)
- Swap art by dropping files into `public/assets` with the names in `ASSETS.md`
