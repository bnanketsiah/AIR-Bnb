import type { MetadataRoute } from 'next';
import { GALLERY_ITEMS } from '@/lib/data';
import { SITE_URL } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      // Lets Google Images discover the room photos.
      images: GALLERY_ITEMS.map((item) => `${SITE_URL}${item.src}`),
    },
  ];
}
