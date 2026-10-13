import { defineAction } from 'astro:actions'
import { z } from 'astro:schema'
import { reader } from './reader'
import type { Project } from '@/types/actions'

export const getProjects = defineAction({
  accept: 'json',
  input: z.object({}).optional(),
  handler: async (): Promise<Project[]> => {
    const projects = await reader.collections.projects.all()
    return projects
      .map(({ slug, entry }) => ({
        slug,
        title: entry.title,
        description: entry.description,
        featured: entry.featured,
        date: entry.date ?? undefined,
        role: entry.role as string[],
        image: entry.image,
        isImageScrollable: entry.isImageScrollable,
        url: entry.url,
      }))
      .sort((a, b) => {
        if (!a.date) return 1
        if (!b.date) return -1
        return b.date.localeCompare(a.date)
      })
  },
})
