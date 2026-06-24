import Reveal from '../components/Reveal';
import { site } from '../content/site';

// ── Instagram feed (free, works on GitHub Pages) ───────────────────────────
// Easiest option: SnapWidget (https://snapwidget.com) free plan.
//   1. Sign up (free), connect @flip.granby, create a "Grid" widget.
//   2. It gives you an embed URL like https://snapwidget.com/embed/1234567
//   3. Paste just the embed URL below. That's it — it auto-updates.
// Leave empty to show the "Follow on Instagram" fallback instead.
const SNAPWIDGET_EMBED_URL = '';

export default function Gallery() {
  return (
    <section id="gallery" className="anchor">
      <div className="section">
        <Reveal className="text-center">
          <p className="eyebrow">@flip.granby</p>
          <h2 className="text-4xl font-bold text-espresso md:text-5xl">From the gram</h2>
          <p className="mx-auto mt-3 max-w-xl text-charcoal/70">
            Behind-the-scenes, fresh drops, and your tagged photos.
          </p>
        </Reveal>

        {SNAPWIDGET_EMBED_URL ? (
          <Reveal className="mt-12 overflow-hidden rounded-2xl">
            <iframe
              src={SNAPWIDGET_EMBED_URL}
              title="FLIP Instagram feed"
              className="h-[520px] w-full border-0"
              scrolling="no"
              loading="lazy"
              allowTransparency
            />
          </Reveal>
        ) : (
          <Reveal className="mt-12 rounded-2xl bg-cream/50 p-10 text-center">
            <p className="text-charcoal/70">
              Our latest posts live on Instagram. Tap below to see fresh crepes, coffee, and more.
            </p>
          </Reveal>
        )}

        <div className="mt-10 text-center">
          <a className="btn-accent" href={site.links.instagram} target="_blank" rel="noopener noreferrer">
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
