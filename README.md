# DeskaTech

A curated marketplace for pre-owned phones, laptops, and audio. Hand-inspected, honestly graded, fairly priced.

## Project Structure

```
DeskaTech/
├── index.html              # Main entry point
├── css/
│   └── styles.css          # Full stylesheet (light + dark themes)
├── js/
│   └── app.js              # Application logic (products, cart, bids, filters)
├── assets/
│   ├── icons/              # SVG icons (placeholder)
│   └── images/             # Product images (placeholder)
└── README.md
```

## Features

- **Dark / Light mode** — toggle in header, persists via localStorage, respects system preference
- **Product catalogue** — 8 products across Phones, Laptops, Tablets, Audio
- **Live auctions** — real-time countdown timers, bid placement with history
- **Buy-now flow** — add to cart, quantity, subtotal/tax/total
- **Filter & sort** — category pills, listing-type filters
- **Product detail modal** — specs table, gallery thumbnails, trust badges
- **Cart drawer** — slide-in from right, full checkout summary
- **Wishlist** — heart toggle with fill animation
- **Scroll reveal** — staggered fade-in on intersection
- **Responsive** — breakpoints at 1024px and 640px

## Tech Stack

- **HTML5** — semantic markup, ARIA labels
- **CSS3** — CSS custom properties, `color-mix()`, `backdrop-filter`, grid, flexbox
- **Vanilla JS** — no framework dependencies
- **Fonts** — Fraunces (serif), Inter Tight (sans), JetBrains Mono (mono) via Google Fonts

## Running Locally

Open `index.html` in any modern browser. No build step required.

```bash
# Or use a local server:
npx serve .
# or
python3 -m http.server 8000
```

## Design System

| Token         | Light            | Dark             |
|---------------|------------------|------------------|
| `--bg`        | #FAFAF7          | #0E0E0D          |
| `--ink`       | #111111          | #F2F2EE          |
| `--accent`    | #C8412B          | #E8593F          |
| `--card`      | #FFFFFF          | #161614          |

## License

MIT
