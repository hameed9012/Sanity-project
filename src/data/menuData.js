// ✅ src/data/menuData.js
// Single source of truth — MUST match src/app/projects/* exactly
// (Everything included + NO duplicates)

export const menuData = {
  categories: [
    // =====================================================
    // 🏙️ APARTMENTS
    // =====================================================
    {
      id: 1,
      name: "Apartments",
      slug: "apartments",
      description: "Luxury apartments in prime locations",
      developers: [
        {
          id: 1,
          name: "Sobha Realty",
          slug: "sobha",
          projects: [
            { id: 101, title: "Sobha Sky Parks", slug: "skyparks" },
            { id: 102, title: "Sobha Aqua Crest", slug: "aqua-crest" },
            { id: 103, title: "Sobha Central", slug: "central" },
            { id: 104, title: "Sobha Aquamont", slug: "aquamont" },
            { id: 105, title: "Sobha Orbis", slug: "orbis" },
            { id: 107, title: "Sobha Solis", slug: "sobha-solis" },
            { id: 108, title: "Sobha One", slug: "sobha-one" },
          ],
        },

        {
          id: 2,
          name: "DAMAC Properties",
          slug: "damac",
          projects: [
            { id: 109, title: "DAMAC Avanti", slug: "damac-avanti" },
            {
              id: 113,
              title: "Chelsea Residences",
              slug: "chelsea-residences",
            },
            { id: 120, title: "DAMAC Safa Gate", slug: "safa-gate" },
          ],
        },

        // ✅ TONINO IS HERE (Gulf Land Property)
        {
          id: 3,
          name: "Gulf Land Property",
          slug: "gulf-land-property",
          projects: [
            {
              id: 110,
              title: "Tonino Lamborghini Residences",
              slug: "tonino-lamborghini-residences",
            },
          ],
        },

        {
          id: 4,
          name: "Omniyat",
          slug: "omniyat",
          projects: [
            // {
            //   id: 111,
            //   title: "The Alba Residences",
            //   slug: "the-alba-residences",
            // },
          ],
        },

        // {
        //   id: 5,
        //   name: "Danube Properties",
        //   slug: "danube",
        //   projects: [
        //     { id: 112, title: "Shahrukhz by Danube", slug: "danube-shahrukhz" },
        //   ],
        // },

        {
          id: 6,
          name: "Binghatti",
          slug: "binghatti",
          projects: [{ id: 114, title: "Aquarise", slug: "aquarise" }],
        },

        {
          id: 7,
          name: "Beyond",
          slug: "beyond",
          projects: [{ id: 115, title: "Kanyon", slug: "kanyon" }],
        },

        {
          id: 8,
          name: "Samana",
          slug: "samana",
          projects: [
            { id: 116, title: "Imperial Garden", slug: "imperial-garden" },
          ],
        },

        {
          id: 9,
          name: "Evolutions",
          slug: "evolutions",
          projects: [
            { id: 117, title: "Butterfly Towers", slug: "butterfly-towers" },
          ],
        },

        {
          id: 10,
          name: "Arada",
          slug: "arada",
          projects: [
            { id: 118, title: "Armani Beach Residences", slug: "armani" },
          ],
        },

        {
          id: 11,
          name: "Azizi Developments",
          slug: "azizi",
          projects: [{ id: 119, title: "Azizi Milan", slug: "milan" }],
        },

        {
          id: 12,
          name: "Imtiaz Developments",
          slug: "imtiaz",
          projects: [{ id: 121, title: "Wynwood", slug: "wynwood" }],
        },

        {
          id: 13,
          name: "Lazord",
          slug: "lazord",
          projects: [{ id: 122, title: "Lazord by Lapis", slug: "lapis" }],
        },

        {
          id: 14,
          name: "Prestige One Developments",
          slug: "prestige-one",
          projects: [
            {
              id: 123,
              title: "Hilton Residences Dubai Maritime City",
              slug: "hilton-residences",
            },
          ],
        },
      ],
    },

    // =====================================================
    // 🏡 VILLAS
    // =====================================================
    {
      id: 2,
      name: "Villas",
      slug: "villas",
      description: "Premium villas and townhouses",
      developers: [
        {
          id: 1,
          name: "Sobha Realty",
          slug: "sobha",
          projects: [
            {
              id: 201,
              title: "Sobha Hartland 2 Villas",
              slug: "sobha-estates",
            },
            {
              id: 202,
              title: "Sobha Al Sinniyyah Island",
              slug: "siniya-island",
            },
            // { id: 203, title: "Sobha Reserve", slug: "sobha-reserve" },
            { id: 204, title: "Sobha Elwood", slug: "sobha-elwood" },
            { id: 205, title: "Sobha The Element", slug: "the-element" },
          ],
        },

        {
          id: 2,
          name: "Arada",
          slug: "arada",
          projects: [{ id: 206, title: "Arada Massar 3", slug: "massar" }],
        },

        {
          id: 3,
          name: "DAMAC Properties",
          slug: "damac",
          projects: [
            { id: 207, title: "DAMAC Islands 2", slug: "damac-islands-2" },
          ],
        },

        {
          id: 4,
          name: "Ajmal Makan",
          slug: "ajmal-makan",
          projects: [
            { id: 208, title: "The View Island", slug: "the-view-island" },
          ],
        },
      ],
    },

    // =====================================================
    // 🏢 COMMERCIAL / RETAIL
    // =====================================================
    {
      id: 3,
      name: "Commercial / Retail",
      slug: "commercial-retail",
      description: "Commercial and retail spaces",
      developers: [
        {
          id: 1,
          name: "Azizi Developments",
          slug: "azizi",
          projects: [
            {
              id: 301,
              title: "Azizi Riviera Retails",
              slug: "riviera-retails",
            },
          ],
        },

        {
          id: 2,
          name: "Omniyat",
          slug: "omniyat",
          projects: [{ id: 305, title: "Lumena Alta", slug: "lumenaalta" }],
        },

        {
          id: 3,
          name: "Beyond",
          slug: "beyond",
          projects: [{ id: 306, title: "31 Above", slug: "31-above" }],
        },
      ],
    },

    // =====================================================
    // 🏔️ PENTHOUSES
    // =====================================================
    {
      id: 4,
      name: "Penthouses",
      slug: "penthouses",
      description: "Luxury penthouses with premium amenities",
      developers: [
        {
          id: 1,
          name: "Sobha Realty",
          slug: "sobha",
          projects: [
            {
              id: 401,
              title: "Sobha Sea Haven",
              slug: "seahaven-penthouse",
            },
            { id: 402, title: "Sobha The S", slug: "the-s" },
          ],
        },

        {
          id: 2,
          name: "Binghatti",
          slug: "binghatti",
          projects: [{ id: 403, title: "Bugatti Residences", slug: "bugatti" }],
        },
      ],
    },

    // =====================================================
    // 🧩 MIXED USE
    // =====================================================
    {
      id: 5,
      name: "Mixed Use",
      slug: "mixed-use",
      description: "Residential + commercial projects",
      developers: [
        {
          id: 1,
          name: "Danube Properties",
          slug: "danube",
          projects: [
            { id: 501, title: "Danube Aspirz", slug: "danube-aspirz" },
          ],
        },

        {
          id: 2,
          name: "Ellington Properties",
          slug: "ellington",
          projects: [
            { id: 502, title: "Eltiera Views", slug: "eltiera-views" },
          ],
        },
      ],
    },
  ],
};

export default menuData;
