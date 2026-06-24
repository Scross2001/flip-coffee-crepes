# FLIP Website — Owner's Guide (no coding)

You can update the whole website from your web browser using GitHub. Every time
you save a change, the website automatically rebuilds and goes live in about
1–2 minutes. **This is completely free.**

You'll need a free GitHub account with access to this repository. (Ask whoever
set up the site to invite your email as a collaborator: **Settings → Collaborators**.)

---

## How updating works (the simple version)

1. Open the repository on **github.com**.
2. Find the file you want to change, click the **pencil ✏️ (Edit)** button.
3. Make your change.
4. Scroll down, click the green **Commit changes** button.
5. Wait ~2 minutes — the site updates itself. ✅

You can watch progress under the **Actions** tab (green check = live).

---

## Common tasks

### ➕ Change the menu (items, descriptions, prices, dietary tags)

Edit **`src/content/menu.ts`**. Each item looks like this:

```ts
{
  id: 'biscoff-heaven',
  name: 'Biscoff Heaven',
  description: 'Warm Biscoff spread, crushed cookies, whipped cream.',
  price: '$10.50',
  category: 'Sweet Crepes',
  image: 'images/menu/biscoff-heaven.jpg',
  tags: ['Vegetarian'],
},
```

- **Change a price:** edit the text inside `price: '...'`.
- **Change a description/name:** edit the text inside the quotes.
- **Add an item:** copy a whole `{ ... },` block, paste it, and change the values.
  - `id` must be unique and lowercase-with-dashes.
  - `category` must be exactly one of: `Sweet Crepes`, `Savory Crepes`,
    `Classic Drinks`, `Signature Drinks`, `Lemonades`.
  - `tags` can include `Vegetarian`, `Vegan`, `GF available` (or leave `[]`).
- **Remove an item:** delete its whole `{ ... },` block.

> Keep the quotes `'...'` and commas `,` exactly as shown.

### 🕒 Change hours, address, phone, email, or social links

Edit **`src/content/site.ts`** — change the text inside the quotes. For example
to add a phone number: `phone: '(860) 555-0123',`.

### 🗣️ Change the customer reviews

Edit **`src/content/testimonials.ts`**.

### 🖼️ Add or replace photos

1. Go to the **`public/images/`** folder on GitHub.
2. Click **Add file → Upload files** and drag your photos in.
3. Name them to match the menu (e.g. `menu/biscoff-heaven.jpg`), or use
   `hero.jpg` for the big homepage image and `gallery/1.jpg`…`6.jpg` for the gallery.
4. Commit. (See `public/images/README.md` for the exact names and sizes.)

**Tip:** shrink photos before uploading so the site stays fast — aim for under
~400 KB each. A free tool like squoosh.app works great.

---

## Want a friendlier editor? (optional upgrade)

The steps above are free and need nothing extra. If you'd prefer a visual
admin panel (login + forms instead of editing files), the developer can add
**[Decap CMS](https://decapcms.org)** or **[Sveltia CMS](https://github.com/sveltia/sveltia-cms)**
later — both are free and commit to this same repo. Not required to run the site.

---

## If something looks broken

- Check the **Actions** tab. A red ✗ means a typo broke the build — usually a
  missing quote `'` or comma `,`. Open the file again and fix it.
- The previous version of the site stays live until a build succeeds, so the
  public site won't break from a bad edit.
- Still stuck? Revert: open the file, click **History**, and restore an earlier version.
