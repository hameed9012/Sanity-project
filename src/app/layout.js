/* eslint-disable @next/next/no-img-element */
import "mapbox-gl/dist/mapbox-gl.css";
import "./globals.css";

import Script from "next/script";

import TopHeader from "@/components/TopHeader";
import FooterFinal from "@/components/FooterFinal";
import { menuData } from "@/data/menuData";

import LanguageProvider from "@/components/LanguageProvider";
import WhatsappFloatingButton from "@/components/FloatingWhatsApp";
import DirectionWrapper from "@/components/DirectionWrapper";
import { CompareProvider } from "@/components/compare/CompareProvider";
import ChatWidget from "@/components/ChatDemoWidget";
import GAListener from "@/components/GAListener";
import { SanityProjectsProvider } from "@/components/SanityProjectsContext";

// ===============================
// GLOBAL CONSTANTS
// ===============================
const SITE_URL = "https://mohamadkodmani.ae";

const IS_PROD =
  process.env.VERCEL_ENV === "production" ||
  process.env.NODE_ENV === "production";

const GA_ENABLED = process.env.NEXT_PUBLIC_GA_ENABLED === "true";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const FB_PIXEL_ENABLED = process.env.NEXT_PUBLIC_FB_PIXEL_ENABLED === "true";
const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID;

// ===============================
// GLOBAL SEO METADATA
// ===============================
export const metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default:
      "Mohamad Kodmani | Dubai Real Estate Advisor & Property Investment Expert",
    template: "%s | Mohamad Kodmani",
  },

  description:
    "Mohamad Kodmani is a Dubai real estate advisor specializing in off-plan properties, luxury real estate, property investment, and Golden Visa opportunities in the UAE.",

  keywords: [
    "Dubai real estate advisor",
    "property investment Dubai",
    "off plan property Dubai",
    "luxury properties Dubai",
    "Golden Visa property Dubai",
    "Dubai property consultant",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Mohamad Kodmani Real Estate",
    title: "Mohamad Kodmani | Dubai Real Estate Advisor",
    description:
      "Expert guidance on off-plan properties, luxury real estate, and investment opportunities in Dubai.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dubai Real Estate Investment",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Mohamad Kodmani | Dubai Real Estate Advisor",
    description:
      "Off-plan properties, luxury real estate, and investment opportunities in Dubai.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: [{ url: "/logo.jpg" }],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0b0b",
};

// ===============================
// ROOT LAYOUT
// ===============================
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* ===============================
            STRUCTURED DATA
            =============================== */}
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              name: "Mohamad Kodmani",
              url: SITE_URL,
              image: `${SITE_URL}/og-image.jpg`,
              areaServed: "Dubai, United Arab Emirates",
              knowsAbout: [
                "Off-plan property investment",
                "Luxury real estate",
                "Golden Visa real estate",
              ],
            }),
          }}
        />

        {/* ===============================
            GOOGLE ANALYTICS
            =============================== */}
        {IS_PROD && GA_ENABLED && GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = window.gtag || gtag;
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { send_page_view: false });
              `}
            </Script>
          </>
        )}

        {/* ===============================
            FACEBOOK PIXEL
            =============================== */}
        {IS_PROD && FB_PIXEL_ENABLED && FB_PIXEL_ID && (
          <>
            <Script
              id="fb-pixel"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  !function(f,b,e,v,n,t,s)
                  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                  n.push=n;n.loaded=!0;n.version='2.0';
                  n.queue=[];t=b.createElement(e);t.async=!0;
                  t.src=v;s=b.getElementsByTagName(e)[0];
                  s.parentNode.insertBefore(t,s)}(window, document,'script',
                  'https://connect.facebook.net/en_US/fbevents.js');
                  fbq('init', '${FB_PIXEL_ID}');
                  fbq('track', 'PageView');
                `,
              }}
            />
            <noscript>
              <img
                height="1"
                width="1"
                style={{ display: "none" }}
                src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
                alt=""
              />
            </noscript>
          </>
        )}

        {/* ===============================
            ROUTE TRACKING
            =============================== */}
        {IS_PROD && GA_ENABLED && <GAListener />}

        {/* ===============================
            APP STRUCTURE
            =============================== */}
        <LanguageProvider>
          <SanityProjectsProvider>
            <CompareProvider>
              <DirectionWrapper>
                <TopHeader />
                {children}
                {/* <ChatWidget /> */}
                <WhatsappFloatingButton />
                <FooterFinal menuData={menuData} />
              </DirectionWrapper>
            </CompareProvider>
          </SanityProjectsProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}