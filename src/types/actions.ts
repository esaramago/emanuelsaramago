export interface Project {
  slug: string
  title: string
  description: string
  featured?: boolean
  date?: string
  role?: string[]
  image?: string | null
  isImageScrollable?: boolean
  url?: string | null
}

export interface Technology {
  slug: string
  name: string
  logo?: string | null
  type?: string | null
  website?: string | null
}

export interface TechnologyType {
  slug: string
  title: string
  description: string
  order?: number | null
}
