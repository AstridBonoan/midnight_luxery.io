# NOIR & NEAT

A polished frontend-only mobile bartending services demo for weddings, private parties, corporate events, and celebrations.

## Built with

- React 19
- Vite
- Tailwind CSS 4
- Lucide React
- Unsplash-hosted photography

The booking form and FAQ accordion are powered entirely by React state. No backend, database, authentication, payment processing, or booking API is included.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

The build output is generated in `docs/`. The GitHub Actions workflow publishes that output to the root of the `gh-pages` branch.

## GitHub Pages

This repository is configured for the GitHub Pages repository `midnight_luxery.io`. Vite uses `/midnight_luxery.io/` as its default production base path in `vite.config.js`.

If the repository name changes, update the fallback value in `vite.config.js`:

```js
base: process.env.VITE_BASE_PATH || '/YOUR-REPOSITORY-NAME/',
```

You can also override it with `VITE_BASE_PATH=/your-repository/ npm run build`.

To enable Pages:

1. Push the repository to GitHub.
2. Open **Settings > Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Select the `gh-pages` branch and the `/ (root)` folder, then click **Save**.
5. GitHub Pages will publish at `https://USERNAME.github.io/midnight_luxery.io/`.

The included workflow validates pull requests with `npm run build` and, on every push to `main`, publishes the generated `docs/` contents to `gh-pages`. It does not use Vercel, Netlify, Firebase, or another hosting provider.

## Actions

`.github/workflows/build.yml` checks out the repository, installs dependencies with `npm ci`, runs the production build, and publishes to `gh-pages` on pushes to `main`. Pull requests run the build without publishing.
