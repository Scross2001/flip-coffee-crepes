import Reveal from '../components/Reveal';
import { site } from '../content/site';

export default function Contact() {
  return (
    <section id="contact" className="anchor bg-cream/40">
      <div className="section">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Say hello</p>
          <h2 className="text-4xl font-bold text-espresso md:text-5xl">Get in touch</h2>
          <p className="mt-4 text-charcoal/70">
            Questions, catering, or just want to say hi? Reach us directly — we&apos;d love to hear from you.
          </p>
        </Reveal>

        <Reveal className="mx-auto mt-10 max-w-md rounded-2xl bg-white p-8 text-center shadow-card">
          <dl className="space-y-5">
            <div>
              <dt className="text-sm font-semibold uppercase tracking-widest text-berry">Email</dt>
              <dd className="mt-1">
                <a className="text-lg text-espresso hover:text-berry" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </dd>
            </div>
            {site.phone && (
              <div>
                <dt className="text-sm font-semibold uppercase tracking-widest text-berry">Phone</dt>
                <dd className="mt-1">
                  <a className="text-lg text-espresso hover:text-berry" href={`tel:${site.phone}`}>
                    {site.phone}
                  </a>
                </dd>
              </div>
            )}
            <div>
              <dt className="text-sm font-semibold uppercase tracking-widest text-berry">Visit</dt>
              <dd className="mt-1 text-lg text-espresso">{site.address}</dd>
            </div>
          </dl>

          <div className="mt-7 flex justify-center gap-3">
            <a className="btn-outline !px-5 !py-2.5 text-sm" href={site.links.instagram} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a className="btn-outline !px-5 !py-2.5 text-sm" href={site.links.facebook} target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
