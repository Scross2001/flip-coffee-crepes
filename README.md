# FLIP Coffee & Crepes — Website

Mobile-first static React site for **FLIP Coffee & Crepes** (Granby, CT).
Built with React 18 + TypeScript + Vite + Tailwind CSS + Framer Motion, and
auto-deployed to **GitHub Pages** via **GitHub Actions** on every push.

- Premium crepes (sweet & savory), specialty coffee, signature drinks
- Order CTAs link to DoorDash (with UTM tracking)
- SEO meta + Schema.org `Restaurant`, accessible (WCAG-minded), fast

> Non-technical owner? See **[OWNER-GUIDE.md](OWNER-GUIDE.md)** to update the
> menu, photos, hours, and text from your browser — no coding needed.

## Tech stack

| Concern        | Choice                                    |
| -------------- | ----------------------------------------- |
| Framework      | React 18 + TypeScript                     |
| Build tool     | Vite                                      |
| Styling        | Tailwind CSS                              |
| Animations     | Framer Motion                             |
| Routing        | React Router (HashRouter, Pages-friendly) |
| Forms          | React Hook Form + Formspree (free)        |
| SEO            | react-helmet-async                        |
| Hosting        | GitHub Pages                              |
| CI/CD          | GitHub Actions                            |

## Local development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## First-time deploy (one-time setup)

1. Create a GitHub repository and push this project to the `main` branch.
2. In the repo: **Settings → Pages → Build and deployment → Source = GitHub Actions**.
3. Push to `main` (or run the **Deploy to GitHub Pages** workflow manually).
   The Action builds the site and publishes it.
4. Your site is live at `https://<your-username>.github.io/<repo-name>/`.

The workflow ([.github/workflows/deploy.yml](.github/workflows/deploy.yml))
automatically sets the correct base path from the repo name, so links and
images resolve under `/<repo-name>/`.

### Custom domain (optional)

Add your domain in **Settings → Pages → Custom domain**, create a file
`public/CNAME` containing the domain, and set `VITE_BASE` to `/` (edit the
`env:` in the workflow, or remove it) so assets load from the root.

## Project structure

```
src/
  content/      # ← EDIT HERE: menu.ts, site.ts, testimonials.ts (text, prices, links)
  components/   # Navbar, Footer, MenuCard, Reveal, Seo
  pages/        # Home, Menu, About, Location, Gallery, Contact, NotFound
  lib/asset.ts  # resolves /public image paths under the Pages base path
public/
  images/       # ← ADD PHOTOS HERE (see public/images/README.md)
.github/workflows/deploy.yml  # CI/CD
```

## Contact form (free)

The contact form posts to [Formspree](https://formspree.io) (free tier).
Create a form, then set `FORMSPREE_ID` in [src/pages/Contact.tsx](src/pages/Contact.tsx).
Until then, submissions won't be delivered.

## Things to finalize

- [ ] Add real photos to `public/images/` (hero, menu items, gallery, og-image)
- [ ] Confirm menu prices against DoorDash in `src/content/menu.ts`
- [ ] Add phone number in `src/content/site.ts`
- [ ] Set the real email + Formspree form id
