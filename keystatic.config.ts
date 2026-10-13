import { config, fields, collection } from '@keystatic/core'

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    projects: collection({
      label: 'Projetos',
      slugField: 'title',
      path: 'src/content/projects/*',
      format: { data: 'json' },
      schema: {
        title: fields.slug({ name: { label: 'Título' } }),
        featured: fields.checkbox({ label: 'Destacado', defaultValue: false }),
        date: fields.date({ label: 'Data' }),
        image: fields.image({
          label: 'Imagem',
          directory: 'public/media/projects',
          publicPath: '/media/projects/',
        }),
        isImageScrollable: fields.checkbox({
          label: 'Imagem com scroll',
          defaultValue: false,
        }),
        description: fields.text({ label: 'Descrição', multiline: true }),
        url: fields.url({ label: 'URL do site' }),
        role: fields.multiselect({
          label: 'Função',
          options: [
            { label: 'Design', value: 'design' },
            { label: 'Desenvolvimento', value: 'development' },
          ],
          defaultValue: ['development'],
        }),
      },
    }),
    technologies: collection({
      label: 'Tecnologias',
      slugField: 'name',
      path: 'src/content/technologies/*',
      format: { data: 'json' },
      schema: {
        name: fields.slug({ name: { label: 'Nome' } }),
        logo: fields.image({
          label: 'Logo',
          directory: 'public/media/technologies',
          publicPath: '/media/technologies/',
        }),
        type: fields.relationship({
          label: 'Tipo',
          collection: 'technologyTypes',
        }),
        website: fields.url({ label: 'Website' }),
      },
    }),
    technologyTypes: collection({
      label: 'Tipos de tecnologia',
      slugField: 'title',
      path: 'src/content/technologyTypes/*',
      format: { data: 'json' },
      schema: {
        title: fields.slug({ name: { label: 'Título' } }),
        description: fields.text({ label: 'Descrição', multiline: true }),
        order: fields.integer({ label: 'Ordem', defaultValue: 0 }),
      },
    }),
  },
})
