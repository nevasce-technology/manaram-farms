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

This site is static HTML in `wireframes/`. Config lives in `wrangler.toml`.

1. Commit and push `wrangler.toml` + `wireframes/index.html` (and latest wireframe changes).
2. In Cloudflare → Workers & Pages → your project → **Settings**:
   - **Deploy command:** `npx wrangler deploy`
   - Leave build command empty (no npm build needed).
3. Redeploy. Root `/` serves `wireframes/index.html`.

Local deploy (optional):

```bash
npx wrangler deploy
```

## Structure

- `wireframes/index.html` — site entry (Cloudflare `/`)
- `wireframes/homepage.html` — same homepage concept
- `wireframes/*.css` / `*.js` — styles and interactions
- `wireframes/assets/` — images and brand logo
- `wrangler.toml` — Cloudflare static assets config
