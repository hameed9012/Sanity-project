import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'property',
  title: 'Properties',
  type: 'document',

  fields: [
    // ---------- CORE ----------
    defineField({
      name: 'title',
      title: 'Internal Title (English)',
      type: 'string',
      description: 'Admin title for listing/search inside Studio',
      validation: (R) => R.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (R) => R.required(),
    }),

    defineField({
      name: 'status',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {title: 'Offplan', value: 'offplan'},
          {title: 'Secondary', value: 'secondary'},
          {title: 'Land', value: 'land'},
        ],
      },
      initialValue: 'offplan',
      validation: (R) => R.required(),
    }),

    defineField({name: 'developer', title: 'Developer (admin)', type: 'string'}),
    defineField({name: 'location', title: 'Location / Area (admin)', type: 'string'}),

    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    }),

    // ---------- CONTENT (EN + AR) ----------
    defineField({
      name: 'en',
      title: 'English Content',
      type: 'object',
      fields: makeLocaleFields(),
    }),

    defineField({
      name: 'ar',
      title: 'Arabic Content',
      type: 'object',
      fields: makeLocaleFields({isArabic: true}),
    }),

    // ---------- OPTIONAL: legacy backup ----------
    defineField({
      name: 'legacyJson',
      title: 'Legacy JSON backup (read-only)',
      type: 'text',
      readOnly: true,
      hidden: true,
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'developer',
    },
    prepare({title, subtitle}) {
      return {title, subtitle}
    },
  },
})

/**
 * Fields for each locale (en/ar) — mirrors your JS structure:
 * seo, project, hero, intro, gallery, floorPlans, amenities, location, cta
 */
