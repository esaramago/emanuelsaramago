import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'technologyType',
  title: 'Tipos de tecnologia',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title'
      },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Descrição',
      type: 'string',
      validation: (Rule) => Rule.required()
    })
  ]
})