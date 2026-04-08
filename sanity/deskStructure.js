const propertyList = (S, title, filter = '_type == "property"') =>
  S.listItem()
    .title(title)
    .child(
      S.documentList()
        .title(title)
        .schemaType("property")
        .filter(filter)
        .defaultOrdering([{ field: "_updatedAt", direction: "desc" }])
    );

export const structure = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Core Content")
        .child(
          S.list()
            .title("Core Content")
            .items([
              propertyList(S, "Properties"),
              propertyList(S, "Off-Plan Properties", '_type == "property" && status == "offplan"'),
              propertyList(S, "Secondary Properties", '_type == "property" && status == "secondary"'),
              propertyList(S, "Resale Properties", '_type == "property" && status == "resale"'),
              propertyList(S, "Rental Properties", '_type == "property" && status == "rental"'),
              propertyList(S, "Land Properties", '_type == "property" && status == "land"'),
              S.documentTypeListItem("article").title("Articles"),
              S.documentTypeListItem("developer").title("Developers"),
              S.documentTypeListItem("area").title("Areas (Where to Live)"),
            ])
        ),
      S.divider(),
      S.listItem()
        .title("Website Settings")
        .child(
          S.list()
            .title("Website Settings")
            .items([
              S.listItem()
                .title("Site Settings")
                .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
            ])
        ),
    ]);
