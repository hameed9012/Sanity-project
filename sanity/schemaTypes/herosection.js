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
          { name: 'image', title: 'Slide Image', type: 'image' },
          {
            name: 'cdnImage',
            title: 'OR BunnyCDN Image',
            type: 'cdnImage',
          },
          { name: 'link', title: 'Target Link', type: 'string' }
        ]
      }]
    }
  ]
}
