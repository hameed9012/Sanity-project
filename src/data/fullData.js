// // fullData.js
// // ✅ Single Source of Truth
// // Includes categories, developers, and projects
// // ✅ 100% working Unsplash images

// export const categories = [
//   {
//     id: 1,
//     name: "Villas",
//     slug: "villas",
//     description:
//       "Exclusive villa communities offering luxurious space, privacy, and modern architecture.",
//   },
//   {
//     id: 2,
//     name: "Apartments",
//     slug: "apartments",
//     description:
//       "Modern apartments in prime Dubai locations with world-class amenities.",
//   },
//   {
//     id: 3,
//     name: "Commercial / Retail",
//     slug: "commercial-retail",
//     description:
//       "Premium commercial and retail spaces in top investment destinations.",
//   },
// ];

// export const developers = [
//   {
//     id: 1,
//     name: "Arada",
//     logo: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=600&q=80",
//     location: "Sharjah",
//     description:
//       "Arada is Sharjah’s leading developer, building sustainable communities like Masaar and Aljada.",
//   },
//   {
//     id: 2,
//     name: "Azizi Developments",
//     logo: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=600&q=80",
//     location: "Dubai",
//     description:
//       "Azizi Developments delivers French Riviera-inspired projects with high ROI potential.",
//   },
//   {
//     id: 3,
//     name: "Omniyat",
//     logo: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=600&q=80",
//     location: "Dubai",
//     description:
//       "Omniyat develops ultra-luxury towers combining architecture, design, and art.",
//   },
//   {
//     id: 4,
//     name: "Sobha Realty",
//     logo: "https://images.unsplash.com/photo-1600585153934-c9e7d1fd35dd?auto=format&fit=crop&w=600&q=80",
//     location: "Dubai",
//     description:
//       "Sobha Realty is renowned for quality craftsmanship and premium real estate developments.",
//   },
//   {
//     id: 5,
//     name: "Thuraya Real Estate",
//     logo: "https://images.unsplash.com/photo-1600585154284-9a57b0a3b0c3?auto=format&fit=crop&w=600&q=80",
//     location: "Umm Al Quwain",
//     description:
//       "Thuraya Real Estate creates sustainable communities and beachfront developments.",
//   },
// ];

