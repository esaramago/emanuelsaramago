import type { SchemaTypeDefinition } from 'sanity'
import project from './project'
import technology from './technology'
import technologyType from './technologyType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    project,
    technology,
    technologyType
  ],
}