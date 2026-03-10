// sanity/schemaTypes/article.js
// Unified article schema — matches the sections used in ArticleTemplate.jsx
// Works for both existing articles and new ones shown in PressReleasesSlider

import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'article',
  title: 'Articles',
  type: 'document',

  fields: [
    // ─── CORE ─────────────────────────────────────────────
    defineField({ name: 'title',       title: 'Title (English)',      type: 'string', validation: R => R.required() }),
    defineField({ name: 'titleAr',     title: 'Title (Arabic)',       type: 'string' }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: R => R.required(),
    }),
    defineField({ name: 'description',   title: 'Short Description (EN)', type: 'text', rows: 3 }),
    defineField({ name: 'descriptionAr', title: 'Short Description (AR)', type: 'text', rows: 3 }),
    defineField({ name: 'mainImage',     title: 'Cover Image URL (Bunny CDN or /public)', type: 'string' }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          'Investment Strategy', 'Market Analysis', 'Data Insights',
          'Rental Strategy', 'Market Trends', 'Case Studies', 'News',
        ].map(v => ({ title: v, value: v })),
      },
    }),
    defineField({ name: 'readTime',    title: 'Read Time (e.g. "8 min read")', type: 'string' }),
    defineField({ name: 'publishedAt', title: 'Published At',  type: 'datetime' }),
    defineField({ name: 'featured',    title: 'Featured on Homepage (PressReleases)', type: 'boolean', initialValue: true }),

    // ─── HERO ─────────────────────────────────────────────
    defineField({
      name: 'hero',
      title: 'Article Hero',
      type: 'object',
      fields: [
        defineField({ name: 'title',    title: 'Hero Title (EN)',    type: 'string' }),
        defineField({ name: 'titleAr',  title: 'Hero Title (AR)',    type: 'string' }),
        defineField({ name: 'subtitle', title: 'Hero Subtitle (EN)', type: 'text', rows: 2 }),
        defineField({ name: 'subtitleAr',title:'Hero Subtitle (AR)', type: 'text', rows: 2 }),
        defineField({ name: 'image',    title: 'Hero Image URL',     type: 'string' }),
        defineField({
          name: 'stats',
          title: 'Hero Stats',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({ name: 'number', title: 'Number (e.g. "15-30%")', type: 'string' }),
              defineField({ name: 'label',  title: 'Label (EN)', type: 'string' }),
              defineField({ name: 'labelAr',title: 'Label (AR)', type: 'string' }),
            ],
            preview: { select: { title: 'number', subtitle: 'label' } },
          }],
        }),
      ],
    }),

    // ─── TABLE OF CONTENTS ────────────────────────────────
    defineField({
      name: 'tableOfContents',
      title: 'Table of Contents (EN)',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'tableOfContentsAr',
      title: 'Table of Contents (AR)',
      type: 'array',
      of: [{ type: 'string' }],
    }),

    // ─── BODY SECTIONS ────────────────────────────────────
    defineField({
      name: 'sections',
      title: 'Article Sections',
      description: 'Each section = a heading + body content. Supports text, key points, stats, quotes, market analysis.',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'articleSection',
          title: 'Section',
          fields: [
            defineField({ name: 'id',      title: 'Section ID (for TOC anchor)', type: 'string' }),
            defineField({ name: 'title',   title: 'Section Title (EN)',   type: 'string' }),
            defineField({ name: 'titleAr', title: 'Section Title (AR)',   type: 'string' }),
            // Main content as portable text (rich text)
            defineField({
              name: 'body',
              title: 'Body Content (EN)',
              type: 'array',
              of: [
                {
                  type: 'block',
                  styles: [
                    { title: 'Normal', value: 'normal' },
                    { title: 'H2', value: 'h2' },
                    { title: 'H3', value: 'h3' },
                    { title: 'Quote', value: 'blockquote' },
                  ],
                  marks: {
                    decorators: [
                      { title: 'Strong', value: 'strong' },
                      { title: 'Emphasis', value: 'em' },
                    ],
                    annotations: [
                      { name: 'link', type: 'object', fields: [{ name: 'href', type: 'url' }] },
                    ],
                  },
                },
              ],
            }),
            defineField({
              name: 'bodyAr',
              title: 'Body Content (AR)',
              type: 'array',
              of: [{ type: 'block' }],
            }),
            // Key points
            defineField({
              name: 'keyPoints',
              title: 'Key Points (EN)',
              type: 'array',
              of: [{ type: 'string' }],
            }),
            defineField({
              name: 'keyPointsAr',
              title: 'Key Points (AR)',
              type: 'array',
              of: [{ type: 'string' }],
            }),
            // Expert quote
            defineField({
              name: 'expertQuote',
              title: 'Expert Quote',
              type: 'object',
              fields: [
                defineField({ name: 'text',   title: 'Quote Text (EN)',   type: 'text', rows: 3 }),
                defineField({ name: 'textAr', title: 'Quote Text (AR)',   type: 'text', rows: 3 }),
                defineField({ name: 'author', title: 'Author',            type: 'string' }),
              ],
            }),
            // Stats grid
            defineField({
              name: 'stats',
              title: 'Stats Grid',
              type: 'array',
              of: [{
                type: 'object',
                fields: [
                  defineField({ name: 'number',      title: 'Number',       type: 'string' }),
                  defineField({ name: 'label',       title: 'Label (EN)',   type: 'string' }),
                  defineField({ name: 'labelAr',     title: 'Label (AR)',   type: 'string' }),
                  defineField({ name: 'description', title: 'Description',  type: 'string' }),
                ],
                preview: { select: { title: 'number', subtitle: 'label' } },
              }],
            }),
            // Market analysis
            defineField({
              name: 'marketAnalysis',
              title: 'Market Analysis Block',
              type: 'object',
              fields: [
                defineField({ name: 'title',   title: 'Block Title (EN)', type: 'string' }),
                defineField({ name: 'titleAr', title: 'Block Title (AR)', type: 'string' }),
                defineField({
                  name: 'metrics',
                  title: 'Metrics',
                  type: 'array',
                  of: [{
                    type: 'object',
                    fields: [
                      defineField({ name: 'title',       title: 'Metric Title',      type: 'string' }),
                      defineField({ name: 'value',       title: 'Value',             type: 'string' }),
                      defineField({ name: 'description', title: 'Description (EN)',  type: 'string' }),
                      defineField({ name: 'descriptionAr',title:'Description (AR)',  type: 'string' }),
                    ],
                    preview: { select: { title: 'title', subtitle: 'value' } },
                  }],
                }),
              ],
            }),
          ],
          preview: {
            select: { title: 'title' },
            prepare({ title }) { return { title: title || 'Untitled Section' } },
          },
        },
      ],
    }),

    // ─── CTA BLOCK ────────────────────────────────────────
    defineField({
      name: 'cta',
      title: 'Call to Action Block',
      type: 'object',
      fields: [
        defineField({ name: 'title',      title: 'CTA Title (EN)',    type: 'string' }),
        defineField({ name: 'titleAr',    title: 'CTA Title (AR)',    type: 'string' }),
        defineField({ name: 'description',title: 'CTA Text (EN)',     type: 'text', rows: 2 }),
        defineField({ name: 'descriptionAr',title:'CTA Text (AR)',    type: 'text', rows: 2 }),
        defineField({ name: 'buttonLabel',   title: 'Button Label (EN)', type: 'string' }),
        defineField({ name: 'buttonLabelAr', title: 'Button Label (AR)', type: 'string' }),
        defineField({ name: 'buttonUrl',     title: 'Button URL',        type: 'string' }),
      ],
    }),

    // ─── SEO ──────────────────────────────────────────────
    defineField({ name: 'seoTitle',       title: 'SEO Title',       type: 'string' }),
    defineField({ name: 'seoDescription', title: 'SEO Description', type: 'text', rows: 2 }),
    defineField({ name: 'seoKeywords',    title: 'SEO Keywords',    type: 'string' }),
  ],

  preview: {
    select: { title: 'title', subtitle: 'category', media: 'mainImage' },
    prepare({ title, subtitle }) {
      return { title: title || 'Untitled Article', subtitle: subtitle || '' }
    },
  },
})