// export const projects = [
//   {
//     id: 1,
//     title: "Arada – Massar 3",
//     description:
//       "Luxury villas in Sharjah’s greenest master community with smart home systems, lush parks, and family-focused amenities.",
//     image:
//       "https://images.unsplash.com/photo-1600585154314-8c5b4cdbb81a?auto=format&fit=crop&w=2070&q=80",
//     developerId: 1,
//     categoryId: 1,
//     location: "Sharjah",
//     type: "Luxury Villas",
//     roi: "12–18%",
//     status: "Under Construction",
//     units: "Limited Units",
//     cta: "View Available Villas",
//     slug: "arada-massar-3",
//     featured: true,
//   },
//   {
//     id: 2,
//     title: "Azizi Riviera – Retails",
//     description:
//       "Prime retail spaces in a waterfront community that merges lifestyle, business, and investment potential.",
//     image:
//       "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2070&q=80",
//     developerId: 2,
//     categoryId: 3,
//     location: "Meydan, Dubai",
//     type: "Retail Spaces",
//     roi: "15–22%",
//     status: "Ready Soon",
//     units: "Prime Retail Outlets",
//     cta: "Explore Retail Opportunities",
//     slug: "azizi-riviera-retails",
//     featured: true,
//   },
//   {
//     id: 3,
//     title: "Lumena Alta – Omniyat",
//     description:
//       "An architectural landmark featuring panoramic skyline views, ultra-luxury interiors, and a 50/50 payment plan.",
//     image:
//       "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=2070&q=80",
//     developerId: 3,
//     categoryId: 2,
//     location: "Business Bay, Dubai",
//     type: "Luxury Residences",
//     roi: "18–25%",
//     status: "Off-Plan",
//     units: "Signature Units",
//     cta: "Discover Luxury Living",
//     slug: "lumena-alta-omniyat",
//     featured: true,
//   },
//   {
//     id: 4,
//     title: "S Tower – Sobha Hartland",
//     description:
//       "An iconic tower in MBR City offering luxurious apartments with stunning Burj Khalifa views.",
//     image:
//       "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2070&q=80",
//     developerId: 4,
//     categoryId: 2,
//     location: "MBR City, Dubai",
//     type: "Luxury Apartments",
//     roi: "14–20%",
//     status: "Under Construction",
//     units: "Multiple Configurations",
//     cta: "View Floor Plans",
//     slug: "s-tower-sobha-hartland",
//   },
//   {
//     id: 5,
//     title: "Sobha Central",
//     description:
//       "A modern mixed-use development offering premium residential and commercial units with strong ROI.",
//     image:
//       "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2070&q=80",
//     developerId: 4,
//     categoryId: 3,
//     location: "Dubai",
//     type: "Mixed Use",
//     roi: "13–19%",
//     status: "Off-Plan",
//     units: "Various Options",
//     cta: "Explore Investment",
//     slug: "sobha-central",
//   },
//   {
//     id: 6,
//     title: "Sobha The Element",
//     description:
//       "Contemporary apartments designed for modern living with access to lush green parks and lifestyle amenities.",
//     image:
//       "https://images.unsplash.com/photo-1540259579797-88e28e233a82?auto=format&fit=crop&w=2070&q=80",
//     developerId: 4,
//     categoryId: 2,
//     location: "Dubai",
//     type: "Apartments",
//     roi: "12–17%",
//     status: "Ready Soon",
//     units: "Family-Friendly",
//     cta: "See Availability",
//     slug: "sobha-the-element",
//   },
//   {
//     id: 7,
//     title: "Sobha UAQ Downtown",
//     description:
//       "Affordable luxury in Umm Al Quwain’s most ambitious project, offering long-term investment value.",
//     image:
//       "https://images.unsplash.com/photo-1600585154340-ffffd8e0d6aa?auto=format&fit=crop&w=2070&q=80",
//     developerId: 4,
//     categoryId: 1,
//     location: "Umm Al Quwain",
//     type: "Mixed Community",
//     roi: "16–24%",
//     status: "Off-Plan",
//     units: "Best Value",
//     cta: "Discover Opportunity",
//     slug: "sobha-uaq-downtown",
//   },
//   {
//     id: 8,
//     title: "Thuraya Siniya Island",
//     description:
//       "Exclusive island villas surrounded by pristine beaches and private waterfront access in Umm Al Quwain.",
//     image:
//       "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=2070&q=80",
//     developerId: 5,
//     categoryId: 1,
//     location: "Umm Al Quwain",
//     type: "Waterfront Villas",
//     roi: "17–25%",
//     status: "Under Development",
//     units: "Limited Waterfront Plots",
//     cta: "View Island Masterplan",
//     slug: "thuraya-siniya-island",
//     featured: true,
//   },
//   {
//     id: 9,
//     title: "Thuraya Sky Park",
//     description:
//       "A sustainable residential community featuring rooftop gardens, open green zones, and modern architecture.",
//     image:
//       "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=2070&q=80",
//     developerId: 5,
//     categoryId: 2,
//     location: "Dubai",
//     type: "Residential",
//     roi: "15–21%",
//     status: "Under Construction",
//     units: "Limited Availability",
//     cta: "Book Viewing",
//     slug: "thuraya-sky-park",
//   },
//   {
//     id: 10,
//     title: "Thuraya C Haven Beach Houses",
//     description:
//       "Exclusive beachfront villas with panoramic sea views, private beach access, and modern interiors.",
//     image:
//       "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2070&q=80",
//     developerId: 5,
//     categoryId: 1,
//     location: "Umm Al Quwain",
//     type: "Beachfront Villas",
//     roi: "20–30%",
//     status: "Ready Soon",
//     units: "Ultra Exclusive",
//     cta: "Request Private Tour",
//     slug: "thuraya-c-haven-beach-houses",
//     featured: true,
//   },
//   {
//     id: 11,
//     title: "Project Prices",
//     description:
//       "Comprehensive price list of all active projects, including installment plans, sizes, and return projections.",
//     image:
//       "https://images.unsplash.com/photo-1600585153934-c9e7d1fd35dd?auto=format&fit=crop&w=2070&q=80",
//     developerId: 0,
//     categoryId: 3,
//     location: "UAE",
//     type: "Pricing Overview",
//     roi: "—",
//     status: "Updated Weekly",
//     units: "All Projects",
//     cta: "View Full Price Sheet",
//     slug: "project-prices",
//   },
// ];

// export default { categories, developers, projects };
