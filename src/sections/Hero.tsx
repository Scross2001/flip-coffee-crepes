import { motion } from 'framer-motion';
import { site, doorDashUrl } from '../content/site';
import { asset } from '../lib/asset';

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
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
          <a className="btn-accent" href={doorDashUrl('hero')} target="_blank" rel="noopener noreferrer">
            Order Now
          </a>
          <a className="btn-outline border-cream text-cream hover:bg-cream hover:text-espresso" href="#menu">
            View Menu
          </a>
        </motion.div>
        <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-cream/15 px-4 py-2 text-sm">
          <span className="text-gold">★</span>
          <span className="font-semibold">{site.rating.toFixed(1)}</span>
          <span className="text-cream/80">rating · Loved in Granby</span>
        </div>
      </div>
    </section>
  );
}
