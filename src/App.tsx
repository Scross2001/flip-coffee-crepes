import { Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import MenuSection from './sections/MenuSection';
import About from './sections/About';
import Location from './sections/Location';
import Gallery from './sections/Gallery';
import Contact from './sections/Contact';
import { site } from './content/site';

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Helmet>
        <title>FLIP Coffee &amp; Crepes | Granby, CT</title>
        <meta name="description" content={site.blurb} />
      </Helmet>

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-espresso focus:px-4 focus:py-2 focus:text-cream"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main" className="flex-1">
        <Hero />
        <MenuSection />
        <About />
        <Location />
        <Gallery />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
