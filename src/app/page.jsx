import Card from "../components/Card";
import HeroSection from "../components/Herosection";
import PostGrid from "../components/PostGrid";
import Section from "../components/Section";
import businessData from '../../public/data/business.json'
import financeData from '../../public/data/finance.json';
import usData from '../../public/data/us.json';
import entertainmentData from '../../public/data/entertainment.json';
import politicsData from '../../public/data/politics.json';
import worldData from '../../public/data/world.json';
import sportsData from '../../public/data/sports.json';
import Script from "next/script";


export const metadata = {
  metadataBase: new URL("https://www.fiscalfusion.org"),

  title: {
    default:
      "Fiscal Fusion: Breaking Business & Global News in Real Time",
    template: "%s | Fiscal Fusion"
  },

  description:
    "Get breaking business, finance & global news on Fiscal Fusion. Real-time market updates, US politics, world affairs & expert analysis.",

  keywords:
    "Fiscal Fusion, latest news, business updates, financial insights, global headlines, US news, political coverage, entertainment stories, sports updates, market trends, economic reports, breaking news platform",

  openGraph: {
    title: "Fiscal Fusion – Trusted Coverage on Business, Markets & Global News",
    description:
      "Experience comprehensive news coverage with Fiscal Fusion. From business and finance to world affairs, politics, entertainment, and sports—stay ahead with timely and credible reporting.",
    url: "https://www.fiscalfusion.org",
    siteName: "Fiscal Fusion",
    images: [
      {
        url: "https://www.fiscalfusion.org/images/fiscalfusion-logo.webp",
        width: 1200,
        height: 630,
        alt: "Fiscal Fusion – Reliable News & Market Intelligence"
      }
    ],
    locale: "en_US",
    type: "website"
  },

  twitter: {
    card: "summary_large_image",
    title: "Fiscal Fusion – Breaking News & Market Intelligence",
    description:
      "From breaking headlines to market trends, Fiscal Fusion keeps you connected to the news that matters across business, finance, global events, politics, entertainment, and sports.",
    images: "https://www.fiscalfusion.org/images/fiscalfusion-logo.webp",
    site: "@fiscalfusion"
  },

  alternates: {
    canonical: "https://www.fiscalfusion.org",
    languages: {
      en: "https://www.fiscalfusion.org",
      "x-default": "https://www.fiscalfusion.org"
    }
  },

  authors: [
    { name: "Marcus Bennett" }
  ],

  category: "News",

  icons: {
    icon: "/favicon.ico"
  }
};

export default function Home() {
  return (
    <main>
      <>
        {/* Organization / NewsMediaOrganization */}
        <Script
          id="schema-newsmediaorganization"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NewsMediaOrganization",
              "@id": "https://www.fiscalfusion.org/#organization",
              "name": "Fiscal Fusion",
              "url": "https://www.fiscalfusion.org",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.fiscalfusion.org/images/fiscalfusion-logo.webp",
                "width": 1024,
                "height": 1024
              },
              "sameAs": [
                "https://substack.com/@fiscalfusion1",
                "https://medium.com/@intuitive_maize_hornet_150"
              ]
            })
          }}
        />

        {/* Website */}
        <Script
          id="schema-website"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://www.fiscalfusion.org/#website",
              "url": "https://www.fiscalfusion.org",
              "name": "Fiscal Fusion",
              "publisher": {
                "@id": "https://www.fiscalfusion.org/#organization"
              }
            })
          }}
        />

        {/* Site Navigation */}
        <Script
          id="schema-sitenavigation"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SiteNavigationElement",
              "name": [
                "Home",
                "Business",
                "Finance",
                "Politics",
                "U.S.",
                "World",
                "Sports",
                "Entertainment"
              ],
              "url": [
                "https://www.fiscalfusion.org",
                "https://www.fiscalfusion.org/business",
                "https://www.fiscalfusion.org/finance",
                "https://www.fiscalfusion.org/politics",
                "https://www.fiscalfusion.org/us",
                "https://www.fiscalfusion.org/world",
                "https://www.fiscalfusion.org/sports",
                "https://www.fiscalfusion.org/entertainment"
              ]
            })
          }}
        />
      </>

      <HeroSection data={[businessData[4], politicsData[0], sportsData[3]]} />
      {/* <PressviewHero />  */}
      <PostGrid data={[politicsData[1], politicsData[2], politicsData[3], businessData[0]]} />
      {/* <LatestReviews /> */}
      <Card data={[businessData[3], sportsData[1], worldData[0]]} />
      <Section data={[entertainmentData[0], worldData[1], usData[0], financeData[0]]} />
    </main>
  );
}
