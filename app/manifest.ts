import type { MetadataRoute } from 'next';
import { SITE_DESCRIPTION, SITE_NAME } from '@/lib/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: 'Prime Suite',
    description: SITE_DESCRIPTION,
    start_url: '/',
    display: 'standalone',
    background_color: '#071324',
    theme_color: '#071324',
    icons: [{ src: '/assets/images/logo.svg', sizes: 'any', type: 'image/svg+xml' }],
  };
}
