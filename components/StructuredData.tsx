import { GALLERY_ITEMS, LOCATION, ROOM_DETAILS } from '@/lib/data';
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '@/lib/site';

const AMENITIES = [
  'Free Wi-Fi',
  'Air conditioning',
  'Free parking',
  'Car rental',
  '24/7 host support',
  'Secure gated property',
  'Refrigerator',
  'Television',
];

/** schema.org data so Google can show Prime Suite as a lodging business. */
export default function StructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    '@id': `${SITE_URL}/#lodging`,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/assets/images/logo.svg`,
    image: GALLERY_ITEMS.filter((item) => item.room !== 'shared' || item.tag === 'Grounds').map(
      (item) => `${SITE_URL}${item.src}`,
    ),
    telephone: ['+233547238675', '+233550638015'],
    slogan: 'Your Comfort Our Priority',
    address: {
      '@type': 'PostalAddress',
      streetAddress: LOCATION,
      addressLocality: 'Takoradi',
      addressRegion: 'Western Region',
      addressCountry: 'GH',
    },
    hasMap: 'https://maps.google.com/?q=Anaji+behind+Nhyira+hotel',
    amenityFeature: AMENITIES.map((name) => ({ '@type': 'LocationFeatureSpecification', name, value: true })),
    containsPlace: (['room1', 'room2'] as const).map((key) => ({
      '@type': 'Suite',
      name: ROOM_DETAILS[key].name,
      description: ROOM_DETAILS[key].features,
      numberOfRooms: 2,
      occupancy: { '@type': 'QuantitativeValue', minValue: 1, maxValue: 4 },
    })),
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+233547238675',
      contactType: 'reservations',
      availableLanguage: ['English'],
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe here: all values are our own constants.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}
