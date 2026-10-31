// Public URL of the live site. Set NEXT_PUBLIC_SITE_URL in your hosting
// environment (e.g. https://primesuite.com) so the sitemap, canonical URL and
// social previews point at the real domain.
const getSiteUrl = () => {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return 'http://localhost:3000';
};

export const SITE_URL = getSiteUrl().replace(/\/$/, '');

export const SITE_NAME = 'Prime Suite – Air BnB Rentals';
export const SITE_TITLE = 'Prime Suite - Air BnB Rentals | Anaji behind Nhyira hotel';
export const SITE_DESCRIPTION =
  'Prime Suite Air BnB Rentals in Anaji behind Nhyira hotel, Takoradi. Choose between Room 1 and Room 2 – private, air-conditioned 2-bedroom suites with free Wi-Fi, parking and car rental. Contacts: 0547238675 / 0550638015.';
export const OG_IMAGE = '/assets/images/suite2/suite2_living_room_main_v2.jpg';
