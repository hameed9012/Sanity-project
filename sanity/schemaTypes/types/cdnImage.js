import {defineType, defineField} from 'sanity'
import CdnUrlImageInput from './CdnUrlImageInput'

export default defineType({
  name: 'cdnImage',
  title: 'CDN Image (URL)',
  type: 'object',
  fields: [
    defineField({
      name: 'url',
      title: 'Image URL (Bunny CDN)',
      type: 'url',
      components: {
        input: CdnUrlImageInput,
      },
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'alt',
      title: 'Alt text',
      type: 'string',
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
    }),
  ],
  preview: {
    select: {title: 'caption', subtitle: 'url'},
    prepare({title, subtitle}) {
      return {
        title: title || 'CDN Image',
        subtitle,
      }
    },
  },
})
