// ✅ src/data/propertiesData.js
// Full working propertiesData with only specified developers

export const propertiesData = (CDN, t, locale) => ({
  categories: [
    /* ===================== 1) APARTMENTS ===================== */
    {
      id: 1,
      name: t?.("categories.apartments") || "Apartments",
      slug: "apartments",
      description:
        t?.("descriptions.apartments") ||
        "Luxury apartments in prime locations",
      image: `${CDN}/sky-parks/exterior-night-01.jpg`,
      developers: [
        /* ===================== 1.1) SOBHA (APARTMENTS) ===================== */
        {
          id: 1,
          name: t?.("developers.sobhaRealty") || "Sobha Realty",
          slug: "sobha",
          image: `${CDN}/aquamont/intro-main.png`,
          logo: `/Sobha-Realty-Square-Logo.jpg`,
          projects: [
            {
              id: 107,
              title: t?.("projectNames.sobhaOne") || "Sobha One",
              slug: "sobha-one",
              image: `https://luxury-real-estate-media.b-cdn.net/sobha-one/overview01.jpg`,
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "secondary",
            },
            {
              id: 10702,
              title: t?.("projectNames.sobhaVerde") || "Sobha Verde",
              slug: "verde",
              image: `https://luxury-real-estate-media.b-cdn.net/sobha-verde/A%20(6).jpg`,
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "secondary",
            },
            {
              id: 10703,
              title: t?.("projectNames.sobhaReserve") || "Sobha Reserve",
              slug: "reserve",
              image: `https://luxury-real-estate-media.b-cdn.net/sobha-reserve/Clubhouse.png`,
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "secondary",
            },
            {
              id: 108,
              title: t?.("projectNames.sobhaTheElement") || "Sobha The Element",
              slug: "the-element",
              image: `https://luxury-real-estate-media.b-cdn.net/sobha-the-element/Aerial%20Shot%20%28Night%29.jpg?v=1`,
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 101,
              title: t?.("projectNames.sobhaSkyParks") || "Sobha Sky Parks",
              slug: "skyparks",
              image: `${CDN}/sky-parks/exterior-night-01.jpg`,
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 103,
              title: t?.("projectNames.sobhaCentral") || "Sobha Central",
              slug: "central",
              image: `${CDN}/sobha-central/exterior-towers-angled-01.jpg`,
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 104,
              title: t?.("projectNames.sobhaAquamont") || "Sobha Aquamont",
              slug: "aquamont",
              image: `${CDN}/aquamont/intro-main.png`,
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 102,
              title: t?.("projectNames.sobhaAquaCrest") || "Sobha Aqua Crest",
              slug: "aqua-crest",
              image: `${CDN}/aqua-crest/amenity-infinity-pool-01.jpg`,
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 105,
              title: t?.("projectNames.sobhaOrbis") || "Sobha Orbis",
              slug: "orbis",
              image: `${CDN}/sobha-orbis/A%20%285%29-.jpg`,
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 106,
              title: t?.("projectNames.sobhaSolis") || "Sobha Solis",
              slug: "sobha-solis",
              image: `${CDN}/sobha-solis/Sobha%20Solis.jpg`,
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 1120,
              title:
                t?.("projectNames.sobhaSeaHavenPenthouse") ||
                "Sobha SeaHaven Penthouse",
              slug: "seahaven-penthouse",
              image: `https://luxury-real-estate-media.b-cdn.net/seahaven/intro-main.jpg`,
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
          ],
        },

        /* ===================== 1.2) DAMAC (APARTMENTS) ===================== */
        {
          id: 2,
          name: t?.("developers.damacProperties") || "DAMAC Properties",
          slug: "damac",
          image: `${CDN}/damac-avanti/02_Avanti%20MasterPic.png`,
          logo: `/damac-logo.png`,
          projects: [
            {
              id: 109,
              title:
                t?.("projectNames.chelseaResidences") || "Chelsea Residences",
              slug: "chelsea-residences",
              image: `https://luxury-real-estate-media.b-cdn.net/damac/maritime-city/damac-chelsea-residences/1.%2020250429_Image-Update_05_BRILLIANCE.jpg`,
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 110,
              title: t?.("projectNames.damacSafaGate") || "DAMAC Safa Gate",
              slug: "safa-gate",
              image:
                "https://luxury-real-estate-media.b-cdn.net/damac/damac-safa-gate/WhatsApp%20Image%202025-12-17%20at%2020.05.03.jpeg",
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 11101,
              title: t?.("projectNames.damacAltitude") || "DAMAC Altitude",
              slug: "altitude",
              image:
                "https://luxury-real-estate-media.b-cdn.net/damac/damac-altitude/DB2-SL-LIVING%26DINING_04.jpg",
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 11102,
              title: t?.("projectNames.damacAykonCity") || "DAMAC AYKON City",
              slug: "aykon-city",
              image:
                "https://luxury-real-estate-media.b-cdn.net/damac/damac-aykon-city/Aykon%20City%20Int2.jpg",
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 11103,
              title: t?.("projectNames.damacCanalCrown") || "DAMAC Canal Crown",
              slug: "canal-crown",
              image:
                "https://luxury-real-estate-media.b-cdn.net/damac/damac-canal-crown/V13.jpg",
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 11104,
              title:
                t?.("projectNames.damacCanalHeights") || "DAMAC Canal Heights",
              slug: "canal-heights",
              image:
                "https://luxury-real-estate-media.b-cdn.net/damac/damac-canal-heights/CAFFE%202402%20(1).png",
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 11105,
              title: t?.("projectNames.damacChicTower") || "DAMAC Chic Tower",
              slug: "chic-tower",
              image:
                "https://luxury-real-estate-media.b-cdn.net/damac/damac-chic-tower/RENDERS16.jpg",
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 11106,
              title: t?.("projectNames.cavalliCouture") || "Cavalli Couture",
              slug: "cavalli-couture",
              image:
                "https://luxury-real-estate-media.b-cdn.net/damac/cavalli-couture/202402~3.JPG",
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 11107,
              title: t?.("projectNames.damacCasa") || "DAMAC Casa",
              slug: "damac-casa",
              image:
                "https://luxury-real-estate-media.b-cdn.net/damac/damac-casa/Al%20Sufouh_Spa_Cam-02_20230922-People.jpg",
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 11108,
              title: t?.("projectNames.damacLagoonViews") || "Lagoon Views",
              slug: "lagoon-views",
              image:
                "https://luxury-real-estate-media.b-cdn.net/damac/damac-lagoon-views/DAMAC%20-%20LAGOON%20VIEWS%20-%2005.jpg",
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 11109,
              title:
                t?.("projectNames.damacRiversideViews") || "Riverside Views",
              slug: "riverside-views",
              image:
                "https://luxury-real-estate-media.b-cdn.net/damac/damac-riverside-views/DAMAC%20RIVERSIDE%20VIEWS%20-%20Render%2007.jpg",
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 11111,
              title:
                t?.("projectNames.damacHills2Elo2") ||
                "DAMAC Hills || - ELO ||",
              slug: "damac-hills-elo-2",
              image:
                "https://luxury-real-estate-media.b-cdn.net/damac/damac-hills-2-elo-2/D2%20-%20ELO%20-%2002.jpg",
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 11112,
              title: t?.("projectNames.damacBay") || "DAMAC Bay",
              slug: "damac-bay",
              image:
                "https://luxury-real-estate-media.b-cdn.net/damac/damac-bay/1-2.jpg",
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 11113,
              title: t?.("projectNames.golfGreens") || "Golf Greens",
              slug: "golf-greens",
              image:
                "https://luxury-real-estate-media.b-cdn.net/damac/golf-greens/08.jpg",
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 11115,
              title: t?.("projectNames.damacVolta") || "DAMAC Volta",
              slug: "volta",
              image:
                "https://luxury-real-estate-media.b-cdn.net/damac/damac-volta/SZR_04_NIGHT.jpg",
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 11116,
              title: t?.("projectNames.damacDistrict") || "DAMAC District",
              slug: "damac-district",
              image:
                "https://luxury-real-estate-media.b-cdn.net/damac/damac-district/VenturaResidence-HeroShot-Ext03-2025-06-13.jpg",
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 11117,
              title: t?.("projectNames.golfTown") || "Golf Town",
              slug: "golf-town",
              image:
                "https://luxury-real-estate-media.b-cdn.net/damac/golf-town/DH_GolfApExterior.png",
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "secondary",
            },
          ],
        },

        /* ===================== 1.3) OMNIYAT (APARTMENTS) ===================== */
        {
          id: 4,
          name: t?.("developers.omniyat") || "Omniyat",
          slug: "omniyat",
          image: `https://luxury-real-estate-media.b-cdn.net/omniyat/the-alba-residences/The%20Alba%20Beach%20View.jpg`,
          logo: `/omniyat-logo.avif`,
          projects: [
            {
              id: 14001,
              title: t?.("projectNames.opusTower") || "The Opus by OMNIYAT",
              slug: "opus-tower",
              image: `https://luxury-real-estate-media.b-cdn.net/omniyat/opus/The%20Opus%20by%20OMNIYAT%20Exterior%201.jpg`,
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "secondary",
            },
            {
              id: 14002,
              title: t?.("projectNames.velaViento") || "VELA Viento",
              slug: "vela-viento",
              image: `https://luxury-real-estate-media.b-cdn.net/omniyat/vela-viento/01%20VELA%20Viento%20Sunrise%20Hero.jpg`,
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 14003,
              title: t?.("projectNames.velaDorchester") || "VELA Dorchester",
              slug: "vela-dorchester",
              image: `https://luxury-real-estate-media.b-cdn.net/omniyat/vela-dorchester/VELA_Exterior_Hero.jpg`,
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 14004,
              title: t?.("projectNames.orlaDorchester") || "ORLA Dorchester",
              slug: "orla-dorchester",
              image: `https://luxury-real-estate-media.b-cdn.net/omniyat/orla-dorchester/ORLA,%20Dorchester%20Collection,%20Dubai%201.jpg`,
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 14005,
              title:
                t?.("projectNames.theAlbaResidences") || "The Alba Residences",
              slug: "the-alba-residences",
              image: `https://luxury-real-estate-media.b-cdn.net/omniyat/the-alba-residences/The%20Alba%20Beach%20View.jpg`,
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
          ],
        },

        /* ===================== 1.4) BINGHATTI (APARTMENTS) ===================== */
        {
          id: 6,
          name: t?.("developers.binghatti") || "Binghatti",
          slug: "binghatti",
          image: `${CDN}/binghatti/aquarise/hero.jpg`,
          logo: `https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/binghatti.avif`,
          projects: [
            {
              id: 11401,
              title:
                t?.("projectNames.mercedesBenzPlacesByBinghatti") ||
                "Mercedes-Benz Places by Binghatti",
              slug: "mercedes-benz",
              image:
                "https://luxury-real-estate-media.b-cdn.net/binghatti/mercedes/25006_aerialNight_shot%20-Final-Full.jpg",
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 114,
              title: t?.("projectNames.aquarise") || "Aquarise",
              slug: "aquarise",
              image: `https://luxury-real-estate-media.b-cdn.net/binghatti/aquarise/Aquarise%20Exterior-4.jpg`,
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 11402,
              title: t?.("projectNames.apex") || "Apex",
              slug: "apex",
              image:
                "https://luxury-real-estate-media.b-cdn.net/binghatti/apex/C2.jpg",
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 11403,
              title: t?.("projectNames.cullinan") || "Cullinan",
              slug: "cullinan",
              image:
                "https://luxury-real-estate-media.b-cdn.net/binghatti/cullinan/25014_Street.png",
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 11404,
              title: t?.("projectNames.elite") || "Elite",
              slug: "elite",
              image:
                "https://luxury-real-estate-media.b-cdn.net/binghatti/elite/Binghatti%20Elite_C03_Post.jpg",
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 11405,
              title: t?.("projectNames.ghost") || "Ghost",
              slug: "ghost",
              image:
                "https://luxury-real-estate-media.b-cdn.net/binghatti/ghost/Dusk_Final.png",
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 11406,
              title: t?.("projectNames.haven") || "Haven",
              slug: "haven",
              image:
                "https://luxury-real-estate-media.b-cdn.net/binghatti/haven/C6.jpg",
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 11407,
              title: t?.("projectNames.hillcrest") || "Hillcrest",
              slug: "hillcrest",
              image:
                "https://luxury-real-estate-media.b-cdn.net/binghatti/hillcrest/01_View040000.jpg",
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 11408,
              title: t?.("projectNames.hills") || "Hills",
              slug: "hills",
              image:
                "https://luxury-real-estate-media.b-cdn.net/binghatti/hills/Binghatti%20Hills%20E11.jpg",
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 11409,
              title: t?.("projectNames.hillside") || "Hillside",
              slug: "hillside",
              image:
                "https://luxury-real-estate-media.b-cdn.net/binghatti/hillside/ShotView_02.png",
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 11410,
              title: t?.("projectNames.hillviews") || "Hillviews",
              slug: "hillviews",
              image:
                "https://luxury-real-estate-media.b-cdn.net/binghatti/hillviews/Hillviews-3.jpg",
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 11411,
              title: t?.("projectNames.moonlight") || "Moonlight",
              slug: "moonlight",
              image:
                "https://luxury-real-estate-media.b-cdn.net/binghatti/moonlight/Exterior-2.webp",
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 11412,
              title: t?.("projectNames.pinnacle") || "Pinnacle",
              slug: "pinnacle",
              image:
                "https://luxury-real-estate-media.b-cdn.net/binghatti/pinnacle/Binghatti%20Pinnacle%20C6.jpg",
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 11413,
              title: t?.("projectNames.skyblade") || "Skyblade",
              slug: "skyblade",
              image:
                "https://luxury-real-estate-media.b-cdn.net/binghatti/skyblade/Skyblade%20Exterior-4.jpg",
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 11414,
              title: t?.("projectNames.skyhall") || "Skyhall",
              slug: "skyhall",
              image:
                "https://luxury-real-estate-media.b-cdn.net/binghatti/skyhall/Skyhall%20view08b-05.jpg",
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 11415,
              title: t?.("projectNames.skyrise") || "Skyrise",
              slug: "skyrise",
              image:
                "https://luxury-real-estate-media.b-cdn.net/binghatti/skyrise/Skyrise%203.jpg",
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 11416,
              title: t?.("projectNames.skyterraces") || "Sky Terraces",
              slug: "skyterraces",
              image:
                "https://luxury-real-estate-media.b-cdn.net/binghatti/skyterraces/1.webp",
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 11417,
              title: t?.("projectNames.starlight") || "Starlight",
              slug: "starlight",
              image:
                "https://luxury-real-estate-media.b-cdn.net/binghatti/starlight/BINST_02_Aerial_B_High.jpg",
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 11418,
              title: t?.("projectNames.titania") || "Titania",
              slug: "titania",
              image:
                "https://luxury-real-estate-media.b-cdn.net/binghatti/titania/Binghatti%20Titania%20V5.jpg",
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 11419,
              title: t?.("projectNames.twilight") || "Twilight",
              slug: "twilight",
              image:
                "https://luxury-real-estate-media.b-cdn.net/binghatti/twilight/Exterior-7.jpg",
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 11420,
              title: t?.("projectNames.vintage") || "Vintage",
              slug: "vintage",
              image:
                "https://luxury-real-estate-media.b-cdn.net/binghatti/vintage/250861_Binghatti_Vintage_View04_Halfres.jpg",
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 11421,
              title: t?.("projectNames.binghattiOne") || "One by Binghatti",
              slug: "binghatti-one",
              image:
                "https://luxury-real-estate-media.b-cdn.net/binghatti/one/One%20by%20Binghatti-13.jpg",
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 11422,
              title:
                t?.("projectNames.mercedesBenzPlacesBinghattiCity") ||
                "Mercedes-Benz Places | Binghatti City",
              slug: "mercedes-benz-places-binghatti-city",
              image:
                "https://luxury-real-estate-media.b-cdn.net/binghatti/mercedes-benz-places-binghatti-city/25006_aerialNight_shot%20-Final-Full.jpg",
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
          ],
        },

        /* ===================== 1.5) AZIZI (APARTMENTS) ===================== */
        {
          id: 11,
          name: t?.("developers.aziziDevelopments") || "Azizi Developments",
          slug: "azizi",
          image: `${CDN}/azizi/milan/hero.jpg`,
          logo: `/azizi.jpg`,
          projects: [
            {
              id: 120,
              title: t?.("projectNames.aziziMilan") || "Azizi Milan",
              slug: "milan",
              image: `https://luxury-real-estate-media.b-cdn.net/azizi/milan/Canal%202.jpg`,
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 900,
              title: t?.("projectNames.aziziAmir") || "Azizi Amir",
              slug: "amir",
              image: `https://luxury-real-estate-media.b-cdn.net/azizi/amir/360-1126_AFRA026-360-PERSPECTIVE-01.jpg`,
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 901,
              title:
                t?.("projectNames.aziziCreekViews1") || "Azizi Creek Views",
              slug: "creek-views-1",
              image: `https://luxury-real-estate-media.b-cdn.net/azizi/creek-views-1/Creek%20Views%20handover%20-%2015.jpg`,
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "secondary",
            },
            {
              id: 902,
              title:
                t?.("projectNames.aziziCreekViews2") || "Azizi Creek Views 2",
              slug: "creek-views-2",
              image: `https://luxury-real-estate-media.b-cdn.net/azizi/creek-views-2/CG15_POOL_Revision01.jpg`,
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "secondary",
            },
            {
              id: 9021,
              title:
                t?.("projectNames.aziziCreekViews3") || "Azizi Creek Views 3",
              slug: "creek-views-3",
              image: `https://luxury-real-estate-media.b-cdn.net/azizi/creek-views-3/Cam%202-Community%202%2C%20street%2C%20park%20sid.jpg`,
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 903,
              title: t?.("projectNames.aziziDavid") || "Azizi David",
              slug: "david",
              image: `https://luxury-real-estate-media.b-cdn.net/azizi/david/Jadaf%20Res%20Plot%2012%2613_BuidingView_Option01.jpg`,
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 9031,
              title: t?.("projectNames.aziziArian") || "Azizi Arian",
              slug: "aryan",
              image: `https://luxury-real-estate-media.b-cdn.net/azizi/arian/360-DJAZ038-IMG-RENDER-01.jpg`,
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 9032,
              title: t?.("projectNames.aziziAbraham") || "Azizi Abraham",
              slug: "abraham",
              image: `https://luxury-real-estate-media.b-cdn.net/azizi/abraham/360-DJAZ001-HL-IMG_EXTERIOR%20VIEW%2001.jpg`,
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 904,
              title: t?.("projectNames.aziziFarishta2") || "Azizi Farishta 2",
              slug: "farishta-2",
              image:
                "https://luxury-real-estate-media.b-cdn.net/azizi/farishta-2/360-JDF09-HL-IMG_EXTERIOR%20VIEW%2001-00.jpg",
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 905,
              title: t?.("projectNames.aziziGabriel") || "Azizi Gabriel",
              slug: "gabriel",
              image:
                "https://luxury-real-estate-media.b-cdn.net/azizi/gabriel/360-DJAZ2.39-HL-IMG-EXTERIOR%20PERSPECTIVE%201-00.jpg",
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 906,
              title: t?.("projectNames.aziziLina") || "Azizi Lina",
              slug: "lina",
              image:
                "https://luxury-real-estate-media.b-cdn.net/azizi/lina/360-DJAZ.07-SL-IMG_EXTERIOR%20VIEW%2001.jpg",
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 907,
              title: t?.("projectNames.aziziNoura") || "Azizi Noura",
              slug: "noura",
              image:
                "https://luxury-real-estate-media.b-cdn.net/azizi/noura/AZIZI%20Downtown%20Jebel%20Ali%20Plot%2009_View%2001.jpg",
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 908,
              title: t?.("projectNames.aziziRaffi") || "Azizi Raffi",
              slug: "raffi",
              image:
                "https://luxury-real-estate-media.b-cdn.net/azizi/raffi/AFC-054B-D-101-IMG01_DAY.jpg",
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 909,
              title: t?.("projectNames.aziziSikander") || "Azizi Sikander",
              slug: "sikander",
              image:
                "https://luxury-real-estate-media.b-cdn.net/azizi/sikander/360-1146_AFC053B-360-PERSPECTIVE-1.jpg",
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 910,
              title: t?.("projectNames.aziziWares") || "Azizi Wares",
              slug: "wares",
              image:
                "https://luxury-real-estate-media.b-cdn.net/azizi/wares/360-DJAZ2.28-SL-IMG_EXTERIOR%20VIEW%2001.jpg",
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 911,
              title: t?.("projectNames.aziziLeily") || "Azizi Leily",
              slug: "leily",
              image: `https://luxury-real-estate-media.b-cdn.net/azizi/leily/360-JDF05-HL-IMG_Front%20View%20Day.jpg`,
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
          ],
        },

        /* ===================== 1.6) BEYOND (APARTMENTS) ===================== */
        {
          id: 7,
          name: t?.("developers.beyond") || "Beyond",
          slug: "beyond",
          image: `${CDN}/beyond/kanyon/hero.jpg`,
          logo: `https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/beyond.webp`,
          projects: [
            {
              id: 115,
              title: t?.("projectNames.kanyon") || "Kanyon",
              slug: "kanyon",
              image: `https://luxury-real-estate-media.b-cdn.net/beyond/kanyon/Hera%20Shot_Upper%20Facade_Night.jpg`,
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
          ],
        },

        /* ===================== 1.7) IMTIAZ (APARTMENTS) ===================== */
        {
          id: 12,
          name: t?.("developers.imtiazDevelopments") || "Imtiaz Developments",
          slug: "imtiaz",
          image: `${CDN}/imtiaz/wynwood-horizon/IMTIAZ_Wynwood-Exterior%20render%201.jpg`,
          logo: "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/imtiaz.png",
          projects: [
            {
              id: 121,
              title: t?.("projectNames.wynwood") || "Wynwood",
              slug: "wynwood",
              image: `${CDN}/imtiaz/wynwood-horizon/IMTIAZ_Wynwood-Exterior%20render%201.jpg`,
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
          ],
        },

        /* ===================== 1.8) TIGER (APARTMENTS) ===================== */
        {
          id: 15,
          name: t?.("developers.tiger") || "Tiger Properties",
          slug: "tiger",
          image: `https://luxury-real-estate-media.b-cdn.net/tiger/orchid/amenties%20(2).jpg`,
          logo: `https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/tiger.png`,
          projects: [
            {
              id: 124,
              title: t?.("projectNames.orchidTiger") || "Orchid",
              slug: "orchid",
              image: `https://luxury-real-estate-media.b-cdn.net/tiger/orchid/Fountain.jpg`,
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 1111,
              title: t?.("projectNames.alatiTower") || "Altai Tower",
              slug: "altai-tower",
              image: `https://luxury-real-estate-media.b-cdn.net/tiger/alati/pool0000-34.jpg`,
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 126,
              title: t?.("projectNames.anandaTower") || "Ananda Residences",
              slug: "ananda-tower",
              image: `https://luxury-real-estate-media.b-cdn.net/tiger/ananda/Lobby%202.jpg`,
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 127,
              title: t?.("projectNames.aurestaTower") || "Auresta Tower",
              slug: "auresta-tower",
              image: `https://luxury-real-estate-media.b-cdn.net/tiger/auresta/Pool.jpg`,
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 128,
              title: t?.("projectNames.elbrusTower") || "Elbrus Tower",
              slug: "elbrus-tower",
              image: `https://luxury-real-estate-media.b-cdn.net/tiger/elbrus/Pool%20Area.jpg`,
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 129,
              title: t?.("projectNames.guzelTower") || "Guzel Tower",
              slug: "guzel-tower",
              image: `https://luxury-real-estate-media.b-cdn.net/tiger/guzel/002.jpg`,
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 130,
              title: t?.("projectNames.jadeTower") || "Jade Tower",
              slug: "jade-tower",
              image: `https://luxury-real-estate-media.b-cdn.net/tiger/jade/HR%20%20POOL%20CAMERA%201.png`,
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 131,
              title: t?.("projectNames.liliumTower") || "Lilium Tower",
              slug: "lilium-tower",
              image: `https://luxury-real-estate-media.b-cdn.net/tiger/lilium/pool%20(2).jpg`,
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 132,
              title: t?.("projectNames.redSquareTower") || "Red Square Tower",
              slug: "red-square-tower",
              image: `https://luxury-real-estate-media.b-cdn.net/tiger/red-square/Copy%20of%20main-pool.jpg`,
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 133,
              title: t?.("projectNames.skyTower") || "Sky Tower",
              slug: "sky-tower",
              image: `https://luxury-real-estate-media.b-cdn.net/tiger/skytower/Chines%20Style%20(01).jpg`,
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 134,
              title: t?.("projectNames.volgaTower") || "Volga Tower",
              slug: "volga-tower",
              image: `https://luxury-real-estate-media.b-cdn.net/tiger/volga/4532111.jpg`,
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
          ],
        },

        /* ===================== 1.9) ARADA (APARTMENTS) ===================== */
        {
          id: 10,
          name: t?.("developers.arada") || "Arada",
          slug: "arada",
          image: `${CDN}/arada/armani/hero.jpg`,
          logo: `/arada-developer.avif`,
          projects: [
            {
              id: 119,
              title:
                t?.("projectNames.armaniBeachResidences") ||
                "Armani Beach Residences",
              slug: "armani",
              image: `https://luxury-real-estate-media.b-cdn.net/arada/armani/231030-frontside-view-05.jpg`,
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 11901,
              title: t?.("projectNames.akalaResidences") || "Akala Residences",
              slug: "akala",
              image: `https://luxury-real-estate-media.b-cdn.net/arada/akala/4B-Living-03.jpg`,
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 11902,
              title:
                t?.("projectNames.anantaraSharjahResidences") ||
                "Anantara Sharjah Residences",
              slug: "anantara",
              image: `https://luxury-real-estate-media.b-cdn.net/arada/anantara/1.webp`,
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 11903,
              title:
                t?.("projectNames.ilTeatroResidences") ||
                "IL Teatro Residences",
              slug: "il-teatro",
              image: `https://luxury-real-estate-media.b-cdn.net/arada/il-teatro/230808_Aerial-view.jpg`,
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 11904,
              title:
                t?.("projectNames.inauraHotelsResidences") ||
                "Inaura Hotels & Residences",
              slug: "inaura",
              image: `https://luxury-real-estate-media.b-cdn.net/arada/inaura/EXT01_Hero_B3_12k-02.jpg`,
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 11905,
              title: t?.("projectNames.nesba3") || "Nesba 3",
              slug: "nesba-3",
              image: `https://luxury-real-estate-media.b-cdn.net/arada/nesba/Boulevard-building-Corner-view-02-(2).jpg`,
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 11906,
              title: t?.("projectNames.safa1") || "Safa 1",
              slug: "safa-1",
              image: `https://luxury-real-estate-media.b-cdn.net/arada/safa-1/241010-Corner%20view-01.jpg`,
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 11907,
              title: t?.("projectNames.safaParkView") || "Safa Park View",
              slug: "safa-park-view",
              image: `https://luxury-real-estate-media.b-cdn.net/arada/safa-park-view/img601.webp`,
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 11911,
              title: t?.("projectNames.theGate3") || "The Gate 3",
              slug: "the-gate-3",
              image: `https://luxury-real-estate-media.b-cdn.net/arada/the-gate-3/240830-Building-3-corner-view-01-HD.jpg`,
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 11908,
              title: t?.("projectNames.theGate4") || "The Gate 4",
              slug: "the-gate-4",
              image: `https://luxury-real-estate-media.b-cdn.net/arada/the-gate-4/Gate4-4BR.jpg`,
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 11909,
              title: t?.("projectNames.wResidences") || "W Residences",
              slug: "w-residences",
              image: `https://luxury-real-estate-media.b-cdn.net/arada/w-residences/240626-podium-pool-05-10K.jpg`,
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "offplan",
            },
            {
              id: 11910,
              title: t?.("projectNames.masaarAzalea") || "Masaar Azalea",
              slug: "masaar-azalea",
              image: `https://luxury-real-estate-media.b-cdn.net/arada/masaar-azalea/4.webp`,
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
              market: "secondary",
            },
          ],
        },
      ],
    },

    /* ===================== 2) VILLAS ===================== */
    {
      id: 2,
      name: t?.("categories.villas") || "Villas",
      slug: "villas",
      description:
        t?.("descriptions.villas") || "Premium villas and townhouses",
      image: `${CDN}/hartland/hero-bg.jpg`,
      developers: [
        /* ===================== SOBHA (VILLAS) ===================== */
        {
          id: 1,
          name: t?.("developers.sobhaRealty") || "Sobha Realty",
          slug: "sobha",
          image: `${CDN}/hartland/hero-bg.jpg`,
          logo: `/Sobha-Realty-Square-Logo.jpg`,
          projects: [
            {
              id: 201,
              title: t?.("projectNames.sobhaEstates") || "Sobha Estates",
              slug: "sobha-estates",
              image: `${CDN}/hartland/hero-bg.jpg`,
              description: t?.("descriptions.villas") || "Premium villas",
              market: "offplan",
            },
            {
              id: 202,
              title:
                t?.("projectNames.sobhaSiniyaIsland") || "Sobha Siniya Island",
              slug: "siniya-island",
              image: `${CDN}/al-sinniyyah-island/hero-bg.jpg`,
              description: t?.("descriptions.villas") || "Premium villas",
              market: "offplan",
            },
            {
              id: 2022,
              title:
                t?.("projectNames.sobhaSiniyaIsland") || "Sobha Siniya Island",
              slug: "siniya-island-secondary",
              image: `${CDN}/al-sinniyyah-island/hero-bg.jpg`,
              description: t?.("descriptions.villas") || "Premium villas",
              market: "secondary",
            },
            {
              id: 204,
              title: t?.("projectNames.sobhaElwood") || "Sobha Elwood",
              slug: "sobha-elwood",
              image: `https://luxury-real-estate-media.b-cdn.net/sobha-elwood/TYPE%204A%20FRONT.jpg`,
              description: t?.("descriptions.villas") || "Premium villas",
              market: "offplan",
            },
          ],
        },

        /* ===================== DAMAC (VILLAS) ===================== */
        {
          id: 3,
          name: t?.("developers.damacProperties") || "DAMAC Properties",
          slug: "damac",
          image: `${CDN}/damac-island-2/WhatsApp%20Image%202025-11-19%20at%2013.26.51%20%281%29.jpeg`,
          logo: `/damac-logo.png`,
          projects: [
            {
              id: 207,
              title: t?.("projectNames.damacIslands2") || "DAMAC Islands 2",
              slug: "damac-islands-2",
              image: `${CDN}/damac-island-2/WhatsApp%20Image%202025-11-19%20at%2013.26.51%20%281%29.jpeg`,
              description: t?.("descriptions.villas") || "Premium villas",
              market: "offplan",
            },
          ],
        },

        /* ===================== ARADA (VILLAS) ===================== */
        {
          id: 2,
          name: t?.("developers.arada") || "Arada",
          slug: "arada",
          image: `${CDN}/massar-3/hero-bg.jpg`,
          logo: `/arada-developer.avif`,
          projects: [
            {
              id: 206,
              title: t?.("projectNames.aradaMassar3") || "Arada Massar 3",
              slug: "massar",
              image: `${CDN}/massar-3/hero-bg.jpg`,
              description: t?.("descriptions.villas") || "Premium villas",
              market: "offplan",
            },
            {
              id: 20601,
              title: t?.("projectNames.sequoia") || "Sequoia Villas",
              slug: "sequoia",
              image: `https://luxury-real-estate-media.b-cdn.net/arada/sequoia/2.webp`,
              description: t?.("descriptions.villas") || "Premium villas",
              market: "offplan",
            },
          ],
        },

        /* ===================== AZIZI (VILLAS) ===================== */
        {
          id: 7,
          name: t?.("developers.aziziDevelopments") || "Azizi Developments",
          slug: "azizi",
          image: `https://luxury-real-estate-media.b-cdn.net/azizi/monaco/6bhk/Villa%201A%20-%20Aerial%20Shot.jpg`,
          logo: `/azizi.jpg`,
          projects: [
            {
              id: 2601,
              title: t?.("projectNames.aziziMonaco") || "Azizi Monaco",
              slug: "monaco",
              image: `https://luxury-real-estate-media.b-cdn.net/azizi/monaco/8bhk/4b_Road%20shot_8k.jpg`,
              description: t?.("descriptions.villas") || "Premium villas",
              market: "offplan",
            },
            {
              id: 2602,
              title: t?.("projectNames.aziziVenice") || "Azizi Venice",
              slug: "venice",
              image: `https://luxury-real-estate-media.b-cdn.net/azizi/venice/B02-C1%2B.jpg`,
              description:
                t?.("descriptions.mixedUse") || "Mixed-use development",
              market: "offplan",
            },
          ],
        },
      ],
    },

    /* ===================== 3) COMMERCIAL ===================== */
    {
      id: 3,
      name: t?.("categories.commercial") || "Commercial",
      slug: "commercial-retail",
      description:
        t?.("descriptions.commercial") || "Commercial and retail spaces",
      image: `${CDN}/riviera-retails/hero-bg.jpg`,
      developers: [
        {
          id: 1,
          name: t?.("developers.aziziDevelopments") || "Azizi Developments",
          slug: "azizi",
          image: `${CDN}/riviera-retails/hero-bg.jpg`,
          logo: `/azizi.jpg`,
          projects: [
            {
              id: 301,
              title:
                t?.("projectNames.aziziRivieraRetails") ||
                "Azizi Riviera Retails",
              slug: "riviera-retails",
              image: `https://luxury-real-estate-media.b-cdn.net/riviera/hero-bg.jpg`,
              description:
                t?.("descriptions.commercial") || "Commercial spaces",
              market: "offplan",
            },
            {
              id: 30101,
              title:
                t?.("projectNames.aziziRivieraRetails") ||
                "Azizi Riviera Retails",
              slug: "riviera-retails",
              image: `https://luxury-real-estate-media.b-cdn.net/riviera/hero-bg.jpg`,
              description:
                t?.("descriptions.commercial") || "Commercial spaces",
              market: "secondary",
            },
            {
              id: 304,
              title: t?.("projectNames.aziziEmerald") || "Azizi Emerald",
              slug: "emerald",
              image: `https://luxury-real-estate-media.b-cdn.net/azizi/emerald/DHCC_View03_Wide.jpg`,
              description:
                t?.("descriptions.commercial") || "Commercial spaces",
              market: "offplan",
            },
          ],
        },

        {
          id: 2,
          name: t?.("developers.omniyat") || "Omniyat",
          slug: "omniyat",
          image: `${CDN}/lumena-alta/hero-bg.jpg`,
          logo: `/omniyat-logo.avif`,
          projects: [
            {
              id: 302,
              title: t?.("projectNames.luminaAlta") || "Lumena Alta",
              slug: "lumenaalta",
              image: `${CDN}/lumena-alta/hero-bg.jpg`,
              description:
                t?.("descriptions.commercial") || "Commercial spaces",
              market: "offplan",
            },
          ],
        },

        {
          id: 3,
          name: t?.("developers.beyond") || "Beyond",
          slug: "beyond",
          image: `${CDN}/beyond/31-above/hero.jpg`,
          logo: `https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/beyond.webp`,
          projects: [
            {
              id: 303,
              title: t?.("projectNames.above31") || "31 Above",
              slug: "31-above",
              image: `https://luxury-real-estate-media.b-cdn.net/beyond/31-beyond/Terrace_Sea%20View.jpg`,
              description:
                t?.("descriptions.commercial") || "Commercial spaces",
              market: "offplan",
            },
          ],
        },

        {
          id: 4,
          name: t?.("developers.danubeProperties") || "Danube Properties",
          slug: "danube",
          image: `https://luxury-real-estate-media.b-cdn.net/danube/aspirz/Hero%20shot1%20day.jpg`,
          logo: `https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/Danube_Properties.png`,
          projects: [
            {
              id: 305,
              title: t?.("projectNames.danubeAspirz") || "Danube Aspirz",
              slug: "danube-aspirz",
              image: `https://luxury-real-estate-media.b-cdn.net/danube/aspirz/Hero%20shot1%20day.jpg`,
              description:
                t?.("descriptions.commercial") || "Office & commercial spaces",
              market: "offplan",
            },
          ],
        },
      ],
    },

    /* ===================== 4) PENTHOUSES ===================== */
    {
      id: 4,
      name: t?.("categories.penthouses") || "Penthouses",
      slug: "penthouses",
      description:
        t?.("descriptions.penthouses") ||
        "Luxury penthouses with premium amenities",
      image: `${CDN}/sky-parks/exterior-night-01.jpg`,
      developers: [
        {
          id: 1,
          name: t?.("developers.sobhaRealty") || "Sobha Realty",
          slug: "sobha",
          image: `https://luxury-real-estate-media.b-cdn.net/seahaven/intro-main.jpg`,
          logo: `/Sobha-Realty-Square-Logo.jpg`,
          projects: [
            {
              id: 401,
              title:
                t?.("projectNames.sobhaSeaHavenPenthouse") ||
                "Sobha SeaHaven Penthouse",
              slug: "seahaven-penthouse",
              image: `https://luxury-real-estate-media.b-cdn.net/seahaven/intro-main.jpg`,
              description:
                t?.("descriptions.penthouses") || "Luxury penthouses",
              market: "offplan",
            },
          ],
        },

        {
          id: 2,
          name: t?.("developers.binghatti") || "Binghatti",
          slug: "binghatti",
          image: `${CDN}/binghatti/bugatti/hero.jpg`,
          logo: `https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/binghatti.avif`,
          projects: [
            {
              id: 403,
              title:
                t?.("projectNames.bugattiResidences") || "Bugatti Residences",
              slug: "bugatti",
              image: `https://luxury-real-estate-media.b-cdn.net/binghatti/bugatti/BUGATTI%20RESIDENCES%20BY%20BINGHATTI%20Exterior.jpg`,
              description:
                t?.("descriptions.penthouses") || "Luxury penthouses",
              market: "offplan",
            },
          ],
        },
      ],
    },
  ],
});
