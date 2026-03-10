// sanity/schemaTypes/siteSettings.js
// Single-document schema that controls all global site content:
// navbar, hero slides, pillars section, ArtOfDetail, contact fields

import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  // Singleton — only one document allowed
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
      ],
    }),

    // ─────────────────────────────────────────────────────
    // HERO SLIDES  (HomeHeroSlider)
    // ─────────────────────────────────────────────────────
    defineField({
      name: 'heroSlides',
      title: 'Home Hero Slides',
      description: 'Featured slides on the homepage hero carousel. Leave empty to auto-populate from properties.',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title',       title: 'Title (EN)',       type: 'string' }),
            defineField({ name: 'titleAr',     title: 'Title (AR)',       type: 'string' }),
            defineField({ name: 'subtitle',    title: 'Subtitle (EN)',    type: 'text', rows: 2 }),
            defineField({ name: 'subtitleAr',  title: 'Subtitle (AR)',    type: 'text', rows: 2 }),
            defineField({ name: 'backgroundUrl', title: 'Background Image/Video URL (Bunny CDN)', type: 'url' }),
            defineField({ name: 'propertySlug', title: 'Link to Property Slug', type: 'string', description: 'e.g. skyparks — links card to that property page' }),
            defineField({ name: 'ctaLabel',    title: 'CTA Button Label (EN)', type: 'string' }),
            defineField({ name: 'ctaLabelAr',  title: 'CTA Button Label (AR)', type: 'string' }),
            defineField({ name: 'ctaUrl',      title: 'CTA URL',          type: 'string' }),
            defineField({ name: 'order',       title: 'Order',            type: 'number' }),
          ],
          preview: {
            select: { title: 'title', media: 'backgroundUrl' },
            prepare({ title }) { return { title: title || 'Untitled Slide' } },
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
        defineField({ name: 'ownerImage',   title: 'Owner Photo URL (Bunny CDN)', type: 'url' }),
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
                defineField({ name: 'imageUrl', title: 'Image URL (Bunny CDN or /public)', type: 'string' }),
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
                select: { title: 'title' },
                prepare({ title }) { return { title: title || 'Untitled Pillar' } },
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
        defineField({ name: 'whatsapp',   title: 'WhatsApp Number (with country code)', type: 'string', description: 'e.g. 971568888906' }),
        defineField({ name: 'phone',      title: 'Phone Display Text',    type: 'string' }),
        defineField({ name: 'email',      title: 'Email Address',         type: 'string' }),
        defineField({ name: 'instagram',  title: 'Instagram URL',         type: 'url' }),
        defineField({ name: 'linkedin',   title: 'LinkedIn URL',          type: 'url' }),
        defineField({ name: 'youtube',    title: 'YouTube URL',           type: 'url' }),
        defineField({ name: 'formTitle',  title: 'Contact Form Title (EN)', type: 'string' }),
        defineField({ name: 'formTitleAr',title: 'Contact Form Title (AR)', type: 'string' }),
      ],
    }),
  ],

  preview: {
    prepare() { return { title: 'Site Settings' } },
  },
})