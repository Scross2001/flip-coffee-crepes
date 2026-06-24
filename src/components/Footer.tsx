import { site, doorDashUrl } from '../content/site';

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl font-bold">
            FLIP<span className="text-berry">.</span>
          </p>
          <p className="mt-3 max-w-xs text-sm text-cream/80">{site.blurb}</p>
        </div>

        <div className="text-sm">
          <h3 className="mb-3 font-semibold uppercase tracking-widest text-gold">Visit</h3>
          <p>{site.address}</p>
          <p className="mt-1">{site.hours}</p>
          {site.phone && <p className="mt-1">{site.phone}</p>}
          <p className="mt-1">{site.email}</p>
        </div>

        <div className="text-sm">
          <h3 className="mb-3 font-semibold uppercase tracking-widest text-gold">Connect</h3>
          <ul className="space-y-2">
            <li>
              <a className="hover:text-berry" href={doorDashUrl('footer')} target="_blank" rel="noopener noreferrer">
                Order on DoorDash
              </a>
            </li>
            <li>
              <a className="hover:text-berry" href={site.links.instagram} target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a className="hover:text-berry" href={site.links.facebook} target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a className="hover:text-berry" href="#contact">
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/20 py-5 text-center text-xs text-cream/60">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
