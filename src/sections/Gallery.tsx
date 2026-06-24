import { useEffect } from 'react';
import Reveal from '../components/Reveal';
import { site } from '../content/site';

// ── Instagram post embeds (free, no account/login needed) ──────────────────
// Works for ANY public post — you don't need to own the account.
// Paste the post URLs from @flip.granby below. To get one: open the post on
// instagram.com, click the "…" menu → "Copy link". Add as many as you like.
const POST_URLS: string[] = [
  'https://www.instagram.com/p/DZyJ0SjtuXi/',
  'https://www.instagram.com/p/DZlSM-3Nsbt/',
  'https://www.instagram.com/p/DZbMNguIM3q/',
  'https://www.instagram.com/p/DY0NqlFt7rM/',
  'https://www.instagram.com/p/DYdMNIpNZbb/',
  'https://www.instagram.com/p/DXcStXhDbbk/',
];

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

export default function Gallery() {
  useEffect(() => {
    if (POST_URLS.length === 0) return;
    const SRC = 'https://www.instagram.com/embed.js';
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${SRC}"]`);
    if (existing) {
      window.instgrm?.Embeds.process();
      return;
    }
    const script = document.createElement('script');
    script.src = SRC;
    script.async = true;
    script.onload = () => window.instgrm?.Embeds.process();
    document.body.appendChild(script);
  }, []);

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

        {POST_URLS.length > 0 ? (
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {POST_URLS.map((url) => (
              <blockquote
                key={url}
                className="instagram-media mx-auto !min-w-0"
                data-instgrm-permalink={url}
                data-instgrm-version="14"
              />
            ))}
          </div>
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
