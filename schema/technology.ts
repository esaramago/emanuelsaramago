import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'technology',
  title: 'Tecnologia',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nome',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name'
      },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        accept: 'image/svg+xml, image/webp'
      },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'type',
      title: 'Tipo',
      type: 'reference',
      to: [{type: 'technologyType'}],
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'website',
      title: 'Website',
      type: 'url'
    }),
  ]
})