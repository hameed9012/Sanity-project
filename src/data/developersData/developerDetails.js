const CDN = "https://luxury-real-estate-media.b-cdn.net";

// MAIN OBJECT
// Only developers that actually have projects in your current data:
// - Sobha         → Central, SkyParks, AquaCrest, Aquamont, Hartland 2 Villas,
//                   SeaHaven Penthouse, Al Sinniyyah Island
// - Arada         → Masaar 3
// - DAMAC         → DAMAC Islands 2
// - Azizi         → Riviera Retails
// - Omniyat       → Lumena Alta
export const developersDetails = {
  // ---------------------------------------------------------------------------
  // SOBHA
  // ---------------------------------------------------------------------------
  sobha: {
    slug: "sobha",
    name: "Sobha Realty",
    heroImage: `${CDN}/aquamont/intro-main.png`,
    logo: "/Sobha-Realty-Square-Logo.jpg",
    tagline: "Master developer of waterfront and park-front communities.",
    about: [
      "Sobha Realty is a premium real estate developer known for its fully integrated in-house design and construction model, which allows it to control quality across every stage of development.",
      "The company has delivered communities across Dubai and internationally, with a strong focus on waterfront, park-front and master-planned villa communities such as Sobha Hartland, Sobha Hartland II and Sobha SeaHaven.",
      "On this platform, Sobha is represented through key projects including Sobha Central, Sobha SkyParks, AquaCrest, Aquamont, Sobha Estates Villas, SeaHaven Penthouse and Al Sinniyyah Island.",
    ],
    stats: {
      projects: "80+",
      deliveredProjects: "55+",
      underConstructionProjects: "20+",
      communities: "5+",
      sales2024: "AED 18B+",
    },
    highlights: [
      "In-house design & build quality control model.",
      "Track record of delivering high-spec finishes and landscaping.",
      "Master communities around lagoons, parks and schools.",
      "Strong reputation with end-users and investors in Dubai.",
    ],
  },

  // ---------------------------------------------------------------------------
  // ARADA
  // ---------------------------------------------------------------------------
  arada: {
    slug: "arada",
    name: "Arada",
    heroImage: `${CDN}/massar-3/hero-bg.jpg`,
    logo: "/arada-developer.avif",
    tagline:
      "Lifestyle communities built around greenery and family amenities.",
    about: [
      "Arada is a master developer focused on creating large-scale lifestyle communities with an emphasis on greenery, walkability and family-oriented amenities.",
      "Known for projects such as Aljada and Masaar, Arada blends residential neighborhoods with retail, schools, parks and leisure facilities in one integrated destination.",
      "In your current portfolio on this site, Arada is showcased through the Masaar 3 community in Sharjah.",
    ],
    stats: {
      projects: "30+",
      deliveredProjects: "10+",
      underConstructionProjects: "15+",
      communities: "3+",
      sales2024: "AED 9B+",
    },
    highlights: [
      "Master-planned communities with large green spaces and forests.",
      "Strong focus on family amenities and everyday convenience.",
      "Mixture of villas, townhouses and apartments at different price points.",
      "Rapidly growing brand with a large pipeline of new phases.",
    ],
  },

  // ---------------------------------------------------------------------------
  // DAMAC
  // ---------------------------------------------------------------------------
  damac: {
    slug: "damac",
    name: "DAMAC Properties",
    heroImage: `${CDN}/damac-island-2/WhatsApp%20Image%202025-11-19%20at%2013.26.51%20(1).jpeg`,
    logo: "/damac-logo.png",
    tagline: "High-impact branded residences and resort-style living.",
    about: [
      "DAMAC Properties is one of the region's most recognisable developers, known for branded residences, golf communities and large-scale master developments across Dubai and internationally.",
      "Its portfolio spans apartments, villas, hotel residences and mixed-use projects, with a strong emphasis on lifestyle, amenities and branded collaborations with global luxury names.",
      "Here, DAMAC is represented primarily by DAMAC Islands 2 in Dubailand, part of a broader waterfront-inspired master plan.",
    ],
    stats: {
      projects: "300+",
      deliveredProjects: "110+",
      underConstructionProjects: "40+",
      communities: "15+",
      sales2024: "AED 25B+",
    },
    highlights: [
      "Branded residences with international luxury brands.",
      "Golf and resort-style master communities such as DAMAC Hills.",
      "Strong global marketing reach and continuous new launches.",
      "Diverse mix of apartments, villas and hotel residences.",
    ],
  },

  // ---------------------------------------------------------------------------
  // GULF LAND PROPERTY
  // ---------------------------------------------------------------------------
  "gulf-land-property": {
    slug: "gulf-land-property",
    name: "Gulf Land Property",
    heroImage: `${CDN}/gulf-land-property/tonino-lamborghini-residences/Facad.jpg`,
    logo: `https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/gulf.png`,
    tagline: "Affordable community-focused developments across the UAE.",
    about: [
      "Gulf Land Property is a UAE-based developer specializing in affordable residential communities with a focus on modern amenities and strategic locations.",
      "The company develops a mix of apartments and townhouses primarily in emerging areas of Dubai, Sharjah, and Ajman, targeting first-time buyers and investors.",
      "Known for projects like Gulf Views and Gulf Oasis, the developer emphasizes value-driven properties with flexible payment plans.",
    ],
    stats: {
      projects: "25+",
      deliveredProjects: "12+",
      underConstructionProjects: "8+",
      communities: "6+",
      sales2024: "AED 3.5B+",
    },
    highlights: [
      "Focus on affordable segment with competitive pricing.",
      "Strong presence in Sharjah and Ajman markets.",
      "Community-centric designs with shared amenities.",
      "Investor-friendly payment plans and post-sale services.",
    ],
  },

  // ---------------------------------------------------------------------------
  // AZIZI
  // ---------------------------------------------------------------------------
  azizi: {
    slug: "azizi",
    name: "Azizi Developments",
    heroImage: `${CDN}/riviera/hero-bg.jpg`,
    logo: "/azizi.jpg",
    tagline: "Investor-friendly communities in strategic Dubai locations.",
    about: [
      "Azizi Developments is a private developer with a large residential portfolio across emerging and established neighborhoods in Dubai.",
      "The developer is known for value-driven apartments and retail spaces in communities such as Al Furjan, Dubai Healthcare City and Mohammed Bin Rashid City (MBR City – Riviera).",
      "On this site, Azizi is currently featured through Riviera Retails in Meydan One, part of the wider Riviera master community.",
    ],
    stats: {
      projects: "100+",
      deliveredProjects: "40+",
      underConstructionProjects: "35+",
      communities: "10+",
      sales2024: "AED 12B+",
    },
    highlights: [
      "Strong focus on mid-market investors and end-users.",
      "Extensive pipeline of apartment projects across multiple districts.",
      "Retail components integrated into several master communities.",
      "Payment plans designed to appeal to long-term investors.",
    ],
  },

  // ---------------------------------------------------------------------------
  // OMNIYAT
  // ---------------------------------------------------------------------------
  omniyat: {
    slug: "omniyat",
    name: "Omniyat",
    heroImage: `${CDN}/lumena-alta/hero-bg.jpg`,
    logo: "/omniyat-logo.avif",
    tagline: "Ultra-luxury, design-led waterfront developments.",
    about: [
      "Omniyat is a boutique luxury developer in Dubai, recognised for its design-first approach and collaborations with global architects and interior designers.",
      "The portfolio includes high-end residential towers, branded residences and mixed-use developments in prime locations such as Business Bay, Dubai Canal and Palm Jumeirah.",
      "Within your listings, Omniyat appears via Lumena Alta in Business Bay, a canal-front commercial and retail-focused development.",
    ],
    stats: {
      projects: "20+",
      deliveredProjects: "10+",
      underConstructionProjects: "8+",
      communities: "4+",
      sales2024: "AED 10B+",
    },
    highlights: [
      "Design-led developments with premium materials and finishes.",
      "Ultra-luxury projects on the waterfront and canal.",
      "Boutique approach with limited, high-profile launches.",
      "Attractive to UHNW buyers looking for exclusivity.",
    ],
  },

  // ---------------------------------------------------------------------------
  // DANUBE PROPERTIES
  // ---------------------------------------------------------------------------
  danube: {
    slug: "danube",
    name: "Danube Properties",
    heroImage: `https://luxury-real-estate-media.b-cdn.net/danube/shahkhruz/09_EXT_Bottom%20Up.jpg`,
    logo: "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/Danube_Properties.png",
    tagline: "Value-focused developer with flexible payment plans.",
    about: [
      "Danube Properties is one of Dubai's fastest-growing private developers, known for its 'Pay as You Build' flexible payment plans and focus on the affordable to mid-market segment.",
      "The developer has a portfolio of residential towers primarily in Dubai's popular communities like JVC, Arjan, and Sports City, offering studios to 3-bedroom apartments.",
      "Danube emphasizes timely delivery and has built a reputation for transparent pricing and customer-centric approach.",
    ],
    stats: {
      projects: "40+",
      deliveredProjects: "18+",
      underConstructionProjects: "15+",
      communities: "8+",
      sales2024: "AED 6B+",
    },
    highlights: [
      "Innovative 'Pay as You Build' flexible payment plans.",
      "Focus on affordable and mid-market apartment segment.",
      "Strong track record of on-time delivery.",
      "High rental yield properties attractive to investors.",
    ],
  },

  // ---------------------------------------------------------------------------
  // BINGHATTI
  // ---------------------------------------------------------------------------
  binghatti: {
    slug: "binghatti",
    name: "Binghatti",
    heroImage: `https://luxury-real-estate-media.b-cdn.net/binghatti/aquarise/Aquarise%20Exterior-4.jpg`,
    logo: `https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/binghatti.avif`,
    tagline: "Contemporary design-focused developments in prime locations.",
    about: [
      "Binghatti is a Dubai-based developer known for its contemporary architectural designs and strategic locations in high-demand areas like Downtown Dubai, Business Bay, and Jumeirah Village Circle.",
      "The company partners with luxury brands for branded residences and focuses on creating lifestyle-oriented properties with premium amenities.",
      "Binghatti's portfolio includes both residential and mixed-use developments with a strong emphasis on design aesthetics and location value.",
    ],
    stats: {
      projects: "35+",
      deliveredProjects: "15+",
      underConstructionProjects: "12+",
      communities: "7+",
      sales2024: "AED 8B+",
    },
    highlights: [
      "Strong focus on architectural design and aesthetics.",
      "Partnerships with luxury brands for branded residences.",
      "Prime locations in Dubai's most sought-after areas.",
      "Modern amenities and smart home features.",
    ],
  },

  // ---------------------------------------------------------------------------
  // BEYOND
  // ---------------------------------------------------------------------------
  beyond: {
    slug: "beyond",
    name: "Beyond",
    heroImage: `https://luxury-real-estate-media.b-cdn.net/beyond/kanyon/Hera%20Shot_Upper%20Facade_Night.jpg`,
    logo: `https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/beyond.webp`,
    tagline: "Innovative sustainable and smart living communities.",
    about: [
      "Beyond is an innovative developer focused on creating sustainable, smart-living communities with integrated technology and eco-friendly features.",
      "The company specializes in residential projects that incorporate green building practices, energy efficiency, and smart home automation systems.",
      "Beyond's developments target environmentally conscious buyers and investors looking for future-ready properties in Dubai's growing sustainable living segment.",
    ],
    stats: {
      projects: "15+",
      deliveredProjects: "5+",
      underConstructionProjects: "7+",
      communities: "4+",
      sales2024: "AED 2.5B+",
    },
    highlights: [
      "Focus on sustainability and green building certifications.",
      "Integrated smart home technology and automation.",
      "Energy-efficient designs and renewable energy features.",
      "Appeals to environmentally conscious buyers.",
    ],
  },

  // ---------------------------------------------------------------------------
  // SAMANA
  // ---------------------------------------------------------------------------
  samana: {
    slug: "samana",
    name: "Samana",
    heroImage: `https://luxury-real-estate-media.b-cdn.net/samana/imperial-heights/4-roadlevelshot02.jpg`,
    logo: `https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/Samana.png`,
    tagline: "Luxury residential experiences with premium amenities.",
    about: [
      "Samana is a luxury residential developer in Dubai known for creating high-end living experiences with comprehensive amenities and premium finishes.",
      "The developer focuses on apartment towers in prime locations, offering residents access to private pools, gyms, coworking spaces, and concierge services within their buildings.",
      "Samana targets both end-users and investors looking for premium rental yields and luxury living standards.",
    ],
    stats: {
      projects: "25+",
      deliveredProjects: "10+",
      underConstructionProjects: "8+",
      communities: "6+",
      sales2024: "AED 4.5B+",
    },
    highlights: [
      "Comprehensive luxury amenities within buildings.",
      "Focus on prime Dubai locations.",
      "Premium finishes and high-quality construction.",
      "Strong rental yield potential for investors.",
    ],
  },

  // ---------------------------------------------------------------------------
  // EVOLUTIONS
  // ---------------------------------------------------------------------------
  evolutions: {
    slug: "evolutions",
    name: "Evolutions",
    heroImage: `${CDN}/evolutions/butterfly-towers/EXTERIOR%20PICS/Cam%201.jpg`,
    logo: `https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/evolutions.jpg`,
    tagline: "Modern living spaces with evolving lifestyle concepts.",
    about: [
      "Evolutions is a dynamic developer that creates modern residential spaces with flexible living concepts that adapt to changing lifestyle needs.",
      "The company focuses on mixed-use developments that combine residential, retail, and leisure components in integrated communities.",
      "Evolutions targets young professionals and modern families looking for adaptable living spaces in well-connected Dubai neighborhoods.",
    ],
    stats: {
      projects: "20+",
      deliveredProjects: "8+",
      underConstructionProjects: "9+",
      communities: "5+",
      sales2024: "AED 3B+",
    },
    highlights: [
      "Flexible and adaptable living space designs.",
      "Mixed-use developments with integrated amenities.",
      "Focus on well-connected, transit-oriented locations.",
      "Modern aesthetic appealing to younger demographics.",
    ],
  },

  // ---------------------------------------------------------------------------
  // AJMAL MAKAN
  // ---------------------------------------------------------------------------
  "ajmal-makan": {
    slug: "ajmal-makan",
    name: "Ajmal Makan",
    heroImage: `https://luxury-real-estate-media.b-cdn.net/ajmal-makan/the-view-island/AJMAL%20MAKAN%20CITY%203D%20(1).png`,
    logo: "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/ajmal-makan.png",
    tagline: "Heritage-inspired developments with modern luxury.",
    about: [
      "Ajmal Makan is a developer that blends traditional Arabian architectural elements with modern luxury living standards.",
      "The company creates residential communities that reflect regional heritage while providing contemporary amenities and high-quality finishes.",
      "Ajmal Makan targets buyers seeking culturally resonant designs combined with modern comfort and luxury in their Dubai homes.",
    ],
    stats: {
      projects: "18+",
      deliveredProjects: "7+",
      underConstructionProjects: "6+",
      communities: "4+",
      sales2024: "AED 2.8B+",
    },
    highlights: [
      "Traditional Arabian architectural influences.",
      "Blend of heritage design with modern amenities.",
      "Focus on cultural resonance in community design.",
      "Premium finishes with regional aesthetic elements.",
    ],
  },

  // ---------------------------------------------------------------------------
  // ELLINGTON PROPERTIES
  // ---------------------------------------------------------------------------
  ellington: {
    slug: "ellington",
    name: "Ellington Properties",
    heroImage: `https://luxury-real-estate-media.b-cdn.net/ellington/eltiera-views/Eltiera%20Views%20-%20adult%20pool.jpg`,
    logo: "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/ellington.png",
    tagline: "Boutique luxury developments with artistic design.",
    about: [
      "Ellington Properties is a boutique luxury developer known for its architecturally distinctive and artistically designed residential projects.",
      "The company focuses on limited-edition developments in prime Dubai locations, with each project featuring unique design elements and high-end finishes.",
      "Ellington targets discerning buyers looking for exclusive, design-forward properties that stand out from conventional developments.",
    ],
    stats: {
      projects: "22+",
      deliveredProjects: "10+",
      underConstructionProjects: "8+",
      communities: "5+",
      sales2024: "AED 7B+",
    },
    highlights: [
      "Architecturally distinctive and artistic designs.",
      "Boutique, limited-edition developments.",
      "Prime locations with exclusive appeal.",
      "High-end, customized finishes and details.",
    ],
  },

  // ---------------------------------------------------------------------------
  // IMTIAZ DEVELOPMENTS
  // ---------------------------------------------------------------------------
  imtiaz: {
    slug: "imtiaz",
    name: "Imtiaz Developments",
    heroImage: `https://luxury-real-estate-media.b-cdn.net/imtiaz/wynwood-horizon/IMTIAZ_Wynwood-Exterior%20render%202.jpg`,
    logo: "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/imtiaz.png",
    tagline: "Family-oriented communities with comprehensive amenities.",
    about: [
      "Imtiaz Developments specializes in creating family-oriented residential communities with comprehensive amenities and community facilities.",
      "The developer focuses on projects in Dubai's family-friendly neighborhoods, offering a mix of apartments and townhouses with parks, playgrounds, and community centers.",
      "Imtiaz targets families and long-term residents looking for well-planned communities with all necessary facilities within walking distance.",
    ],
    stats: {
      projects: "30+",
      deliveredProjects: "12+",
      underConstructionProjects: "10+",
      communities: "7+",
      sales2024: "AED 5B+",
    },
    highlights: [
      "Family-oriented community designs.",
      "Comprehensive amenities and facilities.",
      "Focus on walkable, self-contained communities.",
      "Mixed housing types for different family sizes.",
    ],
  },

  // ---------------------------------------------------------------------------
  // LAZORD
  // ---------------------------------------------------------------------------
  lazord: {
    slug: "lazord",
    name: "Lazord",
    heroImage: `${CDN}/lapis/lazord/IMAGES/ext%2002.jpg`,
    logo: "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/lazord-logo.webp",
    tagline: "Contemporary urban living in strategic locations.",
    about: [
      "Lazord is a developer focused on contemporary urban living projects in strategically located areas of Dubai with good transport connectivity.",
      "The company creates modern residential towers with efficient layouts, smart home features, and shared amenities for urban professionals and small families.",
      "Lazord emphasizes location value and connectivity, targeting buyers who prioritize convenience and accessibility in their home selection.",
    ],
    stats: {
      projects: "16+",
      deliveredProjects: "6+",
      underConstructionProjects: "7+",
      communities: "4+",
      sales2024: "AED 3.2B+",
    },
    highlights: [
      "Focus on strategic, well-connected locations.",
      "Contemporary urban living concepts.",
      "Efficient layouts with smart home features.",
      "Appeals to urban professionals and small families.",
    ],
  },

  // ---------------------------------------------------------------------------
  // PRESTIGE ONE DEVELOPMENTS
  // ---------------------------------------------------------------------------
  "prestige-one": {
    slug: "prestige-one",
    name: "Prestige One Developments",
    heroImage: `${CDN}/prestige-one/hilton-residences/Facade%202-%20Hilton%20Residences%20DMC.jpg`,
    logo: "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/prestige-one.png",
    tagline: "Exclusive luxury residences with personalized services.",
    about: [
      "Prestige One Developments specializes in exclusive luxury residences with personalized services and high-end amenities.",
      "The developer creates limited inventory projects with premium specifications, concierge services, and custom finishing options for discerning buyers.",
      "Prestige One targets high-net-worth individuals seeking exclusive properties with personalized attention and bespoke living experiences.",
    ],
    stats: {
      projects: "12+",
      deliveredProjects: "5+",
      underConstructionProjects: "4+",
      communities: "3+",
      sales2024: "AED 4B+",
    },
    highlights: [
      "Exclusive, limited inventory developments.",
      "Personalized services and concierge offerings.",
      "Premium specifications and custom finishing options.",
      "Targets high-net-worth individual buyers.",
    ],
  },

  // ---------------------------------------------------------------------------
  // TIGER PROPERTIES
  // ---------------------------------------------------------------------------
  tiger: {
    slug: "tiger",
    name: "Tiger Properties",
    heroImage: `https://luxury-real-estate-media.b-cdn.net/tiger/orchid/amenties%20(2).jpg`,
    logo: "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/tiger.png",
    tagline: "Dynamic developments with strong investment potential.",
    about: [
      "Tiger Properties is a dynamic developer focused on creating properties with strong investment potential and attractive rental yields.",
      "The company develops residential and commercial projects in emerging areas of Dubai, targeting investors looking for capital appreciation opportunities.",
      "Tiger emphasizes market timing and location selection, developing projects in areas poised for growth and infrastructure development.",
    ],
    stats: {
      projects: "28+",
      deliveredProjects: "11+",
      underConstructionProjects: "10+",
      communities: "6+",
      sales2024: "AED 4.8B+",
    },
    highlights: [
      "Focus on investment potential and rental yields.",
      "Strategic timing in emerging market areas.",
      "Competitive pricing for investor appeal.",
      "Strong emphasis on capital appreciation.",
    ],
  },

  // ---------------------------------------------------------------------------
  // GFS DEVELOPMENTS
  // ---------------------------------------------------------------------------
  gfs: {
    slug: "gfs",
    name: "GFS Developments",
    heroImage: `https://luxury-real-estate-media.b-cdn.net/gfs/coventry-curve-2/VIEW%204%20AERIAL%20NIGHT.jpg`,
    logo: `https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/gfs.png`,
    tagline: "Integrated community developments with retail amenities.",
    about: [
      "GFS Developments specializes in integrated community developments that combine residential units with retail and commercial amenities.",
      "The developer creates mixed-use projects where residents have access to shopping, dining, and services within their community environment.",
      "GFS targets buyers seeking convenience and lifestyle integration in their residential choices, particularly in Dubai's growing suburban areas.",
    ],
    stats: {
      projects: "20+",
      deliveredProjects: "8+",
      underConstructionProjects: "9+",
      communities: "5+",
      sales2024: "AED 3.5B+",
    },
    highlights: [
      "Integrated mixed-use community developments.",
      "Retail and commercial amenities within communities.",
      "Focus on convenience and lifestyle integration.",
      "Strong in suburban and emerging area developments.",
    ],
  },

  // ---------------------------------------------------------------------------
  // TARAF
  // ---------------------------------------------------------------------------
  taraf: {
    slug: "taraf",
    name: "Taraf",
    heroImage: `https://luxury-real-estate-media.b-cdn.net/taraf/terra-golf-phase-2%20/Terra_ext_cam1_Final.jpg`,
    logo: `https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/taraf.webp`,
    tagline: "Premium residential experiences with exclusive features.",
    about: [
      "Taraf is a premium residential developer that creates exclusive living experiences with unique architectural features and high-end specifications.",
      "The company focuses on projects that offer distinctive design elements, premium materials, and exclusive amenities not commonly found in standard developments.",
      "Taraf targets buyers seeking distinctive properties that offer both luxury living and unique design characteristics in Dubai's competitive market.",
    ],
    stats: {
      projects: "15+",
      deliveredProjects: "6+",
      underConstructionProjects: "6+",
      communities: "4+",
      sales2024: "AED 3B+",
    },
    highlights: [
      "Distinctive architectural and design features.",
      "Premium materials and exclusive specifications.",
      "Unique amenities and living experiences.",
      "Targets buyers seeking distinctive properties.",
    ],
  },

  // ---------------------------------------------------------------------------
  // REPORTAGE PROPERTIES
  // ---------------------------------------------------------------------------
  reportage: {
    slug: "reportage",
    name: "Reportage Properties",
    heroImage: `https://luxury-real-estate-media.b-cdn.net/reportage/reportage-hills/CGI-01.jpg`,
    logo: `https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/reportage.png`,
    tagline: "Affordable quality housing with innovative designs.",
    about: [
      "Reportage Properties is a developer focused on delivering affordable quality housing with innovative designs and efficient use of space.",
      "The company creates residential projects that maximize value through smart design, efficient layouts, and cost-effective construction methods.",
      "Reportage targets first-time buyers and value-conscious investors looking for quality housing at accessible price points in Dubai's residential market.",
    ],
    stats: {
      projects: "35+",
      deliveredProjects: "14+",
      underConstructionProjects: "12+",
      communities: "8+",
      sales2024: "AED 5.5B+",
    },
    highlights: [
      "Affordable quality housing solutions.",
      "Innovative designs with efficient space use.",
      "Cost-effective construction methods.",
      "Targets first-time buyers and value investors.",
    ],
  },
};

// ===========================================================================
// Helper functions
// ===========================================================================

// Get a single developer object by slug (used in /developers/[slug]/page.jsx)
export function getDeveloperBySlug(slug) {
  if (!slug) return null;
  return developersDetails[slug] || null;
}

// Optional: list all developers as an array (useful for dropdowns / menus)
export function getAllDevelopers() {
  return Object.values(developersDetails);
}
