import type { SchemaTypeDefinition } from 'sanity'
import project from './project'
import technology from './technology'
import technologyType from './technologyType'

const schemaTypes: SchemaTypeDefinition[] = [
  project,
  technology,
  technologyType
]

export default schemaTypes