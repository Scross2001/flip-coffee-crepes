import Reveal from '../components/Reveal';
import { site, doorDashUrl } from '../content/site';

export default function Contact() {
  return (
    <section id="contact" className="anchor bg-espresso text-cream">
      <div className="section">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold">Say hello</p>
            <h2 className="mt-2 text-4xl font-bold md:text-5xl">Come flip your day with us</h2>
            <p className="mt-4 max-w-md text-cream/80">
              Questions, catering, or just want to say hi? Reach us directly — or stop by and order
              fresh, made-to-order crêpes and coffee.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a className="btn-accent" href={doorDashUrl('contact')} target="_blank" rel="noopener noreferrer">
                Order Now
              </a>
              <a
                className="btn-outline border-cream text-cream hover:bg-cream hover:text-espresso"
                href={site.links.maps}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="space-y-5 md:border-l md:border-cream/20 md:pl-12">
              <li>
                <span className="text-xs font-semibold uppercase tracking-widest text-gold">Email</span>
                <a className="mt-1 block text-lg hover:text-berry" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </li>
              <li>
                <span className="text-xs font-semibold uppercase tracking-widest text-gold">Phone</span>
                <a className="mt-1 block text-lg hover:text-berry" href={`tel:${site.phone}`}>
                  {site.phone}
                </a>
              </li>
              <li>
                <span className="text-xs font-semibold uppercase tracking-widest text-gold">Visit</span>
                <span className="mt-1 block text-lg">{site.address}</span>
              </li>
              <li>
                <span className="text-xs font-semibold uppercase tracking-widest text-gold">Follow</span>
                <span className="mt-2 flex gap-4 text-lg">
                  <a className="hover:text-berry" href={site.links.instagram} target="_blank" rel="noopener noreferrer">
                    Instagram
                  </a>
                  <a className="hover:text-berry" href={site.links.facebook} target="_blank" rel="noopener noreferrer">
                    Facebook
                  </a>
                </span>
              </li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
