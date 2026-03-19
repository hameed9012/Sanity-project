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
      name: 'heroImageCdn',
      title: 'Hero Image (BunnyCDN)',
      type: 'cdnImage',
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
      name: 'locationAr',
      title: 'Location Label (Arabic)',
      type: 'string',
    }),
    defineField({
      name: 'avgBuyPrice',
      title: 'Avg. Buy Price (e.g. "AED 1.2M")',
      type: 'string',
    }),
    defineField({
      name: 'avgBuyPriceAr',
      title: 'Avg. Buy Price (Arabic)',
      type: 'string',
    }),
    defineField({
      name: 'avgRentPrice',
      title: 'Avg. Rent Price (e.g. "AED 85K/yr")',
      type: 'string',
    }),
    defineField({
      name: 'avgRentPriceAr',
      title: 'Avg. Rent Price (Arabic)',
      type: 'string',
    }),
    defineField({
      name: 'roi',
      title: 'ROI (e.g. "7.2%")',
      type: 'string',
    }),
    defineField({
      name: 'roiAr',
      title: 'ROI (Arabic)',
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
      name: 'nearbyLandmarks',
      title: 'Nearby Landmarks',
      type: 'array',
      description:
        'Key landmarks around this area. Add distance plus optional coordinates if you want to use them for map points later.',
      of: [
        {
          type: 'object',
          title: 'Nearby Landmark',
          fields: [
            defineField({
              name: 'name',
              title: 'Place Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'nameAr',
              title: 'Place Name (Arabic)',
              type: 'string',
            }),
            defineField({
              name: 'distance',
              title: 'Distance / Travel Time',
              type: 'string',
              description: 'e.g. "10 mins", "600 m", "15 min drive"',
            }),
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'string',
              description: 'e.g. "landmark", "mall", "metro", "beach", "business"',
            }),
            defineField({
              name: 'lat',
              title: 'Latitude',
              type: 'number',
              description: 'Use decimal coordinates like 25.185972',
            }),
            defineField({
              name: 'lng',
              title: 'Longitude',
              type: 'number',
              description: 'Use decimal coordinates like 55.260333',
            }),
            defineField({
              name: 'directionsUrl',
              title: 'Google Maps Directions URL (optional)',
              type: 'url',
              description: 'Optional override. If empty, the site can generate one from the latitude/longitude.',
            }),
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'distance',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'nearbyAreas',
      title: 'Nearby Areas',
      type: 'array',
      description: 'Neighbourhoods around this area that you want to highlight on the page.',
      of: [
        {
          type: 'object',
          title: 'Nearby Area',
          fields: [
            defineField({
              name: 'name',
              title: 'Area Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'nameAr',
              title: 'Area Name (Arabic)',
              type: 'string',
            }),
            defineField({
              name: 'distance',
              title: 'Distance / Travel Time',
              type: 'string',
              description: 'e.g. "8 mins", "12 min drive"',
            }),
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'string',
              description: 'e.g. "area", "beach", "business", "family"',
            }),
            defineField({
              name: 'slug',
              title: 'Area Slug (optional)',
              type: 'string',
              description: 'If this matches a where-to-live slug, the card will link to that area page.',
            }),
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'distance',
            },
          },
        },
      ],
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
