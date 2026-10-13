import { defineAction } from 'astro:actions'
import { z } from 'astro:schema'
import { reader } from './reader'
import type { Project } from '@/types/actions'

export const getProject = defineAction({
  accept: 'json',
  input: z.object({
    slug: z.string(),
  }),
  handler: async ({ slug }): Promise<Project | null> => {
    const entry = await reader.collections.projects.read(slug)
    if (!entry) return null
    return {
      slug,
      title: entry.title,
      description: entry.description,
      featured: entry.featured,
      date: entry.date ?? undefined,
      role: entry.role as string[],
      image: entry.image,
      isImageScrollable: entry.isImageScrollable,
      url: entry.url,
    }
  },
})
