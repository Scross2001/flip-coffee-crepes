import Reveal from '../components/Reveal';
import { doorDashUrl } from '../content/site';
import { asset } from '../lib/asset';

// Priority menu boards — shown first, loaded eagerly.
const mainMenus = [
  { file: 'flip_main_coffee_and_matcha.png', label: 'Coffee & Matcha menu' },
  { file: 'flips_main_sweet_crepes.png', label: 'Sweet Crepes menu' },
  { file: 'flip_main_savory_crepes.png', label: 'Savory Crepes menu' },
];

// Secondary boards — revealed further down the page.
const moreMenus = [
  { file: 'flip_signature_coffee.png', label: 'Signature Coffee menu' },
  { file: 'flip_classic_coffee.png', label: 'Classic Coffee menu' },
  { file: 'flip_matcha.png', label: 'Matcha menu' },
  { file: 'flip_matcha_specialty.png', label: 'Specialty Matcha menu' },
  { file: 'flip_lemonades.png', label: 'Lemonades menu' },
];

function MenuBoard({ file, label, eager }: { file: string; label: string; eager?: boolean }) {
  const src = asset(`images/menu/${file}`);
  return (
    <a
      href={src}
      target="_blank"
      rel="noopener noreferrer"
      className="block overflow-hidden rounded-2xl bg-white shadow-card"
      aria-label={`View ${label} full size`}
    >
      <img
        src={src}
        alt={label}
        loading={eager ? 'eager' : 'lazy'}
        className="w-full transition duration-500 hover:scale-[1.02]"
      />
    </a>
  );
}

export default function MenuSection() {
  return (
    <section id="menu" className="anchor bg-cream/40">
      <div className="section">
        <Reveal className="text-center">
          <p className="eyebrow">Our menu</p>
          <h2 className="text-4xl font-bold text-espresso md:text-5xl">Crepes, Coffee &amp; More</h2>
          <p className="mx-auto mt-3 max-w-xl text-charcoal/70">
            Tap any menu to view it full size, or order online for the latest availability.
          </p>
        </Reveal>

        {/* Priority boards */}
        <div className="mt-12 space-y-6">
          {mainMenus.map((m, i) => (
            <Reveal key={m.file} delay={i * 0.06}>
              <MenuBoard {...m} eager={i === 0} />
            </Reveal>
          ))}
        </div>

        {/* Secondary boards, further down */}
        <Reveal className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-espresso md:text-3xl">More from the menu</h3>
        </Reveal>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {moreMenus.map((m, i) => (
            <Reveal key={m.file} delay={(i % 2) * 0.06}>
              <MenuBoard {...m} />
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
