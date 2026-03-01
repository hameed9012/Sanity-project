import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'area',
  title: 'Areas (Where to Live)',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Area Name (English)',
      type: 'string',
      validation: R => R.required(),
    }),
    defineField({
      name: 'nameAr',
      title: 'Area Name (Arabic)',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {source: 'name'},
      validation: R => R.required(),
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image URL (Bunny CDN)',
      type: 'url',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline (English)',
      type: 'string',
    }),
    defineField({
      name: 'taglineAr',
      title: 'Tagline (Arabic)',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description (English)',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'descriptionAr',
      title: 'Description (Arabic)',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'location',
      title: 'Location Label (e.g. "Dubai Marina, Dubai")',
      type: 'string',
    }),
    defineField({
      name: 'avgBuyPrice',
      title: 'Avg. Buy Price (e.g. "AED 1.2M")',
      type: 'string',
    }),
    defineField({
      name: 'avgRentPrice',
      title: 'Avg. Rent Price (e.g. "AED 85K/yr")',
      type: 'string',
    }),
    defineField({
      name: 'roi',
      title: 'ROI (e.g. "7.2%")',
      type: 'string',
    }),
    defineField({
      name: 'regionSlug',
      title: 'Region Slug (must match property regionSlug)',
      type: 'string',
      description: 'Used to filter properties for this area. E.g. "dubai-marina"',
    }),
    defineField({
      name: 'highlights',
      title: 'Highlights (English)',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'highlightsAr',
      title: 'Highlights (Arabic)',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'order',
      title: 'Display Order (1 = first)',
      type: 'number',
      initialValue: 99,
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  orderings: [
    {title: 'Display Order', name: 'orderAsc', by: [{field: 'order', direction: 'asc'}]},
  ],
  preview: {
    select: {title: 'name', subtitle: 'location'},
  },
})