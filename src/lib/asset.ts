// Resolve a public asset path against Vite's base URL so images work both
// at the site root and under a GitHub Pages /<repo>/ subpath.
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL; // ends with '/'
  return `${base}${path.replace(/^\//, '')}`;
}
