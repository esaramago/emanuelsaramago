import { sanityClient } from 'sanity:client'
import type { Slug } from '@sanity/types'
import groq from 'groq'

interface CustomImageAssetRef {
  _ref: string
}
interface CustomImageAsset {
  asset: CustomImageAssetRef
}
export interface Project {
	title: string
	description: string
	featured?: boolean
  date: string
  slug: Slug
	role: 'design' | 'development' | 'both'
	image?: CustomImageAsset
	isImageScrollable?: boolean
  url: string
}

export async function getProjects(): Promise<Project[]> {
  return await sanityClient.fetch(
    groq`*[_type == 'project'] | order(date desc)`
  )
}

export async function getProject(slug: Slug): Promise<Project> {
  return await sanityClient.fetch(
    groq`*[_type == 'project' && slug.current == $slug][0]`,
    {
      slug,
    }
  )
}


export async function getTechnologies(): Promise<any[]> {
  return await sanityClient.fetch(
    groq`*[_type == 'technology'] | order(name desc)`
  )
}
export async function getTechnologyTypes(): Promise<any[]> {
  return await sanityClient.fetch(
    groq`*[_type == 'technologyType'] | order(order asc)`
  )
}