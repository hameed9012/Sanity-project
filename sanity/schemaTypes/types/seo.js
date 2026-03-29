import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'titleAr', title: 'Title (Arabic)', type: 'string'}),
    defineField({name: 'description', title: 'Description', type: 'text', rows: 3}),
    defineField({name: 'descriptionAr', title: 'Description (Arabic)', type: 'text', rows: 3}),
    defineField({name: 'keywords', title: 'Keywords', type: 'string'}),
    defineField({name: 'keywordsAr', title: 'Keywords (Arabic)', type: 'string'}),
    defineField({name: 'canonical', title: 'Canonical', type: 'string'}),
  ],
})
