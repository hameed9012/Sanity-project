import { defineField, defineType } from "sanity";

export default defineType({
  name: "article",
  title: "Article",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title (EN)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "titleAr",
      title: "Title (AR)",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description (EN)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "descriptionAr",
      title: "Description (AR)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "category",
      title: "Category (EN)",
      type: "string",
    }),
    defineField({
      name: "categoryAr",
      title: "Category (AR)",
      type: "string",
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
    }),
    defineField({
      name: "readTime",
      title: "Read Time (EN)",
      type: "string",
    }),
    defineField({
      name: "readTimeAr",
      title: "Read Time (AR)",
      type: "string",
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
    }),

    defineField({
      name: "mainImage",
      title: "Main Image URL",
      type: "string",
    }),
    defineField({
      name: "mainImageCdn",
      title: "Main Image CDN",
      type: "object",
      fields: [
        defineField({
          name: "url",
          title: "URL",
          type: "string",
        }),
      ],
    }),

    defineField({
      name: "hero",
      title: "Hero Section",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Hero Title (EN)",
          type: "string",
        }),
        defineField({
          name: "titleAr",
          title: "Hero Title (AR)",
          type: "string",
        }),
        defineField({
          name: "subtitle",
          title: "Hero Subtitle (EN)",
          type: "text",
          rows: 3,
        }),
        defineField({
          name: "subtitleAr",
          title: "Hero Subtitle (AR)",
          type: "text",
          rows: 3,
        }),
        defineField({
          name: "image",
          title: "Hero Image URL",
          type: "string",
        }),
        defineField({
          name: "imageCdn",
          title: "Hero Image CDN",
          type: "object",
          fields: [
            defineField({
              name: "url",
              title: "URL",
              type: "string",
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: "author",
      title: "Author",
      type: "object",
      fields: [
        defineField({
          name: "name",
          title: "Name (EN)",
          type: "string",
        }),
        defineField({
          name: "nameAr",
          title: "Name (AR)",
          type: "string",
        }),
        defineField({
          name: "role",
          title: "Role (EN)",
          type: "string",
        }),
        defineField({
          name: "roleAr",
          title: "Role (AR)",
          type: "string",
        }),
        defineField({
          name: "initials",
          title: "Initials",
          type: "string",
        }),
        defineField({
          name: "avatar",
          title: "Avatar URL",
          type: "string",
        }),
      ],
    }),

    defineField({
      name: "tableOfContents",
      title: "Table of Contents (EN)",
      type: "array",
      of: [
        { type: "string" },
        defineField({
          type: "object",
          name: "tocEntry",
          title: "TOC Entry",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
            }),
            defineField({
              name: "titleAr",
              title: "Title (AR)",
              type: "string",
            }),
            defineField({
              name: "label",
              title: "Label",
              type: "string",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "tableOfContentsAr",
      title: "Table of Contents (AR)",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "body",
      title: "Body (EN)",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "bodyAr",
      title: "Body (AR)",
      type: "array",
      of: [{ type: "block" }],
    }),

    defineField({
      name: "sections",
      title: "Sections",
      type: "array",
      of: [
        defineField({
          type: "object",
          name: "articleSection",
          title: "Article Section",
          fields: [
            defineField({
              name: "id",
              title: "ID / Anchor",
              type: "string",
            }),
            defineField({
              name: "title",
              title: "Title (EN)",
              type: "string",
            }),
            defineField({
              name: "titleAr",
              title: "Title (AR)",
              type: "string",
            }),

            defineField({
              name: "content",
              title: "Legacy HTML Content (EN)",
              type: "text",
              rows: 8,
            }),
            defineField({
              name: "contentAr",
              title: "Legacy HTML Content (AR)",
              type: "text",
              rows: 8,
            }),

            defineField({
              name: "body",
              title: "Portable Body (EN)",
              type: "array",
              of: [{ type: "block" }],
            }),
            defineField({
              name: "bodyAr",
              title: "Portable Body (AR)",
              type: "array",
              of: [{ type: "block" }],
            }),

            defineField({
              name: "image",
              title: "Section Image URL",
              type: "string",
            }),
            defineField({
              name: "mainImage",
              title: "Section Main Image URL",
              type: "string",
            }),
            defineField({
              name: "heroImage",
              title: "Section Hero Image URL",
              type: "string",
            }),

            defineField({
              name: "keyPoints",
              title: "Key Points (EN)",
              type: "array",
              of: [{ type: "string" }],
            }),
            defineField({
              name: "keyPointsAr",
              title: "Key Points (AR)",
              type: "array",
              of: [{ type: "string" }],
            }),

            defineField({
              name: "expertQuote",
              title: "Expert Quote",
              type: "object",
              fields: [
                defineField({
                  name: "text",
                  title: "Quote Text (EN)",
                  type: "text",
                  rows: 3,
                }),
                defineField({
                  name: "textAr",
                  title: "Quote Text (AR)",
                  type: "text",
                  rows: 3,
                }),
                defineField({
                  name: "author",
                  title: "Author",
                  type: "string",
                }),
              ],
            }),

            defineField({
              name: "stats",
              title: "Stats",
              type: "array",
              of: [
                defineField({
                  type: "object",
                  fields: [
                    defineField({
                      name: "number",
                      title: "Number",
                      type: "string",
                    }),
                    defineField({
                      name: "label",
                      title: "Label (EN)",
                      type: "string",
                    }),
                    defineField({
                      name: "labelAr",
                      title: "Label (AR)",
                      type: "string",
                    }),
                    defineField({
                      name: "description",
                      title: "Description",
                      type: "string",
                    }),
                    defineField({
                      name: "descriptionAr",
                      title: "Description (AR)",
                      type: "string",
                    }),
                  ],
                }),
              ],
            }),

            defineField({
              name: "marketAnalysis",
              title: "Market Analysis",
              type: "object",
              fields: [
                defineField({
                  name: "title",
                  title: "Title (EN)",
                  type: "string",
                }),
                defineField({
                  name: "titleAr",
                  title: "Title (AR)",
                  type: "string",
                }),
                defineField({
                  name: "metrics",
                  title: "Metrics",
                  type: "array",
                  of: [
                    defineField({
                      type: "object",
                      fields: [
                        defineField({
                          name: "title",
                          title: "Title",
                          type: "string",
                        }),
                        defineField({
                          name: "titleAr",
                          title: "Title (AR)",
                          type: "string",
                        }),
                        defineField({
                          name: "value",
                          title: "Value",
                          type: "string",
                        }),
                        defineField({
                          name: "description",
                          title: "Description (EN)",
                          type: "text",
                        }),
                        defineField({
                          name: "descriptionAr",
                          title: "Description (AR)",
                          type: "text",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),

            defineField({
              name: "taxBenefits",
              title: "Tax Benefits",
              type: "array",
              of: [
                defineField({
                  type: "object",
                  fields: [
                    defineField({
                      name: "icon",
                      title: "Icon",
                      type: "string",
                    }),
                    defineField({
                      name: "title",
                      title: "Title",
                      type: "string",
                    }),
                    defineField({
                      name: "titleAr",
                      title: "Title (AR)",
                      type: "string",
                    }),
                    defineField({
                      name: "description",
                      title: "Description",
                      type: "text",
                    }),
                    defineField({
                      name: "descriptionAr",
                      title: "Description (AR)",
                      type: "text",
                    }),
                  ],
                }),
              ],
            }),

            defineField({
              name: "caseStudy",
              title: "Case Study",
              type: "object",
              fields: [
                defineField({
                  name: "title",
                  title: "Title",
                  type: "string",
                }),
                defineField({
                  name: "titleAr",
                  title: "Title (AR)",
                  type: "string",
                }),
                defineField({
                  name: "comparisons",
                  title: "Comparisons",
                  type: "array",
                  of: [
                    defineField({
                      type: "object",
                      fields: [
                        defineField({
                          name: "location",
                          title: "Location",
                          type: "string",
                        }),
                        defineField({
                          name: "locationAr",
                          title: "Location (AR)",
                          type: "string",
                        }),
                        defineField({
                          name: "taxes",
                          title: "Taxes",
                          type: "array",
                          of: [{ type: "string" }],
                        }),
                        defineField({
                          name: "totalTax",
                          title: "Total Tax",
                          type: "string",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),

            defineField({
              name: "advantages",
              title: "Advantages",
              type: "array",
              of: [
                defineField({
                  type: "object",
                  fields: [
                    defineField({
                      name: "icon",
                      title: "Icon",
                      type: "string",
                    }),
                    defineField({
                      name: "title",
                      title: "Title",
                      type: "string",
                    }),
                    defineField({
                      name: "titleAr",
                      title: "Title (AR)",
                      type: "string",
                    }),
                    defineField({
                      name: "description",
                      title: "Description",
                      type: "text",
                    }),
                    defineField({
                      name: "descriptionAr",
                      title: "Description (AR)",
                      type: "text",
                    }),
                  ],
                }),
              ],
            }),

            defineField({
              name: "positioningAdvantages",
              title: "Positioning Advantages",
              type: "array",
              of: [
                defineField({
                  type: "object",
                  fields: [
                    defineField({
                      name: "icon",
                      title: "Icon",
                      type: "string",
                    }),
                    defineField({
                      name: "title",
                      title: "Title",
                      type: "string",
                    }),
                    defineField({
                      name: "titleAr",
                      title: "Title (AR)",
                      type: "string",
                    }),
                    defineField({
                      name: "description",
                      title: "Description",
                      type: "text",
                    }),
                    defineField({
                      name: "descriptionAr",
                      title: "Description (AR)",
                      type: "text",
                    }),
                  ],
                }),
              ],
            }),

            defineField({
              name: "investmentOpportunities",
              title: "Investment Opportunities",
              type: "array",
              of: [
                defineField({
                  type: "object",
                  fields: [
                    defineField({
                      name: "icon",
                      title: "Icon",
                      type: "string",
                    }),
                    defineField({
                      name: "title",
                      title: "Title",
                      type: "string",
                    }),
                    defineField({
                      name: "titleAr",
                      title: "Title (AR)",
                      type: "string",
                    }),
                    defineField({
                      name: "description",
                      title: "Description",
                      type: "text",
                    }),
                    defineField({
                      name: "descriptionAr",
                      title: "Description (AR)",
                      type: "text",
                    }),
                    defineField({
                      name: "details",
                      title: "Details",
                      type: "object",
                      fields: [
                        defineField({
                          name: "entryPrice",
                          title: "Entry Price",
                          type: "string",
                        }),
                        defineField({
                          name: "yield",
                          title: "Yield",
                          type: "string",
                        }),
                        defineField({
                          name: "holdingPeriod",
                          title: "Holding Period",
                          type: "string",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),

            defineField({
              name: "opportunities",
              title: "Opportunities",
              type: "array",
              of: [
                defineField({
                  type: "object",
                  fields: [
                    defineField({
                      name: "title",
                      title: "Title",
                      type: "string",
                    }),
                    defineField({
                      name: "titleAr",
                      title: "Title (AR)",
                      type: "string",
                    }),
                    defineField({
                      name: "description",
                      title: "Description",
                      type: "text",
                    }),
                    defineField({
                      name: "descriptionAr",
                      title: "Description (AR)",
                      type: "text",
                    }),
                  ],
                }),
              ],
            }),

            defineField({
              name: "futureProjections",
              title: "Future Projections",
              type: "array",
              of: [
                defineField({
                  type: "object",
                  fields: [
                    defineField({
                      name: "title",
                      title: "Title",
                      type: "string",
                    }),
                    defineField({
                      name: "titleAr",
                      title: "Title (AR)",
                      type: "string",
                    }),
                    defineField({
                      name: "year",
                      title: "Year",
                      type: "string",
                    }),
                    defineField({
                      name: "items",
                      title: "Items",
                      type: "array",
                      of: [
                        { type: "string" },
                        defineField({
                          type: "object",
                          name: "projectionItem",
                          title: "Projection Item",
                          fields: [
                            defineField({
                              name: "label",
                              title: "Label",
                              type: "string",
                            }),
                            defineField({
                              name: "value",
                              title: "Value",
                              type: "string",
                            }),
                          ],
                        },
                      ],
                    }),
                  ],
                }),
              ],
            }),

            defineField({
              name: "projections",
              title: "Projections",
              type: "array",
              of: [
                defineField({
                  type: "object",
                  fields: [
                    defineField({
                      name: "title",
                      title: "Title",
                      type: "string",
                    }),
                    defineField({
                      name: "year",
                      title: "Year",
                      type: "string",
                    }),
                    defineField({
                      name: "items",
                      title: "Items",
                      type: "array",
                      of: [{ type: "string" }],
                    }),
                  ],
                }),
              ],
            }),

            defineField({
              name: "roadmap",
              title: "Roadmap",
              type: "array",
              of: [
                defineField({
                  type: "object",
                  fields: [
                    defineField({
                      name: "step",
                      title: "Step",
                      type: "string",
                    }),
                    defineField({
                      name: "title",
                      title: "Title",
                      type: "string",
                    }),
                    defineField({
                      name: "titleAr",
                      title: "Title (AR)",
                      type: "string",
                    }),
                    defineField({
                      name: "description",
                      title: "Description",
                      type: "text",
                    }),
                    defineField({
                      name: "descriptionAr",
                      title: "Description (AR)",
                      type: "text",
                    }),
                  ],
                }),
              ],
            }),

            defineField({
              name: "rentalYields",
              title: "Rental Yields",
              type: "array",
              of: [
                defineField({
                  type: "object",
                  fields: [
                    defineField({
                      name: "image",
                      title: "Image URL",
                      type: "string",
                    }),
                    defineField({
                      name: "location",
                      title: "Location",
                      type: "string",
                    }),
                    defineField({
                      name: "locationAr",
                      title: "Location (AR)",
                      type: "string",
                    }),
                    defineField({
                      name: "averageYield",
                      title: "Average Yield",
                      type: "string",
                    }),
                    defineField({
                      name: "premiumYield",
                      title: "Premium Yield",
                      type: "string",
                    }),
                    defineField({
                      name: "averageRent",
                      title: "Average Rent",
                      type: "string",
                    }),
                    defineField({
                      name: "propertyType",
                      title: "Property Type",
                      type: "string",
                    }),
                    defineField({
                      name: "propertyTypeAr",
                      title: "Property Type (AR)",
                      type: "string",
                    }),
                    defineField({
                      name: "demand",
                      title: "Demand",
                      type: "string",
                    }),
                  ],
                }),
              ],
            }),

            defineField({
              name: "analysis",
              title: "Analysis Blocks",
              type: "array",
              of: [
                defineField({
                  type: "object",
                  fields: [
                    defineField({
                      name: "title",
                      title: "Title",
                      type: "string",
                    }),
                    defineField({
                      name: "titleAr",
                      title: "Title (AR)",
                      type: "string",
                    }),
                    defineField({
                      name: "description",
                      title: "Description",
                      type: "text",
                    }),
                    defineField({
                      name: "descriptionAr",
                      title: "Description (AR)",
                      type: "text",
                    }),
                    defineField({
                      name: "data",
                      title: "Data",
                      type: "array",
                      of: [
                        defineField({
                          type: "object",
                          fields: [
                            defineField({
                              name: "label",
                              title: "Label",
                              type: "string",
                            }),
                            defineField({
                              name: "labelAr",
                              title: "Label (AR)",
                              type: "string",
                            }),
                            defineField({
                              name: "value",
                              title: "Value",
                              type: "string",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),

            defineField({
              name: "growthTimeline",
              title: "Growth Timeline",
              type: "array",
              of: [
                defineField({
                  type: "object",
                  fields: [
                    defineField({
                      name: "year",
                      title: "Year",
                      type: "string",
                    }),
                    defineField({
                      name: "title",
                      title: "Title",
                      type: "string",
                    }),
                    defineField({
                      name: "titleAr",
                      title: "Title (AR)",
                      type: "string",
                    }),
                    defineField({
                      name: "description",
                      title: "Description",
                      type: "text",
                    }),
                    defineField({
                      name: "descriptionAr",
                      title: "Description (AR)",
                      type: "text",
                    }),
                    defineField({
                      name: "growth",
                      title: "Growth",
                      type: "string",
                    }),
                  ],
                }),
              ],
            }),

            defineField({
              name: "processSteps",
              title: "Process Steps",
              type: "array",
              of: [
                defineField({
                  type: "object",
                  fields: [
                    defineField({
                      name: "number",
                      title: "Number",
                      type: "string",
                    }),
                    defineField({
                      name: "title",
                      title: "Title",
                      type: "string",
                    }),
                    defineField({
                      name: "titleAr",
                      title: "Title (AR)",
                      type: "string",
                    }),
                    defineField({
                      name: "description",
                      title: "Description",
                      type: "text",
                    }),
                    defineField({
                      name: "descriptionAr",
                      title: "Description (AR)",
                      type: "text",
                    }),
                  ],
                }),
              ],
            }),

            defineField({
              name: "caseStudies",
              title: "Case Studies",
              type: "array",
              of: [
                defineField({
                  type: "object",
                  fields: [
                    defineField({
                      name: "title",
                      title: "Title",
                      type: "string",
                    }),
                    defineField({
                      name: "titleAr",
                      title: "Title (AR)",
                      type: "string",
                    }),
                    defineField({
                      name: "investment",
                      title: "Investment",
                      type: "string",
                    }),
                    defineField({
                      name: "downPayment",
                      title: "Down Payment",
                      type: "string",
                    }),
                    defineField({
                      name: "salePrice",
                      title: "Sale Price",
                      type: "string",
                    }),
                    defineField({
                      name: "profit",
                      title: "Profit",
                      type: "string",
                    }),
                    defineField({
                      name: "roi",
                      title: "ROI",
                      type: "string",
                    }),
                    defineField({
                      name: "timeframe",
                      title: "Timeframe",
                      type: "string",
                    }),
                  ],
                }),
              ],
            }),

            defineField({
              name: "risks",
              title: "Risks",
              type: "array",
              of: [
                defineField({
                  type: "object",
                  fields: [
                    defineField({
                      name: "title",
                      title: "Title",
                      type: "string",
                    }),
                    defineField({
                      name: "titleAr",
                      title: "Title (AR)",
                      type: "string",
                    }),
                    defineField({
                      name: "risk",
                      title: "Risk",
                      type: "text",
                    }),
                    defineField({
                      name: "riskAr",
                      title: "Risk (AR)",
                      type: "text",
                    }),
                    defineField({
                      name: "mitigation",
                      title: "Mitigation",
                      type: "text",
                    }),
                    defineField({
                      name: "mitigationAr",
                      title: "Mitigation (AR)",
                      type: "text",
                    }),
                  ],
                }),
              ],
            }),

            defineField({
              name: "developments",
              title: "Developments",
              type: "array",
              of: [
                defineField({
                  type: "object",
                  fields: [
                    defineField({
                      name: "name",
                      title: "Name",
                      type: "string",
                    }),
                    defineField({
                      name: "nameAr",
                      title: "Name (AR)",
                      type: "string",
                    }),
                    defineField({
                      name: "developer",
                      title: "Developer",
                      type: "string",
                    }),
                    defineField({
                      name: "price",
                      title: "Price",
                      type: "string",
                    }),
                    defineField({
                      name: "roi",
                      title: "ROI",
                      type: "string",
                    }),
                    defineField({
                      name: "completion",
                      title: "Completion",
                      type: "string",
                    }),
                  ],
                }),
              ],
            }),

            defineField({
              name: "strategies",
              title: "Strategies",
              type: "array",
              of: [
                defineField({
                  type: "object",
                  fields: [
                    defineField({
                      name: "title",
                      title: "Title",
                      type: "string",
                    }),
                    defineField({
                      name: "titleAr",
                      title: "Title (AR)",
                      type: "string",
                    }),
                    defineField({
                      name: "description",
                      title: "Description",
                      type: "text",
                    }),
                    defineField({
                      name: "descriptionAr",
                      title: "Description (AR)",
                      type: "text",
                    }),
                  ],
                }),
              ],
            }),

            defineField({
              name: "appreciationMetrics",
              title: "Appreciation Metrics",
              type: "array",
              of: [
                defineField({
                  type: "object",
                  fields: [
                    defineField({
                      name: "label",
                      title: "Label",
                      type: "string",
                    }),
                    defineField({
                      name: "labelAr",
                      title: "Label (AR)",
                      type: "string",
                    }),
                    defineField({
                      name: "value",
                      title: "Value",
                      type: "string",
                    }),
                    defineField({
                      name: "trend",
                      title: "Trend",
                      type: "string",
                    }),
                  ],
                }),
              ],
            }),

            defineField({
              name: "marketHealth",
              title: "Market Health",
              type: "array",
              of: [
                defineField({
                  type: "object",
                  fields: [
                    defineField({
                      name: "label",
                      title: "Label",
                      type: "string",
                    }),
                    defineField({
                      name: "labelAr",
                      title: "Label (AR)",
                      type: "string",
                    }),
                    defineField({
                      name: "value",
                      title: "Value",
                      type: "string",
                    }),
                    defineField({
                      name: "status",
                      title: "Status",
                      type: "string",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: "cta",
      title: "CTA",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Title (EN)",
          type: "string",
        }),
        defineField({
          name: "titleAr",
          title: "Title (AR)",
          type: "string",
        }),
        defineField({
          name: "description",
          title: "Description (EN)",
          type: "text",
          rows: 3,
        }),
        defineField({
          name: "descriptionAr",
          title: "Description (AR)",
          type: "text",
          rows: 3,
        }),
        defineField({
          name: "buttonLabel",
          title: "Primary Button Label (EN)",
          type: "string",
        }),
        defineField({
          name: "buttonLabelAr",
          title: "Primary Button Label (AR)",
          type: "string",
        }),
        defineField({
          name: "buttonUrl",
          title: "Primary Button URL",
          type: "string",
        }),
        defineField({
          name: "secondaryButtonLabel",
          title: "Secondary Button Label (EN)",
          type: "string",
        }),
        defineField({
          name: "secondaryButtonLabelAr",
          title: "Secondary Button Label (AR)",
          type: "string",
        }),
        defineField({
          name: "secondaryButtonUrl",
          title: "Secondary Button URL",
          type: "string",
        }),
        defineField({
          name: "trustNote",
          title: "Trust Note (EN)",
          type: "string",
        }),
        defineField({
          name: "trustNoteAr",
          title: "Trust Note (AR)",
          type: "string",
        }),
        defineField({
          name: "inlineTitle",
          title: "Inline CTA Title (EN)",
          type: "string",
        }),
        defineField({
          name: "inlineTitleAr",
          title: "Inline CTA Title (AR)",
          type: "string",
        }),
        defineField({
          name: "inlineDescription",
          title: "Inline CTA Description (EN)",
          type: "text",
          rows: 2,
        }),
        defineField({
          name: "inlineDescriptionAr",
          title: "Inline CTA Description (AR)",
          type: "text",
          rows: 2,
        }),
      ],
    }),

    defineField({
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
    }),
    defineField({
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "seoKeywords",
      title: "SEO Keywords",
      type: "string",
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "mainImage",
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || "Untitled Article",
        subtitle: subtitle || "Article",
        media,
      };
    },
  },
});