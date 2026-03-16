export const structure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Core Content')
        .child(
          S.list()
            .title('Core Content')
            .items([
              S.documentTypeListItem('property').title('Properties'),
              S.documentTypeListItem('article').title('Articles'),
              S.documentTypeListItem('developer').title('Developers'),
              S.documentTypeListItem('area').title('Areas (Where to Live)'),
            ])
        ),
      S.divider(),
      S.listItem()
        .title('Website Settings')
        .child(
          S.list()
            .title('Website Settings')
            .items([
              S.listItem()
                .title('Site Settings')
                .child(
                  S.document()
                    .schemaType('siteSettings')
                    .documentId('siteSettings')
                ),
            ])
        ),
    ])
