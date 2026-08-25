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

The production site is deployed to Cloudflare Workers at
`https://ironnest.guide`. Google Analytics is enabled when this variable is
configured for the production build:

```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

The Worker name, custom domain, canonical site URL, and compatibility settings
are versioned in `wrangler.jsonc`. Build and deploy with:

```bash
pnpm deploy
```

## Source policy

Facts are checked against official game pages and clearly marked as confirmed, version-sensitive, or field-test material. This is an independent fan project and is not affiliated with the game's developers or publishers.
