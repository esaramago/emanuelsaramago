import { defineAction } from 'astro:actions'
import { z } from 'astro:schema'
import fs from 'node:fs'
import path from 'node:path'
import { imageMetadata } from 'astro/assets/utils'
import { reader } from './reader'
import type { Project } from '@/types/actions'

async function resolveImageDimensions(imagePath?: string | null): Promise<{ width?: number; height?: number } | undefined> {
  if (!imagePath) return undefined
  try {
    const fullPath = path.join(process.cwd(), 'public', imagePath)
    if (!fs.existsSync(fullPath)) return undefined
    const buffer = fs.readFileSync(fullPath)
    const meta = await imageMetadata(buffer)
    return { width: meta.width, height: meta.height }
  } catch {
    return undefined
  }
}

export const getProjects = defineAction({
  accept: 'json',
  input: z.object({}).optional(),
  handler: async (): Promise<Project[]> => {
    const projects = await reader.collections.projects.all()
    const resolved = await Promise.all(
      projects.map(async ({ slug, entry }) => {
        const dimensions = await resolveImageDimensions(entry.image)
        return {
          slug,
          title: entry.title,
          description: entry.description,
          featured: entry.featured,
          date: entry.date ?? undefined,
          role: entry.role as string[],
          image: entry.image,
          imageWidth: dimensions?.width,
          imageHeight: dimensions?.height,
          isImageScrollable: entry.isImageScrollable,
          url: entry.url,
        }
      })
    )
    return resolved
      .sort((a, b) => {
        if (!a.date) return 1
        if (!b.date) return -1
        return b.date.localeCompare(a.date)
      })
  },
})
