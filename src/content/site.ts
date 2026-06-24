// Central business info. Edit here (or via the CMS) to update across the site.
export const site = {
  name: 'FLIP Coffee & Crepes',
  tagline: 'Premium French Crepes & Specialty Coffee',
  blurb:
    'A family-owned café in Granby, CT — rich espresso, signature matcha, and sweet & savory crêpes made fresh to order.',
  rating: 4.0,
  address: '7 Mill Pond Dr, Granby, CT 06035',
  hours: '6:00 AM – 8:00 PM Daily',
  hoursByDay: [
    { day: 'Monday', time: '6:00 AM – 8:00 PM' },
    { day: 'Tuesday', time: '6:00 AM – 8:00 PM' },
    { day: 'Wednesday', time: '6:00 AM – 8:00 PM' },
    { day: 'Thursday', time: '6:00 AM – 8:00 PM' },
    { day: 'Friday', time: '6:00 AM – 8:00 PM' },
    { day: 'Saturday', time: '6:00 AM – 8:00 PM' },
    { day: 'Sunday', time: '6:00 AM – 8:00 PM' },
  ],
  phone: '(860) 431-4091',
  email: 'flipgranby@yahoo.com',
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
