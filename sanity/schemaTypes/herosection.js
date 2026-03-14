export default {
  name: 'heroSection',
  title: 'Home Hero Slider',
  type: 'document',
  fields: [
    {
      name: 'slides',
      title: 'Slides',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'titleEn', title: 'Title (EN)', type: 'string' },
          { name: 'titleAr', title: 'Title (AR)', type: 'string' },
          {
            name: 'image',
            title: 'Slide Image (Upload)',
            type: 'image',
            options: { hotspot: true },
            fields: [{ name: 'alt', type: 'string', title: 'Alt text' }],
          },
          {
            name: 'cdnImage',
            title: 'OR BunnyCDN Image',
            type: 'cdnImage',
            description: 'Paste the BunnyCDN image URL here if you do not want to upload the slide image to Sanity.',
          },
          {
            name: 'backgroundUrl',
            title: 'OR External Image URL',
            type: 'url',
            description: 'Optional fallback external image URL. BunnyCDN should go in the BunnyCDN field above.',
          },
          { name: 'link', title: 'Target Link', type: 'string' }
        ],
        preview: {
          select: {
            title: 'titleEn',
            titleAr: 'titleAr',
            media: 'image',
            cdnUrl: 'cdnImage.url',
          },
          prepare({ title, titleAr, media, cdnUrl }) {
            return {
              title: title || titleAr || 'Untitled Slide',
              subtitle: cdnUrl ? `BunnyCDN: ${cdnUrl}` : 'Sanity upload',
              media,
            }
          },
        },
      }]
    }
  ]
}
