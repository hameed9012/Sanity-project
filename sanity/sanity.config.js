import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes/index.js'
import {structure} from './deskStructure.js'

export default defineConfig({
  name: 'default',
  title: 'Mohamad Kodmani Real Estate Brokers LLC',
  projectId: '20d53wo5',
  dataset: 'production',
  plugins: [
    structureTool({structure}),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
})