import { getProjects } from './getProjects'
import { getProject } from './getProject'
import { getTechnologies } from './getTechnologies'
import { getTechnologyTypes } from './getTechnologyTypes'

export * from '@/types/actions'
export { getProjects, getProject, getTechnologies, getTechnologyTypes }

export const server = {
  getProjects,
  getProject,
  getTechnologies,
  getTechnologyTypes,
}
