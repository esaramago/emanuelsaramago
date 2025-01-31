import { type SanityCodegenConfig } from 'sanity-codegen'

const config: SanityCodegenConfig = {
  schemaPath: './schema/index.ts',
  outputPath: './types/sanity.ts',
}

export default config