# manaram-farms

Next-generation website for [Manaram Farm](https://manaram.farm).

## Development

```bash
npm install
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Deploy (Cloudflare)

This site is a **Worker with static assets** (not Pages). Config: `wrangler.jsonc`.

1. Build the app: `npm run build`
2. Deploy: `npx wrangler deploy`

The worker serves the Vite `dist/` output with SPA routing.

## Structure

- `src/` — React app (pages, components, data)
- `public/` — static assets (images, video, product catalog media)
- `wrangler.jsonc` — Cloudflare Worker static assets config
