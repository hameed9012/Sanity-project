import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'developer',
  title: 'Developers',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Developer Name',
      type: 'string',
      validation: R => R.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {source: 'name'},
      validation: R => R.required(),
    }),
    defineField({name: 'tagline', title: 'Tagline', type: 'string'}),
    defineField({
      name: 'logoUrl',
      title: 'Logo URL (Bunny CDN or local path)',
      type: 'url',
    }),
    defineField({
      name: 'about',
      title: 'About Paragraphs (English)',
      type: 'array',
      of: [{type: 'text'}],
    }),
    defineField({
      name: 'aboutAr',
      title: 'About Paragraphs (Arabic)',
      type: 'array',
      of: [{type: 'text'}],
    }),
    defineField({
      name: 'stats',
      title: 'Stats',
      type: 'object',
      fields: [
        defineField({name: 'projects', title: 'Total Projects (e.g. 80+)', type: 'string'}),
        defineField({name: 'deliveredProjects', title: 'Delivered Projects', type: 'string'}),
        defineField({name: 'underConstructionProjects', title: 'Under Construction', type: 'string'}),
        defineField({name: 'communities', title: 'Communities', type: 'string'}),
        defineField({name: 'sales2024', title: '2024 Sales (e.g. AED 18B+)', type: 'string'}),
      ],
    }),
    defineField({
      name: 'highlights',
      title: 'Highlights',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
  preview: {
    select: {title: 'name'},
  },
})