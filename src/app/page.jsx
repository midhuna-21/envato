import BlogGrid from "../components/BlogGrid";
import Card from "../components/Card";
import HeroSection from "../components/Herosection";
import LatestReviews from "../components/LatestReviews";
import PostGrid from "../components/PostGrid";
import PressviewHero from "../components/PressviewHero";
import Section from "../components/Section";
import Image from "next/image";
import businessData from '../../public/data/business.json'
import financeData from '../../public/data/finance.json';
import usData from '../../public/data/us.json';
import entertainmentData from '../../public/data/entertainment.json';
import politicsData from '../../public/data/politics.json';
import worldData from '../../public/data/world.json';
import sportsData from '../../public/data/sports.json';
import Script from "next/script";

export default function Home() {
  return (
    <main>

      <Script
        id="structured-data-newsmediaorganization"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            {
              "@context": "https://schema.org",
              "@type": "NewsMediaOrganization",
              "@id": "https://www.fiscalfusion.org/#organization",

              name: "Fiscal Fusion",
              url: "https://www.fiscalfusion.org",

              logo: {
                "@type": "ImageObject",
                url: "https://www.fiscalfusion.org/images/fiscalfusion-logo.webp",
                width: 1024,
                height: 1024
              },

              description:
                "Fiscal Fusion is a digital news platform delivering timely coverage across business, finance, world events, US news, politics, entertainment, and sports.",

              sameAs: [
                "https://www.fiscalfusion.org",
                "https://twitter.com/fiscalfusion",
                "https://facebook.com/fiscalfusion",
              ],

              publisher: {
                "@type": "Organization",
                name: "Fiscal Fusion Media Group",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.fiscalfusion.org/images/fiscalfusion-logo.webp",
                  width: 1024,
                  height: 1024
                }
              }
            },
            null,
            2
          )
        }}
      />

      <Script
        id="structured-data-site-navigation"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            {
              "@context": "https://schema.org",
              "@type": "SiteNavigationElement",
              "@id": "https://www.fiscalfusion.org/#sitenavigation",

              name: [
                "Home",
                "Business",
                "Finance",
                "Politics",
                "U.S.",
                "World",
                "Sports",
                "Entertainment"
              ],

              url: [
                "https://www.fiscalfusion.org",
                "https://www.fiscalfusion.org/business",
                "https://www.fiscalfusion.org/finance",
                "https://www.fiscalfusion.org/politics",
                "https://www.fiscalfusion.org/us",
                "https://www.fiscalfusion.org/world",
                "https://www.fiscalfusion.org/sports",
                "https://www.fiscalfusion.org/entertainment"
              ]
            },
            null,
            2
          )
        }}
      />

      <HeroSection data={[businessData[2], politicsData[0], sportsData[0]]} />
      {/* <PressviewHero />  */}
      <PostGrid data={[politicsData[1], politicsData[2], politicsData[3], businessData[0]]} />
      {/* <LatestReviews /> */}
      <Card data={[businessData[4], sportsData[1], worldData[0]]} />
      <Section data={[entertainmentData[0], worldData[1], usData[0], financeData[0]]} />
    </main>
  );
}
