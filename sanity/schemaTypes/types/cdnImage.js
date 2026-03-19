import {defineType, defineField} from 'sanity'
import CdnUrlImageInput from './CdnUrlImageInput.js'

export default defineType({
  name: 'cdnImage',
  title: 'BunnyCDN Image',
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
  ],
  preview: {
    select: {title: 'alt', subtitle: 'url'},
    prepare({title, subtitle}) {
      return {
        title: title || 'BunnyCDN Image',
        subtitle,
      }
    },
  },
})
