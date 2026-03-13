```import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'heroSlide',
  title: 'Hero Slides',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title (English)', type: 'string'}),
    defineField({name: 'titleAr', title: 'Title (Arabic)', type: 'string'}),
    defineField({name: 'subtitle', title: 'Subtitle (English)', type: 'string'}),
    defineField({name: 'subtitleAr', title: 'Subtitle (Arabic)', type: 'string'}),
    defineField({
      name: 'backgroundUrl',
      title: 'Background Image/Video URL (Bunny CDN)',
      type: 'url',
    }),
    defineField({name: 'ctaLabel', title: 'Button Label (English)', type: 'string'}),
    defineField({name: 'ctaLabelAr', title: 'Button Label (Arabic)', type: 'string'}),
    defineField({name: 'ctaUrl', title: 'Button URL', type: 'url'}),
    defineField({
      name: 'order',
      title: 'Display Order (1 = first)',
      type: 'number',
    }),
  ],
  orderings: [
    {title: 'Display Order', name: 'orderAsc', by: [{field: 'order', direction: 'asc'}]},
  ],
  preview: {
    select: {title: 'title'},
  },
})```