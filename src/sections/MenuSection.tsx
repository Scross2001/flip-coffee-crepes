import Reveal from '../components/Reveal';
import { doorDashUrl } from '../content/site';
import { asset } from '../lib/asset';

// The menu is provided as image files. Drop them in public/images/menu/
// as menu-1.png … menu-4.png (any order). Add/remove entries to match.
const menuImages = ['menu-1.png', 'menu-2.png', 'menu-3.png', 'menu-4.png'];

export default function MenuSection() {
  return (
    <section id="menu" className="anchor bg-cream/40">
      <div className="section">
        <Reveal className="text-center">
          <p className="eyebrow">Our menu</p>
          <h2 className="text-4xl font-bold text-espresso md:text-5xl">Crepes &amp; Coffee</h2>
          <p className="mx-auto mt-3 max-w-xl text-charcoal/70">
            Sweet &amp; savory crepes, specialty coffee, and signature drinks. Tap a menu to view it
            full size, or order online for the latest prices.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {menuImages.map((file, i) => (
            <Reveal key={file} delay={(i % 2) * 0.08}>
              <a
                href={asset(`images/menu/${file}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden rounded-2xl bg-white shadow-card"
                aria-label={`View menu page ${i + 1} full size`}
              >
                <img
                  src={asset(`images/menu/${file}`)}
                  alt={`FLIP menu page ${i + 1}`}
                  loading="lazy"
                  className="w-full transition duration-500 hover:scale-[1.02]"
                />
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a className="btn-accent" href={doorDashUrl('menu-section')} target="_blank" rel="noopener noreferrer">
            Order on DoorDash
          </a>
        </div>
      </div>
    </section>
  );
}
