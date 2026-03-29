// sanity/schemaTypes/siteSettings.js
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  groups: [
    {name: 'navigation', title: 'Navigation'},
    {name: 'home', title: 'Homepage'},
    {name: 'about', title: 'About'},
    {name: 'contact', title: 'Contact'},
  ],

  fields: [
    // ─────────────────────────────────────────────────────
    // NAVBAR
    // ─────────────────────────────────────────────────────
    defineField({
      name: 'navbar',
      title: 'Navigation Bar',
      type: 'object',
      group: 'navigation',
      fields: [
        defineField({
          name: 'desktopLeft',
          title: 'Desktop Left Links',
          type: 'array',
          of: [{ type: 'navLink' }],
        }),
        defineField({
          name: 'desktopRight',
          title: 'Desktop Right Links',
          type: 'array',
          of: [{ type: 'navLink' }],
        }),
        defineField({
          name: 'mobileMenu',
          title: 'Mobile Menu Links',
          type: 'array',
          of: [{ type: 'navLink' }],
        }),
        defineField({
          name: 'hideSearch',
          title: 'Hide Search from Navbar',
          type: 'boolean',
          initialValue: false,
        }),
        defineField({
          name: 'logo',
          title: 'Navbar Logo (Upload)',
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'alt', type: 'string', title: 'Alt text' },
            { name: 'altAr', type: 'string', title: 'Alt text (Arabic)' },
          ],
        }),
        defineField({
          name: 'logoCdn',
          title: 'OR Navbar Logo (BunnyCDN)',
          type: 'cdnImage',
          description: 'Paste a BunnyCDN logo URL instead of uploading',
        }),
        defineField({
          name: 'logoScaleDesktop',
          title: 'Navbar Logo Scale (Desktop)',
          type: 'number',
          description: 'Use 1 for normal size. Example: 1.1 slightly bigger, 0.9 slightly smaller.',
          initialValue: 1,
        }),
        defineField({
          name: 'logoScaleMobile',
          title: 'Navbar Logo Scale (Mobile)',
          type: 'number',
          description: 'Use 1 for normal size on mobile.',
          initialValue: 1,
        }),
      ],
    }),

    // ─────────────────────────────────────────────────────
    // HERO SLIDES (HomeHeroSlider) - UPDATED WITH IMAGE UPLOAD
    // ─────────────────────────────────────────────────────
    defineField({
      name: 'heroSlides',
      title: 'Home Hero Slides',
      description: 'Featured slides on the homepage hero carousel. Reorder them here. If you leave the image empty, the linked property hero image will be used automatically.',
      type: 'array',
      group: 'home',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ 
              name: 'title',       
              title: 'Title (EN)',       
              type: 'string' 
            }),
            defineField({ 
              name: 'titleAr',     
              title: 'Title (AR)',       
              type: 'string' 
            }),
            defineField({ 
              name: 'subtitle',    
              title: 'Subtitle (EN)',    
              type: 'text', 
              rows: 2 
            }),
            defineField({ 
              name: 'subtitleAr',  
              title: 'Subtitle (AR)',    
              type: 'text', 
              rows: 2 
            }),
            // OPTION 1: Upload image directly to Sanity
            defineField({
              name: 'image',
              title: 'Slide Image (Upload)',
              type: 'image',
              description: 'Upload image directly to Sanity',
              options: {
                hotspot: true, // Enables cropping
              },
              fields: [
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Alternative text',
                },
              ],
            }),
            defineField({
              name: 'cdnImage',
              title: 'BunnyCDN Image',
              type: 'cdnImage',
              description: 'Paste a BunnyCDN image URL here instead of uploading. Leave blank to use the linked property hero image automatically.',
            }),
            defineField({ 
              name: 'propertySlug', 
              title: 'Link to Property Slug', 
              type: 'string', 
              description: 'e.g. skyparks — links card to that property page' 
            }),
            defineField({ 
              name: 'ctaLabel',    
              title: 'CTA Button Label (EN)', 
              type: 'string' 
            }),
            defineField({ 
              name: 'ctaLabelAr',  
              title: 'CTA Button Label (AR)', 
              type: 'string' 
            }),
            defineField({ 
              name: 'ctaUrl',      
              title: 'CTA URL',          
              type: 'string' 
            }),
            defineField({ 
              name: 'order',       
              title: 'Order',            
              type: 'number' 
            }),
          ],
          preview: {
            select: { 
              title: 'title', 
              media: 'image',
              subtitle: 'subtitle',
              cdnUrl: 'cdnImage.url',
            },
            prepare({ title, media, subtitle, cdnUrl }) { 
              return { 
                title: title || 'Untitled Slide',
                subtitle: subtitle || cdnUrl || '',
                media: media 
              } 
            },
          },
        },
      ],
    }),

    // ─────────────────────────────────────────────────────
    // ART OF DETAIL SECTION
    // ─────────────────────────────────────────────────────
    defineField({
      name: 'artOfDetail',
      title: 'Art of Detail Section (Homepage)',
      type: 'object',
      group: 'home',
      fields: [
        defineField({ name: 'sloganPre',    title: 'Slogan Pre-text (EN)',  type: 'string' }),
        defineField({ name: 'sloganPreAr',  title: 'Slogan Pre-text (AR)',  type: 'string' }),
        defineField({ name: 'sloganMain',   title: 'Slogan Main (EN)',      type: 'string' }),
        defineField({ name: 'sloganMainAr', title: 'Slogan Main (AR)',      type: 'string' }),
        defineField({ name: 'companyLine',  title: 'Company Line (EN)',     type: 'string' }),
        defineField({ name: 'companyLineAr',title: 'Company Line (AR)',     type: 'string' }),
        defineField({ name: 'description',  title: 'Description (EN)',      type: 'text', rows: 3 }),
        defineField({ name: 'descriptionAr',title: 'Description (AR)',      type: 'text', rows: 3 }),
        // Owner image upload
        defineField({
          name: 'ownerImage',
          title: 'Owner Photo',
          type: 'image',
          description: 'Upload owner photo',
          options: { hotspot: true },
          fields: [
            { name: 'alt', type: 'string', title: 'Alt text' },
            { name: 'altAr', type: 'string', title: 'Alt text (Arabic)' },
          ]
        }),
        defineField({
          name: 'ownerImageCdn',
          title: 'OR Owner Photo (BunnyCDN)',
          type: 'cdnImage',
          description: 'Paste BunnyCDN image URL instead of uploading',
        }),
        defineField({ name: 'discoverMoreUrl', title: 'Discover More Link', type: 'string' }),
      ],
    }),

    // ─────────────────────────────────────────────────────
    // PILLARS SECTION
    // ─────────────────────────────────────────────────────
    defineField({
      name: 'pillars',
      title: 'Pillars Section (Homepage)',
      type: 'object',
      group: 'home',
      fields: [
        defineField({ name: 'heading',   title: 'Section Heading (EN)', type: 'string' }),
        defineField({ name: 'headingAr', title: 'Section Heading (AR)', type: 'string' }),
        defineField({
          name: 'items',
          title: 'Pillar Cards',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'title',   title: 'Title (EN)',   type: 'string' }),
                defineField({ name: 'titleAr', title: 'Title (AR)',   type: 'string' }),
                defineField({ name: 'intro',   title: 'Intro (EN)',   type: 'text', rows: 2 }),
                defineField({ name: 'introAr', title: 'Intro (AR)',   type: 'text', rows: 2 }),
                // Pillar image upload
                defineField({
                  name: 'image',
                  title: 'Pillar Image',
                  type: 'image',
                  options: { hotspot: true },
                  fields: [
                    { name: 'alt', type: 'string', title: 'Alt text' },
                    { name: 'altAr', type: 'string', title: 'Alt text (Arabic)' },
                  ]
                }),
                defineField({
                  name: 'imageCdn',
                  title: 'OR Pillar Image (BunnyCDN)',
                  type: 'cdnImage',
                  description: 'Paste BunnyCDN image URL instead of uploading',
                }),
                defineField({
                  name: 'points',
                  title: 'Bullet Points (EN)',
                  type: 'array',
                  of: [{ type: 'string' }],
                }),
                defineField({
                  name: 'pointsAr',
                  title: 'Bullet Points (AR)',
                  type: 'array',
                  of: [{ type: 'string' }],
                }),
              ],
              preview: {
                select: { 
                  title: 'title', 
                  media: 'image' 
                },
                prepare({ title, media }) { 
                  return { 
                    title: title || 'Untitled Pillar',
                    media: media 
                  } 
                },
              },
            },
          ],
        }),
      ],
    }),

    // ─────────────────────────────────────────────────────
    // CONTACT FIELDS
    // ─────────────────────────────────────────────────────
    defineField({
      name: 'contact',
      title: 'Contact Info',
      type: 'object',
      group: 'contact',
      fields: [
        defineField({ name: 'whatsapp',   title: 'WhatsApp Number', type: 'string' }),
        defineField({ name: 'phone',      title: 'Phone Display Text', type: 'string' }),
        defineField({ name: 'email',      title: 'Email Address', type: 'string' }),
        defineField({ name: 'instagram',  title: 'Instagram URL', type: 'url' }),
        defineField({ name: 'linkedin',   title: 'LinkedIn URL', type: 'url' }),
        defineField({ name: 'youtube',    title: 'YouTube URL', type: 'url' }),
        defineField({ name: 'formTitle',  title: 'Contact Form Title (EN)', type: 'string' }),
        defineField({ name: 'formTitleAr',title: 'Contact Form Title (AR)', type: 'string' }),
      ],
    }),
    defineField({
      name: 'about',
      title: 'About Page',
      type: 'object',
      group: 'about',
      fields: [
        defineField({
          name: 'hero',
          title: 'Hero Section',
          type: 'object',
          fields: [
            defineField({ name: 'yearsNumber', title: 'Years Number (EN)', type: 'string' }),
            defineField({ name: 'yearsNumberAr', title: 'Years Number (AR)', type: 'string' }),
            defineField({ name: 'yearsSuffix', title: 'Years Suffix (EN)', type: 'string' }),
            defineField({ name: 'yearsSuffixAr', title: 'Years Suffix (AR)', type: 'string' }),
            defineField({ name: 'labelTop', title: 'Top Label (EN)', type: 'string' }),
            defineField({ name: 'labelTopAr', title: 'Top Label (AR)', type: 'string' }),
            defineField({ name: 'line1', title: 'Hero Line 1 (EN)', type: 'string' }),
            defineField({ name: 'line1Ar', title: 'Hero Line 1 (AR)', type: 'string' }),
            defineField({ name: 'line2', title: 'Hero Line 2 (EN)', type: 'string' }),
            defineField({ name: 'line2Ar', title: 'Hero Line 2 (AR)', type: 'string' }),
            defineField({ name: 'sinceLabel', title: 'Since Label (EN)', type: 'string' }),
            defineField({ name: 'sinceLabelAr', title: 'Since Label (AR)', type: 'string' }),
            defineField({
              name: 'description1',
              title: 'Description Paragraph 1 (EN)',
              type: 'text',
              rows: 4,
            }),
            defineField({
              name: 'description1Ar',
              title: 'Description Paragraph 1 (AR)',
              type: 'text',
              rows: 4,
            }),
            defineField({
              name: 'description2',
              title: 'Description Paragraph 2 (EN)',
              type: 'text',
              rows: 4,
            }),
            defineField({
              name: 'description2Ar',
              title: 'Description Paragraph 2 (AR)',
              type: 'text',
              rows: 4,
            }),
            defineField({ name: 'imageAlt', title: 'Hero Image Alt (EN)', type: 'string' }),
            defineField({ name: 'imageAltAr', title: 'Hero Image Alt (AR)', type: 'string' }),
            defineField({
              name: 'image',
              title: 'Hero Portrait (Upload)',
              type: 'image',
              options: { hotspot: true },
              fields: [
                { name: 'alt', type: 'string', title: 'Alt text' },
                { name: 'altAr', type: 'string', title: 'Alt text (Arabic)' },
              ],
            }),
            defineField({
              name: 'imageCdn',
              title: 'OR Hero Portrait (External URL)',
              type: 'cdnImage',
              description: 'Use a BunnyCDN or other hosted image URL instead of uploading.',
            }),
          ],
        }),
        defineField({
          name: 'buildingExcellence',
          title: 'Building Excellence Section',
          type: 'object',
          fields: [
            defineField({ name: 'headingLine1', title: 'Heading Line 1 (EN)', type: 'string' }),
            defineField({ name: 'headingLine1Ar', title: 'Heading Line 1 (AR)', type: 'string' }),
            defineField({ name: 'headingLine2', title: 'Heading Line 2 (EN)', type: 'string' }),
            defineField({ name: 'headingLine2Ar', title: 'Heading Line 2 (AR)', type: 'string' }),
            defineField({ name: 'headingLine3', title: 'Heading Line 3 (EN)', type: 'string' }),
            defineField({ name: 'headingLine3Ar', title: 'Heading Line 3 (AR)', type: 'string' }),
            defineField({
              name: 'paragraph',
              title: 'Paragraph (EN)',
              type: 'text',
              rows: 6,
              description: 'HTML such as <strong> is supported for emphasis.',
            }),
            defineField({
              name: 'paragraphAr',
              title: 'Paragraph (AR)',
              type: 'text',
              rows: 6,
              description: 'HTML such as <strong> is supported for emphasis.',
            }),
            defineField({ name: 'imageAlt', title: 'Section Image Alt (EN)', type: 'string' }),
            defineField({ name: 'imageAltAr', title: 'Section Image Alt (AR)', type: 'string' }),
            defineField({
              name: 'image',
              title: 'Section Image (Upload)',
              type: 'image',
              options: { hotspot: true },
              fields: [
                { name: 'alt', type: 'string', title: 'Alt text' },
                { name: 'altAr', type: 'string', title: 'Alt text (Arabic)' },
              ],
            }),
            defineField({
              name: 'imageCdn',
              title: 'OR Section Image (External URL)',
              type: 'cdnImage',
              description: 'Use a BunnyCDN or other hosted image URL instead of uploading.',
            }),
            defineField({
              name: 'stats',
              title: 'Stats',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({ name: 'prefix', title: 'Prefix (EN)', type: 'string', description: 'Optional text shown above the number, e.g. "Targeting"' }),
                    defineField({ name: 'prefixAr', title: 'Prefix (AR)', type: 'string' }),
                    defineField({ name: 'count', title: 'Count', type: 'string' }),
                    defineField({ name: 'suffix', title: 'Suffix (EN)', type: 'string' }),
                    defineField({ name: 'suffixAr', title: 'Suffix (AR)', type: 'string' }),
                    defineField({ name: 'label', title: 'Label (EN)', type: 'string' }),
                    defineField({ name: 'labelAr', title: 'Label (AR)', type: 'string' }),
                  ],
                  preview: {
                    select: { title: 'label', subtitle: 'count' },
                    prepare({ title, subtitle }) {
                      return {
                        title: title || 'About Stat',
                        subtitle: subtitle || '',
                      }
                    },
                  },
                },
              ],
            }),
          ],
        }),
        defineField({
          name: 'services',
          title: 'Services Section',
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Section Title (EN)', type: 'string' }),
            defineField({ name: 'titleAr', title: 'Section Title (AR)', type: 'string' }),
            defineField({
              name: 'intro',
              title: 'Intro (EN)',
              type: 'text',
              rows: 5,
              description: 'HTML such as <span class="brandHighlight"> is supported.',
            }),
            defineField({
              name: 'introAr',
              title: 'Intro (AR)',
              type: 'text',
              rows: 5,
              description: 'HTML such as <span class="brandHighlight"> is supported.',
            }),
            defineField({
              name: 'cards',
              title: 'Service Cards',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({ name: 'title', title: 'Card Title (EN)', type: 'string' }),
                    defineField({ name: 'titleAr', title: 'Card Title (AR)', type: 'string' }),
                    defineField({
                      name: 'items',
                      title: 'Bullet Points (EN)',
                      type: 'array',
                      of: [{ type: 'string' }],
                    }),
                    defineField({
                      name: 'itemsAr',
                      title: 'Bullet Points (AR)',
                      type: 'array',
                      of: [{ type: 'string' }],
                    }),
                  ],
                  preview: {
                    select: { title: 'title' },
                    prepare({ title }) {
                      return {
                        title: title || 'Service Card',
                      }
                    },
                  },
                },
              ],
            }),
            defineField({
              name: 'footer',
              title: 'Footer Statement (EN)',
              type: 'text',
              rows: 4,
              description: 'HTML such as <strong class="highlight"> is supported.',
            }),
            defineField({
              name: 'footerAr',
              title: 'Footer Statement (AR)',
              type: 'text',
              rows: 4,
              description: 'HTML such as <strong class="highlight"> is supported.',
            }),
          ],
        }),
        defineField({
          name: 'accordion',
          title: 'Vision / Mission / Core Pillars',
          type: 'object',
          fields: [
            defineField({ name: 'visionTitle', title: 'Vision Title (EN)', type: 'string' }),
            defineField({ name: 'visionTitleAr', title: 'Vision Title (AR)', type: 'string' }),
            defineField({ name: 'visionText', title: 'Vision Text (EN)', type: 'text', rows: 5 }),
            defineField({ name: 'visionTextAr', title: 'Vision Text (AR)', type: 'text', rows: 5 }),
            defineField({ name: 'visionImageAlt', title: 'Vision Image Alt (EN)', type: 'string' }),
            defineField({ name: 'visionImageAltAr', title: 'Vision Image Alt (AR)', type: 'string' }),
            defineField({
              name: 'visionImage',
              title: 'Vision Image (Upload)',
              type: 'image',
              options: { hotspot: true },
              fields: [
                { name: 'alt', type: 'string', title: 'Alt text' },
                { name: 'altAr', type: 'string', title: 'Alt text (Arabic)' },
              ],
            }),
            defineField({
              name: 'visionImageCdn',
              title: 'OR Vision Image (External URL)',
              type: 'cdnImage',
              description: 'Use a BunnyCDN or other hosted image URL instead of uploading.',
            }),
            defineField({ name: 'missionTitle', title: 'Mission Title (EN)', type: 'string' }),
            defineField({ name: 'missionTitleAr', title: 'Mission Title (AR)', type: 'string' }),
            defineField({ name: 'missionText', title: 'Mission Text (EN)', type: 'text', rows: 5 }),
            defineField({ name: 'missionTextAr', title: 'Mission Text (AR)', type: 'text', rows: 5 }),
            defineField({ name: 'missionImageAlt', title: 'Mission Image Alt (EN)', type: 'string' }),
            defineField({ name: 'missionImageAltAr', title: 'Mission Image Alt (AR)', type: 'string' }),
            defineField({
              name: 'missionImage',
              title: 'Mission Image (Upload)',
              type: 'image',
              options: { hotspot: true },
              fields: [
                { name: 'alt', type: 'string', title: 'Alt text' },
                { name: 'altAr', type: 'string', title: 'Alt text (Arabic)' },
              ],
            }),
            defineField({
              name: 'missionImageCdn',
              title: 'OR Mission Image (External URL)',
              type: 'cdnImage',
              description: 'Use a BunnyCDN or other hosted image URL instead of uploading.',
            }),
            defineField({ name: 'coreTitle', title: 'Core Title (EN)', type: 'string' }),
            defineField({ name: 'coreTitleAr', title: 'Core Title (AR)', type: 'string' }),
            defineField({ name: 'coreSubtitleTop', title: 'Core Subtitle Top (EN)', type: 'string' }),
            defineField({ name: 'coreSubtitleTopAr', title: 'Core Subtitle Top (AR)', type: 'string' }),
            defineField({
              name: 'coreSubtitleBottom',
              title: 'Core Subtitle Bottom (EN)',
              type: 'string',
            }),
            defineField({
              name: 'coreSubtitleBottomAr',
              title: 'Core Subtitle Bottom (AR)',
              type: 'string',
            }),
            defineField({
              name: 'pillars',
              title: 'Core Pillar Cards',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({ name: 'title', title: 'Title (EN)', type: 'string' }),
                    defineField({ name: 'titleAr', title: 'Title (AR)', type: 'string' }),
                    defineField({ name: 'text', title: 'Text (EN)', type: 'text', rows: 4 }),
                    defineField({ name: 'textAr', title: 'Text (AR)', type: 'text', rows: 4 }),
                    defineField({ name: 'imageAlt', title: 'Image Alt (EN)', type: 'string' }),
                    defineField({ name: 'imageAltAr', title: 'Image Alt (AR)', type: 'string' }),
                    defineField({
                      name: 'image',
                      title: 'Card Image (Upload)',
                      type: 'image',
                      options: { hotspot: true },
                      fields: [
                        { name: 'alt', type: 'string', title: 'Alt text' },
                        { name: 'altAr', type: 'string', title: 'Alt text (Arabic)' },
                      ],
                    }),
                    defineField({
                      name: 'imageCdn',
                      title: 'OR Card Image (External URL)',
                      type: 'cdnImage',
                      description: 'Use a BunnyCDN or other hosted image URL instead of uploading.',
                    }),
                  ],
                  preview: {
                    select: { title: 'title', media: 'image' },
                    prepare({ title, media }) {
                      return {
                        title: title || 'Core Pillar',
                        media,
                      }
                    },
                  },
                },
              ],
            }),
          ],
        }),
        defineField({
          name: 'journey',
          title: 'Journey Timeline',
          type: 'object',
          fields: [
            defineField({ name: 'kicker', title: 'Kicker (EN)', type: 'string' }),
            defineField({ name: 'kickerAr', title: 'Kicker (AR)', type: 'string' }),
            defineField({ name: 'heading', title: 'Heading (EN)', type: 'string' }),
            defineField({ name: 'headingAr', title: 'Heading (AR)', type: 'string' }),
            defineField({
              name: 'steps',
              title: 'Timeline Steps',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({ name: 'year', title: 'Year / Label (EN)', type: 'string' }),
                    defineField({ name: 'yearAr', title: 'Year / Label (AR)', type: 'string' }),
                    defineField({ name: 'title', title: 'Title (EN)', type: 'string' }),
                    defineField({ name: 'titleAr', title: 'Title (AR)', type: 'string' }),
                    defineField({
                      name: 'description',
                      title: 'Description (EN)',
                      type: 'text',
                      rows: 4,
                    }),
                    defineField({
                      name: 'descriptionAr',
                      title: 'Description (AR)',
                      type: 'text',
                      rows: 4,
                    }),
                    defineField({ name: 'imageAlt', title: 'Image Alt (EN)', type: 'string' }),
                    defineField({ name: 'imageAltAr', title: 'Image Alt (AR)', type: 'string' }),
                    defineField({
                      name: 'image',
                      title: 'Timeline Image (Upload)',
                      type: 'image',
                      options: { hotspot: true },
                      fields: [
                        { name: 'alt', type: 'string', title: 'Alt text' },
                        { name: 'altAr', type: 'string', title: 'Alt text (Arabic)' },
                      ],
                    }),
                    defineField({
                      name: 'imageCdn',
                      title: 'OR Timeline Image (External URL)',
                      type: 'cdnImage',
                      description: 'Use a BunnyCDN or other hosted image URL instead of uploading.',
                    }),
                  ],
                  preview: {
                    select: { title: 'year', subtitle: 'title', media: 'image' },
                    prepare({ title, subtitle, media }) {
                      return {
                        title: title || 'Timeline Step',
                        subtitle: subtitle || '',
                        media,
                      }
                    },
                  },
                },
              ],
            }),
          ],
        }),
      ],
    }),
  ],

  preview: {
    prepare() { return { title: 'Site Settings' } },
  },
})
