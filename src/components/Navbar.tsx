import { useState } from 'react';
import { doorDashUrl } from '../content/site';

const navItems = [
  { href: '#menu', label: 'Menu' },
  { href: '#about', label: 'About' },
  { href: '#location', label: 'Location' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-cream/60 bg-offwhite/90 backdrop-blur">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3"
        aria-label="Main"
      >
        <a href="#top" className="font-serif text-2xl font-bold text-espresso">
          FLIP<span className="text-berry">.</span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm font-semibold text-charcoal transition hover:text-berry"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              className="btn-accent !min-h-0 !px-5 !py-2 text-sm"
              href={doorDashUrl('nav')}
              target="_blank"
              rel="noopener noreferrer"
            >
              Order Now
            </a>
          </li>
        </ul>

        <button
          className="md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-0.5 w-7 bg-espresso" />
          <span className="mt-1.5 block h-0.5 w-7 bg-espresso" />
          <span className="mt-1.5 block h-0.5 w-7 bg-espresso" />
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-cream/60 px-5 pb-4 md:hidden">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-base font-semibold text-charcoal"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              className="btn-accent w-full"
              href={doorDashUrl('nav-mobile')}
              target="_blank"
              rel="noopener noreferrer"
            >
              Order on DoorDash
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
