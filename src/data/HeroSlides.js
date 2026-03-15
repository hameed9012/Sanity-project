// ❌ NO hooks here, just a pure function

export const createMenuData = (t, locale, CDN) => {
  return {
    categories: [
      // ==========================================================
      // APARTMENTS
      // ==========================================================
      {
        id: 1,
        name: t("categories.apartments"),
        slug: "apartments",
        description: t("descriptions.apartments"),
        image: `${CDN}/sky-parks/exterior-night-01.jpg`,
        developers: [
          {
            id: 1,
            name: t("developers.sobhaRealty"),
            slug: "sobha",
            image: `${CDN}/aquamont/intro-main.png`,
            logo: `/Sobha-Realty-Square-Logo.jpg`,
            projects: [
              {
                id: 101,
                title: t("projectNames.sobhaSkyParks"),
                slug: "skyparks",
                image: `${CDN}/sky-parks/exterior-night-01.jpg`,
                description: t("descriptions.apartments"),
              },
              {
                id: 102,
                title: t("projectNames.sobhaAquaCrest"),
                slug: "aqua-crest",
                image: `${CDN}/aqua-crest/amenity-infinity-pool-01.jpg`,
                description: t("descriptions.apartments"),
              },
              {
                id: 103,
                title: t("projectNames.sobhaCentral"),
                slug: "central",
                image: `${CDN}/sobha-central/exterior-towers-angled-01.jpg`,
                description: t("descriptions.apartments"),
              },
              {
                id: 104,
                title: t("projectNames.sobhaAquamont"),
                slug: "aquamont",
                image: `${CDN}/aquamont/intro-main.png`,
                description: t("descriptions.apartments"),
              },
            ],
          },
        ],
      },

      // ==========================================================
      // VILLAS
      // ==========================================================
      {
        id: 2,
        name: t("categories.villas"),
        slug: "villas",
        description: t("descriptions.villas"),
        image: `${CDN}/hartland/hero-bg.jpg`,
        developers: [
          {
            id: 1,
            name: t("developers.sobhaRealty"),
            slug: "sobha",
            image: `${CDN}/hartland/hero-bg.jpg`,
            logo: `/Sobha-Realty-Square-Logo.jpg`,
            projects: [
              {
                id: 201,
                title: t("projectNames.sobhaEstates"),
                slug: "sobha-estates",
                image: `${CDN}/hartland/hero-bg.jpg`,
                description: t("descriptions.villas"),
              },
              {
                id: 202,
                title: t("projectNames.sobhaSiniyaIsland"),
                slug: "siniya-island",
                image: `${CDN}/al-sinniyyah-island/hero-bg.jpg`,
                description: t("descriptions.villas"),
              },
            ],
          },

          // ARADA — FIXED
          {
            id: 2,
            name: t("developers.arada"),
            slug: "arada",
            image: `${CDN}/massar-3/hero-bg.jpg`,
            logo: `/arada-developer.avif`,
            projects: [
              {
                id: 203,
                title: t("projectNames.aradaMassar3"),
                slug: "massar",
                image: `${CDN}/massar-3/hero-bg.jpg`,
                description: t("descriptions.villas"),
              },
            ],
          },

          // DAMAC — FIXED COMPLETELY
          {
            id: 3,
            name: t("developers.damacProperties"),
            slug: "damac",
            image: `${CDN}/damac-island-2/WhatsApp%20Image%202025-11-19%20at%2013.26.51%20%281%29.jpeg`,
            logo: `/damac-logo.png`,
            projects: [
              {
                id: 204,
                title: t("projectNames.damacIslands2"),
                slug: "damac-islands-2",
                image: `${CDN}/damac-island-2/WhatsApp%20Image%202025-11-19%20at%2013.26.51%20%281%29.jpeg`,
                description: t("descriptions.villas"),
              },
            ],
          },
        ],
      },

      // ==========================================================
      // COMMERCIAL RETAIL
      // ==========================================================
      {
        id: 3,
        name: t("categories.commercial"),
        slug: "commercial-retail",
        description: t("descriptions.commercial"),
        image: `${CDN}/riviera/hero-bg.jpg`,
        developers: [
          {
            id: 1,
            name: t("developers.aziziDevelopments"),
            slug: "azizi",
            image: `${CDN}/riviera/hero-bg.jpg`,
            logo: `/azizi.jpg`,
            projects: [
              {
                id: 301,
                title: t("projectNames.aziziRivieraRetails"),
                slug: "riviera-retails",
                image: `${CDN}/riviera/hero-bg.jpg`,
                description: t("descriptions.commercial"),
              },
            ],
          },
        ],
      },

      // ==========================================================
      // PENTHOUSES
      // ==========================================================
      {
        id: 4,
        name: t("categories.penthouses"),
        slug: "penthouses",
        description: t("descriptions.penthouses"),
        image: `${CDN}/sky-parks/exterior-night-01.jpg`,
        developers: [
          {
            id: 1,
            name: t("developers.sobhaRealty"),
            slug: "sobha",
            image: `${CDN}/sky-parks/exterior-night-01.jpg`,
            logo: `/Sobha-Realty-Square-Logo.jpg`,
            projects: [
              {
                id: 401,
                title: t("projectNames.sobhaSeaHavenPenthouse"),
                slug: "seahaven-penthouse",
                image: `${CDN}/sky-parks/exterior-night-01.jpg`,
                description: t("descriptions.penthouses"),
              },
            ],
          },
        ],
      },
    ],
  };
};
