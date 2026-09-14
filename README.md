# Personal site

Next.js 15 (App Router) + TypeScript + Tailwind v4. Static, one page, no database.

## Run it locally

```bash
npm install
npm run dev      # http://localhost:3000
```

## Edit the content

Everything you'd want to change lives in **`src/content/site.ts`** — your name,
links, about copy, experience, projects, and skills. You shouldn't need to touch
the components to keep the site current.

Search that file for `TODO`. There's one left:

1. **Headshot** — drop a photo into `/public` and set `site.photo` to
   `"/me.jpg"`. Until you do, a dashed placeholder tile shows in the hero.

`public/resume.pdf` and `public/transcript.pdf` are already in place — the
résumé is linked from the nav button and the Contact section, the transcript
from the education line under Experience. Replace those two files whenever you
update either document and the links stay the same.

Note that everything in `/public` ships with the deploy and is fetchable by
anyone with the URL, linked or not.

## Change the color

One line. In `src/app/globals.css`, the `@theme` block starts with:

```css
--color-accent: #c2622f;      /* warm clay — buttons, links, section numbers */
--color-accent-dim: #9c4d22;
--color-accent-soft: #f6ebe1;
```

`--color-violet` / `--color-cyan` / `--color-rose` / `--color-blue` are the
per-entity colors — each company and project owns one, shown as the small dot
next to its name. Surface colors (`--color-bg`, `--color-panel`, `--color-line`)
are in the same block.

Type is Newsreader (serif, for the name and headings) and Inter (everything
else), both loaded from Google Fonts in `layout.tsx`.

## Deploy to Vercel

```bash
git init
git add .
git commit -m "Initial commit"
gh repo create will-portfolio --public --source=. --push
```

Then at [vercel.com/new](https://vercel.com/new), import the repo. Vercel detects
Next.js and needs no configuration — you'll be live at
`will-portfolio.vercel.app` in about a minute. Rename the project in Vercel's
settings for a different subdomain, or add a custom domain there.

Every push to `main` redeploys automatically.

## Structure

```
src/
  app/
    layout.tsx      metadata, fonts
    page.tsx        the whole page
    globals.css     theme tokens + grid background + cursor blink
  components/
    Nav.tsx         sticky nav with scroll-spy
    Section.tsx     numbered section header
  content/
    site.ts         ← all content lives here
```

Section 04 is **Skills** (David's site has Certifications there). If you pass the
AWS cert you were considering, that slot is the natural place for it.
