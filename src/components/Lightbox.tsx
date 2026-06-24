import { useEffect, useState } from 'react';

interface LightboxProps {
  src: string;
  alt: string;
  onClose: () => void;
}

// Full-screen popup that shows an image and lets the user zoom/pan in place.
// Click the image (or the zoom button) to toggle zoom; when zoomed, drag/scroll
// to pan. Esc or backdrop/✕ closes.
export default function Lightbox({ src, alt, onClose }: LightboxProps) {
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden'; // lock background scroll
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-espresso/90 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={onClose}
    >
      <button
        className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-cream/90 text-2xl text-espresso shadow hover:bg-cream"
        aria-label="Close"
        onClick={onClose}
      >
        ✕
      </button>

      <div
        className={`max-h-full max-w-5xl overflow-auto rounded-lg ${zoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
        onClick={(e) => {
          e.stopPropagation(); // clicks inside shouldn't close
          setZoomed((z) => !z);
        }}
      >
        <img
          src={src}
          alt={alt}
          className={`select-none transition-[width] duration-200 ${
            zoomed ? 'w-[200%] max-w-none' : 'h-auto w-full'
          }`}
          draggable={false}
        />
      </div>

      <p className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-espresso/70 px-4 py-1.5 text-sm text-cream">
        {zoomed ? 'Drag to pan · tap to zoom out' : 'Tap image to zoom'}
      </p>
    </div>
  );
}
