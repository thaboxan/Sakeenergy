# Sake Energy Solutions — Website

Marketing website for **Sake Energy Solutions**, an industrial automation and renewable energy engineering company operating across South Africa and the wider African continent. Built as a fast, single-page React application with client-side routing, SEO metadata, and a responsive UI.

**Live site:** https://www.sakeenergy.co.za

## Tech Stack

- **[React 18](https://react.dev/)** — UI library
- **[Vite 5](https://vitejs.dev/)** — dev server & build tool
- **[React Router 6](https://reactrouter.com/)** — client-side routing
- **[react-helmet-async](https://github.com/staylor/react-helmet-async)** — per-page `<head>` / SEO tag management
- Plain CSS (no framework) — one stylesheet per page/component

## Project Structure

```
index.html                # HTML shell / entry point
vite.config.js            # Vite + React plugin config
public/                   # Static files served as-is (favicon, robots.txt, sitemap.xml, OG image)
src/
  main.jsx                # React root render
  App.jsx                 # Router setup, layout (Navbar + routed page + Footer)
  index.css                # Global styles, CSS variables, utility classes
  components/
    Navbar.jsx / .css      # Site header + responsive/mobile nav menu
    Footer.jsx / .css      # Site footer
    ScrollToTop.jsx        # Resets scroll position on route change
    SEO.jsx                 # <Helmet> wrapper — title, meta description, canonical, Open Graph/Twitter tags
  pages/
    Home.jsx / .css         # Landing page (hero, services, process, clients, CTA)
    About.jsx / .css        # Company/about page
    Solutions.jsx / .css    # Services/solutions listing page
    Contact.jsx / .css      # Contact page
  assets/                  # Images and logos (company logo, client/partner logos, etc.)
```

## Routes

| Path         | Page                     |
| ------------ | ------------------------ |
| `/`          | Home                     |
| `/about`     | About                    |
| `/solutions` | Solutions                |
| `/contact`   | Contact                  |

Routing is fully client-side (React Router). See [Deployment](#deployment) for the server config needed to support this.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ and npm

### Install

```bash
npm install
```

### Run the dev server

```bash
npm run dev
```

Starts Vite at `http://localhost:5173` (or the next free port) with hot module reloading.

### Build for production

```bash
npm run build
```

Outputs a static, production-ready build to `dist/`.

### Preview the production build locally

```bash
npm run preview
```

## Key Features

- **Responsive navigation** — desktop horizontal nav collapses into a full-screen mobile menu at ≤1024px (tablet + mobile), with equal-width aligned links and a working open/close toggle.
- **SEO** — every page renders its own `<title>`, meta description, canonical URL, and Open Graph/Twitter card tags via the `SEO` component. The Open Graph/Twitter preview image is the company logo (`public/logo-og.png`).
- **Services showcase** — photo-based service cards (Industrial Automation, Renewable Energy, Condition Monitoring, EPC & Project Management, Valve Supply & Repair, Instrument Testing) with a floating icon badge.
- **Client/partner logos** — self-hosted SVG logos (Sasol, Anglo American, Eskom, ArcelorMittal, Transnet) shown greyed-out by default, revealing full color and scaling up slightly on hover. Any client without a supplied logo file automatically falls back to a styled text badge.

## Adding/Updating a Client Logo

1. Drop the logo file (prefer SVG) into `src/assets/`.
2. Import it and add it to the `clients` array in `src/pages/Home.jsx`:
   ```js
   import newClientLogo from '../assets/new-client.svg'
   // ...
   const clients = [
     // ...
     { name: 'New Client', logo: newClientLogo },
   ]
   ```
3. If the logo appears too small/oddly cropped, check its SVG `viewBox` — it should tightly match the actual artwork's bounding box (open the file in a browser and run `document.querySelector('svg').getBBox()` in devtools to check).
4. No `logo` field? The client name renders as a styled text badge instead — no broken images.

## Deployment

This is a static single-page app — any static host works (e.g. Netlify, Vercel, Cloudflare Pages, S3+CloudFront, or a plain web server).

**Important:** because routing is handled client-side, the server must be configured to serve `index.html` for all unknown paths (a SPA fallback/rewrite rule), otherwise direct links like `/about` will 404 on a hard refresh.

## Linting / Code Style

No linter is currently configured. Follow the existing conventions in the codebase:
- One CSS file per component/page, imported directly into its `.jsx` file.
- Shared/global styles and CSS variables live in `src/index.css`.
