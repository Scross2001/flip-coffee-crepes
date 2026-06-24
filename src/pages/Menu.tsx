import { useMemo, useState } from 'react';
import Seo from '../components/Seo';
import Reveal from '../components/Reveal';
import MenuCard from '../components/MenuCard';
import { menu, categories, type MenuCategory, type DietaryTag } from '../content/menu';

const dietary: DietaryTag[] = ['Vegetarian', 'Vegan', 'GF available'];
type Sort = 'default' | 'price-asc' | 'price-desc';

const priceNum = (p: string) => Number(p.replace(/[^0-9.]/g, '')) || 0;

export default function Menu() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<MenuCategory | 'All'>('All');
  const [diet, setDiet] = useState<DietaryTag | 'All'>('All');
  const [sort, setSort] = useState<Sort>('default');

  const results = useMemo(() => {
    let items = menu.filter((m) => {
      const matchesQuery = m.name.toLowerCase().includes(query.toLowerCase());
      const matchesCat = category === 'All' || m.category === category;
      const matchesDiet = diet === 'All' || m.tags.includes(diet);
      return matchesQuery && matchesCat && matchesDiet;
    });
    if (sort === 'price-asc') items = [...items].sort((a, b) => priceNum(a.price) - priceNum(b.price));
    if (sort === 'price-desc') items = [...items].sort((a, b) => priceNum(b.price) - priceNum(a.price));
    return items;
  }, [query, category, diet, sort]);

  return (
    <>
      <Seo title="Menu" description="Sweet & savory crepes, specialty coffee, signature drinks and lemonades." />

      <section className="section">
        <Reveal className="text-center">
          <p className="eyebrow">Our menu</p>
          <h1 className="text-4xl font-bold text-espresso md:text-5xl">Crepes &amp; Coffee</h1>
          <p className="mx-auto mt-3 max-w-xl text-charcoal/70">
            Prices may vary — order through DoorDash for the latest availability.
          </p>
        </Reveal>

        {/* Controls */}
        <div className="mt-10 flex flex-col gap-4 rounded-2xl bg-white p-4 shadow-card md:flex-row md:items-center">
          <label className="flex-1">
            <span className="sr-only">Search the menu</span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search crepes & drinks…"
              className="w-full rounded-full border border-cream bg-offwhite px-5 py-3 text-sm outline-none focus:border-berry"
            />
          </label>
          <select
            aria-label="Filter by dietary preference"
            value={diet}
            onChange={(e) => setDiet(e.target.value as DietaryTag | 'All')}
            className="rounded-full border border-cream bg-offwhite px-4 py-3 text-sm"
          >
            <option value="All">All diets</option>
            {dietary.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
          <select
            aria-label="Sort by price"
            value={sort}
            onChange={(e) => setSort(e.target.value as Sort)}
            className="rounded-full border border-cream bg-offwhite px-4 py-3 text-sm"
          >
            <option value="default">Sort: Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>

        {/* Category chips */}
        <div className="mt-6 flex flex-wrap gap-2">
          {(['All', ...categories] as const).map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                category === c ? 'bg-espresso text-cream' : 'bg-cream text-espresso hover:bg-cream/70'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Results */}
        {results.length === 0 ? (
          <p className="mt-16 text-center text-charcoal/60">No items match your filters.</p>
        ) : (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
