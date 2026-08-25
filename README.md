# IRON NEST Operator Manual

An independent, source-led guide site for **IRON NEST: Heavy Turret Simulator**. It organizes beginner training, ballistics, mission notes, ammunition references, save guidance, and PC setup help into a three-level structure: homepage, guide index, and individual field manuals.

## Local development

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
pnpm lint
pnpm build
```

## Production setup

The project supports the existing Cloudflare/Vinext build and a native Next.js
build on Vercel. Before the production deployment, configure:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.example
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

`NEXT_PUBLIC_SITE_URL` is used for canonical URLs, Open Graph metadata,
`robots.txt`, and `sitemap.xml`. On Vercel it can be omitted until a custom
domain is attached because the production deployment URL is detected
automatically.

## Source policy

Facts are checked against official game pages and clearly marked as confirmed, version-sensitive, or field-test material. This is an independent fan project and is not affiliated with the game's developers or publishers.
