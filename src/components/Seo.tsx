import { Helmet } from 'react-helmet-async';

interface SeoProps {
  title: string;
  description?: string;
}

export default function Seo({ title, description }: SeoProps) {
  const full = `${title} | FLIP Coffee & Crepes`;
  return (
    <Helmet>
      <title>{full}</title>
      {description && <meta name="description" content={description} />}
      <meta property="og:title" content={full} />
      {description && <meta property="og:description" content={description} />}
    </Helmet>
  );
}
