import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Seo from '../components/Seo';
import Reveal from '../components/Reveal';
import { site } from '../content/site';

// Free, no-backend form delivery via Formspree (https://formspree.io).
// 1. Create a free form, 2. paste its endpoint id below.
const FORMSPREE_ID = 'your-form-id';
const FORMSPREE_URL = `https://formspree.io/f/${FORMSPREE_ID}`;

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();
  const [status, setStatus] = useState<'idle' | 'ok' | 'error'>('idle');

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus('ok');
        reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <Seo title="Contact" description="Get in touch with FLIP Coffee & Crepes and follow us on social." />

      <section className="section">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Say hello</p>
            <h1 className="text-4xl font-bold text-espresso md:text-5xl">Contact us</h1>
            <p className="mt-4 text-charcoal/70">
              Questions, catering, or just want to say hi? Drop us a line and we&apos;ll get back to you.
            </p>

            <dl className="mt-8 space-y-3 text-charcoal/80">
              <div>
                <dt className="text-sm font-semibold uppercase tracking-widest text-berry">Email</dt>
                <dd>{site.email}</dd>
              </div>
              {site.phone && (
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-widest text-berry">Phone</dt>
                  <dd>{site.phone}</dd>
                </div>
              )}
              <div>
                <dt className="text-sm font-semibold uppercase tracking-widest text-berry">Visit</dt>
                <dd>{site.address}</dd>
              </div>
            </dl>

            <div className="mt-6 flex gap-3">
              <a className="btn-outline !px-5 !py-2.5 text-sm" href={site.links.instagram} target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
              <a className="btn-outline !px-5 !py-2.5 text-sm" href={site.links.facebook} target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 rounded-2xl bg-white p-7 shadow-card" noValidate>
              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-semibold text-espresso">
                  Name
                </label>
                <input
                  id="name"
                  {...register('name', { required: 'Please enter your name' })}
                  className="w-full rounded-lg border border-cream bg-offwhite px-4 py-3 outline-none focus:border-berry"
                  aria-invalid={!!errors.name}
                />
                {errors.name && <p className="mt-1 text-sm text-berry">{errors.name.message}</p>}
              </div>

              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-semibold text-espresso">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  {...register('email', {
                    required: 'Please enter your email',
                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email' },
                  })}
                  className="w-full rounded-lg border border-cream bg-offwhite px-4 py-3 outline-none focus:border-berry"
                  aria-invalid={!!errors.email}
                />
                {errors.email && <p className="mt-1 text-sm text-berry">{errors.email.message}</p>}
              </div>

              <div>
                <label htmlFor="message" className="mb-1 block text-sm font-semibold text-espresso">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register('message', { required: 'Please enter a message' })}
                  className="w-full rounded-lg border border-cream bg-offwhite px-4 py-3 outline-none focus:border-berry"
                  aria-invalid={!!errors.message}
                />
                {errors.message && <p className="mt-1 text-sm text-berry">{errors.message.message}</p>}
              </div>

              <button type="submit" className="btn-accent w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Sending…' : 'Send message'}
              </button>

              {status === 'ok' && (
                <p className="text-center text-sm font-semibold text-green-700" role="status">
                  Thanks! We&apos;ll be in touch soon.
                </p>
              )}
              {status === 'error' && (
                <p className="text-center text-sm font-semibold text-berry" role="alert">
                  Something went wrong. Please email us directly at {site.email}.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
