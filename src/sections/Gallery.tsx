import Reveal from '../components/Reveal';
import { site } from '../content/site';
import { asset } from '../lib/asset';

// Drop images into public/images/gallery and list the filenames here.
const photos = ['gallery/1.jpg', 'gallery/2.jpg', 'gallery/3.jpg', 'gallery/4.jpg', 'gallery/5.jpg', 'gallery/6.jpg'];

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

        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3">
          {photos.map((src, i) => (
            <Reveal key={src} delay={(i % 3) * 0.06}>
              <div className="aspect-square overflow-hidden rounded-xl bg-cream">
                <img
                  src={asset(`images/${src}`)}
                  alt="FLIP Coffee & Crepes"
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a className="btn-accent" href={site.links.instagram} target="_blank" rel="noopener noreferrer">
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
