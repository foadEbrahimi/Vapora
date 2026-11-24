# Vapora

A Persian, RTL storefront for a Tehran vape counter. Built with Next.js App Router,
TypeScript and Tailwind CSS v4.

The home page is designed as a late-night specialty counter: one lit device in the
window, a six-shelf menu with a sticky preview, real customer words, and a visit
card with the actual address and hours. The visual system is warm charcoal and
paper with a single amber accent. See [DESIGN.md](./DESIGN.md) for the concept and
the accessibility and motion decisions.

**Live demo:** [vapora.pepedemo.ir](https://vapora.pepedemo.ir/)

## Stack

- Next.js 16 (App Router, static pages)
- React 19 and TypeScript
- Tailwind CSS v4 with CSS custom properties
- GSAP for the hero entrance and section reveals
- OGL for the optional dark-mode vapor shader
- Self-hosted Vazirmatn and Estedad variable fonts

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

The production server defaults to port 3000; pass `-p 4400` to `next start` to use
another port.

## Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm start` | Production server |
| `npm run lint` | ESLint |
| `npm run images` | Rebuild the WebP home assets and the OG card from the source photos |

`npm run images` requires the source images that were used to prepare
`public/home/`; if they are not in the repo, replace the files in `public/home/`
with final photography at the same aspect ratios.

## Content

Shop details live in `src/data/site.ts` and the home menu, facts and review
selection live in `src/data/home.ts`. The phone number, address and domain are
placeholders for launch and should be replaced with the shop's real details.

The contact form on `/contact` is still client-side only; it does not send
messages to a service.

## Structure

```text
src/app/                 pages, layout, metadata, sitemap, robots
src/components/          shared header, footer, theme and UI primitives
src/components/home/     hero, vapor shader, menu, people, visit
src/data/                shop and home content
src/lib/hours.ts         Tehran opening-hours logic
public/fonts/            self-hosted variable font subsets
public/home/             optimized WebP photography
scripts/                 image preparation and browser QA helpers
```

## License

MIT. See [LICENSE](./LICENSE).
