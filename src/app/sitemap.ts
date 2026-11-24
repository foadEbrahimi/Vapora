import type { MetadataRoute } from 'next';

import { site } from '@/src/data/site';

const routes = ['', '/products', '/reviews', '/about', '/contact'] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date();

  return routes.map(route => ({
    url: `${site.url}${route}`,
    lastModified: updated,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7,
  }));
}
