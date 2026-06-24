import { doorDashUrl } from '../content/site';
import type { MenuItem } from '../content/menu';
import { asset } from '../lib/asset';

export default function MenuCard({ item }: { item: MenuItem }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-card">
      <div className="aspect-[4/3] overflow-hidden bg-cream">
        {item.image ? (
          <img
            src={asset(item.image)}
            alt={item.name}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center font-serif text-3xl text-espresso/30">
            FLIP
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-lg font-bold text-espresso">{item.name}</h3>
          <span className="whitespace-nowrap font-semibold text-berry">{item.price}</span>
        </div>
        <p className="mt-1 flex-1 text-sm text-charcoal/70">{item.description}</p>

        {item.tags.length > 0 && (
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {item.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-cream px-2.5 py-0.5 text-xs font-medium text-espresso"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}

        <a
          className="btn-outline mt-4 w-full !py-2.5"
          href={doorDashUrl(`menu-${item.id}`)}
          target="_blank"
          rel="noopener noreferrer"
        >
          Add on DoorDash
        </a>
      </div>
    </article>
  );
}
