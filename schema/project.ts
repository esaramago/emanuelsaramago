import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Projeto',
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
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title'
      }
    }),
    defineField({
      name: 'date',
      title: 'Data',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM'
      }
    }),
    defineField({
      name: 'image',
      title: 'Imagem',
      type: 'image',
      validation: (Rule) => Rule.required(),
      options: {
        accept: 'image/jpeg, image/avif, image/webp'
      }
    }),
    defineField({
      name: 'isImageScrollable',
      title: 'Imagem com scroll',
      type: 'boolean',
    }),
    defineField({
      name: 'description',
      title: 'Descrição',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'URL do site',
      type: 'url',
    }),
    defineField({
      name: 'role',
      title: 'Função',
      type: 'array',
      validation: (Rule) => Rule.required(),
      of: [{type: 'string'}],
      options: {
        list: [
          { title: 'Design', value: 'design' },
          { title: 'Desenvolvimento', value: 'development' },
        ]
      }
    }),
  ]
})