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

The build output is generated in `docs/` so it can be served directly by GitHub Pages.

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
4. Select the `main` branch and the `/docs` folder, then click **Save**.
5. GitHub Pages will publish at `https://USERNAME.github.io/midnight_luxery.io/`.

The included workflow validates every push and pull request with `npm run build`; the generated `docs/` folder is committed to the branch for the **Deploy from a branch** setup. It does not use Vercel, Netlify, Firebase, or another hosting provider.

## Actions

`.github/workflows/build.yml` checks out the repository, installs dependencies with `npm ci`, and runs the production build on pushes to `main` or `master` and on pull requests.
