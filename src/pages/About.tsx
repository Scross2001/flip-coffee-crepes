import Seo from '../components/Seo';
import Reveal from '../components/Reveal';

const values = [
  { title: 'Fresh & artisanal', body: 'Every crepe is made to order on a hot griddle — never pre-made, never rushed.' },
  { title: 'Premium ingredients', body: 'Dubai pistachio, Biscoff, ceremonial matcha, real fruit. Quality you can taste.' },
  { title: 'Specialty coffee', body: 'From a clean Americano to a silky RAF, our espresso program is built for coffee lovers.' },
  { title: 'Community first', body: 'A warm Granby gathering spot for mornings, study sessions, and weekend treats.' },
];

export default function About() {
  return (
    <>
      <Seo title="About" description="The FLIP story — premium French crepes and specialty coffee in Granby, CT." />

      <section className="section">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Our story</p>
          <h1 className="text-4xl font-bold text-espresso md:text-5xl">Flipped fresh, served with heart</h1>
          <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
            FLIP Coffee &amp; Crepes brings the French creperie experience to Granby, Connecticut.
            We pair thin, golden crepes — sweet and savory — with a serious specialty coffee program.
            Whether it&apos;s a Dubai Pistachio crepe with your morning RAF or a Spicy BBQ Chicken
            crepe for lunch, everything is made fresh, by hand, the moment you order.
          </p>
          <p className="mt-4 leading-relaxed text-charcoal/80">
            Our philosophy is simple: high-quality ingredients, careful technique, and a welcoming
            space. That&apos;s what keeps Granby coming back — and what makes FLIP worth the trip.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl bg-white p-7 shadow-card">
                <h2 className="text-xl font-bold text-espresso">{v.title}</h2>
                <p className="mt-2 text-charcoal/70">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 rounded-2xl bg-espresso p-10 text-center text-cream">
          <p className="font-serif text-2xl font-semibold md:text-3xl">
            “Real ingredients, real craft, real coffee — that&apos;s the FLIP way.”
          </p>
        </Reveal>
      </section>
    </>
  );
}
