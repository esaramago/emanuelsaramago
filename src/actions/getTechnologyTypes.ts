import { defineAction } from 'astro:actions'
import { z } from 'astro:schema'
import { reader } from './reader'
import type { TechnologyType } from '@/types/actions'

export const getTechnologyTypes = defineAction({
  accept: 'json',
  input: z.object({}).optional(),
  handler: async (): Promise<TechnologyType[]> => {
    const types = await reader.collections.technologyTypes.all()
    return types
      .map(({ slug, entry }) => ({
        slug,
        title: entry.title,
        description: entry.description,
        order: entry.order ?? 0,
      }))
      .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
  },
})
