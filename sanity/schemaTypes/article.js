import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'article',
  title: 'Articles',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title (English)',
      type: 'string',
      validation: R => R.required(),
    }),
    defineField({name: 'titleAr', title: 'Title (Arabic)', type: 'string'}),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: R => R.required(),
    }),
    defineField({name: 'description', title: 'Description (English)', type: 'text', rows: 3}),
    defineField({name: 'descriptionAr', title: 'Description (Arabic)', type: 'text', rows: 3}),
    defineField({
      name: 'mainImage',
      title: 'Main Image URL (Bunny CDN)',
      type: 'url',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Off-Plan Investment', value: 'off-plan'},
          {title: 'Market Analysis', value: 'market-analysis'},
          {title: 'Lifestyle', value: 'lifestyle'},
          {title: 'Guide', value: 'guide'},
        ],
      },
    }),
    defineField({name: 'publishedAt', title: 'Published At', type: 'datetime'}),
    defineField({name: 'readTime', title: 'Read Time (e.g. "5 min read")', type: 'string'}),
    defineField({
      name: 'body',
      title: 'Article Body (English)',
      type: 'array',
      of: [{type: 'block'}, {type: 'image', options: {hotspot: true}}],
    }),
    defineField({
      name: 'bodyAr',
      title: 'Article Body (Arabic)',
      type: 'array',
      of: [{type: 'block'}, {type: 'image', options: {hotspot: true}}],
    }),
    defineField({name: 'seoTitle', title: 'SEO Title', type: 'string'}),
    defineField({name: 'seoDescription', title: 'SEO Description', type: 'text', rows: 2}),
    defineField({name: 'seoKeywords', title: 'SEO Keywords', type: 'string'}),
  ],
  preview: {
    select: {title: 'title'},
  },
})