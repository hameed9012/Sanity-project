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
    defineField({name: 'nameAr', title: 'Developer Name (Arabic)', type: 'string'}),
    defineField({name: 'tagline', title: 'Tagline', type: 'string'}),
    defineField({name: 'taglineAr', title: 'Tagline (Arabic)', type: 'string'}),
    defineField({name: 'description', title: 'Description (English)', type: 'text', rows: 3}),
    defineField({name: 'descriptionAr', title: 'Description (Arabic)', type: 'text', rows: 3}),
    defineField({
      name: 'logoUrl',
      title: 'Logo URL (Bunny CDN or local path)',
      type: 'url',
    }),
    defineField({
      name: 'logoCdn',
      title: 'Logo (BunnyCDN)',
      type: 'cdnImage',
    }),
    defineField({
      name: 'heroImageUrl',
      title: 'Hero Image URL (external)',
      type: 'url',
    }),
    defineField({
      name: 'heroImageCdn',
      title: 'Hero Image (BunnyCDN)',
      type: 'cdnImage',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image URL (card thumbnail)',
      type: 'url',
    }),
    defineField({
      name: 'coverImageUrl',
      title: 'Cover Image URL (alternative)',
      type: 'url',
    }),
    defineField({name: 'ctaUrl', title: 'CTA URL', type: 'url'}),
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
      name: 'founder',
      title: 'Founder Section',
      type: 'object',
      fields: [
        defineField({name: 'name', title: 'Founder Name', type: 'string'}),
        defineField({name: 'nameAr', title: 'Founder Name (Arabic)', type: 'string'}),
        defineField({name: 'title', title: 'Founder Title', type: 'string'}),
        defineField({name: 'titleAr', title: 'Founder Title (Arabic)', type: 'string'}),
        defineField({
          name: 'imageUrl',
          title: 'Founder Image URL (Bunny CDN or external)',
          type: 'url',
        }),
        defineField({
          name: 'imageCdn',
          title: 'Founder Image (BunnyCDN)',
          type: 'cdnImage',
        }),
        defineField({name: 'bio', title: 'Founder Bio (English)', type: 'text', rows: 6}),
        defineField({name: 'bioAr', title: 'Founder Bio (Arabic)', type: 'text', rows: 6}),
        defineField({name: 'ctaLabel', title: 'CTA Label', type: 'string'}),
        defineField({name: 'ctaLabelAr', title: 'CTA Label (Arabic)', type: 'string'}),
        defineField({name: 'ctaUrl', title: 'CTA URL', type: 'url'}),
      ],
    }),
  ],
  preview: {
    select: {title: 'name'},
  },
})
