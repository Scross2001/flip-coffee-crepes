import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Seo from '../components/Seo';
import Reveal from '../components/Reveal';
import MenuCard from '../components/MenuCard';
import { site, doorDashUrl } from '../content/site';
import { menu } from '../content/menu';
import { testimonials } from '../content/testimonials';
import { asset } from '../lib/asset';

const featured = ['dubai-pistachio', 'biscoff-heaven', 'raf'];

export default function Home() {
  const featuredItems = menu.filter((m) => featured.includes(m.id));

  return (
    <>
      <Seo title="Home" description={site.blurb} />

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div
          className="absolute inset-0 -z-10 bg-espresso bg-cover bg-center"
          style={{ backgroundImage: `url(${asset('images/hero.jpg')})` }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-espresso/70 to-espresso/90" />
        <div className="mx-auto max-w-6xl px-5 py-28 text-center text-cream md:py-40">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold uppercase tracking-[0.3em] text-gold"
          >
            Granby, Connecticut
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-4 max-w-3xl text-4xl font-bold leading-tight md:text-6xl"
          >
            {site.tagline}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mx-auto mt-5 max-w-xl text-cream/85"
          >
            {site.blurb}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <a
              className="btn-accent"
              href={doorDashUrl('hero')}
              target="_blank"
              rel="noopener noreferrer"
            >
              Order Now
            </a>
            <Link className="btn-outline border-cream text-cream hover:bg-cream hover:text-espresso" to="/menu">
              View Menu
            </Link>
          </motion.div>
          <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-cream/15 px-4 py-2 text-sm">
            <span className="text-gold">★</span>
            <span className="font-semibold">{site.rating.toFixed(1)}</span>
            <span className="text-cream/80">rating · Loved in Granby</span>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="section">
        <Reveal className="text-center">
          <p className="eyebrow">Crowd favorites</p>
          <h2 className="text-3xl font-bold text-espresso md:text-4xl">Made fresh, flipped to order</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredItems.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.08}>
              <MenuCard item={item} />
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link className="btn-primary" to="/menu">
            See the full menu
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-cream/50">
        <div className="section">
          <Reveal className="text-center">
            <p className="eyebrow">What people say</p>
            <h2 className="text-3xl font-bold text-espresso md:text-4xl">From our regulars</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <figure className="h-full rounded-2xl bg-white p-6 shadow-card">
                  <div className="text-gold" aria-hidden>★★★★★</div>
                  <blockquote className="mt-3 text-charcoal/80">“{t.quote}”</blockquote>
                  <figcaption className="mt-4 font-semibold text-espresso">{t.name}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
