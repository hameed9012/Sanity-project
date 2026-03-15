export const structure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('property').title('Properties'),
      S.documentTypeListItem('article').title('Articles'),
      S.documentTypeListItem('developer').title('Developers'),
      S.documentTypeListItem('area').title('Areas (Where to Live)'),
      S.documentTypeListItem('siteSettings').title('Site Settings'),
    ])
