import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'navLink',
  title: 'Nav Link',
  type: 'object',
  fields: [
    defineField({ name: 'labelEn', title: 'Label (EN)', type: 'string', validation: R => R.required() }),
    defineField({ name: 'labelAr', title: 'Label (AR)', type: 'string' }),
    defineField({
      name: 'type',
      title: 'Link Type',
      type: 'string',
      options: {
        list: [
          { title: 'Internal Page', value: 'internal' },
          { title: 'External URL', value: 'external' },
          { title: 'Dropdown Trigger', value: 'dropdown' },
          { title: 'Action: Search Properties', value: 'action_search' },
        ],
        layout: 'radio',
      },
      initialValue: 'internal',
    }),
    defineField({ name: 'href', title: 'URL / Path', type: 'string' }),
    defineField({ name: 'openInNewTab', title: 'Open in New Tab', type: 'boolean', initialValue: false }),
  ],
  preview: {
    select: { title: 'labelEn', subtitle: 'href' },
  },
})