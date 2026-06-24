import Reveal from '../components/Reveal';
import { site } from '../content/site';

export default function Location() {
  // Highlight the current day in the hours list
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });

  return (
    <section id="location" className="anchor bg-cream/40">
      <div className="section">
        <Reveal className="text-center">
          <p className="eyebrow">Find us</p>
          <h2 className="text-4xl font-bold text-espresso md:text-5xl">Location &amp; Hours</h2>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="space-y-6 rounded-2xl bg-white p-8 shadow-card">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-berry">Address</h3>
                <p className="mt-1 text-lg text-espresso">{site.address}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-berry">Hours</h3>
                <p className="mt-1 text-lg text-espresso">Open daily · 6:00 AM – 8:00 PM</p>
                <ul className="mt-3 divide-y divide-cream text-sm">
                  {site.hoursByDay.map(({ day, time }) => (
                    <li
                      key={day}
                      className={`flex justify-between py-1.5 ${
                        day === today ? 'font-semibold text-espresso' : 'text-charcoal/70'
                      }`}
                    >
                      <span>
                        {day}
                        {day === today && <span className="ml-2 text-xs text-berry">Today</span>}
                      </span>
                      <span>{time}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {site.phone && (
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-berry">Phone</h3>
                  <a className="mt-1 block text-lg text-espresso hover:text-berry" href={`tel:${site.phone}`}>
                    {site.phone}
                  </a>
                </div>
              )}
              <div className="flex flex-wrap gap-3 pt-2">
                <a className="btn-primary" href={site.links.maps} target="_blank" rel="noopener noreferrer">
                  Get Directions
                </a>
                <a className="btn-outline" href={site.links.doordash} target="_blank" rel="noopener noreferrer">
                  Order Delivery
                </a>
              </div>
              <p className="text-sm text-charcoal/60">Free parking available on site.</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full min-h-[360px] overflow-hidden rounded-2xl shadow-card">
              <iframe
                title="Map to FLIP Coffee & Crepes"
                className="h-full min-h-[360px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=7%20Mill%20Pond%20Dr%2C%20Granby%2C%20CT%2006035&t=&z=15&ie=UTF8&iwloc=&output=embed"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
