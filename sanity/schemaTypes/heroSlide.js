import {defineType, defineField} from 'sanity'

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
      name: 'image',
      title: 'Slide Image (Upload)',
      type: 'image',
      options: {hotspot: true},
      fields: [{name: 'alt', title: 'Alt text', type: 'string'}],
    }),
    defineField({
      name: 'cdnImage',
      title: 'OR BunnyCDN Image',
      type: 'cdnImage',
      description: 'Paste a BunnyCDN image URL instead of uploading the slide image.',
    }),
    defineField({
      name: 'backgroundUrl',
      title: 'OR Background Image/Video URL (legacy)',
      type: 'url',
      description: 'Legacy fallback field. Prefer the BunnyCDN image field above.',
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
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'image',
      cdnUrl: 'cdnImage.url',
    },
    prepare({title, subtitle, media, cdnUrl}) {
      return {
        title: title || 'Untitled slide',
        subtitle: subtitle || cdnUrl || '',
        media,
      }
    },
  },
})
