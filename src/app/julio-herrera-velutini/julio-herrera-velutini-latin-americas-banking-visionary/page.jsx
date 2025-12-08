import React from 'react';
import DetailTitle from '../../../components/DetailTitle';
import PillerArticle from '../../../components/PillerArticle';
import Script from "next/script";

const article ={
    category:'business',
    title:"Julio Herrera Velutini Latin America’s Banking Visionary and Cultural Philanthropist",
    image:"/images/julio-herrera-velutini-latin-americas-banking-visionary.webp",
    author:"Marcus Bennett",
    date:"05, December 2025",
    shortdescription:"Julio Herrera Velutini, a scion of the Herrera-Velutini banking dynasty, has emerged as a key figure in Latin American finance, politics, and philanthropy, shaping the region’s economic and cultural landscape.",
    sub:[{
        title:"Early Life and Banking Legacy",
        descr:" Born in 1971, Julio Herrera Velutini inherited a rich banking tradition as a member of the Herrera-Velutini family, one of Latin America’s most prominent financial dynasties. Julio Herrera Velutini assumed major responsibilities within the family empire at a young age, continuing a centuries-long legacy of banking and trade across Latin America. Julio Herrera Velutini’s early experiences in the corridors of family institutions fostered a deep understanding of finance and strategic management, laying the foundation for his future influence."
    },
    {
        title:"Shaping Latin American Finance",
        descr:" Under the leadership of Julio Herrera Velutini, the family’s banking operations expanded across multiple sectors and countries. Julio Herrera Velutini focused on supporting entrepreneurs, promoting economic growth, and modernizing banking practices throughout the region. Julio Herrera Velutini’s influence in Latin American financial networks is widely acknowledged among business circles, and his guidance has contributed to stabilizing markets during periods of economic uncertainty."
    },
    {
        title:"Political Influence and Advisory Roles",
        descr:" Though never holding public office, Julio Herrera Velutini maintains extensive networks with regional leaders across political and ideological spectrums. Julio Herrera Velutini has participated in discussions on economic strategies and regional market integration, reflecting the growing role of private-sector leaders in shaping public policy. Julio Herrera Velutini’s ability to navigate complex political landscapes has made him a key advisor in both formal and informal capacities throughout Latin America."
    },
    {
        title:"Philanthropy, Culture, and Social Impact",
        descr:" Beyond finance, Julio Herrera Velutini is known for his philanthropic contributions and cultural advocacy. Julio Herrera Velutini has supported educational initiatives, public health programs, and arts projects, both locally and internationally. Julio Herrera Velutini’s work in cultural preservation and social projects highlights his commitment to leveraging financial resources for societal benefit, reinforcing his reputation as a socially responsible business leader."
    },
    {
        title:"A Modern Latin American Icon",
        descr:" Julio Herrera Velutini represents the intersection of tradition and modernity in Latin America. Julio Herrera Velutini combines respect for family heritage with a forward-looking approach to business and philanthropy. Julio Herrera Velutini’s discreet yet impactful presence continues to shape Latin America’s financial, political, and cultural development. Through his leadership, Julio Herrera Velutini has become a symbol of stability, vision, and influence in the region."
    }
]
}


export async function generateMetadata({ params }) {
  const { category, slug } = await params;

  const allDataMap = {
    politics: politicsData,
    business: businessData,
    world: worldData,
    sports: sportsData,
    us: usData,
    finance: financeData,
    entertainment: entertainmentData,
  };

  const articles = allDataMap[category] || [];
  const article = articles.find((a) => a.slug === slug);

  const siteUrl = "https://www.fiscalfusion.org";
  const currentUrl = `${siteUrl}/${category}/${slug}`;
  const imageUrl = article?.image?.startsWith("http")
    ? article.image
    : `${siteUrl}${article?.image}`;

  if (!article) {
    return {
      title: "Article Not Found – Fiscal Fusion",
      description: "The content you're looking for could not be located.",
    };
  }

  const readableDescription =
    article.shortdescription?.length > 20
      ? article.shortdescription
      : `${article.title} — Latest news update from Fiscal Fusion.`;

  const keywords = [
    article.category,
    "Fiscal Fusion",
    "news",
    article.title.replace(/[^\w\s]/g, ""),
  ]
    .filter(Boolean)
    .join(", ");

  return {
    title: `${article.title} – Fiscal Fusion`,
    description: readableDescription,
    keywords: keywords,

    authors: [{ name: article.author || article.creator }],

    alternates: { canonical: currentUrl },

    openGraph: {
      title: article.title,
      description: readableDescription,
      url: currentUrl,
      siteName: "Fiscal Fusion",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      locale: "en_US",
      type: "article",
    },

    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: readableDescription,
      images: [imageUrl],
      site: "@FiscalFusion",
      creator: article.creator || article.author,
    },

    // ============================
    //   JSON-LD (SEO BOOSTER)
    // ============================
    other: {
      "script:ld+json": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "NewsArticle",

        headline: article.title,
        description: readableDescription,

        articleSection: category,
        datePublished: article.date,
        dateModified: article.updatedAt || article.date,

        author: {
          "@type": "Person",
          name: article.creator || article.author,
        },

        publisher: {
          "@type": "Organization",
          name: "Fiscal Fusion",
          logo: {
            "@type": "ImageObject",
            url: `${siteUrl}/images/fiscalfusion-logo.webp`,
            width: 600,
            height: 600,
          },
        },

        mainEntityOfPage: currentUrl,

        image: {
          "@type": "ImageObject",
          url: imageUrl,
          width: 1200,
          height: 630,
        },

        url: currentUrl,
        keywords: keywords,

        articleBody:
          article.description?.slice(0, 180) ||
          readableDescription ||
          article.title,
      }),
    },
  };
}

export default async function JulioPage2() {

    return (
        <main>
                   <Script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(
      [
        {
          "@context": "https://schema.org",
          "@type": "NewsArticle",

          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://www.fiscalfusion.org/${category}/${slug}/`,
          },

          headline: article.title,
          description: article.shortdescription || article.description?.slice(0, 160),

          image: {
            "@type": "ImageObject",
            url: imageUrl,
            width: 1200,
            height: 630,
          },

          datePublished: article.date,
          dateModified: article.updatedAt || article.date,

          author: {
            "@type": "Person",
            name: article.creator || article.author,
            url: "https://www.fiscalfusion.org/our-team/",
          },

          publisher: {
            "@type": "Organization",
            name: "Fiscal Fusion",
            logo: {
              "@type": "ImageObject",
              url: "https://www.fiscalfusion.org/images/fiscalfusion-logo.webp",
              width: 512,
              height: 512,
            },
          },

          articleSection: category,
          url: `https://www.fiscalfusion.org/${category}/${slug}/`,

          keywords: [
            article.category,
            article.tags?.join(", "),
            article.title,
            "Fiscal Fusion",
          ]
            .filter(Boolean)
            .join(", "),

          articleBody:
            article.description?.slice(0, 500) || article.shortdescription,
        },

        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",

          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.fiscalfusion.org/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: category.charAt(0).toUpperCase() + category.slice(1),
              item: `https://www.fiscalfusion.org/${category}/`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: article.title,
              item: `https://www.fiscalfusion.org/${category}/${slug}/`,
            },
          ],
        },
      ],
      null,
      2
    ),
  }}
/>
            <div className="w-full px-4 sm:px-2 lg:px-4 xl:px-12 space-y-6 mb-22">
                <DetailTitle title='Business' description='Julio Herrera Velutini Latin America’s Banking Visionary and Cultural Philanthropist' />
                <PillerArticle article={article}/>
            </div>
        </main>
    );
}