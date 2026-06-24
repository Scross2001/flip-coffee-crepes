// Central business info. Edit here (or via the CMS) to update across the site.
export const site = {
  name: 'FLIP Coffee & Crepes',
  tagline: 'Premium French Crepes & Specialty Coffee',
  blurb:
    'Fresh, artisanal crepes — sweet and savory — paired with specialty coffee in the heart of Granby, CT.',
  rating: 4.0,
  address: '7 Mill Pond Dr, Granby, CT 06035',
  hours: '6:00 AM – 7:40 PM Daily',
  phone: '', // add when available, e.g. '(860) 555-0123'
  email: 'hello@flipgranby.com', // update to the real inbox
  links: {
    doordash:
      'https://www.doordash.com/store/flip-coffee-&-crepes-granby-44140819/108474346/',
    instagram: 'https://www.instagram.com/flip.granby/',
    facebook:
      'https://www.facebook.com/people/FLIP-coffe-crepes/61589351891637/?locale=en_GB',
    maps: 'https://www.google.com/maps/search/?api=1&query=7+Mill+Pond+Dr+Granby+CT+06035',
  },
};

// Add ?utm UTM tags so DoorDash clicks are trackable in analytics.
export const doorDashUrl = (source: string) =>
  `${site.links.doordash}?utm_source=website&utm_medium=cta&utm_campaign=${source}`;
