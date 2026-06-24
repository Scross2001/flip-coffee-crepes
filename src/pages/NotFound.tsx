import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

export default function NotFound() {
  return (
    <section className="section text-center">
      <Seo title="Page not found" />
      <p className="font-serif text-7xl font-bold text-cream">404</p>
      <h1 className="mt-4 text-3xl font-bold text-espresso">This page flipped away</h1>
      <p className="mt-2 text-charcoal/70">Let&apos;s get you back to something tasty.</p>
      <Link className="btn-primary mt-8" to="/">
        Back home
      </Link>
    </section>
  );
}
