// sanity/schemaTypes/property.js
// MINIMAL — only essential fields the sales team needs
import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'property',
  title: 'Properties',
  type: 'document',

  groups: [
    {name: 'basics',    title: '📋 Basics',       default: true},
    {name: 'media',     title: '🖼️  Media'},
    {name: 'details',   title: '📐 Details'},
    {name: 'location',  title: '📍 Location'},
    {name: 'arabic',    title: '🌐 Arabic'},
  ],

  fields: [
    // ─── BASICS ───────────────────────────────────────────────
    defineField({
      name: 'title',
      title: 'Project Name',
      type: 'string',
      group: 'basics',
      description: 'e.g. "Sobha Elwood", "Damac Islands"',
      validation: (R) => R.required(),
    }),

    defineField({
      name: 'slug',
      title: 'URL Slug (auto-generated)',
      type: 'slug',
      group: 'basics',
      options: {source: 'title'},
      validation: (R) => R.required(),
    }),

    defineField({
      name: 'developer',
      title: 'Developer',
      type: 'string',
      group: 'basics',
      description: 'e.g. "Sobha Realty", "DAMAC Properties"',
    }),

    defineField({
      name: 'location',
      title: 'Area / Location',
      type: 'string',
      group: 'basics',
      description: 'e.g. "Dubai Hills", "Business Bay"',
    }),

    defineField({
      name: 'status',
      title: 'Type',
      type: 'string',
      group: 'basics',
      options: {
        list: [
          {title: '🏗️  Off-Plan', value: 'offplan'},
          {title: '🏠 Secondary', value: 'secondary'},
          {title: '🌿 Land', value: 'land'},
        ],
        layout: 'radio',
      },
      initialValue: 'offplan',
      validation: (R) => R.required(),
    }),

    defineField({
      name: 'startingPrice',
      title: 'Starting Price',
      type: 'string',
      group: 'basics',
      description: 'e.g. "AED 1,200,000" or "From AED 2.5M"',
    }),

    defineField({
      name: 'completionDate',
      title: 'Completion Date',
      type: 'string',
      group: 'basics',
      description: 'e.g. "Q4 2026" or "Ready"',
    }),

    defineField({
      name: 'paymentPlan',
      title: 'Payment Plan',
      type: 'string',
      group: 'basics',
      description: 'e.g. "60/40", "1% Monthly"',
    }),

    defineField({
      name: 'unitTypes',
      title: 'Unit Types',
      type: 'string',
      group: 'basics',
      description: 'e.g. "1–4 Bedroom Apartments & Villas"',
    }),

    defineField({
      name: 'featured',
      title: 'Featured on homepage?',
      type: 'boolean',
      group: 'basics',
      initialValue: false,
    }),

    // ─── MEDIA ────────────────────────────────────────────────
    defineField({
      name: 'heroImage',
      title: 'Hero / Main Image URL',
      type: 'url',
      group: 'media',
      description: 'Paste Bunny CDN URL — this appears on cards and the page hero',
    }),

    defineField({
      name: 'heroVideo',
      title: 'Hero Video URL (optional)',
      type: 'url',
      group: 'media',
      description: 'Bunny CDN .mp4 URL. If set, plays instead of the image',
    }),

    defineField({
      name: 'galleryImages',
      title: 'Gallery Images',
      type: 'array',
      group: 'media',
      description: 'Add CDN image URLs for the gallery slideshow',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'url', title: 'Image URL', type: 'url'}),
          ],
          preview: {select: {title: 'url'}, prepare: ({title}) => ({title: title || 'Image'})},
        },
      ],
    }),

    defineField({
      name: 'brochureUrl',
      title: 'Brochure PDF URL (optional)',
      type: 'url',
      group: 'media',
      description: 'Bunny CDN .pdf link shown as a download button',
    }),

    // ─── DETAILS ──────────────────────────────────────────────
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 5,
      group: 'details',
      description: 'Short project description shown on the inner page',
    }),

    defineField({
      name: 'amenities',
      title: 'Amenities',
      type: 'array',
      group: 'details',
      description: 'Add each amenity — label + icon name (e.g. "pool", "gym")',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'label', title: 'Amenity Name', type: 'string'}),
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'string',
              description: 'e.g. "pool", "gym", "parking", "park", "mosque", "school"',
            }),
          ],
          preview: {
            select: {title: 'label', subtitle: 'icon'},
          },
        },
      ],
    }),

    defineField({
      name: 'floorPlans',
      title: 'Floor Plans',
      type: 'array',
      group: 'details',
      description: 'One entry per bedroom type',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'title',   title: 'Label',         type: 'string', description: 'e.g. "1 Bedroom"'}),
            defineField({name: 'bedrooms',title: 'Bedrooms',      type: 'number'}),
            defineField({name: 'size',    title: 'Size Range',    type: 'string', description: 'e.g. "750–920 sqft"'}),
            defineField({name: 'price',   title: 'Price Range',   type: 'string', description: 'e.g. "AED 1.2M–1.5M"'}),
            defineField({
              name: 'images',
              title: 'Floor Plan Images',
              type: 'array',
              of: [{type: 'object', fields: [defineField({name: 'url', title: 'Image URL', type: 'url'})]}],
            }),
          ],
          preview: {select: {title: 'title', subtitle: 'size'}},
        },
      ],
    }),

    // ─── LOCATION ─────────────────────────────────────────────
    defineField({
      name: 'lat',
      title: 'Latitude',
      type: 'number',
      group: 'location',
      description: 'e.g. 25.2048',
    }),

    defineField({
      name: 'lng',
      title: 'Longitude',
      type: 'number',
      group: 'location',
      description: 'e.g. 55.2708',
    }),

    defineField({
      name: 'nearbyPlaces',
      title: 'Nearby Places',
      type: 'array',
      group: 'location',
      description: 'Key landmarks near the project',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'name',     title: 'Place Name',    type: 'string'}),
            defineField({name: 'distance', title: 'Distance',      type: 'string', description: 'e.g. "5 mins"'}),
            defineField({name: 'icon',     title: 'Icon',          type: 'string', description: 'e.g. "mall", "airport", "beach"'}),
          ],
          preview: {select: {title: 'name', subtitle: 'distance'}},
        },
      ],
    }),

    // ─── ARABIC ───────────────────────────────────────────────
    defineField({
      name: 'titleAr',
      title: 'Project Name (Arabic)',
      type: 'string',
      group: 'arabic',
    }),

    defineField({
      name: 'descriptionAr',
      title: 'Description (Arabic)',
      type: 'text',
      rows: 5,
      group: 'arabic',
    }),

    defineField({
      name: 'locationAr',
      title: 'Area / Location (Arabic)',
      type: 'string',
      group: 'arabic',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'developer',
      media: 'heroImage',
    },
    prepare({title, subtitle, media}) {
      return {
        title: title || 'Untitled',
        subtitle: subtitle || '',
        // Show hero image as thumbnail if available
        media: media ? undefined : undefined,
      }
    },
  },
})