// sanity/deskStructure.js
export const structure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('property').title('Properties'),

      // Optional: show any other schema types you add later
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => !['property', 'project'].includes(item.getId()),
      ),
    ])
