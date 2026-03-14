// sanity/schemaTypes/siteSettings.js
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  __experimental_actions: ['update', 'publish'],

  fields: [
    // ─────────────────────────────────────────────────────
    // NAVBAR
    // ─────────────────────────────────────────────────────
    defineField({
      name: 'navbar',
      title: 'Navigation Bar',
      type: 'object',
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
      ],
    }),

    // ─────────────────────────────────────────────────────
    // HERO SLIDES (HomeHeroSlider) - UPDATED WITH IMAGE UPLOAD
    // ─────────────────────────────────────────────────────
    defineField({
      name: 'heroSlides',
      title: 'Home Hero Slides',
      description: 'Featured slides on the homepage hero carousel',
      type: 'array',
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
              title: 'OR BunnyCDN Image',
              type: 'cdnImage',
              description: 'Paste a BunnyCDN image URL here if you do not want to upload to Sanity',
            }),
            // OPTION 2: Use external URL (Bunny CDN)
            defineField({ 
              name: 'backgroundUrl', 
              title: 'OR External Image URL (Bunny CDN)', 
              type: 'url',
              description: 'Use this if you want to use Bunny CDN instead of uploading'
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
          fields: [{ name: 'alt', type: 'string', title: 'Alt text' }]
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
                  fields: [{ name: 'alt', type: 'string', title: 'Alt text' }]
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
      fields: [
        defineField({ name: 'badge', title: 'Badge (EN)', type: 'string' }),
        defineField({ name: 'badgeAr', title: 'Badge (AR)', type: 'string' }),
        defineField({ name: 'title', title: 'Title (EN)', type: 'string' }),
        defineField({ name: 'titleAr', title: 'Title (AR)', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Subtitle (EN)', type: 'text', rows: 3 }),
        defineField({ name: 'subtitleAr', title: 'Subtitle (AR)', type: 'text', rows: 3 }),
        defineField({
          name: 'heroImage',
          title: 'Hero Image',
          type: 'image',
          options: { hotspot: true },
          fields: [{ name: 'alt', type: 'string', title: 'Alt text' }],
        }),
        defineField({
          name: 'heroImageCdn',
          title: 'OR Hero Image (BunnyCDN)',
          type: 'cdnImage',
          description: 'Paste BunnyCDN image URL instead of uploading',
        }),
        defineField({
          name: 'sections',
          title: 'About Sections',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'heading', title: 'Heading (EN)', type: 'string' }),
                defineField({ name: 'headingAr', title: 'Heading (AR)', type: 'string' }),
                defineField({ name: 'body', title: 'Body (EN)', type: 'array', of: [{ type: 'text' }] }),
                defineField({ name: 'bodyAr', title: 'Body (AR)', type: 'array', of: [{ type: 'text' }] }),
              ],
            },
          ],
        }),
      ],
    }),
  ],

  preview: {
    prepare() { return { title: 'Site Settings' } },
  },
})