function makeLocaleFields(opts = {}) {
  const isArabic = !!opts.isArabic

  return [
    defineField({name: 'seo', title: 'SEO', type: 'seo'}),

    // project
    defineField({
      name: 'project',
      title: 'Project',
      type: 'object',
      fields: [
        defineField({name: 'name', title: 'Name', type: 'string'}),
        defineField({name: 'developer', title: 'Developer', type: 'string'}),
        defineField({name: 'location', title: 'Location', type: 'string'}),
        defineField({name: 'status', title: 'Status Label', type: 'string'}),
        defineField({name: 'startingPrice', title: 'Starting Price (string)', type: 'string'}),
        defineField({name: 'completionDate', title: 'Completion Date', type: 'string'}),
        defineField({name: 'paymentPlan', title: 'Payment Plan', type: 'string'}),
        defineField({name: 'type', title: 'Type', type: 'string'}),
        defineField({name: 'units', title: 'Units', type: 'string'}),
      ],
    }),

    // hero
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        defineField({
          name: 'backgroundUrl',
          title: 'Hero Background URL (video/image)',
          type: 'url',
          description: 'Bunny CDN mp4 or image URL',
        }),
        defineField({
          name: 'squareImageUrl',
          title: 'Square Image URL (logo/profile)',
          type: 'url',
        }),
        defineField({name: 'companyName', title: 'Company Name', type: 'string'}),
        defineField({name: 'rating', title: 'Rating', type: 'number'}),
      ],
    }),

    // intro
    defineField({
      name: 'intro',
      title: 'Intro',
      type: 'object',
      fields: [
        defineField({name: 'title', title: 'Title', type: 'string'}),
        defineField({
          name: 'paragraphs',
          title: 'Paragraphs',
          type: 'array',
          of: [{type: 'string'}],
        }),

        defineField({
          name: 'brochures',
          title: 'Brochures / PDFs',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({name: 'title', title: 'Title', type: 'string'}),
                defineField({name: 'url', title: 'PDF URL (Bunny CDN)', type: 'url'}),
                defineField({
                  name: 'type',
                  title: 'Button Type',
                  type: 'string',
                  options: {list: ['main', 'secondary']},
                }),
              ],
            },
          ],
        }),

        defineField({
          name: 'img',
          title: 'Intro Image (CDN)',
          type: 'cdnImage',
        }),

        defineField({
          name: 'floatingCards',
          title: 'Floating Cards',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({name: 'top', title: 'Top (CSS)', type: 'string'}),
                defineField({name: 'right', title: 'Right (CSS)', type: 'string'}),
                defineField({name: 'bottom', title: 'Bottom (CSS)', type: 'string'}),
                defineField({name: 'left', title: 'Left (CSS)', type: 'string'}),
                defineField({name: 'icon', title: 'Icon', type: 'string'}),
                defineField({name: 'value', title: 'Value', type: 'string'}),
                defineField({name: 'label', title: 'Label', type: 'string'}),
              ],
            },
          ],
        }),
      ],
    }),

    // gallery
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'object',
      fields: [
        defineField({name: 'title', title: 'Title', type: 'string'}),
        defineField({
          name: 'slides',
          title: 'Slides (CDN Images)',
          type: 'array',
          of: [{type: 'cdnImage'}],
        }),
        defineField({name: 'projectTag', title: 'Project Tag', type: 'string'}),
      ],
    }),

    // floor plans
    defineField({
      name: 'floorPlans',
      title: 'Floor Plans',
      type: 'object',
      fields: [
        defineField({
          name: 'type',
          title: 'Type (keep same as frontend expects)',
          type: 'string',
          initialValue: 'apartments',
        }),

        defineField({
          name: 'plans',
          title: 'Plans',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({name: 'id', title: 'ID', type: 'string'}),
                defineField({name: 'title', title: 'Title', type: 'string'}),
                defineField({name: 'bedrooms', title: 'Bedrooms', type: 'number'}),

                // IMPORTANT: specs keys differ between EN/AR, so we keep it flexible
                defineField({
                  name: 'specs',
                  title: 'Specs (Key/Value)',
                  type: 'array',
                  of: [
                    {
                      type: 'object',
                      fields: [
                        defineField({name: 'key', title: 'Key', type: 'string'}),
                        defineField({name: 'value', title: 'Value', type: 'string'}),
                      ],
                    },
                  ],
                }),

                defineField({
                  name: 'images',
                  title: 'Plan Images (CDN)',
                  type: 'array',
                  of: [{type: 'cdnImage'}],
                }),

                defineField({
                  name: 'features',
                  title: 'Features',
                  type: 'array',
                  of: [{type: 'string'}],
                }),
              ],
            },
          ],
        }),

        defineField({name: 'brochureHref', title: 'Brochure URL', type: 'url'}),
      ],
    }),

    // amenities
    defineField({
      name: 'amenities',
      title: 'Amenities',
      type: 'object',
      fields: [
        defineField({name: 'title', title: 'Title', type: 'string'}),
        defineField({
          name: 'amenities',
          title: 'Amenities List',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({name: 'label', title: 'Label', type: 'string'}),
                defineField({name: 'icon', title: 'Icon', type: 'string'}),
                defineField({name: 'color', title: 'Color', type: 'string'}),
              ],
            },
          ],
        }),
      ],
    }),

    // location
    defineField({
      name: 'location',
      title: 'Location Block',
      type: 'object',
      fields: [
        defineField({name: 'title', title: 'Title', type: 'string'}),
        defineField({name: 'projectName', title: 'Project Name', type: 'string'}),
        defineField({name: 'address', title: 'Address', type: 'string'}),
        defineField({name: 'lat', title: 'Latitude', type: 'number'}),
        defineField({name: 'lng', title: 'Longitude', type: 'number'}),
        defineField({name: 'zoom', title: 'Zoom', type: 'number'}),

        defineField({
          name: 'proximityFeatures',
          title: 'Proximity Features',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({name: 'icon', title: 'Icon', type: 'string'}),
                defineField({name: 'text', title: 'Text', type: 'string'}),
              ],
            },
          ],
        }),
      ],
    }),

    // cta
    defineField({
      name: 'cta',
      title: 'CTA',
      type: 'object',
      fields: [
        defineField({name: 'title', title: 'Title', type: 'string'}),
        defineField({name: 'description', title: 'Description', type: 'text', rows: 3}),
        defineField({
          name: 'buttons',
          title: 'Buttons',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({name: 'label', title: 'Label', type: 'string'}),
                defineField({name: 'action', title: 'Action', type: 'string'}),
              ],
            },
          ],
        }),
      ],
    }),
  ]
}
