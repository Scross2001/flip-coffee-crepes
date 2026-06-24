import Reveal from '../components/Reveal';

const values = [
  { title: 'Made to order', body: 'Handcrafted coffee and sweet & savory crepes, prepared fresh for every guest.' },
  { title: 'Quality first', body: 'Real ingredients and careful technique — food worth slowing down for.' },
  { title: 'Built for your day', body: 'Dine in, grab takeout, or use the drive-thru. Fresh flavors without the wait.' },
  { title: 'Morning to afternoon', body: 'From early coffee runs to quick lunches and afternoon treats, FLIP is your go-to stop.' },
];

export default function About() {
  return (
    <section id="about" className="anchor">
      <div className="section">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">About us</p>
          <h2 className="text-4xl font-bold text-espresso md:text-5xl">A better café experience</h2>
          <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
            FLIP is a modern crêpe and coffee café built around quality, convenience, and fresh-made
            food. We specialize in handcrafted coffee and made-to-order sweet and savory crêpes
            prepared fresh for every guest. Whether you&apos;re dining in, grabbing takeout, or using
            our drive-thru, we&apos;re committed to serving food worth slowing down for—without
            slowing down your day. From early morning coffee runs to quick lunches and afternoon
            treats, FLIP is your go-to stop for fresh flavors, friendly service, and a better café
            experience.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl bg-white p-7 shadow-card">
                <h3 className="text-xl font-bold text-espresso">{v.title}</h3>
                <p className="mt-2 text-charcoal/70">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
