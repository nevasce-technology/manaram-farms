# manaram-farms

Next-generation website concept for [Manaram Farm](https://manaram.farm).

## Preview

Open the homepage wireframe locally:

```bash
cd wireframes
python3 -m http.server 5173
```

Then visit [http://localhost:5173/](http://localhost:5173/) or [http://localhost:5173/homepage.html](http://localhost:5173/homepage.html).

## Deploy (Cloudflare)

This site is a **Worker with static assets** (not Pages). Config: `wrangler.jsonc`.

Live URL looks like: `https://manaram-farms.<account>.workers.dev`  
(`*.pages.dev` is a different product — only works if you create a separate Pages project.)

1. Push to `main` (Cloudflare Git deploy runs `npx wrangler deploy`).
2. Assets directory must be `./wireframes` (the whole site, not only `wireframes/assets`).
3. Root `/` serves `wireframes/index.html`.

Local deploy (optional):

```bash
npx wrangler deploy
```

## Structure

- `wireframes/index.html` — site entry (Cloudflare `/`)
- `wireframes/homepage.html` — same homepage concept
- `wireframes/*.css` / `*.js` — styles and interactions
- `wireframes/assets/` — images and brand logo
- `wrangler.jsonc` — Cloudflare Worker static assets config
