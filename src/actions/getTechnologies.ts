import { defineAction } from 'astro:actions'
import { z } from 'astro:schema'
import { reader } from './reader'
import type { Technology } from '@/types/actions'

export const getTechnologies = defineAction({
  accept: 'json',
  input: z.object({}).optional(),
  handler: async (): Promise<Technology[]> => {
    const techs = await reader.collections.technologies.all()
    return techs
      .map(({ slug, entry }) => ({
        slug,
        name: entry.name,
        logo: entry.logo,
        type: entry.type,
        website: entry.website,
      }))
      .sort((a, b) => a.name.localeCompare(b.name))
  },
})
