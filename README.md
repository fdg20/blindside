# Blindside — Digital Agency Portfolio

A premium, high-conversion portfolio website for Blindside, a digital agency with 11+ years of experience. Built with Vite + React, fully static and deployable via GitHub Pages.

## Features

- **Modern stack**: Vite, React, React Router, Framer Motion
- **Premium design**: Black/white/red color scheme, high contrast, bold typography
- **Fully static**: No backend required, optimized for GitHub Pages
- **Mobile-first**: Responsive across all devices
- **SEO-friendly**: Semantic HTML, meta tags, clean structure
- **Smooth animations**: Scroll-triggered reveals, hover effects

## Install

```bash
npm install
```

## Development

```bash
npm run dev
```

Opens at `http://localhost:5173`

## Build

```bash
npm run build
```

Output goes to `dist/`. The build also creates `404.html` for GitHub Pages SPA routing.

## Deploy to GitHub Pages

### Setup (one-time)

1. Go to **Settings → Pages** in your repo
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**
3. Select branch: **gh-pages** and folder: **/ (root)**
4. Save

### Automatic deployment

The workflow runs on every push to `main`. It builds the site and pushes to the `gh-pages` branch. Your site will be at **https://fdg20.github.io/blindside/**

### Option 2: Manual Deploy

1. Run `npm run build`
2. Push the `dist/` folder to the `gh-pages` branch, or use `gh-pages` package:

```bash
npx gh-pages -d dist
```

### Custom Domain

For a custom domain, remove the `VITE_BASE_PATH` env var from the workflow and configure your domain in GitHub Pages settings.

## Logo

Replace `/public/logo.svg` with your Blindside logo. The header is set up to use it automatically.

## Project Structure

```
blindside/
├── public/
│   └── logo.svg          # Replace with your logo
├── src/
│   ├── components/       # Reusable UI components
│   ├── data/            # Site content (case studies, team, services)
│   ├── pages/           # Page components
│   ├── App.jsx
│   └── main.jsx
├── .github/workflows/    # GitHub Actions deploy
└── scripts/             # Build scripts
```

## License

Private — Blindside Agency
