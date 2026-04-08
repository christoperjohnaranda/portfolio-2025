import { MetadataRoute } from 'next'

const baseUrl = 'https://christoperjohnaranda.vercel.app'

const routes = ['', '/aboutme', '/workexperience', '/project', '/contact']

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  for (const route of routes) {
    // English (default, no prefix)
    entries.push({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: route === '' ? 'monthly' : 'yearly',
      priority: route === '' ? 1 : 0.8,
    })

    // Indonesian
    entries.push({
      url: `${baseUrl}/id${route}`,
      lastModified: new Date(),
      changeFrequency: route === '' ? 'monthly' : 'yearly',
      priority: route === '' ? 0.9 : 0.7,
    })
  }

  return entries
}
