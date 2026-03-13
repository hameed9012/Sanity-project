export const structure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('property').title('Properties'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => !['property'].includes(item.getId()),
      ),
    ])